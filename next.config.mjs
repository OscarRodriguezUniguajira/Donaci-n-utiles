/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  output: 'export',
  distDir: 'dist',

  // basePath: '/Donaci-n-utiles',
  // assetPrefix: '/Donaci-n-utiles',
}

export default nextConfig
