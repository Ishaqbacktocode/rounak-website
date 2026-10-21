import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rounakcomputers.com',
        pathname: '/**', // Allows all image paths from this domain
      },
    ],
  },
};


module.exports = {
  allowedDevOrigins: ['192.168.56.1'],
}

module.exports = nextConfig;

export default nextConfig;
