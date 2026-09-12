import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
  // Static export for GitHub Pages — no server runtime, no API routes,
  // no Server Actions. dranne.org is served as a custom domain at the
  // repo root (see public/CNAME), so no basePath is needed.
  output: "export",
  trailingSlash: true,
  images: {
    // GitHub Pages has no Image Optimization API — ship the images as-is.
    unoptimized: true,
  },
};

export default nextConfig;
