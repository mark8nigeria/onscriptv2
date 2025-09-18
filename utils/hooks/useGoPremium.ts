"use client";

import ButtonAction from "@/components/ButtonAction";
import Loader from "@/components/Loader";
import { onscriptUserManagementAbi } from "@/constants/abis";
import { onscriptUserManagementContractAddress } from "@/constants/contractAddresses";
import { useGetPremiumAmount, useIsAddressOnChainAndPremium } from "@/utils";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { useAccount } from "wagmi";
import { useWriteContract } from "wagmi";

type OnchainAccountProps = {
  fid?: number;
  address: string;
};

export default function useGoPremium({ fid, address }: OnchainAccountProps) {
  const { address: connectWalletAddress } = useAccount(); //0x3097139c11366006F73Fd357c1F2489d8CF3B96A
  const { isUserOnChain, refresh, isLoading, isUserPremium } =
    useIsAddressOnChainAndPremium({ address });
  const { amount } = useGetPremiumAmount();

  const {
    writeContract,
    isPending,
    isSuccess,
    isError: isWriteError,
  } = useWriteContract();

  const goPremium = () => {
    if (isLoading) return;
    if (connectWalletAddress !== address) {
      toast.error(
        "The connected wallet doesn’t match the one you used to create your account.",
      );
      return;
    }

    if (isUserPremium) {
      toast.error("You're already a premium user");
      return;
    }

    if (isUserOnChain) {
      writeContract({
        address: onscriptUserManagementContractAddress,
        abi: onscriptUserManagementAbi,
        functionName: "payForPremium",
        value: amount,
      });
    } else {
      if (!fid) {
        toast.error("FID is required");
        return;
      }
      writeContract({
        address: onscriptUserManagementContractAddress,
        abi: onscriptUserManagementAbi,
        functionName: "registerAndGoPremium",
        args: [fid],
        value: amount,
      });
    }
  };

  useEffect(() => {
    async function handleSuccess() {
      if (isSuccess) {
        toast.success("You're a Premium User");
        await refresh();
      }
    }
    handleSuccess();
  }, [isSuccess]);

  useEffect(() => {
    if (isWriteError) {
      toast.error("Something went wrong");
    }
  }, [isWriteError]);

  return { goPremium, isPending, isSuccess };
}
