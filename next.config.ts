import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'c4.wallpaperflare.com',
      },
    ],
  },
};

export default nextConfig;
