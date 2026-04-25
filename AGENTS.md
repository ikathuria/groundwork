# GROUNDWORK — Codex / Generic Agent Instructions

This is **GROUNDWORK**, an entry for Hack Nation Challenge 04 (The AI Scientist).

> **Before doing ANYTHING in this repo, read [`context.md`](./context.md) end-to-end.** It is the canonical schema: folder layout, page types, frontmatter conventions, agent operation specs, and demo plan.

## Pipeline (3 passes per hypothesis)

1. **Research** — deep web research → `hypotheses/<slug>/raw/` (immutable)
2. **Wiki** — compile → `hypotheses/<slug>/wiki/` (Obsidian-compatible markdown)
3. **Plan** — synthesise → `hypotheses/<slug>/plan/plan.json` (Lab Brief artifact)

Plus two incremental ops: ingest a single source, apply a scientist correction (Learning Loop).

Codex skill mirrors live under `.codex/skills/`. Use them as the canonical Codex entry points:

- `/pass-1` → `.codex/skills/groundwork-pass-1-research/SKILL.md`
- `/pass-2` → `.codex/skills/groundwork-pass-2-wiki/SKILL.md`
- `/pass-3` → `.codex/skills/groundwork-pass-3-plan/SKILL.md`
- `/ingest-source` → `.codex/skills/groundwork-ingest-source/SKILL.md`
- `/apply-correction` → `.codex/skills/groundwork-apply-correction/SKILL.md`

Claude Code has equivalent command prompts under `.claude/skills/`. Keep both copies behaviorally aligned when changing the pipeline.

## Hard rules

- Stay within one hypothesis folder + `commons/` per session. Don't cross hypothesis boundaries.
- `raw/` is immutable post-fetch.
- Log every meaningful operation to `session.log.md` (per-hypothesis) and `wiki/log.md` (per-vault) with the prefix `## [YYYY-MM-DD HH:MM] <op> | <subject>`.
- All wiki pages need valid YAML frontmatter per `context.md` §5. All wikilinks must resolve.
- No free-floating facts: every plan claim traces to a wiki entity → source.

Full schema, decision log, and conventions are in [`context.md`](./context.md).
