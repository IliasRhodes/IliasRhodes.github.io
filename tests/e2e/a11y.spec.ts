// tests/e2e/a11y.spec.ts
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { PAGES } from './routes';

const ALL = [...PAGES, '/404.html'];

for (const scheme of ['light', 'dark'] as const) {
  for (const p of ALL) {
    test(`axe WCAG 2.2 AA, ${scheme}: ${p}`, async ({ page }) => {
      await page.emulateMedia({ colorScheme: scheme });
      await page.goto(p);
      const { violations } = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']).analyze();
      expect(violations.map((v) => `${v.id} ×${v.nodes.length}: ${v.nodes[0]?.target}`)).toEqual([]);
    });
  }
}

for (const p of ALL) {
  test(`no sideways scroll at 320px: ${p}`, async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 640 });
    await page.goto(p);
    expect(await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)).toBeLessThanOrEqual(0);
  });
}

test('skip link moves focus to main content', async ({ page }) => {
  await page.goto('/work/pilly/');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('#main')).toBeFocused();
});

test('a very long word never causes sideways scroll at 320px', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 640 });
  for (const p of ['/', '/work/pilly/', '/about/']) {
    await page.goto(p);
    await page.evaluate(() => {
      const word = 'Pharmacovigilanceresponsibilities'.repeat(3);
      document.querySelectorAll('h1, h3 a, .pager a, .tag').forEach((el) => { el.textContent = word; });
    });
    expect(await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth), p).toBeLessThanOrEqual(0);
  }
});
