/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },

  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'www.educatrueque.gt.tc', pathname: '/**' },
      { protocol: 'https', hostname: 'educatrueque.gt.tc', pathname: '/**' }, // opcional pero recomendable
    ],
  },

  output: 'export',
  distDir: 'out',
}

export default nextConfig
