import { NextResponse } from "next/server";
// import { auth } from "@/auth";
// import { PostSchemaDataType } from "@/features/cast/schemas/cast.schema";
// import { scheduleCastPostSchema } from "@/features/cast/schemas/scheduleCastPost.schema";
// import { getUserById } from "@/helpers/read-db";
// import db from "@/lib/db";

// export async function POST(request: Request) {
//   try {
//     const session = await auth();
//     if (!session || !session.user || !session.user.id) {
//       return NextResponse.json(
//         { error: "User not authenticated" },
//         { status: 401 },
//       );
//     }
//     const { id } = session.user;
//     const body = await request.json();
//     const parsedData = scheduleCastPostSchema.safeParse(body);
//     if (!parsedData.success) {
//       return NextResponse.json(
//         {
//           error: parsedData.error.message,
//         },
//         { status: 400 },
//       );
//     }

//     const { channelId, embeds, text, scheduledAt, status, userId } =
//       parsedData.data;

//     if (new Date() > scheduledAt) {
//       return NextResponse.json(
//         { error: "Date cannot be in the past" },
//         { status: 400 },
//       );
//     }

//     if (!text && !embeds) {
//       return NextResponse.json(
//         { error: "No text or embeds provided" },
//         { status: 400 },
//       );
//     }

//     if (text?.length === 0 && embeds?.length === 0) {
//       return NextResponse.json(
//         { error: "No text or embeds provided" },
//         { status: 400 },
//       );
//     }

//     if (userId !== id) {
//       return NextResponse.json(
//         { error: "User not authorized" },
//         { status: 403 },
//       );
//     }

//     const user = await getUserById(id);

//     if (!user) {
//       return NextResponse.json({ error: "User not found" }, { status: 404 });
//     }

//     if (!user.signerUuid) {
//       return NextResponse.json(
//         { error: "User does not have a signer" },
//         { status: 400 },
//       );
//     }

//     const postData: PostSchemaDataType = {
//       signerUuid: user.signerUuid || "example-signer-uuid",
//       status,
//       text,
//       userId,
//       channelId,
//       embeds, // remember url to uploaded assets is to be added here
//       scheduledAt,
//       pinataFilesIds: [],
//     };

//     /**
//     const { NEYNAR_API_URL, NEYNAR_API_KEY } = process.env;

//     if (!NEYNAR_API_URL || !NEYNAR_API_KEY) {
//       return NextResponse.json({ error: "Variables not set" }, { status: 400 });
//     }

//     const url = `${NEYNAR_API_URL}/v2/farcaster/cast/`;
//     const options = {
//       method: "POST",
//       headers: {
//         "x-api-key": NEYNAR_API_KEY,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         signer_uuid: signerUuid,
//         text,
//         embeds,
//         parent,
//         channel_id: channelId,
//       }),
//     };

//     const res = await fetch(url, options);

//     if (!res.ok) {
//       const data = await res.json();
//       return NextResponse.json({ error: data.message }, { status: 400 });
//     }

//     const {
//       cast: { hash },
//     } = await res.json();
//       */

//     // const data = await db.post.create({
//     //   data: {
//     //     ...postData,
//     //     postHash: Math.random().toString(36).substring(2, 15),
//     //     publishedAt: new Date(),
//     //   },
//     // });

//     return NextResponse.json(
//       { message: "Post scheduled successfully", postHash: data.postHash },
//       { status: 200 },
//     );
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json(
//       {
//         error: "Something went wrong",
//       },
//       { status: 500 },
//     );
//   }
// }

export async function GET() {
  return NextResponse.json(
    { message: "Post scheduled successfully" },
    { status: 200 },
  );
}
