"use client";

import { onscriptUserManagementAbi } from "@/constants/abis";
import { onscriptUserManagementContractAddress } from "@/constants/contractAddresses";
import { useIsAddressOnChainAndPremium } from "@/utils";
import { useEffect } from "react";
import { toast } from "sonner";
import { useAccount } from "wagmi";
import { useWriteContract } from "wagmi";

type OnchainAccountProps = {
  fid: number;
  address: string;
};

export default function useComeOnchain({ fid, address }: OnchainAccountProps) {
  const { address: connectWalletAddress } = useAccount(); //0x3097139c11366006F73Fd357c1F2489d8CF3B96A
  const { isUserOnChain, refresh, isLoading } = useIsAddressOnChainAndPremium({
    address,
  });

  const { writeContract, isPending, isSuccess, isError } = useWriteContract();

  const comeOnchain = () => {
    if (connectWalletAddress !== address) {
      toast.error(
        "The connected wallet doesn’t match the one you used to create your account.",
      );
      return;
    }
    if (isLoading) return;

    if (isUserOnChain) {
      toast.error("You're already onchain");
      return;
    }

    writeContract({
      address: onscriptUserManagementContractAddress,
      abi: onscriptUserManagementAbi,
      functionName: "registerUser",
      args: [fid],
    });
  };

  useEffect(() => {
    async function handleSuccess() {
      if (isSuccess) {
        toast.success("You're onchain");
        await refresh();
      }
    }
    handleSuccess();
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      toast.error("Something went wrong");
    }
  }, [isError]);

  return { comeOnchain, isPending, isSuccess, isError };
}
