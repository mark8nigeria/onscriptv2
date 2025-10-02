"use client";

import React from "react";
import { cn } from "@/lib/utils";
import CastCardContents from "./sub/CastCardContents";
import { type CastCardProps } from "./cast-card.types";
import CastActionsSections from "./sub/CastActionsSections";

export default function CastCard(props: CastCardProps) {
  const { className } = props;

  return (
    <div
      className={cn(
        "w-full flex flex-col items-start justify-start gap-6 p-4",
        className,
      )}
    >
      <CastCardContents {...props} />
      <CastActionsSections {...props} />
    </div>
  );
}
