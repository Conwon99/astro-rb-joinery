import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://rbjoinery.com',
  trailingSlash: 'always',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      filter: (page) => !page.endsWith("/thank-you/") && !page.endsWith("/404/"),
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

