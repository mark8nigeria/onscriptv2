"use client";

import React, { useEffect } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Box, Plus } from "lucide-react";
import ButtonAction from "@/components/ButtonAction";
import { useAppSelector, useComeOnchain } from "@/utils";
import Loader from "@/components/Loader";
import { onchainFeatures } from "@/data/onchainFeatures.datat";

type ComeOnchainModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSuccess?: () => void;
};

export default function ComeOnchainModal({
  isModalOpen,
  setIsModalOpen,
  onSuccess,
}: ComeOnchainModalProps) {
  const { comeOnchain, isPending, isSuccess } = useComeOnchain();
  const { isUserOnChain } = useAppSelector((state) => state.user);

  const handleBtnClick = () => {
    comeOnchain();
  };

  useEffect(() => {
    if (isSuccess) {
      setIsModalOpen(false);
      if (onSuccess) onSuccess();
    }
  }, [isSuccess]);

  return (
    <>
      <AlertDialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <AlertDialogContent className="w-[calc(100%-2rem)] max-h-[calc(100%-4rem)] overflow-y-auto !rounded-3xl p-0 !border-none text-black">
          <div className="w-full p-4 flex flex-col relative gap-8">
            <AlertDialogHeader>
              <div className="w-full flex items-center justify-between gap-4">
                <AlertDialogTitle className="text-xl text-left font-medium text-black capitalize">
                  Come Onchain
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
                Come Onchain
              </AlertDialogDescription>
            </AlertDialogHeader>

            <div className="w-full flex flex-col items-center justify-center gap-8">
              <div className="w-full flex flex-col items-center justify-center gap-2">
                <div className="p-4 rounded-full bg-black/10 w-fit">
                  <div className="p-4 rounded-full bg-black w-fit">
                    <Box className="text-white size-10" />
                  </div>
                </div>
                <h2 className="text-center text-xl leading-[1] font-semibold text-black">
                  Come Onchain Benefits
                </h2>
              </div>

              <div className="space-y-4 w-full">
                {onchainFeatures.map(({ Icon, description, title }, i) => (
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

              <ButtonAction
                onClick={handleBtnClick}
                disabled={isUserOnChain}
                btnType="primary"
              >
                Come Onchain
              </ButtonAction>
            </div>
          </div>
        </AlertDialogContent>
      </AlertDialog>

      <Loader isLoading={isPending} />
    </>
  );
}
