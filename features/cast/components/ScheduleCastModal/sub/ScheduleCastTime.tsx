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
import { checkIfUserHasSigner } from "@/features/signer/actions/checkIfSigner.action";
import { CastCardProps } from "../../CastCard/cast-card.types";
import { exceedCastLimit } from "@/features/cast/actions/exceedCastLimit.action";

type ScheduleCastTimeProps = {
  isSetPublishTimeOpen: boolean;
  setIsSetPublishTimeOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleSchedulePublish: (date: Date, userId: string) => Promise<void>;
  isLoading: boolean;
  onScheduleAndUserIsNotOnchain: () => void;
  onScheduleAndNoUuid: () => void;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  castData?: CastCardProps;
  onCastLimitExceeded: () => void;
};

export default function ScheduleCastTime({
  isSetPublishTimeOpen,
  setIsSetPublishTimeOpen,
  castData,
  handleSchedulePublish,
  isLoading,
  onScheduleAndNoUuid,
  onScheduleAndUserIsNotOnchain,
  setIsLoading,
  onCastLimitExceeded,
}: ScheduleCastTimeProps) {
  const [date, setDate] = useState<Date | undefined>(
    castData?.scheduledAt || undefined,
  );
  const [period, setPeriod] = React.useState<Period>("AM");

  const { isUserOnChain, isUuidApprove, id } = useAppSelector(
    (state) => state.user,
  );

  const handleSubmit = async () => {
    if (isLoading || !date || !id) return;

    if (!isUserOnChain) {
      onScheduleAndUserIsNotOnchain();
      return;
    }

    if (!isUuidApprove) {
      setIsLoading(true);
      const response = await checkIfUserHasSigner();

      if (response.error) {
        setIsLoading(false);
        onScheduleAndNoUuid();
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
              defaultDate={castData?.scheduledAt || undefined}
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
