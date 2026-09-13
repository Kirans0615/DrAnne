import type { Metadata } from "next";
import { Lobster, Roboto_Flex, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SkipLink } from "@/components/dranne/skip-link";
import { SiteHeader } from "@/components/dranne/site-header";
import { SiteFooter } from "@/components/dranne/site-footer";
import { org } from "@/content/org";

const lobster = Lobster({
  variable: "--font-lobster",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const robotoFlex = Roboto_Flex({
  variable: "--font-roboto-flex",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${org.domain}`),
  title: {
    default: "The dr.Anne Association",
    template: "%s | dr.Anne Association",
  },
  description:
    "A nonprofit educational 501(c)(3) teaching the dr.Anne plan: portion control, movement and stress reduction through the MagicHand system and volunteer-led Practice Circles.",
  openGraph: {
    type: "website",
    siteName: "The dr.Anne Association",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-US"
      className={`${lobster.variable} ${robotoFlex.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <TooltipProvider>
          <SkipLink />
          <SiteHeader />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </TooltipProvider>
      </body>
    </html>
  );
}
