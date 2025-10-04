# OnScript Streak Verification - Complete Example

This document provides a comprehensive example of how to implement and use the multi-chain streak verification system in OnScript.

## Overview

The streak verification system allows users to:
1. Choose their preferred blockchain (Base, Ethereum, or Arbitrum)
2. Submit streak participations with content verification
3. Track their streak progress on-chain
4. View campaign details and statistics

## Smart Contract Architecture

### OnScriptStreakVerification Contract

The main contract handles:
- Campaign creation and management
- Streak participation submissions
- Streak counting and validation
- Cross-chain compatible events

**Key Functions:**
```solidity
// Create a new campaign
function createCampaign(
    string memory campaignId,
    uint256 startTime,
    uint256 endTime,
    uint256 frequency
) external onlyOwner

// Submit a streak participation
function submitStreakParticipation(
    string memory campaignId,
    string memory contentHash,
    string memory contentUrl
) external

// Get user's current streak
function getCurrentStreak(address user, string memory campaignId) external view returns (uint256)

// Get user's longest streak
function getLongestStreak(address user, string memory campaignId) external view returns (uint256)
```

## Frontend Integration

### 1. Chain Selection Component

```tsx
import { ChainSelector } from "@/components/ChainSelector";

function MyComponent() {
  const [selectedChain, setSelectedChain] = useState<SupportedChain>("base");
  
  return (
    <ChainSelector
      selectedChain={selectedChain}
      onChainChange={setSelectedChain}
    />
  );
}
```

### 2. Streak Dashboard

```tsx
import { StreakDashboard } from "@/features/campaign/components/StreakDashboard";

function StreakPage() {
  return (
    <StreakDashboard
      campaignId="weekly-cinematic-streak"
      campaignName="Weekly Cinematic Streak"
    />
  );
}
```

### 3. Streak Participation Form

```tsx
import { StreakParticipationForm } from "@/features/campaign/components/StreakParticipationForm";

function ParticipationForm() {
  return (
    <StreakParticipationForm
      campaignId="weekly-cinematic-streak"
      onSuccess={() => console.log("Streak submitted!")}
      onError={(error) => console.error("Error:", error)}
    />
  );
}
```

### 4. Streak Verification Hook

```tsx
import { useStreakVerification } from "@/utils/hooks/useStreakVerification";

function StreakStats() {
  const { currentStreak, longestStreak, isLoading } = useStreakVerification({
    campaignId: "weekly-cinematic-streak",
    chain: "arbitrum",
    userAddress: userAddress,
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <p>Current Streak: {currentStreak}</p>
      <p>Longest Streak: {longestStreak}</p>
    </div>
  );
}
```

## Backend API Integration

### Streak Verification Endpoint

```typescript
// POST /api/streak/verify
{
  "campaignId": "weekly-cinematic-streak",
  "contentHash": "0x1234567890abcdef",
  "contentUrl": "https://example.com/content",
  "description": "My streak submission",
  "chain": "arbitrum"
}
```

### Response

```typescript
{
  "success": true,
  "participation": {
    "id": "participation_id",
    "contentHash": "0x1234567890abcdef",
    "isVerified": true,
    "status": "VERIFIED"
  },
  "isVerified": true,
  "chain": "arbitrum",
  "contractAddress": "0x..."
}
```

## Complete Usage Example

### 1. Setup Campaign (Admin)

```typescript
// Deploy contract and create campaign
const contract = new ethers.Contract(
  contractAddress,
  onScriptStreakVerificationAbi,
  signer
);

// Create a weekly streak campaign
const campaignId = "weekly-cinematic-streak";
const startTime = Math.floor(Date.now() / 1000) + 86400; // 1 day from now
const endTime = startTime + (30 * 24 * 60 * 60); // 30 days
const frequency = 7 * 24 * 60 * 60; // 7 days in seconds

await contract.createCampaign(campaignId, startTime, endTime, frequency);
```

### 2. User Submits Streak (Frontend)

```tsx
function StreakSubmission() {
  const { writeContract } = useWriteContract();
  const [contentTitle, setContentTitle] = useState("");
  const [contentUrl, setContentUrl] = useState("");
  
  const handleSubmit = async () => {
    const contentHash = generateContentHash(contentTitle, contentUrl);
    
    writeContract({
      address: contractAddress,
      abi: onScriptStreakVerificationAbi,
      functionName: "submitStreakParticipation",
      args: [campaignId, contentHash, contentUrl],
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={contentTitle}
        onChange={(e) => setContentTitle(e.target.value)}
        placeholder="Content title"
      />
      <input
        value={contentUrl}
        onChange={(e) => setContentUrl(e.target.value)}
        placeholder="Content URL"
      />
      <button type="submit">Submit Streak</button>
    </form>
  );
}
```

### 3. Track Streak Progress

```tsx
function StreakTracker() {
  const { currentStreak, longestStreak, isLoading } = useStreakVerification({
    campaignId: "weekly-cinematic-streak",
    chain: "arbitrum",
  });

  return (
    <div>
      <h3>Your Streak Progress</h3>
      <p>Current Streak: {currentStreak}</p>
      <p>Longest Streak: {longestStreak}</p>
    </div>
  );
}
```

## Multi-Chain Deployment

### 1. Deploy to Arbitrum

```bash
# Set environment variables
export PRIVATE_KEY="your_private_key"
export ARBITRUM_RPC_URL="https://arb1.arbitrum.io/rpc"
export ARBISCAN_API_KEY="your_arbiscan_api_key"

# Deploy contract
npm run deploy:arbitrum

# Verify contract
npm run verify:arbitrum -- <contract_address>
```

### 2. Update Contract Addresses

```typescript
// constants/contractAddresses.ts
const onscriptStreakVerificationAddressArbitrum = "0x..."; // Your deployed address
```

### 3. Test Cross-Chain Functionality

```tsx
// Test switching between chains
function ChainSwitcher() {
  const [chain, setChain] = useState<SupportedChain>("base");
  
  return (
    <div>
      <button onClick={() => setChain("base")}>Base</button>
      <button onClick={() => setChain("arbitrum")}>Arbitrum</button>
      <button onClick={() => setChain("ethereum")}>Ethereum</button>
      
      <StreakDashboard campaignId="test-campaign" />
    </div>
  );
}
```

## Event Monitoring

### Listen for Streak Events

```typescript
// Monitor streak submissions
contract.on("StreakSubmissionMade", (user, campaignId, contentHash, contentUrl, weekNumber, currentStreak, timestamp) => {
  console.log(`User ${user} submitted streak for campaign ${campaignId}`);
  console.log(`Current streak: ${currentStreak}`);
});

// Monitor streak breaks
contract.on("StreakBroken", (user, campaignId, previousStreak, timestamp) => {
  console.log(`User ${user} broke their streak of ${previousStreak}`);
});
```

## Security Considerations

### 1. Content Hash Generation

```typescript
function generateContentHash(title: string, url: string, description: string): string {
  const content = JSON.stringify({
    title,
    url,
    description,
    timestamp: Date.now(),
  });
  
  // Use a proper hashing library in production
  return ethers.utils.keccak256(ethers.utils.toUtf8Bytes(content));
}
```

### 2. Input Validation

```typescript
// Validate campaign parameters
function validateCampaign(campaignId: string, startTime: number, endTime: number, frequency: number) {
  if (!campaignId || campaignId.length === 0) {
    throw new Error("Campaign ID cannot be empty");
  }
  
  if (startTime <= block.timestamp) {
    throw new Error("Start time must be in the future");
  }
  
  if (endTime <= startTime) {
    throw new Error("End time must be after start time");
  }
  
  if (frequency <= 0) {
    throw new Error("Frequency must be greater than 0");
  }
}
```

## Testing

### 1. Unit Tests

```typescript
describe("StreakVerification", () => {
  it("should create a campaign", async () => {
    const tx = await contract.createCampaign(
      "test-campaign",
      startTime,
      endTime,
      frequency
    );
    await tx.wait();
    
    const campaign = await contract.getCampaignDetails("test-campaign");
    expect(campaign.creator).to.equal(owner.address);
  });
  
  it("should submit streak participation", async () => {
    const tx = await contract.submitStreakParticipation(
      "test-campaign",
      "0x123",
      "https://example.com"
    );
    await tx.wait();
    
    const streak = await contract.getCurrentStreak(user.address, "test-campaign");
    expect(streak).to.equal(1);
  });
});
```

### 2. Integration Tests

```typescript
describe("Multi-Chain Integration", () => {
  it("should work on Arbitrum", async () => {
    // Switch to Arbitrum
    await switchChain({ chainId: 42161 });
    
    // Submit streak
    const tx = await contract.submitStreakParticipation(
      "test-campaign",
      "0x123",
      "https://example.com"
    );
    await tx.wait();
    
    // Verify on-chain
    const streak = await contract.getCurrentStreak(user.address, "test-campaign");
    expect(streak).to.equal(1);
  });
});
```

## Performance Optimization

### 1. Gas Optimization

- Use `view` functions for read operations
- Batch multiple operations when possible
- Optimize contract storage layout

### 2. Frontend Optimization

- Cache chain data
- Use React Query for data fetching
- Implement optimistic updates

## Troubleshooting

### Common Issues

1. **"Contract not deployed"**: Check contract addresses in `contractAddresses.ts`
2. **"Insufficient funds"**: Ensure user has enough ETH for gas
3. **"Invalid chain"**: Verify chain configuration in wagmi config
4. **"Transaction failed"**: Check gas limits and network status

### Debug Tools

- Use block explorers to verify transactions
- Check contract events for debugging
- Monitor gas usage and costs
- Test on testnets before mainnet

This comprehensive example demonstrates the complete implementation of multi-chain streak verification in OnScript, from smart contract deployment to frontend integration.


