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
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.educatrueque.gt.tc',
        port: '',
        pathname: '/**',
      },
    ],
  },
  output: 'export',
  distDir: 'dist',
}

export default nextConfig