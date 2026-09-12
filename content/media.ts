import { org } from "./org";

/**
 * The self-hosted trailer master
 * (Good-Health-at-Hand-Video-Trailer_V1_FINAL_01-12-22-4.mp4) was never
 * supplied (build prompt §6.2/§6.3). Sections that render from this
 * config auto-omit when a file is absent — the public Practice Circle
 * video is the primary video, behind a lite-embed facade.
 */
export const media = {
  trailer: {
    file: undefined as string | undefined,
    poster: undefined as string | undefined,
  },
  practiceCircleVideo: {
    youtubeId: "GSn0eW50rrE",
    url: org.practiceCircleVideo,
    title: "A Practice Circle in action — real participants, real progress, using the MagicHand method in the dr.Anne plan.",
  },
};

export type ScrapbookClipping = {
  slug: string;
  caption: string;
  publication?: string;
  date?: string;
  transcription?: string;
  provisional: true;
  image?: string;
};

/**
 * The legacy Scrapbook page was four uncaptioned images and a heading —
 * invisible to search and screen readers. No publication names, dates or
 * transcriptions exist in source material; these render as an honest,
 * accessible empty state with an upload path (build prompt §11.10) rather
 * than invented captions.
 */
export const scrapbookClippings: ScrapbookClipping[] = [];

export type Flyer = {
  slug: string;
  title: string;
  description: string;
};

export const flyerSamples: Flyer[] = [];

export const practiceCirclePhotoLocations = [
  "Leisure World, Seal Beach",
  "Screen Actors Guild, Hollywood",
  "Smith Club OC, Newport Beach, CA",
  "Clubhouse, Senior Center, Seal Beach",
];
