// tests/e2e/triliza.spec.ts
import { test, expect } from '@playwright/test';

const cell = (page, i) => page.locator(`[data-cell="${i}"]`);
const status = (page) => page.locator('[data-status]');

test.beforeEach(async ({ page }) => { await page.goto('/play/'); });

test('arrows move focus, Enter places a capsule, the pharmacy replies', async ({ page }) => {
  await cell(page, 0).focus();
  await page.keyboard.press('ArrowRight');
  await page.keyboard.press('ArrowDown');
  await expect(cell(page, 4)).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(cell(page, 4)).toHaveAttribute('aria-label', 'Row 2, column 2, your capsule');
  await expect(status(page)).toContainText('The pharmacy took');
  await expect(page.locator('[data-mark="C"]')).toHaveCount(1);
});

test('arrows stop at the edge', async ({ page }) => {
  await cell(page, 0).focus();
  await page.keyboard.press('ArrowLeft');
  await page.keyboard.press('ArrowUp');
  await expect(cell(page, 0)).toBeFocused();
});

test('occupied bubble ignores presses', async ({ page }) => {
  await cell(page, 4).click();
  await expect(page.locator('[data-mark="C"]')).toHaveCount(1);
  await cell(page, 4).click({ force: true }); // occupied bubbles are aria-disabled; force the press anyway
  await page.waitForTimeout(700);
  await expect(page.locator('[data-mark="Y"]')).toHaveCount(1);
  await expect(page.locator('[data-mark="C"]')).toHaveCount(1);
});

test('presses during the pharmacy turn are ignored', async ({ page }) => {
  await cell(page, 0).click();
  await cell(page, 8).click({ force: true });
  await expect(page.locator('[data-mark="C"]')).toHaveCount(1);
  await expect(page.locator('[data-mark="Y"]')).toHaveCount(1);
});

test('hard mode: the pharmacy never loses, the score counts, and no moves after the result', async ({ page }) => {
  await page.getByLabel('Hard').check();
  await page.getByRole('button', { name: 'New pack' }).click(); // game 2: pharmacy first
  await page.getByRole('button', { name: 'New pack' }).click(); // game 3: you first
  const done = /You win|The pharmacy wins|Draw/;
  const isDone = async () => done.test((await status(page).textContent()) ?? '');
  const empties = page.locator('[data-cell]:not([data-mark="Y"]):not([data-mark="C"])');
  for (let turn = 0; turn < 5 && !(await isDone()); turn++) {
    const before = await page.locator('[data-mark="C"]').count();
    await empties.first().click();
    await expect.poll(async () => (await isDone()) || (await page.locator('[data-mark="C"]').count()) > before).toBe(true);
  }
  await expect(status(page)).not.toContainText('You win');
  await expect(status(page)).toContainText(/The pharmacy wins|Draw/);
  const total = await page.locator('[data-score] dd').evaluateAll((dds) => dds.reduce((n, d) => n + Number(d.textContent), 0));
  expect(total).toBe(1);
  const marks = await page.locator('[data-mark="Y"], [data-mark="C"]').count();
  if (await empties.count()) await empties.first().click({ force: true });
  await page.waitForTimeout(700);
  await expect(page.locator('[data-mark="Y"], [data-mark="C"]')).toHaveCount(marks);
});

test('New pack alternates who goes first', async ({ page }) => {
  await page.getByRole('button', { name: 'New pack' }).click();
  await expect(status(page)).toContainText('The pharmacy goes first');
  await expect(page.locator('[data-mark="C"]')).toHaveCount(1);
  await page.getByRole('button', { name: 'New pack' }).click();
  await expect(status(page)).toContainText('You go first');
  await expect(page.locator('[data-mark="C"]')).toHaveCount(0);
});

test('sound is off by default and toggles', async ({ page }) => {
  const sound = page.getByRole('button', { name: 'Sound' });
  await expect(sound).toHaveAttribute('aria-pressed', 'false');
  await sound.click();
  await expect(sound).toHaveAttribute('aria-pressed', 'true');
});

test('reduced motion: placed pills do not animate', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/play/');
  await cell(page, 4).click();
  const anim = await cell(page, 4).locator('.pill').evaluate((el) => getComputedStyle(el).animationName);
  expect(anim).toBe('none');
});

test('on a finished game the winning line and keyboard focus look different', async ({ page }) => {
  await page.getByLabel('Hard').check();
  for (const i of [0, 1, 3]) { // against Hard this always loses: the pharmacy completes 2-4-6
    const before = await page.locator('[data-mark="C"]').count();
    await cell(page, i).click();
    await expect.poll(async () => (await page.locator('[data-mark="C"]').count()) > before).toBe(true);
  }
  await expect(status(page)).toContainText('The pharmacy wins');
  await expect(page.locator('.bubble.win')).toHaveCount(3);
  await cell(page, 2).focus();
  await page.keyboard.press('ArrowDown'); // keyboard focus → bubble 5 (not winning)
  await page.keyboard.press('ArrowLeft'); // → bubble 4 (winning)
  const focused = await cell(page, 4).evaluate((el) => getComputedStyle(el).outlineStyle);
  const unfocusedWin = await cell(page, 6).evaluate((el) => getComputedStyle(el).outlineStyle);
  expect(focused).not.toBe(unfocusedWin);
});
