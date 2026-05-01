---
description: Pass 2 of the GROUNDWORK pipeline — compile the Obsidian-compatible wiki for a research topic. Reads `hypotheses/<slug>/raw/` and produces `hypotheses/<slug>/wiki/` with one page per source plus aggregated entity pages (methods, concepts, datasets, open-problems), all wikilinked.
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

You are running **Pass 2** of the GROUNDWORK pipeline. **Read `context.md` first** if you haven't this session.

## Input (filled in at invocation)

- **Topic folder name**: `$1` — the date-prefixed slug, e.g. `2026-04-25_transformer-attention-time-series`. Files live under `hypotheses/$1/`.

## Steps

1. **Read every source** in `hypotheses/$1/raw/`.
   - HTML files (arXiv HTML5): read directly with the Read tool
   - PDFs: `pdftotext <file> -` or Read tool PDF support
   - `.txt` companions: read directly
   For each source, extract: title, authors, year, venue, key claims, methods used, concepts introduced/applied, datasets used, limitations acknowledged, relationships to other sources.

2. **For each source, write `hypotheses/$1/wiki/sources/<id>.md`** with YAML frontmatter (see context.md §4.4). Body:
   - 2–3 sentence summary
   - Key claims (bulleted)
   - Methods used (wikilinks to `wiki/methods/`)
   - Concepts (wikilinks to `wiki/concepts/`)
   - Datasets (wikilinks to `wiki/datasets/`)
   - Open problems flagged (wikilinks to `wiki/open-problems/`)
   - Extends / contradicts / builds-on (wikilinks to other `sources/`)
   - Notable quotes with section/page refs

3. **Aggregate entities.** Every distinct method, concept, dataset, and open problem across sources gets its own page:
   - `hypotheses/$1/wiki/methods/<slug>.md` — research methods and techniques
   - `hypotheses/$1/wiki/concepts/<slug>.md` — theoretical constructs, architectures, terminology
   - `hypotheses/$1/wiki/datasets/<slug>.md` — benchmark datasets and evaluation suites
   - `hypotheses/$1/wiki/open-problems/<slug>.md` — unanswered questions, known limitations, negative results

   Each entity page synthesises content from all sources that mention it, with citations (wikilinks to `sources/`).

4. **Cross-link.** Every entity page lists sources that mention it. Every source page lists entities it touches. Use Obsidian wikilinks: `[[methods/rlhf]]`, `[[concepts/transformer]]`, `[[datasets/glue]]`, etc.

5. **Check `commons/` first.** Before creating an entity page, check if `commons/methods/<slug>.md`, `commons/concepts/<slug>.md`, etc. already exists. If so, link to the commons version: `[[../../../commons/methods/rlhf|RLHF]]`. Do **NOT** write into `commons/`.

6. **Generate `hypotheses/$1/wiki/index.md`** — content-oriented catalog, organised by category:
   ```markdown
   # Wiki Index — <research question>

   ## Topic
   - [[../hypothesis]] — root node

   ## Methods (N)
   - [[methods/scaled-dot-product-attention]] — ...

   ## Concepts (N)
   - [[concepts/in-context-learning]] — ...

   ## Datasets (N)
   - [[datasets/glue]] — ...

   ## Open Problems (N)
   - [[open-problems/attention-quadratic-complexity]] — ...

   ## Sources (N)
   - [[sources/2017-vaswani-attention-is-all-you-need]] — ...

   ## Plans (0)
   ```

7. **Append entries to `hypotheses/$1/wiki/log.md`** for each source ingested:
   ```
   ## [YYYY-MM-DD HH:MM] ingest | <source-id>
   <new pages created> / <existing pages updated>
   ```

8. **Update `hypotheses/$1/hypothesis.md`** — set `status: wiki`, set `sources_count`, populate "key entities" section with wikilinks to the most important methods, concepts, and open problems.

9. **Append `hypotheses/$1/session.log.md`**:
   ```
   ## [YYYY-MM-DD HH:MM] wiki | $1
   Pages: sources=N, methods=M, concepts=C, datasets=D, open-problems=P.
   Contradictions noticed: <cross-source disagreements>.
   Commons candidates: <entities likely to recur across topics>.
   ```

10. **Stop and report.** Page counts by type, sources that couldn't be extracted, cross-source contradictions, commons candidates.

## Constraints

- Read from `raw/` only. **Do not modify `raw/`.**
- Write only to `wiki/` and the per-topic `session.log.md`.
- Every wiki page must have valid YAML frontmatter per context.md §4.
- Every wikilink must resolve to a real file. Broken links are a Pass 2 bug.
- Be idempotent — re-running Pass 2 should not duplicate pages.
- Do not write into `commons/`.
