// tests/e2e/photography.spec.ts
import { test, expect } from '@playwright/test';

test('every published photo is served and carries no EXIF or XMP (no GPS, no serials)', async ({ page, request }) => {
  await page.goto('/photography/');
  const urls = await page.locator('.photos a').evaluateAll((as) => as.flatMap((a) => [a.getAttribute('href'), a.querySelector('img')!.getAttribute('src')]));
  expect(urls.length).toBeGreaterThan(0);
  for (const u of urls) {
    const res = await request.get(u!);
    expect(res.status(), u!).toBe(200);
    const bytes = (await res.body()).toString('latin1');
    expect(bytes.includes('Exif\0\0'), `${u} has EXIF`).toBe(false);
    expect(bytes.includes('ns.adobe.com/xap'), `${u} has XMP`).toBe(false);
  }
});

test('viewer opens on click, steps with arrow keys, and returns focus on close', async ({ page }) => {
  await page.goto('/photography/');
  const links = page.locator('.photos a');
  const n = await links.count();
  await links.nth(1).click();
  const viewer = page.getByRole('dialog', { name: 'Photo viewer' });
  await expect(viewer).toBeVisible();
  await expect(viewer.locator('[data-count]')).toHaveText(`2 / ${n}`);
  await expect(viewer.locator('img')).toHaveAttribute('alt', (await links.nth(1).locator('img').getAttribute('alt'))!);
  await page.keyboard.press('ArrowRight');
  await expect(viewer.locator('[data-count]')).toHaveText(`3 / ${n}`);
  await page.keyboard.press('ArrowLeft');
  await page.keyboard.press('ArrowLeft');
  await page.keyboard.press('ArrowLeft');
  await expect(viewer.locator('[data-count]')).toHaveText(`${n} / ${n}`);
  await page.keyboard.press('Escape');
  await expect(viewer).toBeHidden();
  await expect(links.nth(n - 1)).toBeFocused();
});

test('nav marks Photography as current', async ({ page }) => {
  await page.goto('/photography/');
  await expect(page.locator('nav[aria-label="Main"] a[aria-current="page"]')).toHaveText('Photography');
});
