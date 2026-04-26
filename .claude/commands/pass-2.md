---
description: Pass 2 of the GROUNDWORK pipeline — compile the Obsidian-compatible wiki for a hypothesis. Reads `hypotheses/<folder>/raw/` and produces `hypotheses/<folder>/wiki/` with one page per source plus aggregated entity pages (methods, reagents, organisms, failure-modes), all wikilinked.
argument-hint: <date_prefixed_slug>
allowed-tools:
  - Read
  - Write
  - Edit
  - Glob
  - Grep
  - Bash
---

# Pass 2 — Wiki Compile

You are running **Pass 2** of the GROUNDWORK pipeline. **Read `context.md` first** if you haven't this session — especially §5 (schema), §6 (commons), §7.2 (Pass 2 spec).

## Input (filled in at invocation)

- **Hypothesis folder name**: `$1` — the date-prefixed slug, e.g. `2026-04-25_trehalose-hela-cryopreservation`. Files live under `hypotheses/$1/`.

## Steps

1. **Read every source** in `hypotheses/$1/raw/`. For PDFs, extract text with `pdftotext <file> -` (or use the Read tool's PDF support). For JSON / markdown / text protocol entries, read directly. For each source, you should know: title, authors, year, DOI/URL, claims, methods used, reagents, organisms, failure modes flagged, supports/contradicts relationships with other sources.

2. **For each source, write `hypotheses/$1/wiki/sources/<id>.md`** with full YAML frontmatter per `context.md` §5.4. Body: 2–3 sentence summary, key claims (bulleted), methods used (wikilinks), reagents (wikilinks), organisms (wikilinks), failure modes flagged (wikilinks), supports/contradicts (wikilinks to other sources), notable quotes with page refs.

3. **Aggregate entities.** Every distinct method, reagent, organism, and failure mode mentioned across sources gets its own page in the corresponding subfolder of `hypotheses/$1/wiki/`:
   - `wiki/methods/<slug>.md`
   - `wiki/reagents/<slug>.md`
   - `wiki/organisms/<slug>.md`
   - `wiki/failure-modes/<slug>.md`

   Use the slug conventions from `context.md` §5.2. Each entity page synthesises content from all sources that mention it, with citations (wikilinks to `sources/`).

4. **Cross-link.** Every entity page lists the sources that mention it. Every source page lists the entities it touches. Use Obsidian wikilinks: `[[methods/qPCR]]`, `[[reagents/trehalose]]`, etc.

5. **Check `commons/` first.** Before creating an entity page, check if `commons/methods/<slug>.md`, `commons/reagents/<slug>.md`, etc. already exists at the repo root. If it does, **link to the commons version** with a relative wikilink: `[[../../../commons/methods/qPCR|qPCR]]`. Do **NOT** write into `commons/` from Pass 2 — promotion is the lint pass's job.

6. **Generate `hypotheses/$1/wiki/index.md`** — a content-oriented catalog of every page, organised by category (Hypothesis, Methods, Reagents, Organisms, Failure Modes, Sources, Plans). One-line summary per page. Format per `context.md` §5.4.

7. **Append entries to `hypotheses/$1/wiki/log.md`** for each source ingested:
   ```
   ## [YYYY-MM-DD HH:MM] ingest | <source-id>
   <new pages created> / <existing pages updated>
   ```

8. **Update `hypotheses/$1/hypothesis.md`** — set `status: wiki`, set `sources_count` to the actual count, populate the "key entities" section with wikilinks to the most-cited methods, reagents, and failure modes.

9. **Append `hypotheses/$1/session.log.md`** with:
   ```
   ## [YYYY-MM-DD HH:MM] wiki | $1
   Pages: sources=N, methods=M, reagents=R, organisms=O, failure-modes=F.
   Promotion candidates: <entities that look like they should be in commons>.
   Contradictions noticed: <any cross-source disagreements>.
   ```

10. **Stop and report.** Provide:
    - Page counts by type
    - Sources you couldn't extract from (with reasons)
    - Cross-source contradictions worth surfacing
    - Entities that look like commons-promotion candidates (mentioned in this hypothesis and likely to recur in others)

## Constraints

- Read from `raw/` only. **Do not modify `raw/`.**
- Write only to `wiki/` and the per-hypothesis `session.log.md`.
- Every wiki page must have valid YAML frontmatter per `context.md` §5.3 / §5.4.
- Every wikilink must resolve to a real file in this vault or in `commons/`. Broken links should be treated as a Pass 2 bug.
- Be idempotent — re-running Pass 2 on the same `raw/` should not duplicate pages.
