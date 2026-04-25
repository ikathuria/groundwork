---
name: groundwork-pass-1-research
description: Use when the user asks for GROUNDWORK Pass 1, /pass-1, or deep research for a single scientific hypothesis. Refines the hypothesis, creates the dated hypothesis folder, fetches raw papers/protocols/retractions/catalog snippets into hypotheses/<slug>/raw/, writes hypothesis.md, and appends session logs. Does not compile the wiki.
---

# GROUNDWORK Pass 1 - Deep Research

Read `context.md` at the repo root before doing anything. It is the canonical schema and overrides this skill if there is a mismatch.

## Trigger Forms

- `/pass-1 <slug> "<hypothesis>"`
- `Run Pass 1 for <slug> with hypothesis "..."`
- `Do the research pass for this hypothesis: ...`

## Inputs

- `slug`: short kebab-case label, e.g. `trehalose-hela-cryopreservation`.
- `hypothesis`: the plain-English scientific hypothesis.

If the slug is not date-prefixed, compute today's date with `date +%Y-%m-%d` and create the folder as `hypotheses/<YYYY-MM-DD>_<slug>/`.

## Steps

1. Create the hypothesis folder and raw subfolders:
   - `raw/papers/`
   - `raw/protocols/`
   - `raw/retractions/`
   - `raw/catalogs/`

2. Refine the hypothesis into structured fields:
   - intervention
   - outcome
   - threshold
   - mechanism
   - control

3. Write `hypothesis.md` at the hypothesis folder root with YAML frontmatter per `context.md` section 5.4. Set `status: researching`. Include body sections for refined hypothesis, scope, success criteria, key entities placeholders, and open questions.

4. Generate and state a research plan before fetching. Cover:
   - literature: Semantic Scholar, arXiv, Google Scholar via web search
   - protocols: protocols.io, Bio-protocol, Nature Protocols, JOVE, OpenWetWare
   - negative results: Retraction Watch, PubPeer
   - suppliers relevant to the hypothesis: Sigma-Aldrich, Thermo Fisher, Promega, Qiagen, ATCC, Addgene, IDT

5. Execute the research plan. For each ingested source:
   - Save the PDF, protocol, retraction, or catalog snippet under the appropriate `raw/` subfolder.
   - Append one JSONL row to `raw/fetch_log.jsonl` with `timestamp`, `url`, `source_type`, `file_path`, `sha256`, `title`, `authors`, `year`, and `why_relevant`.
   - Use source IDs from `context.md`: `<year>-<first-author-lastname>-<short-slug>`, `retractionwatch-<id>`, or `protocolsio-<id>`.
   - Compute sha256 with `shasum -a 256 <file>` or an equivalent command.

6. Do not compile the wiki. Pass 1 writes `raw/`, `hypothesis.md`, and `session.log.md` only.

7. Append `session.log.md`:

```markdown
## [YYYY-MM-DD HH:MM] research | <slug>
Sources fetched: N total (papers: X, protocols: Y, retractions: Z, catalogs: W).
Notable: <anything worth flagging for Pass 2>.
```

8. Report:
   - total sources fetched by type
   - sources tried but not fetched, with reasons
   - patterns or open questions for Pass 2

## Constraints

- Files in `raw/` are immutable once written. If re-fetching, write a new `-v2` file.
- Do not read from or modify another hypothesis folder.
- Every raw file must have a corresponding `raw/fetch_log.jsonl` entry.
- Stay scoped: do not write wiki pages.
