/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/heaps-smart/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/heaps-smart' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;