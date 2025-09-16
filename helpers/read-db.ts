import { db } from "@/lib/db";

export const getUserByAddress = async (address: string) => {
  try {
    return await db.user.findUnique({
      where: {
        walletAddress: address,
      },
    });
  } catch (error) {
    console.error("Error fetching user by address:", error);
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    return await db.user.findUnique({
      where: {
        id,
      },
    });
  } catch (error) {
    console.error("Error fetching user by id:", error);
    return null;
  }
};

export const getUserByFid = async (fid: number) => {
  try {
    return await db.user.findUnique({
      where: {
        fid,
      },
    });
  } catch (error) {
    console.error("Error fetching user by fid:", error);
    return null;
  }
};

export const getPostByQstashMessageId = async (qstashMessageId: string) => {
  try {
    return await db.post.findUnique({
      where: {
        qstashMessageId,
      },
    });
  } catch (error) {
    console.error("Error fetching post by qstashMessageId:", error);
    return null;
  }
};

export const getPostById = async (id: string) => {
  try {
    return await db.post.findUnique({
      where: {
        id,
      },
    });
  } catch (error) {
    console.error("Error fetching post by id:", error);
    return null;
  }
};

export const getAllUsersCast = async (userId: string) => {
  try {
    return await db.post.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  } catch (error) {
    console.error("Error fetching casts by userId:", error);
    return null;
  }
};

export const getAllCinematicStreakParticipants = async () => {
  const participants = await db.launchCampaignParticipants.findMany({
    orderBy: [{ isApproved: "asc" }, { createdAt: "desc" }],
  });

  return participants;
};

export const numberOfUnapprovedStreakParticipants = async () => {
  const unapprovedCount = await db.launchCampaignParticipants.count({
    where: {
      isApproved: false,
    },
  });
  return unapprovedCount;
};
