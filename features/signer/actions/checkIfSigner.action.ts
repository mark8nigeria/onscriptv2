"use server";

import { auth } from "@/auth";
import { getUserById } from "@/helpers/read-db";
import { checkSignerStatus } from "./checkSignerStatus.action";

export const checkIfUserHasSigner = async () => {
  try {
    const session = await auth();
    if (!session || !session.user || !session.user.id)
      return { error: "Unauthorized" };

    const { id } = session.user;
    const user = await getUserById(id);
    if (!user) return { error: "User not found" };

    if (!user.signerUuid) return { error: "No UUID" };

    const res = await checkSignerStatus(user.signerUuid);

    if (res.error) return { error: res.error };

    if (res.status !== "approved") return { error: "Signer not approved" };

    return { success: "approved" };
  } catch {
    return { error: "Something went wrong" };
  }
};
