// @noErrors: 2554
import { createConfig, http } from "wagmi";
import { base, baseSepolia } from "wagmi/chains";
import { coinbaseWallet } from "wagmi/connectors";

export const wagmiConfig = createConfig({
  chains: [
    // base,
    baseSepolia,
  ],
  connectors: [
    coinbaseWallet({
      appName: process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME || "MiniKit",
    }),
  ],
  ssr: true,
  transports: {
    // [base.id]: http(),
    [baseSepolia.id]: http(),
  },
});
