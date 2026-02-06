/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedEnv: true,
  },
  transpilePackages: ["@quiethire/ui"],
};

export default nextConfig;
