/**
 * The GitHub Pages project-page prefix (e.g. "/DrAnne"), set at build time
 * via NEXT_PUBLIC_BASE_PATH (see .github/workflows/deploy.yml) and mirrored
 * in next.config.ts's `basePath` option. `next/image` and `next/link` apply
 * this automatically — this constant exists only for the handful of raw
 * `<img>`/`<video><source>` tags that bypass those components and need the
 * prefix applied by hand.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
