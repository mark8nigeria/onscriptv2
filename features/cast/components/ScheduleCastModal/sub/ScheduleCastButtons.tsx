"use client";

import React from "react";
import ButtonAction from "@/components/ButtonAction";
import { PathDisplayed } from "@/features/cast/utils/useCastModal";
import { useAppSelector } from "@/utils";
import { CastData } from "@/types/cast.types";
import { SelectMediaType } from "@/types/media.types";

type ScheduleCastButtonsProps = {
  isLoading: boolean;
  pathDisplayed: PathDisplayed;
  setPathDisplayed: React.Dispatch<React.SetStateAction<PathDisplayed>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  parseCast: (text: string) => Promise<void>;
  text: string;
  setIsSetPublishTimeOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onScheduleAndUserIsNotOnchain: () => void;
  onScheduleAndNoUuid: () => void;
  castMedia: SelectMediaType[];
};

export default function ScheduleCastButtons({
  isLoading,
  pathDisplayed,
  setPathDisplayed,
  // setIsModalOpen,
  parseCast,
  text,
  setIsSetPublishTimeOpen,
  onScheduleAndNoUuid,
  onScheduleAndUserIsNotOnchain,
  castMedia,
}: ScheduleCastButtonsProps) {
  const { isUserOnChain, isUuidApprove } = useAppSelector(
    (state) => state.user,
  );

  const handlePriBtnClick = () => {
    parseCast(text);
    if (pathDisplayed === "create-cast") {
      if (text === "" && castMedia.length === 0) {
        return;
      }
      setPathDisplayed("preview-cast");
    } else {
      if (!isUserOnChain) {
        onScheduleAndUserIsNotOnchain();
        return;
      }
      if (!isUuidApprove) {
        onScheduleAndNoUuid();
        return;
      }
      setIsSetPublishTimeOpen(true);
    }
  };

  return (
    <>
      <div className="w-full flex items-center justify-center gap-2">
        {/* <ButtonAction
          onClick={() => setIsModalOpen(false)}
          btnType="secondary"
          className="w-full"
        >
          Save to draft
        </ButtonAction> */}
        <ButtonAction
          disabled={isLoading || (text === "" && castMedia.length === 0)}
          onClick={handlePriBtnClick}
          btnType="primary"
          className="w-full"
        >
          {isLoading
            ? "loading"
            : pathDisplayed === "create-cast"
              ? "Preview cast"
              : "Set publish time"}
        </ButtonAction>
      </div>
    </>
  );
}
