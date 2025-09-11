import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { auth } from "@/auth";
import { getUserById } from "@/helpers/read-db";
import { directCastBodySchema } from "@/features/direct-cast/schemas";

// Retry sending DC up to 3 times
async function sendDirectCast(fid: number, message: string, retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(
        "https://api.warpcast.com/v2/ext-send-direct-cast",
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${process.env.WARPCAST_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            recipientFid: fid,
            message,
            idempotencyKey: randomUUID(),
          }),
        },
      );

      if (res.ok) {
        return { fid, success: true, attempts: attempt };
      }

      // Retry only for rate-limit (429) or server errors (>=500)
      if (res.status === 429 || res.status >= 500) {
        await new Promise((r) => setTimeout(r, 1000 * attempt));
        continue;
      }

      // Client-side error → no retry
      return { fid, success: false, status: res.status, attempts: attempt };
    } catch (err) {
      if (attempt < retries) {
        await new Promise((r) => setTimeout(r, 1000 * attempt));
        continue;
      }
      console.log(err);
      return {
        fid,
        success: false,
        error: "Something went wrong",
        attempts: attempt,
      };
    }
  }
}

// Run in batches to avoid overloading API
async function runInBatches<T>(
  items: T[],
  batchSize: number,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fn: (item: T) => Promise<any>,
) {
  const results = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    const settled = await Promise.allSettled(batch.map(fn));
    results.push(
      ...settled.map((r) =>
        r.status === "fulfilled"
          ? r.value
          : { success: false, error: r.reason },
      ),
    );
  }
  return results;
}

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session || !session.user || !session.user.id)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const user = await getUserById(session.user.id);

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    if (user.role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { WARPCAST_API_KEY } = process.env;

    if (!WARPCAST_API_KEY) {
      return NextResponse.json(
        { error: "variables is not set" },
        { status: 400 },
      );
    }

    const body = await req.json();

    const parsedData = directCastBodySchema.safeParse(body);

    if (!parsedData.success) {
      return NextResponse.json(
        { error: parsedData.error.message },
        { status: 400 },
      );
    }

    const { recipientFid, message } = parsedData.data;
    const recipients = [recipientFid];

    const results = await runInBatches(recipients, 50, (fid: number) =>
      sendDirectCast(fid, message),
    );

    return NextResponse.json({ results }, { status: 200 });

    // const res = await fetch(
    //   "https://api.warpcast.com/v2/ext-send-direct-cast",
    //   {
    //     method: "PUT",
    //     headers: {
    //       Authorization: `Bearer ${process.env.WARPCAST_API_KEY}`,
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       recipientFid,
    //       message,
    //       idempotencyKey: randomUUID(), // ensures safe retries
    //     }),
    //   },
    // );

    // if (!res.ok) {
    //   const error = await res.json();
    //   console.error("Error sending DC:", error);
    //   return NextResponse.json(
    //     {
    //       error: error?.errors?.at(0)?.message || "Failed to send Direct Cast",
    //     },
    //     { status: res.status },
    //   );
    // }

    // const data = await res.json();
    // return NextResponse.json(data, { status: res.status });
  } catch (error) {
    console.error("Error sending DC:", error);
    return NextResponse.json(
      { error: "Failed to send Direct Cast" },
      { status: 500 },
    );
  }
}
