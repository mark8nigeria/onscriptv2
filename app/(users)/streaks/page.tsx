"use client";

import { useState } from "react";
import { useAccount } from "wagmi";
import StreakDashboard from "@/features/campaign/components/StreakDashboard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertCircle, ExternalLink, Info } from "lucide-react";

export default function StreaksPage() {
  const { address, isConnected } = useAccount();
  const [selectedCampaign, setSelectedCampaign] = useState(
    "weekly-cinematic-streak",
  );

  const campaigns = [
    {
      id: "weekly-cinematic-streak",
      name: "Weekly Cinematic Streak",
      description: "Share your most cinematic moments every week",
      status: "active",
      participants: 1247,
      startDate: "2024-01-01",
      endDate: "2024-12-31",
    },
    {
      id: "daily-creative-streak",
      name: "Daily Creative Streak",
      description: "Create and share something creative every day",
      status: "active",
      participants: 892,
      startDate: "2024-01-15",
      endDate: "2024-12-31",
    },
    {
      id: "monthly-storytelling-streak",
      name: "Monthly Storytelling Streak",
      description: "Tell your story through content every month",
      status: "upcoming",
      participants: 0,
      startDate: "2024-02-01",
      endDate: "2024-12-31",
    },
  ];

  if (!isConnected) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardContent className="p-6">
            <div className="text-center space-y-4">
              <AlertCircle className="w-12 h-12 text-amber-500 mx-auto" />
              <div>
                <h2 className="text-xl font-semibold">Connect Your Wallet</h2>
                <p className="text-muted-foreground">
                  Please connect your wallet to view and participate in streaks.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Streak Verification</h1>
        <p className="text-muted-foreground">
          Participate in on-chain verified streaks across multiple blockchains.
          Choose your preferred chain and start building your streak!
        </p>
      </div>

      {/* Campaign Selection */}
      <Card>
        <CardHeader>
          <CardTitle>Available Campaigns</CardTitle>
          <CardDescription>
            Select a campaign to view your streak progress and submit
            participations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {campaigns.map((campaign) => (
              <Card
                key={campaign.id}
                className={`cursor-pointer transition-all hover:shadow-md ${
                  selectedCampaign === campaign.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setSelectedCampaign(campaign.id)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{campaign.name}</CardTitle>
                    <Badge
                      variant={
                        campaign.status === "active"
                          ? "default"
                          : campaign.status === "upcoming"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {campaign.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm">
                    {campaign.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Participants:</span>
                      <span className="font-medium">
                        {campaign.participants}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Start:</span>
                      <span className="font-medium">{campaign.startDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>End:</span>
                      <span className="font-medium">{campaign.endDate}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Streak Dashboard */}
      <StreakDashboard
        campaignId={selectedCampaign}
        campaignName={campaigns.find((c) => c.id === selectedCampaign)?.name}
      />

      {/* Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Info className="w-5 h-5 mr-2" />
              How It Works
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <h4 className="font-medium">1. Choose Your Chain</h4>
              <p className="text-sm text-muted-foreground">
                Select from Base, Ethereum, or Arbitrum for your streak
                verification.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">2. Submit Content</h4>
              <p className="text-sm text-muted-foreground">
                Upload your streak content with a title and optional
                description.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">3. On-Chain Verification</h4>
              <p className="text-sm text-muted-foreground">
                Your submission is verified and recorded on the blockchain.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">4. Track Progress</h4>
              <p className="text-sm text-muted-foreground">
                Monitor your current streak and longest streak achievements.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <ExternalLink className="w-5 h-5 mr-2" />
              Supported Chains
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <h4 className="font-medium">Base</h4>
              <p className="text-sm text-muted-foreground">
                Fast and low-cost transactions with Coinbase integration.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Ethereum</h4>
              <p className="text-sm text-muted-foreground">
                The original smart contract platform with maximum security.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Arbitrum</h4>
              <p className="text-sm text-muted-foreground">
                Layer 2 scaling solution with Ethereum compatibility.
              </p>
            </div>
            <div className="mt-4">
              <Button variant="outline" size="sm" className="w-full">
                View Contract Addresses
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
