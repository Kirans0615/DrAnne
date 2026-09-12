"use client";

import * as React from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";

// Retuned against the actual homepage reveal (build prompt §7.2's single
// permitted use): a Header (~2 lines + copy, ~140px) plus this Card, plus
// section padding. The original demo's oversized outer height and
// four-figure top/bottom padding scaffolding (defects #6, #9) is not
// reproduced — the outer height stays close to the real content height so
// the tilt animation doesn't leave a dead-space gap below the card.
const OUTER_HEIGHT = "h-[30rem] md:h-[42rem]";
const CARD_HEIGHT = "h-[20rem] md:h-[30rem]";

// Static, precomputed multi-layer shadow — a plain utility class, never a
// per-frame computed `style.boxShadow` (defect #10).
const CARD_SHADOW =
  "shadow-[0_2px_4px_rgba(0,0,0,0.08),0_12px_24px_rgba(0,0,0,0.14),inset_0_1px_0_rgba(255,255,255,0.08)]";

interface ContainerScrollProps {
  /** Heading / copy rendered above the card, translating up as you scroll. */
  titleComponent: React.ReactNode;
  /** The image or composition rendered inside the tilting card. */
  children: React.ReactNode;
  className?: string;
}

function ContainerScroll({
  titleComponent,
  children,
  className,
}: ContainerScrollProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  // matchMedia-based, SSR-safe — replaces the old window.innerWidth resize
  // listener that could hydrate mismatched (defect #3).
  const isMobile = useMediaQuery("(max-width: 768px)");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Track the container's own scroll travel, not the whole page's
    // (defect #2).
    offset: ["start end", "end start"],
  });

  const finalScale = isMobile ? 0.9 : 1;

  // Reduced motion: collapse every range to its resting value so the card
  // renders its final state with no scroll-bound transform at all (defect
  // #8), while keeping `rotate`/`scale`/`translate` real MotionValues so
  // Header/Card's types stay honest (defect #4) rather than nullable.
  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [20, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion
      ? [finalScale, finalScale]
      : isMobile
        ? [0.7, 0.9]
        : [1.05, 1]
  );
  const translate = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [-100, -100] : [0, -100]
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex flex-col items-center justify-center",
        OUTER_HEIGHT,
        className
      )}
    >
      <div
        className="relative w-full py-6 md:py-10"
        style={{ perspective: "1000px" }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
}

interface HeaderProps {
  translate: MotionValue<number>;
  titleComponent: React.ReactNode;
}

function Header({ translate, titleComponent }: HeaderProps) {
  return (
    <motion.div
      style={{ translateY: translate }}
      className="mx-auto max-w-5xl shrink-0 px-4 text-center will-change-transform"
    >
      {titleComponent}
    </motion.div>
  );
}

interface CardProps {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  children: React.ReactNode;
}

function Card({ rotate, scale, children }: CardProps) {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
      }}
      className={cn(
        "mx-auto mt-6 w-full max-w-5xl rounded-[30px] border border-border bg-card p-2 will-change-transform md:p-6",
        CARD_HEIGHT,
        CARD_SHADOW
      )}
    >
      <div className="size-full overflow-hidden rounded-2xl bg-muted">
        {children}
      </div>
    </motion.div>
  );
}

export { ContainerScroll, Header, Card };
export type { ContainerScrollProps, HeaderProps, CardProps };
