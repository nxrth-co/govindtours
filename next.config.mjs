import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

// Setup Cloudflare platform proxy for local development
if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use standalone output in Docker builds
  output: process.env.BUILD_STANDALONE === 'true' ? 'standalone' : undefined,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  webpack: (config, { dev }) => {
    // Disable production webpack cache on disk to prevent generating >25MB .pack files
    if (!dev) {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
