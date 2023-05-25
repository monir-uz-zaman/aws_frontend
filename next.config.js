/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    domains: [
      "static.mana2.my",
      "imageproxy.wolt.com",
      "scontent.xx.fbcdn.net",
    ],
  },
};

module.exports = nextConfig;
