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

Each capture was visually inspected before publication. No generated UI, Figma/design mockup or logo was passed off as a screenshot. At this stage fourteen of the 28 entries had media. Para's `docs/designs` files are design proposals, not actual Android screenshots, and remain excluded.

## Follow-up supplied and local captures — 2026-11-14

| Public file | Source | What is actually shown |
| --- | --- | --- |
| para-destination.webp | User attachment `codex-clipboard-42e54eec-4c75-4535-ac23-426bb179d15c.png` | Actual Android destination selection/arrival-alarm interface, 908×2048. Public map landmarks and all map-provider attribution retained. No trip or alarm execution claimed. |
| para-map.webp | User attachment `codex-clipboard-3a417db1-c6cf-48c2-b249-8d55a1d55a1e.png` | Actual Android Philippines overview, 908×2048. Separate full-size link; no screenshot replaced by a design proposal. |
| bej-vault.webp | User attachment `codex-clipboard-79978ae7-81ed-496d-ad13-d981c45bafb3.png` | Actual Obsidian folders/linked-note graph supplied for publication; reduced to 1600×850. No note body or credential copied from the repository. |
| tourneyforge.webp | Local TourneyForge revision `8e3479e14dfd847b7d142bb3f3db3a71f3002e9d`, `/studio` | Actual 1440×1000 Fabric canvas/layer/properties interface. Built-in match, connection and performance indicators are demonstration values, explicitly qualified in public summary/alt. No OBS connection, live broadcast or measured performance asserted. |

TourneyForge ran from an ignored isolated copy with dependencies installed and no `.env` files copied. No source UI or records were rewritten for the screenshot. Existing game imagery appears within the app interface only. Original private source is not published or linked. These additions bring media coverage to **17 of 28 projects, 18 images**.

The user requested removal of the footer photography paragraph; Code&Craft watermarks and case-study team attribution remain. The redundant visible calendar scrolling sentence was removed while the labeled keyboard-focusable scroll region remains.
