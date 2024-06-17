/** @type {import('next').NextConfig} */
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js';

const nextConfig = (phase) => ({
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[hash:8].[ext]',
          outputPath: 'static/media/',
          publicPath: '/_next/static/media/',
        },
      },
    });

    return config;
  },
});

export default (phase) => nextConfig(phase);