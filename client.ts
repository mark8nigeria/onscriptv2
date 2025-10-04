import { createPublicClient, http } from "viem";
import { base, arbitrum, mainnet, sepolia } from "viem/chains";

// Define Arbitrum chain configuration
const arbitrumOne = {
  ...arbitrum,
  name: "Arbitrum One",
} as const;

// Define Base Sepolia chain configuration
const baseSepolia = {
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
} as const;

// Define Arbitrum Sepolia chain configuration
const arbitrumSepolia = {
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
} as const;

// Create public clients for each chain
export const publicClients = {
  base: createPublicClient({
    chain: base,
    transport: http(),
  }),
  baseSepolia: createPublicClient({
    chain: baseSepolia,
    transport: http(),
  }),
  ethereum: createPublicClient({
    chain: mainnet,
    transport: http(),
  }),
  sepolia: createPublicClient({
    chain: sepolia,
    transport: http(),
  }),
  arbitrum: createPublicClient({
    chain: arbitrumOne,
    transport: http(),
  }),
  arbitrumSepolia: createPublicClient({
    chain: arbitrumSepolia,
    transport: http(),
  }),
};

// Default client (Base for backward compatibility)
export const publicClient = publicClients.base;
