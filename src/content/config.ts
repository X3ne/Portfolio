import { defineCollection, z } from "astro:content"

export const collections = {
  projects: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.coerce.date(),
      tags: z.array(z.string()),
      github_url: z.string().optional(),
      website_url: z.string().optional(),
      icon: z.string().optional(),
      color: z.string().optional(),
    }),
  }),
}
