# OmniPoint portfolio evidence check

Date: 2026-11-14. Purpose: verify the offline sale, restart recovery and synchronization behavior proposed for the portfolio case study.

## Scope and environment

Source: local `C:/Yan2_Projects/POS/OmniPoint`. Copied `src`, `test`, `migrations`, package metadata and existing dependencies into the portfolio's ignored `.verification/omnipoint` directory. No source changes were made to OmniPoint. No existing retail database or production service was used.

Runtime: Windows, Node 24.22.1, SQLite 3.53.4, PostgreSQL 17.12. The README specifies PostgreSQL 17.11; this check used the next patch release in the same major version. PostgreSQL portable binaries were downloaded through the Windows binary distributor linked by [PostgreSQL's official download page](https://www.postgresql.org/download/windows/).

A new password-authenticated PostgreSQL cluster was created under `.verification/postgres-data`, listening only on `127.0.0.1:55439`. The existing test fixture created randomly named databases and roles and cleaned them up. The test cluster was stopped successfully afterward. Test credentials are local disposable values, not production secrets; the entire `.verification/` directory is ignored.

## Fresh results

| Check | Result |
| --- | --- |
| TypeScript, `node node_modules/typescript/bin/tsc --noEmit` | Exit 0 |
| Register bundle, `node node_modules/esbuild/bin/esbuild src/ui/register.tsx --bundle --minify --outfile=dist/register.js` | Exit 0 |
| `node --test test/ui-money.test.ts test/ui-recovery.test.ts` | 2 passed, 0 failed, 0 skipped |
| `node --test --test-concurrency=1 test/milestone.test.ts test/quota.test.ts` | 21 passed, 0 failed, 0 skipped, including subtests; 15 top-level tests |
| Manual CLI checkout, separate-process recovery and reprint | Recovered receipt JSON matched original checkout exactly; reprint succeeded |

The integration run completed in approximately 29 seconds. This is test-run duration, not a product performance benchmark.

## Relevant exercised behavior

- Committed offline checkout survives terminal process death and recovers its original receipt.
- A dropped cloud response leaves the operation retryable; replay converges to the saved result without duplicate inventory/accounting effects in the test.
- Killing the terminal before SQLite commit rolls back checkout effects.
- Failed PostgreSQL commit permits a fresh retry.
- Forged or mismatched acknowledgments do not retire pending work.
- Authentication, tenant isolation and tenant foreign keys are exercised.
- Interrupted acknowledgment issuance and expired worker leases recover.
- Two offline terminals converge under both ordering cases and a concurrent race.
- Quota, partial custody, replacement fulfillment and populated migration scenarios pass.
- The UI helper tests cover exact money parsing and retry identity persistence without persisting the supervisor PIN. They are not browser end-to-end tests.

## Claim suitable for draft case study

“Verified in local integration tests: an offline sale recovered after terminal process termination and synchronized successfully after a lost cloud response, preserving the original receipt and avoiding duplicate effects in the tested scenario.”

This is a bounded engineering result, not a claim of production readiness, financial compliance, broad security certification or customer deployment. Physical printer delivery, host power loss, live payment providers, later milestone suites, browser interactions and storage-exhaustion tests were not verified in this check. No portfolio build or Design Taste finish gate is implied.

## Local evidence

Ignored local logs: `.verification/omnipoint/typecheck.log`, `unit-tests.log`, `integration-tests.log`; register bundle in `.verification/omnipoint/dist/register.js`; manual receipt in `.verification/omnipoint/offline-receipt.json`. Bootstrap procedure: `.verification/verify-omnipoint.ps1` (creates a fresh cluster; do not rerun against an existing data directory).
