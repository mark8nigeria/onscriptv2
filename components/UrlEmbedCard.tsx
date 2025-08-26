"use client";

import { useEffect, useState } from "react";

type Metadata = {
  title: string;
  description?: string;
  image?: string;
  url: string;
};

// Check file type
function detectType(url: string): "image" | "video" | "website" | "unknown" {
  if (!url) return "unknown";

  try {
    // Blob/Data URLs don’t have extensions, so handle them directly
    if (url.startsWith("blob:") || url.startsWith("data:")) {
      // Default blobs to "image" since most uploads are images
      // You can enhance later by passing the file type separately
      return "image";
    }

    const u = new URL(url, window.location.origin); // handle relative urls
    const pathname = u.pathname.toLowerCase();

    if (/\.(jpg|jpeg|png|gif|webp|svg|avif)$/.test(pathname)) return "image";
    if (/\.(mp4|webm|ogg|mov|mkv)$/.test(pathname)) return "video";

    return "website";
  } catch {
    // If it's not a valid URL, treat it as plain text/website
    return "website";
  }
}

async function fetchMetadata(url: string): Promise<Metadata | null> {
  try {
    const res = await fetch(`/api/metadata?url=${encodeURIComponent(url)}`);
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export default function UrlEmbedCard({ url }: { url: string }) {
  const [meta, setMeta] = useState<Metadata | null>(null);
  const [type, setType] = useState<"image" | "video" | "website" | "unknown">(
    "unknown",
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const detected = detectType(url);
    setType(detected);

    if (detected === "website") {
      setLoading(true);
      fetchMetadata(url).then((res) => {
        setMeta(res);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [url]);

  // show skeleton while loading
  if (loading) {
    return (
      <div className="w-full max-w-md rounded-2xl border bg-gray-50 animate-pulse p-2">
        <div className="w-full h-40 bg-gray-100 rounded-xl" />
      </div>
    );
  }

  if (type === "image") {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={url}
        alt="Embedded content"
        className="w-full h-full object-cover"
      />
    );
  }

  if (type === "video") {
    return (
      <video
        controls
        className="w-full h-full max-w-md rounded-xl border shadow object-contain"
      >
        <source src={url} />
        Your browser does not support the video tag.
      </video>
    );
  }

  if (type === "website") {
    if (!meta) {
      return (
        <div className="w-full max-w-md rounded-2xl border bg-gray-50 shadow p-2">
          <p className="text-xs text-gray-500">Failed to load preview</p>
          <a
            href={url}
            target="_blank"
            className="text-blue-600 underline text-xs"
          >
            {url}
          </a>
        </div>
      );
    }

    return (
      <a
        href={meta.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block max-w-md rounded-xl border border-neutral-100 overflow-hidden"
      >
        {meta.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={meta.image}
            alt={meta.title}
            className="w-full h-36 object-cover"
          />
        )}
        <div className="p-2 space-y-1">
          <span className="text-[0.625rem] text-gray-400">
            {new URL(meta.url).hostname}
          </span>
          <h3 className="text-xs font-medium text-black">{meta.title}</h3>
        </div>
      </a>
    );
  }

  // fallback
  return (
    <a href={url} target="_blank" className="text-blue-600 underline">
      {url}
    </a>
  );
}
