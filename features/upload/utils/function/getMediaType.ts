export default function getMediaType(file: File): "image" | "video" | "other" {
  // Prefer MIME type check
  if (file.type.startsWith("image/")) return "image";
  if (file.type.startsWith("video/")) return "video";

  // Fallback: check extension (in case type is missing or incorrect)
  const ext = file.name.split(".").pop()?.toLowerCase();
  const imageExts = ["jpg", "jpeg", "png", "gif", "webp", "bmp", "tiff"];
  const videoExts = ["mp4", "webm", "mov", "avi", "mkv"];

  if (ext && imageExts.includes(ext)) return "image";
  if (ext && videoExts.includes(ext)) return "video";

  return "other";
}
