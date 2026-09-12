# Client decisions — §13 contradictions, resolved

Every row below is a binding rule applied to a genuine conflict between
`dranne.org` and `dranne.net` (or within one site). Values are marked
`provisional: true` in `content/` and rendered normally in production —
they are attested content with a documented rule applied, not invention.
Flag the ones marked **#1** and **#20/21** for the Board explicitly; the
rest can go out as-is.

| # | Conflict | Sources | Rule applied |
|---|---|---|---|
| 1 | Course price: $199 vs $99 | `.org` Partner + Guide (audit §3.3, §3.4); `.net` Formats + Learn More–Partner (audit §4.3, §4.21) show $99; `.net` Open Sesame (audit §4.10) shows $199/$172 | **Use $199 / $172.** `.org`'s figure is the public 501(c)(3) statement and appears on three source pages vs. two for $99. `COURSE_FEE=199`, `COURSE_FEE_WITH_MATERIALS=172`, `MATERIALS_COMPONENT=27` in `content/pricing.ts`; every dollar figure site-wide derives from these three constants, including the Partner revenue split. **Flagged as the #1 open decision for the Board — confirm before launch.** |
| 2 | Discounted price | same as #1 | $172, tied to #1. |
| 3 | Course length | `.org` "3 session course"; `.net` "9 sessions over 3 weeks" / "3-week Course, 90 min/week" / Formats "3W" | Canonical: nine Points delivered over three weeks (the 3W format). Other formats presented as alternatives from `content/formats.ts`, never as default. |
| 4 | Session length | `.net` "45 minute session" (Practice Circles) vs "90 minute meeting" (Partner Course) | Not actually contradictory once scoped: 45 min/Point session, 90 min/weekly Partner Course meeting (3 Points). Each stated in its own context. |
| 5 | Study year 1972 vs 1976 | `.net` About Us "origins go back to 1972" (audit §4.12) vs Team Build FAQ "In 1976... became Co-Investigator" (audit §4.2) | **Use 1972** — the narrative Background History. 1976 likely conflates the Nurses' Health Study start year. `content/faq.ts` `studyStartYear`. |
| 6 | Book 1 pages 146 vs 144 | `.org` Materials (audit §3.2) says 146; `.net` Open Sesame catalogue (audit §4.10) says 144, with price/year/publisher | **Use catalogue figures throughout: 144 pages.** Trim size (8×10) taken from `.org` Materials, which the catalogue lacks. |
| 7 | Book 2 year/pages | `.org`: 2022, 192pp; `.net` catalogue: 2023, 190pp | **2023, 190 pages** (catalogue); trim 6×9 from `.org`. |
| 8 | Book 3 pages 82 vs 80 | `.org`: 82pp; `.net` catalogue: 80pp | **80 pages** (catalogue); trim 8.5×8.5 from `.org`. |
| 9 | Book prices | `.org` shows none; `.net` catalogue: $27/$27/$18 (+$18 digital, $9 app) | Publish catalogue prices on the merged site. |
| 10 | Testimonial A.L. wording | `.org` Materials (audit §3.2), dated, attributed; `.net` Team Build (audit §4.2), undated, shorter | **Use `.org` version** — carries initials and date. Deduplicated in `content/testimonials.ts`. |
| 11 | Testimonial A.W. wording | same pattern as #10 | **Use `.org` version** with attribution and date. |
| 12 | Fred Hoyt's credential line | `.org`: "Prior President of August European Comptroller, General Steamship Company"; `.net`: "AuguestEuropeanComptroller" (no spaces) | **Both garbled — omit the credential line entirely.** Render name, post-nominal and role only (`content/board.ts`). Real wording needed from the client. |
| 13 | Robin Phillips' business | `.org`: "Integrative Health Practitioner; Writer/Owner, Robinedits.com"; `.net`: ends at "Owner", no business named | **Use `.org` wording.** |
| 14 | Format codes 9 vs 12 | `.net` Formats (audit §4.3) lists 9; `.net` The Registry (audit §4.9) lists 12 (adds 9M, 5M, 18W) | **Publish all twelve** in one table (`content/formats.ts`) — longer schedules are supersets, not contradictions. |
| 15 | Email scheme | `.org`: `ask@dranne.org`; `.net`: `team@dranne.net`, `vip@dranne.net` | Display all three at `@dranne.org`; `.net` addresses forwarded. Mapping lives in `docs/DEPLOY.md`. |
| 16 | ISBN `978-943584-00-3` | audit §2 | 12 digits — missing the registration-group `0`. **`978-0-943584-00-3`** validates: weighted sum 9+21+8+0+9+12+3+15+8+12+0+0=97, check digit (10 − 97 mod 10) mod 10 = 3, matching the source's trailing digit. |
| 17 | Publisher "Varnes" | `.net` catalogue (audit §4.10) | Used as stated — unusual but attested, not a typo we can safely "correct." |
| 18 | Provider phone numbers masked | `.net` Open Sesame – Independent (audit §4.11): `203-xxx-xxxx`, `909-xxx-xxxx`, inconsistent area code (CT) vs. ZIP (CA) | **Omit phone numbers entirely.** Route provider contact through the form to `vip@dranne.org`. Keep names, credentials, specialties, timezone. |
| 19 | Sponsor logos | audit §3.5 (15 logos, already public on live site) | Reproduce the wall with real alt text, greyscale treatment, lazy loading, behind `sponsorsEnabled` flag (on). **Note:** a permissions/usage-rights review with each sponsor is recommended before the redesigned wall goes live — not performed as part of this build. |
| 20 | Certification tutorial | referenced repeatedly, never built (audit §7) | **Built** — see `/for-guides/certification`, self-scoring, non-gating knowledge check drawn entirely from source content. |
| 21 | EIN | not present anywhere in source material | **No source — omitted.** `content/org.ts` `ein` field is `undefined`; the EIN line renders only when populated. Never invented. |

## Other binding defaults applied (build prompt §15, Assumptions Register)

See `docs/ASSUMPTIONS.md` for the full register (domain, DNS ownership,
missing assets, Registry moderation, CMS choice, `/for-guides` gating,
dark mode, locale, launch strategy, legal review status).
