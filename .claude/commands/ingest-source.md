---
description: Add one source to an existing wiki (incremental update). Fetches the artifact if a URL is given, writes `sources/<id>.md`, updates affected entity pages and `wiki/index.md`. Does NOT regenerate the Research Brief.
argument-hint: <date_prefixed_slug> <path_or_url>
allowed-tools:
  - Read
  - Write
  - Edit
  - Glob
  - Grep
  - Bash
  - WebFetch
---

# Ingest Source (Incremental)

You are running the **ingest-source** skill for GROUNDWORK. **Read `context.md` first** if you haven't this session.

## Inputs (filled in at invocation)

- **Topic slug**: `$1` — the date-prefixed topic folder, e.g. `2026-04-25_transformer-attention-time-series`
- **Source**: `$2` — either a local file path under `hypotheses/$1/raw/`, or a URL to fetch into `raw/` first

Delegate immediately to the skill spec at `.claude/skills/ingest-source.md` with these two arguments.
