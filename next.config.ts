import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  

   images: {
    domains: ['c4.wallpaperflare.com'],
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
