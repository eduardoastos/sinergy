/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.js'
  },
  basePath: '/sinergy',
  assetPrefix: '/sinergy'
}

module.exports = nextConfig 