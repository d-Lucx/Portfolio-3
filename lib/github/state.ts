import type { CalendarState, ContributionSnapshot } from './types.ts';
export function calendarState(snapshot: ContributionSnapshot | null, now: Date): CalendarState {
  if (!snapshot) return { kind: 'unavailable', reason: 'upstream' };
  const age = now.getTime() - Date.parse(snapshot.fetchedAt);
  if (!Number.isFinite(age) || age < -300000) return { kind: 'unavailable', reason: 'upstream' };
  if (age >= 7 * 86400000) return { kind: 'unavailable', reason: 'expired' };
  return { kind: age >= 48 * 3600000 ? 'stale' : 'ready', snapshot };
}
