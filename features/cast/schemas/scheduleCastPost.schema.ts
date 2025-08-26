import { z } from "zod";
import { EmbedSchema, PostStatusSchema } from "./cast.schema";

const fileMetaSchema = z
  .object({
    name: z.string(),
    type: z
      .string()
      .regex(/^image\/(png|jpeg|jpg|gif)$|^video\/(mp4|webm|ogg)$/),
    size: z.number(),
  })
  .refine(
    (file) =>
      file.type.startsWith("video/") ||
      (file.type.startsWith("image/") && file.size <= 2 * 1024 * 1024),
    {
      message:
        "Images must be <= 2MB. Videos have no size limit in this schema.",
    },
  );

export const scheduleCastPostSchema = z.object({
  files: z.array(fileMetaSchema).default([]),
  text: z.string(),
  embeds: z.array(EmbedSchema).optional(),
  channelId: z.string().optional(),
  status: PostStatusSchema.default("DRAFT"),
  scheduledAt: z.coerce.date(),
  // signerUuid: z.string(),
  userId: z.string(),
});
