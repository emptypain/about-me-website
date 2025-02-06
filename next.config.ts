import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: '/about-me-website',
  assetPrefix: '/about-me-website',
  images: {
    unoptimized: true, // Отключаем оптимизацию изображений, т.к. она требует серверной обработки
  },
};

export default nextConfig;
