// User Management Contract Addresses
const onscriptUserManagementAddressMainnet =
  "0xE4Dc79393deF1d6e4Df37c861ec5540150Add9A6" as `0x${string}`;
const onscriptUserManagementAddressSepolia =
  "0x02B1B79975B2dCBFB671542F6621331a1223631f" as `0x${string}`;

// const onscriptUserManagementContractAddress =
//   onscriptUserManagementAddressSepolia;
const onscriptUserManagementContractAddress =
  onscriptUserManagementAddressMainnet;

// Streak Verification Contract Addresses
// Base
const onscriptStreakVerificationAddressBase =
  "0x0000000000000000000000000000000000000000" as `0x${string}`; // TODO: Deploy and update
const onscriptStreakVerificationAddressBaseSepolia =
  "0x0000000000000000000000000000000000000000" as `0x${string}`; // TODO: Deploy and update

// Ethereum
const onscriptStreakVerificationAddressEthereum =
  "0x0000000000000000000000000000000000000000" as `0x${string}`; // TODO: Deploy and update
const onscriptStreakVerificationAddressSepolia =
  "0x0000000000000000000000000000000000000000" as `0x${string}`; // TODO: Deploy and update

// Arbitrum
const onscriptStreakVerificationAddressArbitrum =
  "0x0000000000000000000000000000000000000000" as `0x${string}`; // TODO: Deploy and update
const onscriptStreakVerificationAddressArbitrumSepolia =
  "0x0000000000000000000000000000000000000000" as `0x${string}`; // TODO: Deploy and update

// Chain configurations
export const CHAIN_CONFIGS = {
  base: {
    id: 8453,
    name: "Base",
    rpcUrl: "https://mainnet.base.org",
    contractAddress: onscriptStreakVerificationAddressBase,
    userManagementAddress: onscriptUserManagementAddressMainnet,
  },
  baseSepolia: {
    id: 84532,
    name: "Base Sepolia",
    rpcUrl: "https://sepolia.base.org",
    contractAddress: onscriptStreakVerificationAddressBaseSepolia,
    userManagementAddress: onscriptUserManagementAddressSepolia,
  },
  ethereum: {
    id: 1,
    name: "Ethereum",
    rpcUrl: "https://eth.llamarpc.com",
    contractAddress: onscriptStreakVerificationAddressEthereum,
    userManagementAddress: onscriptUserManagementAddressMainnet,
  },
  sepolia: {
    id: 11155111,
    name: "Sepolia",
    rpcUrl: "https://rpc.sepolia.org",
    contractAddress: onscriptStreakVerificationAddressSepolia,
    userManagementAddress: onscriptUserManagementAddressSepolia,
  },
  arbitrum: {
    id: 42161,
    name: "Arbitrum One",
    rpcUrl: "https://arb1.arbitrum.io/rpc",
    contractAddress: onscriptStreakVerificationAddressArbitrum,
    userManagementAddress: onscriptUserManagementAddressMainnet,
  },
  arbitrumSepolia: {
    id: 421614,
    name: "Arbitrum Sepolia",
    rpcUrl: "https://sepolia-rollup.arbitrum.io/rpc",
    contractAddress: onscriptStreakVerificationAddressArbitrumSepolia,
    userManagementAddress: onscriptUserManagementAddressSepolia,
  },
} as const;

export type SupportedChain = keyof typeof CHAIN_CONFIGS;

export { 
  onscriptUserManagementContractAddress,
  onscriptStreakVerificationAddressBase,
  onscriptStreakVerificationAddressBaseSepolia,
  onscriptStreakVerificationAddressEthereum,
  onscriptStreakVerificationAddressSepolia,
  onscriptStreakVerificationAddressArbitrum,
  onscriptStreakVerificationAddressArbitrumSepolia,
};
