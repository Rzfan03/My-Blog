import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',

   images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'c4.wallpaperflare.com',
        pathname: '/**',
      },
    ],
  },
};


export default nextConfig;
