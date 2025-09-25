"use client";

import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import useCastModal from "@/features/cast/utils/useCastModal";
import CastForm from "./sub/CastForm";
import ScheduleCastHeader from "./sub/ScheduleCastHeader";
import ScheduleCastButtons from "./sub/ScheduleCastButtons";
import ScheduleCastTime from "./sub/ScheduleCastTime";
import CastPreview from "../CastPreview";
import Loader from "@/components/Loader";
import ButtonAction from "@/components/ButtonAction";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type ScheduleCastModalProps = {
  onScheduleAndNoUuid: () => void;
  onScheduleAndUserIsNotOnchain: () => void;
  onlyIcon?: boolean;
  className?: string;
};

export default function ScheduleCastModal({
  onScheduleAndNoUuid,
  onScheduleAndUserIsNotOnchain,
  className,
  onlyIcon,
}: ScheduleCastModalProps) {
  const data = useCastModal();
  const { resetModal, pathDisplayed, isLoading, isModalOpen, setIsModalOpen } =
    data;

  return (
    <>
      <AlertDialog open={isModalOpen} onOpenChange={resetModal}>
        <AlertDialogTrigger asChild>
          <ButtonAction
            onClick={() => setIsModalOpen(true)}
            btnType="primary"
            className={cn(
              "flex items-center justify-center gap-2 w-fit px-8 bg-black hover:bg-black/80 font-medium text-white py-3.5 rounded-lg capitalize",
              {
                "p-4": onlyIcon,
              },
              className,
            )}
          >
            <Plus className="size-4 text-white shrink-0" />
            {!onlyIcon && <p className="text-white text-nowrap">New Cast</p>}
          </ButtonAction>
        </AlertDialogTrigger>

        <AlertDialogContent className="w-[calc(100%-2rem)] max-h-[calc(100%-4rem)] overflow-y-auto !rounded-3xl p-0 !border-none">
          <div className="w-full p-4 flex flex-col relative gap-8">
            <ScheduleCastHeader {...data} />
            <CastForm {...data} />
            {pathDisplayed === "preview-cast" && (
              <CastPreview {...data} className="p-0" />
            )}
            <ScheduleCastButtons
              {...data}
              onScheduleAndNoUuid={onScheduleAndNoUuid}
              onScheduleAndUserIsNotOnchain={onScheduleAndUserIsNotOnchain}
            />
            <ScheduleCastTime {...data} />
          </div>
        </AlertDialogContent>
      </AlertDialog>

      <Loader isLoading={isLoading} />
    </>
  );
}
