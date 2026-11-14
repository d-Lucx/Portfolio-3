import type { ContributionSnapshot } from './types.ts';
type CacheAdapter = (read: () => Promise<ContributionSnapshot>, keys: string[], options: { revalidate: number; tags: string[] }) => () => Promise<ContributionSnapshot>;
export function createSnapshotReader(cache: CacheAdapter, read: () => Promise<ContributionSnapshot>) {
  return cache(read, ['public-contribution-calendar-d-Lucx-v1'], { revalidate: 21600, tags: ['github-contributions'] });
}
