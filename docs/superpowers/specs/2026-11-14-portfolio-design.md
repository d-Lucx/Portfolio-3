# Rene Christian — portfolio design brief

Status: user approved the design brief, with an explicit addition: show the broader project collection with categorized navigation and four exclusions. The initial fresh builder reviewer reported “nothing important left.” The approved addition is specified below. This brief consolidates current decisions; historical discovery notes remain in `PORTFOLIO_PROMPT.md`. Implementation-plan review is the next required workflow step.

## Intent and audience

Help recruiters and hiring managers evaluating AI automation jobs understand Rene Christian's current capabilities through real project evidence and make contact. Position Rene as a **Computer Engineering Student focused on AI Automation**. n8n is being learned; there is no confirmed completed n8n case study or established n8n proficiency claim.

Primary action: **Contact me**, linking to `mailto:renechristianobeja@gmail.com` (publication explicitly approved). Suggested secondary hero action: View projects, an anchor to selected work. The secondary action is a builder proposal included for approval of this brief.

## Decisions confirmed by the user

- Public display name: Rene Christian.
- Education: BS Computer Engineering, University of Mindanao – Tagum College, 2021–present. Use student wording, despite the old visual reference saying graduate.
- Single-page structure. No separate project-detail routes.
- Preserve the principal reference's appearance: warm paper, forest green, lime, plain sans typography, small monospace engineering labels and generous margins.
- Motion option **A** selected after the browser comparison: restrained entrance, layered actual screenshots, gentle movement and small interaction feedback. Interactive 3D option B is not selected.
- Actual app/site imagery preferred for projects. Bej Hub and OmniPoint have actual application captures; Smart Pill Dispenser uses supplied physical-device and running-display photographs, with optional CAD evidence.
- Vercel hosting. No preferred framework; Next.js/TypeScript is the builder recommendation below. Hosting preference does not authorize deployment.
- Project selection delegated to the assistant. Initial selection: Bej Hub, OmniPoint, Smart Pill Dispenser, in that order.
- Following brief approval, user requests **all projects shown with a navbar categorizing the different projects**. Preserve the three featured cases and add a full categorized project index; the original three-project limit and no-filters exclusion are superseded.
- Explicit exclusions: **Portfolio, Portfolio-2, Thousand Folded Wishes, and Pundo**. Do not include these in page content, counts, media or filters. **Pundo 2 remains included** as a distinct project. The reference has 33 entries; the included catalog has 29.

## Approaches considered

### Visual approach selected

**A — restrained motion and screenshot layers:** reference fidelity, authentic project evidence, CSS-driven movement and lower interaction complexity. User selected this approach.

**B — interactive 3D hero:** the comparison demonstrated CSS 3D screenshot planes controlled by pointer/slider. A modeled WebGL scene would add asset and performance work. Not selected; do not build it by default.

### Framework included in the approved brief

**Next.js + TypeScript + CSS, recommended:** mostly server-rendered page, small browser interaction layer, server-only GitHub integration and Vercel hosting. Matches technologies already present in Rene's projects. Keep content in a typed editable collection and avoid a component-library dependency for a custom design.

**Astro + TypeScript, alternative:** a good content-focused static baseline, with the Vercel adapter for on-demand work. Introduces another component format and is not required to achieve the selected direction.

Next.js was an assistant recommendation selected through the user's approval of this brief. Resolve supported exact package versions during setup; read the installed version's documentation before coding. Next.js is not chosen just because Portfolio-2 uses it.

## Page composition

1. **Header:** text identity Rene Christian and compact Computer Engineering label; anchor links Projects, About, Activity and Contact. Simple native anchor navigation; compact mobile navigation must expose meaningful labels. Skip link targets main content. No copied reference monogram required: a simple text identity is the builder default.
2. **Hero:** forest-green rounded field with name, focused positioning, a short factual introduction, Contact me and View projects. Use Bej Hub studio as the dominant screenshot with OmniPoint as a supporting layer. The wording in the visual study is provisional. Include no availability badge or invented success statistic. Keep important text visible if JavaScript fails.
3. **Selected projects:** three spacious editorial entries, each pairing a substantial text area with actual media. Use consistent content edges and generous gaps. At desktop, text and media sit side by side; mobile stacks text and media with natural height. Avoid tiny cards that conceal the contribution. Include problem, Rene's work, relevant decisions, evidence/outcome, stack and useful repository links. Additional detail can use native disclosures on the same page, with a substantive summary always visible. Descriptions belong in the text area, not as captions under images.
   **All-project index, added by user:** below the featured cases, show the 29-entry included catalog from `docs/PROJECT_CATALOG.md`, subject to source review for accurate descriptions/statuses. A category navbar offers **All work, AI, Software, Hardware**, default All work. Projects may appear in multiple categories. Use buttons with `aria-pressed` in a named group, not links that pretend to navigate to separate pages. Keep the global page header for section anchors. Counts update from data; announce filtered count politely and keep focus on the chosen button. No search, sorting, pagination or carousel is required. At mobile, category controls wrap rather than overflow the page. All entries render without JavaScript; filtering enhances that baseline. Display actual media when available, and use intentional text entries where it is missing—never simulated screenshots or empty image frames. Empty repositories Asay and Alagad remain visible as concepts, not completed apps. Private repositories are identified as private with no inaccessible repository CTA; projects with no usable public link remain meaningful static entries. Featured index items can link to the inline case study. No “LINK TO ADD” controls. Source descriptions are leads to review, not verified outcomes. Preserve transparent prototype/concept/notes status and no invented individual contribution claims for archived work. Para is categorized as Software/mobile; phone use alone does not make it hardware work.
4. **About and skills:** brief student story connecting AI workflows, reliable software and software–hardware integration. Education is confirmed. Group tools by demonstrated work rather than arbitrary proficiency bars. Include AI-assisted development transparently in the relevant project text. Mention n8n as currently learning only if it helps; do not imply delivered n8n work.
5. **GitHub activity:** genuine d-Lucx rolling-year calendar, clear exact dates, contribution summary, freshness, legend, accessible daily details and graceful fallback.
6. **Contact/footer:** repeat Contact me and visible email; link GitHub. Add Code&Craft/team asset credit. LinkedIn is a supplied professional cross-reference, but its public-profile link is omitted initially unless later selected. No phone, precise address, availability, portrait, résumé, certificates, testimonials or employer claims are needed to complete the initial scope.

## Project facts and media

### Bej Hub — lead case study

Personal project, ongoing improvements. Rene created the project with AI assistance. Repository describes mission assignment, Manager → Researcher → Writer handoffs, clarification and human draft approval. User provided live-AI Discord logs and a completed output: conflicting request/source evidence prompted clarification, then an approved draft was delivered. Repeated clarification is an observed limitation; do not claim flawless autonomy, word-count compliance or verified web research. The supplied run explicitly disabled Google Search.

Use supplied actual studio screenshot (`bej-office.png`) as main media. Optional completed-output evidence can be shown separately within project detail. Hosted URL is owner-only, restricted to Rene's Gmail; do not advertise a public live demo or change authentication. Repository: `https://github.com/d-Lucx/Bej_Hub`.

### OmniPoint — supporting reliability case study

Personal project created with AI assistance. Local verification passed TypeScript, register bundling, 2 helper tests and 21 milestone/quota tests including subtests. The offline sale → terminal process death → recovery → dropped cloud response → retry/synchronization scenario passed on Windows with Node 24.22.1, SQLite 3.53.4 and PostgreSQL 17.12. This supports a bounded test result, not production readiness or live merchant use. See `docs/verification/2026-11-14-omnipoint.md`.

Use actual register screenshot and optionally a recovery view after inspecting its contents. Main image source: `C:/Yan2_Projects/POS/OmniPoint/docs/ui-refinement/after-register-1366.jpg`. Repository: `https://github.com/d-Lucx/OmniPoint`. No fabricated live demo.

### Smart Pill Dispenser — supporting embedded automation case study

Code&Craft team project for senior high school clients. Rene programmed everything on the Raspberry Pi and integrated software/hardware. Teammates created the 3D model and did soldering/wiring. User confirms all required functions were successfully demonstrated and device was given to the client. Do not infer medical validation, sustained reliability or every optional documented feature having been demonstrated.

Main media: supplied actual-device photo with Code&Craft watermark intact. Optional secondary media: selected assembled/exploded CAD views, explicitly credited as team CAD. The supplied real-display photograph is available but contains medicine and schedule text; omit that close-up from public assets initially rather than infer whether it is sample or personal data. It can be added later if the user confirms appropriate use. Do not reconstruct a fake dashboard.

Repository: `https://github.com/d-Lucx/Pill-Dispenser`. Existing user manual and algorithm notes support Python, Raspberry Pi and SMS/Telegram context. Inspect source/package evidence to narrow final stack labels; no sensitive config file should be copied.

### Media handling

User-provided images are staged privately under `.superpowers/brainstorm/motion-comparison/content/`; retain their provenance. Implementation creates optimized public derivatives only for selected approved uses. Keep original aspect ratios, set dimensions, avoid stretching and preserve visible team credit/watermarks. Do not use AI-generated screens or remove the Code&Craft marks. Existing images supplied in response to the portfolio-media request may be used for that purpose within these attribution boundaries.

Image optimization/resizing is normal implementation; do not change depicted app behavior. Use a readable large screenshot and, if helpful, a working native dialog/enlargement for detail. No decorative screenshot frame should look like a clickable app control.

## Visual system

Reference observations and sources live in `DESIGN.md`. Adopt these baseline tokens, subject to contrast/fit checks:

| Role | Value |
| --- | --- |
| Paper | `#f5f5ef` |
| Primary green | `#173c30` |
| Lime accent | `#c9f388` |
| Main ink | `#1e2927` |
| Muted ink | `#65716b` |
| Divider | `#dcded5` |
| Raised surface | `#ffffff` |
| Sans | Arial, Helvetica, sans-serif |
| Technical labels | Courier New, monospace |
| Spacing scale (adaptation) | 4, 8, 12, 16, 24, 32, 48, 64, 80px |
| Hero radius | 16px desktop / 12px mobile |
| Media radius | 8–12px |
| Desktop content width | max 1290px, equal left/right edges |
| Mobile content gutter | 16–24px depending on viewport |

Use headings around the reference's 67px desktop hero / 49px mobile as starting points, with fluid sizing and safe line breaks. Body 16px minimum as the proposed readability adaptation; small technical labels generally 11–12px, never essential information only in tiny text. Interactive targets aim for 44px; verify WCAG 2.2 AA requirements and text contrast, not only appearance.

Motion: a short one-time entrance, approximately 350–600ms; small 8–12px offsets. Subtle layer movement must be slow and small; offer a clearly labeled pause control for continuous motion, stop when offscreen/hidden, and show still content under reduced motion. Project links/buttons get subtle hover/press feedback. No scroll-jacking, pointer tilt, mandatory preloader or content hidden indefinitely. Use CSS and a small intersection-observer script; no GSAP, WebGL or animation library is assumed.

## GitHub calendar design

### Source and privacy

Use GitHub's maintained official GraphQL API (`https://api.github.com/graphql`), not a scraping proxy. Query only the fixed user d-Lucx and contribution-calendar date/count/level/summary fields, plus rate-limit metadata for operational handling. Never return repository details or private event descriptions to the browser.

Server/build environment name: `GITHUB_TOKEN`, never `NEXT_PUBLIC_...`. A dedicated minimally scoped read credential must be configured privately before real-data acceptance can pass; connector credentials must not be extracted. No need to paste secrets into chat. Do not request broad private repository access. Initial display is public contribution activity; private/internal activity can be omitted depending on credential scopes and profile settings. Do not silently expand scopes or change profile privacy to increase totals.

GraphQL documentation describes contributions including commits, issues and pull requests; counts are not commits alone and are not an engineering-quality score. Private counts depend on permissions and the account's sharing settings. Explain that limitation in concise accessible text. GitHub can take up to 24 hours to reflect qualifying new commits; do not call the calendar real-time.

### Dates and caching

Proposed range: latest 365 UTC calendar days, including the current UTC day. Calculate dates at runtime; label both endpoints and UTC to avoid a fixed 2026 range. Query from start-of-first-day through the current instant; trim any out-of-range returned days. A leap-year boundary must still show exactly the intended 365-day interval. Do not substitute zeros for missing malformed data.

Use a server-side shared cache for successful validated snapshots, targeting six-hour revalidation on subsequent requests. No cron is needed to keep visited pages updating; no traffic means no guaranteed background refresh. Preserve fetch timestamp and query date range together. Key by username/range policy without exposing a secret. Use the pinned Next.js version's documented persistent caching facility on Vercel; exact API choice is left to the builder. Do not rely solely on process memory or a local file on serverless infrastructure. A small same-origin endpoint may serve sanitized aggregate data to the client if needed; it accepts no arbitrary username/upstream URL and has no public forced-refresh control.

Show “Fetched …” and indicate cached data. If a last-good snapshot is available during a transient upstream failure, show it with its actual range and freshness, never relabel old data as a current range. Mark stale after 48 hours; after seven days without a valid refresh, show unavailable instead of an aging graph. If a cache is absent/evicted or the token is missing, show unavailable with a GitHub link. Actual cache behavior and failure retention must be exercised before claiming them; no database service is assumed.

GitHub documents a typical personal-token limit of 5,000 GraphQL points per hour, plus secondary limits. Measure the actual query cost during live verification rather than assume it. The intended cache budget is roughly four successful refreshes per day per warm cache key; cold misses, multiple regions and cache resets can add calls. Honor 403/429 and reset/retry headers, use a bounded timeout, validate GraphQL errors even on HTTP 200, and avoid retry loops during a rate-limit response.

### Accessible behavior and states

- Reserve a stable calendar area; loading text/skeleton has no simulated activity.
- Show range, total, green intensity legend and a readable contribution summary.
- Give keyboard/touch users a visible way to read exact daily date/count values, such as a native disclosure containing a semantic daily table. Graph cells need not create 365 tab stops. An optional tooltip must work on focus/touch, but cannot be the only access path.
- At small widths, confine horizontal scrolling to a labeled focusable calendar region with a visible instruction; no page-level horizontal overflow.
- Real zero-contribution response: explicit empty-state summary and genuine zero data. Missing/error data: unavailable state, never an empty success.
- Stale, unavailable and loading text do not hide projects or contact. Always provide a working GitHub profile link.

Official sources checked 2026-11-14:

- [GitHub contribution schema](https://docs.github.com/en/graphql/reference/users#contributioncalendar)
- [GraphQL rate limits](https://docs.github.com/en/graphql/overview/rate-limits-and-query-limits-for-the-graphql-api)
- [Contribution freshness](https://docs.github.com/en/account-and-profile/how-tos/contribution-settings/troubleshooting-missing-contributions)
- [Next.js server/client separation](https://nextjs.org/docs/app/getting-started/server-and-client-components)
- [Next.js caching](https://nextjs.org/docs/app/getting-started/caching)

No authenticated contribution query has been run for Portfolio-3 yet. Source documentation is verified; live credential/scoping compatibility and actual counts remain implementation verification tasks. Genuine live data is required for eventual completion.

## Content maintenance and builder decisions

Use a typed central content collection for identity, all project descriptions, category tags, statuses, roles, stacks, evidence links, optional media paths/alt text and ordered featured selection. Rene can update it with repository edits; adding a future n8n project should not require changing page layout. README must give a worked update example. The explicitly requested category filters are included; no CMS, database, analytics, blog, theme switch, chatbot or contact form is included in the initial build.

Use mailto contact, approved email and GitHub. Omit résumé download and portrait until assets are selected; do not create dead controls or public “coming soon” placeholders. Use supplied screenshot imagery instead of stock photography. Do not add unconfirmed credentials, competition, availability, location or employment dates.

SEO: descriptive page title, summary, Open Graph/Twitter metadata, actual share image, favicon, sitemap and robots. Production origin is not known. Document `SITE_URL`; set canonical and production sitemap origin only once real domain is known, avoiding fabricated domains. Preview deployments should not be indexed. Exact metadata wording is left to the builder within confirmed facts.

## Verification and delivery boundaries

Before completion: run relevant build, lint and type checks; meaningful calendar parsing/date/cache/failure tests; link and keyboard interaction checks; reduced-motion checks; contrast review; image-load/dimension checks. Inspect 320, 390, 768, 820, 1024 and 1440px layouts for overflow, clipping, collisions and navigation. Test calendar token-missing, error, rate-limit, empty, stale and normal responses, with a real successful GitHub query for live-data acceptance. Never put fabricated activity into public UI. Isolated automated fixture data may be used in tests only.

Apply Design Taste Frontend's relevant copy, consistency, layout, screenshots, performance checks and finish gate to the actual built page. Resolve findings or disclose exact justified waivers. User-selected reference tokens, normal mobile content height and restrained A motion override random dealers, forced screen heights and mandatory effects. The skill's static-export prescription conflicts with the recommended runtime calendar; preserve the runtime integration and record the waiver. No contact `.example` substitution: the real email is approved. No claim of gate passage until it runs.

Commit source/docs to d-Lucx/Portfolio-3, preserving existing prompt, unrelated files and user work. `.superpowers/` and `.verification/` stay ignored; never commit session keys, test clusters, raw working logs or credentials. Git initialization/branch setup is planned after design approval. Deployment is a later separately requested action; no Vercel project creation or production changes are authorized by this brief alone.

## Items that need no additional discovery to start planning

- Phone, portrait, résumé, availability, credentials and extra social links: omit initially.
- Smart Pill Dispenser direct dashboard capture: not required; actual-device photo and team CAD provide truthful visuals.
- Production domain and GitHub token: runtime/setup inputs needed before their respective live acceptance checks; document missing state and secure configuration steps. They do not prevent planning the page.
- Framework package versions, exact CSS organization, image derivative sizing, test runner, cache API and compact mobile navigation mechanics: builder choices within this brief, verified against actual tooling.

## Approval

User approved this brief, including the recommended Next.js stack, page composition, secondary action, initial omissions and calendar approach, with the all-project categorized index addition recorded above. The writing-plans workflow has been invoked. No final site has been scaffolded; existing HTML is the explicitly accepted throwaway visual study only.

