import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { AsyncLocalStorage } from 'node:async_hooks';
import { createSnapshotReader } from '../lib/github/cache-policy.ts';
import type { ContributionSnapshot } from '../lib/github/types.ts';

test('actual pinned Next cache reuses a hit and retains original data after failed revalidation', async () => {
  Object.assign(globalThis, { AsyncLocalStorage });
  const require = createRequire(import.meta.url);
  const { unstable_cache } = require('next/dist/server/web/spec-extension/unstable-cache.js');
  const { workAsyncStorage } = require('next/dist/server/app-render/work-async-storage.external.js');
  let stored: unknown; let stale = false; let calls = 0; let fail = false;
  const incrementalCache = { isOnDemandRevalidate: false, generateSimpleCacheKey: async (key: string) => key,
    get: async () => stored ? { value: stored, isStale: stale } : null,
    set: async (_key: string, value: unknown) => { stored = value; },
  };
  const snapshot: ContributionSnapshot = { username: 'd-Lucx', from: '2025-11-15', to: '2026-11-14', fetchedAt: '2026-11-14T17:00:00Z', total: 2, days: [] };
  const read = createSnapshotReader(unstable_cache, async () => { calls++; if (fail) throw new Error('Contributions unavailable'); return snapshot; });
  async function request() {
    const store = { incrementalCache, pendingRevalidates: {} as Record<string, Promise<unknown>>, nextFetchId: 1, fetchCache: undefined };
    const result = await workAsyncStorage.run(store, read);
    await Promise.all(Object.values(store.pendingRevalidates));
    return result;
  }
  assert.deepEqual(await request(), snapshot); assert.equal(calls, 1);
  assert.deepEqual(await request(), snapshot); assert.equal(calls, 1);
  stale = true; fail = true;
  const errorLog = console.error; console.error = () => {};
  try { assert.deepEqual(await request(), snapshot); } finally { console.error = errorLog; }
  assert.equal(calls, 2);
  // A failed callback must never overwrite the last successful serialized entry.
  stale = false; assert.deepEqual(await request(), snapshot); assert.equal(calls, 2);
});
