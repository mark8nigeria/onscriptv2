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
import { deleteFilesAction } from "@/features/upload/action/deleteFiles.action";
import { saveToDraft as saveToDraftAction } from "../actions/saveToDraft.action";
import { useAppSelector } from "@/utils";
import { CastData } from "@/types/cast.types";
import { CastCardProps } from "../components/CastCard/cast-card.types";

export type PathDisplayed = "preview-cast" | "create-cast";
const titles: Record<PathDisplayed, string> = {
  "preview-cast": "Preview Cast",
  "create-cast": "New Cast",
};

type useCastProps = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSetPublishTimeOpen: boolean;
  setIsSetPublishTimeOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function useCastModal({
  isModalOpen,
  setIsModalOpen,
  isSetPublishTimeOpen,
  setIsSetPublishTimeOpen,
}: useCastProps) {
  const [castId, setCastId] = useState<string>();
  const [pathDisplayed, setPathDisplayed] =
    useState<PathDisplayed>("create-cast");
  const [castMedia, setCastMedia] = useState<SelectMediaType[]>([]);
  const MAX_MEDIA = 4;

  const router = useRouter();

  const { id } = useAppSelector((state) => state.user);
  const { castData, parseCast } = useCastParserNeynar(castMedia);
  const { handleChange, text, reset, setText } = useByteLimitedText();
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

  const handleFileUpload = useCallback(async (): Promise<
    { url: string; fileId?: string; type?: "image" | "video" }[] | void
  > => {
    const castData = await parseCast(text);

    const mediaWithIndex = castData.embeds.map((media, i) => ({
      ...media,
      index: i,
    }));

    // Files that need uploading
    const filesToOptimize = mediaWithIndex.filter((m) => !!m.file);

    const optimizedMedia = await optimizeMedia(
      filesToOptimize.map((m) => m.file!),
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

    let error = false;
    const uploadedFiles: { url: string; index: number; fileId: string }[] = [];

    uploadFileResponse.forEach((file, idx) => {
      if ("error" in file) {
        error = true;
      } else {
        uploadedFiles.push({
          url: file.fileUrl,
          fileId: file.id,
          index: filesToOptimize[idx].index,
        });
      }
    });

    if (error) {
      await deleteFilesAction(uploadedFiles.map((f) => f.fileId));
      toast.error("Error uploading file. Please try again");
      setIsLoading(false);
      return;
    }

    // Build single ordered array of { url, fileId?, type? }
    const files = mediaWithIndex.map((media) => {
      const uploaded = uploadedFiles.find((f) => f.index === media.index);
      if (uploaded) {
        return { url: uploaded.url, fileId: uploaded.fileId, type: media.type };
      }
      return { url: media.url, type: media.type, fileId: media.fileId }; // preserve existing
    });

    return files;
  }, [castMedia, text]);

  const handleSchedulePublish = useCallback(
    async (date: Date, userId: string) => {
      if (new Date() > date) {
        toast.error("Date cannot be in the past");
        return;
      }

      const castData = await parseCast(text);

      if (castData.text.length === 0 && castData.embeds.length === 0) {
        toast.error("Cast is empty");
        return;
      }

      setIsLoading(true);

      const embeds = await handleFileUpload();

      if (!embeds) {
        setIsLoading(false);
        return;
      }

      const body: ScheduleCastPostType = {
        ...castData,
        embeds,
        scheduledAt: date,
        userId,
        status: PostStatusSchema.enum.SCHEDULED,
        castId,
      };

      const res = await fetch("/api/cast/schedule", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        await deleteFilesAction(
          embeds.map((f) => f.fileId).filter((f) => f !== undefined),
        );
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
    [castData, resetModal, text, castMedia],
  );

  const saveToDraft = useCallback(async () => {
    if (!id) return;
    const castData = await parseCast(text);

    setIsLoading(true);

    const embeds = await handleFileUpload();

    if (!embeds) {
      setIsLoading(false);
      return;
    }
    console.log({ embeds });

    const body: ScheduleCastPostType = {
      ...castData,
      embeds,
      userId: id,
      status: PostStatusSchema.enum.DRAFT,
    };

    const res = await saveToDraftAction(body, castId);

    if ("error" in res) {
      await deleteFilesAction(
        embeds.map((f) => f.fileId).filter((f) => f !== undefined),
      );
      toast.error(res.error || "Something went wrong");
      setIsLoading(false);
      return;
    }

    toast.success(res.success);
    router.refresh();
    setIsLoading(false);
    resetModal(false);
  }, [castData, resetModal, text, castMedia]);

  const setPreviewData = useCallback(
    (castData: CastCardProps) => {
      setCastId(castData.id);
      setText(castData.text);
      setCastMedia(castData.embeds as unknown as SelectMediaType[]);
    },
    [isModalOpen],
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
    setIsLoading,
    saveToDraft,
    setPreviewData,
  };
}
