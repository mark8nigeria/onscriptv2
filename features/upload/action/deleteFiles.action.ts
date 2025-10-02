"use server";

import deleteFiles from "@/features/upload/utils/function/deleteFiles";

export async function deleteFilesAction(ids: string[]) {
  try {
    const unpin = await deleteFiles(ids);
    return unpin;
  } catch (error) {
    console.log(error);
    return { error: "Error deleting files" };
  }
}
