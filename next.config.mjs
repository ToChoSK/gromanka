/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

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
    // only apply basePath/assetPrefix/output on production (static export)
    ...(isProd && {
        output: 'export',
        basePath: '/gromanka',
        assetPrefix: '/gromanka/',
    }),
};

export default nextConfig;
