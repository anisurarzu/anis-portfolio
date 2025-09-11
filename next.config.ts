/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["picsum.photos", "i.ibb.co"], // 👈 added imgbb domain
  },
};

module.exports = nextConfig;
