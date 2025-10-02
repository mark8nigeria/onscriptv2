"use client";

import { Plus } from "lucide-react";
import React from "react";
import {
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import ButtonAction from "@/components/ButtonAction";
import { type PathDisplayed } from "@/features/cast/utils/useCastModal";
import { CastCardProps } from "../../CastCard/cast-card.types";

type ScheduleCastHeaderProps = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  pathDisplayed: PathDisplayed;
  setPathDisplayed: React.Dispatch<React.SetStateAction<PathDisplayed>>;
  titles: Record<PathDisplayed, string>;
  castData?: CastCardProps;
};

export default function ScheduleCastHeader({
  pathDisplayed,
  setPathDisplayed,
  setIsModalOpen,
  titles,
  castData,
}: ScheduleCastHeaderProps) {
  return (
    <AlertDialogHeader>
      <div className="w-full flex items-center justify-between gap-4">
        <AlertDialogTitle className="text-xl text-left font-medium text-black">
          {castData?.id ? "Edit Cast" : titles[pathDisplayed]}
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
  );
}
