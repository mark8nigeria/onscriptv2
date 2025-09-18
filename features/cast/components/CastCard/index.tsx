"use client";

import ButtonAction from "@/components/ButtonAction";
import { formatScheduleDate } from "@/utils";
import { Calendar } from "lucide-react";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { cn } from "@/lib/utils";
import CastCardContents from "./sub/CastCardContents";
import { type CastCardProps } from "./cast-card.types";

export default function CastCard(props: CastCardProps) {
  const { previewMode = false, className, scheduledAt } = props;
  return (
    <div
      className={cn(
        "w-full flex flex-col items-start justify-start gap-6 p-4",
        className,
      )}
    >
      <CastCardContents {...props} />

      {!previewMode && (
        <div className="flex items-center justify-between w-full">
          {scheduledAt && (
            <ButtonAction
              btnType="badge"
              className="flex items-center justify-center gap-2"
            >
              <Calendar className="size-3" />
              <p className="text-[10px]">{formatScheduleDate(scheduledAt)}</p>
            </ButtonAction>
          )}

          <ButtonAction
            btnType="badge"
            className={cn("px-2", { "ml-auto": !scheduledAt })}
          >
            <BsThreeDotsVertical className="size-3 text-black" />
          </ButtonAction>
        </div>
      )}
    </div>
  );
}
