"use server";

import { auth } from "@/auth";
import { getUserById } from "@/helpers/read-db";
import db from "@/lib/db";
import { type MailResult, sendMailFromAppBatch } from "@/lib/send-mail";
import {
  broadCastToCinematicStreakSchema,
  broadCastToCinematicStreakSchemaType,
} from "../schema";

export async function broadcastToCinematicStreak(
  data: broadCastToCinematicStreakSchemaType,
): Promise<{ error?: string } | { message: string; results: MailResult[] }> {
  try {
    const parsedData = broadCastToCinematicStreakSchema.safeParse(data);

    if (!parsedData.success) {
      return {
        error: parsedData.error.message,
      };
    }
    const { subject, text } = parsedData.data;
    const session = await auth();

    if (
      !session ||
      !session.user ||
      !session.user.id ||
      session.user.role !== "ADMIN"
    )
      return { error: "Unauthorized" };

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

    const users = await db.launchCampaignParticipants.findMany({
      where: { isApproved: true },
    });
    const results = await sendMailFromAppBatch({
      recipients: users.map((user) => user.email),
      // recipients: ["samuelkime7@gmail.com", "Ugojichukwuladi@gmail.com"],
      subject,
      text,
    });

    if ("status" in results) {
      console.log("error", results.error);
      return { error: (results.error || "Something went wrong") as string };
    }

    return { message: "Email sent successfully", results };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
}
