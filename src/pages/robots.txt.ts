// src/pages/robots.txt.ts
import type { APIRoute } from 'astro';
import { SITE } from '../../site.config.mjs';

export const GET: APIRoute = () =>
  new Response(SITE.indexable ? 'User-agent: *\nAllow: /\n' : 'User-agent: *\nDisallow: /\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
