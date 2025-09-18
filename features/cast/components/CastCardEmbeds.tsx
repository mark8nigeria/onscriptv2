"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { cn } from "@/lib/utils";
import UrlEmbedCard from "@/components/UrlEmbedCard";

export type PostImageSwiperProps = {
  embeds: {
    cast_id?:
      | {
          hash: string;
          fid: number;
        }
      | undefined;
    url?: string | undefined;
  }[];
};

export default function CastCardEmbeds({ embeds }: PostImageSwiperProps) {
  if (!Array.isArray(embeds) || embeds.length === 0) return null;

  return (
    <div className="w-full grid grid-cols-1 overflow-hidden">
      <Swiper
        spaceBetween={8}
        slidesPerView={"auto"}
        className="rounded-xl overflow-hidden w-full"
      >
        {embeds.map(({ url }, i, arr) => {
          if (!url) return null;

          return (
            <SwiperSlide
              key={i}
              className={cn("!w-full rounded-xl overflow-hidden", {
                "!w-[90%] aspect-[5/4]": arr.length > 1,
              })}
            >
              <UrlEmbedCard url={url} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
