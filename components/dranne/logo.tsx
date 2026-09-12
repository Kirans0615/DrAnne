import { cn } from "cn";

/**
 * The dr.Anne wordmark, recreated from the client's original banner asset
 * (public/assets/source/Banner.jpg) — the interlocked "dr" + "Anne" in the
 * brand's script display face, the small ® mark, "Association" in a
 * lighter supporting weight, and the teardrop swirl accent that sits under
 * the "dr". Reproduced typographically (real Lobster text, not a raster
 * embed of the compressed JPEG) so it can sit on any background and both
 * themes — see docs/ASSET-MANIFEST.md for why a raster trace was skipped
 * in favor of this pattern.
 */
export function Logo({ className, markOnly = false }: { className?: string; markOnly?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <TeardropMark className="size-6 shrink-0 sm:size-7" />
      <span className="flex items-baseline gap-1.5 leading-none">
        <span className="font-display text-2xl text-brand-red sm:text-[1.75rem]">dr.Anne</span>
        {!markOnly && (
          <span className="hidden font-display text-base text-muted-foreground sm:inline">
            Association
          </span>
        )}
      </span>
    </span>
  );
}

function TeardropMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path
        d="M16 3c7 0 12.5 5.7 12.5 13S23 29 16 29 3.5 23.3 3.5 16 9 3 16 3Z"
        fill="var(--color-brand-red)"
      />
      <path
        d="M20.5 10.5c2 1.9 2 5-.2 6.8-2 1.7-4.9 1.4-6.3-.8-1-1.6-.6-3.7 1-4.6 1.1-.6 2.5-.3 3.1.8.5.8.2 1.8-.6 2.2"
        fill="none"
        stroke="#FBEAE4"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
