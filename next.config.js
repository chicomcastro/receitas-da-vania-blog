/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  },
  images: {
    domains: ["i.ytimg.com", "th.bing.com"],
  },
}

module.exports = nextConfig
