/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedEnv: true,
  },
  transpilePackages: ["@hackhyre/ui"],
};

export default nextConfig;
