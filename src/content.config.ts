import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: ({ image }) =>
    z.object({
      image: image(),
    }),
})

export const collections = { news }
