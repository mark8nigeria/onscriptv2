"use server";

import { auth } from "@/auth";
import { publicClient } from "@/client";
import { onscriptUserManagementAbi } from "@/constants/abis";
import { onscriptUserManagementContractAddress } from "@/constants/contractAddresses";
import { getUserById } from "@/helpers/read-db";
import db from "@/lib/db";
import getCurrentWeekRange from "@/utils/functions/getCurrentWeekRange";

export const exceedCastLimit = async () => {
  try {
    const session = await auth();

    if (!session || !session.user || !session.user.id) {
      return { error: "User not authenticated" };
    }

    const { id } = session.user;
    const user = await getUserById(id);
    if (!user) {
      return { error: "User not found" };
    }

    const { start, end } = getCurrentWeekRange();

    const thisWeekCastsCount = await db.post.count({
      where: {
        userId: user.id,
        createdAt: {
          gte: start,
          lte: end,
        },
        status: {
          notIn: ["DRAFT"],
        },
      },
    });

    const data = await publicClient.readContract({
      address: onscriptUserManagementContractAddress,
      abi: onscriptUserManagementAbi,
      functionName: "getIsUserPremium",
      args: [user.walletAddress],
    });

    if (typeof data !== "boolean") {
      return {
        error: "Something went wrong",
      };
    }

    if (thisWeekCastsCount >= 5 && !data) {
      return {
        error: "You have exceeded your cast limit for this week",
      };
    }

    return {
      success: true,
    };
  } catch (error) {
    console.log(error);

    return {
      error: "Something went wrong",
    };
  }
};
