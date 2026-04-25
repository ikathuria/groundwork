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

5. **Execute the research plan.** WebSearch + WebFetch are **discovery-only** (find URLs, DOIs, metadata) — their output is LLM-summarised and **must never** populate `raw/`. For each source you decide to ingest, download the **complete original artifact** into the appropriate `raw/` subfolder using `curl -L --fail -o <path> <url>` (or `wget`) via the Bash tool. The non-negotiable rule: `raw/` must contain the **full** paper — body, methods, results, references — not an abstract, preview, paywall stub, or partial PDF.

   **Per-source preference order — pick the first tier the source supports:**

   **(a) Native text / structured form (preferred — easier for Pass 2 to read):**
   - **arXiv**: LaTeX source tarball (`https://arxiv.org/e-print/<id>` — most original form for arXiv) and/or HTML5 render (`https://arxiv.org/html/<id>`, fallback `https://ar5iv.labs.arxiv.org/html/<id>`).
   - **PubMed Central (OA subset)**: JATS XML (`https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pmc&id=<pmcid>`) or full HTML (`https://www.ncbi.nlm.nih.gov/pmc/articles/PMC<id>/`). JATS is the gold standard.
   - **bioRxiv / medRxiv**: full HTML (`https://www.biorxiv.org/content/<doi>v<v>.full`).
   - **protocols.io**: JSON via API.
   - **Retraction Watch / Crossref**: notice JSON / HTML.

   **(b) PDF + deterministic text extraction (when no native text form exists):**
   - `curl -L --fail -o <id>.pdf <url>`
   - `pdftotext -layout <id>.pdf <id>.txt` (poppler-utils — `brew install poppler` if missing). This is a deterministic transform, **not an LLM summary**, so the `.txt` companion is allowed in `raw/`.
   - Both `<id>.pdf` and `<id>.txt` live in `raw/papers/`.

   **(c) Discovery routers — never the artifact itself:**
   - **Semantic Scholar** (`api.semanticscholar.org`), **OpenAlex**, **Unpaywall**: query for metadata + the `openAccessPdf` URL, then resolve to tier (a) or (b).
   - **Google Scholar**: an index, not a host. No download endpoint. Use as a search surface to navigate to the real host (arXiv, PMC, publisher OA copy).

   **Verification — required before accepting any download:**
   - **Format**: `file <path>` reports the expected MIME; PDFs start with `%PDF-` (`head -c 5 <path>`); JSON parses with `jq empty`; LaTeX tarballs extract and contain at least one `.tex` with a `\begin{document}` block; JATS XML contains a `<body>` element (not just `<front>`).
   - **Completeness**: PDFs have ≥ 4 pages (`pdfinfo <path>` → `Pages:`); HTML full-text pages contain methods/results/references section headings (not just an abstract); reject paywall stubs ("Sign in", "Access through your institution", "Buy article" near the top of the body); minimum size sanity check (full papers typically ≥ 100KB for PDFs, ≥ 30KB for LaTeX/HTML).

   If verification fails: record `status: "failed-<reason>"` in `fetch_log.jsonl` and try the next preference tier or an alternate source (preprint, mirror, OA copy). **Never substitute a summary, abstract, or partial fetch** for the complete original.

   **Per-source bookkeeping:**
   - Append a JSONL line to `raw/fetch_log.jsonl`: `{timestamp, url, source_type, file_path, format, pages_or_bytes, sha256, status, title, authors, year, why_relevant}`. Log failed attempts too (with `status: "failed-<reason>"`, `file_path: null`).
   - Use the source-ID convention from `context.md` §5.2: `<year>-<first-author-lastname>-<short-slug>` for papers; `retractionwatch-<id>` and `protocolsio-<id>` for those types.
   - Compute sha256 with `shasum -a 256 <file>` (or `sha256sum`) on every stored file.

6. **Do NOT compile the wiki, summarise, or model-extract.** Pass 1 populates `raw/` with **complete original artifacts** (plus deterministic `pdftotext` companions where the only available form is PDF) and writes `hypothesis.md`. All abstracting, paraphrasing, model-driven extraction, and entity synthesis are Pass 2's job.

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

- `raw/` holds **only complete original artifacts** plus their deterministic plain-text extracts (e.g. `pdftotext` output). Never write LLM-generated summaries, abstracts, paraphrases, or notes into `raw/` — that's Pass 2.
- The artifact must be the **complete** original — full body, methods, results, references. Reject abstracts, previews, paywall stubs, single-page PDFs, and any partial fetch.
- Always prefer the most LLM-readable native form the host provides (LaTeX, HTML, JATS, JSON) over the PDF. Fall back to PDF + `pdftotext` only when no native text form exists.
- WebFetch / WebSearch are **discovery tools only**. The artifact in `raw/` must come from `curl`/`wget`, not from a tool that returns LLM-summarised text.
- Files in `raw/` are **immutable** once written. If you need to re-fetch, write to a new file with a `-v2` suffix.
- Never read from or modify another hypothesis's folder.
- Every file in `raw/` must have a corresponding entry in `raw/fetch_log.jsonl`. Failed fetches are also logged (with a non-OK `status`) but produce no file.
- Stay scoped: do not start writing wiki pages.
