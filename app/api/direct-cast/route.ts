import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { auth } from "@/auth";
import { getUserById } from "@/helpers/read-db";
import { directCastBodySchema } from "@/features/direct-cast/schemas";

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session || !session.user || !session.user.id)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const user = await getUserById(session.user.id);

    if (!user || user.role !== "ADMIN") {
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

    const res = await fetch(
      "https://api.warpcast.com/v2/ext-send-direct-cast",
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${process.env.WARPCAST_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          recipientFid,
          message,
          idempotencyKey: randomUUID(), // ensures safe retries
        }),
      },
    );

    if (!res.ok) {
      const error = await res.json();
      console.error("Error sending DC:", error);
      return NextResponse.json(
        {
          error: error?.errors?.at(0)?.message || "Failed to send Direct Cast",
        },
        { status: res.status },
      );
    }

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    console.error("Error sending DC:", error);
    return NextResponse.json(
      { error: "Failed to send Direct Cast" },
      { status: 500 },
    );
  }
}
