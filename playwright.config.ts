import { defineConfig } from '@playwright/test';
export default defineConfig({ testDir: './tests/browser', timeout: 30000, workers: 1, reporter: 'list', use: { baseURL: 'http://127.0.0.1:3000', channel: 'msedge', headless: true, screenshot: 'only-on-failure', reducedMotion: 'reduce' } });
