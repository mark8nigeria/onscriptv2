"use client";

import ButtonAction from "@/components/ButtonAction";
import Loader from "@/components/Loader";
import { onscriptUserManagementAbi } from "@/constants/abis";
import { onscriptUserManagementContractAddress } from "@/constants/contractAddresses";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { toast } from "sonner";
import { useAccount, useWriteContract } from "wagmi";

export default function DeleteOnChainAccount({ address }: { address: string }) {
  const router = useRouter();
  const { address: connectWalletAddress } = useAccount();

  const { writeContract, isPending, isSuccess } = useWriteContract();

  const deleteAccount = () => {
    if (address !== connectWalletAddress) {
      toast.error(
        "The connected wallet doesn’t match the one you used to create your account.",
      );
      return;
    }
    writeContract({
      address: onscriptUserManagementContractAddress,
      abi: onscriptUserManagementAbi,
      functionName: "deleteUser",
    });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Your account has been deleted");
      router.refresh();
    }
  }, []);

  return (
    <div>
      <ButtonAction btnType="primary" onClick={deleteAccount}>
        Delete account
      </ButtonAction>
      <Loader isLoading={isPending} />
    </div>
  );
}
