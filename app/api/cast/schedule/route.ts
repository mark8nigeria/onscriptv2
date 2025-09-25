import { auth } from "@/auth";
import { PostSchemaDataType } from "@/features/cast/schemas/cast.schema";
import { scheduleCastPostSchema } from "@/features/cast/schemas/scheduleCastPost.schema";
import { getUserById } from "@/helpers/read-db";
import db from "@/lib/db";
import { cancelQstashMessage, qstashClient } from "@/lib/qstash";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let messageId: string | null = null;

  try {
    const session = await auth();
    if (!session || !session.user || !session.user.id) {
      return NextResponse.json(
        { error: "User not authenticated" },
        { status: 401 },
      );
    }
    const { id } = session.user;
    const body = await request.json();
    const parsedData = scheduleCastPostSchema.safeParse(body);
    if (!parsedData.success) {
      return NextResponse.json(
        {
          error: parsedData.error.errors[0].message,
        },
        { status: 400 },
      );
    }

    const {
      channelId,
      embeds,
      text,
      scheduledAt,
      status,
      userId,
      pinataFilesIds,
    } = parsedData.data;

    if (new Date() > scheduledAt) {
      return NextResponse.json(
        { error: "Date cannot be in the past" },
        { status: 400 },
      );
    }

    if (userId !== id) {
      return NextResponse.json(
        { error: "User not authorized" },
        { status: 403 },
      );
    }

    const user = await getUserById(userId);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    if (!user?.signerUuid) {
      return NextResponse.json(
        { error: "User does not have a signer" },
        { status: 400 },
      );
    }

    const postData: PostSchemaDataType = {
      signerUuid: user.signerUuid,
      status,
      text,
      userId,
      channelId,
      embeds,
      scheduledAt,
      pinataFilesIds,
    };

    await db.$transaction(async (tx) => {
      const post = await tx.post.create({
        data: { ...postData },
      });

      const res = await qstashClient.publishJSON({
        body: post,
        url: "http://localhost:3000/api/cast/publish/qstash",
        notBefore: Math.floor(scheduledAt.getTime() / 1000),
        retries: 3,
      });
      messageId = res.messageId;
      if (!messageId) throw new Error("QStash publish failed");

      await tx.post.update({
        where: {
          id: post.id,
        },
        data: {
          qstashMessageId: messageId,
        },
      });
    });

    return NextResponse.json(
      { message: "Post scheduled successfully" },
      { status: 200 },
    );
  } catch (error) {
    if (messageId) {
      console.log("Canceling QStash message:", messageId);
      try {
        await cancelQstashMessage(messageId);
      } catch (cleanupErr) {
        console.log("Failed to cancel QStash message:", cleanupErr);
      }
    }

    console.log(error);
    return NextResponse.json(
      {
        error: "Something went wrong",
      },
      { status: 500 },
    );
  }
}
