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
  // @react-pdf/renderer ships pure ESM; without this, the production
  // build's webpack config treats it as an external and fails with
  // "Module not found: ESM packages need to be imported" even though
  // dev mode works fine.
  transpilePackages: ["@react-pdf/renderer"],
};

export default nextConfig;
