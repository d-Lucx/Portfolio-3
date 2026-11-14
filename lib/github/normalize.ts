import type { ContributionDay, ContributionSnapshot } from './types.ts';
const DAY = 86400000;
const levels = { NONE: 0, FIRST_QUARTILE: 1, SECOND_QUARTILE: 2, THIRD_QUARTILE: 3, FOURTH_QUARTILE: 4 } as const;
function record(value: unknown): Record<string, unknown> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error('Invalid contribution response');
  return value as Record<string, unknown>;
}
function date(value: unknown): string {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) throw new Error('Invalid contribution date');
  const parsed = new Date(value + 'T00:00:00Z');
  if (!Number.isFinite(parsed.getTime()) || parsed.toISOString().slice(0, 10) !== value) throw new Error('Invalid contribution date');
  return value;
}
export function rollingRange(now: Date): { from: string; to: string } {
  if (!Number.isFinite(now.getTime())) throw new Error('Invalid date');
  const to = now.toISOString().slice(0, 10);
  return { from: new Date(Date.parse(to + 'T00:00:00Z') - 364 * DAY).toISOString().slice(0, 10), to };
}
export function normalizeCalendar(payload: unknown, range: { from: string; to: string }, fetchedAt: string): ContributionSnapshot {
  const from = date(range.from), to = date(range.to);
  if ((Date.parse(to) - Date.parse(from)) / DAY !== 364 || !Number.isFinite(Date.parse(fetchedAt))) throw new Error('Invalid contribution range');
  const root = record(payload);
  if (root.errors !== undefined && (!Array.isArray(root.errors) || root.errors.length > 0)) throw new Error('GitHub returned errors');
  const user = record(record(root.data).user);
  if (typeof user.login !== 'string' || user.login.toLowerCase() !== 'd-lucx') throw new Error('Unexpected contribution user');
  const calendar = record(record(user.contributionsCollection).contributionCalendar);
  if (!Array.isArray(calendar.weeks)) throw new Error('Missing contribution weeks');
  const days = new Map<string, ContributionDay>();
  for (const week of calendar.weeks) {
    const entries = record(week).contributionDays;
    if (!Array.isArray(entries)) throw new Error('Missing contribution days');
    for (const raw of entries) {
      const day = record(raw), dayDate = date(day.date), count = day.contributionCount;
      if (typeof count !== 'number' || !Number.isSafeInteger(count) || count < 0) throw new Error('Invalid contribution count');
      if (typeof day.contributionLevel !== 'string' || !Object.hasOwn(levels, day.contributionLevel)) throw new Error('Invalid contribution level');
      const level = levels[day.contributionLevel as keyof typeof levels];
      if ((count === 0) !== (level === 0)) throw new Error('Inconsistent contribution level');
      if (dayDate < from || dayDate > to) continue;
      if (days.has(dayDate)) throw new Error('Duplicate contribution day');
      days.set(dayDate, { date: dayDate, count, level });
    }
  }
  const ordered = Array.from(days.values()).sort((a, b) => a.date.localeCompare(b.date));
  if (ordered.length !== 365 || ordered.some((day, i) => day.date !== new Date(Date.parse(from) + i * DAY).toISOString().slice(0, 10))) throw new Error('Incomplete contribution year');
  const total = ordered.reduce((sum, day) => sum + day.count, 0);
  if (!Number.isSafeInteger(total) || calendar.totalContributions !== total) throw new Error('Contribution total mismatch');
  return { username: 'd-Lucx', from, to, fetchedAt, total, days: ordered };
}
