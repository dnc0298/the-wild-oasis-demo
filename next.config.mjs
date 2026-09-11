/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uledjwqzmxnzutsvqgyc.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/Cabins/**",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uledjwqzmxnzutsvqgyc.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/Cabins/**",
      },
    ],
  },
};

export default nextConfig;
