"use client";

import { useState } from "react";
import { useAccount, useSwitchChain } from "wagmi";
import { CHAIN_CONFIGS, type SupportedChain } from "@/constants/contractAddresses";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Check, ExternalLink } from "lucide-react";

interface ChainSelectorProps {
  selectedChain: SupportedChain;
  onChainChange: (chain: SupportedChain) => void;
  disabled?: boolean;
  className?: string;
}

const CHAIN_OPTIONS = [
  { key: "base" as const, label: "Base", isTestnet: false },
  { key: "ethereum" as const, label: "Ethereum", isTestnet: false },
  { key: "arbitrum" as const, label: "Arbitrum One", isTestnet: false },
  { key: "baseSepolia" as const, label: "Base Sepolia", isTestnet: true },
  { key: "sepolia" as const, label: "Sepolia", isTestnet: true },
  { key: "arbitrumSepolia" as const, label: "Arbitrum Sepolia", isTestnet: true },
];

export default function ChainSelector({
  selectedChain,
  onChainChange,
  disabled = false,
  className = "",
}: ChainSelectorProps) {
  const { chain } = useAccount();
  const { switchChain, isPending } = useSwitchChain();
  const [isSwitching, setIsSwitching] = useState(false);

  const handleChainChange = async (chainKey: SupportedChain) => {
    if (disabled) return;

    const targetChain = CHAIN_CONFIGS[chainKey];
    
    // If the user is already on the correct chain, just update the selection
    if (chain?.id === targetChain.id) {
      onChainChange(chainKey);
      return;
    }

    // Otherwise, switch chains
    try {
      setIsSwitching(true);
      await switchChain({ chainId: targetChain.id });
      onChainChange(chainKey);
    } catch (error) {
      console.error("Failed to switch chain:", error);
    } finally {
      setIsSwitching(false);
    }
  };

  const isCurrentChain = chain?.id === CHAIN_CONFIGS[selectedChain].id;
  const isLoading = isPending || isSwitching;

  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">Select Chain</label>
        {isCurrentChain && (
          <Badge variant="secondary" className="text-xs">
            <Check className="w-3 h-3 mr-1" />
            Connected
          </Badge>
        )}
      </div>
      
      <Select
        value={selectedChain}
        onValueChange={handleChainChange}
        disabled={disabled || isLoading}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a chain" />
        </SelectTrigger>
        <SelectContent>
          {CHAIN_OPTIONS.map((option) => {
            const config = CHAIN_CONFIGS[option.key];
            const isConnected = chain?.id === config.id;
            
            return (
              <SelectItem key={option.key} value={option.key}>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-2">
                    <span>{option.label}</span>
                    {option.isTestnet && (
                      <Badge variant="outline" className="text-xs">
                        Testnet
                      </Badge>
                    )}
                    {isConnected && (
                      <Check className="w-4 h-4 text-green-500" />
                    )}
                  </div>
                  <ExternalLink className="w-3 h-3 text-muted-foreground" />
                </div>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>

      {isLoading && (
        <div className="text-xs text-muted-foreground">
          Switching chain...
        </div>
      )}

      {!isCurrentChain && !isLoading && (
        <div className="text-xs text-amber-600">
          Please switch to {CHAIN_CONFIGS[selectedChain].name} to continue
        </div>
      )}
    </div>
  );
}


