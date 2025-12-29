import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://agropro-feed.com',
  integrations: [icon(), sitemap()],
  vite: {
    build: {
      rollupOptions: {
        onwarn(warning, warn) {
          if (warning.code === 'UNUSED_EXTERNAL_IMPORT' && warning.exporter === '@astrojs/internal-helpers/remote') {
            return;
          }
          warn(warning);
        }
      }
    }
  }
});
