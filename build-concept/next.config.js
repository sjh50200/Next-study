/* eslint-disable @typescript-eslint/no-var-requires */
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = (phase) => {
  const isProd = phase === PHASE_PRODUCTION_BUILD;

  const config = {
    reactStrictMode: true,
    experimental: {
      appDir: true,
    },
  };

  return isProd ? withBundleAnalyzer(config) : config;
};

module.exports = nextConfig;
