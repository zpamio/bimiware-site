import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Guides are markdown files in src/content/guides/. Each one targets a
// real question buyers ask an AI. Add a new .md file and it appears in the
// guides index, gets Article schema, and lands in the sitemap automatically.
const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { guides };
