/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's.wordpress.com',
      },
      {
        protocol: 'https',
        hostname: 'image.thum.io',
      },
    ],
  },
};

export default nextConfig;
