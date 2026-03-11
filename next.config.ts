import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  basePath: '/aihao123',
  trailingSlash: true,
};

export default nextConfig;
