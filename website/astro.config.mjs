import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ysskrishna.github.io',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
