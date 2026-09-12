import type { ReactNode } from "react";
import { GuideSubNav } from "@/components/dranne/guide-sub-nav";

/**
 * The member layer's nested shell (build prompt §4: "a warm public layer
 * and a plain, high-utility member layer at /for-guides. Design them
 * differently on purpose."). Quieter and plainer than the public site:
 * no Lobster display headings, tighter body type, a muted neutral surface
 * leaning on the amber "Move" hue as its only structural accent
 * (docs/BRAND.md "Member-layer accent"). The public SiteHeader from the
 * root layout still renders above this — this is a nested layout, not a
 * replacement page — and GuideSubNav is a second, clearly distinct nav
 * landmark for the ten guideNav routes.
 */
export default function ForGuidesLayout({ children }: { children: ReactNode }) {
  return (
    <div className="border-t border-key-move/20 bg-background">
      <GuideSubNav />
      <div className="mx-auto max-w-4xl px-4 py-12 text-[0.9375rem] leading-relaxed text-foreground sm:px-6 lg:px-8 lg:py-16 [&_h1]:font-sans [&_h2]:font-sans [&_h3]:font-sans">
        {children}
      </div>
    </div>
  );
}
