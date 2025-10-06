"use client";

import Image from "next/image";
import React from "react";
import CastCardEmbeds, { PostImageSwiperProps } from "../../CastCardEmbeds";
import { CastCardProps } from "../cast-card.types";
import { useAppSelector } from "@/utils";
import CastContent from "../../CastContent";

export default function CastCardContents({ text, embeds }: CastCardProps) {
  const isEmbeds = Array.isArray(embeds) && embeds.length > 0;
  const castEmbedProps = { embeds } as unknown as PostImageSwiperProps;

  const { profilePic, username } = useAppSelector((state) => state.user);

  return (
    <div className="w-full flex items-start justify-start gap-2">
      <div className="size-9 flex-shrink-0 bg-gray-200 rounded-full overflow-hidden">
        {profilePic && (
          <Image
            src={profilePic}
            alt={username || "user image"}
            width={32}
            height={32}
            className="size-full"
          />
        )}
      </div>

      <div className="flex items-start justify-start gap-2 flex-col w-full">
        <div>
          <p className="font-medium">{username}</p>
          <CastContent cast={text} />
        </div>

        {isEmbeds && <CastCardEmbeds {...castEmbedProps} />}
      </div>
    </div>
  );
}
