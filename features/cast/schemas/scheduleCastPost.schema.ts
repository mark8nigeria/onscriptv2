import { z } from "zod";
import { EmbedSchema, PostStatusSchema } from "./cast.schema";

export const scheduleCastPostSchema = z.object({
  text: z.string(),
  embeds: z.array(EmbedSchema).optional(),
  channelId: z.string().optional(),
  status: PostStatusSchema.default("DRAFT"),
  scheduledAt: z.coerce.date(),
  userId: z.string(),
  pinataFilesIds: z.array(z.string()).default([]),
});

export type ScheduleCastPostType = z.infer<typeof scheduleCastPostSchema>;
