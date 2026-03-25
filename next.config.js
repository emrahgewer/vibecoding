/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // ESLint 9 ile Next ESLint entegrasyonu bazen seçenek uyumsuzluğu verebiliyor.
    // Landing için build’i bozmasını istemiyoruz.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;

