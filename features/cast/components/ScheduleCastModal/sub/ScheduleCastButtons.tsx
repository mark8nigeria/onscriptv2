"use client";

import React from "react";
import ButtonAction from "@/components/ButtonAction";
import { PathDisplayed } from "@/features/cast/utils/useCastModal";
import { useAppSelector } from "@/utils";
import { CastData } from "@/types/cast.types";
import { SelectMediaType } from "@/types/media.types";
import { checkIfUserHasSigner } from "@/features/signer/actions/checkIfSigner.action";
import { CastCardProps } from "../../CastCard/cast-card.types";
import { exceedCastLimit } from "@/features/cast/actions/exceedCastLimit.action";

type ScheduleCastButtonsProps = {
  isLoading: boolean;
  pathDisplayed: PathDisplayed;
  setPathDisplayed: React.Dispatch<React.SetStateAction<PathDisplayed>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  parseCast: (text: string) => Promise<CastData>;
  text: string;
  setIsSetPublishTimeOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onScheduleAndUserIsNotOnchain: () => void;
  onScheduleAndNoUuid: () => void;
  castMedia: SelectMediaType[];
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  saveToDraft: () => Promise<void>;
  castData?: CastCardProps;
  onCastLimitExceeded: () => void;
};

export default function ScheduleCastButtons({
  isLoading,
  pathDisplayed,
  setPathDisplayed,
  parseCast,
  text,
  setIsSetPublishTimeOpen,
  onScheduleAndNoUuid,
  onScheduleAndUserIsNotOnchain,
  castMedia,
  setIsLoading,
  saveToDraft,
  onCastLimitExceeded,
  castData,
}: ScheduleCastButtonsProps) {
  const { isUserOnChain, isUuidApprove } = useAppSelector(
    (state) => state.user,
  );

  const handlePriBtnClick = async () => {
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
        setIsLoading(true);
        const response = await checkIfUserHasSigner();

        if (response.success) {
          setIsSetPublishTimeOpen(true);
          setIsLoading(false);
          return;
        }
        setIsLoading(false);

        onScheduleAndNoUuid();
        return;
      }

      setIsLoading(true);
      const result = await exceedCastLimit();

      if (result.error) {
        onCastLimitExceeded();
        setIsLoading(false);
        return;
      }

      setIsLoading(false);
      setIsSetPublishTimeOpen(true);
    }
  };

  return (
    <>
      <div className="w-full flex items-center justify-center gap-2">
        <ButtonAction
          disabled={isLoading || (text === "" && castMedia.length === 0)}
          onClick={saveToDraft}
          btnType="secondary"
          className="w-full"
        >
          Save to draft
        </ButtonAction>

        <ButtonAction
          disabled={isLoading || (text === "" && castMedia.length === 0)}
          onClick={handlePriBtnClick}
          btnType="primary"
          className="w-full"
        >
          {isLoading
            ? "loading..."
            : pathDisplayed === "create-cast"
              ? "Preview cast"
              : `${castData?.scheduledAt ? "Edit" : "Set"} publish time`}
        </ButtonAction>
      </div>
    </>
  );
}
