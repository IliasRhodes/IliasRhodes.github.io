// tests/e2e/pages.spec.ts
import { test, expect } from '@playwright/test';
import { CASES, PAGES } from './routes';

for (const p of PAGES) {
  test(`${p} renders with one h1 and the footer contact`, async ({ page }) => {
    const res = await page.goto(p);
    expect(res?.status()).toBe(200);
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('footer a[href="mailto:iliasmandalos@gmail.com"]')).toBeVisible();
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex, nofollow');
  });
}

test('home lists the four cases in order', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.cases h3 a')).toHaveText(['Price, stock, renewals', 'Community came last', '100 doors', 'Ten decisions, nothing built']);
});

test('nav marks Work as current on a case study', async ({ page }) => {
  await page.goto('/work/pilly/');
  await expect(page.locator('nav[aria-label="Main"] a[aria-current="page"]')).toHaveText('Work');
});

test('every case-study image is served', async ({ page, request }) => {
  for (const slug of CASES) {
    await page.goto(`/work/${slug}/`);
    for (const src of await page.locator('main img').evaluateAll((imgs) => imgs.map((i) => i.getAttribute('src')))) {
      expect((await request.get(src!)).status(), src!).toBe(200);
    }
  }
});

test('no Internal section is published', async ({ page }) => {
  for (const slug of CASES) {
    await page.goto(`/work/${slug}/`);
    await expect(page.locator('main h2', { hasText: /internal/i })).toHaveCount(0);
  }
});

test('CV PDF is served', async ({ request }) => {
  const res = await request.get('/cv.pdf');
  expect(res.status()).toBe(200);
  expect(res.headers()['content-type']).toContain('pdf');
});

test('old UXfolio path shows the 404 page with a link to the work', async ({ page }) => {
  const res = await page.goto('/p/DesignAll');
  expect(res?.status()).toBe(404);
  await expect(page.locator('h1')).toHaveText('Page not found');
  await expect(page.getByRole('link', { name: 'See the work' })).toHaveAttribute('href', '/work/');
});

test('robots.txt blocks indexing before launch', async ({ request }) => {
  expect(await (await request.get('/robots.txt')).text()).toContain('Disallow: /');
});

test('social preview image is served', async ({ request }) => {
  expect((await request.get('/og.png')).status()).toBe(200);
});
