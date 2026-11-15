# Project asset provenance

All public WebP files are resized/compressed derivatives of existing app captures or user-supplied photographs. No app UI was generated or reconstructed. Originals remain in ignored staging folders; the optimized derivatives are committed so building the site does not require access to local originals. `scripts/prepare-assets.mjs` handles future image optimization.

| Public file | Source | Notes |
| --- | --- | --- |
| bej-hub.webp | User-supplied Bej Hub studio screenshot | Actual owner-only office, supplied for portfolio use |
| omnipoint.webp | Local OmniPoint `docs/ui-refinement/after-register-1366.jpg` | Actual register capture, viewed during discovery |
| pill-dispenser.webp | User-supplied completed-device photograph | Code&Craft watermarks intact; team credit required; modeling/wiring are teammates' work |
| divvy.webp | Portfolio-2 `public/divvy_preview.png` | User explicitly confirmed the account/financial figures are demonstration data and may be published |
| freelanceflow.webp | Portfolio-2 `public/freelanceflow_preview.png` | Same explicit demonstration-data confirmation |
| student-grading.webp | Portfolio-2 `public/grading_preview.png` | Existing anonymous desktop-app preview; no identified student record |
| svd-compression.webp | Portfolio-2 `public/svd_preview.png` | Existing compression-app preview; embedded test image is shown only as part of the UI capture |
| tagumfare.webp | Portfolio-2 `public/tagumfare_preview.png` | Existing mobile-app map/fare preview |

Missing captures for other catalog entries are represented by text-led cards. Third-party design mockups, hero stock photos and app icons were not substituted for working-app evidence. The supplied pill-display close-up and CAD views are preserved privately but omitted from initial public media; the physical photo is enough for the selected case study.

## Added repository captures — 2026-11-14

User requested screenshots from existing repositories. All six below were captured from running, isolated local copies of the public source. No source application's markup/styles or records were changed to fabricate a screenshot. Node server listen ports/addresses were adjusted only in ignored copies for loopback isolation. No production credentials, user sessions, camera access, account registration, transaction, or external delivery was used. Originals and exploratory captures remain under ignored `.verification/project-previews/`; only reviewed WebP derivatives are published.

| Public file | Source revision / route | What is actually shown |
| --- | --- | --- |
| techlapia.webp | [Techlapia dc34d88](https://github.com/d-Lucx/Techlapia/commit/dc34d88d4538d461ad70e375dd2cb3276d17842d), frontend Settings | Cropped original configuration sidebar, 345×882; repository's default dimensions/population and calculated stocking density. Disconnected camera placeholder excluded; not live sensor readings or a hardware verification claim. |
| formsight.webp | [FormSight 6c7cca1](https://github.com/d-Lucx/FormSight/commit/6c7cca1206ab9c9f2119bcc32b77fed14630efc8), original index.html | Cropped original `.dashboard`, 459×502: exercise selector, idle zero/unknown state, threshold controls. Camera/inference backend not running; no pose accuracy or successful repetition claimed. |
| pundo-2.webp | [Pundo2 66cfdc1](https://github.com/d-Lucx/Pundo2/commit/66cfdc19fb2d653efb77895f408ddb45cc38f755), /sign-in | Actual empty sign-in form, cropped to 500×715. No dashboard/private finance data, submitted credentials, or completed authentication. Personal landing imagery and unavailable decorative image excluded. |
| kugi.webp | [Kugi b81358a](https://github.com/d-Lucx/Kugi/commit/b81358ace87d01be8f76621fd83d7543f87603c0), /signup | Cropped original role-selection card, 577×418, before submitting registration. Excludes source landing page's unsupported legal/escrow guarantees, mock identity numbers and account figures. Does not validate compliance or real transactions. |
| mlbb-pick-ban.webp | [Draft overlay f61db41](https://github.com/d-Lucx/Mobile-Legends-Picking-Banning-Overlay/commit/f61db41901628ae30285be114197d4a86a01ceca), / | Actual 1920×1080 initial controller, optimized to 1600×900: empty draft slots and controls. No match result or client claim added. Game artwork appears only within the application's screenshot, not as a separately reused asset. |
| mlbb-tournament.webp | [Tournament overlay c691828](https://github.com/d-Lucx/Mobile-Legends-Tournament-Overlay/commit/c691828fe3d32e1ce4d676b4cbe91240196d04bc), /admin.html → In-Game Overlay | Actual 1366×900 controller with existing public-repository values/logos. No values saved/updated or asserted to be genuine match results; no OCR/backend accuracy verification. |

Each capture was visually inspected before publication. No generated UI, Figma/design mockup or logo was passed off as a screenshot. Fourteen of the 28 current entries have media. Remaining gaps include empty concepts, native apps needing an emulator/device, camera/training pipelines without a standalone UI, notes/private companion content, and projects lacking a confirmed runnable capture. Para's `docs/designs` files are design proposals, not actual Android screenshots, and remain excluded.
