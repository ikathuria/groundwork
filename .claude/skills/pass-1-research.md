---
name: pass-1-research
description: Pass 1 of the GROUNDWORK pipeline — deep research for a single research question. Refines the question, fans out across literature sources appropriate to the detected domain, downloads 30–60 sources into `hypotheses/<folder>/raw/`, creates `hypothesis.md`. Does NOT compile the wiki (that is Pass 2).
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
    description: Short kebab-case slug for the research topic, e.g. "transformer-attention-time-series". Will be prefixed with today's date to form the folder name `hypotheses/<YYYY-MM-DD>_<slug>/`.
    required: true
  - name: hypothesis
    description: The plain-English research question or topic in quotes.
    required: true
---

# Pass 1 — Deep Research

You are running **Pass 1** of the GROUNDWORK pipeline. **Read `context.md` at the repo root before doing anything** if you haven't already in this session — it contains the canonical schema, naming conventions, and operational specs.

## Inputs

- `slug` (positional 1): e.g. `transformer-attention-time-series`
- `hypothesis` (positional 2): the plain-English research question or topic

## Steps (in order)

1. **Create the research folder.** Compute today's date (`date +%Y-%m-%d`) and create:
   - `hypotheses/<YYYY-MM-DD>_<slug>/raw/papers/`
   - `hypotheses/<YYYY-MM-DD>_<slug>/raw/preprints/`
   - `hypotheses/<YYYY-MM-DD>_<slug>/raw/surveys/`
   - `hypotheses/<YYYY-MM-DD>_<slug>/raw/other/`

2. **Detect the domain** from the research question. Inspect keywords to determine which source mix to use:
   - **CS / AI / ML** → primary: arXiv (cs.*, stat.ML, eess.*), Semantic Scholar, ACM DL, IEEE Xplore, Papers With Code, OpenReview (NeurIPS/ICLR/ICML/EMNLP)
   - **Systems / HCI / Security** → primary: ACM DL, USENIX, IEEE S&P/CCS, arXiv
   - **Interdisciplinary / Other** → primary: arXiv, Semantic Scholar; supplement with SSRN, Springer/Nature OA, Google Scholar
   - Always use **Semantic Scholar** (`api.semanticscholar.org`) as a discovery backbone regardless of domain — it covers CS, physics, biology, and social sciences and returns structured metadata including open-access PDF links.

3. **Refine the research question** into structured form: research_question (sharpened), scope (what is in/out), domain (primary field), approach (methodology angle), context (why this is an open problem). Write this refinement down before proceeding.

4. **Write `hypothesis.md`** at the hypothesis folder root, with full YAML frontmatter per `context.md` §5.4. Use `type: research-topic` and `status: researching`. Body sections: refined question, scope, key entities (placeholder links — Pass 2 will fill these in), open questions.

5. **Generate a research plan.** List the queries you will run across:
   - **Primary literature** — arXiv API (`export.arxiv.org/api/query`), Semantic Scholar API (`api.semanticscholar.org/graph/v1/paper/search`), ACM Digital Library, IEEE Xplore API
   - **Venue-specific** — OpenReview API (`api2.openreview.net`) for NeurIPS / ICLR / ICML / EMNLP / ACL; Papers With Code (`paperswithcode.com/api/v1`) for benchmark papers
   - **Surveys / literature reviews** — search for "survey", "review", "tutorial", "overview" + topic on the above
   - **Cross-domain fallbacks** — Google Scholar web search, Semantic Scholar bulk search, SSRN for social-science adjacent work
   Aim for **30–60 sources total** (the tighter bound vs. wet-lab work reflects higher text density per CS paper). Print the plan before executing.

6. **Execute the research plan.** WebSearch + WebFetch are **discovery-only** (find URLs, DOIs, metadata) — their output is LLM-summarised and **must never** populate `raw/`. For each source you decide to ingest, download the **complete original artifact** into the appropriate `raw/` subfolder using `curl -L --fail -o <path> <url>` (or `wget`) via the Bash tool. The non-negotiable rule: `raw/` must contain the **full** paper — body, methods, results, references — not an abstract, preview, paywall stub, or partial PDF.

   **Per-source preference order — pick the first tier the source supports:**

   **(a) Native text / structured form (preferred):**
   - **arXiv**: HTML5 render (`https://arxiv.org/html/<id>`) or LaTeX source tarball (`https://arxiv.org/e-print/<id>`). HTML5 is preferred when it exists — directly readable by Pass 2. Fallback: `https://ar5iv.labs.arxiv.org/html/<id>`.
   - **OpenReview**: full PDF + JSON metadata (`https://api2.openreview.net/notes?id=<id>`); HTML via `https://openreview.net/forum?id=<id>` when available.
   - **ACM DL OA**: full HTML (`https://dl.acm.org/doi/<doi>`) when open access.
   - **Semantic Scholar**: follow the `openAccessPdf.url` field from the API response → resolves to arXiv, ACM, IEEE, or publisher OA copy.

   **(b) PDF + deterministic text extraction (when no native text form exists):**
   - `curl -L --fail -o <id>.pdf <url>`
   - `pdftotext -layout <id>.pdf <id>.txt` (poppler-utils). This is a deterministic transform, **not an LLM summary**, so the `.txt` companion is allowed in `raw/`.
   - Both `<id>.pdf` and `<id>.txt` live in `raw/papers/` (or `raw/surveys/` for surveys).

   **(c) Discovery routers — never the artifact itself:**
   - **Semantic Scholar**, **OpenAlex**, **Unpaywall**: use for metadata + open-access URL discovery only. Never treat their API responses as the artifact.
   - **Google Scholar**: search surface only. Navigate from results to the real host.
   - **Papers With Code**: use the API to get paper metadata + arXiv IDs; then download from arXiv. Do not treat paperswithcode pages as artifacts.

   **Verification — required before accepting any download:**
   - **Format**: `file <path>` reports expected MIME; PDFs start with `%PDF-`; JSON parses with `jq empty`; HTML contains `<body>`.
   - **Completeness**: PDFs have ≥ 4 pages (`pdfinfo` → `Pages:`); HTML full-text contains method/experiment/result headings or equivalent; reject paywalls ("Sign in", "Access required", "Purchase"); minimum size: ≥ 50 KB for CS papers (often shorter than wet-lab papers); ≥ 30 KB for HTML/LaTeX.

   If verification fails: record `status: "failed-<reason>"` in `fetch_log.jsonl` and try the next preference tier or an alternate mirror (arXiv is almost always the canonical open-access copy for CS/AI work).

   **Per-source bookkeeping:**
   - Append a JSONL line to `raw/fetch_log.jsonl`: `{timestamp, url, source_type, file_path, format, pages_or_bytes, sha256, status, title, authors, year, why_relevant}`. Log failed attempts too.
   - Use the source-ID convention: `<year>-<first-author-lastname>-<short-slug>` for papers.
   - Compute sha256 with `shasum -a 256 <file>` (or `sha256sum`) on every stored file.

7. **Do NOT compile the wiki, summarise, or model-extract.** Pass 1 populates `raw/` with **complete original artifacts** (plus deterministic `pdftotext` companions where needed) and writes `hypothesis.md`. All abstracting, paraphrasing, model-driven extraction, and entity synthesis are Pass 2's job.

8. **Append a `session.log.md` entry** at the hypothesis folder root:
   ```
   ## [YYYY-MM-DD HH:MM] research | <slug>
   Sources fetched: N total (papers: X, preprints: Y, surveys: Z, other: W).
   Notable: <anything worth flagging for Pass 2>.
   ```

9. **Stop and report.** Summarise:
   - Total sources fetched, breakdown by source_type
   - Sources tried but couldn't fetch (with reasons)
   - Key themes / open questions surfaced during discovery that Pass 2 should pay attention to

## Constraints

- `raw/` holds **only complete original artifacts** plus their deterministic plain-text extracts. Never write LLM-generated summaries, abstracts, or paraphrases into `raw/`.
- The artifact must be the **complete** original — full body, methods, results, references. Reject abstracts, previews, paywall stubs.
- Always prefer the most readable native form: arXiv HTML5 > LaTeX tarball > PDF + pdftotext.
- WebFetch / WebSearch are **discovery tools only**. Artifacts in `raw/` must come from `curl`/`wget`.
- Files in `raw/` are **immutable** once written. If you need to re-fetch, write to a new file with a `-v2` suffix.
- Never read from or modify another hypothesis's folder.
- Every file in `raw/` must have a corresponding entry in `raw/fetch_log.jsonl`.
- Stay scoped: do not start writing wiki pages.
