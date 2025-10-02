"use client";

import React, { useEffect, useRef, useState } from "react";
import ButtonAction from "./ButtonAction";
import { cn } from "@/lib/utils";
import { Plus, Upload } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import { SelectMediaType } from "@/types/media.types";
import { detectFromHeaders } from "./UrlEmbedCard/lib/detectType";
import { MediaType } from "./UrlEmbedCard/types/embedCardTypes";

type ImageInputProps = {
  className?: string;
  mediaUrls?: SelectMediaType[];
  mediaType?: "image" | "video";
  maxMedia?: number;
  onMediaChange?: (medias: SelectMediaType[]) => void;
};

export default function MediaInput({
  mediaUrls,
  className,
  mediaType,
  maxMedia = 1,
  onMediaChange,
}: ImageInputProps) {
  const [selectedMedias, setSelectedMedias] = useState<SelectMediaType[]>(
    mediaUrls || [],
  );
  const fileRef = useRef<HTMLInputElement>(null);

  const IMAGE_TYPES = ".png, .jpg, .jpeg, .gif, .webp, .heic, .heif";
  const VIDEO_TYPES = ".mp4, .webm, .mov";

  const acceptedMedias =
    mediaType === "image"
      ? IMAGE_TYPES
      : mediaType === "video"
        ? VIDEO_TYPES
        : `${IMAGE_TYPES}, ${VIDEO_TYPES}`;

  const handleBtn = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const currentCount = selectedMedias.length;
    const remainingSlots = maxMedia - currentCount;
    if (remainingSlots <= 0) {
      toast.error("You have reached the maximum number of media files.");
      return;
    }

    const filesToAdd = Array.from(files).slice(0, remainingSlots);

    const selectedFiles = filesToAdd
      .map((media) => {
        const isDuplicate = selectedMedias.some((m) => {
          if (m.file) {
            return m.file.name === media.name && m.file.size === media.size;
          }
          return false;
        });
        if (isDuplicate) return undefined;

        const url = URL.createObjectURL(media);
        const finalMedia: SelectMediaType = {
          file: media,
          url,
          type: "image", // default
        };

        if (media.type.startsWith("image/")) {
          finalMedia.type = "image";
          return finalMedia;
        } else if (media.type.startsWith("video/")) {
          finalMedia.type = "video";
          return finalMedia;
        }
      })
      .filter((val): val is SelectMediaType => !!val); // type-safe filter

    setSelectedMedias((prev) => [...prev, ...selectedFiles]);

    // Reset input for re-selection
    if (fileRef.current) fileRef.current.value = "";
  };

  useEffect(() => {
    if (onMediaChange) {
      onMediaChange(selectedMedias);
    }
  }, [selectedMedias]);

  return (
    <div className="grid grid-cols-4 gap-2 w-full">
      {selectedMedias.map((media, i) => {
        return (
          <MediaDisplay
            setSelectedMedias={setSelectedMedias}
            handleClick={handleBtn}
            key={i}
            media={media}
          />
        );
      })}
      {selectedMedias.length < maxMedia && (
        <div
          className={cn(
            "w-full aspect-square rounded-2xl cursor-pointer border border-white/12 bg-white/8 relative",
            className,
          )}
        >
          <div onClick={handleBtn} className="w-full h-full">
            <ButtonAction
              type="button"
              className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center flex-col gap-2"
            >
              <Upload className="size-4 text-black" />
              <p className="font-sora text-[0.625rem] max-w-[3pc] text-black text-center leading-[1]">
                Upload Media
              </p>
            </ButtonAction>
          </div>
        </div>
      )}

      <input
        ref={fileRef}
        accept={acceptedMedias}
        hidden
        multiple
        type="file"
        className="hidden"
        onChange={handleInputChange}
      />
    </div>
  );
}

type MediaDisplayProps = {
  className?: string;
  media: SelectMediaType;
  handleClick: () => void;
  setSelectedMedias: React.Dispatch<React.SetStateAction<SelectMediaType[]>>;
};

function MediaDisplay({
  className,
  media,
  setSelectedMedias,
}: MediaDisplayProps) {
  const { type, url } = media;
  const [headerType, setHeaderType] = useState<MediaType>("unknown");

  useEffect(() => {
    async function fetchType() {
      if (type) return;
      const headerType = await detectFromHeaders(url);
      setHeaderType(headerType);
    }

    fetchType();
  }, [type, url]);

  return (
    <div
      className={cn(
        "w-full aspect-square rounded-2xl cursor-pointer border border-white/12 bg-white/8 relative",
        className,
      )}
    >
      <div className="w-full h-full">
        {(type === "image" || headerType === "image") && (
          <Image
            src={url}
            alt="user"
            width={240}
            height={240}
            className="w-full h-full object-cover rounded-2xl"
          />
        )}
        {(type === "video" || headerType === "video") && (
          <video src={url} className="w-full h-full object-cover rounded-2xl" />
        )}
      </div>

      <ButtonAction
        onClick={(e) => {
          e.preventDefault();
          URL.revokeObjectURL(url);
          setSelectedMedias((prev) => prev.filter((m) => m.url !== url));
        }}
        className="bg-white border border-black/20 rounded-full p-1.5 absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 z-[5]"
      >
        <Plus className="size-3.5 text-black rotate-45" />
      </ButtonAction>
    </div>
  );
}
