import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    webpackMemoryOptimizations: true,
    preloadEntriesOnStart: false,
    cpus: 1,
    workerThreads: false,
  },
  images: {
    domains: ["localhost"],
  },
};

export default nextConfig;
