/** @type {import('next').NextConfig} */

module.exports = {
  webpack: (config, {}) => {
    config.externals.push({
      'utf-8-validate': 'commonjs utf-8-validate',
      bufferutil: 'commonjs bufferutil',
    });
    return config;
  },
  images: {
    domains: ['via.placeholder.com'],
  },
};
