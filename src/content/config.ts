// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// 2. Define a schema for each collection you'd like to validate.
const blog = defineCollection({
  schema: z.object({
    title: z
      .string()
      .max(60, "For optimal SEO, please provide a title of 60 char or less."),
    description: z
      .string()
      .max(160, "For optimal SEO, please provide a title of 60 char or less."),
    date: z.date(),
    draft: z.boolean(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    author: z.enum(["Chris Bonifacio", "Mary Ann Mairena"]),
  }),
});

const authors = defineCollection({
  schema: z.object({
    name: z
      .string()
      .max(60, "For optimal SEO, please provide a title of 60 char or less."),
    role: z.string(),
    active: z.boolean(),
    image: z.string().optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  blog,
  authors,
};
