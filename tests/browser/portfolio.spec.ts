import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// Synthetic activity is isolated to browser route fixtures; never shipped as public data.
function fixture(kind: 'ready' | 'stale' = 'ready', total = 2) {
  const start = Date.parse('2025-11-15T00:00:00Z');
  return { kind, snapshot: { username: 'd-Lucx', from: '2025-11-15', to: '2026-11-14', fetchedAt: '2026-11-14T17:00:00Z', total, days: Array.from({ length: 365 }, (_, i) => ({ date: new Date(start + i * 86400000).toISOString().slice(0, 10), count: i === 364 ? total : 0, level: i === 364 && total ? 1 : 0 })) } };
}
test.beforeEach(async ({ page }) => { await page.route('**/api/contributions', route => route.fulfill({ json: { kind: 'unavailable', reason: 'not-configured' } })); });

test('catalog filters preserve focus, overlapping categories and exclusions', async ({ page }) => {
  await page.goto('/');
  const cards = page.locator('[data-project-id]');
  await expect(cards).toHaveCount(28);
  for (const id of ['portfolio', 'portfolio-2', 'thousand-folded-wishes', 'pundo', 'fish-tank']) await expect(page.locator(`[data-project-id="${id}"]`)).toHaveCount(0);
  await expect(page.locator('[data-project-id="pundo-2"]')).toHaveCount(1);
  const ai = page.getByRole('button', { name: /^AI\s*\d/ });
  await ai.focus(); await page.keyboard.press('Enter');
  await expect(ai).toBeFocused(); await expect(ai).toHaveAttribute('aria-pressed', 'true');
  await expect(cards).toHaveCount(7);
  await expect(page.locator('#projects [role="status"]')).toHaveText('7 entries shown');
  await page.getByRole('button', { name: /^Hardware\s*\d/ }).click();
  await expect(page.locator('[data-project-id="pill-dispenser"]')).toBeVisible();
  await page.getByRole('button', { name: /^All work/ }).click(); await expect(cards).toHaveCount(28);
  await expect(page.getByRole('link', { name: /Contact me/ }).first()).toHaveAttribute('href', 'mailto:renechristianobeja@gmail.com');
});
test('server HTML retains all projects with JavaScript disabled', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false }); const page = await context.newPage();
  await page.goto('http://127.0.0.1:3000/'); await expect(page.locator('[data-project-id]')).toHaveCount(28);
  await expect(page.getByRole('link', { name: /Contact me/ }).first()).toBeVisible(); await context.close();
});
test('calendar presents real-date details, zero and stale states without page overflow', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 740 });
  for (const [kind, total] of [['ready', 2], ['ready', 0], ['stale', 2]] as const) {
    await page.route('**/api/contributions', route => route.fulfill({ json: fixture(kind, total) }));
    await page.goto('/'); await expect(page.locator('[data-calendar-state]')).toHaveAttribute('data-calendar-state', kind);
    await expect(page.getByRole('heading', { name: `${total} contributions`, exact: true })).toBeVisible();
    if (!total) await expect(page.getByText('GitHub reported no contributions')).toBeVisible();
    if (kind === 'stale') await expect(page.getByText('Stale cached data', { exact: true })).toBeVisible();
    await page.locator('.daily-details summary').click(); await expect(page.locator('.daily-details tbody tr')).toHaveCount(365);
    const region = page.getByRole('region', { name: /Contribution calendar;/ }); await region.focus(); await expect(region).toBeFocused();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
});
test('calendar loading and upstream errors retain profile and contact actions', async ({ page }) => {
  await page.route('**/api/contributions', async route => { await new Promise(resolve => setTimeout(resolve, 500)); await route.fulfill({ status: 429, body: 'Rate limited' }); });
  await page.goto('/'); await expect(page.getByText('Loading GitHub contribution activity…')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Activity isn’t available right now.' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'View GitHub profile' })).toHaveAttribute('href', 'https://github.com/d-Lucx');
  await expect(page.getByRole('link', { name: /Contact me/ }).first()).toBeVisible();
});
test('motion respects live preference changes and manual pause', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' }); await page.goto('/');
  await page.getByRole('button', { name: 'Pause animation' }).click();
  await expect(page.locator('html')).toHaveAttribute('data-motion', 'paused');
  expect(await page.locator('.main-layer').evaluate(el => getComputedStyle(el).animationName)).toBe('none');
  await page.getByRole('button', { name: 'Resume animation' }).click();
  await expect(page.locator('html')).toHaveAttribute('data-motion', 'running');
  await expect.poll(() => page.locator('.main-layer').evaluate(el => getComputedStyle(el).animationName)).not.toBe('none');
  await page.locator('#contact').scrollIntoViewIfNeeded();
  await expect.poll(() => page.locator('.main-layer').evaluate(el => getComputedStyle(el).animationName)).toBe('none');
  await page.emulateMedia({ reducedMotion: 'reduce' }); await expect(page.getByRole('button', { name: 'Reduced motion on' })).toBeDisabled();
  await expect(page.locator('html')).toHaveAttribute('data-motion', 'reduced');
});
test('keyboard focus on native project disclosures is visible and immediately scrolled into view', async ({ page }) => {
  await page.goto('/'); await page.keyboard.press('Tab');
  const summary = page.locator('.case-details summary').first(); await summary.focus();
  await expect(summary).toBeFocused();
  const visibility = await summary.evaluate(el => { const rect = el.getBoundingClientRect(); const css = getComputedStyle(el); return { inView: rect.top >= 0 && rect.bottom <= innerHeight, outline: css.outlineStyle }; });
  expect(visibility).toEqual({ inView: true, outline: 'solid' });
  await page.keyboard.press('Enter'); await expect(page.locator('.case-details').first()).toHaveAttribute('open', '');
});
for (const width of [320, 390, 768, 820, 1024, 1440]) {
  test(`images load and content stays inside the viewport at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 }); await page.goto('/');
    await page.locator('#contact').scrollIntoViewIfNeeded(); await page.waitForTimeout(300);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `overflow at ${width}`).toBe(true);
    const images = page.locator('img'); for (const image of await images.all()) { await image.scrollIntoViewIfNeeded(); await expect(image).toHaveJSProperty('complete', true); expect(await image.evaluate((img: HTMLImageElement) => img.naturalWidth)).toBeGreaterThan(0); }
    await page.screenshot({ path: `.verification/screenshots/portfolio-${width}.png`, fullPage: true });
  });
}
test('WCAG automated checks cover page and expanded activity details', async ({ page }) => {
  await page.route('**/api/contributions', route => route.fulfill({ json: fixture() })); await page.goto('/');
  await page.locator('.daily-details summary').click();
  const result = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze();
  expect(result.violations).toEqual([]);
});
test('unavailable calendar also maintains accessible text contrast', async ({ page }) => {
  await page.goto('/'); await expect(page.locator('.calendar-unavailable')).toBeVisible();
  expect((await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze()).violations).toEqual([]);
});
