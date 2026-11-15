# Rene Christian — Portfolio 3

Single-page portfolio for a Computer Engineering student focused on AI Automation. Next.js App Router, React, TypeScript and custom CSS. The user deployed it to https://rcbej.vercel.app; source updates are pushed to `main` as authorized. Vercel's Git integration controls subsequent deployments.

`vercel.json` explicitly selects Vercel's Next.js framework adapter. This overrides an unset/Other project preset so Vercel packages the Next.js routes and server contribution endpoint rather than treating the repository as a generic static project.

## Local setup

Use Node 24.22.1 (24.x). Run `npm ci`, copy `.env.example` to `.env.local`, then `npm run dev`. Open http://127.0.0.1:3000. Run `npm run build` followed by `npm start` to inspect the production build.

Commands: `npm run lint`, `npm run typecheck`, `npm test`, `npm run test:e2e`. Browser tests use installed Microsoft Edge and a running server on port 3000. Their synthetic contribution fixtures are intercepted locally in tests and never become public activity.

## Configuration

- `GITHUB_TOKEN`: server-only GitHub personal access token for the official GraphQL API. Use minimum read access for public profile activity; private repository access is unnecessary. Never commit the token or send it in chat. Configure separately in Vercel's environment settings before a future deployment. The public endpoint returns only validated aggregate dates/counts/intensity and timestamps, never repository details or credentials.
- `SITE_URL`: use `https://rcbej.vercel.app`. A bare hostname such as `rcbej.vercel.app` is normalized to HTTPS. Invalid, non-HTTP or credential-bearing values are ignored safely, leaving origin-dependent metadata/indexing disabled instead of crashing the build. Canonical/sitemap use the normalized origin. Search indexing requires `VERCEL_ENV=production` and a valid origin; Vercel supplies `VERCEL_ENV`.

No contact delivery service is needed: Contact me opens the approved email address in the visitor's mail application. No form, analytics, database or CMS is installed.

## Content and images

Edit identity/contact in `content/profile.ts` and project entries in `content/projects.ts`. Categories overlap: AI, Software and Hardware. The initial unfiltered HTML includes all 28 selected entries. Keep Portfolio, Portfolio-2, thousand-folded-wishes and Pundo excluded; Pundo 2 is a separate included project. The former Fish Tank entry was removed because the user confirmed it duplicates Techlapia.

The three featured cases require confirmed contribution/outcome text. Archive concepts/prototypes retain their status and do not imply completed client work. Seventeen of 28 entries have authentic media (18 images); eleven remain text-led. Add a `media` record only when a publishable actual capture exists; optional `additionalMedia` records provide separately linked full-size images, as demonstrated by Para. Additional local repository captures show configuration, idle, sign-in, onboarding or built-in demonstration states; they do not imply those integrations were tested. Public repository links are shown only for public repositories. Bej Hub's owner-only demo is intentionally omitted. Remaining capture blockers are listed in `docs/verification/media-update.md`.

For a future n8n project, add an entry only after confirming what was actually built. A draft example (not current portfolio content):

```ts
{ id: 'new-workflow', name: 'Your confirmed project name',
  summary: 'Describe the tested trigger, steps, and human review point.',
  categories: ['AI', 'Software'], status: 'prototype', stack: ['n8n'],
  // Add repository/repositoryVisibility only after confirming public access.
  // Add media: { src, alt, width, height } after approving an actual capture.
}
```

Do not add client names, time savings or reliability outcomes without evidence. Category counts update automatically.

Optimize an approved image with `node scripts/prepare-assets.mjs SOURCE NAME WIDTH`. Record its provenance and permission in `docs/ASSET_PROVENANCE.md`. Preserve Code&Craft credit and watermarks. Do not copy confidential repository material into public assets. See `CONTENT_INVENTORY.md`, `docs/PROJECT_CATALOG.md`, and `DESIGN.md` for source and decision records.

## GitHub contribution calendar

The fixed user is **d-Lucx**. `lib/github/client.ts` queries GitHub's official GraphQL contribution calendar for the latest 365 UTC dates, including today. It validates every day, level, identity and sum; incomplete/malformed/error responses become unavailable, never invented zero days. A genuine all-zero response is an empty year.

The Node server uses Next.js `unstable_cache` (previous caching model, Cache Components disabled) with a six-hour revalidation interval. Refresh is traffic-driven: after the interval a request can receive the last cached result while background revalidation runs. Next retains a prior successful result if revalidation fails. The original date range and fetch timestamp are always shown. Results older than 48 hours are marked stale; at seven days they are hidden as unavailable. A new deployment/region or cold cache may have no prior result. This is a runtime Vercel application, not a static export, and needs no scheduled rebuild. No endpoint allows a visitor to force a GitHub refresh or choose another user.

GitHub's [GraphQL rate limits](https://docs.github.com/en/graphql/overview/rate-limits-and-query-limits-for-the-graphql-api) currently give typical user tokens 5,000 points/hour. Actual query cost, remaining budget and reset time are logged without credentials after successful requests. Secondary limits also apply; there are no immediate retries. The upstream timeout is eight seconds, browser timeout twelve seconds. Failure leaves projects/contact usable and offers the GitHub profile link.

On 403/429, a warm instance suppresses further upstream requests until `Retry-After` (seconds/date) or exhausted `x-ratelimit-reset`; without usable advice it waits one minute. Advice is bounded to one day. This cooldown is per process and does not coordinate separate Vercel instances; successful snapshots use the persistent framework cache. A pinned-framework harness verifies cache hits and last-good retention after a failed refresh against a controlled backing store. It does not prove hosted multi-instance durability.

Counts include qualifying GitHub contribution activity, not just commits; visibility, token permissions and profile settings affect private contributions. New activity may take [up to 24 hours](https://docs.github.com/en/account-and-profile/how-tos/contribution-settings/troubleshooting-missing-contributions) to appear. Totals do not measure engineering quality. Calendar details use a native disclosure and date/count table, with a labeled keyboard-accessible local scroll region on narrow screens. Loading, genuine zero, stale and unavailable states are covered by tests.

Current validation and remaining configuration: `docs/verification/portfolio.md`.
