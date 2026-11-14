import { normalizeCalendar, rollingRange } from './normalize.ts';
import type { ContributionSnapshot } from './types.ts';

const query = `query Contributions($login: String!, $from: DateTime!, $to: DateTime!) {
  user(login: $login) { login contributionsCollection(from: $from, to: $to) {
    contributionCalendar { totalContributions weeks { contributionDays { date contributionCount contributionLevel } } }
  } } rateLimit { cost remaining resetAt }
}`;
type FetchOptions = { now: Date; token: string; fetchImpl?: typeof fetch; timeoutMs?: number };
export function createContributionFetcher() {
  // Per warm server instance; no credentials or private data are retained.
  let retryAt = 0;
  return async function fetchContributions({ now, token, fetchImpl = fetch, timeoutMs = 8000 }: FetchOptions): Promise<ContributionSnapshot> {
  if (!token.trim()) throw new Error('Contributions unavailable');
  if (now.getTime() < retryAt) throw new Error('Contributions unavailable');
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const range = rollingRange(now);
    const response = await fetchImpl('https://api.github.com/graphql', {
      method: 'POST', headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json', 'User-Agent': 'ReneChristian-Portfolio' },
      body: JSON.stringify({ query, variables: { login: 'd-Lucx', from: range.from + 'T00:00:00Z', to: now.toISOString() } }),
      signal: controller.signal, cache: 'no-store',
    });
    if (response.status === 403 || response.status === 429) {
      const retry = response.headers.get('retry-after');
      const seconds = retry !== null && /^\d+$/.test(retry) ? Number(retry) : NaN;
      const retryDate = retry === null ? NaN : Date.parse(retry);
      const reset = Number(response.headers.get('x-ratelimit-reset')) * 1000;
      const deadline = Number.isFinite(seconds) ? now.getTime() + seconds * 1000 : Number.isFinite(retryDate) ? retryDate : response.headers.get('x-ratelimit-remaining') === '0' && reset > now.getTime() ? reset : now.getTime() + 60000;
      // Bound malformed upstream advice to one day; GitHub's usual window is shorter.
      retryAt = Math.min(now.getTime() + 86400000, Math.max(now.getTime() + 1000, deadline));
    }
    if (!response.ok) throw new Error('Upstream error');
    const payload = await response.json();
    const snapshot = normalizeCalendar(payload, range, now.toISOString());
    const rate = payload?.data?.rateLimit;
    if (rate && Number.isSafeInteger(rate.cost) && Number.isSafeInteger(rate.remaining)) {
      console.info('GitHub contribution query budget', { cost: rate.cost, remaining: rate.remaining, resetAt: rate.resetAt });
    }
    return snapshot;
  } catch {
    // Keep upstream messages and credentials out of browser responses and logs.
    throw new Error('Contributions unavailable');
  } finally { clearTimeout(timer); }
  };
}
export const fetchContributions = createContributionFetcher();
