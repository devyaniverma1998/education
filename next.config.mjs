/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // ✅ tells Next.js to export static HTML
  images: {
    unoptimized: true,     // ✅ needed for static export (no Image Optimization API)
  },
};

export default nextConfig;
