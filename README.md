# devminhaj-portfolio-web
My portfolio website

## Portfolio (Google Play)
- [Maxximus](https://play.google.com/store/apps/details?id=uk.maxximus.app)
- [Badminton Famly+](https://play.google.com/store/apps/details?id=famly.plus)
- [Final Touch](https://play.google.com/store/apps/details?id=io.devcrew.finaltouch)
- [Twidlee](https://play.google.com/store/apps/details?id=com.twidlee.android)
- [Hifz Online Diary](https://play.google.com/store/apps/details?id=com.diaryforhifz.hifz)
- [Speedfame](https://play.google.com/store/apps/details?id=com.speedfame.fr)
- [Pioneer Labs](https://play.google.com/store/apps/details?id=com.pioneercdx.labs)
- [TerraGrow](https://play.google.com/store/apps/details?id=com.terragrow.farmersapp)
- [Beat Bully Trivia](https://www.emblemtechnologies.com/portfolio/bbt) (web)

## Let's Connect
- **YouTube:** [youtube.com/@devminhaj_me](https://www.youtube.com/@devminhaj_me)
- **Instagram:** [instagram.com/devminhaj](https://www.instagram.com/devminhaj/)

## Development

```sh
npm ci
npm run dev
npm run build
npm run preview
```

## Revamped site

The Astro site is statically generated. Pages share `src/layouts/SiteLayout.astro`
and `src/styles/global.css`. The main routes are Home, Services, Work (`/portfolio`),
About, and Discuss a Project (`/contact`). Existing project URLs are preserved.

Project content lives in `src/data/portfolio.ts`; skills and social links live in
`src/data/skills.ts` and `src/data/social.ts`.

SDrive has a dedicated route at `/portfolio/sdrive`. Its illustrations are labeled
placeholders in `src/components/SDriveVisual.astro`. Replace them with approved
screenshots when available; add confirmed public links and stack details to the
case study. The dynamic project route renders standard projects only; `caseStudyKind: "featured"` selects dedicated editorial pages such as SDrive. Standard stories live in `src/data/caseStudies.ts`.

The Contact page offers direct email, WhatsApp, and Upwork links. It has no
submission form and does not store enquiries.

## Lead-focused experience

The site uses the production URL `https://www.devminhaj.me/` for canonical and
sharing metadata, a generated sitemap, and robots.txt. Contact links prepare a
message and preserve known case-study or service context without a form.
The response promise is maintained in `src/data/contact.ts`.

No analytics provider is configured. In-memory contact-intent hooks are ready
for a future provider; they do not send requests or persist click data.
See `LEAD_GENERATION.md` for acquisition experiments, enquiry handling,
measurement, and remaining evidence to collect.
