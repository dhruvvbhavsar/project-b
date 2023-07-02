/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
      },
    reactStrictMode: true,
    swcMinify: true,
    async rewrites() {
        return [
            {
                source: '/',
                destination: '/landing-page/index.html',
            },
        ]
    }
}

module.exports = nextConfig
