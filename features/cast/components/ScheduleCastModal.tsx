"use client";

import { Lock, Plus } from "lucide-react";
import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import TextArea from "@/components/TextArea";
import ButtonAction from "@/components/ButtonAction";
import ImageInput from "@/components/ImageInput";
import CastCard from "./CastCard";
import { cn } from "@/lib/utils";
import useCastModal from "../utils/useCastModal";
import useCastParser from "../utils/useCastParser";
import { useByteLimitedText } from "../utils/useBytesLimitedText";

type ScheduleCastModalProps = {
  profilePic?: string | null;
  username?: string | null;
};

export default function ScheduleCastModal({
  profilePic,
  username,
}: ScheduleCastModalProps) {
  const {
    cast,
    files,
    inputArr,
    pathDisplayed,
    setPathDisplayed,
    isModalOpen,
    setIsModalOpen,
    setCast,
    setFiles,
    resetModal,
    titles,
  } = useCastModal();
  const { castData, parseCast } = useCastParser();
  const { handleChange, text } = useByteLimitedText();
  const [isLoading, setIsLoading] = useState(false);
  const handlePublish = async () => {
    setIsLoading(true);
    const res = await fetch("/api/cast/publish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(castData),
    });

    if (!res.ok) {
      console.log("error", await res.json());
      setIsLoading(false);
      return;
    }

    console.log("success", await res.json());
    setIsLoading(false);
    // resetModal(false);
  };

  // return (
  //   <ButtonAction
  //     btnType="primary"
  //     className="flex items-center justify-center gap-2 w-fit px-8"
  //   >
  //     <Lock className="size-4 text-white" />
  //     <p className="text-white">Coming soon</p>
  //   </ButtonAction>
  // );

  return (
    <AlertDialog open={isModalOpen} onOpenChange={resetModal}>
      <AlertDialogTrigger className="primary flex items-center justify-center gap-2 w-fit px-8 bg-black hover:bg-black/80 font-medium text-white py-3.5 rounded-lg capitalize">
        <Plus className="size-4 text-white" />
        <p className="text-white">New Cast</p>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-[calc(100%-2rem)] max-h-[calc(100%-4rem)] overflow-y-auto !rounded-3xl p-4 gap-8">
        <AlertDialogHeader>
          <div className="w-full flex items-center justify-between gap-4">
            <AlertDialogTitle className="text-xl text-left font-medium text-black">
              {titles[pathDisplayed]}
            </AlertDialogTitle>
            <ButtonAction
              onClick={() => setIsModalOpen(false)}
              btnType="badge"
              className="px-2"
            >
              <Plus className="size-4 rotate-45 text-black" />
            </ButtonAction>
          </div>
          {pathDisplayed === "preview-cast" && (
            <ButtonAction
              btnType="badge"
              className="w-fit capitalize"
              onClick={() => setPathDisplayed("create-cast")}
            >
              Continue editing
            </ButtonAction>
          )}
          <AlertDialogDescription className="hidden">
            Enter details of cast
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div
          className={cn("grid grid-cols-1 gap-4", {
            hidden: pathDisplayed !== "create-cast",
          })}
        >
          <TextArea
            onChange={handleChange}
            value={text}
            placeholder="Share a thought, an idea, or a story…"
          />
          <div className="grid grid-cols-4 gap-2 w-full">
            {inputArr.map((_, i) => {
              if (i > files.length) return null;
              return (
                <ImageInput
                  key={i}
                  setImgFile={(file) => {
                    setFiles((prevFiles) => {
                      const newFiles = [...prevFiles];
                      newFiles[i] = file;
                      return newFiles;
                    });
                  }}
                  setImgPicUrl={(url) => {
                    setCast((prevCast) => {
                      const newCast = { ...prevCast };
                      newCast.imgs[i] = url;
                      return newCast;
                    });
                  }}
                />
              );
            })}
          </div>
        </div>

        {pathDisplayed === "preview-cast" && (
          <CastCard
            imgs={cast.imgs}
            text={text}
            username={username}
            profilePic={profilePic}
            className="p-0"
            previewMode
          />
        )}

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
              if (pathDisplayed === "create-cast") {
                setPathDisplayed("preview-cast");
                parseCast(text);
              } else {
                handlePublish();
                // setIsModalOpen(false);
              }
            }}
            btnType="primary"
            className="w-full"
          >
            {isLoading
              ? "loading"
              : pathDisplayed === "create-cast"
                ? "Preview cast"
                : "Schedule cast"}
          </ButtonAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
