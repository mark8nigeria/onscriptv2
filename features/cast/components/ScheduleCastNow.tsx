"use client";

import { CalendarClock, Plus } from "lucide-react";
import React, { useState } from "react";
import ScheduleCastModal from "./ScheduleCastModal";
import ButtonAction from "@/components/ButtonAction";
import { useIsAddressOnChainAndPremium } from "@/utils";
import ComeOnchainAndGoPremium from "@/features/account/components/ComeOnchainAndGoPremium";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { RequestSignature } from "@/features/signer/components";
import DeleteOnChainAccount from "@/features/account/components/DeleteOnChainAccount";

type ScheduleCastNowProps = {
  profilePic?: string | null;
  username?: string | null;
  userId: string;

  //
  signerUuid: string | null;
  walletAddress: string;
  isUuidApprove: boolean | null;
  isPremium: boolean;
  fid: number;
};

export default function ScheduleCastNow({
  profilePic,
  username,
  userId,
  isUuidApprove,
  signerUuid,
  walletAddress,
  fid,
}: ScheduleCastNowProps) {
  const [isCastModalOpen, setIsCastModalOpen] = useState(false);
  const [isComeOnchainModal, setIsComeOnchainModal] = useState(false);
  const [isRequestSignerModalOpen, setIsRequestSignerModalOpen] =
    useState(false);
  const { refresh, isUserOnChainAndPremium } = useIsAddressOnChainAndPremium({
    address: walletAddress,
  });

  const handleCastBtnClick = () => {
    console.log({ isUserOnChainAndPremium, isUuidApprove });

    if (!isUserOnChainAndPremium) {
      setIsComeOnchainModal(true);
      return;
    }
    if (!isUuidApprove) {
      setIsRequestSignerModalOpen(true);
      return;
    }
    setIsCastModalOpen(true);
  };

  return (
    <div className="w-full bg-white p-8 rounded-3xl flex items-center justify-center gap-4 flex-col shadow-xl shadow-black/[0.05]">
      <div className="border border-neutral-100 p-4 rounded-full">
        <CalendarClock className="size-8" />
      </div>
      <div>
        <h4 className="text-lg font-medium text-center">Schedule a cast now</h4>
        <p className="text-center text-neutral-700">
          Keep your content flowing
        </p>
      </div>

      <DeleteOnChainAccount address={walletAddress} />

      <ButtonAction
        onClick={handleCastBtnClick}
        className="primary flex items-center justify-center gap-2 w-fit px-8 bg-black hover:bg-black/80 font-medium text-white py-3.5 rounded-lg capitalize"
      >
        <Plus className="size-4 text-white" />
        <p className="text-white">New Cast</p>
      </ButtonAction>

      <ScheduleCastModal
        userId={userId}
        profilePic={profilePic}
        username={username}
        isModalOpen={isCastModalOpen}
        setIsModalOpen={setIsCastModalOpen}
      />
      <ComeOnchainAndGoPremium
        isModalOpen={isComeOnchainModal}
        setIsModalOpen={setIsComeOnchainModal}
        address={walletAddress}
        fid={fid}
        setIsRequestSignerModalOpen={setIsRequestSignerModalOpen}
      />

      <AlertDialog
        open={isRequestSignerModalOpen}
        onOpenChange={setIsRequestSignerModalOpen}
      >
        <AlertDialogContent className="w-[calc(100%-2rem)] max-h-[calc(100%-4rem)] overflow-y-auto !rounded-3xl p-0 !border-none">
          <div className="w-full p-4 flex flex-col relative gap-8">
            <AlertDialogHeader>
              <div className="w-full flex items-center justify-between gap-4">
                <AlertDialogTitle className="text-xl text-left font-medium text-black">
                  Request Signer
                </AlertDialogTitle>
                <ButtonAction
                  onClick={() => setIsRequestSignerModalOpen(false)}
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

            <div>
              <RequestSignature />
            </div>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
