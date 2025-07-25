// @ts-check
import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://nadnerb.dev',

  vite: {
    server: {
        allowedHosts: [ 'nadnerb.dev.test' ]
    },

    build: {
        emptyOutDir: true
    },

    plugins: [tailwindcss()]
  },

  integrations: [alpinejs({ entrypoint: '/src/entrypoint' })]
});