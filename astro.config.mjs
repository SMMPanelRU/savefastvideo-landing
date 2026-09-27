// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://save.smoservice.media',
  // Astro 7 по умолчанию сжимает пробелы между тегами — сохраняем вёрстку как в 6.x
  compressHTML: false,
  vite: { plugins: [tailwindcss()] },
  integrations: [sitemap()],
});
