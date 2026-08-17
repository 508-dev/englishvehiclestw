import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const serviceCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/service' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    price: z.string().optional(),
  }),
});

const aboutCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/about' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    facebook: z.string().optional(),
  }),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  service: serviceCollection,
  about: aboutCollection,
};
