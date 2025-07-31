/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './src/utils/imageLoader.js',
  },
  basePath: '/sinergy',
  assetPrefix: '/sinergy/',
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
