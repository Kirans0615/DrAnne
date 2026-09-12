/**
 * The full redirect map from build prompt §16 / audit §9. 301s for real
 * retired URLs; spam post URLs return 410 (handled separately — see
 * middleware.ts). Source domain for every row is dranne.net unless noted.
 */
export type RedirectRule = {
  from: string;
  to: string;
  sourceDomain: "dranne.net" | "dranne.org";
};

export const redirects: RedirectRule[] = [
  { from: "/", to: "/", sourceDomain: "dranne.net" },
  { from: "/start-point/", to: "/", sourceDomain: "dranne.net" },
  { from: "/team-build/", to: "/for-guides/", sourceDomain: "dranne.net" },
  { from: "/team-build-formats/", to: "/for-guides/course-formats/", sourceDomain: "dranne.net" },
  { from: "/team-build-events/", to: "/for-guides/events/", sourceDomain: "dranne.net" },
  { from: "/team-build-here/", to: "/faq/", sourceDomain: "dranne.net" },
  { from: "/practice-circles/", to: "/for-guides/start-a-circle/", sourceDomain: "dranne.net" },
  { from: "/practice-circles-open-and-close/", to: "/for-guides/open-and-close/", sourceDomain: "dranne.net" },
  { from: "/practice-circles-open-close-statements/", to: "/for-guides/open-and-close/statements/", sourceDomain: "dranne.net" },
  { from: "/practice-circles-the-registry/", to: "/get-started/find-a-circle/", sourceDomain: "dranne.net" },
  { from: "/open-sesame/", to: "/books-and-materials/", sourceDomain: "dranne.net" },
  { from: "/open-sesame-independent/", to: "/get-started/independent-providers/", sourceDomain: "dranne.net" },
  { from: "/about-us/", to: "/about/our-story/", sourceDomain: "dranne.net" },
  { from: "/about-us-practice-circles/", to: "/about/gallery/", sourceDomain: "dranne.net" },
  { from: "/about-us-samples/", to: "/for-guides/flyers-and-templates/", sourceDomain: "dranne.net" },
  { from: "/about-us-food-plates/", to: "/the-plan/food-plates/", sourceDomain: "dranne.net" },
  { from: "/about-us-recipes/", to: "/the-plan/recipes/", sourceDomain: "dranne.net" },
  { from: "/about-us-our-scrapbook/", to: "/about/press/", sourceDomain: "dranne.net" },
  { from: "/donate/", to: "/donate/", sourceDomain: "dranne.net" },
  { from: "/learn-more-volunteer/", to: "/get-started/volunteer/", sourceDomain: "dranne.net" },
  { from: "/learn-more-independent/", to: "/get-started/independent/", sourceDomain: "dranne.net" },
  { from: "/learn-more-partner/", to: "/partner/", sourceDomain: "dranne.net" },
  { from: "/materials/", to: "/books-and-materials/", sourceDomain: "dranne.org" },
  { from: "/practice-circles/", to: "/get-started/", sourceDomain: "dranne.org" },
  { from: "/testimonials-donate/", to: "/testimonials/", sourceDomain: "dranne.org" },
  { from: "/partner/", to: "/partner/", sourceDomain: "dranne.org" },
];
