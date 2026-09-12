export type Sponsor = {
  name: string;
  logoFile: string;
};

/**
 * The client already displays all 15 publicly on the live site (build
 * prompt §13-19). Reproduced as a text-name grid with a per-logo image
 * slot that fills automatically when the file lands in
 * /public/assets/sponsors/. Note the permissions review in
 * docs/CLIENT-DECISIONS.md.
 */
export const sponsorsEnabled = true;

export const sponsors: Sponsor[] = [
  { name: "PayPal", logoFile: "paypal.png" },
  { name: "Parker Dewey", logoFile: "parker-dewey.png" },
  { name: "WP", logoFile: "wp.png" },
  { name: "Lin", logoFile: "lin.png" },
  { name: "Frederick", logoFile: "frederick.png" },
  { name: "Freeman", logoFile: "freeman.png" },
  { name: "Google", logoFile: "google.png" },
  { name: "College of Staten Island", logoFile: "college-of-staten-island.png" },
  { name: "Zoho", logoFile: "zoho.png" },
  { name: "InterServer", logoFile: "interserver.png" },
  { name: "John", logoFile: "john.png" },
  { name: "Idealist", logoFile: "idealist.png" },
  { name: "GoFundMe", logoFile: "gofundme.png" },
  { name: "Smith", logoFile: "smith.png" },
  { name: "Green", logoFile: "green.png" },
];
