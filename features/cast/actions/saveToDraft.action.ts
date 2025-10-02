"use server";

import { auth } from "@/auth";
import {
  scheduleCastPostSchema,
  ScheduleCastPostType,
} from "../schemas/scheduleCastPost.schema";
import { getUserById } from "@/helpers/read-db";
import db from "@/lib/db";
import { cleanupDeletedFiles } from "../utils/cleanupDeletedFiles";
import { cancelQstashMessage } from "@/lib/qstash";

export const saveToDraft = async (
  castData: ScheduleCastPostType,
  draftId?: string,
) => {
  try {
    const session = await auth();

    if (!session || !session.user || !session.user.id) {
      return { error: "User not authenticated" };
    }

    const parsedData = scheduleCastPostSchema.safeParse(castData);
    if (!parsedData.success) {
      return {
        error: parsedData.error.errors[0].message,
      };
    }

    const { id } = session.user;
    const user = await getUserById(id);
    if (!user) {
      return { error: "User not found" };
    }

    const { text, userId, channelId, embeds } = parsedData.data;

    if (!draftId) {
      await db.post.create({
        data: {
          signerUuid: user.signerUuid,
          status: "DRAFT",
          text,
          userId,
          channelId,
          embeds,
        },
      });

      return { success: "Cast saved to draft" };
    }

    const post = await db.post.findUnique({
      where: { id: draftId, userId: id },
    });
    if (!post)
      return {
        error: "Cast not found",
      };

    if (post.status === "PUBLISHED")
      return {
        error: "Cannot save published cast",
      };

    if (post.qstashMessageId) {
      await cancelQstashMessage(post.qstashMessageId);
    }

    await db.post.update({
      where: {
        id: draftId,
      },
      data: {
        signerUuid: user.signerUuid,
        text,
        channelId,
        embeds,
        status: "DRAFT",
      },
    });

    const oldEmbeds = post.embeds;

    if (oldEmbeds && embeds) {
      await cleanupDeletedFiles(
        oldEmbeds as { url?: string; fileId?: string; type?: string }[],
        embeds,
      );
    }

    return { success: "Cast saved to draft" };
  } catch (error) {
    console.log(error);

    return {
      error: "Something went wrong",
    };
  }
};
