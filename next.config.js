/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

module.exports = {
  images: {
    domains: [
      "cloudflare-ipfs.com",
      "lh3.googleusercontent.com",
      "static.vecteezy.com",
      "firebasestorage.googleapis.com",
    ],
  },
};
