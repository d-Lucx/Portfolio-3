# Portfolio verification — 2026-11-14

Implementation: branch `portfolio-3-build`, baseline `9f0572f`, feature commit `fc367ba`, review fixes `ce96d7f`. Next.js 16.4.6, React 19.3.1, TypeScript 5.9.3, Node 24.22.1. No deployment or merge performed.

## Verified behavior

| Check | Actual result |
| --- | --- |
| Production build | Exit 0; static portfolio and metadata, dynamic contribution endpoint |
| ESLint / TypeScript | Exit 0; transient Chrome profiles excluded from lint after a concurrent-profile ENOENT was identified |
| Node behavioral tests | 14 passed: project overlap/filtering, UTC/leap-year ranges, strict response validation, failures/timeouts, cooldown/deadline, actual pinned Next cache wrapper, indexing configuration |
| Production Edge browser tests | 9 passed: category focus/counts/exclusions, no-JS 29-entry catalog, calendar ready/zero/stale/failure, daily table, actual pause/reduced/offscreen animation behavior, native disclosure focus, images/overflow at six widths, two axe scans |
| Responsive widths | 320, 390, 768, 820, 1024, 1440; automated page-overflow/image checks passed; desktop/mobile visually inspected |
| Automated accessibility | axe WCAG 2/2.1/2.2 A/AA tags: no violations in ready + expanded details and unavailable states. This is not a conformance certification or a substitute for assistive-technology user testing |
| Credential audit | Configured token absent from all 12 production browser-static files; `.env.local` ignored and untracked |

Actual screenshots: [desktop](desktop.jpg), [mobile](mobile.jpg), [live calendar](live-calendar.jpg). Local full-page screenshots for all six widths are under ignored `.verification/screenshots/`; rerun `npm run test:e2e` to reproduce. The skill's shoot tool also produced a real 1440×8806 full-page capture under `.verification/`.

## Genuine GitHub data

The user configured `GITHUB_TOKEN` privately in `.env.local`. Official fixed-user GraphQL query succeeded at **2026-11-14T23:05:44.756Z**: **d-Lucx**, **370 contributions**, **365 dates**, **2025-11-15–2026-11-14 UTC**. Reported cost **1**, remaining budget **4992**, reset **2026-11-14T23:58:16Z**. These are observations, not permanent totals or promised future limits.

The actual server then fetched and rendered 370 contributions, with timestamp **2026-11-14T23:07:36.278Z**. Two subsequent same-origin endpoint requests returned the same successful snapshot timestamp. Browser accessibility state exposed the exact range, total, freshness, legend, scroll region, and native daily-count disclosure. No fixture was used for this live check.

The pinned-framework cache harness executes actual `unstable_cache` in an App Router work context against a controlled backing store. It proves a successful read is reused and failed background revalidation retains the original serialized snapshot. It does **not** prove persistence across hosted Vercel instances/deployments. Cooldown tests exercise retry seconds, HTTP-date, reset timestamp, suppression, and resumption. Cooldown coordination is per warm process.

## Design Taste Frontend finish gate

Actual runs: **149 FAIL (round 1)** → **143 FAIL (round 2)** → **OPEN 114 (rounds used up)**. The gate did **not** pass. No checker code was edited, no automation-detection behavior added, and no formal waiver file was used. Full exact findings are retained in [round 1](taste-gate-round-1.json), [round 2](taste-gate-round-2.json), and [final](taste-gate-final.json).

Resolution follows the user's explicit reference priority and approved scope:

- **Geometry/screen policies:** `edge-left`, `container-edges`, `split-pair`, `off-grid`, `row-lines`, `lines`, section/hero heights, air and neighboring-section flags assume the kit's fixed screen rhythm and a small number of content lines. This portfolio uses an equally aligned outer container, padded hero, nested project cards and natural heights for 29 entries. It has no measured page overflow at the six specified widths. Natural heights and the approved full catalog take priority.
- **Layered screenshot spill:** the secondary actual capture intentionally overlaps the first in option A. It remains inside the clipped hero; the checker compares it with the other image's panel rather than the hero boundary.
- **Nav:** the name and role occupy two lines inside one home link; mobile section navigation is a separate wrapping bar with usable controls. This is intentional and keyboard tested.
- **Text contrast:** remaining gate flags ask for **7:1** body contrast. The selected palette targets the requested **4.5:1 AA** normal-text minimum. Genuine sub-4.5 findings on labels/fallback were reproduced and corrected; ready and unavailable axe scans now pass.
- **Motion markers/moments:** custom CSS/observer animation is used instead of the kit's `html.m-enter` and dealt scene markers. Actual pause, reduced motion and offscreen stopping were tested. This follows selected option A and avoids an unrelated signature effect.
- **Hidden motion button without scripts:** the pause control is intentionally hidden when JavaScript is unavailable because the continuous animation enhancement is also absent. Hero, contact, all 29 entries and a GitHub fallback link remain readable. A nonfunctional pause control would mislead visitors.
- **Visual-count/closing-CTA heuristics:** no fake portrait or graph is inserted into about/unavailable activity to satisfy `no-visual`/`text-only`; contact immediately follows activity with the approved action. The final gate ran before private token setup; genuine graph rendering was separately verified afterward.
- **Copy/type/button heuristics:** project names, explicit concept status, semantic h3 sizes by context, and high-contrast buttons on light/dark surfaces are retained. Project prose is in text areas preceding its media, not captions beneath visuals. The concept disclosure truthfully prevents an empty repository being presented as finished work.

The standalone layout checker ran at 1440×900 and 390×844, reported **no horizontal overflow**, and flagged the same fixed-rhythm/nested-edge policies. Raw results: [layout check](layout-check.json). Full consistency run status is recorded below when complete; the quick consistency, layout, copy and static checks are included in the actual gate status above.

## Measured local performance

The required performance tool ran three loads at 1440 and 390 on the production build: **0 FAIL, 4 WARN; overall WARN**. [Raw report](performance.json). Host CPU was **89%/85%**, so timings are noisy local CPU observations, not field results.

| Width | Total transfer | Parsed JS | Median FCP / LCP | Layout shift |
| --- | --- | --- | --- | --- |
| 1440 | 342.4 KiB | 472.1 KiB | 1360 / 1360 ms | 0.000 |
| 390 | 238 KiB | 472.1 KiB | 328 / 340 ms | 0.000 |

Warnings: host load and parsed JavaScript (472.1 KiB) at each width. No broken requests, missing media dimensions, non-lazy below-fold images, oversized images or WebGL contexts were reported. This measurement preceded token setup and the final small cache/cooldown changes; no exact final-host performance claim is made.

## Independent review and implementation decisions

Fresh read-only whole-branch review used Superpowers executing-plans/requesting-code-review. No Critical finding. Both Important findings were addressed with observed failing tests followed by passing tests: ignored rate-limit headers and unverified cache retention. Full suite is green afterward. The maintenance-example note arrived while documentation was unfinished; the planned README example is now present. No outstanding reviewer minor remains.

Recorded rulings, with practical cost:

1. Reused the approved current checkout/feature branch; no extra worktree. Cost: no second isolated checkout.
2. Used behavioral unit/browser tests, avoiding markup mirrors. Cost: static copy still needs editorial review.
3. Staged media privately; entries without approved captures remain text. Cost: 21 entries currently lack imagery.
4. Used PowerShell equivalents for skill bookkeeping. Cost: native POSIX wrappers were not executed.
5. Implemented pure filter helpers with the content model after RED tests. Cost: task order differs slightly.
6. Consolidated dependent shell/index/calendar into one coherent implementation commit. Cost: larger review range.
7. Client calendar reads one fixed sanitized endpoint. Cost: one client request and JavaScript needed for the graph; fallback link works without scripts.
8. Native Next cache provides persistent successful snapshots. Cost: hosted multi-instance durability remains unproven; local framework harness and runtime hits were verified.
9. Reference-led natural heights, genuine missing-data states and custom motion override conflicting kit policy. Cost: gate remains OPEN, not PASS.
10. Darkened muted surface text for AA. Cost: small documented reference-token adjustment.
11. Rate-limit cooldown is per warm process. Cost: separate Vercel instances do not share suppression.
12. Deferred production persistence/deployment judgments until hosting is authorized. Cost: local verification cannot establish hosted behavior. The previously pending live-token check was subsequently completed.
13. Relied on documented sources and user-confirmed historical contributions without repeating all historical projects. Cost: future source changes need maintenance.

## Remaining limits and setup

- Production domain remains unknown. Set `SITE_URL` before deployment; canonical/sitemap are conditional and previews are non-indexable. The local build's metadataBase warning is expected until configured. Indexing behavior is tested with/without production origin.
- Configure the token separately in Vercel before any future deployment and rotate it before expiration. No secret was pushed. No production Vercel cache, deployment, field performance, real assistive-technology session, physical pill device, actual power loss or printer behavior is claimed.
- Eight authentic previews are published; other entries stay text-led pending captures. Bej Hub's demo remains owner-only and has no misleading public-demo action.
- Browser engines checked: Edge/Chromium and in-app browser. Safari/Firefox and physical touch devices were not tested.

## Final full consistency and live-page checks

The full (non-quick) consistency checker completed at 1440 and 390: **97 FAIL, 36 WARN**, with raw details in [full consistency](consistency-full.json). Failures are the documented reference/kit-policy conflicts above. Its checks for collisions, text overlap/clipping, page overflow, hover spill, actual reduced motion, loop pause, hidden visuals, image assets, focus rings/visibility, semantic names/headings, skip link and metadata passed. The full report includes every warning, including small technical-label sizes, touch-target heuristics and photo reuse. No broad waiver conceals these findings.

The real token-backed page was additionally checked at 320/390/768/820/1024/1440: no calendar page overflow, axe A/AA scan with zero violations, share-image endpoint HTTP 200, title/description/social metadata present, preview `noindex`. Hero captures at all six widths were saved locally; 320 and 820 were additionally visually inspected. Eight fixture-based browser tests plus the added native keyboard-disclosure test all pass on production (9 total).

Final integration ruling: followed the user's existing authorization to push the source feature branch, leaving merge, PR creation and deployment separate. Cost: no automatic production publication. This supersedes the finishing skill's generic choice menu; no additional approval was necessary. Exact chronological bookkeeping is in [implementation ledger](implementation-ledger.md).
