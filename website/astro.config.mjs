import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ysskrishna.github.io',
   base: '/google-sheets-tab-manager/',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
