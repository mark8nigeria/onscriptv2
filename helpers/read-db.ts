import { db } from "@/lib/db";

export const getUserByAddress = async (address: string) => {
  const user = await db.user.findUnique({
    where: {
      walletAddress: address,
    },
  });
  return user;
};

export const getUserById = async (id: string) => {
  const user = await db.user.findUnique({
    where: {
      id,
    },
  });
  return user;
};

export const getUserByFid = async (fid: number) => {
  const user = await db.user.findUnique({
    where: {
      fid,
    },
  });
  return user;
};

export const getAllCinematicStreakParticipants = async () => {
  const participants = await db.launchCampaignParticipants.findMany({
    orderBy: [{ isApproved: "desc" }, { createdAt: "desc" }],
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
