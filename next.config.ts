import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Ignore build errors from SST internal files
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
