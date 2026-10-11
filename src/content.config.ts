import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    lead: z.string(),
    description: z.string().optional(),
    facts: z.array(z.object({ k: z.string(), v: z.coerce.string() })).default([]),
    doc: z.string().optional(),
  }),
});

export const collections = { pages };
