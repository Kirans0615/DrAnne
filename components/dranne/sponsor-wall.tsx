"use client";

import Image from "next/image";
import { useState } from "react";
import { sponsors, sponsorsEnabled, type Sponsor } from "@/content/sponsors";

/**
 * The sponsor / collaborator wall (build prompt §13-19, §6.3). None of the
 * 15 logo files exist yet at /public/assets/sponsors/ (docs/ASSET-MANIFEST.md),
 * so every slot renders as a labeled text-name tile. Each tile still probes
 * for its real logo file; when the client supplies it at
 * /public/assets/sponsors/<logoFile>, the image appears automatically and
 * the text fallback disappears — no code change required.
 */

function SponsorTile({ name, logoFile }: Sponsor) {
  const [imageFailed, setImageFailed] = useState(false);
  const src = `/assets/sponsors/${logoFile}`;

  return (
    <li className="flex h-20 items-center justify-center rounded-lg border border-border bg-muted/30 p-4 text-center grayscale transition motion-safe:hover:grayscale-0">
      {imageFailed ? (
        <span className="text-sm font-medium text-muted-foreground">{name}</span>
      ) : (
        <Image
          src={src}
          alt={`${name} logo`}
          width={160}
          height={48}
          loading="lazy"
          className="h-12 w-auto object-contain"
          onError={() => setImageFailed(true)}
        />
      )}
    </li>
  );
}

export function SponsorWall() {
  if (!sponsorsEnabled) return null;

  return (
    <ul
      aria-label="Sponsors, collaborators, volunteers and donors"
      className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5"
    >
      {sponsors.map((sponsor) => (
        <SponsorTile key={sponsor.name} {...sponsor} />
      ))}
    </ul>
  );
}
