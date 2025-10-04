"use server";
import { auth } from "@/auth";
import { publicClient } from "@/client";
import { onscriptUserManagementAbi } from "@/constants/abis";
import { onscriptUserManagementContractAddress } from "@/constants/contractAddresses";
import { getUserByAddress } from "@/helpers/read-db";
import db from "@/lib/db";
import { isAddress } from "viem";

export const makeUserAdmin = async (address: string) => {
  try {
    if (!isAddress(address)) return { error: "Invalid wallet address" };

    const session = await auth();

    if (!session || !session.user || !session.user.id)
      return { error: "Unauthorized" };

    if (session.user.role !== "ADMIN") return { error: "Unauthorized" };

    const adminUser = await getUserByAddress(session.user.address);
    if (!adminUser) return { error: "Admin user not found" };
    if (adminUser.role !== "ADMIN") return { error: "Unauthorized" };

    const user = await getUserByAddress(address);
    if (!user) return { error: "User not found" };
    if (user.role === "ADMIN") return { error: "User is already an admin" };

    const isUserAdmin = await publicClient.readContract({
      address: onscriptUserManagementContractAddress,
      abi: onscriptUserManagementAbi,
      functionName: "getIsUserAdmin",
      args: [address],
    });

    if (typeof isUserAdmin !== "boolean") {
      return { error: "Something went wrong" };
    }
    if (!isUserAdmin) {
      return {
        error: "The user is not an admin on the contract",
      };
    }

    await db.user.update({
      where: { walletAddress: address },
      data: { role: "ADMIN" },
    });

    return { success: "User made admin successfully" };
  } catch (error) {
    console.log("error in makeUserAdmin", error);
    return { error: "Something went wrong" };
  }
};
