"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { cn } from "@/lib/utils";
import UrlEmbedCard from "@/components/UrlEmbedCard";
import { SelectMediaType } from "@/types/media.types";

export type PostImageSwiperProps = {
  embeds: SelectMediaType[];
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
        {embeds.map(({ url, type }, i, arr) => {
          if (!url) return null;

          return (
            <SwiperSlide
              key={i}
              className={cn("!w-full rounded-xl overflow-hidden", {
                "!w-[90%] aspect-[5/4]": arr.length > 1,
              })}
            >
              <UrlEmbedCard url={url} type={type} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
