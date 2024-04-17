/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: "/home",
        destination: "/"
      },
      {
        source: "/about",
        destination: "/"
      },

      {
        source: "/login",
        destination: "/"
      }
    ];
  }
};

module.exports = nextConfig;
