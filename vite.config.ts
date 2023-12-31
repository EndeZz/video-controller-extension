import { crx } from '@crxjs/vite-plugin'
import { defineConfig } from 'vite'
import { manifest } from './src/shared/configs/manifest.config'

export default defineConfig({
  plugins: [crx({ manifest })],
  // https://github.com/crxjs/chrome-extension-tools/issues/696#issuecomment-1526138970
  server: {
    port: 5173,
    strictPort: true,
    hmr: {
      port: 5173,
    },
  },
})
