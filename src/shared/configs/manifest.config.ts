import { ManifestV3Export, defineManifest } from '@crxjs/vite-plugin'
import pkg from '../../../package.json'
import { getTranslationContent } from '../lib/utils'

const { version } = pkg

const content = getTranslationContent()

export const manifest: ManifestV3Export = defineManifest(async (env) => ({
  manifest_version: 3,
  name: env.mode === 'development' ? `[DEV] ${content.name}` : content.name,
  description: content.description,
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
  content_scripts: [
    {
      matches: ['<all_urls>'],
      js: ['src/modules/content-script/content-script.ts'],
      run_at: 'document_idle',
      all_frames: false,
    },
  ],
  host_permissions: ['<all_urls>'],
  web_accessible_resources: [
    {
      matches: ['<all_urls>'],
      resources: ['src/modules/content-script/content-script.css'],
    },
  ],
}))
