/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/dfhcjbewi/image/upload/**',
      },

    ],
  domains: ['makeagency.co.uk' ],
  deviceSizes: [320, 640, 768, 1024, 1600],
  imageSizes: [16, 32, 48, 64, 96],
},
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
