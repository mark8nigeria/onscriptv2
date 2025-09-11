"use server";

import { auth } from "@/auth";
import {
  sendMailBatchSchema,
  sendMailBatchSchemaType,
  sendMailFromAppBatchSchema,
  sendMailFromAppBatchSchemaType,
  sendMailFromAppSchema,
  sendMailFromAppSchemaType,
  sendMailSchema,
  sendMailSchemaType,
} from "@/features/mail/schema";
import { getUserById } from "@/helpers/read-db";
import nodemailer from "nodemailer";

export type MailResult = {
  recipient?: string;
  status: "success" | "failed";
  id?: string;
  error?: unknown;
};

const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SITE_MAIL_RECIEVER = process.env.SITE_MAIL_RECIEVER;

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: SMTP_SERVER_HOST,
  port: 587,
  secure: true,
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
});

const guardCall = async () => {
  try {
    if (
      !SMTP_SERVER_HOST ||
      !SMTP_SERVER_USERNAME ||
      !SMTP_SERVER_PASSWORD ||
      !SITE_MAIL_RECIEVER
    ) {
      return {
        error: "variables is not set",
      };
    }

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

    await transporter.verify();
  } catch (error) {
    console.error(
      "Something Went Wrong",
      SMTP_SERVER_USERNAME,
      SMTP_SERVER_PASSWORD,
      error,
    );
    return {
      error: "Something went wrong",
    };
  }
};

export async function sendMail(data: sendMailSchemaType): Promise<MailResult> {
  const guard = await guardCall();
  if (guard?.error) {
    console.error(guard.error);
    return {
      status: "failed",
      error: guard.error,
    };
  }

  const parsedData = sendMailSchema.safeParse(data);

  if (!parsedData.success) {
    return {
      status: "failed",
      error: parsedData.error.message,
    };
  }

  const { email, recipient, subject, text, html } = parsedData.data;

  const to = recipient || (SITE_MAIL_RECIEVER as string);
  try {
    const info = await transporter.sendMail({
      from: email,
      to,
      subject: subject,
      text: text,
      html: html ? html : "",
    });
    return { recipient: to, status: "success", id: info?.messageId };
  } catch (err) {
    console.error("Failed to send to", to, err);
    return { recipient: to, status: "failed", error: err };
  }
}

export async function sendBatchMail(
  data: sendMailBatchSchemaType,
): Promise<MailResult[] | MailResult> {
  const guard = await guardCall();
  if (guard?.error) {
    console.error(guard.error);
    return {
      error: guard.error,
      status: "failed",
    };
  }

  const parsedData = sendMailBatchSchema.safeParse(data);

  if (!parsedData.success) {
    return {
      status: "failed",
      error: parsedData.error.message,
    };
  }

  const { email, recipients, subject, text, html } = parsedData.data;

  const tasks = recipients.map(async (recipient) => {
    try {
      const info = await transporter.sendMail({
        from: email,
        to: recipient,
        subject,
        text,
        html,
      });
      return {
        recipient,
        status: "success",
        id: info?.messageId,
      } as MailResult;
    } catch (err) {
      console.error("Failed to send to", recipient, err);
      return { recipient, status: "failed", error: err } as MailResult;
    }
  });

  const results = await Promise.all(tasks);
  return results;
}

export async function sendMailFromApp(
  data: sendMailFromAppSchemaType,
): Promise<MailResult> {
  if (!SMTP_SERVER_USERNAME) {
    return {
      status: "failed",
      error: "Variable is not set",
    };
  }

  const parsedData = sendMailFromAppSchema.safeParse(data);
  if (!parsedData.success) {
    return {
      status: "failed",
      error: parsedData.error.message,
    };
  }

  const { recipient, subject, text, html } = parsedData.data;

  return await sendMail({
    email: SMTP_SERVER_USERNAME,
    recipient,
    subject,
    text,
    html,
  });
}

export async function sendMailFromAppBatch(
  data: sendMailFromAppBatchSchemaType,
): Promise<MailResult[] | MailResult> {
  if (!SMTP_SERVER_USERNAME) {
    return {
      status: "failed",
      error: "Variable is not set",
    };
  }

  const parsedData = sendMailFromAppBatchSchema.safeParse(data);
  if (!parsedData.success) {
    return {
      status: "failed",
      error: parsedData.error.message,
    };
  }

  const { subject, text, html, recipients } = parsedData.data;

  return await sendBatchMail({
    email: SMTP_SERVER_USERNAME,
    recipients,
    subject,
    text,
    html,
  });
}
