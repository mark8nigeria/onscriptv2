"use client";

import { onscriptUserManagementAbi } from "@/constants/abis";
import { onscriptUserManagementContractAddress } from "@/constants/contractAddresses";
import { readContract } from "@wagmi/core";
import { useEffect, useState, useCallback } from "react";
import { wagmiConfig } from "@/config";

export default function useIsAddressOnChainAndPremium({
  address,
}: {
  address?: string;
}) {
  const [isUserOnChain, setIsUserOnChain] = useState<boolean | null>(null);
  const [isUserPremium, setIsUserPremium] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchUserStatus = useCallback(async () => {
    if (!address) return;

    setIsLoading(true);
    setIsError(false);

    try {
      const [registered, premium] = await Promise.all([
        readContract(wagmiConfig, {
          address: onscriptUserManagementContractAddress,
          abi: onscriptUserManagementAbi,
          functionName: "getIsUserRegistered",
          args: [address],
        }),
        readContract(wagmiConfig, {
          address: onscriptUserManagementContractAddress,
          abi: onscriptUserManagementAbi,
          functionName: "getIsUserPremium",
          args: [address],
        }),
      ]);

      setIsUserOnChain(Boolean(registered));
      setIsUserPremium(Boolean(premium));
    } catch (err) {
      console.error("Contract read error:", err);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [address]);

  useEffect(() => {
    fetchUserStatus();
  }, [fetchUserStatus]);

  return {
    isUserOnChain,
    isUserPremium,
    isUserOnChainAndPremium: !!(isUserOnChain && isUserPremium),
    isLoading,
    isError,
    refresh: fetchUserStatus,
  };
}
