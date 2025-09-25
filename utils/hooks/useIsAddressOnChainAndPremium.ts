"use client";

import { onscriptUserManagementAbi } from "@/constants/abis";
import { onscriptUserManagementContractAddress } from "@/constants/contractAddresses";
import { useEffect } from "react";
import { useReadContract } from "wagmi";

export default function useIsAddressOnChainAndPremium({
  address,
}: {
  address: string;
}) {
  const {
    data: isUserRegistered,
    isLoading: isUserRegisteredLoading,
    isError: isUserRegisteredError,
    refetch: refetchIsUserRegistered,
  } = useReadContract({
    address: onscriptUserManagementContractAddress,
    abi: onscriptUserManagementAbi,
    functionName: "getIsUserRegistered",
    args: [address],
    query: {
      enabled: address !== "",
    },
  });

  const {
    data: isUserPremium,
    isLoading: isUserPremiumLoading,
    isError: isUserPremiumError,
    refetch: refetchIsUserPremium,
  } = useReadContract({
    address: onscriptUserManagementContractAddress,
    abi: onscriptUserManagementAbi,
    functionName: "getIsUserPremium",
    args: [address],
    query: {
      enabled: address !== "",
    },
  });

  const refresh: () => Promise<void> = async () => {
    await Promise.all([refetchIsUserRegistered(), refetchIsUserPremium()]);
  };

  useEffect(() => {
    if (address) refresh();
  }, [address, refresh]);

  return {
    isUserOnChain: !!isUserRegistered,
    isUserPremium: !!isUserPremium,
    isUserOnChainAndPremium: !!(isUserRegistered && isUserPremium),
    isLoading: isUserRegisteredLoading || isUserPremiumLoading,
    isError: isUserRegisteredError || isUserPremiumError,
    refresh,
  };
}
