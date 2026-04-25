---
name: groundwork-pass-1-research
description: Use when the user asks to run GROUNDWORK Pass 1 or do deep research for a single scientific hypothesis. Refines the hypothesis, creates the dated hypothesis folder, fetches raw papers/protocols/retractions/catalog snippets into hypotheses/<slug>/raw/, writes hypothesis.md, and appends session logs. Does not compile the wiki.
---

# GROUNDWORK Pass 1 - Deep Research

Read `context.md` at the repo root before doing anything. It is the canonical schema and overrides this skill if there is a mismatch.

## Trigger Forms

- `Run Pass 1 for <slug> with hypothesis "..."`
- `Run GROUNDWORK Pass 1 for slug <slug> with hypothesis "..."`
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

5. Execute the research plan. Web search and any URL-summarising fetcher are **discovery-only** — used to find candidate URLs, DOIs, and bibliographic metadata. They must never be used to populate `raw/` (their output is summarised, not the original artifact). For each source you decide to ingest, download the **complete original artifact** into the appropriate `raw/` subfolder using `curl -L --fail -o <path> <url>` (or `wget`) via shell. The non-negotiable rule: `raw/` must contain the **full** paper — body, methods, results, references — not an abstract, preview, paywall stub, or partial PDF.

   Per-source preference order — use the first tier the source supports:

   (a) Native text / structured form (preferred):
   - arXiv: LaTeX source tarball (`https://arxiv.org/e-print/<id>` — most original form for arXiv) and/or HTML5 render (`https://arxiv.org/html/<id>`, fallback `https://ar5iv.labs.arxiv.org/html/<id>`).
   - PubMed Central (OA subset): JATS XML (`https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pmc&id=<pmcid>`) or full HTML (`https://www.ncbi.nlm.nih.gov/pmc/articles/PMC<id>/`). JATS is the gold standard.
   - bioRxiv / medRxiv: full HTML (`https://www.biorxiv.org/content/<doi>v<v>.full`).
   - protocols.io: JSON via API.
   - Retraction Watch / Crossref: notice JSON / HTML.

   (b) PDF + deterministic text extraction (when no native text form exists):
   - `curl -L --fail -o <id>.pdf <url>`
   - `pdftotext -layout <id>.pdf <id>.txt` (poppler-utils — `brew install poppler` if missing). This is a deterministic transform, **not** an LLM summary, so the `.txt` companion is allowed in `raw/`.
   - Both `<id>.pdf` and `<id>.txt` live in `raw/papers/`.

   (c) Discovery routers — never the artifact itself:
   - Semantic Scholar (`api.semanticscholar.org`), OpenAlex, Unpaywall: query for metadata + the `openAccessPdf` URL, then resolve to (a) or (b).
   - Google Scholar: an index, not a host. No download endpoint. Use as a search surface to navigate to the real host (arXiv, PMC, publisher OA copy).

   Verification — required before accepting any download:
   - Format: `file <path>` reports the expected MIME; PDFs start with `%PDF-` (`head -c 5 <path>`); JSON parses with `jq empty`; LaTeX tarballs extract and contain at least one `.tex` with a `\begin{document}` block; JATS XML contains a `<body>` element (not just `<front>`).
   - Completeness: PDFs have ≥ 4 pages (`pdfinfo <path>` → `Pages:`); HTML full-text pages contain methods/results/references section headings; reject paywall stubs ("Sign in", "Access through your institution", "Buy article" near the top of the body); minimum size sanity (full papers typically ≥ 100KB for PDFs, ≥ 30KB for LaTeX/HTML).

   If verification fails: record `status: "failed-<reason>"` in `fetch_log.jsonl` and try the next preference tier or an alternate source (preprint, mirror, OA copy). Never substitute a summary, abstract, or partial fetch for the complete original.

   Per-source bookkeeping:
   - Append one JSONL row to `raw/fetch_log.jsonl` with `timestamp`, `url`, `source_type`, `file_path`, `format`, `pages_or_bytes`, `sha256`, `status`, `title`, `authors`, `year`, and `why_relevant`. Log failed attempts too (`status: "failed-<reason>"`, `file_path: null`).
   - Use source IDs from `context.md`: `<year>-<first-author-lastname>-<short-slug>`, `retractionwatch-<id>`, or `protocolsio-<id>`.
   - Compute sha256 with `shasum -a 256 <file>` or an equivalent command on every stored file.

6. Do not compile the wiki, summarise, or model-extract. Pass 1 writes only **complete original artifacts** to `raw/` (plus deterministic `pdftotext` companions where the only available form is PDF), plus `hypothesis.md` and `session.log.md`. All abstracting, paraphrasing, model-driven extraction, and entity synthesis are Pass 2's job.

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

- `raw/` holds **only complete original artifacts** plus their deterministic plain-text extracts (e.g. `pdftotext` output). Never write LLM-generated summaries, abstracts, paraphrases, or notes into `raw/` — that's Pass 2.
- The artifact must be the **complete** original — full body, methods, results, references. Reject abstracts, previews, paywall stubs, single-page PDFs, and any partial fetch.
- Always prefer the most LLM-readable native form the host provides (LaTeX, HTML, JATS, JSON) over the PDF. Fall back to PDF + `pdftotext` only when no native text form exists.
- Web search / URL-summarising fetchers are **discovery tools only**. The artifact in `raw/` must come from `curl`/`wget`, not from a tool that returns summarised text.
- Files in `raw/` are immutable once written. If re-fetching, write a new `-v2` file.
- Do not read from or modify another hypothesis folder.
- Every raw file must have a corresponding `raw/fetch_log.jsonl` entry. Failed fetches are also logged (with a non-OK `status`) but produce no file.
- Stay scoped: do not write wiki pages.
