import "server-only";

import { Client } from "@upstash/qstash";

export const qstashClient = new Client({
  token: process.env.QSTASH_TOKEN,
});

export async function cancelQstashMessage(messageId: string) {
  try {
    const { QSTASH_URL, QSTASH_TOKEN } = process.env;

    if (!QSTASH_URL || !QSTASH_TOKEN) {
      return { error: "Variables not defined" };
    }

    if (!messageId) {
      return { error: "Message ID not defined" };
    }

    const resp = await fetch(`${QSTASH_URL}/v2/messages/${messageId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${QSTASH_TOKEN}`,
      },
    });

    if (!resp.ok) {
      const body = await resp.json();
      if (body.error === "failed to get database: database not found") {
        return { error: "database not found" };
      }
      return { error: body.error };
    }

    return { success: "Message canceled" };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
}
