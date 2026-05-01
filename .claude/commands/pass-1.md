---
description: Pass 1 of the GROUNDWORK pipeline — deep research for a single research question. Pre-filters 80–120 candidates via Semantic Scholar quality signals, downloads 35–45 high-signal papers into `hypotheses/<slug>/raw/`, creates `hypothesis.md`.
argument-hint: <date_prefixed_slug> "<research question>"
allowed-tools:
  - Read
  - Write
  - Edit
  - Bash
  - WebFetch
  - WebSearch
  - Glob
  - Grep
---

# Pass 1 — Deep Research

You are running **Pass 1** of the GROUNDWORK pipeline. **Read `context.md` at the repo root before doing anything** if you haven't already in this session.

## Inputs (filled in at invocation)

- **Topic folder name**: `$1` — the FULL date-prefixed slug, e.g. `2026-04-25_transformer-attention-time-series`. Use `$1` verbatim as the folder name under `hypotheses/`. Do NOT re-compute the date.
- **Research question**: `$2` — the plain-English research question.

## Steps (in order)

1. **Create the research folder.** Create:
   - `hypotheses/$1/raw/papers/`
   - `hypotheses/$1/raw/preprints/`
   - `hypotheses/$1/raw/surveys/`
   - `hypotheses/$1/raw/other/`

2. **Detect the domain** from the research question. Inspect keywords to determine source mix:
   - **CS / AI / ML** → primary: arXiv (cs.*, stat.ML, eess.*), Semantic Scholar, ACM DL, IEEE Xplore, Papers With Code, OpenReview (NeurIPS/ICLR/ICML/EMNLP/ACL)
   - **Systems / HCI / Security** → primary: ACM DL, USENIX, IEEE S&P/CCS, arXiv
   - **Interdisciplinary** → arXiv, Semantic Scholar; supplement with SSRN, Springer/Nature OA
   Always use Semantic Scholar as the discovery backbone regardless of domain.

3. **Refine the research question** into structured form: research_question (sharpened), scope (in/out), domain (primary CS subfield), approach (methodology angle), context (why this is open). Write this down before proceeding.

4. **Write `hypotheses/$1/hypothesis.md`** with YAML frontmatter (`type: research-topic`, `status: researching`). Body: refined question, scope, key entities (placeholder links), open questions.

5. **Collect 80–120 candidate references** (metadata only — no downloading yet). Run queries across:
   - arXiv API (`export.arxiv.org/api/query`)
   - Semantic Scholar API (`api.semanticscholar.org/graph/v1/paper/search`)
   - OpenReview API (`api2.openreview.net`) for NeurIPS/ICLR/ICML/EMNLP/ACL
   - Papers With Code (`paperswithcode.com/api/v1`) for benchmark papers
   - Also search for "survey", "review", "tutorial" + topic for overview papers
   Print the candidate list before proceeding.

6. **Pre-filter candidates before downloading.** This is the most important speed lever.

   **(a) Fetch metadata in bulk from Semantic Scholar.** For every candidate with an arXiv ID, DOI, or S2 paper ID:
   ```
   curl "https://api.semanticscholar.org/graph/v1/paper/batch" \
     -X POST -H 'Content-Type: application/json' \
     -d '{"ids":[...up to 100 IDs...]}' \
     '?fields=title,year,citationCount,influentialCitationCount,venue,externalIds,openAccessPdf,publicationTypes'
   ```
   Batch up to 100 IDs per call.

   **(b) Score each candidate:**
   - `influentialCitationCount ≥ 5` → +3 pts
   - `citationCount ≥ 20` → +2 pts; `≥ 5` → +1 pt
   - Top venue (NeurIPS, ICLR, ICML, ACL, EMNLP, CVPR, ICCV, SIGIR, KDD, WWW, USENIX, IEEE S&P, CCS, OSDI, SOSP) → +3 pts
   - arXiv-only, year ≥ current year - 1 (very recent) → +1 pt
   - Survey/review/tutorial → +2 pts
   - `openAccessPdf` exists → +1 pt
   - Year < current year - 10 → -1 pt

   **(c) Rank and cut.** Keep top 35–45. Always keep all surveys (max 10) and top-2 most-cited per year for last 3 years. Write ranked list to `hypotheses/$1/raw/candidates.jsonl`.

7. **Execute downloads — in parallel batches of 12.**

   **Preference order — always try (a) first:**

   **(a) arXiv HTML5 — first choice for any arXiv paper:**
   - HEAD check: `curl -sI "https://arxiv.org/html/<id>" | grep -i content-type`
   - If `text/html`: `curl -L --fail -o raw/papers/<id>.html "https://arxiv.org/html/<id>"`
   - Fallback chain: `ar5iv.labs.arxiv.org/html/<id>` → LaTeX tarball `arxiv.org/e-print/<id>` → PDF `arxiv.org/pdf/<id>.pdf`

   **(b) Other native-text forms:**
   - OpenReview: PDF + JSON metadata from `api2.openreview.net/notes?id=<id>`
   - ACM DL OA: full HTML at `dl.acm.org/doi/<doi>`
   - Semantic Scholar: follow `openAccessPdf.url` → apply arXiv HTML5 preference if it's an arXiv URL

   **(c) PDF + pdftotext (last resort):**
   - `curl -L --fail -o <id>.pdf <url>`
   - `pdftotext -layout <id>.pdf <id>.txt`
   - Both files live in `raw/papers/` (or `raw/surveys/` for surveys)

   **Parallel execution:**
   ```bash
   for url in "${batch[@]}"; do
     curl -L --fail --silent -o "$outpath" "$url" &
   done
   wait
   ```
   Group downloads into batches of 12.

   **Verification — required before accepting any download:**
   - PDFs: `file <path>` shows PDF; `pdfinfo` shows ≥ 4 pages; size ≥ 50 KB
   - HTML: contains `<body>`; has method/result/conclusion headings; size ≥ 30 KB; no paywall ("Sign in", "Access required")
   - On failure: record `status: "failed-<reason>"` in `fetch_log.jsonl` and try next tier

   **Bookkeeping per source:**
   - Append to `hypotheses/$1/raw/fetch_log.jsonl`: `{timestamp, url, source_type, file_path, format, pages_or_bytes, sha256, status, title, authors, year, why_relevant}`
   - Source ID convention: `<year>-<first-author-lastname>-<short-slug>`
   - Compute sha256: `sha256sum <file>` (or `shasum -a 256`)

8. **Do NOT compile the wiki, summarise, or model-extract.** All synthesis is Pass 2's job.

9. **Append `hypotheses/$1/session.log.md`**:
   ```
   ## [YYYY-MM-DD HH:MM] research | $1
   Sources fetched: N total (papers: X, preprints: Y, surveys: Z, other: W).
   Candidates collected: C. Pre-filter kept: K.
   Notable: <anything worth flagging for Pass 2>.
   ```

10. **Stop and report.** Summarise: sources fetched by type, failed fetches with reasons, key themes surfaced during discovery.

## Constraints

- Collect metadata first, download second. `raw/candidates.jsonl` is the gating record.
- `raw/` holds only complete original artifacts + deterministic pdftotext extracts. No LLM summaries.
- Always try arXiv HTML5 first for any arXiv paper.
- WebFetch / WebSearch are discovery tools only. Artifacts must come from `curl`/`wget`.
- Files in `raw/` are immutable once written. Re-fetch into a `-v2` file if needed.
- Every file in `raw/` must have a corresponding `fetch_log.jsonl` entry.
- Stay scoped: do not start writing wiki pages.
