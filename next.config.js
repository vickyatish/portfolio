/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',
    basePath: '/portfolio/',
    assetPrefix: '/portfolio/',
    images: {
      unoptimized: true, // Disable image optimization for static export
    },
  };
  
  module.exports = nextConfig;