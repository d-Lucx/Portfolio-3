import { test } from 'node:test';
import assert from 'node:assert/strict';
import { normalizeCalendar, rollingRange } from '../lib/github/normalize.ts';
import { calendarState } from '../lib/github/state.ts';

const now = new Date('2026-11-14T17:00:00Z');
export function payload(at = now) {
  const range = rollingRange(at);
  const start = Date.parse(range.from + 'T00:00:00Z');
  const days = Array.from({ length: 365 }, (_, i) => ({ date: new Date(start + i * 86400000).toISOString().slice(0, 10), contributionCount: i === 364 ? 2 : 0, contributionLevel: i === 364 ? 'FIRST_QUARTILE' : 'NONE' }));
  return { data: { user: { login: 'd-Lucx', contributionsCollection: { contributionCalendar: { totalContributions: 2, weeks: [{ contributionDays: days }] } } } } };
}
test('rolling range uses 365 UTC dates across a leap year and US midnight', () => {
  const range = rollingRange(new Date('2024-03-01T00:01:00Z'));
  assert.equal((Date.parse(range.to) - Date.parse(range.from)) / 86400000 + 1, 365);
  assert.equal(range.to, '2024-03-01');
  assert.equal(rollingRange(new Date('2026-11-14T23:59:00-07:00')).to, '2026-11-15');
});
test('normalization keeps real counts and accepts a genuine zero year', () => {
  const result = normalizeCalendar(payload(), rollingRange(now), now.toISOString());
  assert.equal(result.days.length, 365); assert.equal(result.total, 2); assert.equal(result.days.at(-1)?.count, 2);
  const empty = payload(); empty.data.user.contributionsCollection.contributionCalendar.totalContributions = 0;
  empty.data.user.contributionsCollection.contributionCalendar.weeks[0].contributionDays.forEach(d => { d.contributionCount = 0; d.contributionLevel = 'NONE'; });
  assert.equal(normalizeCalendar(empty, rollingRange(now), now.toISOString()).total, 0);
});
test('missing, duplicate, invalid and negative/fractional days are rejected rather than fabricated', () => {
  for (const modify of [
    (d: ReturnType<typeof payload>) => d.data.user.contributionsCollection.contributionCalendar.weeks[0].contributionDays.pop(),
    (d: ReturnType<typeof payload>) => { const days=d.data.user.contributionsCollection.contributionCalendar.weeks[0].contributionDays; days[1].date=days[0].date; },
    (d: ReturnType<typeof payload>) => { d.data.user.contributionsCollection.contributionCalendar.weeks[0].contributionDays[0].date='2026-02-30'; },
    (d: ReturnType<typeof payload>) => { d.data.user.contributionsCollection.contributionCalendar.weeks[0].contributionDays[0].contributionCount=-1; },
    (d: ReturnType<typeof payload>) => { d.data.user.contributionsCollection.contributionCalendar.weeks[0].contributionDays[0].contributionCount=1.5; },
  ]) { const data = payload(); modify(data); assert.throws(() => normalizeCalendar(data, rollingRange(now), now.toISOString())); }
});
test('total mismatch, GraphQL errors and wrong identity do not become successful activity', () => {
  const data = payload(); data.data.user.contributionsCollection.contributionCalendar.totalContributions=100;
  assert.throws(() => normalizeCalendar(data, rollingRange(now), now.toISOString()));
  assert.throws(() => normalizeCalendar({ errors: [{ message: 'rate limit' }], ...payload() }, rollingRange(now), now.toISOString()));
  const other = payload(); other.data.user.login='other'; assert.throws(() => normalizeCalendar(other, rollingRange(now), now.toISOString()));
});
test('cache state preserves actual range and expires instead of pretending to be current', () => {
  const snapshot = normalizeCalendar(payload(), rollingRange(now), now.toISOString());
  assert.equal(calendarState(snapshot, now).kind, 'ready');
  const stale = calendarState(snapshot, new Date(now.getTime()+48*3600000));
  assert.equal(stale.kind,'stale');
  if(stale.kind==='stale') assert.equal(stale.snapshot.to,'2026-11-14');
  assert.equal(calendarState(snapshot, new Date(now.getTime()+7*86400000)).kind,'unavailable');
  assert.equal(calendarState(null,now).kind,'unavailable');
});
