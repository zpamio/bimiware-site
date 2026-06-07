<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the Bimiware Astro static site. PostHog was already installed (`posthog-js`) and partially initialized with a consent-first cookie banner (`Analytics.astro`). This run extended that existing setup by:

- Updating `.env` with the correct US-region host (`https://us.i.posthog.com`) and project token.
- Adding four new targeted `is:inline` event capture scripts covering the content funnel entry point, the guide-to-project conversion path, the email contact fallback, and the site-wide header CTA.

No existing code was removed or restructured.

| Event | Description | File |
|---|---|---|
| `guide_viewed` | Fired when a user opens a guide article page; top of the content marketing funnel. Properties: `guide_id`, `guide_title` | `src/pages/guides/[...slug].astro` |
| `guide_start_project_clicked` | Fired when a user clicks the Start a project CTA at the bottom of a guide. Properties: `guide_id`, `guide_title` | `src/pages/guides/[...slug].astro` |
| `contact_email_clicked` | Fired when a user clicks the email contact link on the Start a project page. Properties: `location` | `src/pages/start.astro` |
| `fix_svg_header_clicked` | Fired when a user clicks the Fix my SVG button in the site header. Properties: `location` | `src/components/Header.astro` |
| `service_cta_clicked` | User clicks a primary CTA linking to a service page from the homepage | `src/pages/index.astro` |
| `start_project_clicked` | User clicks "Start a project" anywhere on the site | `src/pages/index.astro`, `src/pages/services/[slug].astro` |
| `service_page_viewed` | User views a service detail page. Properties: `service_slug`, `service_name`, `service_tier`, `service_price` | `src/pages/services/[slug].astro` |
| `service_purchase_clicked` | User clicks the Stripe payment button. Properties: `service_slug`, `service_name`, `service_price`, `service_recurring` | `src/pages/services/[slug].astro` |
| `svg_validated` | User runs the SVG Tiny PS validator. Properties: `passed`, `error_count`, `warning_count` | `src/pages/tools/index.astro` |
| `dns_checked` | User runs the BIMI & DMARC DNS record checker. Properties: `passed`, `has_bimi_record`, `dmarc_enforced`, `has_spf` | `src/pages/tools/index.astro` |
| `guide_clicked` | User clicks a guide card from the guides listing. Properties: `guide_id`, `guide_title` | `src/pages/guides/index.astro` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics (wizard) — Dashboard](https://us.posthog.com/project/458036/dashboard/1679879)
- [Service purchase funnel](https://us.posthog.com/project/458036/insights/FvNNVmwp) — service page view → Stripe buy click
- [Free tool usage](https://us.posthog.com/project/458036/insights/TqbD1pYy) — SVG validator and DNS checker usage over time
- [CTA engagement](https://us.posthog.com/project/458036/insights/fNY9tTOh) — service card, Start project, and header Fix my SVG clicks
- [Content-to-project funnel](https://us.posthog.com/project/458036/insights/O57P4CAg) — guide article view → Start a project click
- [Service page views by service](https://us.posthog.com/project/458036/insights/qQmBADVT) — which services attract the most interest

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
