"use client";

import { onscriptUserManagementAbi } from "@/constants/abis";
import { onscriptUserManagementContractAddress } from "@/constants/contractAddresses";
import { setUserPremium } from "@/redux/user.slice";
import { useAppDispatch, useAppSelector, useGetPremiumAmount } from "@/utils";
import React, { useEffect } from "react";
import { toast } from "sonner";
import { useWriteContract } from "wagmi";

export default function useGoPremium() {
  const { amount } = useGetPremiumAmount();
  const { isUserPremium, isUserOnChain, isLoading, isError, errorStateMent } =
    useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const {
    writeContract,
    isPending,
    isSuccess,
    isError: isWriteError,
  } = useWriteContract();

  const goPremium = () => {
    if (isLoading) return;
    if (isError) {
      toast.error(errorStateMent);
      return;
    }
    if (!isUserOnChain) {
      toast.error("Only users onchain can go premium");
      return;
    }
    if (isUserPremium) {
      toast.error("You're already a premium user");
      return;
    }

    writeContract({
      address: onscriptUserManagementContractAddress,
      abi: onscriptUserManagementAbi,
      functionName: "payForPremium",
      value: amount,
    });
  };

  useEffect(() => {
    async function handleSuccess() {
      if (isSuccess) {
        dispatch(setUserPremium(true));
        toast.success("You're a Premium User");
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
