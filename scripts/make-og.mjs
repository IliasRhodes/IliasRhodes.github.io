// scripts/make-og.mjs — screenshots /og-card/ to public/og.png.
import { withPreview } from './with-preview.mjs';

await withPreview(async (browser, base) => {
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await page.emulateMedia({ colorScheme: 'light' });
  await page.goto(`${base}/og-card/`, { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'public/og.png' });
});
console.log('wrote public/og.png');
