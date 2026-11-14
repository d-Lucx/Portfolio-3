# SDD ledger — plan: docs/superpowers/plans/2026-11-14-portfolio-implementation.md

Execution: Native, explicitly authorized by user. Baseline origin/main: 9f0572f. Current branch: portfolio-3-build. Remote prompt preserved with local discovery additions.

Pre-flight interfaces: Tasks 1→2/3 use Project/Category; Tasks 4→5 use ContributionSnapshot/CalendarState; Task 6 checks the assembled behavior. No conflicting property names found.

Ruling: Reuse the approved current workspace on a feature branch — there is no existing application or attached worktree, and the user approved a plan explicitly reusing this directory — no extra worktree or approval prompt needed.
Ruling: Use native Node tests for pure TypeScript behavior and browser tests for interactions; do not create markup/configuration mirror tests — higher-priority developer testing guidance and the plan favor meaningful behavior checks — static content is audited rather than snapshot tested.
Ruling: Source media and private data stay staged outside public assets until individually reviewed. Archive entries lacking authentic captures remain text-led — prevents false evidence while preserving the user's full included catalog.
Ruling: PowerShell equivalents maintain task ledger/brief/check records where POSIX wrapper scripts add platform friction — same task boundaries and evidence, no change to deliverables.

Task 1: in progress — repository connected; metadata and README source review completed; content model and pinned package configuration written. No existing project tests at baseline.

Task 1: Ruling: Implemented Task 3's pure filtering helpers alongside the content model after writing/running their failing test — prevents a knowingly broken typecheck while leaving the actual index UI to Task 3 — same behavior and test coverage, earlier sequencing only.
Asset confirmation: user approved Divvy and FreelanceFlow figures as demonstration data. Eight actual project previews/photos optimized to WebP; no private app state, generated mockups or CAD attribution changes.
Task 1 verification: `npm test` 3/3 pass (RED missing helper → GREEN); `npm run typecheck` exit 0; sharp optimization succeeded for all eight assets. Baseline had no application tests. Gate armed for software page at localhost:3000; not yet run.
Task 1: complete (commit 869382e, tests: npm test 3/3, typecheck exit 0). Task 2: in progress.
Task 2–5: implementation committed fc367ba; 11/11 unit tests and 8/8 browser tests pass. Final production build pending. Keyboard, reduced motion, manual pause, catalog SSR, six widths and ready/empty/stale/failure calendar verified. Contrast defects reproduced in axe, corrected and green.
Ruling: Consolidated Task 2–5 code into one coherent implementation commit after testing shared components — page assembly consumed the calendar and index concurrently — review range is larger, but no broken intermediate commit was introduced.
Ruling: ContributionCalendar fetches the fixed same-origin sanitized endpoint rather than accepting a server prop — isolates loading/failure without blocking the static page and matches the optional endpoint in the architecture — costs one client request; no token is serialized.
Ruling: Use Next's native persistent Data Cache, with documented last-good behavior, rather than a custom cache adapter — avoids duplicating framework state — hosted cross-instance failure retention is not locally proven and must be disclosed.
Ruling: Keep natural-height reference-led composition, genuine empty/missing media states and custom restrained animation rather than forcing skill-dealt sections/effects — user explicitly prioritized reference and option A — Design Taste policy gate may remain open; report exact actual status.
Ruling: Darken muted labels from #65716b to #5d6961 where needed on pale surfaces — actual fallback contrast was below AA — small token deviation preserves visual character and improves readability.
Final whole-branch read-only review dispatched per executing-plans to fresh gpt-6-astra reviewer; report pending.
Task 2: complete (fc367ba; reference tokens, desktop/mobile visual inspection, production build exit 0).
Task 3: complete (fc367ba; filtering tests RED→GREEN, keyboard/SSR/29-entry browser tests pass).
Task 4: complete (fc367ba plus reviewed fixes pending commit; native cache harness, UTC/validation/error tests pass; hosted durability remains unverified).
Task 5: complete (fc367ba; ready/zero/stale/error fixtures, daily details and contained scroll verified).
Final: fixed ignored rate-limit headers — cooldown test RED missing export → GREEN, retry seconds/date/reset and deadline resumption covered, suite 14/14.
Final: fixed unverified cache adapter — actual pinned Next cache harness RED missing policy module → GREEN, successful fetch/hit/failed revalidation/original snapshot retention covered, suite 14/14. Controlled backing store; not a distributed Vercel durability claim.
Final: Ruling: Rate-limit cooldown is per warm process, while successful snapshots use persistent Next cache — prevents repeated local retries without a new service — separate Vercel instances do not coordinate the cooldown.
Final: Ruling: Live counts/token compatibility and production persistence remain explicit acceptance limitations — no private credential configured and no deployment authorized — live-data acceptance cannot be claimed.
Final: Ruling: Existing source/provenance and confirmed project roles stand without repeating historical project research — review validated claims against the documented evidence — future repository changes require maintenance.
Final: minor (deferred): Review's missing worked content-update example was noted while Task 7 documentation was incomplete; completed by the planned README maintenance example, not a product change.
Task 6: 8/8 browser, 14/14 unit, lint/typecheck/build exit 0. Final production browser/gate run pending. Build metadataBase warning expected until SITE_URL selected.
Final verification: 14/14 unit, 9/9 production browser, lint/typecheck/build exit 0. Actual configured token GraphQL: 370 contributions, 365 dates, cost1. Token absent from12 browser-static files; .env.local ignored/untracked. Live server cache hit and real calendar six widths/axe verified. Official source and limitations documented.
Task 6: complete (ce96d7f plus docs evidence); gate OPEN114 after3rounds; full consistency97FAIL/36WARN policy conflicts documented; performance0FAIL/4WARN with busyCPU. No conformance or hosted durability claim.
Task 7: complete subject to final documentation push below; code branch pushed ce96d7f; no deployment. Production domain remains unset, documented indexing restrictions.
Final: Ruling: Follow existing user authorization to push source feature branch and leave deployment/merge separate instead of asking the finishing skill's integration menu — user explicitly authorized repository delivery and disallowed assumed deployment — no merge/PR/deployment performed.
Final minor status: no outstanding reviewer minor; planned maintenance example completed.
Final handoff: local production preview port3000 retains genuine cached activity. Temporary port3001 stopped. Original workspace and unrelated private staging preserved.
