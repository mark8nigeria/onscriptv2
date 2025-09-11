import { z } from "zod";

export const sendMailSchema = z.object({
  email: z.string().email(),
  recipient: z.string().optional(),
  subject: z.string(),
  text: z.string(),
  html: z.string().optional(),
});

export const sendMailBatchSchema = z.object({
  email: z.string().email(),
  recipients: z.array(z.string()),
  subject: z.string(),
  text: z.string(),
  html: z.string().optional(),
});

export const sendMailFromAppSchema = z.object({
  recipient: z.string().email(),
  subject: z.string(),
  text: z.string(),
  html: z.string().optional(),
});

export const sendMailFromAppBatchSchema = z.object({
  recipients: z.array(z.string().email()),
  subject: z.string(),
  text: z.string(),
  html: z.string().optional(),
});

export const broadCastToCinematicStreakSchema = z.object({
  subject: z.string(),
  text: z.string(),
});

export type sendMailSchemaType = z.infer<typeof sendMailSchema>;
export type sendMailBatchSchemaType = z.infer<typeof sendMailBatchSchema>;
export type sendMailFromAppSchemaType = z.infer<typeof sendMailFromAppSchema>;
export type sendMailFromAppBatchSchemaType = z.infer<
  typeof sendMailFromAppBatchSchema
>;
export type broadCastToCinematicStreakSchemaType = z.infer<
  typeof broadCastToCinematicStreakSchema
>;
