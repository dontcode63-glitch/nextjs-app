import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/nextjs-app",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
