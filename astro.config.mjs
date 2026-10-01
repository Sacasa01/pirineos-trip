import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://Sacasa01.github.io',
  base: '/pirineos-trip',
  integrations: [tailwind()]
});
