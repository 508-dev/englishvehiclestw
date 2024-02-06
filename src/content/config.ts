import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const serviceCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    layout: z.string(),
    title: z.string(),
    description: z.string(),
    price: z.string().optional(),

  }),
});

const aboutCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    layout: z.string(),
    title: z.string(),
    description: z.string(),
    facebook: z.string().optional(),
  }),
});


// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'service': serviceCollection,
  'about': aboutCollection,
};
