import { z } from "zod";

export const joinCampaignFormSchema = z.object({
  email: z.string().email("Invalid email").min(1, "Email is required"),
  twitter: z.string().min(1, "Twitter handle is required"),
  web3_content_experience: z.enum(["yes", "no", "kinda"], {
    required_error: "Web3 content experience field is required",
  }),
  content_commitment: z.enum(["yes", "no"], {
    required_error: "Content commitment field is required",
  }),
  help_needed: z.array(z.string(), {
    required_error: "Help needed field is required",
  }),
  story_telling_vibes: z.enum(
    ["Emotional", "Education", "Dramatic", "Conceptual", "Funny"],
    { required_error: "Story telling vibes field is required" },
  ),
  following_team: z.enum(["yes", "no"], {
    required_error: "Following team field is required",
  }),
});

export type JoinCampaignFormDataType = z.infer<typeof joinCampaignFormSchema>;
