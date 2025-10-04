"use client";

import { useState, useTransition } from "react";
import { useAccount } from "wagmi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TextArea } from "@/components/TextArea";
import { ChainSelector } from "@/components/ChainSelector";
import { CHAIN_CONFIGS, type SupportedChain } from "@/constants/contractAddresses";
import { onScriptStreakVerificationAbi } from "@/constants/abis/onScriptStreakVerificationAbi";
import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { toast } from "sonner";
import { Loader2, Upload, CheckCircle } from "lucide-react";

interface StreakParticipationFormProps {
  campaignId: string;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export default function StreakParticipationForm({
  campaignId,
  onSuccess,
  onError,
}: StreakParticipationFormProps) {
  const { address, chain } = useAccount();
  const [selectedChain, setSelectedChain] = useState<SupportedChain>("base");
  const [contentTitle, setContentTitle] = useState("");
  const [contentUrl, setContentUrl] = useState("");
  const [description, setDescription] = useState("");
  const [isPending, startTransition] = useTransition();

  const contractAddress = CHAIN_CONFIGS[selectedChain].contractAddress;
  const isCurrentChain = chain?.id === CHAIN_CONFIGS[selectedChain].id;

  const { writeContract, data: hash, isPending: isWritePending, error: writeError } = useWriteContract();
  
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  const generateContentHash = (title: string, url: string, description: string): string => {
    const content = JSON.stringify({
      title,
      url,
      description,
      timestamp: Date.now(),
    });
    
    // Simple hash generation (in production, use a proper hashing library)
    let hash = 0;
    for (let i = 0; i < content.length; i++) {
      const char = content.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    
    return `0x${Math.abs(hash).toString(16).padStart(8, '0')}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!address) {
      toast.error("Please connect your wallet");
      return;
    }

    if (!isCurrentChain) {
      toast.error(`Please switch to ${CHAIN_CONFIGS[selectedChain].name}`);
      return;
    }

    if (!contentTitle.trim()) {
      toast.error("Please enter a content title");
      return;
    }

    startTransition(async () => {
      try {
        const contentHash = generateContentHash(contentTitle, contentUrl, description);
        
        writeContract({
          address: contractAddress,
          abi: onScriptStreakVerificationAbi,
          functionName: "submitStreakParticipation",
          args: [campaignId, contentHash, contentUrl || ""],
        });
      } catch (error) {
        console.error("Error submitting streak participation:", error);
        toast.error("Failed to submit streak participation");
        onError?.(error instanceof Error ? error.message : "Unknown error");
      }
    });
  };

  // Handle transaction success
  if (isConfirmed && hash) {
    toast.success("Streak participation submitted successfully!");
    onSuccess?.();
    
    // Reset form
    setContentTitle("");
    setContentUrl("");
    setDescription("");
  }

  // Handle write error
  if (writeError) {
    toast.error(`Transaction failed: ${writeError.message}`);
    onError?.(writeError.message);
  }

  const isLoading = isPending || isWritePending || isConfirming;

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Submit Streak Participation</h3>
        <p className="text-sm text-muted-foreground">
          Choose your preferred blockchain and submit your streak content for verification.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <ChainSelector
          selectedChain={selectedChain}
          onChainChange={setSelectedChain}
          disabled={isLoading}
        />

        <div className="space-y-2">
          <label htmlFor="contentTitle" className="text-sm font-medium">
            Content Title *
          </label>
          <Input
            id="contentTitle"
            value={contentTitle}
            onChange={(e) => setContentTitle(e.target.value)}
            placeholder="Enter a title for your streak content"
            disabled={isLoading}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="contentUrl" className="text-sm font-medium">
            Content URL (Optional)
          </label>
          <Input
            id="contentUrl"
            type="url"
            value={contentUrl}
            onChange={(e) => setContentUrl(e.target.value)}
            placeholder="https://example.com/your-content"
            disabled={isLoading}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="description" className="text-sm font-medium">
            Description (Optional)
          </label>
          <TextArea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your streak content..."
            disabled={isLoading}
            rows={3}
          />
        </div>

        <div className="flex items-center justify-between pt-4">
          <div className="text-xs text-muted-foreground">
            {isCurrentChain ? (
              <span className="text-green-600">✓ Connected to {CHAIN_CONFIGS[selectedChain].name}</span>
            ) : (
              <span className="text-amber-600">⚠ Please switch to {CHAIN_CONFIGS[selectedChain].name}</span>
            )}
          </div>
          
          <Button
            type="submit"
            disabled={isLoading || !isCurrentChain || !contentTitle.trim()}
            className="min-w-[140px]"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                {isConfirming ? "Confirming..." : "Submitting..."}
              </>
            ) : isConfirmed ? (
              <>
                <CheckCircle className="w-4 h-4 mr-2" />
                Submitted
              </>
            ) : (
              <>
                <Upload className="w-4 h-4 mr-2" />
                Submit Streak
              </>
            )}
          </Button>
        </div>
      </form>

      {hash && (
        <div className="p-3 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground">
            Transaction Hash: <code className="font-mono text-xs">{hash}</code>
          </p>
          <a
            href={`${CHAIN_CONFIGS[selectedChain].blockExplorer?.url}/tx/${hash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-blue-600 hover:underline"
          >
            View on {CHAIN_CONFIGS[selectedChain].blockExplorer?.name}
          </a>
        </div>
      )}
    </div>
  );
}


