/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.node/,
      use: 'raw-loader'
    });

    return config;
  }
};

// eslint-disable-next-line no-undef
module.exports = nextConfig;
