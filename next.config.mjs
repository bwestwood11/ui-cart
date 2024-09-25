/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "api.dicebear.com",
          port: "",
        },
      ],
    },
  };
  
  export default nextConfig;
  