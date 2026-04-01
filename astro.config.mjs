import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://rbjoinery.com',
  /** Match Netlify pretty URLs + canonical trailing-slash URLs site-wide */
  trailingSlash: 'always',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: 'static',
  server: {
    port: 8080,
    host: true,
  },
  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
});

