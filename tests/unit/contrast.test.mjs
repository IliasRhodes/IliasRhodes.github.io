// tests/unit/contrast.test.mjs — the colour tokens must keep the contrast agreed in the spec (§3).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const css = readFileSync(new URL('../../src/styles/tokens.css', import.meta.url), 'utf8');
const vars = (block) => Object.fromEntries([...block.matchAll(/--([\w-]+):\s*(#[0-9a-fA-F]{6})/g)].map((m) => [m[1], m[2]]));
const light = vars(css.match(/:root\s*{([^}]*)}/)[1]);
const dark = vars(css.match(/prefers-color-scheme:\s*dark\)\s*{\s*:root\s*{([^}]*)}/)[1]);

const lum = (hex) => {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };

test('light mode contrast', () => {
  assert.ok(ratio(light.bg, light.ink) >= 15, 'ink');
  assert.ok(ratio(light.bg, light.green) >= 6, 'green');
  assert.ok(ratio(light.bg, light.grey) >= 6.95, 'grey'); // approved #4D5A52 = 6.98:1, shown rounded as 7.0 in the spec
});

test('dark mode contrast', () => {
  assert.ok(ratio(dark.bg, dark.ink) >= 15, 'ink');
  assert.ok(ratio(dark.bg, dark.green) >= 8.5, 'green');
  assert.ok(ratio(dark.bg, dark.grey) >= 8, 'grey');
});

test('pieces on the foil keep 3:1 against both foil tones', () => {
  for (const t of [light, dark]) for (const foil of [t['foil-1'], t['foil-2']]) assert.ok(ratio(foil, t.ink) >= 3);
});
