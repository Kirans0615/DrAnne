"use client";

import { useEffect, useState } from "react";

/**
 * SSR-safe matchMedia hook. Returns `false` on the server and on first
 * client render (before effects run) so hydration never mismatches, then
 * syncs to the real media query result and keeps listening for changes.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const mediaQueryList = window.matchMedia(query);
    setMatches(mediaQueryList.matches);

    const listener = (event: MediaQueryListEvent) => setMatches(event.matches);
    mediaQueryList.addEventListener("change", listener);
    return () => mediaQueryList.removeEventListener("change", listener);
  }, [query]);

  return matches;
}
