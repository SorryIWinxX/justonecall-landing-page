// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com', // Replace with your site URL
  integrations: [
    tailwind(),
    sitemap(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true
    }
  },
  server: {
    host: true, // Permite conexiones desde cualquier IP
    port: 4321
  },
  vite: {
    server: {
      allowedHosts: [
        'cgn6vh-ip-190-13-4-234.tunnelmole.net',
        '.tunnelmole.net', // Permite cualquier subdominio de tunnelmole.net
        'localhost',
        '127.0.0.1'
      ]
    }
  }
});