"use server";

import { auth } from "@/auth";
import deleteFiles from "@/features/upload/utils/function/deleteFiles";
import db from "@/lib/db";
import { cancelQstashMessage } from "@/lib/qstash";

export const deleteCast = async ({ id }: { id: string }) => {
  try {
    const session = await auth();

    if (!session || !session.user || !session.user.id) {
      return { error: "Unauthorized" };
    }

    const cast = await db.post.findUnique({ where: { id } });

    if (!cast) return { error: "Cast does not exist" };

    if (cast.userId !== session.user.id)
      return { error: "You do not have permission to delete this cast" };

    if (cast.status === "PUBLISHED")
      return { error: "Cannot delete published cast" };

    if (cast.qstashMessageId) {
      const res = await cancelQstashMessage(cast.qstashMessageId);
      if (res.error) {
        if (
          !(
            res.error.includes("not found") &&
            res.error.includes("message msg_")
          )
        ) {
          return { error: "Something went wrong" };
        }
      }
    }

    await db.post.delete({ where: { id } });
    if (cast.embeds) {
      const filesId = (cast.embeds as { fileId: string }[])
        .map((embed) => embed.fileId)
        .filter((url: string) => typeof url === "string");

      await deleteFiles(filesId);
    }

    return { message: "Cast deleted successfully" };
  } catch (cleanupErr) {
    console.log("Failed to cancel QStash message:", cleanupErr);
    return { error: "Something went wrong" };
  }
};
