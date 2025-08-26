"use client";

import { Plus } from "lucide-react";
import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import CastCard from "../CastCard";
import useCastModal from "@/features/cast/utils/useCastModal";
import CastForm from "./sub/CastForm";
import ScheduleCastHeader from "./sub/ScheduleCastHeader";
import ScheduleCastButtons from "./sub/ScheduleCastButtons";
import ScheduleCastTime from "./sub/ScheduleCastTime";

type ScheduleCastModalProps = {
  profilePic?: string | null;
  username?: string | null;
  userId: string;
};

export default function ScheduleCastModal({
  profilePic,
  username,
  userId,
}: ScheduleCastModalProps) {
  const {
    files,
    inputArr,
    pathDisplayed,
    setPathDisplayed,
    isModalOpen,
    setIsModalOpen,
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
  } = useCastModal();

  return (
    <AlertDialog open={isModalOpen} onOpenChange={resetModal}>
      <AlertDialogTrigger className="primary flex items-center justify-center gap-2 w-fit px-8 bg-black hover:bg-black/80 font-medium text-white py-3.5 rounded-lg capitalize">
        <Plus className="size-4 text-white" />
        <p className="text-white">New Cast</p>
      </AlertDialogTrigger>
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
            <CastCard
              {...finalData}
              username={username}
              profilePic={profilePic}
              className="p-0"
              previewMode
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
