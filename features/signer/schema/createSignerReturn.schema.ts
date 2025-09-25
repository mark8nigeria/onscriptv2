import { z } from "zod";

export const createSignerReturn = z.object({
  signer_uuid: z.string().min(1, "Signer uuid is required"),
  public_key: z.string().min(1, "Public key is required"),
  status: z.enum(["pending_approval", "approved", "revoked", "generated"]),
});
