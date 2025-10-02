import { auth } from "@/auth";
import { exceedCastLimit } from "@/features/cast/actions/exceedCastLimit.action";
import { PostSchemaDataType } from "@/features/cast/schemas/cast.schema";
import { scheduleCastPostSchema } from "@/features/cast/schemas/scheduleCastPost.schema";
import { cleanupDeletedFiles } from "@/features/cast/utils/cleanupDeletedFiles";
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
    const { API_URL } = process.env;

    if (!API_URL) {
      return NextResponse.json(
        { error: "Variables not set is not defined" },
        { status: 400 },
      );
    }

    const result = await exceedCastLimit();
    console.log("result", result);

    if ("error" in result) {
      return NextResponse.json({ error: result.error }, { status: 400 });
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

    const { channelId, embeds, text, scheduledAt, status, userId, castId } =
      parsedData.data;

    if (!scheduledAt) {
      return NextResponse.json({ error: "Date is required" }, { status: 400 });
    }

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
    };

    if (castId) {
      const existingCast = await db.post.findUnique({
        where: {
          id: castId,
          userId,
        },
      });

      if (!existingCast) {
        await db.$transaction(async (tx) => {
          const post = await tx.post.create({
            data: { ...postData },
          });

          const res = await qstashClient.publishJSON({
            body: post,
            url: `${API_URL}/api/cast/publish/qstash`,
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
      }

      if (existingCast) {
        if (existingCast.qstashMessageId) {
          await cancelQstashMessage(existingCast.qstashMessageId);
        }

        await db.$transaction(async (tx) => {
          const post = await tx.post.update({
            where: {
              id: castId,
              userId,
            },
            data: { ...postData },
          });

          const res = await qstashClient.publishJSON({
            body: post,
            url: `${API_URL}/api/cast/publish/qstash`,
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

        const oldEmbeds = existingCast.embeds;

        if (oldEmbeds && embeds) {
          await cleanupDeletedFiles(
            oldEmbeds as { url?: string; fileId?: string; type?: string }[],
            embeds,
          );
        }

        return NextResponse.json(
          { message: "Post scheduled successfully" },
          { status: 200 },
        );
      }
    } else {
      await db.$transaction(async (tx) => {
        const post = await tx.post.create({
          data: { ...postData },
        });

        const res = await qstashClient.publishJSON({
          body: post,
          url: `${API_URL}/api/cast/publish/qstash`,
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
    }
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
