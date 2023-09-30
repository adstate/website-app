/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/cats',
        destination: 'https://meowfacts.herokuapp.com',
      },
      {
        source: '/git',
        destination: 'https://github.com/',
      },
      {
        source: '/face',
        destination: 'https://facebook.com/',
      },
      {
        source: '/:path',
        destination: 'https://chat.openai.com/:path',
      },
      // {
      //   source: '/cdn-cgi/:path*',
      //   destination: 'https://chat.openai.com/cdn-cgi/:path*',
      // },
    ];
  },
};

module.exports = nextConfig
