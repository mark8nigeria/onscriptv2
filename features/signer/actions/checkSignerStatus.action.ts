"use server";

import { auth } from "@/auth";
import { getUserById } from "@/helpers/read-db";
import db from "@/lib/db";

export const checkSignerStatus = async (uuid: string) => {
  try {
    const session = await auth();
    if (!session || !session.user || !session.user.id)
      return { error: "Unauthorized" };
    const { id } = session.user;

    if (!uuid || typeof uuid !== "string" || uuid === "")
      return { error: "uuid is required" };

    const user = await getUserById(id);
    if (!user) return { error: "User not found" };

    if (user.signerUuid !== uuid) return { error: "Unauthorized" };

    const { NEYNAR_API_URL, NEYNAR_API_KEY } = process.env;

    if (!NEYNAR_API_URL || !NEYNAR_API_KEY) {
      return { error: "variables is not set" };
    }

    const url = `${NEYNAR_API_URL}/v2/farcaster/signer?signer_uuid=${uuid}`;
    const options = {
      method: "GET",
      headers: { "x-api-key": NEYNAR_API_KEY },
    };

    const response = await fetch(url, options);
    if (!response.ok) return { error: "Error confirming signer" };

    const { status } = await response.json();

    if (status === "approved") {
      await db.user.update({
        where: {
          id,
        },
        data: {
          isUuidApprove: true,
          signerRegDeadline: null,
          signerApprovalUrl: null,
        },
      });
    }

    return { status };
  } catch (error) {
    console.log(error);

    return {
      error: "Something went wrong",
    };
  }
};
