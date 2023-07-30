/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    CURRENT_YEAR: new Date().getFullYear(),
  },
};

module.exports = nextConfig;
