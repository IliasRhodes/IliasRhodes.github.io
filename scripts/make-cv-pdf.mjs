// scripts/make-cv-pdf.mjs — prints /cv/ to public/cv.pdf (A4). Run via `npm run cv:pdf`.
import { withPreview } from './with-preview.mjs';

await withPreview(async (browser, base) => {
  const page = await browser.newPage();
  await page.emulateMedia({ media: 'print', colorScheme: 'light' });
  await page.goto(`${base}/cv/`, { waitUntil: 'networkidle' });
  await page.pdf({ path: 'public/cv.pdf', format: 'A4', margin: { top: '16mm', bottom: '16mm', left: '16mm', right: '16mm' } });
});
console.log('wrote public/cv.pdf');
