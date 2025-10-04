"use client";

import React, { useEffect } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { BadgeCheck, Plus } from "lucide-react";
import ButtonAction from "@/components/ButtonAction";
import { useAppSelector, useGoPremium } from "@/utils";
import Loader from "@/components/Loader";
import { premiumFeatures } from "@/data/premiumFeatures.data";

type GoPremiumProps = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSuccess?: () => void;
};

export default function GoPremiumModal({
  isModalOpen,
  setIsModalOpen,
  onSuccess,
}: GoPremiumProps) {
  const { isUserPremium } = useAppSelector((state) => state.user);
  const { goPremium, isPending, isSuccess } = useGoPremium();

  const handleBtnClick = () => {
    goPremium();
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
                  Go premium
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
                Enter details of cast
              </AlertDialogDescription>
            </AlertDialogHeader>

            <div className="w-full flex flex-col items-center justify-center gap-8">
              <div className="w-full flex flex-col items-center justify-center gap-2">
                <div className="p-4 rounded-full bg-black/10 w-fit">
                  <div className="p-4 rounded-full bg-black w-fit">
                    <BadgeCheck className="text-white size-10" />
                  </div>
                </div>
                <h2 className="text-center text-xl leading-[1] font-semibold text-black">
                  Premium Benefits
                </h2>
                <p className="text-center text-black/70 max-w-[13pc]">
                  Step into Premium and unlock the full experience.
                </p>
              </div>

              <div className="space-y-4 w-full">
                {premiumFeatures.map(({ Icon, description, title }, i) => (
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

              <div className="w-full space-y-2">
                <p>Unlock premium with a one time $1 ETH payment.</p>

                <ButtonAction
                  onClick={handleBtnClick}
                  disabled={isUserPremium}
                  btnType="primary"
                >
                  Go premium for $1 ETH
                </ButtonAction>
              </div>
            </div>
          </div>
        </AlertDialogContent>
      </AlertDialog>

      <Loader isLoading={isPending} />
    </>
  );
}
