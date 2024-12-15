/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['plus.unsplash.com', 'github.com', 'lh3.googleusercontent.com'],
  },
  env: {
    ENCRYPTION_KEY: process.env.ENCRYPTION_KEY
  }
};

export default nextConfig;
