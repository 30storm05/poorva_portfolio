/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Remove basePath if you're using a custom domain
  // basePath: '/your-repo-name', // Only add this if you're not using a custom domain
}

module.exports = nextConfig

