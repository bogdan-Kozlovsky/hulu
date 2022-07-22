/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['links.papareact.com', 'image.tmdb.org'],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
