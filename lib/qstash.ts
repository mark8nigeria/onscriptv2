import "server-only";

import { Client } from "@upstash/qstash";

export const qstashClient = new Client({
  token: process.env.QSTASH_TOKEN,
});

export async function cancelQstashMessage(messageId: string) {
  const { QSTASH_URL, QSTASH_TOKEN } = process.env;

  if (!QSTASH_URL || !QSTASH_TOKEN) {
    throw new Error("Variables not defined");
  }

  const resp = await fetch(`${QSTASH_URL}/v2/messages/${messageId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${QSTASH_TOKEN}`,
    },
  });

  if (!resp.ok) {
    const text = await resp.text();
    throw new Error(
      `Failed to cancel QStash message ${messageId}: ${resp.status} ${text}`,
    );
  }
}
