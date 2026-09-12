# Security runbook — dranne.org active compromise

**This is a document to act on immediately, in parallel with the rebuild — not a description of work already done.** The rebuild does not fix the live compromised WordPress install; only the client (with hosting/DNS access) can perform steps 1–6.

## What's happening right now

- 293 published spam posts on `dranne.org`, live, HTTP 200, indexable (no `noindex`).
- Still being injected as of the audit date: latest posts 2026-09-12 09:52, 2026-09-11 21:52, 2026-09-11 09:52 — an automated injector is running.
- Content is pirated-software/cracked-app/pirated-movie SEO spam ("crack", "keygen", "activated", "CAMRip", "HDRip").
- 21 attacker-created categories (Atmos, Builders, Crackers, Extras, Generators, Hacksers, HD, Loaders, Nodes, Offloaders, Pirates, Plugins, PowerPoint, RePacks, Retail2Volume, Russifiers, Subs, Tools, Trainers, Uncategorized, Wipers).
- All spam posts attributed to WordPress user `eduardo` (user ID 1) — compromised or attacker-created admin account.
- `/wp-sitemap-posts-post-1.xml` returns 404 — the default sitemap is being suppressed, another tampering signal.
- `dranne.net` shows no sign of the same compromise (2 posts only).

## Stakes

Donation trust, `@dranne.org` email deliverability, and search visibility are all at risk **today**, independent of when the new site launches. Google can and does flag domains for hacked content / pure spam, which is materially worse for a 501(c)(3) than ordinary downtime.

## Immediate actions (client/hosting access required — not tasks this codebase can perform)

1. Take `dranne.org` offline or into maintenance mode.
2. Rotate: all WordPress admin passwords, InterServer control panel password, FTP/SFTP credentials, database credentials, and any API keys present in `wp-config.php`.
3. Audit the `eduardo` user and every other WordPress account; remove unknown/unauthorized accounts.
4. **Do not migrate the WordPress database into the new site.** Every content asset used in this rebuild comes from `dranne-audit.md`, captured verbatim before this compromise. Nothing from the WordPress database enters this repository.
5. Inspect for injected files: `wp-content/plugins`, `wp-content/uploads`, `mu-plugins`, `wp-config.php`. Check for rogue cron entries in `wp_options` → `cron`.
6. Once clean: serve **410 Gone** (not 301) for every spam URL — see `content/redirects.ts` and the 410 handling in the migration workstream — request removal in Google Search Console, and file a reconsideration request.

## Post-launch monitoring

- Google Search Console coverage alerts (watch for a resurgence of indexed spam URLs).
- Uptime and file-integrity checks on whatever replaces the WordPress hosting.
- Dependency scanning on this Next.js codebase (`npm audit`, Dependabot or equivalent) as part of ongoing maintenance.

## What this rebuild does address

- A clean-room codebase with zero WordPress content, database, or plugin surface.
- The 410 response map for known spam URL patterns once DNS points at the new site.
- Cloudflare Turnstile, rate limiting and server-side validation on every form, so the new site doesn't reproduce the "two page builders, two form plugins, zero working forms, large attack surface" profile of the old install.
