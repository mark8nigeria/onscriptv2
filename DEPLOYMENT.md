# OnScript Multi-Chain Streak Verification Deployment Guide

This guide explains how to deploy the OnScript Streak Verification smart contracts across multiple chains and integrate them with the frontend.

## Prerequisites

1. **Node.js** (v18 or higher)
2. **npm** or **yarn**
3. **Private key** for deployment (keep this secure!)
4. **RPC URLs** for each chain
5. **API keys** for block explorers (optional, for verification)

## Environment Setup

Create a `.env` file in the root directory with the following variables:

```env
# Private key for deployment (without 0x prefix)
PRIVATE_KEY=your_private_key_here

# RPC URLs
BASE_RPC_URL=https://mainnet.base.org
BASE_SEPOLIA_RPC_URL=https://sepolia.base.org
ETHEREUM_RPC_URL=https://eth.llamarpc.com
SEPOLIA_RPC_URL=https://rpc.sepolia.org
ARBITRUM_RPC_URL=https://arb1.arbitrum.io/rpc
ARBITRUM_SEPOLIA_RPC_URL=https://sepolia-rollup.arbitrum.io/rpc

# Block Explorer API Keys (optional)
BASESCAN_API_KEY=your_basescan_api_key
ETHERSCAN_API_KEY=your_etherscan_api_key
ARBISCAN_API_KEY=your_arbiscan_api_key

# WalletConnect Project ID (for frontend)
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_walletconnect_project_id
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Compile contracts:
```bash
npm run compile
```

## Deployment

### Deploy to Testnets (Recommended First)

1. **Base Sepolia**:
```bash
npm run deploy:base-sepolia
```

2. **Arbitrum Sepolia**:
```bash
npm run deploy:arbitrum-sepolia
```

3. **Sepolia**:
```bash
npm run deploy:sepolia
```

### Deploy to Mainnets

1. **Base**:
```bash
npm run deploy:base
```

2. **Arbitrum**:
```bash
npm run deploy:arbitrum
```

3. **Ethereum**:
```bash
npm run deploy:ethereum
```

## Update Contract Addresses

After deployment, update the contract addresses in `constants/contractAddresses.ts`:

```typescript
// Replace the placeholder addresses with actual deployed addresses
const onscriptStreakVerificationAddressBase = "0x..."; // Your deployed address
const onscriptStreakVerificationAddressArbitrum = "0x..."; // Your deployed address
// ... etc
```

## Verification (Optional)

Verify contracts on block explorers:

```bash
# Base
npm run verify:base -- <contract_address>

# Arbitrum  
npm run verify:arbitrum -- <contract_address>

# Ethereum
npm run verify:ethereum -- <contract_address>
```

## Frontend Integration

### 1. Update Chain Configuration

The frontend is already configured to support multiple chains. The `ChainSelector` component allows users to choose their preferred chain.

### 2. Create Campaigns

Use the smart contract to create campaigns:

```typescript
// Example: Create a weekly streak campaign
const campaignId = "weekly-cinematic-streak";
const startTime = Math.floor(Date.now() / 1000) + 86400; // 1 day from now
const endTime = startTime + (30 * 24 * 60 * 60); // 30 days
const frequency = 7 * 24 * 60 * 60; // 7 days in seconds

// Call createCampaign on the deployed contract
```

### 3. Submit Streak Participations

Users can submit streak participations using the `StreakParticipationForm` component:

```tsx
<StreakParticipationForm
  campaignId="weekly-cinematic-streak"
  onSuccess={() => console.log("Streak submitted!")}
  onError={(error) => console.error("Error:", error)}
/>
```

## Usage Examples

### 1. Basic Streak Dashboard

```tsx
import { StreakDashboard } from "@/features/campaign/components/StreakDashboard";

<StreakDashboard 
  campaignId="weekly-cinematic-streak"
  campaignName="Weekly Cinematic Streak"
/>
```

### 2. Chain Selection

```tsx
import { ChainSelector } from "@/components/ChainSelector";

<ChainSelector
  selectedChain={selectedChain}
  onChainChange={setSelectedChain}
/>
```

### 3. Streak Verification Hook

```tsx
import { useStreakVerification } from "@/utils/hooks/useStreakVerification";

const { currentStreak, longestStreak, isLoading } = useStreakVerification({
  campaignId: "weekly-cinematic-streak",
  chain: "arbitrum",
  userAddress: userAddress,
});
```

## Smart Contract Functions

### Core Functions

1. **createCampaign**: Create a new streak campaign
2. **submitStreakParticipation**: Submit a streak participation
3. **getCurrentStreak**: Get user's current streak count
4. **getLongestStreak**: Get user's longest streak count
5. **getCampaignDetails**: Get campaign information

### Events

- `CampaignCreated`: Emitted when a campaign is created
- `StreakSubmissionMade`: Emitted when a user submits a streak
- `StreakBroken`: Emitted when a user's streak is broken

## Security Considerations

1. **Private Key Security**: Never commit private keys to version control
2. **Access Control**: The contract owner can pause/unpause and manage campaigns
3. **Reentrancy Protection**: Contract uses OpenZeppelin's ReentrancyGuard
4. **Input Validation**: All inputs are validated before processing

## Troubleshooting

### Common Issues

1. **"Contract not deployed"**: Check if contract addresses are updated in `contractAddresses.ts`
2. **"Insufficient funds"**: Ensure the deployer account has enough ETH for gas
3. **"Invalid chain"**: Verify the chain configuration in `wagmiConfig`
4. **"Transaction failed"**: Check gas limits and network congestion

### Gas Optimization

- The contract is optimized for gas efficiency
- Consider using gas estimation before transactions
- Monitor gas prices on different chains

## Testing

Test the integration:

1. Deploy to testnets first
2. Test campaign creation
3. Test streak submissions
4. Test chain switching
5. Verify on-chain data

## Support

For issues or questions:
1. Check the contract deployment logs
2. Verify environment variables
3. Check network connectivity
4. Review transaction receipts on block explorers


