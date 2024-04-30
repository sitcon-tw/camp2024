/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  basePath: '/2024',
  output: 'export',
  distDir: 'dist',
}
console.log('🥞    - url:', "http://localhost:3000/2024/")
module.exports = nextConfig
