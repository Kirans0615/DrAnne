# dr.Anne — Full Website Audit & Rebuild Reference
**Sites audited:** dranne.org (The dr.Anne Association) and dranne.net (The dr.Anne Network)
**Date of audit:** September 12, 2026
**Purpose:** complete content + technical inventory, captured verbatim, so both sites can be rebuilt and merged into one.

---

## 0. URGENT — dranne.org is compromised

This has to be dealt with before any rebuild work.

- **293 published spam posts** exist on dranne.org. They are live, return HTTP 200, and are indexable (no `noindex`).
- They are still being published **today** — the three most recent were posted 2026-09-12 09:52, 2026-09-11 21:52, 2026-09-11 09:52. An automated injector is still running.
- Content is pirated-software / cracked-app / pirated-movie SEO spam (titles reference "crack", "keygen", "activated", "CAMRip", "HDRip", etc.).
- The attacker created **21 spam categories** on the site: Atmos (9), Builders (18), Crackers (9), Extras (12), Generators (15), Hacksers (16), HD (9), Loaders (15), Nodes (6), Offloaders (17), Pirates (8), Plugins (12), PowerPoint (15), RePacks (23), Retail2Volume (8), Russifiers (12), Subs (19), Tools (27), Trainers (14), Uncategorized (5), Wipers (24).
- All posts are attributed to the single WordPress user **"Eduardo"** (user ID 1, slug `eduardo`). This is either a compromised admin account or an attacker-created one.
- `/wp-sitemap-posts-post-1.xml` returns 404 on .org, so the default WP sitemap is being suppressed/overridden — another sign of tampering.

**Implication for a 501(c)(3):** Google will flag the domain for hacked content / pure spam. Donation trust, email deliverability from `@dranne.org`, and search visibility are all at risk right now.

**Recommended immediate actions (before rebuild):**
1. Take dranne.org offline or into maintenance mode.
2. Rotate all WordPress admin passwords, hosting (InterServer) control panel password, FTP/SFTP, and database credentials.
3. Audit the `eduardo` user and every other user account; remove unknown accounts.
4. Do **not** migrate the existing WordPress database into the new site. Rebuild clean from the content in this document.
5. Check for injected files in `wp-content/plugins`, `wp-content/uploads`, `mu-plugins`, and `wp-config.php`; check for rogue cron jobs (`wp_options` → `cron`).
6. After the clean rebuild, submit a reconsideration/removal request in Google Search Console and request removal of the spam URLs.
7. dranne.net shows **no** sign of the same compromise (only 2 posts: `hello-world` — the WordPress default — and `practice-circles`).

---

## 1. Technical profile

| | **dranne.org** | **dranne.net** |
|---|---|---|
| Site title | Dr Anne | The dr.Anne Network |
| CMS | WordPress 7.1 | WordPress 7.1 |
| Theme | Hello Elementor | Hello Elementor |
| Page builder | Elementor **and** Pagelayer (two builders installed) | Elementor |
| Elementor kit | `elementor-kit-8` | `elementor-kit-176` |
| Other plugins detected | header-footer-elementor, fluentform, formlayer, cookieadmin, cookieadmin-pro | wpcacheon (caching) |
| Hosting | InterServer (footer credit) | OneStopWP (footer credit) |
| Developer credit | none | "Developed by Lin Khant Htel" |
| Favicon | — | `/wp-content/uploads/2026/03/cropped-dranne-32x32.png` |
| Viewport meta | `width=device-width, initial-scale=1` | `width=device-width, initial-scale=1` |
| Cookie consent | Yes (CookieAdmin Pro banner + preference modal) | None |
| robots.txt | standard | standard, points to `https://dranne.net/wp-sitemap.xml` |
| Sitemap | posts sitemap 404s (tampered) | `wp-sitemap.xml` returns 200 |
| Published pages | 5 | 21 |
| Published posts | **293 (all spam)** | 2 (`hello-world`, `practice-circles`) |
| Meta descriptions | auto-generated from page text (includes Lorem ipsum) | none present |
| `<h1>` on pages | **0** | **0** |

### Typography & color (as rendered)

**dranne.org**
- Body: system font stack, 16px, `#333333` on `#FFFFFF`
- Display headings: **Lobster**, 60px, white (on red banner sections) — e.g. "You're Invited !"
- Sub-headings: **Roboto**, 24px (H4) and 20px (H5), white on red
- Signature brand red used across the header banner and section blocks
- Emoji bullet graphic used for list markers: 🔴 (`1f534.svg`) — 9 instances on the home page

**dranne.net**
- Body: system font stack, 16px, `#333333` on `#FFFFFF`
- H2: **Roboto**, 32px — red `rgb(240, 6, 6)` / `#F00606`, also `rgb(250, 0, 3)` / `#FA0003`, and gray `rgb(122, 122, 122)` / `#7A7A7A`
- H3: **Arial**, 28px, black `#000000` (one at `rgb(26,0,0)`)
- Buttons (`.elementor-button`): Roboto 15px, black text on white background

> Note: the two sites do **not** share a type system. .org uses Lobster as a display face and Roboto for support; .net uses Roboto/Arial with no display face. Unify on rebuild.

---

## 2. Global elements (verbatim)

### dranne.org — header
- Logo/wordmark links to `https://dranne.org/`
- **DONATE** button (SVG: `donate_button.svg`) → `https://www.paypal.com/donate/?hosted_button_id=5332D74NS3YQU`
- Hamburger "Menu Toggle" at narrow widths
- Primary nav:
  - Home → `https://dranne.org`
  - Materials → `https://dranne.org/materials/`
  - Partner → `https://dranne.org/partner/`
  - Guide → `https://dranne.org/practice-circles/`
  - Testimonials → `https://dranne.org/testimonials-donate/`

> Note the mismatch: the nav label is **"Guide"** but the URL slug is `/practice-circles/`; the nav label is **"Testimonials"** but the slug is `/testimonials-donate/`.

### dranne.org — footer (verbatim)
```
Contact us: Ask@dranne.org
Learn more about the dr. Anne plan
©2026 drAnne Association. All rights reserved.
Powered by InterServer
```
("Powered by InterServer" links to `https://www.interserver.net/`)

### dranne.org — cookie banner (verbatim)
```
We respect your privacy
Cookies help us improve your experience, deliver personalized content, and analyze traffic. You can ...
[Customize]  [Accept All]  [Reject All]
```
Modal: **Personalize Your Cookie Preferences** / "Cookie Preferences"
```
We use cookies to ensure smooth navigation and enable essential site functions. You can view detaile...
Necessary — These cookies do not require your consent under GDPR.
Necessary Cookies — Always Active — Necessary cookies enable essential site features like secure log-ins and consent preference adjustme...
Functional Cookies — Functional cookies support features like content sharing on social media, collecting feedback, and e...
Analytical Cookies — Analytical cookies track visitor interactions, providing insights on metrics like visitor count, bou...
Advertisement Cookies — Advertisement cookies deliver personalized ads based on your previous visits and analyze the effecti...
Unclassified Cookies — Unclassified cookies are cookies that we are in the process of classifying, together with the provid...
[Reject All] [Save Preferences] [Accept All]
```
Powered-by link → `https://cookieadmin.net/`

### dranne.net — header
- Title text: **The dr.Anne Network**
- Primary nav (no dropdowns — all sub-pages are reached from inside page bodies):
  - Start Point → `/` (the page `start-point` redirects to the home page)
  - Team Build → `/team-build/`
  - Practice Circles → `/practice-circles/`
  - Open Sesame → `/open-sesame/`
  - About Us → `/about-us/`
  - Donate → `/donate/`
- Nav is duplicated in the DOM (desktop + mobile copies)
- Banner image below nav: red `dr Anne plan` logo (`image-768x156.png`)

### dranne.net — footer (verbatim)
```
©️2026 drAnne Association | Hosted on OneStopWP | Developed by Lin Khant Htel
```

### Contact addresses in use
| Address | Where used | Purpose |
|---|---|---|
| `Ask@dranne.org` / `ask@dranne.org` | .org footer, .org Partner page, .org Guide page | General / partner enquiries |
| `team@dranne.net` | .net home, Practice Circles, The Registry, Team Build (tips), About Us (media) | Volunteer / Practice Circle support, media submissions |
| `vip@dranne.net` | .net home (Independent & Partner), Events, Open Sesame | Certification, partnerships, events, product orders |

### External destinations referenced
| Destination | URL |
|---|---|
| PayPal donate | `https://www.paypal.com/donate/?hosted_button_id=5332D74NS3YQU` |
| PayHip (eBook/audio) | `https://payhip.com/drAnneAssociation` and `https://payhip.com/dranneassociation` (case differs) |
| Lightning Source (print) | `https://shop.lightningsource.com/b/085` (one link on Open Sesame uses insecure `http://`) |
| Amazon | `https://www.amazon.com/dr-Anne-plan-MANUAL-PRACTICE-Happiness/dp/0943584000/` |
| Barnes & Noble | `https://www.barnesandnoble.com/w/dranne-plan-manual-practice-anne-seifert/1147811562` |
| LinkedIn | `https://www.linkedin.com/company/dranne-association` |
| YouTube channel | `https://www.youtube.com/@drAnne9` |
| Practice Circle video | `https://youtu.be/GSn0eW50rrE` |
| Self-hosted video | `Good-Health-at-Hand-Video-Trailer_V1_FINAL_01-12-22-4.mp4` |
| ISBN cited | `978-943584-00-3` (malformed — a 13-digit ISBN needs 13 digits; likely `978-0-943584-00-3`) |

---

# 3. dranne.org — page-by-page, verbatim

## 3.1 Home — `https://dranne.org/` (page ID 5, slug `home`, title "Home")
Browser title: `Home - Dr Anne`

**Images:** `Banner.jpg` (red dr Anne Association wordmark banner, no alt), `About.png` (book-on-desk photo, no alt), 9 × `1f534.svg` (🔴 bullets), board portraits `Anne-240x300.png`, `Lawrence-235x300.png`, `Donna-224x300.png`, `Robin-243x300.png`, `Fred-245x300.png`
**Video:** `Good-Health-at-Hand-Video-Trailer_V1_FINAL_01-12-22-4.mp4` (HTML5 `<video>` with native controls)

**Copy, in page order:**

> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.

*(⚠️ PLACEHOLDER — must be replaced)*

> The dr.Anne Association is a nonprofit educational 501(c)(3) organization founded by Dr. Anne Seifert, an epidemiologist with decades of experience in nutrition and public health research. Based on her work at UC Berkeley, Harvard, and with the National Institutes of Health, Dr. Anne developed a simple, flexible, and proven system for lifelong weight control, healthy eating, and mindful living. Her approach helps individuals restore their health using everyday tools, such as portion control, movement, and stress reduction. Join a growing community committed to sustainable wellness without unhealthy diets, deprivation, or gimmicks.

**Heading (Lobster, 60px, white on red):**
> You're Invited !

**Sub-headings:**
> Interested in joining a Practice Circle or learning more?

> Whether you're just curious or ready to begin, your journey to better health starts here.

*(video block sits here)*

**Section heading:**
> Benefits of the
> drAnne plan

**Three-column benefit list (each bullet preceded by a 🔴 graphic):**

Column 1 — **Freedom instead of restriction:**
- still eat your favorite foods
- no counting calories, no weighing foods
- no drugs, no supplements

Column 2 — **Simple and fun!**
- easy to use
- easy to remember
- always available hand measure

Column 3 — **Livable forever:**
- flexible self-selected food choices
- adapts to medical restrictions
- enjoyable exercise, personal meditation

**Closing line:**
> The dr.Anne plan replaces confusion with confidence through simple, scientifically informed habits you can enjoy for life.

**Section heading:**
> Board of Directors

| Name & role | Credential line | Term |
|---|---|---|
| Anne Seifert, M.P.H., Ph.D. Chair/Founder | Epidemiologist, Author, Prior research UC Berkeley, Harvard, Columbia Universities | Term present-2026 |
| Lawrence Wasserman, Ph.D. Founding Director | President, Fortech International Ltd., Mangagement services and consulting | Term 2026-2028 |
| Donna Pare, M.S., Director | Computer Science, Entrepreneur, Professional Tutoring and Investor | Term 2025-2027 |
| Robin Hoik Phillips,I.H.P. Vice Chair/Founder | Integrative Health Praticioner, Writer/Owner Robinedits.com | Term 2025-2027 |
| Fred W. Hoyt, M.B.A, Secy/Treas. | Prior President of August European Comptroller, General Steamship Company | Term present-2026 |

**Footnote heading:**
> Elected for three year staggered terms

---

## 3.2 Materials — `https://dranne.org/materials/` (page ID 17, slug `materials`, title "Materials")
Browser title: `Materials - Dr Anne`

**Images:** `IMG_4401-768x960.jpeg`, `Book-2.jpg`, `Book-1.jpeg` (all with empty alt)
**Links:** three "Buy Now" buttons → `https://shop.lightningsource.com/b/085` (⚠️ all three books point to the identical URL), fourth "Buy Now" → `https://payhip.com/drAnneAssociation`

**Copy, in page order:**

> To Start
>
> Any one of these 3 books for the dr.Anne plan Course

**Book 1**
```
2025
8X10 size 146 pages
The Handbook for Good Health,
Happiness and Weight Control

drAnne plan Manual & Practice The
Handbook for Good Health,
Happiness and Weight Control™

Unlock the revolutionary method that's
changing lives. Created by dr. Anne, a
renowned epidemiologist and nutrition
expert, this simple yet powerful guide
gives you lifelong tools for:

Healthy eating without calorie counting
Portion control using just your hand. A
flexible, food-based lifestyle.
Long-term weight control that works.

This is not a diet. It's a way of life.

"Once you learn healthy eating, it's
yours for the rest of your life."

[Buy Now]
```

**Book 2**
```
2022
6X9 size 192 pages
Expanded Edition Handbook,
The lifelong way to eat,
exercise & meditate.

In this expanded edition of the dr.Anne
plan, Dr. Anne Seifert presents a gentle,
research based approach to lifelong
wellness. Drawing on decades of work in
public health and epidemiology, she
introduces the a flexible and intuitive plan
built around portion control, mindful
movement, and stress reduction.

This book is ideal for anyone seeking a
simple,sustainable lifestyle that doesn't
rely on calorie counting, food restrictions,
or unrealistic routines. Whether you're
just starting your wellness journey or
want to maintain healthy habits, this guide
provides practical tools you can use every
day

[Buy Now]
```

**Book 3**
```
2020
8.5X8.5 size 82 pages
Quickstart Handbook,
Clear and easy to follow
guidance

This Quick Start edition is perfect for
those who want to jump right into the
dr. Anne plan with clear, easy to follow
guidance. This streamlined version
gives you the tools to take immediate
action toward healthier habits without
being overwhelmed.

If you're short on time or want a more
direct introduction to healthy portion
control, movement, and stress
reduction, this version is your go-to
guide.

Ideal for:
New readers just starting their health journey.
Busy individuals looking for a clear, practical system.
Short, simple, and to the point with many fun illustrations.

[Buy Now]
```

**eBook line:**
> Online eBook and audio versions of the drAnne plan are available at PayHip.com
>
> [Buy Now]

**Testimonials section:**
> Testimonials

> "Now for the results. My dress size dropped from a stuffed 16 to a 10. My weight dropped from 170 to 150 withing the first month with no ill effects. My low blood sugar cleared up, my pains are gone, and you wouldn't believe my perky attitude." A.L. March 16, 1990 Englishtown, NJ

> "Great article on you and your book in the Sun today! I got it in January and have lost 10 pounds! I loaned it to two friends and am waiting to get it back to give to a third!" A.W. May 26, 2022 Seal Beach, CA

---

## 3.3 Partner — `https://dranne.org/partner/` (page ID 186, slug `partner`, title "Partner")
Browser title: `Partner - Dr Anne`
**No images, no links on this page** (the email address is plain text, not a mailto link).

**Copy, in page order:**

> Sponsor and Contribute

> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.

*(⚠️ PLACEHOLDER)*

> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.

*(⚠️ PLACEHOLDER — second instance)*

> We Welcome you to support our Association mission!

> Bring our program to your employees, members or others who might benefit.

> What is the dr. Anne plan Course? Led by health-trained professionals, it's a 3 session course that covers all nine Points of the program. Our 3 week dAp Course is generally offered in a virtual format through GoogleMeet in webinar fashion.

> Standarized. Sustainable. Scalable.

> Depending on the partner or organization, we follow this sequence to arrange our training Course:

> In-Person or Virtual An introductory Registration Session can be offered for approximately 1/2 hour: Covers a 15 minute talk– a general description of the program. Plus open time for questions and answers. At the conclusion of this Registration Session, future participants may wish to take advantage of this health benefit. Many will have already registered in advance. We offer a scaled $199 training course fee (includes $27 book & other materials fee).

> Some materials may be distributed at the first Course session or by arrangement with the organization.

> **Sponsors:** Your organization pays a lump sum upfront to sponsor a cohort or a specific number of employees or members. This would be considered a tax-deductible corporate sponsorship fee for an employee or member health initiative. The benefit: The company receives a single 501(c)(3) donation receipt as a tax deduction, and your employees or members receive access to the program for no cost to them.

> **Voluntary Employee or Member:** Your organization may promote our drAnne plan 3 week course to your staff, but the individual staff member pays the program fee out of pocket. This would be a tax deductible personal wellness enrollment donation.

> **Lifelong Practice Circles:** After Course completion, we offer continued sustainability at no extra cost to your organization. Practice Circles are volunteer led by volunteer participants. In this way employee and member access is maintained.

> **Enrollment Tiers:** There is some discounting for Course group size starting with small groups from 10-49 participants to larger groups 50-249, and with those over 250 members. We can seemlessly scale to a maximum of 1000 participants. However, we recommend capping the more interactive volunteer-led free Practice Circles to 30 members.

> With your sponsorship and partnership you will have a turnkey program with zero HR overhead. Our program is entirely self-sustaining. We offer standardized NIH backed materials and management of instructors.

> Contact us, or direct your health benefits liaison: ask@dranne.org

---

## 3.4 Guide — `https://dranne.org/practice-circles/` (page ID 19, slug `practice-circles`, title "Guide")
Browser title: `Guide - Dr Anne`
**Images:** `Group-Photo.jpeg`
**Links:** one unlabeled link → `https://youtu.be/GSn0eW50rrE`

**Copy, in page order:**

> For Continued Support

> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.

*(⚠️ PLACEHOLDER)*

> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.

*(⚠️ PLACEHOLDER — second instance)*

> The dr.Anne Association mission is to provide a sustainable program for a lifetime of healthy living. Proceeds from all donations support the Association website, volunteer activities and on going learning. Through your own initiative and or professionally led Courses and Practice Circles you can receive program instruction for good health practices:

- Learn how to eat out without feeling deprived
- No calorie counting or food scales
- Support and share in a judgment free space
- Practice portion control using your hand measure

> What are Practice Circles? These are self help, or coached or sponsored support groups that meet regularly to keep participants on track and motivated for good health goals.

> READY TO START?

> Become a V I P: VOLUNTEER INDEPENDENT Coach PARTNER or Sponsor

> **Volunteer On your own:** With the dr.Anne plan (dAp) book you can create your own TEAM. Study the book, and form a weekly Volunteer Practice Circle. Conduct you Practice Circle in person or online. Register your Circle with the Association so others may join you.

> **With your $199 donation:** Receive the nine Points of the program in a 3-week Course with a Health Professional to guide. Included is a copy of the dr.Anne plan book. Comprehensive.

> **With your $172 donation:** Receive the nine Point 3-week Course with a Health Professional to guide. (assumes you have the dr.Anne plan materials).

> **One-on-One coaching:** Privately offered by Independent health professionals certified by the Association. These providers may also offer with your $18 donation one Practice Circle Point at a time. Participate at your own pace. Select the Practice Points you wish to discuss

> **Partner or sponsor the program:** To provide a benefit to your Club, organization, company or, health related practice you may wish to offer the dAp program to your members. Let us know and we will discuss how we can do this–everybody wins!

> To get more information: ask@dranne.org

> For your donation of $199 you will receive the dr.Anne plan Course. ($172 if you already have the book).

> For your donation of $18: Access to a Point Practice Circle session led by a professional coach.

> Watch a Practice Circle in action!
>
> Watch a Practice Circle in action!

*(⚠️ this line is duplicated on the live page)*

> Real participants, real progress, using the MagicHand method in the drAnne plan

---

## 3.5 Testimonials — `https://dranne.org/testimonials-donate/` (page ID 163, slug `testimonials-donate`, title "Testimonials")
Browser title: `Testimonials - Dr Anne`
**Images:** `Group-768x677.png` (SAG Health Fair photo), plus a sponsor/collaborator logo wall: `paypa2.png`, `Parker-dewer.png`, `Wp.png`, `Lin.png`, `Frederick.png`, `FreeMan.png`, `Google.png`, `College-of-Staten-Island.png`, `ZOHO.png`, `Inter.png`, `John.png`, `Idealist.png`, `GoFund.png`, `smith.png`, `Green.png`
**Links:** one → `https://www.paypal.com/donate/`

**Copy, in page order:**

> Hand in Hand

> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.

*(⚠️ PLACEHOLDER)*

> With Volunteers, actors Roberta Bassin and Nina Diamante at the Screens Actor's Guild Health Fair 2011

> Thank you to our sponsors, collaborators, volunteers, and donors:

> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.

*(⚠️ PLACEHOLDER — second instance)*

> COMMENTS FROM PARTICIPANTS WHO HAVE COMPLETED
> the drAnne TRAINING COURSE

> "Everybody I talked to just loved it. Thank you, thank you, thank you." M. S. Solana Beach, CA

> "In two months I lost 15 pounds, and I could eat potatoes and ice cream." A.V. B. Tarpon Springs, FL

> "It really made me conscious of how much I was eating and when." D.A. F. Beverly Hills, CA

> "I felt like I was eating normally for the first time in my life." M. B. San Diego, CA

> "This is great. I do a lot of flying and now I know how I can eat airline and restaurant food without gaining weight." J. M. K. Massapequa Park, NY

> "I just started and it has already changed the way I eat in restaurants." E. L. Seal Beach, CA

> ⚠️ The page is named "Testimonials **Donate**" in the slug but contains no donation content beyond the logo-wall PayPal image link.

---

# 4. dranne.net — page-by-page, verbatim

**Full page inventory (21 published pages):**

| ID | Slug | Title |
|---|---|---|
| 140 | `start-point` | Start Point *(redirects to `/`)* |
| 124 | `team-build` | Team Build |
| 358 | `team-build-formats` | Team Build – Formats |
| 363 | `team-build-events` | Team Build – Events |
| 368 | `team-build-here` | Team Build – HERE |
| 462 | `practice-circles` | Practice Circles |
| 491 | `practice-circles-open-and-close` | Practice Circles – Open and Close |
| 507 | `practice-circles-open-close-statements` | Practice Circles – Open Close – Statements |
| 497 | `practice-circles-the-registry` | Practice Circles – The Registry |
| 134 | `open-sesame` | Open Sesame |
| 377 | `open-sesame-independent` | Open Sesame – Independent |
| 136 | `about-us` | About Us |
| 132 | `about-us-practice-circles` | About Us – Practice Circles |
| 412 | `about-us-samples` | About Us – Samples |
| 429 | `about-us-food-plates` | About Us – Food Plates |
| 404 | `about-us-recipes` | About Us – Recipes |
| 420 | `about-us-our-scrapbook` | About Us – Our Scrapbook |
| 138 | `donate` | Donate |
| 330 | `learn-more-volunteer` | Learn More – Volunteer |
| 338 | `learn-more-independent` | Learn More – Independent |
| 346 | `learn-more-partner` | Learn More – Partner |

---

## 4.1 Home / Start Point — `https://dranne.net/`
Browser title: `The dr.Anne Network`
**Images:** `image-768x156.png` (red "dr Anne plan" banner), `image2-1.png`, `image3-1.png`, `image4.png`, `image5.png`
**Links:** three "Learn More" buttons → `/learn-more-volunteer/`, `/learn-more-independent/`, `/learn-more-partner/`

**Copy, in page order:**

> The dr. Anne Association is a 501(c)(3) organization founded February 18, 2025 and is the administrative arm of this program. We offer the dr.Anne plan as a way to teach good healthy living practices, and to make it easy and fun. For more about us, visit www.dranne.org

> This network website focuses on how we function, what we offer, how one can participate , and provides the basic materials needed for those wishing to actively support the dr. Anne plan.

> **Our Mission:**
> To promote a healthy lifestyle including well-balanced eating for weight control, and exercise for physical strength and meditation for stress reduction. And to provide Practice Circles for support. To offer a flexible and practical program for lifetime.

> **Membership Categories**

**Card 1 — Volunteer**
```
Volunteer

To join a Practice Circle
To Guide a Practice Circle
To Mentor a Guide

All you need to start is a copy of the book materials. Find a Practice Circle through our Registry or create your own.

Contact us to create your own Practice Circle:
team@dranne.net

[Learn More]
```

**Card 2 — Independent**
```
Independent

For those with private health related practices
For those who coach
For those with dAp Mentor level experience

Become certified to present our 3-week Course. We can also list one-to-one services with your fee.

Contact us to arrange for your certification: vip@dranne.net

[Learn More]
```

**Card 3 — Partner**
```
Partner

To grow our mission by supporting a Training Course
To offer a professional service
For joint fund-raising, sponsorship, or donations

Just let us know your interest. We welcome other business and nonprofit organizations.

Contact vip@dranne.net

[Learn More]
```

**Section — How to use this site:**

> Welcome! And thank you for being here. The purpose of this Site is to provide content– so much content that all your questions are answered, and all the materials and forms that you need to actively participate are contained here for viewing and downloading. Tap the "Learn More" button above and the process begins.

> We recommend that you get familiar with this Home page. Determine the Membership category (or categories) where you want to actively participate. Because this is a new Site, some of the tabs are still under construction.

> Our intent is also to make this Site interactive. You may pose questions, reach out to others, and in general get support for guiding Practice Circles.

> Once you complete the 9 Points of a Practice Circle or Course, your Membership is for life! Learning never stops and we don't either.

---

## 4.2 Team Build — `/team-build/`
Browser title: `Team Build – The dr.Anne Network`
**Links:** "Events" → `/team-build-events/`, "Formats" → `/team-build-formats/`, "here" → `/team-build-here/`

**Copy, in page order:**

> HOW YOU CAN BECOME PART OF THE TEAM
> Structured. Standardized. Scalable.

> We provide a structured, evidence-based behavioral health education program emobying three Keys to Good Health: sustainable weight management, enjoyable movement, and stress reduction.

> Our model is "plug and play" and "one-and-done." Participants complete a defined Course covering nine Points and gain tools for lifelong health. After completion, we promote volunteer-led peer support groups to reinforce long-term adherence — without any ongoing subscription costs.

> For employers, clubs, and other organizations, we offer this health education program designed as a turnkey member benefit. The model is scalable, low-burden to implement, and aligned with public health principles of prevention and self-efficacy.

> Our testimonials speak for themselves:

> "I got the book in January and have lost 10 pounds! Loaned it to two friends and am waiting to get it back to give to a third!" Seal Beach, CA

> "Now for the results. My dress size dropped from a stuffed 16 to a 10. My weight dropped from 170 to 150 within the first month with no ill effects. My low blood sugar cleared up, my pains are gone, and you wouldn't believe the perky mental attitude." Englishtown, NJ"

**Where to begin?**
- Practice Circles led by Volunteers:
- Practice Circles and Courses led by Independent contractors
- Practice Circles and Courses led and/or sponsored by Partners

> Practice Circles can be led by a Volunteer, or by an Independent contractor (where an instructor's fee may be charged), or supported by a Partner.

> For each Membership Category above there are different venues that may fit each organization best. All these Members form our TEAM. And that TEAM requires a basic minimum to begin.

> **Three** At Least to participate.
> **Experience** with the training
> **Administrative** ability to organize the Course or Event and a
> **Meeting space** Virtual or in-person

> To become part of our TEAM there are other options to consider– to deliver our three Keys, nine Point training course.

- [Events](/team-build-events/) that our Association can offer or that you may create
- [Formats](/team-build-formats/) for Courses

**Certifications**

> For volunteers who organize and Guide Practice Circles there is a step by step progression to become a Certified Independent Member if you are not already a health professional with a client base. First, start your own Practice Circle or join one that is ongoing. After you have led or participated in a full series of the nine Practice Points, you can become a Point Mentor who assists newly formed Practice CircleGuides.

> For Independent coaches or health professionals, experience with the training course, and completing the nine Practice Points is mandatory.

> For Volunteers and Independent Members to receive Certification, passing a short tutorial test is required, followed by an interview with a dAA Board member.

**The MagicSquare Learning Wheel**

> This card is your ticket to other events and services provided by the Association. It is used to authorize your Membership to join any Practice Circle, and also to verify you as a Volunteer Guide or Independent Member to lead a Course or Circle.

**Frequently Asked Questions**

> Here are several of the most frequent questions we are asked.

> **Q. How can I create my own Circle Group?**
> A. You will need a T- E- A- M.
> Go to the Practice Circles tab to learn how you can form your own Practice Circle and become a CircleGuide.

> **Q. How is the MAGIC-HAND program administered?**
> A. Persons who enter the program use the dr.Anne plan Practice section in the book to cover nine Point sessions. The book is the instructional manual for the training course. This program is administered through Circle Groups that are either self-help (Volunteer), privately operated (Independent) or sponsored (Partner).
> - Volunteer: Sessions are free of charge, virtual or in-person
> - Independent: Circles are guided by a credentialed person. One-to-one for fee.
> - Partner: Sponsor or fund raising for clubs or other organizations.

> **Q. How did the dr.Anne plan begin?**
> A. In 1976 Anne Seifert, M.P.H., Ph.D. (psychologist and epidemiologist) became Co-Investigator of a National Institute of Health funded study of over 2,000 participants investigating how healthy people stay healthy. From her observations she concluded that most chronic or debilitating diseases were either exacerbated or the result of being overweight. In an attempt to discover an easy program that was well-balanced and used foods that people normally eat, she discovered that most programs were not practical for a lifetime of control. The dr.Anne plan was developed to be simple to understand and easy to implement. It is for people who know that they cannot maintain a healthy ideal weight without monitoring their food intake. In 1982 this approach to eating was introduced first in book form.

> To see more Q & A click [here](/team-build-here/).

**Online Chat Communications**

> Go to our drAnne Association company page on LinkedIn:
> https://www.linkedin.com/company/dranne-association
> Send us message, add a comment if you wish, and chat with others.

**Tips**

> We've assembled some tips from participants engaged in our program that may be uselful to others. Take a look, and contribute your own by sending an email to team@dranne.net

> ⚠️ "Take a look" is not linked to anything — the Tips content does not exist.

---

## 4.3 Team Build – Formats — `/team-build-formats/`
Browser title: `Team Build – Formats – The dr.Anne Network`

> CONFIGURATIONS for drAnne plan training Course

**Code:**

| Code | Name | Detail |
|---|---|---|
| 9W | 9-Week Course: | 1 Point session a week, 45 min. each |
| 5W | 5-Week Wonder | 2 Point sessions a week /contiguous or separate |
| 3W | 3-Week Turnaround: | 3 Point sessions a week /contiguous or separate |
| 2W | 2-Week Insight | Starts & Ends during two week period |
| 1W | 1-Week Celebration: | Starts & Ends during one week period. |
| 3D | 3-Day Package: | Any 3 days, generally Fri. eve., Sat. & Sun. |
| 2D | 2-Day Event | Any 2 days: 5 & 4 Point split |
| 1+ | 1+Day Followup | A full-day plus followup meeting by Appt. |
| 1D | 1-Day Miracle | A full-day generally from 9am to 8pm with meals |

> Depending on the Partner or organization, we follow this sequence to arrange a training Course:

> **In-Person or Virtual**

> An introductory Registration Session will be offered for approximately 1/2 hour: Covers a 15 minute talk– a general description of the program. Plus 15 minutes of open time for questions and answers.

> At the conclusion of this Registration Session, future participants will be asked to register and pay for the course: $99 training course fee (includes $27 book & materials fee).

> The materials will be distributed at that time or by arrangement with the organization. The following week the first Practice Circle will meet to discuss Point 1 (of 9 Points).

---

## 4.4 Team Build – Events — `/team-build-events/`
Browser title: `Team Build – Events – The dr.Anne Network`

> SAMPLE EVENTS

> **Ahoy dr.Anne!**
> A one week cruise along the California coast to experience the lifestyle and good health of the dr. Anne plan. Available once a year and with prior contract arrangements. Contact vip@dranne.net for more information

> **Dinner with Donna**
> Located in western Massachusetts. A dinner invitation for those currently in a Practice Circle who would like the informality of a conversation with one of our Board members. Open to CircleGuides and their participants. Place,time and date to be decided. Contact vip@dranne.net

> **Robin's Retreat**
> From 4 to 7 days in a natural setting along the California coast. Learning the dr.Anne plan's principles with others. Good meals, regular exercise, hiking and enjoying a change away from normal routine. Please contact us at vip@dranne.net if interested.

> Or, arrange an event of your choice and one of our CircleGuides will integrate the training Course with your agenda. Good for business conferences and spouse attendance.

---

## 4.5 Team Build – HERE (overflow FAQ) — `/team-build-here/`
Browser title: `Team Build – HERE – The dr.Anne Network`

> **Q. Why is the drawing called your MagicHand?**
> A. While speaking on using the palm of the hand as a measurer for portion control Dr. Anne was asked by a member of the audience where to press on the hand to lose weight. She replied that there was no magic spot. The audience seemed disappointed. Hence the word "Magic" was added. After all, isn't magic the mastery of hand-eye techniques to produce results? The MagicHand is used for gauging portion size. It is a "hand-trick" for allocation of food that results in making pounds disappear. Call it slim of hand!

> **Q. This program is identified as a plan for Healthy Moderation. Please explain.**
> Where this program lives is in the concerpt of balance. There is no restrictive dieting, extreme fitness, quick-fix weight loss, or app-driven nudging. Instead the dr. Anne plan leans towards sustainability, public health credibility, behavioral realism, good health practices, and long-term adherence.

> ⚠️ The second Q has no "A." prefix. The page title "HERE" is a link-target name, not a real page name.

---

## 4.6 Practice Circles — `/practice-circles/`
Browser title: `Practice Circles – The dr.Anne Network`
**Images:** `practice-circles-768x842.png`, `practice-circles-2-1-768x1058.png`, `practice-circles-3.png`
**Links:** "Open and Close" → `/practice-circles-open-and-close/`, "The Registry" → `/practice-circles-the-registry/`

> **Hands-On Continuing Support**

> Our Nine Point training course is an easy way to learn well-balanced eating and portion control using everyday foods to maintain an ideal weight. Easy enough to say, but not as easy to do! For this reason those who have heard about the program, and/r have read the book may need Hands-On support.

> Thank you for your willingness to lead a Practice Circle. In this section we will give you all the steps for successful implementation of your Circle. Keep in mind that Practice Circles can be offered in different formats. However, for most Volunteer organized Circles we recommend a 45 minute (Virtual or In-person) session to cover one Point Practice each week.

> **Materials**
> To make this program adaptable for home study we have several ways to learn through books and digital materials. We recommend the print books. The same Practice lessons are in the books, and we believe the act of reading the Practice section and then writing personal answers in the spaces provided creates a better self-help experience.

> **Starting A Practice Circle**
> You will need at least three people to begin. We recommend that each Practice Circle create Three Linking Rings to keep the Practice Circle running smoothly. They are the:
> - **Ruling-Hand:** Contact phone number and/or e-mail for the circle group.
> - **Right-Hand:** Assists the Ruling Hand, may organize registration events.
> - **Post-Hand:** Meeting notices for virtual or in-person.

> Circles can be any size and meetings held wherever space or whenever time permits.

> You will need to form a T E A M:
> - **Three** Linking Rings Participating members for the Circle.
> - **Experience** Knowing the 9 Points of the dr.Anne plan.
> - **Administrative** Registering the Practice Circle with this website.
> - **Meeting space** Providing a place to meet or virtual meeting for Point sessions

> Find a place to meet. This could be a person's home, meeting room, or restaurant. Establish a time when on a regular basis at least 3 people can attend. Eventually through word of mouth or notices or your social media contacts others will join the Practice Circle.

> **Explaining Practice Circle Structure**

> **Get.** In general, new participants may join the Practice Circle at any Point session and are required to get a copy of the dr. Anne plan book– to have in hand at all meetings.

> All CircleGuides are required to read the standard Open and Close statement that we provide, downloadable here from the link. It is important to start the meeting on time and to end on time. The CircleGuide opens and closes the Point sessions however, if you'd like, this responsibility can rotate among Circle members.

> **Guide.** During the meeting the CircleGuide reads from the Practice Point page in the book. There is some leeway as to which topics on that page might be covered. Open discussion follows. The CircleGuide must be mindful of the time for the Point session (45 minutes) and move conversation gently. What's important is to listen to participants and allow others to speak. It is not the responsibility of the CircleGuide to provide answers or information. We advise that one speak only from personal experience and not be directive. Each person is on their own journey of discovery and answers may differ for each one.

> After the Close of the Point session we suggest a clapping of hands to thank all attendees for being there. If you would like to have a Point Mentor available from the Associaiton to assist your presentation, please let us know: team@dranne.net

> **Grow.** If you wish to have an open Practice Circle available to anyone who would like to join please list with The Registry. If you are an Indepdent health professional or coach offering our training Course being listed is highly recommended. For on-going Practice Circles this would be an avenue for other participants to join.

> **Membership Stages**

> We have three levels of membership. Those who are going through the Point Practice sessions for the first time are in the (1) Apprentice stage– learning the program, not yet a Member. Some volunteer Practice Circles will have little or no experience in running these Circles and that is okay. All are Apprentices. Ideally we would like to see the progression outlined as we discuss here.

> After successfully completing the Nine Points of the plan, either through home study or in Pracitice Circles, the Apprentice becomes a Member and is eligible to become a (2) CircleGuide. You are then qualified by experience to lead and direct your own Circle Group. A Circle Guide who has successly led three Practice Circle sessions becomes a (3) Point Mentor, able to assist and support other CircleGuides.

> This progression of experience is what is required to become eligible for Independent Member status. These members are usually health professionals or volunteers who have received enough dr.Anne plan program training to create their own coaching businesses. And many charge fees for one-on-one couseling as well. For this credentialed class of Membership we recommend the 3 week dAp Training Course format. It is a fast-track learning option. Practice Circles may also be offered by the Independent Member on a pay per Point basis after the Course.

---

## 4.7 Practice Circles – Open and Close — `/practice-circles-open-and-close/`
Browser title: `Practice Circles – Open and Close – The dr.Anne Network`
**Images:** `open-close-2.png`
**Links:** "Open Close Statements" → `/practice-circles-open-close-statements/`

> **Open and Close Statements**

> CircleGuides open and close each Practice Circle by reading standard statements. This allows for conistancy among all Circles and provides an anchor for the Guide. Clidk on the link below to download the required statements:

> [Open Close Statements]

> **What to Remember**

> Encourage your participants to fill in the dot on their MagicSquare learning wheel card after they complete each Point session.

> This card shows achievement and also acts as a Member card for attending Practice Circles. Once the nine Points are completed, Membership in the Association is for life. Learning and repeating Points is a lifetime commitment to the program.

> ⚠️ The copy says "download", but the link goes to another web page, not a downloadable file. There is no PDF anywhere on either site.

---

## 4.8 Practice Circles – Open Close – Statements — `/practice-circles-open-close-statements/`
Browser title: `Practice Circles – Open Close – Statements – The dr.Anne Network`
**Images:** `open-close-...png` (alt "open-close", used twice)

**This is the single most important operational document on either site. Full verbatim:**

> **Open**

> Welcome to the ______________ Practice Circle, Our mission is to foster nutritionally balanced portion-control eating, enjoyable movement and quiet time to promote good health. Each of the Plan's Nine focus Points addresses a specific issue related to achieving a healthy weight and good health habits.
> This discussion provides insight into your own behavior regarding physical, psychological, and practical concerns.
> I,_________ , am your Guide, for this Point session.

> Our meeting guidelines are simple and important: Please allow each person to speak without interruption. Raise your hand to be recognized. Communicate to the degree possible using "I" statements. Focus on your own experience. We ask that you respect the privacy and confidentiality of each person and that you make this a safe place for everyone. If asked to read aloud, and you'd rather not, simply say "pass".
> Are there any questions or reports you'd like to make?
> Before we begin this Point let us review the principles of MagicHand Eating:

> Hold up your left hand. Your fingers represent food-groups. Starting with the pinky repeat
> "My Fingers Count Portions Offering Variety".

> M is for? (Milk and Dairy), F is for? (Fruit), C is for? (Carbohydrate) P is for? (Protein). O is for? (Oils and Fats) , and the V is for? (Vegetables) It's open because it's (unlimited). And drink plenty of? (Water).

> The fingers above the palm represent food groups governed by palm portions— the size of your palm, no thicker than your thumb or a cupped palm. The thumb measured to the first knuckle joint is an Oil or Fat portion.

> You are allowed 12 palm-portions and 3 thumb portions a day plus unlimited Vegetables. Each palm or thumb portion represents a chit. If you do not consume all 15 chits in a day, they are not saved for the next day. If you exceed the allotted amount, do not cut back the next day. On this Plan, every day is a new day.

> Today, we will be discussing Point ___ called ___________.

> Go to the Point___ Practice page. I will start the reading and then invite your discussion.

> **Close**

> (allow 5 minutes)

> We are now at the close of Point___. Fill in the dot now on your MagicSquare card or in the book to mark completion of this Point..

> Think of the number that represents your ideal weight. Visualize yourself at that weight. (pause)
> Imagine yourself at your ideal weight. Say after me:

> "I choose to be at my ideal weight." (sentence is repeated by attendees)

> Now place your hands gently on your abdominal muscles. As you inhale allow your mid section to expand– fill the balloon. As you exhale, tighten your muscles, flattening your back.

> We will take three slow, relaxing breaths:
> As you breather, picture yourself at your ideal weight.

> 1….. Inhale— expand the abdominal midsection, fill the balloon.
> Exhale— contract the abdominals, let the air out

> 2….. Inhale— expand,
> Exhale— contract

> 3….. Inhale…
> Exhale…

> Our next session will be Point ___, called __________ on _________(day) __________(date)

> Would anyone like to volunteer to lead this next session?

> Thank you for having a HAND in this session!

**Mnemonic reference (for rebuild):** MFCPOV — **M**ilk and Dairy, **F**ruit, **C**arbohydrate, **P**rotein, **O**ils and Fats, **V**egetables (unlimited). "My Fingers Count Portions Offering Variety." Daily allowance: 12 palm portions + 3 thumb portions = 15 chits, plus unlimited vegetables.

---

## 4.9 Practice Circles – The Registry — `/practice-circles-the-registry/`
Browser title: `Practice Circles – The Registry – The dr.Anne Network`
**Images:** `the-registry-2-768x408.png`, `the-registry-768x437.png`
**Links:** "Independent" → `/learn-more-independent/`

> **The Registry**

> Locate an established Circle Group from The Registry. Or start your own Circle Group. We urge you not to attend any Circle Group that is not registered with us since they will not have the proper guidelines or instructions on how to conduct the Practice Point sessions.

> Register your Circle Group by completing the form below and send by email: team@dranne.net

> ⚠️ **There is no form on this page.** No `<form>` element exists. This is a hard functional gap.

> **MENU Code** What does that mean?
> A. It's simply a way of describing the meeting schedule. The Code indicates the number of days, weeks or months to cover the 9-Points.

> **TYPE** What does that mean?
> A. This refers to the way the training course is offered and by whom. Is this Circle Group a Volunteer effort, or offered by an Independent contractor or restricted only a Partner arrangement for those in a club or organization orcompany. Depending on the Type, the Circle Group may be free of charge or you may have to pay to attend.

> **Agreement and understanding**
> Circle Groups must register with the dr.Anne Association for placement or referral from this website. All Guides must agree to follow the program formula, adhere to good business practices, cooperate with other Guides, observe confidentiality, take full responsibility for the conduct of their Circle Group and maintain communication with the Associaiton.

> **UNDER CONSTRUCTION**

> We provide these listings below as an example of how our Registry will appear to others who search for an on-going Practice Circle.

**Type Code table (note: this table has 3 extra codes the Formats page does not list — 9M, 5M, 18W):**

| Code | Name | Detail |
|---|---|---|
| 9M | 9-Month Win | 1 Point session a month, 45 min. each |
| 5M. | 5-Month Shapeup | 1 Point session twice a month |
| 18W | 18-Week Harmony | 1 Point session every other week |
| 9W | 9-Week Course: | 1 Point session a week, 45 min. each |
| 5W | 5-Week Wonder | 2 Point sessions a week /contiguous or separate |
| 3W | 3-Week Turnaround: | 3 Point sessions a week /contiguous or separate |
| 2W | 2-Week Insight | Starts & Ends during two week period |
| 1W | 1-Week Celebration: | Starts & Ends during one week period. |
| 3D | 3-Day Package: | Any 3 days, generally Fri. eve., Sat. & Sun. |
| 2D | 2-Day Event | Any 2 days: 5 & 4 Point split |
| 1+ | 1+Day Followup | A full-day plus followup meeting by Appt. |
| 1D | 1-Day Miracle | A full-day generally from 9am to 8pm with meals |

> Use this link to find Certified [Independent](/learn-more-independent/) providers.

> These providers are able to present our Training Course and lead Practice Circles. They may offer one-to-one counseling or coaching. Fees will vary.

> ⚠️ This "Independent" link points to `/learn-more-independent/` (the explainer page), not to `/open-sesame-independent/` (the actual provider list). Wrong target.

---

## 4.10 Open Sesame — `/open-sesame/`
Browser title: `Open Sesame – The dr.Anne Network`
**Images:** `manual-practice-242x300.png`, `good-health-at-hand-198x300.png`, `good-health-at-hand-2-298x300.png`, `starter-kit-300x256.png`, `handy-chits-227x300.png`, `salad-spinner-300x251.png`

> **Donate** *(link → PayPal)*
> **Open Sesame**

> Here is your "treasure trove" of basic materials to support our dAp Course. Plus other products that may be of interest.

> **Basic**

> To start the program in a Training Course or by attending Practice Circles you will need to have the dr.Anne Manual & Practice book. Earlier books may be used as well. Proceeds from the sales of these materials are used to support volunteer activities and provide on-going Practice Circles.

> **WHERE TO GET THE dr. Anne plan books**

> [dr. Anne plan books](https://www.amazon.com/...) Order from your local bookstore ISBN 978-943584-00-3, or here!

> [barnesandnoble.com](https://www.barnesandnoble.com/w/dranne-plan-manual-practice-anne-seifert/1147811562)

> **C A T A L O G U E**

> Use the Shopping Cart links provided and supply the requested information and your order will be processed by the vendors directly or through PayPal.

> Books by Dr. Anne (prices may vary depending on vendor & shipping)

```
dr. Anne plan Manual and Practice: Good Health, Happiness & Weight Control.
Varnes, 2025. 144 pages
list price_________________________$27
[Order Here]

dr. Anne Good Health at Hand/ Expanded Edition: Your lifelong way to eat, exercise and meditate. Varnes, 2023. 190 pages
list price___________________________$27
[Order Here]

dr. Anne Good Health at Hand/ Quick Start: Your lifelong way to eat, exercise and meditate. Varnes, 2020. 80 pages
list price_________________________$18

Also available in downloadable format for either desktop or smartphone________$18

[Order Print Book Here]
[Link to order online book]
```

> **Training Options**

> **dAp Training Course**
> Arrange with the Association to have your company, organization or club, sponsor or present our training course. 9 sessions over a 3-week period
```
Participant fee____________________________________________$199
with prior materials purchase_________________________________$172
```
> Contact us: vip@dranne.net

> Private consultaitons, coaching, speakers _________________fees will vary
> One-on-one training available. See our [Registry](/practice-circles-the-registry/) or go directly to our list of certified [Independent](/open-sesame-independent/) providers.

> **Products**

> **dAp Starter Kit** Purchase is by arrangement with sponsoring Partner organizations.
> A fun way to start the Training Course: Includes hand draw materials, the book, and more. Contact: vip@dranne.net

> **Handy Chits ounter app**
> For your smartphone or computer. Special order___ $9

> **drAnne Salad Spinner.** (in development)

> ⚠️ The publisher is given as "Varnes". ⚠️ "Handy Chits ounter app" is missing the "C" in "Counter". ⚠️ One "Order Here" link uses `http://` not `https://`.

---

## 4.11 Open Sesame – Independent — `/open-sesame-independent/`
Browser title: `Open Sesame – Independent – The dr.Anne Network`
**Images:** `robin-philips.png`

> **Independent Providers:**

> These providers have been certified by the Association to deliver our Training Course in various formats, and to offer Practice Circles as well as one-on-one coaching or counseling.

| Name/ Specialty | Local/TZ | Contact Information |
|---|---|---|
| Robin H. Phillips, IHP/Integrative Health | 92866/PT | 203-xxx-xxxx |
| John Clenton, BEng /Support counseling | 92316/PT | 909-xxx-xxxx |

> **Service Offered:**
> Robin Phillips,IHP
> one-on-one support

> ⚠️ Phone numbers are masked placeholders (`203-xxx-xxxx`, `909-xxx-xxxx`). The page is effectively non-functional. Also note the area code 203 (Connecticut) paired with a 92866 (Orange, CA) location code — inconsistent.

---

## 4.12 About Us — `/about-us/`
Browser title: `About Us – The dr.Anne Network`
**Images:** `about-us.png`, board portraits `anne.png`, `lawrence.png`, `robin.png`, `fred.png`, `donna.png`
**Links:** "samples" → `/about-us-samples/`, "Practice Circle photos" → `/about-us-practice-circles/`, "food plates" → `/about-us-food-plates/`, "Recipes" → `/about-us-recipes/`, "Our Scrapbook" → `/about-us-our-scrapbook/`

> **About**

> The dr.Anne Association is a self-supporting nonprofit 501(c)(3) organization. Proceeds from materials amd training Courses are used to fund the website, volunteer activities and provide on-going Practice Circles.

> In this section we will provide background history of the program that you are free to use for promoting your Circle or Course. In addition we want to encourage you to send us your photos, videos and articles to share.

> **Background History**

> The origins of this program go back to 1972 when Anne Seifert, Ph.D.epidemiologist, had a consulting practice working as Co-Investigator for the Institute of Health Reseach at Pacific Medical Center in San Francisco. She worked with famed pathologist and Chief Investigator Dr. George Z. Williams. He promoted behavioral lifestyle change as a way to prevent or forestall chronic debilitating disease later in life. Under a National Institute of Health grant they conducted a study of how healthy people could stay healthy. The study included over 2,000 people who were regularly evaluated using laboratory tests, exercise protocols, and lifestyle habit questionnaires. This four year study, demonstrated that lifestyle change had positive impact on blood pressure, body fat and overall health scores. From years past, these similar conclusions are drawn from the classic 1960's Belloc and Breslow study, and the continuing 1976 Nurses Health Study. In essence, health practices matter.

> Following her experience at the Institute dr.Anne began her mission to find a way to make eating healthy, good exercise, and balancing life situations easy. She studied existing weight loss and lifestyle programs, some good, but too demanding to be practical for daily living, and others just not that healthy. Finally, in 1982 dr.Anne wrote her first book on the subject "The Intelligent Woman's Diet". She offered classes through clubs and government agencies. Realizing that education was not enough– that people needed support for life style change– she created a progam that we now have in its final form as the dr.Anne plan. It combines everything into one package. And it is easy to learn, has elements of fun, and is sustainable for a lifetime.

> **Flyers and Brochures**
> You can model your own promotions for Practice Circles or Courses after these. We include [samples](/about-us-samples/) from prior events and classes.

> **Our Media Gallery:**
> Here we can celebrate the many years the dr.Anne program has been operating with different organizations and different venues.
> Take a look at our [Practice Circle photos](/about-us-practice-circles/). Send us yours and we can add them here.
> Also, photos of [food plates](/about-us-food-plates/) with palm/thumb portions would be great.
> Please be aware that our dr.Anne You Tube channel https://www.youtube.com/@drAnne9 contains recordings of Practice Circles and some tips. Send us your video and it can be included on our channel. Send photos and videos to team@dranne.net

> **[Recipes](/about-us-recipes/)**
> We have created this section to satisfy your appetitie for good healthy foods you can make at home. Yes, please send your own recipes– and make sure that your ingredient list uses palm and thumb portions to measure. You can follow the example of how others have done this. Bon Apetit!

> **[Our Scrapbook](/about-us-our-scrapbook/)**
> In this section we have a compilation of interviews, press clippings, and other media announcements that may be of interest. These tell the story of the dr.Anne plan.
> If you get any press or media coverage for your Circle or Course we would be happy to place it here.

> **A message from the Board of Directors**
> Thank you for joining our Association as a Volunteer, Independent provider or Partner. We will continue to serve you and expand our outreach.

**Board block (as written on .net — note it differs from the .org version):**
```
Anne Seifert, M.P.H., Ph.D.
Chair/Founder Epidemiologist
Prior Research UC Barkeley,
Havard, Columbia

Lawrence Wasserman, Ph.D.
Founding Director
President,
Fortech International

Robin Hoik Phillips, I.H.P.
Vice Chair/ Founder Integrative Health Practicioner
Owner

Fred W. Hoyt, M.B.A
Secy/ Treasurer Prior Pres of AuguestEuropeanComptroller
General Steamship

Donna Pare, M.S.,
Director Computer Science
Entrepreneur
Tutoring Investor
```

---

## 4.13 About Us – Practice Circles (photos) — `/about-us-practice-circles/`
Browser title: `About Us – Practice Circles – The dr.Anne Network`
**Images:** `seal-beach-1024x519.png`, `hollywood-1024x790.png`, `newport.png`, `senior-center-1024x372.png`

> **Practice Circle Photos**
> at Leisure World, Seal Beach
> at Screen Actor's Guild, Hollywood
> at Smith Club OC, Newport Beach, CA
> at Clubhouse, Senior Center, Seal Beach

---

## 4.14 About Us – Samples — `/about-us-samples/`
Browser title: `About Us – Samples – The dr.Anne Network`
**Images:** `flyer-768x879.png`, `flyer-2-768x925.png`

> **Flyers and Brochures**
> Here are some samples used in the past. Make your own for upcoming meetings.

> ⚠️ Flyers are images only — not downloadable templates. Copy says "Make your own" but provides no template file.

---

## 4.15 About Us – Food Plates — `/about-us-food-plates/`
Browser title: `About Us – Food Plates – The dr.Anne Network`
**Images:** `foodplate-768x678.png`, `foodplate-2.png`, `foodplate-3.png`, `foodplate-4.png`, `foodplate-5.png`

> **Food Plate Photos and Descripton**

> Lunch plate: salad, English muffin, roast beef
> Chits: 1 Protein, 1 Fat, 1 Carbohydrate, Vegetables

> Pancake, blueberries, and butter.
> Chits: 1Carbohydrate, 1Fat, ½ Fruit

> Just salad, some Feta cheese and dressing, cucumbers, lettuce
> Chits: 1 Fat, ½ Milk, Vegetables

> French Toast & Bacon: Chits:1 Fat, ½ Protein,1 Protein (for egg in toast), 1 Carbohydrate

> Sandwich &salad, some

> ⚠️ The final caption is cut off mid-sentence — "Sandwich &salad, some" — and has no chit count.

---

## 4.16 About Us – Recipes — `/about-us-recipes/`
Browser title: `About Us – Recipes – The dr.Anne Network`

> **Recipes**
> Please send us your own to add to this list for all to share.

**PEASANT YEAST BREAD**
```
1/4 cup cornmeal
3/4 cup warm water
2 packets (1/4 oz.) dry active yeast
1 1/4 cups milk mixed with 1 1/2 T. lemon juice
1 T. baking powder
5 cups whole wheat/oat flour
```
> Mix warm water with yeast. Cover and let stand for 10 minutes. Add warmed soured milk and baking powder, and stir. Beat in 2 cups of flour for one minute. Cover bowl and let stand for 15 minutes. Slowly beat in remaining flour. Turn out dough on floured board and knead ten minutes or until smooth and elastic. Roll into round or desired shape and place on baking sheet that has been sprinkled with cornmeal. Bake for 30 minutes in preheated 350 degree oven. Makes 2 loaves.
> 1 palm-size, thumb thick serving= 1 Carbohydrate chit

**MOM HOYT'S SPECIAL SPREAD**
```
1 cup cheddar cheese, shredded
1 can (6 oz.) crab meat
1 T. pickle relish
1/4 green pepper, diced
2-3 rolls (cupped-palm size)
1/4 onion, diced
1 t. prepared mustard
```
> Preheat oven to 375 degrees. Mix crab, cheese, relish, onion, pepper and mustard. Slice rolls in half. Spread rounded 1-1 1/2 T. of mixture on each half roll. Bake in oven for 15 minutes or until cheese starts to melt. (Can be served hot or cold.). Makes 2-3 servings.
> 1 roll serving= 1 Carbohydrate chit, 1 Protein chit

**BRUSSELS SPROUTS SOUFFLE**
```
1/4 cup butter or margarine
1/4 cup whole wheat or oat flour
1 cup milk
4 egg whites
2 cups cooked Brussels sprouts, chopped
4 egg yolks
4 oz. cheddar cheese shredded
```
> Melt butter and blend in the flour. Add milk and cook until mixture thickens, stirring constantly for white sauce. Remove from heat. Beat egg yolks until thick and lemon-colored. Slowly blend the egg yolks into the white sauce and stir rapidly. Add in shredded cheese, finely chopped Brussels sprouts. Beat egg whites until stiff, but not dry; fold into mixture. Pour into an ungreased 2-quart souffle dish. Bake in moderate oven, 350 degrees, for 40 minutes or until knife inserted comes our clean. Makes 4 servings.
> 1 serving or 2 cupped palms= 1 Protein chit, 1 Milk chit

**WHITE SAUCE**
```
1 t. butter or margarine
1/2 cup milk (at least 2% fat)
1 T. enriched white flour
(optional: 1 T. mixed carrots and peas)
```
> Melt butter in saucepan. Remove from heat and mix in four. Slowly add milk over heat and bring to slow boil for about one minute, mixing constantly until thickened. (Add carrots and peas.) Serve immediately. Makes 1 serving.
> 1 serving= 1 Milk chit, 1 Oil chit

> ⚠️ Typos inside recipes: "mix in four" should be "mix in flour"; "comes our clean" should be "comes out clean".

---

## 4.17 About Us – Our Scrapbook — `/about-us-our-scrapbook/`
Browser title: `About Us – Our Scrapbook – The dr.Anne Network`
**Images:** `scrapbook-768x1014.png`, `scrapbook-2-768x948.png`, `scrapbook-3-768x590.png`, `scrapbook-4-768x1006.png`

> **Interviews & Press Clippings**

> ⚠️ That heading is the **entire** text content of the page. Four scanned clipping images with no captions, dates, publication names, or alt text — invisible to search engines and to screen readers.

---

## 4.18 Donate — `/donate/`
Browser title: `Donate – The dr.Anne Network`

> **Payment Window**
> We use PayPal to process some of our orders. Please use the link below. You need not have an account at PayPal to use this link. They will accept other payment methods.
> [Donate] → `https://www.paypal.com/donate/`
> **Sponsorships & Donations**

> ⚠️ "Sponsorships & Donations" is a heading with no content beneath it. ⚠️ This PayPal link has **no** `hosted_button_id`, unlike the .org one — donations made from .net may not be attributed correctly.

---

## 4.19 Learn More – Volunteer — `/learn-more-volunteer/`
Browser title: `Learn More – Volunteer – The dr.Anne Network`

> The drAnne Association acts a facilitator for starting Practice Circles. These Circles are offered in different formats and by instructors with varying backgrounds.

> To start your own Practice Circle — to learn each step– go to Practice Circles on this website. You can become a CircleGuide. (We urge you not to attend any Practice Circle that is not registered with us since they may not have the proper guidelines or updated instructions.) As a new CircleGuide you can start without any experience just by following our guidelines. After you have led a complete series of 9 Point sessions you can become a Point Mentor and help others to lead their Circles.

> In general, new participants may join a Practice Circle at any Point, are required to have the dr.Anne plan book at all meetings, and may use the home study model to complete reading and Practice questions. The Practice Circle provides support and comraderie.

> We depend on the Feedback of participants to evaluate the Practice Circle they attend. This is important to maintain a uniform standard of performance among Circles and it helps insure that the guidelines and instructions that we provide are being followed. The program is highly structured and all CircleGuides are required to read the standard Open and Close statement that we provide and to keep our policy of allocating 45-minutes for each Practice Point session.

> Now, Go to [Practice Circles](/practice-circles/)

> ⚠️ "acts a facilitator" is missing "as". ⚠️ "Feedback" is capitalised as if it were a named form that does not exist anywhere on the site.

---

## 4.20 Learn More – Independent — `/learn-more-independent/`
Browser title: `Learn More – Independent – The dr.Anne Network`

> If you are a health professional and/or have become a Point Mentor you may qualify to offer our drAnne plan Course to your clients. In this way you add an additional service and create an avenue for those wishing one-to-one personal coaching.

> With your certification you, and/or your organization, will be placed for referral. All of our Independent Guides must agree to follow the program formula, adhere to good business practices, observe confidentiality, take full responsibility for the conduct of their Practice Circle, and maintain communication with the Association.

> Course pricing follows our Association rules, and we will enter into a contract. There are several options for how to present the Course and details can be found under the TEAM BUILD heading and Formats.

> We recommend that you become a Point Mentor first. You will become certified after passing a short tutorial, and then proceed with an interview with an Association Board member.

> ⚠️ No link to the Formats page even though it is referenced by name. No "short tutorial" exists on the site.

---

## 4.21 Learn More – Partner — `/learn-more-partner/`
Browser title: `Learn More – Partner – The dr.Anne Network`

> The Association partners with other non profits, clubs, and government agencies for mutual benefit and fund raising activities. This program is offered to financially help support our Association activities and contribute funds to our partners.

> Although different Formats are available, we recommend our three week dr.Anne plan Course, virtual or in person, a 90 minute meeting each week. The Course is fun and flexible and encourages healthy, well-balanced eating. Exercise options and meditation are also covered. These are the three Keys: Apportion, Move and Silence. Each Key has three Points making a total of nine program Points to encourage good health practices

> **Our Model:** With a $99 donation for each participant $27 is allocated for materials, and the remaining $72 is split between the Association and our partnering organization for mutual fund raising. $36 is to benefit our Partner and the remainder $36 supports the Association. This arrangement is a win-win.

> **Sponsors:** A wonderful feature of this program is that after the Course instruction is completed, participants have the option to continue in support groups– Practice Circles. These are generally volunteer led, and arranged after Course completion. In this way the learning is for a lifetime of continued practice. Sponsoring organizations can not only provide free drAnne plan Courses to specific groups, but also directly support our mission to offer free Practice Circles for everyone. Health Maintenance Organizations, Clubs, and Businesses can offer a benefit to their members.

> ✅ **This is the only page on either site that names the three Keys: Apportion, Move and Silence.** That is core brand vocabulary and should be promoted to the home page in the merged site.

---

# 5. Contradictions between the two sites — resolve before rebuilding

| Topic | dranne.org says | dranne.net says | Action |
|---|---|---|---|
| **Course price** | "$199 training course fee (includes $27 book & other materials fee)" (Partner) and "$199 donation / $172 without book" (Guide) | "$99 training course fee (includes $27 book & materials fee)" (Formats) and "$99 donation... $27 materials, $72 split" (Learn More – Partner) — **but** Open Sesame says "$199 / $172" | **Pick one number.** Currently $99 and $199 both appear as the same fee. |
| **Course length** | "a 3 session course that covers all nine Points" | "9 sessions over a 3-week period" (Open Sesame); "three week Course... a 90 minute meeting each week" (Learn More – Partner); "3-Week Turnaround: 3 Point sessions a week" (Formats) | Standardize the description of the default course. |
| **Session length** | not stated | "45 minute session" for Practice Circles; "90 minute meeting each week" for the Partner Course | Clarify: 45 min per Point, 90 min per weekly Course meeting (3 Points). |
| **Study start year** | not stated | "In 1976 Anne Seifert... became Co-Investigator" (Team Build FAQ) vs "origins go back to 1972" (About Us) | Two different years for the same study. |
| **Book 1** | "2025, 8X10 size, 146 pages" | "Varnes, 2025. 144 pages, $27" | Page count differs (146 vs 144). |
| **Book 2** | "2022, 6X9 size, 192 pages, Expanded Edition" | "Varnes, 2023. 190 pages, $27" | Year and page count both differ. |
| **Book 3** | "2020, 8.5X8.5 size, 82 pages, Quickstart" | "Varnes, 2020. 80 pages, $18" | Page count differs (82 vs 80). |
| **Book prices** | no prices shown at all | $27 / $27 / $18 (+$18 digital, $9 app) | .org should carry prices too. |
| **Testimonial wording** | "...you wouldn't believe my perky attitude." A.L. March 16, 1990 Englishtown, NJ | "...you wouldn't believe the perky mental attitude." Englishtown, NJ | Same quote, two versions. Pick one. |
| **Testimonial wording 2** | "Great article on you and your book in the Sun today! I got it in January and have lost 10 pounds!..." A.W. May 26, 2022 Seal Beach, CA | "I got the book in January and have lost 10 pounds! Loaned it to two friends..." Seal Beach, CA | Same quote, two versions. |
| **Board bios** | "Prior research UC Berkeley, Harvard, Columbia Universities"; Robin listed as "Writer/Owner Robinedits.com" | "UC Barkeley, Havard, Columbia" (misspelled); Robin's line ends at "Owner" with no business named | Use the .org version, corrected. |
| **Board roles** | Fred: "Prior President of August European Comptroller, General Steamship Company" | Fred: "Prior Pres of AuguestEuropeanComptroller / General Steamship" | Both are garbled. Needs the real wording from Fred. |
| **Format code list** | n/a | Formats page lists 9 codes; The Registry lists 12 (adds 9M, 5M, 18W) | Single source of truth for the code table. |
| **Nonprofit founding** | not stated | "founded February 18, 2025" | Put the founding date on the merged About page. |
| **Contact email** | ask@dranne.org | team@dranne.net, vip@dranne.net | Decide the address scheme for the merged domain. |

---

# 6. Copy errors, typos and broken text (full list)

### dranne.org
1. **7 instances of Lorem ipsum placeholder text** still live: Home ×1, Partner ×2, Guide ×2, Testimonials ×2.
2. The Testimonials page meta description is auto-generated from page text and therefore **contains Lorem ipsum** — this is what Google would show in search results.
3. "Mangagement services and consulting" → *Management*
4. "Robin Hoik Phillips,I.H.P." → missing space after comma
5. "Integrative Health Praticioner" → *Practitioner*
6. "Fred W. Hoyt, M.B.A," → missing period after M.B.A
7. "Prior President of August European Comptroller, General Steamship Company" → garbled / unclear
8. "Standarized. Sustainable. Scalable." → *Standardized*
9. "We can seemlessly scale" → *seamlessly*
10. "she introduces the a flexible and intuitive plan" → stray "the"
11. "a simple,sustainable lifestyle" → missing space
12. "withing the first month" → *within*
13. "Screens Actor's Guild" → *Screen Actors Guild*
14. "Conduct you Practice Circle" → *your*
15. "Watch a Practice Circle in action!" appears **twice** in a row
16. "company or, health related practice" → stray comma
17. All three book "Buy Now" buttons link to the same URL
18. Emails are plain text, not `mailto:` links
19. All images have empty `alt` attributes
20. No `<h1>` anywhere on the site

### dranne.net
1. "emobying three Keys" → *embodying*
2. "and/r have read" → *and/or*
3. "Clidk on the link" → *Click*
4. "allows for conistancy" → *consistency*
5. "Associaiton" → *Association* (appears on Practice Circles, The Registry, About Us)
6. "in Pracitice Circles" → *Practice*
7. "has successly led" → *successfully*
8. "one-on-one couseling" → *counseling*
9. "If you are an Indepdent health professional" → *Independent*
10. "may be uselful to others" → *useful*
11. "the concerpt of balance" → *concept*
12. "club or organization orcompany" → *or company*
13. "satisfy your appetitie" → *appetite*
14. "Bon Apetit!" → *Bon Appétit!*
15. "Food Plate Photos and Descripton" → *Description*
16. "Private consultaitons" → *consultations*
17. "Handy Chits ounter app" → *Counter*
18. "Institute of Health Reseach" → *Research*
19. "she created a progam" → *program*
20. "UC Barkeley, Havard" → *UC Berkeley, Harvard*
21. "AuguestEuropeanComptroller" → garbled, no spaces
22. "Integrative Health Practicioner" → *Practitioner*
23. "provides support and comraderie" → *camaraderie*
24. "As you breather, picture yourself" → *breathe*
25. "completion of this Point.." → double period
26. "Proceeds from materials amd training Courses" → *and*
27. "The Association acts a facilitator" → *acts as a*
28. "Mix in four" (White Sauce recipe) → *flour*
29. "until knife inserted comes our clean" → *comes out clean*
30. "how one can participate ," → space before comma
31. "Chits: 1Carbohydrate, 1Fat" → missing spaces
32. "Sandwich &salad, some" → sentence cut off mid-way, no chit count
33. "Place,time and date" → missing space
34. "Englishtown, NJ"" → stray closing quotation mark
35. "restricted only a Partner arrangement" → missing "to"
36. Emails are plain text, not `mailto:` links
37. No meta descriptions on any page
38. No `<h1>` anywhere on the site

---

# 7. Functional gaps — things the copy promises that do not exist

| Promise made on the site | Reality |
|---|---|
| "Register your Circle Group by completing the form below" (The Registry) | **No form exists on the page.** |
| "downloadable here from the link" / "Clidk on the link below to download the required statements" | Link goes to a web page, not a file. **No downloadable PDF exists anywhere on either site.** |
| "all the materials and forms that you need... are contained here for viewing and downloading" (Home) | No downloadable materials of any kind. |
| "Locate an established Circle Group from The Registry" | Registry is marked **UNDER CONSTRUCTION** with sample rows only. |
| "go directly to our list of certified Independent providers" | Provider list has 2 entries with **masked phone numbers** (`203-xxx-xxxx`). |
| "Take a look [at Tips]" (Team Build) | No Tips page or link exists. |
| "Our intent is also to make this Site interactive. You may pose questions, reach out to others" | No forum, comments, or contact form anywhere. |
| "You will become certified after passing a short tutorial" | No tutorial or test exists. |
| "We depend on the Feedback of participants" | No feedback form exists. |
| "Make your own [flyers]" | Flyers are flat images, not templates. |
| "MagicSquare learning wheel card" referenced repeatedly | Never shown, explained visually, or made available. |
| "Sponsorships & Donations" (Donate page) | Heading with no content. |
| .net Donate PayPal link | Missing `hosted_button_id` — unattributed donations. |
| "Because this is a new Site, some of the tabs are still under construction." | Admitted on the home page. Should not survive the rebuild. |

---

# 8. SEO & accessibility audit

**SEO**
- **Critical:** 293 spam posts on dranne.org, indexable, actively growing (see §0).
- Zero `<h1>` elements on either site — every page starts at H2 or lower.
- dranne.net has **no meta descriptions at all**; dranne.org auto-generates them from body text, so the Testimonials description begins with Lorem ipsum.
- No structured data (no Organization, NGO, Event, Book, or FAQPage schema) — the FAQ content on Team Build is a natural fit for FAQPage schema.
- Page titles on .org use the pattern `Page - Dr Anne`; on .net `Page – The dr.Anne Network`. Neither is keyword-targeted.
- Nav labels don't match slugs on .org ("Guide" → `/practice-circles/`, "Testimonials" → `/testimonials-donate/`).
- Two domains competing for the same brand terms — merging fixes this, but every retired URL needs a 301.
- No Open Graph or Twitter Card tags → poor link previews when volunteers share pages.
- `/wp-sitemap-posts-post-1.xml` 404s on .org (tampering).
- No canonical strategy between the two domains; the .org home page and the .net home page describe the same organization.

**Accessibility**
- **Every image on both sites has an empty or missing `alt` attribute.** The only exception is the `open-close` image on .net (alt "open-close" — not descriptive) and the 🔴 emoji bullets.
- The Scrapbook page is four images with no text — entirely inaccessible and invisible to search.
- Flyers, food plates, board portraits and press clippings are all image-only content.
- The .org home page video uses native HTML5 controls with no captions or transcript.
- Bulleted lists are built with emoji images (🔴) instead of real list markup.
- No skip-to-content link; the .net nav is duplicated in the DOM so keyboard users tab through it twice.
- Heading levels are used for styling, not structure (60px display text is an H2; 32px is also an H2).
- Emails are plain text, so screen-reader users can't activate them.
- No visible focus styling tested on the custom Elementor buttons.

**Performance / maintenance**
- dranne.org runs **two page builders** (Elementor + Pagelayer) plus two form plugins (FluentForm + Formlayer) with **no visible forms on any page** — dead weight and extra attack surface.
- dranne.net has a caching plugin; dranne.org does not.
- The .org home page loads a self-hosted MP4 with no poster image — the screenshot shows an empty loading spinner on first paint.
- Images are served at native upload size (e.g. `1024x790`, `768x1058`) rather than responsive sets in some cases.

---

# 9. Proposed merged site

### Which domain
Recommend **dranne.org** as the public domain (it is the 501(c)(3) identity and is what the .net home page already points people to) — **but only after the compromise is fully cleaned**, since the domain's search reputation is currently at risk. Redirect dranne.net → dranne.org with per-page 301s. Keep dranne.net registered so member-facing bookmarks don't break.

Alternative: if the .org domain turns out to be penalized, launch on a clean install at dranne.org with a new hosting account, and keep .net as the operational subsection.

### Structure — public layer + member layer

```
HOME                      ← .org home (rewritten, no Lorem ipsum) + .net mission statement
                            + the three Keys (Apportion, Move, Silence)
ABOUT
  ├ Our Story             ← .net About Us "Background History" (reconciled dates)
  ├ Board of Directors    ← .org board table (corrected spellings) + .net portraits
  └ Press & Scrapbook     ← .net Our Scrapbook (add captions + alt text)
THE PLAN
  ├ How It Works          ← .org "Benefits of the drAnne plan" + MagicHand explanation
  │                         (from .net Team Build – HERE)
  ├ The MagicHand & Chits ← from the Open/Close Statements (MFCPOV, 12 palm + 3 thumb)
  ├ Food Plates           ← .net About Us – Food Plates (finish the last caption)
  └ Recipes               ← .net About Us – Recipes
BOOKS & MATERIALS         ← merge .org Materials + .net Open Sesame
  └ Catalogue / Order     ← reconcile page counts, years, prices; one link per book
GET STARTED
  ├ Join a Practice Circle ← .org Guide intro
  ├ Find a Circle (Registry) ← .net The Registry + a REAL registration form
  └ Independent Providers  ← .net Open Sesame – Independent (real contact details)
FOR GUIDES (member area)
  ├ Start a Practice Circle ← .net Practice Circles (full)
  ├ Open & Close Statements ← .net statements page + a downloadable PDF
  ├ Course Formats          ← .net Formats (single reconciled code table)
  ├ Membership Stages       ← .net Practice Circles "Membership Stages"
  ├ Certification           ← .net Team Build "Certifications" + Learn More – Independent
  ├ Flyers & Templates      ← .net Samples (as editable downloads)
  └ Events                  ← .net Team Build – Events
PARTNER / SPONSOR          ← merge .org Partner + .net Learn More – Partner (one price model)
FAQ                        ← .net Team Build FAQ + Team Build – HERE, combined
TESTIMONIALS               ← .org Testimonials + .net Team Build quotes (dedup)
DONATE                     ← one PayPal button with the hosted_button_id, plus sponsor logo wall
CONTACT                    ← real form; route ask@ / team@ / vip@ by enquiry type
```

### Content that exists on only one site (do not lose it)
**Only on .org:** the Board of Directors table with terms, the benefits three-column block, the video trailer, the sponsor/collaborator logo wall, the SAG Health Fair photo and caption, the Enrollment Tiers paragraph (10–49 / 50–249 / 250+ / max 1000 / cap Circles at 30), the "zero HR overhead / NIH backed materials" pitch, the $18-per-Point option, the book cover photography.

**Only on .net:** the full Open and Close Statements script, the T-E-A-M framework, the Three Linking Rings (Ruling-Hand / Right-Hand / Post-Hand), Membership Stages (Apprentice → CircleGuide → Point Mentor), the format code table, the MagicSquare Learning Wheel, the three Keys (Apportion, Move, Silence), the MagicHand origin story, the full Background History, the recipes, the food plates, the flyers, the scrapbook, the Events (Ahoy dr.Anne / Dinner with Donna / Robin's Retreat), the Independent provider list, the LinkedIn and YouTube links, the founding date.

### Redirect map (301)
| Old | New |
|---|---|
| `dranne.net/` | `dranne.org/` |
| `dranne.net/start-point/` | `dranne.org/` |
| `dranne.net/team-build/` | `/for-guides/` |
| `dranne.net/team-build-formats/` | `/for-guides/course-formats/` |
| `dranne.net/team-build-events/` | `/for-guides/events/` |
| `dranne.net/team-build-here/` | `/faq/` |
| `dranne.net/practice-circles/` | `/for-guides/start-a-practice-circle/` |
| `dranne.net/practice-circles-open-and-close/` | `/for-guides/open-and-close/` |
| `dranne.net/practice-circles-open-close-statements/` | `/for-guides/open-and-close/statements/` |
| `dranne.net/practice-circles-the-registry/` | `/get-started/find-a-circle/` |
| `dranne.net/open-sesame/` | `/books-and-materials/` |
| `dranne.net/open-sesame-independent/` | `/get-started/independent-providers/` |
| `dranne.net/about-us/` | `/about/our-story/` |
| `dranne.net/about-us-practice-circles/` | `/about/gallery/` |
| `dranne.net/about-us-samples/` | `/for-guides/flyers-and-templates/` |
| `dranne.net/about-us-food-plates/` | `/the-plan/food-plates/` |
| `dranne.net/about-us-recipes/` | `/the-plan/recipes/` |
| `dranne.net/about-us-our-scrapbook/` | `/about/press/` |
| `dranne.net/donate/` | `/donate/` |
| `dranne.net/learn-more-volunteer/` | `/get-started/volunteer/` |
| `dranne.net/learn-more-independent/` | `/get-started/independent/` |
| `dranne.net/learn-more-partner/` | `/partner/` |
| `dranne.org/materials/` | `/books-and-materials/` |
| `dranne.org/practice-circles/` | `/get-started/` |
| `dranne.org/testimonials-donate/` | `/testimonials/` |
| `dranne.org/partner/` | `/partner/` |
| all `dranne.org` spam post URLs | 410 Gone (not 301) |

---

# 10. Rebuild checklist

**Security (do first)**
- [ ] Clean or rebuild dranne.org from scratch on a fresh install; do not import the old database
- [ ] Rotate every credential; audit the `eduardo` user
- [ ] Serve 410 for all spam URLs; request removal in Google Search Console
- [ ] Remove unused plugins (Pagelayer, FluentForm or Formlayer — keep one form plugin)

**Content**
- [ ] Replace all 7 Lorem ipsum blocks with real copy
- [ ] Fix the ~60 typos listed in §6
- [ ] Resolve every contradiction in §5 — especially the $99 vs $199 course fee
- [ ] Finish the cut-off food-plate caption
- [ ] Write captions, dates and sources for all Scrapbook clippings
- [ ] Add the missing Robin Phillips business name and Fred Hoyt role wording
- [ ] Reconcile the 1972 vs 1976 study date

**Functionality**
- [ ] Build a real Practice Circle registration form (the Registry)
- [ ] Publish the Open/Close Statements as a downloadable PDF
- [ ] Publish flyer templates as editable downloads
- [ ] Build the Independent provider directory with real contact details
- [ ] Add a general contact form routing to ask@ / team@ / vip@
- [ ] Add the `hosted_button_id` to every PayPal link
- [ ] Show the MagicSquare Learning Wheel card and explain it
- [ ] Build the Tips section or remove the reference

**SEO & accessibility**
- [ ] One `<h1>` per page
- [ ] Unique meta title + description per page
- [ ] Descriptive alt text on every image
- [ ] Organization/NGO, FAQPage and Book schema
- [ ] Open Graph + Twitter Card tags
- [ ] Captions or transcript for the video
- [ ] Real `<ul>` markup instead of emoji bullet images
- [ ] `mailto:` links on all email addresses
- [ ] 301 redirect map implemented (§9)
- [ ] Single sitemap submitted to Search Console

**Design**
- [ ] One type system (recommend keeping Lobster as the display face with Roboto for body — retire Arial)
- [ ] One red: pick between `#F00606`, `#FA0003` and the .org banner red
- [ ] Consistent button styling (the .net white-on-white "Learn More" buttons are very low contrast)
- [ ] Mobile check at 375px — the .org header switches to a hamburger below ~760px
