import "server-only";
import { pinata } from "@/lib/pinata";

export default async function deleteFiles(ids: string[]) {
  try {
    const unpin = await pinata.files.public.delete(ids);
    return unpin;
  } catch (error) {
    console.log(error);
    return { error: "Error deleting files" };
  }
}
