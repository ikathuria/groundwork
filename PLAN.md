# PLAN.md — GROUNDWORK

> Deep research compilation tool for CS/AI academics.  
> Input: a research question in plain English.  
> Output: a structured Research Brief — key themes, open gaps, methodology landscape, annotated reading list.

---

## Project overview

**What it does:** GROUNDWORK runs a 3-pass Claude Code agent pipeline per research question. Pass 1 fetches 35–45 high-signal papers from arXiv / Semantic Scholar / OpenReview. Pass 2 compiles an Obsidian-compatible wiki (entity pages per method, concept, dataset, open problem). Pass 3 synthesises a Research Brief: a bespoke web page + `plan.json` consumed by a Next.js viewer.

**Who it's for:** CS/AI master's students and researchers who need rapid literature coverage of a new topic.

**Tech stack:**

| Layer | Choice | Reason |
|---|---|---|
| Web UI | Next.js 14 (App Router) | SSR + easy API routes; free on Vercel |
| Styling | Tailwind CSS + custom design tokens | Fast, maintainable academic aesthetic |
| Pipeline driver | Claude Code (`claude -p`) | Agents execute slash commands headlessly |
| LLM | Anthropic API (Claude Sonnet/Opus) | Required for all 3 passes |
| Literature search | Semantic Scholar, arXiv, OpenReview, Papers With Code | Free public APIs |
| Wiki format | Obsidian markdown + YAML frontmatter | Browsable, linkable, auditable |
| Brief renderer (static) | Bespoke single-file HTML (Tailwind CDN, Alpine.js, Chart.js) | No build step; self-contained shareable file |
| Deployment | Railway (Docker, persistent volume for `hypotheses/`) | Persistent disk needed for growing wiki |

---

## Current status (as of 2026-05-13)

### Done

- [x] Next.js 14 scaffold — Tailwind, design tokens (`gw-*`), fonts, `globals.css`
- [x] `lib/plan-schema.ts` — `ResearchBrief` TypeScript type (consumed by brief viewer + API)
- [x] `lib/load-plan.ts` — sessionStorage cache helpers
- [x] Landing page — `ResearchInput` (textarea + sample chips + start button), `PlanPicker` (lists previous surveys)
- [x] `ResearchProgress` component — SSE-driven 3-stage tracker with live status
- [x] `/brief/[slug]` viewer — hero, topic breakdown, field landscape, key themes, research gaps, methodology landscape, reading list, all sources
- [x] `POST /api/research-pipeline` — SSE endpoint spawning `claude -p` for pass-1 → pass-2 → pass-3 sequentially
- [x] `GET /api/plans` — lists all completed surveys from `hypotheses/*/plan/plan.json`
- [x] `GET /api/plans/[slug]` — serves one plan.json
- [x] `GET /h/[slug]` — serves static `plan/index.html` for shareable standalone brief
- [x] `.claude/commands/pass-1.md`, `pass-2.md`, `pass-3.md` — CLI slash command entry points
- [x] `.claude/skills/pass-1-research.md`, `pass-2-wiki.md`, `pass-3-plan.md`, `ingest-source.md`, `apply-correction.md` — full skill specs
- [x] `context.md` — canonical schema: folder layout, page types, frontmatter, agent operation specs
- [x] `.env.example` — `ANTHROPIC_API_KEY`, `SEMANTIC_SCHOLAR_API_KEY`, `CLAUDE_BIN`
- [x] `.claude/settings.json` — pre-allowed tools for headless pipeline

---

## Remaining milestones

---

## Milestone 1: Incremental skill commands

**Goal:** `/ingest-source` and `/apply-correction` are usable via Claude Code slash commands (skills exist, commands are missing).

Tasks:

- [ ] Create `.claude/commands/ingest-source.md` that delegates to `.claude/skills/ingest-source.md` — Done when: running `/ingest-source <slug> <url>` in Claude Code executes the skill without "Unknown command" error.
- [ ] Create `.claude/commands/apply-correction.md` that delegates to `.claude/skills/apply-correction.md` — Done when: running `/apply-correction <path>` in Claude Code executes the skill without error.

---

## Milestone 2: Wiki drilldown panel in brief viewer

**Goal:** Clicking an entity reference in the brief (method tag, concept citation, open-problem chip) opens a side panel rendering the entity's full wiki page via `wiki_drilldowns` from `plan.json`. Specified in `context.md` §7 but not yet implemented.

Tasks:

- [ ] Add `WikiDrilldownPanel` component (`components/brief/WikiDrilldownPanel.tsx`) — renders a slide-in panel with `title`, `subtitle`, `body_md` (rendered via `marked.js`). Dismissable via Escape or overlay click. Done when: panel opens/closes correctly on desktop and mobile.
- [ ] Wire `wiki_drilldowns` into `/brief/[slug]/page.tsx` — pass the record as prop to `WikiDrilldownPanel`; add click handlers on source citation chips, methodology method names, and reading list items whose `wiki_page` key has a matching entry. Done when: at least 3 entity types trigger the panel correctly.
- [ ] Add `marked` or `micromark` as a dependency for rendering body_md — Done when: markdown with headings, bold, wikilinks renders cleanly inside the panel.

---

## Milestone 3: Publication timeline rendering

**Goal:** The `publication_timeline` field exists in `ResearchBrief` and the Pass 3 skill may populate it, but `/brief/[slug]` never renders it. Add a Gantt-style or phase list section.

Tasks:

- [ ] Add a "Publication timeline" section to `/brief/[slug]/page.tsx` guarded by `plan.publication_timeline?.length > 0` — renders phase name, duration, and dependency chain. Done when: if `plan.json` contains `publication_timeline`, the section appears between Methodology and Reading List.

---

## Milestone 4: Deployment

**Goal:** The app runs on Railway with a persistent volume so `hypotheses/` survives redeploys. Anyone with the URL can run a survey.

Tasks:

- [ ] Write `Dockerfile` — multi-stage: Node 20 builder (`npm run build`) + slim runner. `WORKDIR /app`. Expose 3000. Done when: `docker build . -t groundwork && docker run -p 3000:3000 groundwork` serves the app locally.
- [ ] Write `railway.toml` — `[build] builder = "dockerfile"`, `[deploy] startCommand = "node .next/standalone/server.js"`, health-check path `/`. Done when: file is valid TOML and Railway recognises it.
- [ ] Add volume mount docs to `.env.example` — document that `HYPOTHESES_DIR` or Railway volume path should map to the `hypotheses/` folder. Done when: `.env.example` explains how to configure persistent storage.
- [ ] Update `README.md` with a one-command Railway deploy section — Done when: README has a "Deploy" section with the Railway button or CLI command.

---

## Milestone 5: Commons promotion pass

**Goal:** A `/promote-to-commons` slash command scans all hypothesis wikis, finds entities (methods, concepts, datasets, open-problems) appearing in 2+ wikis, and promotes them to `commons/` — updating cross-wiki links per `context.md` §8.

Tasks:

- [ ] Write `.claude/skills/promote-to-commons.md` — spec the promotion logic: scan `hypotheses/*/wiki/{methods,concepts,datasets,open-problems}/*.md`, group by slug, find slugs with `count ≥ 2`, write canonical page to `commons/<type>/<slug>.md`, update `[[...]]` links in originating wikis to use the `commons/` relative path. Done when: skill spec is complete and internally consistent with `context.md`.
- [ ] Write `.claude/commands/promote-to-commons.md` — delegates to the skill, no args required. Done when: `/promote-to-commons` runs without "Unknown command" error.

---

## Milestone 6: Polish and resilience

**Goal:** End-to-end reliability improvements and UX polish.

Tasks:

- [ ] Pipeline resume — if `/api/research-pipeline` detects that `raw/` already exists for a slug, skip Pass 1 and start from Pass 2; if `wiki/` exists, skip to Pass 3. Done when: re-submitting the same question continues from the last completed pass rather than re-fetching papers.
- [ ] Delete survey — add a `DELETE /api/plans/[slug]` route that removes `hypotheses/<slug>/plan/plan.json` (not the raw/ or wiki/). Done when: after DELETE, the survey disappears from `PlanPicker` on next load.
- [ ] Share button in `/brief/[slug]` — copies `window.location.origin + '/h/' + slug` to clipboard. Done when: clicking Share shows a "Copied!" toast and the clipboard contains the correct URL.
- [ ] Empty `PlanPicker` state — show a real empty-state card ("No surveys yet — start one above") instead of the current text fallback. Done when: with zero completed surveys, landing page shows the card.
- [ ] Type-check CI — add a `typecheck` script to `package.json` (`tsc --noEmit`). Done when: `npm run typecheck` exits 0 on the current codebase.

---

## How to run Claude Code sessions

**Start the next incomplete milestone:**
```
claude "Read PLAN.md, find the first incomplete task, and complete it. Mark it done in PLAN.md as you go. Commit when all tasks in a milestone are complete."
```

**Resume from a specific milestone:**
```
claude "Read PLAN.md and CLAUDE.md. Complete Milestone <N>. Mark tasks done as you go. Stop after the milestone and commit."
```

**Run the pipeline manually:**
```
/pass-1 2026-05-13_your-slug "Your research question here?"
/pass-2 2026-05-13_your-slug
/pass-3 2026-05-13_your-slug
```

---

## Viability summary

**Idea:** GROUNDWORK — automated CS/AI literature survey tool  
**Market:** Niche but high-value — researchers, students, academics; no direct open-source competitor at this pipeline depth  
**Feasibility:** Medium — pipeline is built; remaining work is UI polish and deployment  
**Free to build:** Mostly — only cost is Anthropic API usage per pipeline run (~$0.50–2.00 per survey)  
**Monetization:** Portfolio / thesis project; future path = usage-based API or hosted SaaS  
**Recommended stack:** Next.js 14 · Tailwind · Anthropic API · Railway · Obsidian markdown  
**Estimated remaining milestones:** 6  
**Verdict:** Core pipeline works end-to-end. Remaining work is connective tissue — the two missing commands, the wiki drilldown panel, and deployment. Ship Milestones 1 and 4 first; they unlock real usage.
