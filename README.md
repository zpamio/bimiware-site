# Bimiware site

Static Astro site for bimiware.com. Built for two jobs at once: cheap, near-zero-maintenance hosting, and clean machine-readability so AI answer engines can parse, trust, and recommend the service.

## What is already here

- Dark, technical theme. Tokens live in `src/styles/global.css`.
- JSON-LD baked in: `Organization` and `WebSite` site-wide, plus `Service` + `Offer`, `FAQPage`, and `BreadcrumbList` on every service page, and `ItemList` + `FAQPage` on the homepage.
- The full service ladder, generated from one data file.
- Stripe button placeholders that render disabled until you paste real links.
- GEO assets: `public/robots.txt` (welcomes AI crawlers), `public/llms.txt` (structured summary for LLMs), and an auto-generated sitemap.

## Edit these first

1. `src/data/site.ts` — brand, founder name (add your full name for the author/E-E-A-T signal), email, profile links. Search for `TODO`.
2. `src/data/services.ts` — prices and copy. Paste a Stripe Payment Link into each `stripeUrl`. Until you do, the buy buttons stay disabled on purpose.
3. `src/pages/start.astro` — paste your Formaloo form URL into `FORMALOO_EMBED_URL`.
4. `public/logo.svg` and `public/favicon.svg` — swap in your real logo. (Worth dogfooding: get Bimiware's own BIMI logo live in the inbox.)
5. `astro.config.mjs` — confirm `site` is your production domain.

Prices in `services.ts` are starting placeholders. Confirm them before launch.

## Run locally

```
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to ./dist
npm run preview  # serve the built site
```

## Deploy

### Cloudflare Pages (recommended if you already use Cloudflare)

1. Push this repo to GitHub.
2. In Cloudflare Pages, create a project connected to the repo.
3. Build command: `npm run build`. Build output directory: `dist`.
4. Add `bimiware.com` as a custom domain.

### GitHub Pages (if you prefer to stay in GitHub)

`.github/workflows/deploy.yml` is ready. In repo Settings > Pages, set Source to "GitHub Actions". Push to `main`. If serving from a subpath rather than a custom domain, set `base` in `astro.config.mjs`.

## Adding a guide later

The site is set up for citation-first content. Add a `src/pages/guides/` directory (or a content collection), write in markdown, and the sitemap picks it up automatically. Each guide should answer one real question buyers ask an AI, with sources and specifics.
# bimiware-site
