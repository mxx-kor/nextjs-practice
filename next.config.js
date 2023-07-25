/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    //for no route Type error
    typedRoutes: true,
  },
};

module.exports = nextConfig;
