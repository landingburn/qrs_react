/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true
},
images: {
  domains: [
    'https://qrs-ten.vercel.app',
  ]
},
}

module.exports = nextConfig
