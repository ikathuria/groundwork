# GROUNDWORK — Claude Code Instructions

GROUNDWORK is a **deep research compilation tool** for CS/AI academics.

> **Before doing ANYTHING in this repo, read [`context.md`](./context.md) end-to-end.** It is the canonical schema: folder layout, page types, frontmatter conventions, agent operation specs, and conventions for AI agents working in this repo. Treat it as authoritative.

## Quick orientation

GROUNDWORK runs a 3-pass agent pipeline per research question:

1. **Pass 1 — Research** (`/pass-1 <slug> "<question>"`) — discovers and downloads 35–45 high-signal papers into `hypotheses/<slug>/raw/`. Immutable.
2. **Pass 2 — Wiki** (`/pass-2 <slug>`) — compiles an Obsidian-compatible wiki under `hypotheses/<slug>/wiki/` (methods, concepts, datasets, open-problems).
3. **Pass 3 — Brief** (`/pass-3 <slug>`) — synthesises `hypotheses/<slug>/plan/plan.json` (ResearchBrief) for the `/brief/<slug>` UI.

Plus two incremental skills:

- `/ingest-source <slug> <path|url>` — add one source to an existing wiki.
- `/apply-correction <correction.json>` — write a researcher correction into the wiki / `commons/`.

## Hard rules

- **Stay within scope.** When operating on a topic, read/write only inside that topic's folder + `commons/` + `.claude/`. Do not cross topic boundaries.
- **`raw/` is immutable.** Never modify a file in `raw/` after it's first written. Re-fetch into a new file if needed.
- **Update logs.** Every meaningful operation appends to `session.log.md` and `wiki/log.md`. Format: `## [YYYY-MM-DD HH:MM] <op> | <subject>`.
- **Schema is canonical.** Wiki pages must have valid YAML frontmatter per `context.md` §4. Wikilinks must resolve to real files.
- **No free-floating facts.** Every claim in a brief must trace to a wiki entity, which traces to a source.
- **When the schema is ambiguous, update `context.md`** rather than working around it.

For full operational specs and conventions, see [`context.md`](./context.md).
