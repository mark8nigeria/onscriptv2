"use client";

import ButtonAction from "@/components/ButtonAction";
import { formatScheduleDate } from "@/utils";
import { Calendar } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import CastCardContents from "./sub/CastCardContents";
import { type CastCardProps } from "./cast-card.types";
import CastMenuDropdown from "./sub/CastMenuDropdown";

export default function CastCard(props: CastCardProps) {
  const { className, scheduledAt, status } = props;
  return (
    <div
      className={cn(
        "w-full flex flex-col items-start justify-start gap-6 p-4",
        className,
      )}
    >
      <CastCardContents {...props} />

      <div className="flex items-center justify-between w-full">
        {status === "SCHEDULED" && scheduledAt && (
          <ButtonAction
            btnType="badge"
            className="flex items-center justify-center gap-2"
          >
            <Calendar className="size-3" />
            <p className="text-[10px]">{formatScheduleDate(scheduledAt)}</p>
          </ButtonAction>
        )}
        {status !== "SCHEDULED" && (
          <ButtonAction
            btnType="badge"
            className={cn("flex items-center justify-center gap-2", {
              "border-success": status === "PUBLISHED",
            })}
          >
            <p
              className={cn("text-[10px] capitalize", {
                "text-success": status === "PUBLISHED",
                "text-error": status === "FAILED",
              })}
            >
              {status.toLocaleLowerCase()}
            </p>
          </ButtonAction>
        )}

        <CastMenuDropdown {...props} />
      </div>
    </div>
  );
}
