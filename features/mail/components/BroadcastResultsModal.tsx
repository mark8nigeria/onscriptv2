"use client";

import { Loader2, Plus } from "lucide-react";
import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import ButtonAction from "@/components/ButtonAction";
import { sendMailFromApp, type MailResult } from "@/lib/send-mail";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

type ScheduleCastModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  subject: string;
  text: string;
  results: MailResult[];
};

export default function BroadcastResultsModal({
  isModalOpen,
  setIsModalOpen,
  subject,
  text,
  results,
}: ScheduleCastModalProps) {
  return (
    <AlertDialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <AlertDialogContent className="w-[calc(100%-2rem)] max-h-[calc(100%-4rem)] overflow-y-auto !rounded-3xl p-4 gap-8">
        <AlertDialogHeader>
          <div className="w-full flex items-center justify-between gap-4">
            <AlertDialogTitle className="text-xl text-left font-medium text-black">
              Broadcast Results
            </AlertDialogTitle>

            <ButtonAction
              onClick={() => setIsModalOpen(false)}
              btnType="badge"
              className="px-2"
            >
              <Plus className="size-4 rotate-45 text-black" />
            </ButtonAction>
          </div>
          <AlertDialogDescription className="hidden">
            Broadcast Results
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="divide-y divide-neutral-100 space-y-4 border-y border-neutral-100 py-4">
          {results.map(({ recipient, status }, i) => {
            if (!recipient) return;

            return (
              <Result
                key={i}
                recipient={recipient}
                status={status}
                subject={subject}
                text={text}
              />
            );
          })}
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}

interface ResultProps extends MailResult {
  text: string;
  subject: string;
  recipient: string;
}

function Result({ recipient, status, subject, text }: ResultProps) {
  const [statusState, setStatusState] = useState(status);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="w-full flex items-center justify-between pt-4 first:pt-0">
      <p>{recipient}</p>
      <ButtonAction
        btnType="badge"
        disabled={isLoading || statusState === "success"}
        onClick={async () => {
          if (status === "failed") {
            setIsLoading(true);
            const res = await sendMailFromApp({ recipient, subject, text });
            if (res.status === "success") {
              setStatusState("success");
              toast.success("Email sent successfully");
            } else {
              setStatusState("failed");
              toast.error((res.error as string) || "Failed to send email");
            }
            setIsLoading(false);
          }
        }}
        className={cn(
          "border border-green-500 bg-green-500/10 text-green-500 rounded-full py-1 hover:bg-green-500/10 capitalize",
          {
            "border border-red-500 bg-red-500/10 text-red-500 rounded-full py-1 hover:bg-orange-500/10":
              statusState === "failed",
          },
        )}
      >
        {isLoading && statusState === "failed" ? (
          <Loader2 className="animate-spin size-4" />
        ) : (
          `${statusState === "failed" ? "retry" : statusState}`
        )}
      </ButtonAction>
    </div>
  );
}
