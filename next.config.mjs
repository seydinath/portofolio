/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}
// Favicon setup
export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
};

export default nextConfig
