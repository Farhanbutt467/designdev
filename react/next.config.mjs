/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  transpilePackages: ['swiper']
};

export default nextConfig;
