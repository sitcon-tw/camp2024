/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  basePath: '/2023',
  output: 'export',
  distDir: 'dist',
}
console.log('🥞    - url:', "http://localhost:3000/2023/")
module.exports = nextConfig
