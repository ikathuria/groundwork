---
name: groundwork-ingest-source
description: Use when the user asks for /ingest-source or incremental ingestion of one paper, protocol, retraction, catalog snippet, local raw file, or URL into an existing GROUNDWORK hypothesis wiki.
---

# GROUNDWORK Ingest Source - Incremental

Read `context.md` first, especially sections 5 and 7.2. This is a single-source variant of Pass 2.

## Trigger Forms

- `/ingest-source <slug> <path|url>`
- `Ingest this source into <slug>: <path|url>`
- `Add this paper/retraction/protocol to the wiki`

## Inputs

- `slug`: full date-prefixed hypothesis folder name.
- `source`: local path under `hypotheses/<slug>/raw/` or a URL to fetch into `raw/`.

## Steps

1. Locate or fetch the source.
   - If it is a URL, fetch it into the appropriate `raw/` subfolder and append a complete row to `raw/fetch_log.jsonl`.
   - If it already lives in `raw/`, read it without modifying it.

2. Extract title, authors, year, DOI, source type, claims, methods, reagents, organisms, and failure modes.

3. Write `hypotheses/<slug>/wiki/sources/<id>.md` with full YAML frontmatter and source-page body sections from `context.md`.

4. Update touched entity pages. For each mentioned method, reagent, organism, or failure mode:
   - update the existing page, or
   - create a new page if it does not exist.

5. Treat new failure modes as first-class artifacts. If a retraction or PubPeer-style source documents a failure mode not yet present, create a precise `wiki/failure-modes/<slug>.md` page with severity, frequency estimate if available, affected methods/reagents/step kinds, sources, detection, and mitigation.

6. Update `wiki/index.md`.

7. Append `wiki/log.md`:

```markdown
## [YYYY-MM-DD HH:MM] ingest | <source-id>
New pages: <list>. Updated pages: <list>. New failure modes: <list>.
```

8. Append `hypotheses/<slug>/session.log.md`:

```markdown
## [YYYY-MM-DD HH:MM] ingest-source | <source-id>
<one-line summary>
```

9. Report created pages, updated pages, and any new failure modes. Do not regenerate the plan.

## Constraints

- Keep the diff targeted.
- Do not bulk-rewrite unrelated entity pages.
- Do not modify existing `raw/` files.
- Do not run Pass 3 automatically.
