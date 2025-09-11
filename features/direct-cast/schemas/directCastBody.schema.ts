import { z } from "zod";

export const directCastBodySchema = z.object({
  recipientFid: z.number().min(1, "Recipient FID is required"),
  message: z.string().max(1024, "Message must be less than 1024 characters"),
});
