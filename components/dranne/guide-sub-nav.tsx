"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { guideNav } from "@/content/nav";
import { cn } from "cn";

/**
 * Member-layer sub-navigation for everything under /for-guides (build
 * prompt §4, docs/BRAND.md "Member-layer accent"). Deliberately NOT styled
 * like the public SiteHeader nav — a slim, horizontally scrollable tab bar
 * using the warm-amber "Move" hue as its only accent, sitting below the
 * public header (which the root layout keeps rendering above this). This
 * is a second, distinct nav landmark for a different set of links — not a
 * duplicate of the primary nav, which is the legacy `.net` bug this avoids.
 */
export function GuideSubNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="For Guides section" className="print:hidden sticky top-16 z-30 border-b border-key-move/30 bg-key-move/5 backdrop-blur supports-backdrop-filter:bg-key-move/10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <ul className="flex gap-1 overflow-x-auto py-1 [scrollbar-width:thin]">
          {guideNav.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href} className="shrink-0">
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "block whitespace-nowrap border-b-2 px-3 py-2.5 text-sm font-medium transition-colors motion-reduce:transition-none",
                    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-key-move",
                    active
                      ? "border-key-move text-key-move"
                      : "border-transparent text-muted-foreground hover:border-key-move/40 hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
