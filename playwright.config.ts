// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'tests/e2e',
  use: { baseURL: 'http://localhost:4322' },
  webServer: { command: 'npm run build && npx astro preview --port 4322 --ignore-lock', url: 'http://localhost:4322', reuseExistingServer: false },
  projects: [{ name: 'chromium', use: { browserName: 'chromium' } }],
});
