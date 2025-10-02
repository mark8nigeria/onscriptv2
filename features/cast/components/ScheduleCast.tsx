"use client";

import React, { useState } from "react";
import ComeOnchainModal from "@/features/account/components/ComeOnchainModal";
import GoPremiumModal from "@/features/account/components/GoPremiumModal";
import RequestSignatureModal from "@/features/signer/components/RequestSignatureModal";
import { useAppSelector } from "@/utils";
import { toast } from "sonner";
import ScheduleCastModal from "./ScheduleCastModal";
import { CastCardProps } from "./CastCard/cast-card.types";

type ScheduleCastModalProps = {
  onlyIcon?: boolean;
  className?: string;
  castData?: CastCardProps;
  isModalOpen?: boolean;
  setIsModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  hideBtn?: boolean;
  isSetPublishTimeOpen?: boolean;
  setIsSetPublishTimeOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ScheduleCast({
  className,
  onlyIcon,
  ...props
}: ScheduleCastModalProps) {
  const [isComeOnchainModal, setIsComeOnchainModal] = useState(false);
  const [isRequestSignerModalOpen, setIsRequestSignerModalOpen] =
    useState(false);
  const [isGoPremiumModalOpen, setIsGoPremiumModalOpen] = useState(false);

  const { signerUuid, isUuidApprove } = useAppSelector((state) => state.user);

  return (
    <>
      <ScheduleCastModal
        {...props}
        className={className}
        onlyIcon={onlyIcon}
        onScheduleAndNoUuid={() => {
          toast.error("Signer is required to allow Onscript cast for you");
          setIsRequestSignerModalOpen(true);
        }}
        onScheduleAndUserIsNotOnchain={() => {
          toast.error("Casting is only accessible to users onchain");
          setIsComeOnchainModal(true);
        }}
        onCastLimitExceeded={() => {
          toast.error(
            "Weekly cast limit reached. Upgrade to premium to continue",
          );
          setIsGoPremiumModalOpen(true);
        }}
      />

      <ComeOnchainModal
        isModalOpen={isComeOnchainModal}
        setIsModalOpen={setIsComeOnchainModal}
        onSuccess={() => {
          if (!signerUuid || !isUuidApprove) {
            setIsRequestSignerModalOpen(true);
            return;
          }
        }}
      />

      <GoPremiumModal
        isModalOpen={isGoPremiumModalOpen}
        setIsModalOpen={setIsGoPremiumModalOpen}
        onSuccess={() => {
          if (!signerUuid || !isUuidApprove) {
            setIsRequestSignerModalOpen(true);
            return;
          }
        }}
      />

      <RequestSignatureModal
        isModalOpen={isRequestSignerModalOpen}
        setIsModalOpen={setIsRequestSignerModalOpen}
      />
    </>
  );
}
