"use client";

import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Plus, Signature } from "lucide-react";
import ButtonAction from "@/components/ButtonAction";
import RequestSignature from "./RequestSignature";
import { signatureBenefits } from "@/data/signatureBenefits.data";

type RequestSignatureModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function RequestSignatureModal({
  isModalOpen,
  setIsModalOpen,
}: RequestSignatureModalProps) {
  return (
    <AlertDialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <AlertDialogContent className="w-[calc(100%-2rem)] max-h-[calc(100%-4rem)] overflow-y-auto !rounded-3xl p-0 !border-none">
        <div className="w-full p-4 flex flex-col relative gap-8 text-black">
          <AlertDialogHeader>
            <div className="w-full flex items-center justify-between gap-4">
              <AlertDialogTitle className="text-xl text-left font-medium text-black capitalize">
                Request Signer
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
              This allows Onscript cast for you
            </AlertDialogDescription>
          </AlertDialogHeader>

          <div className="w-full flex flex-col items-center justify-center gap-8">
            <div className="w-full flex flex-col items-center justify-center gap-2">
              <div className="p-4 rounded-full bg-black/10 w-fit">
                <div className="p-4 rounded-full bg-black w-fit">
                  <Signature className="text-white size-10" />
                </div>
              </div>
              <h2 className="text-center text-xl leading-[1] font-semibold text-black">
                Signature Benefits
              </h2>
            </div>

            <div className="space-y-4 w-full">
              {signatureBenefits.map(({ Icon, description, title }, i) => (
                <div
                  key={i}
                  className="w-full flex items-center justify-start gap-2 border border-neutral-200/70 p-4 rounded-xl"
                >
                  <div className="border border-neutral-200/70 p-3 rounded-full">
                    <Icon className="size-6" />
                  </div>
                  <div>
                    <h4 className="text-base capitalize font-medium ">
                      {title}
                    </h4>
                    <p className=" text-neutral-700 text-[0.625rem]">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <RequestSignature />
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
