// astro.config.mjs
import { defineConfig } from 'astro/config';
import { SITE } from './site.config.mjs';

export default defineConfig({ site: SITE.url, trailingSlash: 'ignore' });
