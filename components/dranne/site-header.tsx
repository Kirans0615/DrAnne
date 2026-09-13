"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { DesktopNav, MobileNavList } from "@/components/dranne/nav-links";
import { Logo } from "@/components/dranne/logo";
import { primaryNav } from "@/content/nav";
import { org } from "@/content/org";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0" aria-label="dr.Anne Association home">
          <Logo />
        </Link>

        <DesktopNav items={primaryNav} />

        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex bg-brand-red text-white hover:bg-brand-red/90">
            <a href={org.paypalDonateUrl} target="_blank" rel="noopener noreferrer">
              Donate
            </a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
                <Menu className="size-6" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] p-0">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <MobileNavList items={primaryNav} onNavigate={() => setOpen(false)} />
              <div className="p-4">
                <Button asChild className="w-full bg-brand-red text-white hover:bg-brand-red/90">
                  <a href={org.paypalDonateUrl} target="_blank" rel="noopener noreferrer">
                    Donate
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
