'use client';
import { useEffect, useState } from 'react';
import type { CalendarState, ContributionSnapshot } from '../lib/github/types';
import { ContributionDetails } from './ContributionDetails';

const formatDate = (date: string) => new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(new Date(date + 'T00:00:00Z'));
function Graph({ snapshot }: { snapshot: ContributionSnapshot }) {
  const offset = new Date(snapshot.from + 'T00:00:00Z').getUTCDay();
  const months = snapshot.days.flatMap((day, index) => index === 0 || day.date.slice(-2) === '01' ? [{ name: new Date(day.date + 'T00:00:00Z').toLocaleDateString('en-US', { month: 'short', timeZone: 'UTC' }), column: Math.floor((index + offset) / 7) + 1 }] : []);
  return <>
    <div className="calendar-scroll" tabIndex={0} role="region" aria-label="Contribution calendar; scroll horizontally to see all weeks"><div className="calendar-months" aria-hidden="true">{months.map((month, i) => <span style={{ gridColumn: month.column }} key={i}>{month.name}</span>)}</div><div className="calendar-plot" role="img" aria-label={`${snapshot.total.toLocaleString('en-US')} contributions from ${formatDate(snapshot.from)} to ${formatDate(snapshot.to)}. Exact daily counts are available below.`}>
      {Array.from({ length: offset }, (_, i) => <span className="calendar-spacer" aria-hidden="true" key={`pad-${i}`}/>)}
      {snapshot.days.map(day => <span className={`calendar-day level-${day.level}`} key={day.date} aria-hidden="true"/>)}
    </div></div>
    <div className="calendar-legend"><span>Less</span>{[0, 1, 2, 3, 4].map(level => <span className={`calendar-day level-${level}`} aria-hidden="true" key={level}/>)}<span>More</span></div>
    <ContributionDetails days={snapshot.days}/>
  </>;
}
export function ContributionCalendar() {
  const [state, setState] = useState<CalendarState | null>(null);
  useEffect(() => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12000);
    fetch('/api/contributions', { signal: controller.signal, cache: 'no-store' })
      .then(response => { if (!response.ok) throw new Error(); return response.json(); })
      .then((result: CalendarState) => { if (!['ready', 'stale', 'unavailable'].includes(result.kind)) throw new Error(); setState(result); })
      .catch(() => { setState({ kind: 'unavailable', reason: 'upstream' }); })
      .finally(() => clearTimeout(timeout));
    return () => { controller.abort(); clearTimeout(timeout); };
  }, []);
  if (!state) return <div className="calendar-shell calendar-loading" aria-busy="true"><p role="status">Loading GitHub contribution activity…</p><a href="https://github.com/d-Lucx">View d-Lucx on GitHub <span aria-hidden="true">↗</span></a><noscript><p>Use the GitHub link to read activity without JavaScript.</p></noscript></div>;
  if (state.kind === 'unavailable') return <div className="calendar-shell calendar-unavailable"><span className="calendar-account">d-Lucx / GitHub</span><h3>Activity isn’t available right now.</h3><p>The projects and their evidence are available above. You can also view contribution activity directly on GitHub.</p><a className="text-link" href="https://github.com/d-Lucx">View GitHub profile <span aria-hidden="true">↗</span></a></div>;
  const { snapshot } = state;
  return <div className="calendar-shell" data-calendar-state={state.kind}>
    <div className="calendar-summary"><div><span className="calendar-account">d-Lucx / GitHub</span><h3>{snapshot.total.toLocaleString('en-US')} contributions</h3><p>{formatDate(snapshot.from)} – {formatDate(snapshot.to)} <span>(UTC)</span></p></div><span className="cache-status">{state.kind === 'stale' ? 'Stale cached data' : 'Cached GitHub data'}</span></div>
    {state.kind === 'stale' && <p className="stale-note" role="status">This snapshot is over 48 hours old. Its original date range is shown while a fresh update is unavailable.</p>}
    {snapshot.total === 0 && <p className="empty-note">GitHub reported no contributions in this date range.</p>}
    <Graph snapshot={snapshot}/><p className="calendar-freshness">Fetched <time dateTime={snapshot.fetchedAt}>{new Date(snapshot.fetchedAt).toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'UTC' })} UTC</time>. Updates are checked approximately every six hours when visited.</p>
    <p className="calendar-note">Counts include qualifying commits, issues, and pull requests. Private contributions may be omitted, and new activity can take up to 24 hours to appear. Contribution totals aren’t a measure of engineering quality.</p>
  </div>;
}
