/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    'http://localhost:3000',
    'http://192.168.56.1:3000'
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.nadzor.ua',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
