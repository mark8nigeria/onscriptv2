import { z } from "zod";

export const joinCampaignFormSchema = z.object({
  email: z.string().email(),
  twitter: z.string().min(1, "Twitter handle is required"),
  web3_content_experience: z.enum(["yes", "no", "kinda"]),
  content_commitment: z.enum(["yes", "no"]),
  help_needed: z.array(z.string()),
  story_telling_vibes: z.enum([
    "Emotional",
    "Education",
    "Dramatic",
    "Conceptual",
    "Funny",
  ]),
  following_team: z.enum(["yes", "no"]),
});

export type JoinCampaignFormDataType = z.infer<typeof joinCampaignFormSchema>;
