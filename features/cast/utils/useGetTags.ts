import { useState, useCallback } from "react";

type CastData = {
  text: string;
  urls: { value: string; pos: number }[];
  mentions: { username: string; fid: number; pos: number }[];
};

export default function useGetTags() {
  const [castData, setCastData] = useState<CastData>({
    text: "",
    urls: [],
    mentions: [],
  });

  // --- Extract URLs (no https added) ---
  const extractUrls = useCallback((text: string) => {
    const urlRegex =
      /\b((https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/\S*)?)\b/g;
    const matches: { value: string; pos: number }[] = [];
    let match;

    while ((match = urlRegex.exec(text)) !== null) {
      // Keep the URL exactly as the user entered it
      matches.push({ value: match[0], pos: match.index });
    }

    return matches;
  }, []);

  // --- Extract Mentions ---
  const extractMentions = useCallback(async (text: string) => {
    const mentionRegex = /@(\w+)/g;
    const results: { username: string; fid: number; pos: number }[] = [];
    let match;

    while ((match = mentionRegex.exec(text)) !== null) {
      const username = match[1];
      const pos = match.index;

      try {
        // Use HTTPS for API requests (safe and required)
        const res = await fetch(
          `https://fnames.farcaster.xyz/transfers?name=${username}`,
        );
        const data = await res.json();
        const fid = data.transfers?.[0]?.to || null;

        if (fid) results.push({ username, fid, pos });
      } catch (err) {
        console.error(`Failed to get fid for ${username}`, err);
      }
    }

    return results;
  }, []);

  // --- Main Parser ---
  const parseCast = useCallback(
    async (text: string) => {
      const urls = extractUrls(text);
      const mentions = await extractMentions(text);

      setCastData({
        text,
        urls,
        mentions,
      });
    },
    [extractUrls, extractMentions],
  );

  return { parseCast, castData };
}
