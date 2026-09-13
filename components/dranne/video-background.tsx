"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

/**
 * The Good Health at Hand trailer, used as a silent, looping background
 * behind the "See how it works" reveal. Autoplay only works (and is only
 * appropriate) muted — this never plays audio. Under prefers-reduced-motion
 * we skip the moving video entirely and show the poster frame as a plain
 * still image, since a large autoplaying video is exactly the kind of
 * motion that setting is meant to suppress.
 *
 * The declarative `autoPlay` attribute alone proved unreliable once React
 * hydrates the element client-side (the video sat paused on its first
 * frame) — an explicit `.play()` call once metadata loads is the robust
 * fix; the returned promise is intentionally ignored on rejection, since a
 * blocked autoplay just leaves the poster frame showing, which is a fine
 * fallback.
 */
export function VideoBackground({ className }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      video.play().catch(() => {
        // Autoplay blocked — the poster frame remains visible, which is fine.
      });
    };

    if (video.readyState >= 2) {
      tryPlay();
    } else {
      video.addEventListener("loadeddata", tryPlay, { once: true });
      return () => video.removeEventListener("loadeddata", tryPlay);
    }
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) {
    // Plain <img>, not next/image: this is the reduced-motion fallback for a <video>.
    // eslint-disable-next-line @next/next/no-img-element
    return <img src="/assets/video/dranne-trailer-poster.jpg" alt="" aria-hidden="true" className={className} />;
  }

  return (
    <video
      ref={videoRef}
      className={className}
      poster="/assets/video/dranne-trailer-poster.jpg"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
    >
      <source src="/assets/video/dranne-trailer.mp4" type="video/mp4" />
    </video>
  );
}
