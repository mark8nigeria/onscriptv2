"use client";

import React from "react";
import ButtonAction from "@/components/ButtonAction";
import { PathDisplayed } from "@/features/cast/utils/useCastModal";

export default function ScheduleCastButtons({
  isLoading,
  pathDisplayed,
  setPathDisplayed,
  setIsModalOpen,
  parseCast,
  text,
  setIsSetPublishTimeOpen,
}: {
  isLoading: boolean;
  pathDisplayed: PathDisplayed;
  setPathDisplayed: React.Dispatch<React.SetStateAction<PathDisplayed>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  parseCast: (text: string) => Promise<void>;
  text: string;
  setIsSetPublishTimeOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <div className="w-full flex items-center justify-center gap-2">
        <ButtonAction
          onClick={() => setIsModalOpen(false)}
          btnType="secondary"
          className="w-full"
        >
          Save to draft
        </ButtonAction>
        <ButtonAction
          disabled={isLoading}
          onClick={() => {
            parseCast(text);
            if (pathDisplayed === "create-cast") {
              setPathDisplayed("preview-cast");
            } else {
              setIsSetPublishTimeOpen(true);
            }
          }}
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
