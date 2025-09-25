"use server";

import { auth } from "@/auth";
import { joinCampaignFormSchema } from "../schemas";
import { getUserById } from "@/helpers/read-db";
import db from "@/lib/db";
import { sendMailFromAppBatch } from "@/lib/send-mail";
import { adminEmails } from "@/data/adminEmails.data";

export default async function joinCampaignAction(data: unknown) {
  try {
    const session = await auth();

    if (!session || !session.user || !session.user.id) {
      return {
        error: "Unauthorized",
      };
    }

    const parsedData = joinCampaignFormSchema.safeParse(data);

    if (!parsedData.success) {
      return {
        error: parsedData.error.errors[0].message,
      };
    }
    console.log("id", session.user.id);

    const user = await getUserById(session.user.id);

    if (!user) {
      return {
        error: "User not found",
      };
    }
    const {
      content_commitment,
      email,
      help_needed,
      story_telling_vibes,
      twitter,
      web3_content_experience,
      following_team,
    } = parsedData.data;
    const { fid, username } = user;

    const existingUser = await db.launchCampaignParticipants.findUnique({
      where: {
        fid,
      },
    });

    if (existingUser) {
      return {
        error: "You've joined this campaign already",
      };
    }

    const existingCampaignWithEmail =
      await db.launchCampaignParticipants.findUnique({
        where: { email },
      });

    if (existingCampaignWithEmail) {
      return {
        error: "Email is already registered",
      };
    }

    const existingCampaignWithTwitter =
      await db.launchCampaignParticipants.findUnique({
        where: { xHandle: twitter },
      });

    if (existingCampaignWithTwitter) {
      return {
        error: "Twitter handle is already registered",
      };
    }

    await db.launchCampaignParticipants.create({
      data: {
        commitment: content_commitment === "yes",
        email,
        fid,
        helpNeeded: help_needed.join(","),
        storyTellingVibe: story_telling_vibes,
        userId: session.user.id,
        username,
        web3ContentWork: web3_content_experience.toUpperCase() as
          | "YES"
          | "NO"
          | "KINDA",
        xHandle: twitter,
        isApproved: false,
        following_team: following_team === "yes",
      },
    });

    await sendMailFromAppBatch({
      recipients: adminEmails,
      subject: "New Registration For Cinematic Streak",
      text: `@${username} just signed up for cinematic streak and is waiting to be approved.
      Proceed to admin dashboard to approve:
      https://farcaster.xyz/miniapps/a7wJi9WFBzLu/onscript/admin/dashboard
      `,
    });

    return {
      success: true,
    };
  } catch (error) {
    console.log("error", error);
    return {
      error: "Something went wrong",
    };
  }
}
