// scripts/screenshots.mjs — full-page shots for Ilias's review → ../portfolio/site/screens/ (private folder).
import fs from 'node:fs';
import { withPreview } from './with-preview.mjs';

const OUT = '../portfolio/site/screens';
const PAGES = { home: '/', work: '/work/', pilly: '/work/pilly/', kinisi: '/work/kinisi/', datapulse: '/work/datapulse/', lexis: '/work/lexis/', about: '/about/', cv: '/cv/', photography: '/photography/', play: '/play/', '404': '/p/DesignAll' };
const WIDTHS = { phone: 390, tablet: 820, desktop: 1440 };
fs.mkdirSync(OUT, { recursive: true });

await withPreview(async (browser, base) => {
  for (const scheme of ['light', 'dark']) {
    for (const [device, width] of Object.entries(WIDTHS)) {
      const page = await browser.newPage({ viewport: { width, height: 900 }, colorScheme: scheme });
      for (const [name, path] of Object.entries(PAGES)) {
        await page.goto(base + path, { waitUntil: 'networkidle' });
        await page.evaluate(async () => { // lazy images never load in a full-page shot unless forced
          const imgs = [...document.images];
          imgs.forEach((i) => { i.loading = 'eager'; });
          await Promise.all(imgs.map((i) => (i.complete ? null : new Promise((r) => { i.onload = i.onerror = r; }))));
        });
        await page.screenshot({ path: `${OUT}/${name}-${device}-${scheme}.png`, fullPage: true });
      }
      await page.close();
    }
  }
});
console.log(`screenshots → ${OUT}`);
