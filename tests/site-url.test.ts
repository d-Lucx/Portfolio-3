import { test } from 'node:test';
import assert from 'node:assert/strict';
import { siteOrigin } from '../lib/site-url.ts';
test('scheme-less Vercel domain is normalized to a secure origin', () => {
  assert.equal(siteOrigin('rcbej.vercel.app')?.href, 'https://rcbej.vercel.app/');
  assert.equal(siteOrigin(' https://rcbej.vercel.app/path?q=test ')?.href, 'https://rcbej.vercel.app/');
  assert.equal(siteOrigin('http://localhost:3000')?.href, 'http://localhost:3000/');
});
test('missing, malformed, credential-bearing and non-http origins never crash metadata', () => {
  for (const value of [undefined, '', '   ', 'not a url', 'https://', 'javascript:alert(1)', 'ftp://example.com', 'https://user:password@example.com']) assert.equal(siteOrigin(value), undefined);
});
