/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: '/sinergy',
  assetPrefix: '/sinergy/',
  trailingSlash: true
}

module.exports = nextConfig 