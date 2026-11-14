# Portfolio 3 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build Rene Christian's approved single-page portfolio, with three evidence-led cases, all projects in a category index, and a genuine accessible GitHub calendar, then commit source and documentation to Portfolio-3.

**Architecture:** Next.js App Router with TypeScript and custom CSS. Server-render identity, case studies and full catalog; a small client component filters the catalog and a restrained motion layer enhances static content. A server-only GitHub module validates and caches aggregate contribution data; calendar failure never blocks the rest of the page.

**Tech Stack:** Next.js, React, TypeScript, CSS, Node 24.22.1, GitHub GraphQL, Vercel target hosting. Pin exact compatible stable versions during setup and record them. No database, CMS, animation framework or WebGL dependency.

**Spec:** `docs/superpowers/specs/2026-11-14-portfolio-design.md`, approved with the user's categorized all-project addition. `DESIGN.md` holds reference tokens; `docs/PROJECT_CATALOG.md` enumerates 29 included entries and evidence gaps.

## Global Constraints

- Public display name: Rene Christian.
- Position Rene as a **Computer Engineering Student focused on AI Automation**.
- Primary action: **Contact me**, linking to `mailto:renechristianobeja@gmail.com` (publication explicitly approved).
- Single-page structure. No separate project-detail routes.
- Motion option **A** selected after the browser comparison: restrained entrance, layered actual screenshots, gentle movement and small interaction feedback. Interactive 3D option B is not selected.
- Vercel hosting. Hosting preference does not authorize deployment.
- Latest 365 UTC calendar days, including the current UTC day; six-hour cache revalidation target, stale after 48 hours, unavailable after seven days.
- Inspect 320, 390, 768, 820, 1024 and 1440px layouts for overflow, clipping, collisions and navigation.
- `.superpowers/` and `.verification/` stay ignored. Never commit tokens, session keys or disposable test data.
- Prefer screenshots/physical media; show missing-media archive entries as intentional text, not fake screens. Preserve Code&Craft watermarks and team credit.
- Category navbar: All work, AI, Software, Hardware; default All work, overlapping categories, all projects present without JavaScript.

## Review Focus

1. Private, empty or undocumented projects: include truthful entries without dead links, invented outcomes or misleading completed status (Tasks 1 and 3).
2. Category switching with keyboard/touch or JavaScript disabled: maintain focus, correct overlap/counts and a full unfiltered baseline (Task 3).
3. UTC midnight, leap years and malformed/missing GitHub days: preserve exact date scope and never substitute fabricated zero activity (Task 4).
4. HTTP 200 GraphQL errors, rate limits, expired tokens and stale cache: keep known data correctly labeled or show unavailable without breaking contact (Tasks 4 and 5).
5. Motion preference changes, absent media or long project names at narrow widths: content remains visible, controls usable and page overflow-free (Tasks 2, 3 and 6).

## File structure

| File | Responsibility |
| --- | --- |
| `app/layout.tsx`, `app/page.tsx`, `app/globals.css` | Metadata shell, section composition and global tokens/layout |
| `app/icon.svg`, `app/opengraph-image.*`, `app/robots.ts`, `app/sitemap.ts` | Identity/share/indexing assets and domain-aware indexing |
| `content/profile.ts`, `content/projects.ts` | Approved identity and typed full project collection |
| `components/SiteHeader.tsx`, `Hero.tsx`, `FeaturedProjects.tsx`, `AboutSkills.tsx`, `Contact.tsx` | Presentational page sections |
| `components/ProjectIndex.tsx`, `lib/project-index.ts` | Category interaction and pure category selection/count helpers |
| `components/MotionController.tsx` | Small motion enhancement, pause/reduced-motion/offscreen behavior |
| `components/ContributionCalendar.tsx`, `ContributionDetails.tsx` | Calendar visual, status, dates, legend and daily accessible details |
| `lib/github/types.ts`, `normalize.ts`, `client.ts`, `cache.ts` | Data contract, validation, fixed-user API and server cache policy |
| `app/api/contributions/route.ts` | Same-origin sanitized aggregate endpoint, if required by selected client rendering |
| `public/projects/*` | Only selected optimized publishable actual imagery |
| `tests/project-index.test.ts`, `tests/github-*.test.ts` | Behavior/data-policy unit tests |
| `tests/portfolio.spec.ts`, `playwright.config.ts` | Interaction/failure/responsive browser verification |
| `README.md`, `.env.example`, `docs/verification/portfolio.md` | Setup, maintenance, safe configuration and actual validation results |

Exact component subdivision may be reduced where it creates no meaningful boundary. Do not introduce a generic design-system abstraction for one page.

- Explicitly exclude Portfolio, Portfolio-2, Thousand Folded Wishes, and Pundo from page entries/counts/media; retain Pundo 2 as a separate included project.

### Task 1: Establish repository, toolchain and accurate project content

**Files:** create package/lock/config files, `content/profile.ts`, `content/projects.ts`, `docs/ASSET_PROVENANCE.md`; update `.gitignore`, `docs/PROJECT_CATALOG.md`; preserve existing prompt/spec/docs.

**Interfaces:** produces `Category = 'AI' | 'Software' | 'Hardware'`, `ProjectStatus = 'prototype' | 'project' | 'concept' | 'workspace'`; `Project { id: string; name: string; summary: string; categories: Category[]; status: ProjectStatus; stack: string[]; repository?: string; repositoryVisibility?: 'public' | 'private'; media?: { src: string; alt: string; width: number; height: number }; featured?: { order: number; problem: string; contribution: string; outcome: string; limitations?: string; teamCredit?: string } }` and `projects: readonly Project[]`. All ids unique; no secret/config data in content.

- [ ] Inspect current root and ancestor `AGENTS.md`, Git state and remote head again before mutations. Remote is no longer empty: root `PORTFOLIO_PROMPT.md` exists. Compare its current contents with the local prompt and preserve both user requirements and discovery additions. Use the suitable current folder; no new worktree is needed by default.
- [ ] Establish the local Git checkout against the actual current remote without overwriting working files. If `.git` is absent, initialize a named feature branch, add/fetch origin and attach it to remote main using a working-file-preserving operation; never use hard reset/clean. Record baseline SHA and local files before changes. Follow sandbox approval requirements for `.git` writes.
- [ ] Resolve compatible stable Next.js/React/TypeScript versions using the official registry, verify Node support and pin them in the lockfile. Add scripts `dev`, `build`, `start`, `lint`, `typecheck`, `test`, `test:e2e`; use a supported test runner for TypeScript (Node native strip-types for pure `.ts` tests is sufficient). Read installed framework docs. Add only necessary development tools and no paid service.
- [ ] Review all 29 included catalog entries against available public README/package evidence and the user's reference. Rewrite short summaries in original factual language. Do not transfer private code or notes. Keep unknown/archive outcomes out of the public copy; keep source/provenance notes in docs. Concepts Asay and Alagad are explicitly labeled, Bej Vault is a workspace, Para is Software/mobile. Mark private-repository entries without a public repository action.
- [ ] Review existing Portfolio-2 project images and other repo media for actual-app authenticity and suitable data. Import appropriate media for as many archive entries as available, optimizing dimensions/file sizes. Bej studio and OmniPoint register use actual captures; pill main photo retains watermark/credit. Omit pill display close-up initially. Missing capture means no `media` field, not a placeholder. Record source, attribution and selection for every published image.
- [ ] Validate content by typechecking and a source audit: 29 included catalog entries, unique ids, valid categories, no missing featured media, no private repository CTA, no live-demo link for owner-only Bej Hub. Verify empty concepts have no invented stack/outcome. These are content checks; avoid a test that only snapshots wording.
- [ ] Commit only explicit toolchain/content/docs/assets paths with message `chore: establish portfolio content and tooling`.

### Task 2: Build the selected visual shell and featured cases

**Files:** `app/layout.tsx`, `app/page.tsx`, `app/globals.css`; section components; `components/MotionController.tsx`.

**Interfaces:** consumes Task 1 content. Produces semantic sections `#home`, `#featured`, `#projects`, `#about`, `#activity`, `#contact`; `MotionController()` enhances registered `data-enter`/`data-layer` elements without hiding static HTML. `FeaturedProjects({ projects: readonly Project[] })` uses featured records only.

- [ ] Apply paper `#f5f5ef`, green `#173c30`, lime `#c9f388`, ink `#1e2927`, muted `#65716b`, divider `#dcded5`; Arial/Helvetica sans and Courier New labels. Implement equal edges, max 1290px content and 16–24px mobile gutters. Keep content natural-height.
- [ ] Implement name/role/short factual hero, approved mailto primary, secondary projects anchor and layered Bej/OmniPoint visuals. Header has meaningful anchors, skip link and accessible compact mobile navigation. No fabricated availability or anonymous brand mark copied from the reference.
- [ ] Implement three inline case studies using confirmed roles/outcomes, AI-assistance disclosure where relevant, Code&Craft team attribution and appropriate public repository links. Keep substantive descriptions in text areas, not beneath images. Add any detail disclosures only when they improve scanability.
- [ ] Implement short about/education/skills and contact/footer from confirmed facts. Skills relate to the featured work; n8n is learning context, not delivered expertise. No unapproved résumé, portrait, employment, metrics or certificates.
- [ ] Add one-time 350–600ms entrance, small offsets and subtle layer animation. Initial HTML is readable. Pause control stops continuous motion, including hover when paused; reduced-motion shows static final states. Observe offscreen/hidden state. Keep card/button interactions subtle and keyboard focus obvious.
- [ ] Run typecheck/build and inspect a first desktop/mobile render; fix clipping and missing images before continuing. No test for merely matching static markup.
- [ ] Commit explicit shell/section/style files with `feat: build reference-led portfolio and featured work`.

### Task 3: Add the complete category project index

**Files:** `lib/project-index.ts`, `components/ProjectIndex.tsx`, `tests/project-index.test.ts`; relevant CSS.

**Interfaces:** `filterProjects(items: readonly Project[], category: Category | 'all'): readonly Project[]`; `categoryCounts(items: readonly Project[]): Record<Category | 'all', number>`; `ProjectIndex({ projects: readonly Project[] })` renders full SSR baseline and client category selection.

- [ ] Write failing tests for: All work returns all ids once in source order; a dual-tag software/AI entry appears in both relevant categories once; counts derive from data; an empty category returns an empty list without mutating input. Assert a private or concept record is still included in the relevant result rather than silently dropped.
- [ ] Run `node --test tests/project-index.test.ts` (or pinned runner equivalent), confirm missing helper failure, then implement helpers and rerun to pass.
- [ ] Implement named category button group All work/AI/Software/Hardware with `aria-pressed`, derived counts and a polite result announcement. Keep focus on the chosen control. Show all 29 initially, no pagination, no auto-advancing gallery or unrelated search/sort controls. Wrap navbar on mobile.
- [ ] Render media-backed cards only where real media exists; missing-media entries use consistent text composition with category/status and public evidence when available. Featured index entries may anchor to inline cases. No dead project/modal button, fake demo or “LINK TO ADD”; private status is text, not a broken link. Use no placeholder success claims for concepts.
- [ ] Add browser assertions in Task 6 for keyboard category switching, displayed result count, long-name wrapping, private-link omission and no-JavaScript full catalog. Run helper tests, typecheck and build.
- [ ] Commit with `feat: add all-project index with category navigation`.

### Task 4: Implement official GitHub data validation and caching

**Files:** `lib/github/types.ts`, `normalize.ts`, `client.ts`, `cache.ts`, optional aggregate endpoint; `tests/github-normalize.test.ts`, `tests/github-client.test.ts`, `tests/github-cache.test.ts`.

**Interfaces:** `ContributionDay { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 }`; `ContributionSnapshot { username: 'd-Lucx'; from: string; to: string; fetchedAt: string; total: number; days: ContributionDay[] }`; `CalendarState = { kind: 'ready' | 'stale'; snapshot: ContributionSnapshot } | { kind: 'unavailable'; reason: 'not-configured' | 'upstream' | 'expired' }`.

`rollingRange(now: Date): { from: string; to: string }` creates exactly 365 UTC dates including current day. `normalizeCalendar(payload: unknown, range: { from: string; to: string }, fetchedAt: string): ContributionSnapshot` validates fixed identity, date sequence, integer nonnegative counts and supported levels, trims only legitimate boundary spillover and rejects missing/duplicate days. `fetchContributions({ now, token, fetchImpl }): Promise<ContributionSnapshot>` performs fixed-user GraphQL with a bounded timeout. `calendarState(snapshot: ContributionSnapshot | null, now: Date): CalendarState` applies 48h/7d thresholds. Cache adapter injects its clock/fetch dependency for deterministic policy tests.

- [ ] Write failing tests for UTC midnight around US timezone dates; leap-year window still 365 dates; malformed/missing/duplicate days rejected; all-zero genuine response accepted; untrusted negative/fractional counts or GraphQL errors rejected; total consistent with normalized day counts. Never invent zeros to make a test pass.
- [ ] Add client tests for HTTP 200 GraphQL errors, 401, 403/429, invalid JSON, null user and timeout; assert error handling never serializes the bearer token. Assert no public endpoint supports arbitrary upstream URL/user or forced refresh. No automatic retry on rate-limit response.
- [ ] Add cache-policy tests: valid snapshot remains usable before 48h, stale at 48h, unavailable at seven days; old data retains its own date range during a failed refresh; expired/malformed response never replaces a last-good valid entry; no snapshot means unavailable.
- [ ] Run targeted tests and confirm initial failure, implement validation/client/state helpers, then rerun passing tests. Keep auth/data modules server-only and raw API exceptions out of browser messages.
- [ ] Use pinned-version documented Vercel-persistent cache support for successful normalized snapshots with six-hour revalidation. Preserve timestamp/range with the data and test last-good retention behavior. Cache misses may require a fetch; report any persistence limitations. Do not treat local memory as durable and do not add an external database by default.
- [ ] Add a server-only `GITHUB_TOKEN` environment requirement and `.env.example` without secrets. Token setup instructions use private local/Vercel env, never chat. Without configured token, render unavailable; this is not final live-data acceptance. Public-only aggregation default; private counts depend on approved permissions/settings and must not reveal private details.
- [ ] Run typecheck/build and targeted tests, then commit with `feat: add validated server-side GitHub contributions`.

### Task 5: Render the accessible contribution calendar

**Files:** `components/ContributionCalendar.tsx`, `ContributionDetails.tsx`; calendar CSS; state integration in page or aggregate route.

**Interfaces:** `ContributionCalendar({ state: CalendarState })` receives sanitized data only. Loading component reserves calendar dimensions and communicates loading without fabricated dots. `ContributionDetails({ days: readonly ContributionDay[] })` exposes every exact date/count through native disclosure and semantic table.

- [ ] Implement exact date-range/UTC label, total, cached fetch timestamp, intensity legend and short explanation that contributions include more than commits and are not a quality score. Show GitHub's possible update delay and public/private limitations concisely.
- [ ] Implement `ready`, zero-contribution, `stale`, `unavailable` and loading views. Stale remains explicitly dated; expired hides old graph. All states preserve GitHub link and the rest of the page. Apply retry/reset guidance internally, not a technical wall in the user flow.
- [ ] Fit a readable grid to desktop. At mobile confine any horizontal scroll to a labeled focusable region with a visible hint. Daily table/details provide keyboard and touch access, independent of color/hover. Avoid 365 unnecessary tab stops.
- [ ] Exercise rendered states with test-only fixtures and verify the public bundle contains no synthetic fallback activity or token. Run build/typecheck and data tests.
- [ ] Commit with `feat: render accessible contribution calendar and fallback states`.

### Task 6: Complete interaction, accessibility and visual verification

**Files:** `tests/portfolio.spec.ts`, `playwright.config.ts`, `docs/verification/portfolio.md`; fix responsible components as findings require.

**Interfaces:** browser fixtures supply sanitized calendar states through the server module boundary or intercepted same-origin endpoint. Test fixture data never appears in production content. Public UI includes no test-state switches.

- [ ] Add behavior tests for mailto/contact, section anchors, category focus/counts, dual-category entries, mobile navbar, native detail/enlargement controls if present, all images loading, private/concept no-dead-link behavior, and long titles.
- [ ] Test JavaScript-disabled full catalog and readable hero/cases. Emulate reduced motion; confirm continuous animation stops, pause/resume works, content stays visible, and hidden/offscreen work pauses. Check keyboard focus and touch behavior rather than testing only DOM classes.
- [ ] Exercise calendar success, genuine empty, upstream/GraphQL error, rate limit, token missing, stale and expired paths. Assert fallback leaves contact and project navigation usable. Ensure non-hover daily count access.
- [ ] Inspect built site at widths 320, 390, 768, 820, 1024 and 1440. Verify no page overflow, text clipping, overlapping actions, invisible content or forced mobile height. Capture actual screenshots and inspect them. Add automated overflow checks and review text contrast, labels, focus, heading structure and touch targets; run an appropriate accessibility checker if available, without treating automation as a full accessibility certification.
- [ ] Run relevant Design Taste Frontend copy/consistency/layout/shoot/performance/gate scripts on the built site with version-appropriate server mode. Read its referenced implementation/check documentation first. Keep script runs foreground and scoped; disclose unavailable checks and exact waivers for reference palette/layout, runtime calendar and selected restrained motion. Do not edit the skill kit to silence checks.
- [ ] Run `npm run lint`, `npm run typecheck`, `npm test`, `npm run build`, and `npm run test:e2e`. Record actual results and remaining findings, then request the required code review per applicable skill. Fix actionable issues and repeat only affected checks.
- [ ] Commit fixes/tests/evidence with `test: verify project filtering calendar states and responsive layouts`.

### Task 7: Metadata, secure live-data acceptance and handoff

**Files:** indexing/share metadata files, `README.md`, `.env.example`, `docs/verification/portfolio.md`; approved content updates as needed.

- [ ] Create original favicon and share image consistent with name/reference. Add page title/description and social metadata. Set canonical and production sitemap only from real `SITE_URL`; document unknown-domain behavior and keep preview environments non-indexable. Test metadata with and without production origin.
- [ ] Write setup commands, Node/dependency versions, content-update example (add a categorized n8n entry), media-credit guidance, env variable names, calendar source/count semantics/refresh behavior and cache limitations. Explain how to configure server-only `GITHUB_TOKEN` privately and least-privilege public counts. Never ask the user to paste a token into chat.
- [ ] If a suitable privately configured token is available, run one genuine fixed-user query, inspect cost/remaining/reset metadata and aggregate data, and confirm real rendering. If token is not configured, finish all independent work and report the exact live-data acceptance blocker; do not claim the calendar acceptance criterion is met. Secure setup is required, not a fabricated graph.
- [ ] Review staged files for secrets/session material, misleading copy, unapproved private material and unrelated changes. Confirm `.superpowers/` and `.verification/` are excluded. Reconcile remote updates without overwriting user work. Run final relevant checks on the exact source being committed.
- [ ] Commit final docs/metadata with `docs: document portfolio maintenance and GitHub setup`; push the authorized source branch to d-Lucx/Portfolio-3 after verifying its actual remote/head. Do not merge, create a Vercel project or deploy without the corresponding authorization.
- [ ] Deliver branch/commit links, setup/update instructions, validation evidence, actual Design Taste gate status and explicit remaining limitations. Omit an unsupported claim that performance, WCAG conformance, production operation or live contribution data has passed.

## Plan self-review

Spec coverage checked: identity/contact, single-page reference direction A, featured roles/outcomes/media, all 29 categorized entries, maintenance, GitHub privacy/data/date/cache/failure behavior, accessibility, responsive widths, indexing and repository delivery are assigned above. Interfaces consistently use `Project`, `Category`, `ContributionSnapshot` and `CalendarState`. Review-focus cases are assigned to specific test steps. No product code has been written as part of this plan.

## Execution recommendation and required review

Recommend **Native** execution in this session: the tasks share one compact content model and visual system, so one implementer can maintain consistency and request an independent whole-change review at the end. Subagent-driven implementation is the alternative if the user wants a fresh implementer/reviewer per task. The requested writing-plans workflow requires the user to review this plan and choose the method before implementation.

