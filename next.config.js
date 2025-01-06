/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    serverActions: true, // Enable Server Actions
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  async headers() {
    return [
      {
         // matching all API routes
         source: "/api/:path*",
         headers: [
           { key: "Access-Control-Allow-Credentials", value: "false" },
           { key: "Access-Control-Allow-Origin", value: "*" },
           {
             key: "Access-Control-Allow-Methods",
             value: "GET,OPTIONS,PATCH,DELETE,POST,PUT,HEAD",
           },
           {
             key: "Access-Control-Allow-Headers",
             value: "*",
           },
         ],
       },
    ];
  }
};

module.exports = nextConfig;
