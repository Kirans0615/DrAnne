import { basePath } from "@/lib/base-path";

/**
 * Custom next/image loader for the static export. GitHub Pages has no
 * image-optimization endpoint, so this does no real optimization — it
 * exists purely so `basePath` gets applied to local image `src`s.
 * `images.unoptimized: true` alone does NOT do this: with that flag,
 * next/image renders a plain `<img src="...">` using the raw `src` prop
 * verbatim, with no basePath prefix, which 404s every local image once
 * the site is served from a GitHub Pages project subpath like
 * /DrAnne/. A custom loader is the documented fix.
 */
export default function imageLoader({ src }: { src: string; width: number; quality?: number }) {
  if (/^https?:\/\//.test(src)) return src;
  return `${basePath}${src}`;
}
