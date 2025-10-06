"use client";

import { useState } from "react";
import { useAccount } from "wagmi";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ChainSelector from "@/components/ChainSelector";
import StreakParticipationForm from "./StreakParticipationForm";
import useStreakVerification from "@/utils/hooks/useStreakVerification";
import {
  CHAIN_CONFIGS,
  type SupportedChain,
} from "@/constants/contractAddresses";
import {
  Trophy,
  Target,
  Users,
  Clock,
  ExternalLink,
  AlertCircle,
  CheckCircle,
  Flame,
} from "lucide-react";

interface StreakDashboardProps {
  campaignId: string;
  campaignName?: string;
}

export default function StreakDashboard({
  campaignId,
  campaignName,
}: StreakDashboardProps) {
  const { address } = useAccount();
  const [selectedChain, setSelectedChain] = useState<SupportedChain>("base");
  const [showParticipationForm, setShowParticipationForm] = useState(false);

  const {
    currentStreak,
    longestStreak,
    isParticipant,
    campaignDetails,
    isLoading,
    error,
    isContractDeployed,
    chainName,
  } = useStreakVerification({
    campaignId,
    chain: selectedChain,
    userAddress: address,
  });

  const formatTimestamp = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleDateString();
  };

  const formatDuration = (seconds: number) => {
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));

    if (days > 0) {
      return `${days} day${days > 1 ? "s" : ""}${hours > 0 ? ` ${hours}h` : ""}`;
    }
    return `${hours} hour${hours > 1 ? "s" : ""}`;
  };

  if (isLoading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            <span className="ml-2">Loading streak data...</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center text-red-600">
            <AlertCircle className="w-5 h-5 mr-2" />
            <span>Error loading streak data: {error}</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!isContractDeployed) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <AlertCircle className="w-12 h-12 text-amber-500 mx-auto" />
            <div>
              <h3 className="text-lg font-semibold">Contract Not Deployed</h3>
              <p className="text-muted-foreground">
                The streak verification contract is not yet deployed on{" "}
                {chainName}.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Chain Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Target className="w-5 h-5 mr-2" />
            Streak Verification
          </CardTitle>
          <CardDescription>
            Select your preferred blockchain for streak verification
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChainSelector
            selectedChain={selectedChain}
            onChainChange={setSelectedChain}
          />
        </CardContent>
      </Card>

      {/* Campaign Details */}
      {campaignDetails && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Campaign Details</span>
              <Badge
                variant={campaignDetails.isActive ? "default" : "secondary"}
              >
                {campaignDetails.isActive ? "Active" : "Inactive"}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Start Date</p>
                  <p className="text-sm text-muted-foreground">
                    {formatTimestamp(campaignDetails.startTime)}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">End Date</p>
                  <p className="text-sm text-muted-foreground">
                    {formatTimestamp(campaignDetails.endTime)}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Participants</p>
                  <p className="text-sm text-muted-foreground">
                    {campaignDetails.totalParticipants}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Submission Frequency</p>
                <p className="text-sm text-muted-foreground">
                  Every {formatDuration(campaignDetails.frequency)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* User Streak Stats */}
      {address && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Trophy className="w-5 h-5 mr-2" />
              Your Streak Stats
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center">
                  <Flame className="w-8 h-8 text-orange-500" />
                </div>
                <p className="text-2xl font-bold">{currentStreak}</p>
                <p className="text-sm text-muted-foreground">Current Streak</p>
              </div>

              <div className="text-center space-y-2">
                <div className="flex items-center justify-center">
                  <Trophy className="w-8 h-8 text-yellow-500" />
                </div>
                <p className="text-2xl font-bold">{longestStreak}</p>
                <p className="text-sm text-muted-foreground">Longest Streak</p>
              </div>
            </div>

            {isParticipant ? (
              <div className="mt-4 flex items-center justify-center text-green-600">
                <CheckCircle className="w-4 h-4 mr-2" />
                <span className="text-sm">
                  You're participating in this campaign
                </span>
              </div>
            ) : (
              <div className="mt-4 text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  You haven't started your streak yet
                </p>
                <Button onClick={() => setShowParticipationForm(true)}>
                  Start Your Streak
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Participation Form */}
      {showParticipationForm && (
        <Card>
          <CardHeader>
            <CardTitle>Submit Streak Participation</CardTitle>
            <CardDescription>
              Submit your streak content for on-chain verification
            </CardDescription>
          </CardHeader>
          <CardContent>
            <StreakParticipationForm
              campaignId={campaignId}
              onSuccess={() => {
                setShowParticipationForm(false);
                // Refresh the page or refetch data
                window.location.reload();
              }}
              onError={(error) => {
                console.error("Streak participation error:", error);
              }}
            />
          </CardContent>
        </Card>
      )}

      {/* Contract Info */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>
              Contract: {CHAIN_CONFIGS[selectedChain].contractAddress}
            </span>
            <a
              href={`${CHAIN_CONFIGS[selectedChain].blockExplorer?.url}/address/${CHAIN_CONFIGS[selectedChain].contractAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-primary"
            >
              View on {CHAIN_CONFIGS[selectedChain].blockExplorer?.name}
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
