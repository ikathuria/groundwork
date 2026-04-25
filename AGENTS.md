# GROUNDWORK — Codex / Generic Agent Instructions

This is **GROUNDWORK**, an entry for Hack Nation Challenge 04 (The AI Scientist).

> **Before doing ANYTHING in this repo, read [`context.md`](./context.md) end-to-end.** It is the canonical schema: folder layout, page types, frontmatter conventions, agent operation specs, and demo plan.

## Pipeline (3 passes per hypothesis)

1. **Research** — deep web research → `hypotheses/<slug>/raw/` (immutable)
2. **Wiki** — compile → `hypotheses/<slug>/wiki/` (Obsidian-compatible markdown)
3. **Plan** — synthesise → `hypotheses/<slug>/plan/plan.json` (Lab Brief artifact)

Plus two incremental ops: ingest a single source, apply a scientist correction (Learning Loop).

If your runtime supports slash commands or skills, the canonical operations are defined under `.claude/skills/`. The skill markdown is named for Claude Code, but the prompt content is tool-agnostic — you can invoke each pass by referencing the corresponding skill file.

## Hard rules

- Stay within one hypothesis folder + `commons/` per session. Don't cross hypothesis boundaries.
- `raw/` is immutable post-fetch.
- Log every meaningful operation to `session.log.md` (per-hypothesis) and `wiki/log.md` (per-vault) with the prefix `## [YYYY-MM-DD HH:MM] <op> | <subject>`.
- All wiki pages need valid YAML frontmatter per `context.md` §5. All wikilinks must resolve.
- No free-floating facts: every plan claim traces to a wiki entity → source.

Full schema, decision log, and conventions are in [`context.md`](./context.md).
