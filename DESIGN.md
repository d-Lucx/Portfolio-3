# Portfolio 3 design discovery

Status: design brief approved by user, with categorized project index added and four explicit project exclusions. This file holds reference observations and the decision record; the approved specification is authoritative.

The approved brief is [the portfolio design specification](docs/superpowers/specs/2026-11-14-portfolio-design.md). Its initial builder check reported “nothing important left.” The user subsequently requested a categorized index and excluded Portfolio, Portfolio-2, Thousand Folded Wishes and Pundo; Pundo 2 remains. The included catalog now has 29 entries. Earlier pending discovery notes below are historical where superseded by confirmed updates. Implementation-plan review is next.

## Selected motion direction

Smart Pill Dispenser media is now available: main visual will be the supplied finished-device photo, with optional supporting actual-display photo and team CAD views. Preserve Code&Craft watermark/credit and separate hardware photography from CAD in text/alt descriptions. Use only selective secondary media rather than all nine similar CAD angles. No dashboard recreation is necessary for the initial portfolio.

User selected **A** after the interactive comparison: gentle screenshot-layer animation, a restrained entrance, and small interaction details. Preserve the primary reference's visual system. No custom interactive 3D scene is selected. This supersedes earlier pending-selection notes; full site design approval is still pending.

The updated study is `.superpowers/brainstorm/motion-comparison/content/motion-directions-v2.html`, using the user's new actual Bej Hub studio screenshot as the main hero image, with an OmniPoint screenshot layer. The Bej Hub card also shows the studio. Saved hero preview: `.superpowers/brainstorm/motion-comparison/selected-a-bej-studio.jpg`.

## Latest confirmed visual preference

The user wants no changes to the primary reference's appearance, requests animation and/or 3D design, and prefers screenshots of the actual app or website for every project. Reference fidelity is confirmed; the complete design and specific motion/3D approach remain unapproved.

Proposal for comparison: (A) preserve the reference with restrained motion and layered screenshot depth using lightweight CSS, or (B) add one custom interactive 3D hero scene while keeping actual screenshots for project evidence. A offers lower load and maintenance cost; B adds visual complexity and requires stronger mobile/performance fallbacks. No product code or prototype has been authorized through design approval yet.

Both approaches must support reduced motion, keyboard/touch use, readable static states and authentic screenshots. Do not use generated UI or design-tool exports as proof of working application behavior.

### Reviewable motion study (awaiting selection)

The user accepted an interactive comparison. File: `.superpowers/brainstorm/motion-comparison/content/motion-directions.html`. Option A uses floating screenshot layers and restrained entrance motion. Option B demonstrates pointer/slider-controlled CSS 3D screenshot planes; it is not a custom WebGL scene or 3D device model. Actual OmniPoint and user-supplied Bej Hub output screenshots are used in both.

Desktop/mobile images and image loading were inspected in-browser; option switching, contact-preview dialog and pause/resume were exercised. No page-level overflow was measured at 1440×1000 or 390×844. These limited prototype observations do not constitute eventual-site acceptance or a finish-gate pass. Reduced-motion CSS is included but was not tested through emulation. Saved desktop images: `study-a-desktop.jpg` and `study-b-desktop.jpg` alongside the study's content directory. No final direction has been selected.

## Primary reference observation

[Rene engineering portfolio](https://rene-engineering-portfolio.cutedingo4.chatgpt.site) was opened in the in-app browser on 2026-11-14. The visible page was titled “Sign in required” and displayed “Log in to access” with a “Continue with ChatGPT” link. No portfolio content was visible.

The user subsequently signed in. The portfolio was inspected with desktop 1440×900 and mobile 390×844 viewport overrides. Screenshots were viewed in the browser tool; no screenshot files were saved. Computed styles were read from rendered elements. The following observations supersede the initial access blocker; login-page styling did not inform them.

### Observed visual tokens

| Token | Observed reference value |
| --- | --- |
| Paper | `#f5f5ef` |
| Primary green | `#173c30` |
| Lime | `#c9f388` |
| Ink | `#1e2927` |
| Muted | `#65716b` |
| Rule / border | `#dcded5` |
| White | `#ffffff` |
| Sans | Arial, Helvetica, sans-serif |
| Mono | Courier New, monospace |
| Body | 15px |
| Hero heading | 67px desktop; 49px mobile, mobile line-height 52.43px and tracking −3px |
| Section heading | 36px desktop; 31px mobile, mobile line-height 35.65px and tracking −1.5px |
| Main nav | 13px |
| Hero action | 12px |

These are observed source values, not approved production tokens. Several reference labels are very small; maintain the character while improving readability and checking contrast in the implementation.

### Observed composition and responsive behavior

- Warm paper ground; compact name/logo header; sparse Projects, About and GitHub navigation; private-access badge.
- Rounded forest-green hero with light heading and lime emphasis. Lime filled primary button and quieter text-link secondary action. Small spaced monospace eyebrow, rules and metadata establish an engineering-document tone.
- Hero pairs introduction with a tilted engineering-workspace illustration of connected software, hardware and intelligence modules. Mobile stacks illustration below copy. Its signature illustration should not be copied; use original, verified project visuals instead.
- Desktop hero computed width 1290px, horizontal inset approximately 67px, padding 57px 55px 26px and gap 30px. Projects use 70px vertical padding; about uses 60px top and 65px bottom.
- At the mobile override, hero computed width approximately 336px, x approximately 20px, padding 32px 25px 20px, radius 12px. Projects use 45px vertical padding; about uses 40px. These are measurements under the browser override, not independently normalized device specifications.
- Project index has a heading and count, category filters, search, result count and sort control; three cards across at desktop, one column at mobile. Search moves below the filter row on mobile.
- Cards combine softly tinted diagram panels, white text areas, category chips, stack labels and divided action rows. Some AI illustration panels use lavender. The explicit reference direction takes precedence over the skill's blanket violet ban if that accent is later selected; no lavender adaptation has been approved.
- Observed navigation links move to page anchors. No animation timing, reduced-motion behavior, modal interactions or filter correctness has been verified yet.
- The reference has 33 projects and an exploratory hero action. Proposed adaptation: curate three to five relevant projects and give recruiter contact the primary action. Awaiting user selection; do not treat reference content as approved facts.

## Confirmed constraints

- Public display name: **Rene Christian**, for header, hero, metadata and footer. Earlier preview labels using Rene Obeja are provisional and must be replaced in the implementation.
- Confirmed education: BS Computer Engineering, University of Mindanao – Tagum College, 2021–present. Use student wording; omit unconfirmed credentials and competition claims.
- Single-page portfolio selected by user: anchor navigation and inline project case studies, with about/skills, GitHub activity and email contact. No separate case-study pages in initial scope.
- Computer Engineering Student focused on AI Automation; target AI automation jobs.
- Genuine d-Lucx activity calendar; accessible detail and graceful failure behavior.
- Authentic project evidence, approved factual copy, one confirmed primary action.
- Confirmed primary button: **Contact me**, to initiate discussion of an AI automation role. Destination remains unapproved. **View projects** is still a proposed secondary action.
- Contact destination now confirmed: `mailto:renechristianobeja@gmail.com`. User approves publication. This supersedes the pending-destination note above. Use a direct email link; a delivery form is not selected.
- Bej Hub is confirmed owner-only. Its project actions should expose repository/case-study evidence rather than imply public app access. Do not change its authentication.
- Responsive checks at 320, 390, 768, 820, 1024 and 1440 pixels; WCAG 2.2 AA target.
- Reference fidelity takes priority over random skill palettes or layouts.

## Inputs pending review

- Primary action is confirmed as Contact me. User delegated project selection: Bej Hub leads, supported by OmniPoint and Smart Pill Dispenser. Supporting-project contributions and media remain to be confirmed.
- Desired reference fidelity (desktop/mobile access is now resolved).
- UI/UX Pro Max generated recommendations: search attempted, but Python executable inaccessible; no generated recommendations recorded.
- Secondary references: no visual findings yet.
- Stack, scope, maintenance, hosting and calendar integration.
- Hosting follow-up: **Vercel confirmed**; single-page scope already confirmed. Framework is delegated/recommended rather than user-selected; calendar integration and update workflow remain to be finalized.

## Framework approaches for the brief

Recommended: Next.js with TypeScript and CSS, mostly server-rendered with small interactive components. This supports keeping GitHub credentials server-side and matches the technologies already represented in the user's projects. Use Vercel's Node.js server capability where needed; do not assume a static export if the chosen calendar design requires a server.

Alternative: Astro with TypeScript, static content with a Vercel adapter where on-demand work is required. It is a viable content-focused option but introduces a different component format. No stack is installed yet; the recommendation is an assistant proposal for full design review, not a confirmed user selection.

Documentation: [Next.js server/client components](https://nextjs.org/docs/app/getting-started/server-and-client-components) and [Astro on Vercel](https://docs.astro.build/en/guides/deploy/vercel/). GitHub contribution API selection, actual refresh guarantees and rate-limit budget remain open. Vercel hosting selection does not authorize deployment.

## Content maintenance direction (proposal)

Use three substantive project entries initially: Bej Hub, OmniPoint and Smart Pill Dispenser, selected under the user's delegated judgment. Keep AI automation as the professional focus and identify the latter two as supporting software/embedded work. The user is learning n8n; avoid proficiency claims and empty future-project cards. A central editable project collection should allow later n8n case studies to be added or promoted without redesigning the page.

Confirmed attribution: Bej Hub and OmniPoint are personal projects built with AI assistance. Smart Pill Dispenser is a Code&Craft team project for senior high school clients: the user owns Raspberry Pi programming and software–hardware integration; teammates own 3D modeling, soldering and wiring. Case-study text must preserve these boundaries. Actual supporting-project outcomes and publishable media remain open.

## Future brief and token record

Continue documenting observations separately from proposed adaptations. Present approaches, record the user's selection, and obtain approval of the resulting design brief before implementation, as required by the requested brainstorming workflow.

## Skill resolutions

### UI/UX Pro Max generated recommendations, reviewed

Python was located via `uv python find` with a writable project cache: `C:/Users/Renelyn/AppData/Roaming/uv/python/cpython-3.12-windows-x86_64-none/python.exe`. Generation subsequently succeeded for `portfolio AI automation recruitment`, variance 4, motion 2, density 4. Raw recommendation is retained privately in `.verification/ui-ux-recommendations.md`; the earlier generation blocker is resolved.

Generated output suggested a product-demo/features pattern, AI-native interface, purple/cyan palette, Space Grotesk/DM Sans and a GSAP reveal. The palette, fonts, chatbot/product framing and additional library are not adopted: they conflict with the confirmed reference and portfolio purpose. Adopt its small reveal offsets, static reduced-motion state, visible focus, contrast and no-JavaScript visibility guidance. The selected reference tokens remain the design source of truth. No generated palette was persisted as an approved master.

### Supporting references actually reviewed

All nine secondary references were opened and their initial rendered presentation was visually inspected in the browser on 2026-11-14. Observations are limited to those views and relevant visible navigation/content; no full functional/accessibility audit or mobile sweep is claimed. Screenshots were viewed in tool output, not saved. No reference code, copy, photographs or signature effects are reused.

| Reference | Observed | Supporting idea and fit |
| --- | --- | --- |
| [BrewedOps](https://portfolio.brewedops.cloud) | Light sidebar profile/navigation, role-led headline, tool strip and clustered work/service previews | Keep project evidence easy to reach and link tools to work. Its service catalog, visitor counter and chatbot are not needed for this job-search page. |
| [Jheyem](https://jheyem-uwu.lovable.app/) | Pink portrait-led hero, role statement, hiring actions; visible document includes challenge/solution/impact case-study structure | Adapt the explanatory structure using verified outcomes. Keep the selected green theme and avoid importing unrelated metrics or testimonial sections. |
| [Crestler Mendez](https://www.behance.net/crestlermendez2) | Black/white branded banner, profile column and large work thumbnails on Behance | Let actual work occupy meaningful space; do not copy its graphic identity or Behance chrome. |
| [Nathaniel Laxamana](https://nathaniel-laxamana.vibepreview.app/) | Light sidebar, direct AI automation role, large headline and prominent contact/work actions | Clear opportunity/role and direct contact fit; no implication that Rene has its author's n8n, client or geographic experience. |
| [JL Parungao](https://jlparungao.dev/) | Initial intro state; subsequent visit showed dark hero, large plain heading, compact nav, work/résumé links and logo-led composition | Borrow clear hierarchy and concise navigation. No forced intro, copied logo effect or missing résumé control. |
| [Kuro10](https://kuro10.vercel.app/) | Dark blue engineering hero, hardware/software description, large identity and work action | Relevant cross-disciplinary framing, but use the approved paper/green system and confirmed skills. |
| [Binsoy69](https://binsoy69.vercel.app/) | Dark terminal/grid styling, portrait window, short software description, project/contact actions | Specific software description and visible actions fit; terminal effects and status claims are unnecessary. |
| [Stun Design](https://stundesign-portfolio.vercel.app/) | Dark orange portrait-led engineering/design hero, nav, work/CV actions and chat affordance; capture occurred during entrance | Grouping the engineering disciplines is useful. Do not adopt its distinct palette, intro or chat widget. No animation-quality conclusion from the transient capture. |
| [Raziel Renz](https://razielrenz.vercel.app/) | Minimal dark gallery with spatial project planes, showcase/list/slider controls and drag/scroll instruction | Work prominence is relevant; spatial gallery is not selected because the user chose motion A and inline accessible case studies. |

LinkedIn direct inspection reached its sign-up/auth wall. No live professional details were verified there; education is user-confirmed. Public d-Lucx GitHub profile loaded successfully; no fixed contribution total is copied into site content.

The user’s explicit visual reference overrides random dealers. Accessible content-driven mobile layout overrides rigid screen heights. Authentic evidence and restrained motion override mandatory spectacle or stand-in imagery where these conflict. User-approved real contacts override `.example` conventions. Verification must disclose applicable gate findings and any justified waivers; no finish gate has run because no site exists yet.

## Implementation refinements — 2026-11-14

Preserved approved reference tokens and natural-height layout. Accessibility testing required darkening muted surface text from #65716b to #5d6961; small label contrasts and category-count opacity were corrected. Header and body use equal outer content edges. Motion remains the approved screenshot-layer option A, with pause, reduced-motion, offscreen and hidden-tab handling. No WebGL or unrelated signature effect was added.

Design Taste's exact-screen-height and dealt-effect requirements conflict with the approved reference and full project catalog; the user direction takes precedence. No fake imagery or calendar is inserted to satisfy its visual-count heuristics. Exact automated status, raw findings, performance limits and browser checks are documented in docs/verification/portfolio.md.
