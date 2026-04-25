---
name: ingest-source
description: Incrementally ingest a single new source (paper, protocol, retraction) into a hypothesis's wiki. Used for the live demo "ingest one paper" moment — minimal, targeted update.
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
    description: The hypothesis folder name (date-prefixed slug), e.g. "2026-04-25_trehalose-hela-cryopreservation".
    required: true
  - name: source
    description: Either a local file path under `hypotheses/<slug>/raw/`, or a URL to fetch into `raw/` first.
    required: true
---

# Ingest Source (Incremental)

**Read `context.md` first** if you haven't this session — especially §5 (schema) and §7.2 (Pass 2 spec, which this is a single-source variant of).

This skill is a **minimal, targeted** incremental ingest. It is what runs behind the UI's "ingest one paper" demo button and behind the Retraction Watch live-update demo moment. Keep the diff small.

## Inputs

- `slug` (positional 1): hypothesis folder name
- `source` (positional 2): a local path under `raw/`, OR a URL to fetch

## Steps

1. **Locate or fetch the source.**
   - If `source` is a URL, fetch it (PDF, HTML, JSON) into the appropriate subfolder of `hypotheses/<slug>/raw/` (papers / protocols / retractions / catalogs). Append a fully-formed JSONL line to `raw/fetch_log.jsonl`.
   - If `source` is a path that already lives in `raw/`, just read it.

2. **Read it.** Extract text from PDFs (`pdftotext`). Identify: title, authors, year, DOI, source_type, claims, methods used, reagents mentioned, organisms, failure modes flagged.

3. **Write `hypotheses/<slug>/wiki/sources/<id>.md`** with full YAML frontmatter per `context.md` §5.4. Body: 2–3 sentence summary, key claims, methods/reagents/organisms/failure-modes (as wikilinks), supports/contradicts (wikilinks to other sources), quotes.

4. **Update touched entity pages.** Every method / reagent / organism / failure-mode this source mentions: either
   - **(a) update its existing wiki page** — add this source to its `sources` frontmatter list and to its body's citations; incorporate any new claims; OR
   - **(b) create the entity page** if it doesn't exist yet, following the schema for that entity type.
   Always link bidirectionally (entity → source AND source → entity).

5. **Check for new failure modes — be especially careful here.** Retractions and PubPeer entries often surface failure modes not yet in the wiki. If this source documents a failure mode that doesn't exist as `wiki/failure-modes/<slug>.md` (or in `commons/failure-modes/`), **create a new failure-mode page** with `severity`, `frequency_estimate`, `applies_to_methods`, `applies_to_reagents`, `applies_to_step_kinds`, `sources`. This is the GROUNDWORK differentiator — be precise about what failed, where, and how to detect it.

6. **Update `wiki/index.md`** — add new pages, update counts.

7. **Append to `wiki/log.md`**:
   ```
   ## [YYYY-MM-DD HH:MM] ingest | <source-id>
   New pages: <list>. Updated pages: <list>. New failure modes: <list>.
   ```

8. **Append to `hypotheses/<slug>/session.log.md`**:
   ```
   ## [YYYY-MM-DD HH:MM] ingest-source | <source-id>
   <one-line summary>
   ```

9. **Stop and report.** List which pages were created vs updated, and call out any new failure mode this source surfaced. **Do not regenerate the plan.** The caller decides whether to run `/pass-3` to refresh the Lab Brief.

## Constraints

- Stay minimal. Don't bulk-rewrite unrelated entity pages.
- Same hard rules as Pass 2: valid frontmatter, wikilinks must resolve, schema is canonical.
- **Don't run `/pass-3` automatically.** Plan regeneration is a separate, deliberate step.
