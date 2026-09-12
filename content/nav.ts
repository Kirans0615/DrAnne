export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

/** Information architecture per build prompt §9. Nav labels match slugs exactly. */
export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about/our-story" },
      { label: "Board", href: "/about/board" },
      { label: "Press", href: "/about/press" },
      { label: "Gallery", href: "/about/gallery" },
    ],
  },
  {
    label: "The Plan",
    href: "/the-plan",
    children: [
      { label: "How It Works", href: "/the-plan/how-it-works" },
      { label: "MagicHand", href: "/the-plan/magichand" },
      { label: "Food Plates", href: "/the-plan/food-plates" },
      { label: "Recipes", href: "/the-plan/recipes" },
    ],
  },
  {
    label: "Books & Materials",
    href: "/books-and-materials",
    children: [{ label: "Catalogue", href: "/books-and-materials/catalogue" }],
  },
  {
    label: "Get Started",
    href: "/get-started",
    children: [
      { label: "Join a Circle", href: "/get-started/join-a-circle" },
      { label: "Find a Circle", href: "/get-started/find-a-circle" },
      { label: "Independent Providers", href: "/get-started/independent-providers" },
      { label: "Volunteer", href: "/get-started/volunteer" },
      { label: "Independent", href: "/get-started/independent" },
    ],
  },
  { label: "Partner", href: "/partner" },
  { label: "FAQ", href: "/faq" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Donate", href: "/donate" },
  { label: "Contact", href: "/contact" },
];

/** Member layer — separate nav, own layout, quieter. Build prompt §4/§9. */
export const guideNav: NavItem[] = [
  { label: "For Guides", href: "/for-guides" },
  { label: "Start a Circle", href: "/for-guides/start-a-circle" },
  { label: "Open & Close", href: "/for-guides/open-and-close" },
  { label: "Statements", href: "/for-guides/open-and-close/statements" },
  { label: "Course Formats", href: "/for-guides/course-formats" },
  { label: "Membership Stages", href: "/for-guides/membership-stages" },
  { label: "Certification", href: "/for-guides/certification" },
  { label: "Flyers & Templates", href: "/for-guides/flyers-and-templates" },
  { label: "Events", href: "/for-guides/events" },
  { label: "Tips", href: "/for-guides/tips" },
];

export const footerNav: NavItem[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Accessibility", href: "/accessibility" },
];
