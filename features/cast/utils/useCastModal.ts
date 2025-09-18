"use client";

import { useCallback, useState } from "react";
import useCastParserNeynar from "./useCasterParserNeynar";
import { useByteLimitedText } from "./useBytesLimitedText";
import { toast } from "sonner";
import { PostStatusSchema } from "../schemas/cast.schema";

export type PathDisplayed = "preview-cast" | "create-cast";
const titles: Record<PathDisplayed, string> = {
  "preview-cast": "Preview Cast",
  "create-cast": "New Cast",
};

type useCastModalInput = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function useCastModal({
  isModalOpen,
  setIsModalOpen,
}: useCastModalInput) {
  const [isSetPublishTimeOpen, setIsSetPublishTimeOpen] = useState(false);
  const [pathDisplayed, setPathDisplayed] =
    useState<PathDisplayed>("create-cast");
  const [files, setFiles] = useState<File[]>([]);
  const [castImgs, setCastImgs] = useState<string[]>([]);
  const MAX_IMAGES = 4;
  const inputArr: undefined[] = [...Array(MAX_IMAGES)];

  const { castData, parseCast } = useCastParserNeynar();
  const { handleChange, text } = useByteLimitedText();
  const [isLoading, setIsLoading] = useState(false);

  const resetModal = useCallback(
    (isOpen: boolean) => {
      setIsModalOpen(isOpen);
      parseCast("");
      setPathDisplayed("create-cast");
      setIsSetPublishTimeOpen(false);
      if (isOpen) setFiles([]);
    },
    [setIsModalOpen, parseCast, setPathDisplayed, setFiles], // dependencies
  );

  const finalEmbed = [...castData.embeds, ...castImgs.map((url) => ({ url }))];
  const finalData = {
    ...castData,
    embeds: finalEmbed,
  };

  const handleSchedulePublish = useCallback(
    async (date: Date, userId: string) => {
      if (new Date() > date) {
        toast.error("Date cannot be in the past");
        return;
      }

      setIsLoading(true);
      //This is for instant publishing
      // const res = await fetch("/api/cast/publish", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ ...castData, scheduledAt: date, userId }),
      // });

      // This is for scheduling
      const res = await fetch("/api/cast/schedule", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...castData,
          scheduledAt: date,
          userId,
          status: PostStatusSchema.enum.SCHEDULED,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        toast.error((await data.error) || "Something went wrong");
        setIsLoading(false);
        return;
      }

      console.log("success", await res.json());
      toast.success("Cast published successfully");
      setIsLoading(false);
      resetModal(false);
    },
    [castData, resetModal],
  );

  return {
    pathDisplayed,
    setPathDisplayed,
    files,
    setFiles,
    MAX_IMAGES,
    inputArr,
    resetModal,
    titles,
    castData,
    parseCast,
    handleChange,
    text,
    isLoading,
    handleSchedulePublish,
    setCastImgs,
    castImgs,
    finalData,
    isSetPublishTimeOpen,
    setIsSetPublishTimeOpen,
  };
}
