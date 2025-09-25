import { MediaType, Metadata } from "../types/embedCardTypes";

export function detectFromExtension(url: string): MediaType {
  try {
    const u = new URL(
      url,
      typeof window !== "undefined"
        ? window.location.origin
        : "http://localhost",
    );
    const pathname = u.pathname.toLowerCase();

    if (/\.(jpg|jpeg|png|gif|webp|svg|avif)$/.test(pathname)) return "image";
    if (/\.(mp4|webm|ogg|mov|mkv)$/.test(pathname)) return "video";

    return "website";
  } catch {
    return "website";
  }
}

export async function detectFromHeaders(url: string): Promise<MediaType> {
  try {
    const res = await fetch(url, { method: "HEAD" });
    const contentType = res.headers.get("content-type") || "";

    if (contentType.startsWith("image/")) return "image";
    if (contentType.startsWith("video/")) return "video";
    if (contentType.includes("text/html")) return "website";

    return "unknown";
  } catch {
    return "unknown";
  }
}

export async function fetchMetadata(url: string): Promise<Metadata | null> {
  try {
    const res = await fetch(`/api/metadata?url=${encodeURIComponent(url)}`);
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}
