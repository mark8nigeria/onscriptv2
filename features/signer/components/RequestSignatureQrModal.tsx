"use client";

import { Copy } from "lucide-react";
import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import ButtonAction from "@/components/ButtonAction";
import QRCode from "react-qr-code";
import { copyText } from "@/utils";
import { useOpenUrl } from "@coinbase/onchainkit/minikit";

type RequestSignatureQrModalProps = {
  deeplinkUrl: string | undefined;
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
};

export default function RequestSignatureQrModal({
  deeplinkUrl,
  isModalOpen,
  setIsModalOpen,
}: RequestSignatureQrModalProps) {
  const openUrl = useOpenUrl();

  return (
    <AlertDialog open={isModalOpen}>
      <AlertDialogContent className="w-[calc(100%-2rem)] max-h-[calc(100%-4rem)] overflow-y-auto !rounded-3xl p-4 gap-8">
        <AlertDialogHeader>
          <div className="w-full flex items-center justify-between gap-4">
            <AlertDialogTitle className="text-xl text-left font-medium capitalize text-black">
              Scan to approve
            </AlertDialogTitle>
          </div>

          <AlertDialogDescription className="hidden">
            Scan to approve
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className={"grid grid-cols-1 gap-4"}>
          {deeplinkUrl && (
            <div className="w-full flex items-center justify-center flex-col gap-8">
              <QRCode value={deeplinkUrl} />

              <div className="w-full grid grid-cols-2 gap-2">
                <ButtonAction
                  btnType="secondary"
                  onClick={() => copyText(deeplinkUrl)}
                  className="flex items-center justify-center gap-2"
                >
                  <Copy className="size-4" />
                  Copy link
                </ButtonAction>
                <ButtonAction
                  btnType="primary"
                  onClick={() => openUrl(deeplinkUrl)}
                >
                  Click if on phone
                </ButtonAction>
              </div>
            </div>
          )}
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
