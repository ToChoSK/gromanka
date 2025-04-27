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
  output: 'export', // PRIDANÉ - statický export
  basePath: '/gromanka', // PRIDANÉ - názov tvojho repozitára
  assetPrefix: '/gromanka/', // PRIDANÉ - správne odkazy
}

export default nextConfig
