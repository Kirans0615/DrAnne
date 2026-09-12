import Link from "next/link";
import { emailAddresses, org } from "@/content/org";
import { footerNav } from "@/content/nav";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="font-display text-xl text-brand-red">dr.Anne Association</p>
            <p className="mt-2 text-sm text-muted-foreground">
              A 501(c)(3) nonprofit teaching healthy moderation through the dr.Anne plan.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold">Contact</p>
            <ul className="mt-2 space-y-1 text-sm">
              <li>
                <a href={`mailto:${emailAddresses.ask}`} className="hover:underline">
                  {emailAddresses.ask}
                </a>{" "}
                — general &amp; partner
              </li>
              <li>
                <a href={`mailto:${emailAddresses.team}`} className="hover:underline">
                  {emailAddresses.team}
                </a>{" "}
                — volunteer &amp; media
              </li>
              <li>
                <a href={`mailto:${emailAddresses.vip}`} className="hover:underline">
                  {emailAddresses.vip}
                </a>{" "}
                — certification &amp; partnerships
              </li>
            </ul>
            <ul className="mt-3 space-y-1 text-sm">
              <li>
                <a href={org.linkedIn} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={org.youTube} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Legal</p>
            <ul className="mt-2 space-y-1 text-sm">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-8 border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} The dr.Anne Association. All rights reserved. A 501(c)(3) nonprofit organization.
        </p>
      </div>
    </footer>
  );
}
