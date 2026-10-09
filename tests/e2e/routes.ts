// tests/e2e/routes.ts — every public route; specs import from here (Playwright forbids importing one spec from another).
export const CASES = ['pilly', 'kinisi', 'datapulse', 'lexis'];
export const PAGES = ['/', '/work/', '/about/', '/cv/', ...CASES.map((s) => `/work/${s}/`)];
