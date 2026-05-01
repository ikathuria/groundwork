---
name: ingest-source
description: Incrementally ingest a single new source (paper, preprint, survey) into a research topic's wiki. Minimal, targeted update — does not regenerate the brief.
allowed-tools:
  - Read
  - Write
  - Edit
  - Glob
  - Grep
  - Bash
  - WebFetch
arguments:
  - name: slug
    description: The topic folder name (date-prefixed slug), e.g. "2026-04-25_transformer-attention-time-series".
    required: true
  - name: source
    description: Either a local file path under `hypotheses/<slug>/raw/`, or a URL to fetch into `raw/` first.
    required: true
---

# Ingest Source (Incremental)

**Read `context.md` first** if you haven't this session — especially §4 (schema) and §6.2 (Pass 2 spec, which this is a single-source variant of).

This skill is a **minimal, targeted** incremental ingest. Keep the diff small — only touch pages that this source actually affects.

## Inputs

- `slug` (positional 1): topic folder name
- `source` (positional 2): a local path under `raw/`, OR a URL to fetch

## Steps

1. **Locate or fetch the source.**
   - If `source` is a URL, fetch it into the appropriate subfolder of `hypotheses/<slug>/raw/` (papers / preprints / surveys / other). Prefer arXiv HTML5 if the URL is an arXiv link. Append a fully-formed JSONL line to `raw/fetch_log.jsonl`.
   - If `source` is a path that already lives in `raw/`, just read it.

2. **Read it.** For HTML: read directly. For PDFs: `pdftotext <file> -`. Extract: title, authors, year, venue, DOI, key claims, methods used, concepts introduced or applied, datasets used, limitations acknowledged, relationships to other sources in the corpus.

3. **Write `hypotheses/<slug>/wiki/sources/<id>.md`** with YAML frontmatter per `context.md` §4.4. Body: 2–3 sentence summary, key claims, methods/concepts/datasets/open-problems (as wikilinks), extends/contradicts (wikilinks to other sources), notable quotes.

4. **Update touched entity pages.** Every method / concept / dataset / open-problem this source mentions:
   - **(a) Update the existing wiki page** — add this source to its `sources` frontmatter list and to its body's citations; incorporate any new claims. OR
   - **(b) Create the entity page** if it doesn't exist yet, following the schema for that entity type (`wiki/methods/`, `wiki/concepts/`, `wiki/datasets/`, `wiki/open-problems/`).
   Always link bidirectionally (entity → source AND source → entity).

5. **Check for new open problems.** If this source documents a limitation, negative result, or open question not yet in the wiki as `wiki/open-problems/<slug>.md`, create a new open-problem page with `severity`, `affects_methods`, `sources`, `tags`.

6. **Update `wiki/index.md`** — add new pages, update counts.

7. **Append to `wiki/log.md`**:
   ```
   ## [YYYY-MM-DD HH:MM] ingest | <source-id>
   New pages: <list>. Updated pages: <list>. New open problems: <list>.
   ```

8. **Append to `hypotheses/<slug>/session.log.md`**:
   ```
   ## [YYYY-MM-DD HH:MM] ingest-source | <source-id>
   <one-line summary>
   ```

9. **Stop and report.** List which pages were created vs updated, and call out any new open problem this source surfaced. **Do not regenerate the brief.** The caller decides whether to run `/pass-3` to refresh.

## Constraints

- Stay minimal. Don't bulk-rewrite unrelated entity pages.
- Same hard rules as Pass 2: valid frontmatter, wikilinks must resolve, schema is canonical.
- **Don't run `/pass-3` automatically.** Brief regeneration is a separate, deliberate step.
