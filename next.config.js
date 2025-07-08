/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: '/prompt_tn',
  // assetPrefix: '/prompt_tn',
  images: {
    unoptimized: true,
  },
  experimental: {
   serverComponentsExternalPackages: [
     '@react-email/components',
     '@react-email/render',
     '@react-email/tailwind'
   ]
 }
}

module.exports = nextConfig
