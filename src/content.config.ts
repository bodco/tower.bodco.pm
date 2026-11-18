import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    // 2026-11-18 (Pacenote Pricing): the page's h1 when it differs from the title (the <title> and breadcrumb keep title).
    h1: z.string().optional(),
    lead: z.string(),
    description: z.string().optional(),
    facts: z.array(z.object({ k: z.string(), v: z.coerce.string() })).default([]),
    doc: z.string().optional(),
    parent: z.string().optional(),
  }),
});

export const collections = { pages };
