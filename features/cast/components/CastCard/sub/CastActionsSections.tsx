"use client";

import ButtonAction from "@/components/ButtonAction";
import React, { useState, useTransition } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CastCardProps } from "../cast-card.types";
import { useRouter } from "next/navigation";
import { deleteCast } from "@/features/cast/actions/deleteCast.action";
import { toast } from "sonner";
import Loader from "@/components/Loader";
import ScheduleCast from "../../ScheduleCast";
import { formatScheduleDate } from "@/utils";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { useViewCast } from "@coinbase/onchainkit/minikit";

export default function CastActionsSections(props: CastCardProps) {
  const { status, id, scheduledAt, postHash } = props;
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const [isCastModalOpen, setIsCastModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSetPublishTimeOpen, setIsSetPublishTimeOpen] = useState(false);

  const { viewCast } = useViewCast();

  const handleDeleteCast = () => {
    startTransition(async () => {
      const res = await deleteCast({ id });
      if ("error" in res) {
        toast.error(res.error);
        return;
      }

      toast.success(res.message);
      router.refresh();
    });
  };

  return (
    <div className="flex items-center justify-between w-full">
      {status === "SCHEDULED" && scheduledAt && (
        <ButtonAction
          btnType="badge"
          className="flex items-center justify-center gap-2"
          onClick={() => {
            setIsCastModalOpen(true);
            setIsSetPublishTimeOpen(true);
          }}
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

      <div className="relative">
        <ButtonAction
          btnType="badge"
          className="px-2"
          onClick={() => setIsDropdownOpen((prev) => !prev)}
        >
          <BsThreeDotsVertical className="size-3 text-black" />
        </ButtonAction>

        {isDropdownOpen && (
          <div className="absolute right-0 bottom-0 translate-y-[calc(100%+0.25rem)] border-neutral-300 border rounded-lg p-1 bg-white z-10 min-w-36 grid grid-cols-1">
            {status === "PUBLISHED" ? (
              <>
                {postHash && (
                  <ButtonAction
                    onClick={() => {
                      viewCast({ hash: postHash });
                      setIsDropdownOpen(false);
                    }}
                    className="w-full hover:bg-black/10 p-1.5 rounded-sm text-left"
                  >
                    View Cast
                  </ButtonAction>
                )}
              </>
            ) : (
              <>
                <ButtonAction
                  onClick={() => {
                    setIsCastModalOpen(true);
                    setIsSetPublishTimeOpen(true);
                    setIsDropdownOpen(false);
                  }}
                  className="w-full hover:bg-black/10 p-1.5 rounded-sm text-left"
                >
                  Schedule
                </ButtonAction>
                <ButtonAction
                  onClick={() => {
                    setIsCastModalOpen(true);
                    setIsDropdownOpen(false);
                  }}
                  className="w-full hover:bg-black/10 p-1.5 rounded-sm text-left"
                >
                  Edit
                </ButtonAction>
                <ButtonAction
                  className="w-full text-error hover:text-error hover:bg-error/10 p-1.5 rounded-sm text-left"
                  onClick={() => {
                    handleDeleteCast();
                    setIsDropdownOpen(false);
                  }}
                >
                  Delete
                </ButtonAction>
              </>
            )}
          </div>
        )}
      </div>

      <Loader isLoading={isPending} />
      <ScheduleCast
        hideBtn
        castData={props}
        isModalOpen={isCastModalOpen}
        setIsModalOpen={setIsCastModalOpen}
        isSetPublishTimeOpen={isSetPublishTimeOpen}
        setIsSetPublishTimeOpen={setIsSetPublishTimeOpen}
      />
    </div>
  );
}
