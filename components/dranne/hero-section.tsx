"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { org } from "@/content/org";

const EASE = [0.16, 1, 0.3, 1] as const;

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const reveal = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: EASE },
        };

  return (
    <section className="relative overflow-hidden bg-brand-red text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-book-texture bg-cover opacity-[0.06] mix-blend-overlay"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(0,0,0,0.25),transparent_60%)]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-8 lg:py-28 xl:px-8">
        <div className="max-w-2xl">
          <motion.h1
            {...reveal(0)}
            className="font-display text-5xl leading-[1.05] tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.18)] sm:text-6xl lg:text-7xl"
          >
            {org.invitationHeading.value}
          </motion.h1>
          <motion.p {...reveal(0.12)} className="mt-6 max-w-md text-lg text-white/90">
            {org.subheadings.curious.value}
          </motion.p>
          <motion.p {...reveal(0.2)} className="mt-3 max-w-md text-lg text-white/90">
            {org.subheadings.journey.value}
          </motion.p>
          <motion.div {...reveal(0.32)} className="mt-9 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="bg-white text-brand-red-ink shadow-lg shadow-black/10 hover:bg-white/90"
            >
              <Link href="/get-started">Get Started</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/50 bg-transparent text-white hover:bg-white/10"
            >
              <Link href="/the-plan/how-it-works">See How It Works</Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.94, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: shouldReduceMotion ? 0 : 0.25, ease: EASE }}
          className="relative ml-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl shadow-2xl shadow-black/30 ring-1 ring-white/20 lg:max-w-none"
        >
          <Image
            src="/assets/source/About-1536x681.png"
            alt="The dr.Anne plan Expanded Edition book, displayed on a shelf"
            fill
            priority
            className="object-cover object-[78%_38%]"
          />
        </motion.div>
      </div>
    </section>
  );
}
