import 'server-only';
import { unstable_cache } from 'next/cache';
import { fetchContributions } from './client';
import { calendarState } from './state';
import type { CalendarState } from './types';

// This project deliberately uses Next's documented previous caching model.
// Only a normalized successful result is cached; errors never become zero activity.
const readSnapshot = unstable_cache(
  async () => fetchContributions({ now: new Date(), token: process.env.GITHUB_TOKEN ?? '' }),
  ['public-contribution-calendar-d-Lucx-v1'],
  { revalidate: 21600, tags: ['github-contributions'] },
);
export async function getCalendarState(): Promise<CalendarState> {
  if (!process.env.GITHUB_TOKEN?.trim()) return { kind: 'unavailable', reason: 'not-configured' };
  try { return calendarState(await readSnapshot(), new Date()); }
  catch { console.warn('GitHub contribution calendar unavailable; no valid cached snapshot returned.'); return { kind: 'unavailable', reason: 'upstream' }; }
}
