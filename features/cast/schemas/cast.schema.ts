import { z } from "zod";

export const PostStatusSchema = z.enum([
  "DRAFT",
  "SCHEDULED",
  "PUBLISHED",
  "FAILED",
]);

export const CastIdSchema = z.object({
  hash: z.string(),
  fid: z.number(),
});

export const EmbedSchema = z
  .object({
    cast_id: CastIdSchema.optional(),
    url: z.string().url().optional(),
    type: z.string().optional(),
    fileId: z.string().optional(),
  })
  .strict();

export const PostSchema = z.object({
  id: z.string().optional(),
  userId: z.string(),

  signerUuid: z.string(),
  text: z.string(),

  parent: z.string().nullable().optional(),
  channelId: z.string().nullable().optional(),
  parentAuthorFid: z.number().nullable().optional(),

  embeds: z.array(EmbedSchema).optional(),

  postHash: z.string().nullable().optional(),

  status: PostStatusSchema,
  scheduledAt: z.coerce.date().optional(),
  publishedAt: z.coerce.date().optional(),

  qstashMessageId: z.string().nullable().optional(),

  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export type PostSchemaDataType = z.infer<typeof PostSchema>;
