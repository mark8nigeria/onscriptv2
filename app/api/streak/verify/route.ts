import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { getUserById } from "@/helpers/read-db";
import db from "@/lib/db";
import { CHAIN_CONFIGS, type SupportedChain } from "@/constants/contractAddresses";
import { onScriptStreakVerificationAbi } from "@/constants/abis/onScriptStreakVerificationAbi";
import { createPublicClient, http } from "viem";
import { base, arbitrum, mainnet, sepolia } from "viem/chains";

// Define chain configurations for viem
const chainConfigs = {
  base: base,
  baseSepolia: {
    id: 84532,
    name: "Base Sepolia",
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    rpcUrls: {
      default: { http: ["https://sepolia.base.org"] },
      public: { http: ["https://sepolia.base.org"] },
    },
    blockExplorers: {
      default: { name: "BaseScan", url: "https://sepolia.basescan.org" },
    },
    testnet: true,
  },
  ethereum: mainnet,
  sepolia: sepolia,
  arbitrum: arbitrum,
  arbitrumSepolia: {
    id: 421614,
    name: "Arbitrum Sepolia",
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    rpcUrls: {
      default: { http: ["https://sepolia-rollup.arbitrum.io/rpc"] },
      public: { http: ["https://sepolia-rollup.arbitrum.io/rpc"] },
    },
    blockExplorers: {
      default: { name: "Arbiscan", url: "https://sepolia.arbiscan.io" },
    },
    testnet: true,
  },
};

export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    if (!session || !session.user || !session.user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { campaignId, contentHash, contentUrl, description, chain } = body;

    if (!campaignId || !contentHash) {
      return NextResponse.json(
        { error: "Campaign ID and content hash are required" },
        { status: 400 }
      );
    }

    const user = await getUserById(session.user.id);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const selectedChain = (chain || "base") as SupportedChain;
    const chainConfig = CHAIN_CONFIGS[selectedChain];
    
    if (!chainConfig || chainConfig.contractAddress === "0x0000000000000000000000000000000000000000") {
      return NextResponse.json(
        { error: "Contract not deployed on selected chain" },
        { status: 400 }
      );
    }

    // Create viem client for the selected chain
    const viemChain = chainConfigs[selectedChain];
    const client = createPublicClient({
      chain: viemChain,
      transport: http(),
    });

    // Verify the transaction on-chain
    let onchainTxHash: string | null = null;
    let isVerified = false;

    try {
      // Check if user has a current streak
      const currentStreak = await client.readContract({
        address: chainConfig.contractAddress as `0x${string}`,
        abi: onScriptStreakVerificationAbi,
        functionName: "getCurrentStreak",
        args: [user.walletAddress as `0x${string}`, campaignId],
      });

      // Check if user has a longest streak
      const longestStreak = await client.readContract({
        address: chainConfig.contractAddress as `0x${string}`,
        abi: onScriptStreakVerificationAbi,
        functionName: "getLongestStreak",
        args: [user.walletAddress as `0x${string}`, campaignId],
      });

      // For now, we'll mark as verified if the contract calls succeed
      // In a real implementation, you'd verify the actual transaction
      isVerified = true;
    } catch (error) {
      console.error("Error verifying on-chain:", error);
      return NextResponse.json(
        { error: "Failed to verify on-chain" },
        { status: 500 }
      );
    }

    // Create or update participation record
    const participation = await db.participation.upsert({
      where: {
        campaignId_userId: {
          campaignId,
          userId: user.id,
        },
      },
      update: {
        contentTitle: body.contentTitle || "Streak Submission",
        contentUrl: contentUrl || null,
        contentHash,
        description: description || null,
        onchainTxHash: onchainTxHash,
        isVerified,
        status: isVerified ? "VERIFIED" : "PENDING",
        submissionDate: new Date(),
        weekNumber: Math.floor((Date.now() - new Date().getTime()) / (7 * 24 * 60 * 60 * 1000)) + 1,
      },
      create: {
        campaignId,
        userId: user.id,
        contentTitle: body.contentTitle || "Streak Submission",
        contentUrl: contentUrl || null,
        contentHash,
        description: description || null,
        onchainTxHash: onchainTxHash,
        isVerified,
        status: isVerified ? "VERIFIED" : "PENDING",
        submissionDate: new Date(),
        weekNumber: Math.floor((Date.now() - new Date().getTime()) / (7 * 24 * 60 * 60 * 1000)) + 1,
      },
    });

    // Update or create streak record
    await db.streak.upsert({
      where: {
        campaignId_userId: {
          campaignId,
          userId: user.id,
        },
      },
      update: {
        currentStreak: isVerified ? (await db.streak.findUnique({
          where: { campaignId_userId: { campaignId, userId: user.id } },
        }))?.currentStreak || 0 + 1 : 0,
        lastParticipationDate: new Date(),
        status: isVerified ? "ACTIVE" : "BROKEN",
      },
      create: {
        campaignId,
        userId: user.id,
        currentStreak: isVerified ? 1 : 0,
        longestStreak: isVerified ? 1 : 0,
        lastParticipationDate: new Date(),
        status: isVerified ? "ACTIVE" : "BROKEN",
      },
    });

    return NextResponse.json({
      success: true,
      participation,
      isVerified,
      chain: selectedChain,
      contractAddress: chainConfig.contractAddress,
    });
  } catch (error) {
    console.error("Error in streak verification:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const session = await auth();
    if (!session || !session.user || !session.user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const campaignId = searchParams.get("campaignId");
    const chain = searchParams.get("chain") || "base";

    if (!campaignId) {
      return NextResponse.json(
        { error: "Campaign ID is required" },
        { status: 400 }
      );
    }

    const user = await getUserById(session.user.id);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Get user's streak data
    const streak = await db.streak.findUnique({
      where: {
        campaignId_userId: {
          campaignId,
          userId: user.id,
        },
      },
    });

    // Get user's participations
    const participations = await db.participation.findMany({
      where: {
        campaignId,
        userId: user.id,
      },
      orderBy: {
        submissionDate: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      streak,
      participations,
      chain,
    });
  } catch (error) {
    console.error("Error fetching streak data:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}


