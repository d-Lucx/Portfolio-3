export interface ContributionDay { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 }
export interface ContributionSnapshot { username: 'd-Lucx'; from: string; to: string; fetchedAt: string; total: number; days: ContributionDay[] }
export type CalendarState = { kind: 'ready' | 'stale'; snapshot: ContributionSnapshot } | { kind: 'unavailable'; reason: 'not-configured' | 'upstream' | 'expired' };
