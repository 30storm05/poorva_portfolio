/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
 
  basePath: '/poorva_portfolio', 
  assetPrefix: '/poorva_portfolio/', 
};

module.exports = nextConfig;

