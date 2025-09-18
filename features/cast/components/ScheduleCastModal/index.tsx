"use client";

import React from "react";
import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";
import useCastModal from "@/features/cast/utils/useCastModal";
import CastForm from "./sub/CastForm";
import ScheduleCastHeader from "./sub/ScheduleCastHeader";
import ScheduleCastButtons from "./sub/ScheduleCastButtons";
import ScheduleCastTime from "./sub/ScheduleCastTime";
import CastPreview from "../CastPreview";

type ScheduleCastModalProps = {
  profilePic?: string | null;
  username?: string | null;
  userId: string;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ScheduleCastModal({
  profilePic,
  username,
  userId,
  isModalOpen,
  setIsModalOpen,
}: ScheduleCastModalProps) {
  const {
    files,
    inputArr,
    pathDisplayed,
    setPathDisplayed,
    setFiles,
    resetModal,
    titles,
    handleChange,
    handleSchedulePublish,
    isLoading,
    text,
    parseCast,
    setCastImgs,
    finalData,
    isSetPublishTimeOpen,
    setIsSetPublishTimeOpen,
  } = useCastModal({ isModalOpen, setIsModalOpen });

  return (
    <AlertDialog open={isModalOpen} onOpenChange={resetModal}>
      <AlertDialogContent className="w-[calc(100%-2rem)] max-h-[calc(100%-4rem)] overflow-y-auto !rounded-3xl p-0 !border-none">
        <div className="w-full p-4 flex flex-col relative gap-8">
          <ScheduleCastHeader
            pathDisplayed={pathDisplayed}
            setPathDisplayed={setPathDisplayed}
            setIsModalOpen={setIsModalOpen}
            titles={titles}
          />
          <CastForm
            handleChange={handleChange}
            text={text}
            files={files}
            inputArr={inputArr}
            pathDisplayed={pathDisplayed}
            setFiles={setFiles}
            setCastImgs={setCastImgs}
          />
          {pathDisplayed === "preview-cast" && (
            <CastPreview
              {...finalData}
              username={username}
              profilePic={profilePic}
              className="p-0"
            />
          )}

          <ScheduleCastButtons
            text={text}
            isLoading={isLoading}
            pathDisplayed={pathDisplayed}
            setPathDisplayed={setPathDisplayed}
            setIsModalOpen={setIsModalOpen}
            parseCast={parseCast}
            setIsSetPublishTimeOpen={setIsSetPublishTimeOpen}
          />

          <ScheduleCastTime
            isSetPublishTimeOpen={isSetPublishTimeOpen}
            setIsSetPublishTimeOpen={setIsSetPublishTimeOpen}
            finalData={finalData}
            handleSchedulePublish={handleSchedulePublish}
            isLoading={isLoading}
            userId={userId}
          />
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
