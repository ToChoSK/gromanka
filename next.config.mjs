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
        loader: 'custom',
        loaderFile: './image-loader.js'
    },
    // GitHub Pages configuration
    ...(isProd && {
        output: 'export',
        basePath: '/gromanka',
        assetPrefix: '/gromanka/',
        trailingSlash: true,
    }),
};

export default nextConfig;
