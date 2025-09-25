"use client";

import React, { useState } from "react";
import { DatePicker } from "@/components/DatePicker";
import { Period } from "@/utils/functions/time-picker";
import ButtonAction from "@/components/ButtonAction";
import { Plus } from "lucide-react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import TimePickerCombined from "@/components/TimePickerCombined";
import { toast } from "sonner";
import Loader from "@/components/Loader";
import { useAppSelector } from "@/utils";

type ScheduleCastTimeProps = {
  isSetPublishTimeOpen: boolean;
  setIsSetPublishTimeOpen: React.Dispatch<React.SetStateAction<boolean>>;
  castData: {
    embeds: {
      url: string;
    }[];
    text: string;
  };
  handleSchedulePublish: (date: Date, userId: string) => Promise<void>;
  isLoading: boolean;
};

export default function ScheduleCastTime({
  isSetPublishTimeOpen,
  setIsSetPublishTimeOpen,
  castData,
  handleSchedulePublish,
  isLoading,
}: ScheduleCastTimeProps) {
  const [date, setDate] = useState<Date>();
  const [period, setPeriod] = React.useState<Period>("AM");

  const { id } = useAppSelector((state) => state.user);

  const handleSubmit = () => {
    if (
      isLoading ||
      !date ||
      (castData.text.length === 0 && castData.embeds.length === 0) ||
      !id
    )
      return;
    if (new Date() > date) {
      toast.error("Date cannot be in the past");
      return;
    }

    handleSchedulePublish(date, id);
  };

  return (
    <AlertDialog
      open={isSetPublishTimeOpen}
      onOpenChange={setIsSetPublishTimeOpen}
    >
      <AlertDialogContent className="w-[calc(100%-4rem)] max-h-[calc(100%-4rem)] overflow-y-auto !rounded-3xl p-0 !border-none">
        <div className="relative z-[100] bg-white rounded-2xl p-4 space-y-8">
          <div className="flex items-center justify-between gap-4">
            <AlertDialogTitle className="text-xl text-left font-medium text-black">
              Set publish time
            </AlertDialogTitle>
            <AlertDialogDescription className="hidden">
              Set publish time
            </AlertDialogDescription>
            <ButtonAction
              disabled={isLoading}
              onClick={() => setIsSetPublishTimeOpen(false)}
              btnType="badge"
              className="px-2"
            >
              <Plus className="size-4 rotate-45 text-black" />
            </ButtonAction>
          </div>

          <div className="space-y-6">
            <DatePicker
              disabled={isLoading}
              onChange={(date) => {
                setDate(date);
                setPeriod("AM");
              }}
            />

            <TimePickerCombined
              disabled={!date || isLoading}
              date={date}
              setDate={setDate}
              period={period}
              setPeriod={setPeriod}
            />

            <ButtonAction btnType="primary" onClick={handleSubmit}>
              {isLoading ? "Scheduling..." : "Schedule Cast"}
            </ButtonAction>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
