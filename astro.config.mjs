import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Set `site` to your production domain. It feeds canonical URLs,
// the sitemap, and the absolute URLs used in JSON-LD schema.
export default defineConfig({
  site: 'https://bimiware.com',
  integrations: [sitemap()],
});
