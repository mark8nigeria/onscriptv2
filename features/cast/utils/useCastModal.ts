"use client";

import { useCallback, useState } from "react";
import useCastParserNeynar from "./useCasterParserNeynar";
import { useByteLimitedText } from "./useBytesLimitedText";
import { toast } from "sonner";
import { PostStatusSchema } from "../schemas/cast.schema";
import { optimizeMedia, uploadFiles } from "@/features/upload/utils";
import { ScheduleCastPostType } from "../schemas/scheduleCastPost.schema";
import { SelectMediaType } from "@/types/media.types";
import { useRouter } from "next/navigation";
import { deleteFilesAction } from "@/features/upload/action/deleteFilesAction";

export type PathDisplayed = "preview-cast" | "create-cast";
const titles: Record<PathDisplayed, string> = {
  "preview-cast": "Preview Cast",
  "create-cast": "New Cast",
};

export default function useCastModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSetPublishTimeOpen, setIsSetPublishTimeOpen] = useState(false);
  const [pathDisplayed, setPathDisplayed] =
    useState<PathDisplayed>("create-cast");
  const [castMedia, setCastMedia] = useState<SelectMediaType[]>([]);
  const MAX_MEDIA = 4;

  const router = useRouter();

  const { castData, parseCast } = useCastParserNeynar(castMedia);
  const { handleChange, text, reset } = useByteLimitedText();
  const [isLoading, setIsLoading] = useState(false);

  const resetModal = useCallback(
    (isOpen: boolean) => {
      setIsModalOpen(isOpen);
      reset();
      parseCast("");
      setPathDisplayed("create-cast");
      setIsSetPublishTimeOpen(false);
      castMedia.forEach(({ url }) => URL.revokeObjectURL(url));
      setCastMedia([]);
    },
    [setIsModalOpen, parseCast],
  );

  const handlePublishNow = useCallback(
    async (date: Date, userId: string) => {
      if (new Date() > date) {
        toast.error("Date cannot be in the past");
        return;
      }

      setIsLoading(true);
      //This is for instant publishing
      const res = await fetch("/api/cast/publish", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...castData, scheduledAt: date, userId }),
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

  const handleSchedulePublish = useCallback(
    async (date: Date, userId: string) => {
      if (new Date() > date) {
        toast.error("Date cannot be in the past");
        return;
      }

      setIsLoading(true);

      const optimizedMedia = await optimizeMedia(
        castMedia.map((media) => media.file).filter((file) => !!file),
      );

      const isError = optimizedMedia.find(({ error }) => !!error);

      if (isError) {
        toast.error(isError.error);
        setIsLoading(false);
        return;
      }

      const uploadFileResponse = await uploadFiles(
        optimizedMedia.map((media) => media.file),
      );

      if ("error" in uploadFileResponse) {
        toast.error(uploadFileResponse.error);
        setIsLoading(false);
        return;
      }

      console.log("uploadFileResponse", uploadFileResponse);

      const fileUrlArr: string[] = [];
      const filesId: string[] = [];
      let error = false;

      uploadFileResponse.forEach((file) => {
        if ("error" in file) {
          error = true;
        } else {
          fileUrlArr.push(file.fileUrl);
          filesId.push(file.id);
        }
      });

      if (error) {
        await deleteFilesAction(filesId);
        toast.error("Error uploading file. Please try again");
        setIsLoading(false);
        return;
      }

      const finalEmbeds = [
        ...castData.embeds
          .filter(({ file, type }) => !file && !type)
          .map((value) => ({
            url: value.url,
          })),
        ...fileUrlArr.map((url) => ({ url })),
      ];

      const body: ScheduleCastPostType = {
        ...castData,
        embeds: finalEmbeds,
        scheduledAt: date,
        userId,
        status: PostStatusSchema.enum.SCHEDULED,
        pinataFilesIds: filesId,
      };

      const res = await fetch("/api/cast/schedule", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        await deleteFilesAction(filesId);
        const data = await res.json();
        toast.error((await data.error) || "Something went wrong");
        setIsLoading(false);
        return;
      }

      toast.success("Cast published successfully");
      router.refresh();
      setIsLoading(false);
      resetModal(false);
    },
    [castData, resetModal],
  );

  return {
    pathDisplayed,
    setPathDisplayed,
    MAX_MEDIA,
    resetModal,
    titles,
    castData,
    parseCast,
    handleChange,
    text,
    isLoading,
    handleSchedulePublish,
    isSetPublishTimeOpen,
    setIsSetPublishTimeOpen,
    handlePublishNow,
    castMedia,
    setCastMedia,
    isModalOpen,
    setIsModalOpen,
  };
}
