"use client";

import { useEffect } from "react";
import ButtonAction from "@/components/ButtonAction";
import { useOpenUrl, useViewProfile } from "@coinbase/onchainkit/minikit";
import useGetTags from "../utils/useGetTags";

type CastContentProps = {
  cast: string;
};

export default function CastContent({ cast }: CastContentProps) {
  const { castData, parseCast } = useGetTags();
  const openUrl = useOpenUrl();
  const viewProfile = useViewProfile();

  useEffect(() => {
    if (cast) parseCast(cast);
  }, [cast, parseCast]);

  const { text, urls, mentions } = castData;

  // Combine mentions + URLs by position
  const items = [
    ...urls.map((u) => ({ type: "url" as const, value: u.value, pos: u.pos })),
    ...mentions.map((m) => ({
      type: "mention" as const,
      value: m.username,
      fid: m.fid,
      pos: m.pos,
    })),
  ].sort((a, b) => a.pos - b.pos);

  const content: (string | React.JSX.Element)[] = [];
  let lastIndex = 0;

  for (const item of items) {
    if (item.pos > lastIndex) content.push(text.slice(lastIndex, item.pos));

    if (item.type === "mention") {
      content.push(
        <ButtonAction
          key={`mention-${item.pos}`}
          onClick={() => item.fid && viewProfile(item.fid)}
          className="font-medium"
        >
          @{item.value}
        </ButtonAction>,
      );
      lastIndex = item.pos + item.value.length + 1; // +1 for "@"
    } else if (item.type === "url") {
      // Always open with https for safety
      const safeUrl = item.value.startsWith("http")
        ? item.value
        : `https://${item.value}`;

      content.push(
        <ButtonAction
          key={`url-${item.pos}`}
          onClick={() => openUrl(safeUrl)}
          className="font-medium"
        >
          {item.value}
        </ButtonAction>,
      );
      lastIndex = item.pos + item.value.length;
    }
  }

  if (lastIndex < text.length) content.push(text.slice(lastIndex));

  return (
    <pre className="text-neutral-900 font-poppins whitespace-pre-wrap text-xs">
      {content}
    </pre>
  );
}
