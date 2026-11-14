import { test } from 'node:test';
import assert from 'node:assert/strict';
import robots from '../app/robots.ts';
import sitemap from '../app/sitemap.ts';
test('indexing stays disabled until both production environment and real origin are configured', () => {
  const originalUrl = process.env.SITE_URL, originalEnv = process.env.VERCEL_ENV;
  try {
    for (const env of ['preview', 'development', 'production']) {
      process.env.VERCEL_ENV = env; delete process.env.SITE_URL;
      assert.deepEqual(sitemap(), []); assert.deepEqual(robots().rules, { userAgent: '*', disallow: '/' });
    }
    process.env.SITE_URL = 'https://portfolio.example'; process.env.VERCEL_ENV = 'preview';
    assert.deepEqual(sitemap(), []);
    process.env.VERCEL_ENV = 'production';
    assert.deepEqual(sitemap(), [{ url: 'https://portfolio.example/' }]);
    assert.equal(robots().sitemap, 'https://portfolio.example/sitemap.xml');
    process.env.SITE_URL = 'rcbej.vercel.app';
    assert.deepEqual(sitemap(), [{ url: 'https://rcbej.vercel.app/' }]);
    assert.equal(robots().sitemap, 'https://rcbej.vercel.app/sitemap.xml');
    process.env.SITE_URL = 'https://';
    assert.deepEqual(sitemap(), []);
    assert.deepEqual(robots().rules, { userAgent: '*', disallow: '/' });
  } finally {
    if (originalUrl === undefined) delete process.env.SITE_URL; else process.env.SITE_URL = originalUrl;
    if (originalEnv === undefined) delete process.env.VERCEL_ENV; else process.env.VERCEL_ENV = originalEnv;
  }
});
