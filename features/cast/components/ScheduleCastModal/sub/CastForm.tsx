"use client";

import React from "react";
import TextArea from "@/components/TextArea";
import { cn } from "@/lib/utils";
import { type PathDisplayed } from "@/features/cast/utils/useCastModal";
import MediaInput from "@/components/MediaInput";
import { SelectMediaType } from "@/types/media.types";

type CastFormProps = {
  pathDisplayed: PathDisplayed;
  handleChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => void;
  text: string;
  MAX_MEDIA: number;
  setCastMedia: React.Dispatch<React.SetStateAction<SelectMediaType[]>>;
  castMedia: SelectMediaType[];
};

export default function CastForm({
  pathDisplayed,
  handleChange,
  text,
  MAX_MEDIA,
  setCastMedia,
  castMedia,
}: CastFormProps) {
  return (
    <form
      className={cn("grid grid-cols-1 gap-4", {
        hidden: pathDisplayed !== "create-cast",
      })}
    >
      <TextArea
        onChange={handleChange}
        value={text}
        placeholder="Share a thought, an idea, or a story…"
      />
      <MediaInput
        mediaUrls={castMedia}
        mediaType="image"
        onMediaChange={setCastMedia}
        maxMedia={MAX_MEDIA}
      />
    </form>
  );
}
