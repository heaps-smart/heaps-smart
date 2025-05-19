// next.config.js
import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  webpack(config) {
    config.plugins.push(new CaseSensitivePathsPlugin());
    return config;
  },
};

export default nextConfig;
