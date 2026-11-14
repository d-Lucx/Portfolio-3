import type { ContributionDay } from '../lib/github/types';
export function ContributionDetails({ days }: { days: readonly ContributionDay[] }) {
  return <details className="daily-details"><summary>Read daily contribution counts <span aria-hidden="true">＋</span></summary><div className="daily-table-scroll" tabIndex={0} role="region" aria-label="Daily contribution details"><table><caption>Exact daily counts supplied by GitHub (UTC dates)</caption><thead><tr><th scope="col">Date</th><th scope="col">Contributions</th></tr></thead><tbody>{days.map(day => <tr key={day.date}><th scope="row">{day.date}</th><td>{day.count.toLocaleString('en-US')}</td></tr>)}</tbody></table></div></details>;
}
