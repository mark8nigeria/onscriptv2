"use client";

import { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import { useReadContract } from "wagmi";
import { CHAIN_CONFIGS, type SupportedChain } from "@/constants/contractAddresses";
import { onScriptStreakVerificationAbi } from "@/constants/abis/onScriptStreakVerificationAbi";

interface UseStreakVerificationProps {
  campaignId: string;
  chain: SupportedChain;
  userAddress?: string;
}

interface StreakData {
  currentStreak: number;
  longestStreak: number;
  isParticipant: boolean;
  campaignDetails: {
    creator: string;
    startTime: number;
    endTime: number;
    frequency: number;
    isActive: boolean;
    totalParticipants: number;
  } | null;
}

export default function useStreakVerification({
  campaignId,
  chain,
  userAddress,
}: UseStreakVerificationProps) {
  const { address } = useAccount();
  const [streakData, setStreakData] = useState<StreakData>({
    currentStreak: 0,
    longestStreak: 0,
    isParticipant: false,
    campaignDetails: null,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const contractAddress = CHAIN_CONFIGS[chain].contractAddress;
  const effectiveAddress = userAddress || address;

  // Read current streak
  const { data: currentStreak, isLoading: isLoadingCurrentStreak } = useReadContract({
    address: contractAddress,
    abi: onScriptStreakVerificationAbi,
    functionName: "getCurrentStreak",
    args: [effectiveAddress || "0x0", campaignId],
    query: {
      enabled: !!effectiveAddress && !!contractAddress && contractAddress !== "0x0000000000000000000000000000000000000000",
    },
  });

  // Read longest streak
  const { data: longestStreak, isLoading: isLoadingLongestStreak } = useReadContract({
    address: contractAddress,
    abi: onScriptStreakVerificationAbi,
    functionName: "getLongestStreak",
    args: [effectiveAddress || "0x0", campaignId],
    query: {
      enabled: !!effectiveAddress && !!contractAddress && contractAddress !== "0x0000000000000000000000000000000000000000",
    },
  });

  // Read campaign details
  const { data: campaignDetails, isLoading: isLoadingCampaignDetails } = useReadContract({
    address: contractAddress,
    abi: onScriptStreakVerificationAbi,
    functionName: "getCampaignDetails",
    args: [campaignId],
    query: {
      enabled: !!contractAddress && contractAddress !== "0x0000000000000000000000000000000000000000",
    },
  });

  useEffect(() => {
    const isLoadingAny = isLoadingCurrentStreak || isLoadingLongestStreak || isLoadingCampaignDetails;
    setIsLoading(isLoadingAny);

    if (!isLoadingAny) {
      try {
        const current = Number(currentStreak || 0);
        const longest = Number(longestStreak || 0);
        
        // Parse campaign details if available
        let parsedCampaignDetails = null;
        if (campaignDetails && Array.isArray(campaignDetails) && campaignDetails.length >= 6) {
          parsedCampaignDetails = {
            creator: campaignDetails[0] as string,
            startTime: Number(campaignDetails[1]),
            endTime: Number(campaignDetails[2]),
            frequency: Number(campaignDetails[3]),
            isActive: campaignDetails[4] as boolean,
            totalParticipants: Number(campaignDetails[5]),
          };
        }

        setStreakData({
          currentStreak: current,
          longestStreak: longest,
          isParticipant: current > 0,
          campaignDetails: parsedCampaignDetails,
        });
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch streak data");
      }
    }
  }, [
    currentStreak,
    longestStreak,
    campaignDetails,
    isLoadingCurrentStreak,
    isLoadingLongestStreak,
    isLoadingCampaignDetails,
  ]);

  // Check if contract is deployed
  const isContractDeployed = contractAddress !== "0x0000000000000000000000000000000000000000";

  return {
    ...streakData,
    isLoading,
    error,
    isContractDeployed,
    contractAddress,
    chainName: CHAIN_CONFIGS[chain].name,
  };
}


