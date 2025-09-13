"use server";

import { auth } from "@/auth";
import { getUserById } from "@/helpers/read-db";
import db from "@/lib/db";
import { sendMailFromAppBatch } from "@/lib/send-mail";

export const approveAllParticipant = async () => {
  try {
    const session = await auth();

    if (
      !session ||
      !session.user ||
      !session.user.id ||
      session.user.role !== "ADMIN"
    ) {
      return {
        error: "Unauthorized",
      };
    }

    const user = await getUserById(session.user.id);

    if (!user) {
      return {
        error: "User not found",
      };
    }
    if (user.role !== "ADMIN") {
      return {
        error: "Unauthorized",
      };
    }

    const participants = await db.launchCampaignParticipants.findMany({
      where: { isApproved: false },
    });

    const result = await db.launchCampaignParticipants.updateMany({
      where: { isApproved: false },
      data: { isApproved: true },
    });

    if (result.count === 0) {
      return { error: "No unapproved participant" };
    }

    await sendMailFromAppBatch({
      recipients: participants.map((participant) => participant.email),
      subject: "Welcome to Cinematic Streak",
      text: `Welcome to Cinematic Streak,  where every moment feels like it’s straight out of a movie. ✨

You’ve officially joined a community of storytellers, dreamers, and creators who believe life is best lived in full color.

From behind-the-scenes inspiration to spotlight-worthy updates, we’ll make sure your inbox feels like the front row seat to something unforgettable.

Your first feature is about to roll out soon – and trust us, you won’t want to miss it.

Thanks for being part of the streak. Let’s make it cinematic.

Here’s the timetable and your personalize flyer 🌚

https://docs.google.com/document/d/11Kuv_2TBqQgBXbiDegy5bh6H5QaSToyBFcBbikRLNQA/edit?usp=sharing

With excitement,
The Cinematic Streak Team`,
    });

    return { success: "user have been approved" };
  } catch (error) {
    console.log("error approving", error);
    return { error: "Something went wrong" };
  }
};
