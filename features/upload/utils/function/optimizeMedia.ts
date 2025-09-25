import getMediaType from "./getMediaType";
import optimizeImg from "./optimizeImg";
import optimizeVideo from "./optimizeVideo";

type OptimizedResult = {
  file: File;
  type: "image" | "video";
  success: boolean;
  error?: string;
};

export default async function optimizeMedia(
  files: File[],
): Promise<OptimizedResult[]> {
  const results: OptimizedResult[] = [];

  for (const file of files) {
    const type = getMediaType(file);

    if (type === "other") return [];

    try {
      if (type === "video") {
        const result = await optimizeVideo([file]);
        if ("error" in result) {
          results.push({
            file,
            type,
            success: false,
            error: "Error optimizing video",
          });
        } else {
          results.push({ file: result[0], type, success: true });
        }
      }
      if (type === "image") {
        const result = await optimizeImg([file]);
        if ("error" in result) {
          results.push({
            file,
            type,
            success: false,
            error: "Error optimizing image",
          });
        } else {
          results.push({ file: result[0], type, success: true });
        }
      }
    } catch (err) {
      results.push({
        file,
        type,
        success: false,
        error: err instanceof Error ? err.message : "Unknown error",
      });
    }
  }

  return results;
}
