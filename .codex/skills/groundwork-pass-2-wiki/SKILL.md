---
name: groundwork-pass-2-wiki
description: Use when the user asks to run GROUNDWORK Pass 2 or compile the wiki for a hypothesis. Reads hypotheses/<slug>/raw/ and produces an Obsidian-compatible wiki with source pages plus aggregated methods, reagents, organisms, and failure modes.
---

# GROUNDWORK Pass 2 - Wiki Compile

Read `context.md` first, especially sections 5, 6, and 7.2. The context file is canonical.

## Trigger Forms

- `Run Pass 2 for <slug>`
- `Run GROUNDWORK Pass 2 for <slug>`
- `Compile the wiki for <slug>`

## Input

- `slug`: the full date-prefixed hypothesis folder name, e.g. `2026-04-25_trehalose-hela-cryopreservation`.

Files live under `hypotheses/<slug>/`.

## Steps

1. Read every source in `hypotheses/<slug>/raw/`.
   - For PDFs, extract text with `pdftotext <file> -` when available.
   - For JSON, markdown, HTML snippets, and text protocol entries, read directly.
   - Extract title, authors, year, DOI/URL, claims, methods, reagents, organisms, failure modes, and source relationships.

2. For each source, write `hypotheses/<slug>/wiki/sources/<id>.md` with YAML frontmatter per `context.md` section 5.4. Body sections:
   - 2-3 sentence summary
   - key claims
   - methods used
   - reagents
   - organisms
   - failure modes flagged
   - supports / contradicts
   - notable quotes with page refs where available

3. Aggregate entities. Every distinct method, reagent, organism, and failure mode mentioned across sources gets a page:
   - `wiki/methods/<slug>.md`
   - `wiki/reagents/<slug>.md`
   - `wiki/organisms/<slug>.md`
   - `wiki/failure-modes/<slug>.md`

4. Cross-link bidirectionally. Source pages link to entity pages; entity pages list the sources that mention them. Use Obsidian wikilinks.

5. Check `commons/` before creating an entity page. If a matching commons page exists, link to it with a relative wikilink such as `[[../../../commons/methods/qPCR|qPCR]]`. Do not write into `commons/` from Pass 2.

6. Generate `wiki/index.md` with catalog sections for Hypothesis, Methods, Reagents, Organisms, Failure Modes, Sources, and Plans.

7. Append `wiki/log.md` for each source:

```markdown
## [YYYY-MM-DD HH:MM] ingest | <source-id>
<new pages created> / <existing pages updated>
```

8. Update `hypotheses/<slug>/hypothesis.md`:
   - set `status: wiki`
   - set `sources_count`
   - populate key entities with wikilinks

9. Append `hypotheses/<slug>/session.log.md`:

```markdown
## [YYYY-MM-DD HH:MM] wiki | <slug>
Pages: sources=N, methods=M, reagents=R, organisms=O, failure-modes=F.
Promotion candidates: <entities that look like they should be in commons>.
Contradictions noticed: <any cross-source disagreements>.
```

10. Report page counts, extraction failures, contradictions, and commons-promotion candidates.

## Constraints

- Read from `raw/` only. Do not modify `raw/`.
- Write only to `wiki/`, `hypothesis.md`, and the per-hypothesis `session.log.md`.
- Every wiki page needs valid YAML frontmatter.
- Every wikilink must resolve to a real file in the vault or `commons/`.
- Re-running Pass 2 should not duplicate pages.
