import deleteFiles from "@/features/upload/utils/function/deleteFiles";

type Embed = {
  type?: string;
  cast_id?: {
    fid: number;
    hash: string;
  };
  url?: string;
  fileId?: string;
};

export const cleanupDeletedFiles = async (
  oldEmbeds: Embed[] = [],
  newEmbeds: Embed[] = [],
) => {
  // Collect only valid fileIds from new embeds
  const newFileIds = new Set(
    newEmbeds
      .map((e) => e.fileId)
      .filter((fid): fid is string => typeof fid === "string"),
  );

  // Collect old fileIds that are missing in new
  const fileIdsToDelete = oldEmbeds
    .map((e) => e.fileId)
    .filter(
      (fid): fid is string => typeof fid === "string" && !newFileIds.has(fid),
    );

  if (fileIdsToDelete.length > 0) {
    await deleteFiles(fileIdsToDelete);
  }
};
