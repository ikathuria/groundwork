# GROUNDWORK — Claude Code Instructions

This is **GROUNDWORK**, an entry for Hack Nation Challenge 04 (The AI Scientist).

> **Before doing ANYTHING in this repo, read [`context.md`](./context.md) end-to-end.** It is the canonical schema: folder layout, page types, frontmatter conventions, agent operation specs, demo plan, and conventions for AI agents working in this repo. Treat it as authoritative.

## Quick orientation

GROUNDWORK runs a 3-pass agent pipeline per scientific hypothesis:

1. **Pass 1 — Research** (`/pass-1 <slug> "<hypothesis>"`) — deep web research; downloads sources into `hypotheses/<slug>/raw/`. Immutable.
2. **Pass 2 — Wiki** (`/pass-2 <slug>`) — compiles an Obsidian-compatible markdown vault under `hypotheses/<slug>/wiki/`.
3. **Pass 3 — Plan** (`/pass-3 <slug>`) — produces `hypotheses/<slug>/plan/plan.json` for the Lab Brief UI.

Plus two incremental skills (also under `.claude/skills/`):

- `/ingest-source <slug> <path|url>` — add one source to an existing wiki (the live demo "ingest one paper" moment).
- `/apply-correction <correction.json>` — write a scientist correction back into the wiki / `commons/` (the Learning Loop).

## Hard rules

- **Stay within scope.** When operating on a hypothesis, read/write only inside that hypothesis's folder + `commons/` + `.claude/`. Do not cross hypothesis boundaries.
- **`raw/` is immutable.** Never modify a file in `raw/` after it's first written. Re-fetch into a new file if needed.
- **Update logs.** Every meaningful operation appends to the per-hypothesis `session.log.md` and the wiki-internal `wiki/log.md`. Use the prefix format `## [YYYY-MM-DD HH:MM] <op> | <subject>` so logs stay grep-parseable.
- **Schema is canonical.** Wiki pages must have valid YAML frontmatter per `context.md` §5. Wikilinks must resolve to real files (in this vault or in `commons/`).
- **No free-floating facts.** Every claim in a generated plan must trace to a wiki entity, which traces to a source.
- **When the schema is ambiguous, propose a refinement.** Edit `context.md` rather than working around it.

For full operational specs, decision log, and conventions, see [`context.md`](./context.md).
