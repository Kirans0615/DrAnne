import type { NextConfig } from "next";

// Deployed as a GitHub Pages *project* page — https://kirans0615.github.io/DrAnne/,
// not a custom domain at the root — so every internal path needs the repo
// name as a prefix. Only applied when NEXT_PUBLIC_BASE_PATH is set (by
// .github/workflows/deploy.yml), so local dev keeps working at plain
// http://localhost:3010/ with no prefix.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
  // Static export for GitHub Pages — no server runtime, no API routes, no
  // Server Actions.
  output: "export",
  trailingSlash: true,
  basePath,
  images: {
    // GitHub Pages has no Image Optimization API. `unoptimized: true` alone
    // is not enough on a project-page subpath: it renders a plain <img>
    // with the raw src, verbatim, with no basePath applied, which 404s
    // every local image. A custom loader is the documented fix.
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
  },
  // @react-pdf/renderer ships pure ESM; without this, the production
  // build's webpack config treats it as an external and fails with
  // "Module not found: ESM packages need to be imported" even though
  // dev mode works fine.
  transpilePackages: ["@react-pdf/renderer"],
};

export default nextConfig;
