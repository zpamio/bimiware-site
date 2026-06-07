import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

// Set `site` to your production domain. It feeds canonical URLs,
// the sitemap, and the absolute URLs used in JSON-LD schema.
export default defineConfig({
  site: 'https://bimiware.com',
  integrations: [sitemap()],

  // Inline the CSS into each page so it is not a separate render-blocking
  // request. The stylesheet is small, so this trades a little repeated
  // markup for a faster first paint.
  build: { inlineStylesheets: 'always' },

  adapter: cloudflare()
});