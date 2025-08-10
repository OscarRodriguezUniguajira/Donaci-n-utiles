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
  distDir: 'out',  // ← Cambié de 'dist' a 'out'
}

export default nextConfig