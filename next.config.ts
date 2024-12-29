import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

module.exports = {
  output: 'export',
  basePath: 'https://github.com/Lydiawaka/metal.git', 
};

export default nextConfig;
