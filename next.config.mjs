/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'i.gr-assets.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pngimg.me',
      },
      {
        protocol: 'https',
        hostname: 'p7.hiclipart.com',
      },
      {
        protocol: 'https',
        hostname: 'logos-world.net',
      },
    ]
  }
};

export default nextConfig;
