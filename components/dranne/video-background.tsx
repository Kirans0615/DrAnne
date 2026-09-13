"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";
import { basePath } from "@/lib/base-path";

/**
 * The Good Health at Hand trailer, used as a silent, looping background
 * behind the "See how it works" reveal. Autoplay only works (and is only
 * appropriate) muted — this never plays audio. Under prefers-reduced-motion
 * we skip the moving video entirely and show the poster frame as a plain
 * still image, since a large autoplaying video is exactly the kind of
 * motion that setting is meant to suppress.
 *
 * The declarative `autoPlay` attribute alone proved unreliable once React
 * hydrates the element client-side. The first JS fix (call `.play()` only
 * after a `loadeddata` event) was a real bug, not just a belt-and-braces
 * fallback: network inspection showed the browser never requested the mp4
 * at all, only the poster image — `.play()` is frequently what *triggers*
 * the browser to start loading a video whose network fetch it had
 * otherwise deferred, so waiting for a load event before calling `.play()`
 * was a deadlock (waiting for the thing that only that same call starts).
 * Calling `.load()` then `.play()` unconditionally on mount is the correct,
 * standard fix.
 */
export function VideoBackground({ className }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const video = videoRef.current;
    if (!video) return;

    video.load();
    video.play().catch(() => {
      // Autoplay blocked — the poster frame remains visible, which is fine.
    });
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) {
    // Plain <img>, not next/image: this is the reduced-motion fallback for a <video>.
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={`${basePath}/assets/video/dranne-trailer-poster.jpg`} alt="" aria-hidden="true" className={className} />;
  }

  return (
    <video
      ref={videoRef}
      className={className}
      poster={`${basePath}/assets/video/dranne-trailer-poster.jpg`}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
    >
      <source src={`${basePath}/assets/video/dranne-trailer.mp4`} type="video/mp4" />
    </video>
  );
}
