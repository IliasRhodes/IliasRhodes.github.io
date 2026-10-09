// scripts/with-preview.mjs — runs `astro preview` and hands a browser to fn.
import { spawn } from 'node:child_process';
import { chromium } from '@playwright/test';

export async function withPreview(fn, port = 4329) {
  const server = spawn('npx', ['astro', 'preview', '--port', String(port), '--ignore-lock'], { stdio: 'ignore' });
  const base = `http://localhost:${port}`;
  try {
    for (let i = 0; i < 75; i++) {
      try { if ((await fetch(base + '/')).ok) break; } catch {}
      await new Promise((r) => setTimeout(r, 200));
    }
    const browser = await chromium.launch();
    try { await fn(browser, base); } finally { await browser.close(); }
  } finally {
    server.kill();
  }
}
