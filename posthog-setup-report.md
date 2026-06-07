<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the Bimiware Astro static site. PostHog was already installed (`posthog-js`) and partially initialized with a consent-first cookie banner (`Analytics.astro`). The integration extended that existing setup by:

- Exposing the PostHog instance as `window.posthog` after consent-gated initialization so that inline page scripts can call `posthog.capture()` without bundling PostHog again.
- Setting the correct environment variables (`PUBLIC_POSTHOG_KEY`, `PUBLIC_POSTHOG_HOST`) in `.env`.
- Adding targeted `is:inline` event capture scripts across five pages/components, covering the full service purchase funnel, free tool usage, and content engagement.

No existing code was removed or restructured.

| Event | Description | File |
|---|---|---|
| `service_cta_clicked` | User clicks a primary CTA linking to a service page from the homepage hero or CTA section | `src/pages/index.astro` |
| `start_project_clicked` | User clicks "Start a project" anywhere on the site | `src/pages/index.astro`, `src/pages/services/[slug].astro` |
| `service_page_viewed` | User views a service detail page — top of the purchase funnel. Properties: `service_slug`, `service_name`, `service_tier`, `service_price` | `src/pages/services/[slug].astro` |
| `service_purchase_clicked` | User clicks the Stripe payment button on a service page. Properties: `service_slug`, `service_name`, `service_price`, `service_recurring` | `src/pages/services/[slug].astro` |
| `svg_validated` | User runs the SVG Tiny PS validator tool. Properties: `passed`, `error_count`, `warning_count` | `src/pages/tools/index.astro` |
| `dns_checked` | User runs the BIMI & DMARC DNS record checker. Properties: `passed`, `has_bimi_record`, `dmarc_enforced`, `has_spf` | `src/pages/tools/index.astro` |
| `guide_clicked` | User clicks a guide card from the guides listing page. Properties: `guide_id`, `guide_title` | `src/pages/guides/index.astro` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics (wizard) — Dashboard](https://us.posthog.com/project/458036/dashboard/1679827)
- [Purchase conversion funnel](https://us.posthog.com/project/458036/insights/51Fb7od3) — service page view → Stripe buy click
- [Service CTA clicks over time](https://us.posthog.com/project/458036/insights/eh2JO92O) — homepage CTA and "Start a project" trends
- [Free tool usage trend](https://us.posthog.com/project/458036/insights/q2kk6D8r) — SVG validator and DNS checker usage over time
- [SVG validation pass rate](https://us.posthog.com/project/458036/insights/sTe7zEe2) — percentage of SVGs that pass on first try
- [Service page views by service](https://us.posthog.com/project/458036/insights/DJd5gPQa) — which services attract the most interest

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
