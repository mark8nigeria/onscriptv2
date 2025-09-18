"use client";

import { onscriptUserManagementAbi } from "@/constants/abis";
import { onscriptUserManagementContractAddress } from "@/constants/contractAddresses";
import { useReadContract } from "wagmi";

export default function useGetPremiumAmount() {
  const { data, isLoading, isError, refetch } = useReadContract({
    address: onscriptUserManagementContractAddress,
    abi: onscriptUserManagementAbi,
    functionName: "requiredWeiForPremium",
  });

  const refresh: () => Promise<void> = async () => {
    await Promise.all([refetch()]);
  };

  return {
    amount: data,
    isLoading,
    isError,
    refresh,
  };
}
