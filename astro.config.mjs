// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://cn-rodriguez.github.io',
  base: '/portfolio_cr_cs',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()]
  }
});