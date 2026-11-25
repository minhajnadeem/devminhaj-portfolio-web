# SEO operations

What is automated in the repo, and what needs a person. Last updated: 2026-11-25.

## Automated

| Check | How |
| --- | --- |
| Titles, descriptions, canonicals, one `h1`, heading order, OG tags, JSON-LD validity, image `alt`, broken internal links, sitemap vs. built pages, `robots.txt` | `npm run seo:audit` (builds, then audits `dist/`). Exit code 1 on errors. |
| Per-project share images | `node --experimental-strip-types scripts/generate-og-images.mjs` after changing project data or contact details |
| Site-wide share image + WebP conversion | `node --experimental-strip-types scripts/optimize-images.mjs` |

Run `npm run seo:audit` before every deploy. It does not check live-site behaviour (redirects, headers, speed).

## Analytics (item 34)

Privacy-friendly analytics is built in but **off until configured**. It uses Plausible.

1. Create the site in Plausible (cloud, or self-hosted) with domain `devminhaj.me`.
2. Set at build time on the host:
   - `PUBLIC_PLAUSIBLE_DOMAIN=devminhaj.me`
   - `PUBLIC_PLAUSIBLE_SRC=<url>` only if self-hosting.
3. Contact clicks (email, WhatsApp, Upwork) are sent as a `Contact intent` custom event with `method`, `page`, and `project`/`service` props. In Plausible, add `Contact intent` as a goal.
4. A click is intent, not a sent enquiry; keep counting real conversations separately (see `LEAD_GENERATION.md`).

If you prefer GA4 or Umami, the `contact_intent` events are already pushed to `window.dataLayer`.

## One-time setup (needs your accounts)

- [ ] Google Search Console: verify `www.devminhaj.me`, submit `https://www.devminhaj.me/sitemap.xml`.
- [ ] Bing Webmaster Tools: import from Search Console, submit the sitemap.
- [ ] Host: 301 `devminhaj.me` → `https://www.devminhaj.me`, force HTTPS.
- [ ] Confirm `public/_headers` is honoured (Netlify / Cloudflare Pages) or port it to the host's format.
- [ ] Set the analytics env vars above.

## Off-site (items 32–33)

**Google Business Profile (item 32).** Only worth it if you want to rank for local searches or serve clients in a specific region. A profile needs a real address or a defined service area and must pass Google's verification. If you're fully remote and worldwide, skip it.

**Backlinks (item 33).** Link back to `https://www.devminhaj.me` from profiles you already control. Use the same name, headline and URL everywhere:

- [ ] LinkedIn: website field and Featured section
- [ ] GitHub: profile README and website field
- [ ] Upwork, Medium, YouTube channel About, Instagram bio, Stack Overflow profile
- [ ] Play Store developer pages and app listings for apps you built (Twidlee, Hifz Diary, Badminton Famly+, and others), where you control the "developer website" field
- [ ] Case-study posts: share each case study with a UTM link (see `LEAD_GENERATION.md`)
- [ ] Developer directories and communities that accept a profile link (e.g. Clutch, Product Hunt maker profile, Indie Hackers), only where the listing is genuine

The social profiles already carry `rel="me"` links on the site. For the identity link to count, each profile should link back to the site.

## Quarterly re-audit (item 35)

Next due: 2027-02-25.

1. `npm run seo:audit` passes with 0 errors.
2. Search Console: coverage/indexing errors, queries, CTR, pages with falling impressions.
3. PageSpeed Insights on `/`, `/services`, and one case study: record LCP, CLS, INP. Targets: LCP < 2.5 s, CLS < 0.1, INP < 200 ms.
4. Rich Results Test on `/services` (FAQ, ProfessionalService) and a case study; fix warnings.
5. Check share previews for the home page and one case study (LinkedIn Post Inspector).
6. Crawl the live site (e.g. Screaming Frog free tier) for 4xx/5xx and redirect chains.
7. Refresh: add new projects to `src/data/portfolio.ts` (sitemap and share images follow) and rerun the image script.
8. Update the "Last updated" and "Next due" dates above.
