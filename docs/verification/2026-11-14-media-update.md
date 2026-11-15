# Post-deployment URL fix and project media update

User requested main synchronization, removal of the Fish Tank duplicate of Techlapia, and screenshots from existing repositories. They also supplied a Vercel build failure caused by `SITE_URL=rcbej.vercel.app`.

## Changes

- Fast-forwarded main from `9f0572f` to finished portfolio `f1bb45f` as explicitly requested.
- Reproduced `Invalid URL` in the indexing regression test using the exact reported bare hostname. Shared `siteOrigin` normalizes it to HTTPS for layout, robots and sitemap. Malformed/non-http/credential-bearing configuration safely omits origin-dependent metadata instead of throwing. Fix `3996ddd` was pushed first.
- Built successfully with `SITE_URL=rcbej.vercel.app` and `VERCEL_ENV=production`. Runtime canonical is `https://rcbej.vercel.app`; robots metadata is `index, follow`. Domain example/configuration instructions updated.
- Removed `fish-tank`, retained Techlapia. Current counts: **28 total**, **7 AI**, **27 Software**, **5 Hardware**. Categories overlap.
- Added **six** reviewed authentic captures: Techlapia configuration, FormSight idle controls, Pundo 2 empty sign-in, Kugi unsubmitted onboarding, MLBB draft controller, ML Live tournament controller. Current coverage: **14 entries with actual media**, **14 text-led**. Exact source revisions, framing, state and limitations are in [asset provenance](../ASSET_PROVENANCE.md).

No app UI was reconstructed or generated. Isolated source copies used no production credentials. Cropped panels intentionally exclude disconnected camera placeholders, personal landing imagery, private accounts and unsupported compliance/identity claims. Existing public repository tournament values are not presented as validated match outcomes. Native apps, empty concepts, notes/private companion material and entries without a reliable actual capture remain text-led. All temporary source-preview servers were stopped after capture; original project directories were untouched.

## Actual validation

| Check | Result |
| --- | --- |
| Unit behavior | **16 passed**, including bare-domain normalization and invalid configuration regression |
| Production build | **Exit 0** with the exact scheme-less hostname that failed on Vercel |
| TypeScript / ESLint | **Exit 0** |
| Production Edge browser suite | **14 passed** |
| Responsive media | All images load; no page overflow at **320, 390, 768, 820, 1024, 1440px** |
| Accessibility / interactions | Existing axe ready/expanded + unavailable checks pass; filters, focus, no-JS catalog, motion, calendar states remain green |
| Focused independent review | No Critical, Important or Minor findings; independently confirmed all six media dimensions, source revisions, state descriptions and 28/14 counts |

The original combined six-width image test exceeded its shared 30-second timeout with the larger media catalog. It was split into six independently named width tests, retaining every image/overflow assertion and the same per-test limit. All six now pass; no assertion was weakened.

The original Design Taste gate's OPEN114 policy findings remain documented in [initial verification](portfolio.md). It was not rerun or claimed passed for this content/metadata-only update. New media were visually inspected, optimized to WebP, and verified in the actual gallery and six-width browser checks. [Updated gallery screenshot](project-index-update.png).

## Deployment visibility

The source fix is verified locally and pushed to main. Vercel's connected API returned **403** because the current connector lacks access to the project's team; no access permissions were expanded. A direct public browser check of `https://rcbej.vercel.app/` returned Vercel **404 NOT_FOUND** during this work. Therefore a successful hosted deployment is **not claimed**. The user's Vercel Git integration may build main pushes; deployment status/domain assignment still needs confirmation in their Vercel account if the public 404 persists. No separate manual deployment, promotion or project-setting mutation was performed.
