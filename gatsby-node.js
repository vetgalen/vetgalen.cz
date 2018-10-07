import { resolve as _resolve } from 'path'

export function onCreateWebpackConfig({ actions }) {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: _resolve(__dirname, 'src/components'),
        scss: _resolve(__dirname, 'src/scss'),
      },
    },
  })
}
