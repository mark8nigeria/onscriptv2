import { z } from "zod";
import { EmbedSchema, PostStatusSchema } from "./cast.schema";

export const scheduleCastPostSchema = z.object({
  text: z.string(),
  embeds: z.array(EmbedSchema).optional(),
  channelId: z.string().optional(),
  status: PostStatusSchema.default("DRAFT"),
  scheduledAt: z.coerce.date().optional(),
  userId: z.string(),
  castId: z.string().optional(),
});

export type ScheduleCastPostType = z.infer<typeof scheduleCastPostSchema>;
