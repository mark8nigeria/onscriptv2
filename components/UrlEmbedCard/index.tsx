"use client";

import { useEffect, useState } from "react";
import FallbackEmbed from "./sub/fallbackEmbed";
import ImageEmbed from "./sub/imageEmbed";
import SkeletonEmbed from "./sub/skeletonEmbed";
import VideoEmbed from "./sub/videoEmbed";
import WebsiteEmbed from "./sub/websiteEmbed";
import { MediaType, Metadata, UrlEmbedCardProps } from "./types/embedCardTypes";
import {
  detectFromExtension,
  detectFromHeaders,
  fetchMetadata,
} from "./lib/detectType";

export default function UrlEmbedCard({
  url,
  type: forcedType,
}: UrlEmbedCardProps) {
  const [type, setType] = useState<MediaType>(forcedType ?? "unknown");
  const [meta, setMeta] = useState<Metadata | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function resolveType() {
      if (forcedType) {
        setType(forcedType);
        setLoading(false);
        return;
      }

      let detected = detectFromExtension(url);

      if (detected === "website") {
        const headerType = await detectFromHeaders(url);
        if (headerType !== "unknown") detected = headerType;
      }

      if (!active) return;

      setType(detected);

      if (detected === "website") {
        const data = await fetchMetadata(url);
        if (active) setMeta(data);
      }

      if (active) setLoading(false);
    }

    resolveType();
    return () => {
      active = false;
    };
  }, [url, forcedType]);

  // Render by type
  if (loading) return <SkeletonEmbed />;
  if (type === "image") return <ImageEmbed url={url} />;
  if (type === "video") return <VideoEmbed url={url} />;
  if (type === "website") return <WebsiteEmbed url={url} meta={meta} />;

  return <FallbackEmbed url={url} />;
}
