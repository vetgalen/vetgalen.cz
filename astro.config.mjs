import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  site: 'https://www.vetgalen.cz',
  integrations: [react(), sitemap()],
  vite: {
    build: {
      // maplibre-gl is ~770 kB and intentionally kept as its own lazy chunk
      chunkSizeWarningLimit: 1000,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "${__dirname}/src/scss/_variables";`,
          silenceDeprecations: [
            'import',
            'global-builtin',
            'color-functions',
            'if-function',
          ],
        },
      },
    },
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        scss: path.resolve(__dirname, 'src/scss'),
      },
    },
  },
})
