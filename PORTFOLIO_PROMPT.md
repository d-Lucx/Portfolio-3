# Portfolio 3 — Collaborative Build Prompt

## Objective

Work with me to design and build a distinctive, professional portfolio for GitHub user **d-Lucx**, positioned as a **Computer Engineering Student focused on AI Automation**, with **AI automation jobs** as the primary target. Help recruiters and hiring managers understand my expertise, assess my work, and take one clear next step. Establish my primary call to action with me before writing the final site copy.

Confirmed positioning: Computer Engineering Student and AI Automation. Confirmed target opportunity: AI automation jobs. Proposed editorial direction: lead with practical automation projects and use relevant software and embedded systems work as supporting evidence. Highlight confirmed workflow design, integrations, reliability, and outcomes relevant to hiring. Confirm the featured work before making claims about tools, clients, or outcomes.

Start with discovery and a reviewable design brief. Ask important questions in a short conversation, beginning with the answer that most changes the portfolio. Keep confirmed decisions, proposals, and unanswered questions separate. Update this file as I answer.

## Required skills

- Use the [Superpowers plugin](plugin://superpowers@openai-curated-remote), beginning with its relevant discovery and brainstorming workflow. Use planning, implementation, debugging, review, and verification skills when their stages apply.
- Read and use [UI/UX Pro Max](C:/Users/Renelyn/.agents/skills/ui-ux-pro-max/SKILL.md) for visual systems, responsive behavior, accessibility, and interaction design.
- Read and use [Design Taste Frontend](C:/Users/Renelyn/.agents/skills/design-taste-frontend/SKILL.md) for composition, typography, authentic visuals, restrained motion, and its applicable browser checks and finish gate.
- Use other relevant available skills when they serve the task. Read repository instructions before changing files.
- My explicit reference direction takes priority over a skill's randomly selected palette or layout. Explain any material conflict and record the resolution. Automated design recommendations are inputs, not final decisions.

## References and their priority

### Primary visual reference

[Rene engineering portfolio](https://rene-engineering-portfolio.cutedingo4.chatgpt.site)

Use this as the principal reference for theme, visual character, typography, spacing, layout rhythm, and interaction tone. Inspect its desktop and mobile presentation before proposing a design. Record what was actually observed in `DESIGN.md`, including reusable color, type, spacing, and component tokens.

If access requires authentication, report that accurately and ask me to provide access through the available browser or share screenshots. Do not infer the portfolio's colors or layout from the login page. Continue content discovery while visual inspection is pending.

### Profile and content sources

- [Previous portfolio repository](https://github.com/d-Lucx/Portfolio-2): use to identify candidate projects, biography, skills, and reusable assets. Review for accuracy and relevance with me.
- [LinkedIn](https://www.linkedin.com/in/rclobeja/): use as a professional cross-check; confirm current role, dates, education, and claims before publishing them.
- [GitHub profile](https://github.com/d-Lucx): use for public project links and contribution activity.

Keep a concise content inventory with source URLs and confirmation status. Do not invent results, testimonials, employers, proficiency percentages, project ownership, or availability. Do not automatically copy confidential material or secrets from an older repository into the public site.

### Secondary inspiration

- [BrewedOps](https://portfolio.brewedops.cloud)
- [Jheyem](https://jheyem-uwu.lovable.app/)
- [Crestler Mendez on Behance](https://www.behance.net/crestlermendez2)
- [Nathaniel Laxamana](https://nathaniel-laxamana.vibepreview.app/)
- [JL Parungao](https://jlparungao.dev/)
- [Kuro10](https://kuro10.vercel.app/)
- [Binsoy69](https://binsoy69.vercel.app/)
- [Stun Design](https://stundesign-portfolio.vercel.app/)
- [Raziel Renz](https://razielrenz.vercel.app/)

Review these for specific supporting ideas. Explain which ideas fit my goals and the primary theme. Build one coherent system; avoid combining unrelated visual styles. Use original implementation and authorized assets rather than copying another creator's code, text, imagery, or signature effect.

## Questions to resolve together

Ask these conversationally, beginning with positioning. Read available sources first so I do not have to repeat information they already answer. Record answers here.

1. **Audience and opportunity — confirmed:** My positioning is Computer Engineering Student and AI Automation, targeting AI automation jobs. Tailor the portfolio to recruiters and hiring managers evaluating relevant projects and practical skills. Clarify specific job titles or industries only if needed to select the work and copy.
2. **Visitor action:** What should a visitor do next—contact me, review projects, download a résumé, or something else?
3. **Featured work:** Which three to five projects best support that goal? For each, confirm my role, problem, contribution, stack, outcome, and available demo, repository, screenshots, or hardware photos. Ask only for facts missing from the sources.
4. **Reference fidelity:** What do I most want to preserve from the primary reference, and what should change? Obtain visual access before finalizing the theme.
5. **Personal story:** How should web development and embedded systems work be balanced? Confirm my display name, headline, biography, experience, education, and any credentials worth featuring.
6. **Assets and contact:** Which portrait, project media, résumé, email, and social links can be published? What current availability or location, if any, should visitors see?
7. **Scope and maintenance:** Do I want a single page, project detail pages, or another structure? Who will update the content, and how often?
8. **Technical preferences:** Do I have a preferred stack, host, domain, or constraints? Detect existing project tooling first; propose a simple maintainable option if I have no preference.
9. **Optional additions:** Would theme switching, project filters, a blog, or a contact form materially help my audience? Keep them outside the initial scope unless selected.

## Proposed content structure

This is a starting proposal, subject to my answers and the reference review:

1. **Hero:** my name, focused role, concise value statement, and one primary action. Add a secondary action only when useful.
2. **Selected projects:** lead with the strongest relevant work. Each project needs substantive context about the problem, my contribution, decisions, and verified outcome, alongside authentic visuals and working links.
3. **About and experience:** a brief personal story, relevant experience, education, and selected credentials supported by confirmed facts.
4. **Skills:** group relevant tools by the work they support and connect them to projects; avoid arbitrary proficiency bars.
5. **GitHub activity:** the required contribution calendar for d-Lucx.
6. **Contact and footer:** an obvious next step, approved contact links, and any asset credits.

Put project descriptions in the project's text area, respecting Design Taste Frontend's rule against captions beneath visuals. Omit sections without useful confirmed content rather than filling them with generic copy.

## Required feature: GitHub contribution calendar

- Show real contribution activity for **d-Lucx**, with the displayed date range clearly labeled. Propose the latest rolling year unless I request another range.
- Use a documented, maintained data source or integration. Verify its current API, freshness, rate limits, and hosting compatibility before choosing it.
- When using an API token, keep it server-side or in build-time secrets. Never embed it in client code or commit it. A static build must have a documented refresh mechanism.
- Explain what the chosen source counts, including limitations around private contributions. Do not equate contribution totals with commits or engineering quality.
- Fit the calendar to the approved theme and provide an intensity legend, readable summary, and accessible date/count details. Do not rely on color or hover alone.
- Ensure a usable mobile layout without page-level horizontal overflow. If the calendar needs horizontal scrolling, confine it to a labeled, keyboard-accessible region.
- Provide loading, empty, stale-data, and unavailable states as applicable. On failure, keep the page usable and offer a link to the GitHub profile. Never substitute fabricated activity.
- Cache or prefetch reasonably, reserve layout space, and show freshness information when cached data is displayed.

## Design and engineering requirements

- Match the verified primary reference while tailoring the work and copy to my identity. Present a coherent visual proposal before implementation and document the approved direction.
- Generate UI/UX Pro Max design-system recommendations after identifying the project context. Review their fit before persisting them; retain the reference's visual direction where recommendations differ.
- Use strong hierarchy, consistent tokens, equal content edges, readable text, authentic project imagery, and useful whitespace.
- Keep motion purposeful. Support reduced motion, visible focus states, keyboard navigation, semantic headings, and a skip link. Avoid scroll-jacking and effects that obscure the work.
- Aim for WCAG 2.2 AA, including normal text contrast of at least 4.5:1, visible control labels, and usable touch targets.
- Validate layouts at 320, 390, 768, 820, 1024, and 1440 pixels. Content must remain readable without clipping, overlapping, or unnecessary forced height on small screens.
- Optimize images and fonts, reserve media dimensions, and avoid unnecessary animation libraries or heavy 3D. Treat performance targets as measured goals, never unsupported claims.
- Include page titles, descriptions, social preview metadata, a favicon, and appropriate indexing files. Set canonical URLs after the production domain is known.
- Keep content easy to maintain. A backend, CMS, analytics, and contact form are optional choices, not assumed requirements.
- Every visible control must work. If a contact form is selected, implement real delivery, validation, loading, success, and error handling; display success only after confirmed delivery.

## Working process and repository delivery

Target repository: [d-Lucx/Portfolio-3](https://github.com/d-Lucx/Portfolio-3).

1. Inspect the workspace, repository instructions, target repository, source material, and accessible visual references. Preserve existing user work.
2. Resolve the important discovery questions. Keep this prompt updated with confirmed decisions and open items.
3. Present viable approaches with tradeoffs and a recommendation. Capture the selected direction in a reviewable design brief and `DESIGN.md` before implementing the site, following the applicable Superpowers workflow.
4. Write an implementation plan with clear milestones and acceptance criteria. Choose and explain the stack based on repository context, maintainability, feature needs, and hosting requirements.
5. Build the portfolio and contribution calendar in small reviewable steps. Use real content and assets; track missing material separately from the public UI.
6. Run relevant build, lint, type, accessibility, interaction, and responsive checks. Exercise calendar failure states and any contact delivery. Use meaningful tests for behavior and data handling rather than tests that merely mirror markup.
7. Run the applicable Design Taste Frontend browser checks and finish gate. Report its actual status, justified waivers, open findings, and any checks that could not run. Do not claim verification from screenshots or checks that were never produced.
8. Commit the finished changes to Portfolio-3 with clear messages, preserving unrelated changes. Report the branch and commit links. Commit work is authorized; deployment is a separate step unless I request it.
9. Deliver setup instructions, environment variable names without secrets, content update guidance, the calendar's data/refresh approach, validation results, and remaining limitations.

## Acceptance criteria for the eventual site

- The approved professional positioning, factual content, primary action, and visual direction are implemented.
- Featured projects show my contribution and verified evidence of the work.
- The d-Lucx calendar displays genuine data with accessible details and graceful failure behavior.
- Navigation, résumé download if supplied, project links, social links, and selected contact method work.
- Desktop and mobile checks show no clipping, overlap, inaccessible navigation, or page-level horizontal overflow.
- Applicable automated checks pass or remaining issues are explicitly disclosed with evidence.
- Portfolio source and documentation are committed to the requested repository, with no credentials included.

## Current discovery status — 2026-11-14

- This document is the initial improved build prompt; it is not an approved site design or a completed implementation.
- The local workspace was empty at initial inspection. The connected GitHub tool reported Portfolio-3 as empty, with `main` as its default branch.
- The primary reference returned an HTTP 401 ChatGPT sign-in page through Firecrawl. Its portfolio theme has not been inspected.
- Portfolio-2 was accessible through the connected GitHub account and was reported as private. Its root contains a Next.js configuration, TypeScript configuration, and an `app` directory; this does not select the stack for Portfolio-3.
- The LinkedIn retrieval used an enrichment provider rather than a direct live page read. Treat its professional information as candidate content requiring confirmation.
- Secondary inspiration URLs have been retained; no individual design findings are claimed yet.
- UI/UX Pro Max's local design-system search could not run: the Python executable was inaccessible and the `py` launcher was unavailable. Its supplied accessibility and interaction guidance informed this prompt; no generated design system is claimed.
- Confirmed by me in discovery: position the portfolio around Computer Engineering Student and AI Automation.
- Confirmed by me in discovery: prioritize AI automation jobs. Recruiters and hiring managers are the proposed primary audience for that goal.
- Added Raziel Renz to secondary inspiration at my request; its visual design has not yet been inspected.
- Primary visitor action, selected projects, reference access, final stack, hosting, and production contact details remain open.
