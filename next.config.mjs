/** @type {import('next').NextConfig} */
const nextConfig = {
  // Silence warnings
  // https://github.com/WalletConnect/walletconnect-monorepo/issues/1908
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imagedelivery.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "tba-mobile.mypinata.cloud",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "peach-obedient-puffin-8.mypinata.cloud",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
