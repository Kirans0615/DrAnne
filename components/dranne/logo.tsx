import Image from "next/image";

/**
 * The dr.Anne wordmark — the client's own banner asset
 * (public/assets/source/Banner.jpg), used directly rather than recreated.
 * It ships as a solid-red rectangle (no transparency), so it's framed in a
 * small rounded badge that reads as an intentional lockup on any
 * background, in both themes.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={className}>
      <Image
        src="/assets/source/Banner.jpg"
        alt="dr.Anne Association"
        width={1459}
        height={279}
        priority
        className="h-8 w-auto rounded-md sm:h-9"
      />
    </span>
  );
}
