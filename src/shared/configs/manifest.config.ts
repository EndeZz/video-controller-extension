import { ManifestV3Export, defineManifest } from '@crxjs/vite-plugin'
import pkg from '../../../package.json'

const { version } = pkg

const name = '__MSG_name__'
const description = '__MSG_description__'

export const manifest: ManifestV3Export = defineManifest(async (env) => ({
  manifest_version: 3,
  name: env.mode === 'development' ? `[DEV] ${name}` : name,
  description,
  version,
  default_locale: 'en',
  icons: {
    '16': 'public/icon16x16.png',
    '32': 'public/icon48x48.png',
    '48': 'public/icon48x48.png',
    '128': 'public/icon128x128.png',
  },
  action: {
    default_popup: 'src/modules/popup/popup.html',
  },
}))
