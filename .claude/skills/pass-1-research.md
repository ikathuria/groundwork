---
name: pass-1-research
description: Pass 1 of the GROUNDWORK pipeline — deep research for a single hypothesis. Refines the hypothesis, fans out across literature / protocol / retraction sources, downloads 30–100 sources into `hypotheses/<slug>/raw/`, creates `hypothesis.md`. Does NOT compile the wiki (that is Pass 2).
allowed-tools:
  - Read
  - Write
  - Edit
  - Bash
  - WebFetch
  - WebSearch
  - Glob
  - Grep
arguments:
  - name: slug
    description: Short kebab-case slug for the hypothesis, e.g. "trehalose-hela-cryopreservation". Will be prefixed with today's date to form the folder name `hypotheses/<YYYY-MM-DD>_<slug>/`.
    required: true
  - name: hypothesis
    description: The plain-English hypothesis text in quotes.
    required: true
---

# Pass 1 — Deep Research

You are running **Pass 1** of the GROUNDWORK pipeline. **Read `context.md` at the repo root before doing anything** if you haven't already in this session — it contains the canonical schema, naming conventions, and operational specs (especially §5 schema and §7.1 Pass 1 spec).

## Inputs

- `slug` (positional 1): e.g. `trehalose-hela-cryopreservation`
- `hypothesis` (positional 2): the plain-English hypothesis text

## Steps (in order)

1. **Create the hypothesis folder.** Compute today's date (`date +%Y-%m-%d`) and create:
   - `hypotheses/<YYYY-MM-DD>_<slug>/raw/papers/`
   - `hypotheses/<YYYY-MM-DD>_<slug>/raw/protocols/`
   - `hypotheses/<YYYY-MM-DD>_<slug>/raw/retractions/`
   - `hypotheses/<YYYY-MM-DD>_<slug>/raw/catalogs/`

2. **Refine the hypothesis** into structured form: intervention, outcome, threshold, mechanism, control. (See the brief's "What makes these strong inputs" guidance — a strong hypothesis names a specific intervention, a measurable outcome with a threshold, a mechanistic reason, and a clear control.)

3. **Write `hypothesis.md`** at the hypothesis folder root, with full YAML frontmatter per `context.md` §5.4. Set `status: researching`. Body sections: refined hypothesis, scope, success criteria, key entities (placeholder links — Pass 2 will fill these in), open questions.

4. **Generate a research plan.** List the queries you will run across:
   - **Literature** — Semantic Scholar (`api.semanticscholar.org`), arXiv, Google Scholar via web search
   - **Protocols** — protocols.io, Bio-protocol, Nature Protocols, JOVE, OpenWetWare
   - **Negative results** — Retraction Watch, PubPeer
   - **Suppliers** (only those relevant to the hypothesis's reagents) — Sigma-Aldrich, Thermo Fisher, Promega, Qiagen, ATCC, Addgene, IDT
   Aim for **30–100 sources total**. Adjust if the hypothesis is unusually narrow or broad. Print the plan before executing.

5. **Execute the research plan.** Use WebSearch and WebFetch. For each source you decide to ingest:
   - Download the PDF (or save the protocol / retraction / catalog snippet as text or markdown) into the appropriate `raw/` subfolder.
   - Append a JSONL line to `raw/fetch_log.jsonl` with: `{timestamp, url, source_type, file_path, sha256, title, authors, year, why_relevant}`.
   - Use the source-ID convention from `context.md` §5.2: `<year>-<first-author-lastname>-<short-slug>` for papers; `retractionwatch-<id>` and `protocolsio-<id>` for those types.
   - Compute sha256 with `shasum -a 256 <file>` (or `sha256sum`) and capture the digest.

6. **Do NOT compile the wiki.** Pass 1 only populates `raw/` and writes `hypothesis.md`. The wiki is Pass 2's job.

7. **Append a `session.log.md` entry** at the hypothesis folder root:
   ```
   ## [YYYY-MM-DD HH:MM] research | <slug>
   Sources fetched: N total (papers: X, protocols: Y, retractions: Z, catalogs: W).
   Notable: <anything worth flagging for Pass 2>.
   ```

8. **Stop and report.** Summarise:
   - Total sources fetched, breakdown by source_type
   - Sources tried but couldn't fetch (with reasons — paywalled, 404, etc.)
   - Patterns or open questions worth Pass 2's attention

## Constraints

- Files in `raw/` are **immutable** once written. If you need to re-fetch, write to a new file with a `-v2` suffix.
- Never read from or modify another hypothesis's folder.
- Every file in `raw/` must have a corresponding entry in `raw/fetch_log.jsonl`.
- Stay scoped: do not start writing wiki pages.
