"use client";

import React, { useEffect, useState } from "react";
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
import { CastCardProps } from "../CastCard/cast-card.types";

type ScheduleCastModalProps = {
  onScheduleAndNoUuid: () => void;
  onScheduleAndUserIsNotOnchain: () => void;
  onCastLimitExceeded: () => void;
  onlyIcon?: boolean;
  className?: string;
  castData?: CastCardProps;
  isModalOpen?: boolean;
  setIsModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  hideBtn?: boolean;

  isSetPublishTimeOpen?: boolean;
  setIsSetPublishTimeOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ScheduleCastModal({
  onScheduleAndNoUuid,
  onScheduleAndUserIsNotOnchain,
  className,
  onlyIcon,
  castData,
  isModalOpen,
  setIsModalOpen,
  hideBtn,
  isSetPublishTimeOpen,
  setIsSetPublishTimeOpen,
  onCastLimitExceeded,
}: ScheduleCastModalProps) {
  const [defaultModalOpenState, setDefaultModalOpenState] = useState(false);
  const [defaultPublishTimeOpen, setDefaultPublishTimeOpen] = useState(false);

  const data = useCastModal({
    isModalOpen: isModalOpen || defaultModalOpenState,
    setIsModalOpen: setIsModalOpen || setDefaultModalOpenState,
    isSetPublishTimeOpen: isSetPublishTimeOpen || defaultPublishTimeOpen,
    setIsSetPublishTimeOpen:
      setIsSetPublishTimeOpen || setDefaultPublishTimeOpen,
  });
  const { pathDisplayed, isLoading, setPreviewData } = data;

  useEffect(() => {
    if (castData) setPreviewData(castData);
  }, [castData]);

  return (
    <>
      <AlertDialog
        open={isModalOpen || defaultModalOpenState}
        onOpenChange={setIsModalOpen || setDefaultModalOpenState}
      >
        {!hideBtn && (
          <AlertDialogTrigger asChild>
            <ButtonAction
              onClick={() => (setIsModalOpen || setDefaultModalOpenState)(true)}
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
        )}

        <AlertDialogContent className="w-[calc(100%-2rem)] max-h-[calc(100%-4rem)] overflow-y-auto !rounded-3xl p-0 !border-none">
          <div className="w-full p-4 flex flex-col relative gap-8">
            <ScheduleCastHeader {...data} castData={castData} />
            <CastForm {...data} />
            {pathDisplayed === "preview-cast" && (
              <CastPreview {...data} className="p-0" />
            )}
            <ScheduleCastButtons
              {...data}
              castData={castData}
              onScheduleAndNoUuid={onScheduleAndNoUuid}
              onScheduleAndUserIsNotOnchain={onScheduleAndUserIsNotOnchain}
              onCastLimitExceeded={onCastLimitExceeded}
            />

            <ScheduleCastTime
              {...data}
              castData={castData}
              onScheduleAndNoUuid={onScheduleAndNoUuid}
              onScheduleAndUserIsNotOnchain={onScheduleAndUserIsNotOnchain}
              onCastLimitExceeded={onCastLimitExceeded}
            />
          </div>
        </AlertDialogContent>
      </AlertDialog>

      <Loader isLoading={isLoading} />
    </>
  );
}
