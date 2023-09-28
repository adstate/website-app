/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/cats',
        destination: 'https://meowfacts.herokuapp.com',
      },
      {
        source: '/face',
        destination: 'https://facebook.com',
      },
    ];
  },
};

module.exports = nextConfig
