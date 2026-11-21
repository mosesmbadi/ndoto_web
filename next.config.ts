import type { NextConfig } from "next";

// Static export: `npm run build` writes plain HTML to ./out, hostable anywhere.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  images: { unoptimized: true },
};

export default nextConfig;
