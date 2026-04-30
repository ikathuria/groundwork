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
   Aim to collect **80–120 candidate references** in this step (metadata only — no downloading yet). Print the plan before executing.

6. **Pre-filter candidates before downloading.** This is the most important speed lever. After collecting candidates from step 5:

   **(a) Fetch metadata in bulk from Semantic Scholar.** For every candidate that has an arXiv ID, DOI, or S2 paper ID, call:
   ```
   curl "https://api.semanticscholar.org/graph/v1/paper/batch" \
     -X POST -H 'Content-Type: application/json' \
     -d '{"ids":[...up to 100 IDs...]}' \
     '?fields=title,year,citationCount,influentialCitationCount,venue,externalIds,openAccessPdf,publicationTypes'
   ```
   Batch up to 100 IDs per call. This takes ~2s per batch and returns quality signals for every paper at once — far faster than downloading then deciding.

   **(b) Score each candidate** on these signals (higher = keep):
   - `influentialCitationCount ≥ 5` → +3 pts (highly cited by follow-on work)
   - `citationCount ≥ 20` → +2 pts; `≥ 5` → +1 pt
   - Published in a top venue (NeurIPS, ICLR, ICML, ACL, EMNLP, CVPR, ICCV, SIGIR, KDD, WWW, USENIX, IEEE S&P, CCS, OSDI, SOSP) → +3 pts
   - Published in arXiv only, year ≥ current year - 1 (very recent, no citation signal yet) → +1 pt (recency bonus — don't penalise new work)
   - Is a survey/review/tutorial (detected by `publicationTypes` or title keywords) → +2 pts (high density)
   - `openAccessPdf` exists → +1 pt (confirms we can actually download it)
   - Year < current year - 10 → -1 pt (foundational only if high citation count saves it)

   **(c) Rank and cut.** Sort by score descending. Keep the **top 35–45 candidates** for download. Also always keep:
   - All survey/review papers in the candidate set regardless of score (max 10)
   - The top-2 most-cited paper per year for the last 3 years (recency coverage)
   
   Write the ranked candidate list (with scores) to `raw/candidates.jsonl` before proceeding. This file is the audit trail that explains why each paper was or wasn't downloaded.

7. **Execute downloads — in parallel batches.** WebSearch + WebFetch are **discovery-only** (find URLs, DOIs, metadata) — their output is LLM-summarised and **must never** populate `raw/`. For each candidate that passed the filter, download the **complete original artifact** into the appropriate `raw/` subfolder.

   **Per-source preference order — always try tier (a) first:**

   **(a) arXiv HTML5 — first choice for any arXiv paper:**
   - Check `https://arxiv.org/html/<id>` with a HEAD request: `curl -sI "https://arxiv.org/html/<id>" | grep -i content-type`
   - If content-type is `text/html`, download the full page: `curl -L --fail -o raw/papers/<id>.html "https://arxiv.org/html/<id>"`
   - HTML5 papers are directly readable by Pass 2 — no pdftotext needed, no binary extraction, and they load 3-5× faster than PDFs.
   - Fallback chain if HTML5 doesn't exist: `ar5iv.labs.arxiv.org/html/<id>` → LaTeX tarball `arxiv.org/e-print/<id>` → PDF `arxiv.org/pdf/<id>.pdf`

   **(b) Other native-text forms:**
   - **OpenReview**: full PDF + JSON metadata from `api2.openreview.net/notes?id=<id>`; HTML from `openreview.net/forum?id=<id>` if available.
   - **ACM DL OA**: full HTML at `dl.acm.org/doi/<doi>` when open access.
   - **Semantic Scholar**: follow the `openAccessPdf.url` from the metadata batch → usually resolves to an arXiv, ACM, or IEEE OA copy. Apply the same arXiv HTML5 preference if the URL is an arXiv link.

   **(c) PDF + deterministic text extraction (last resort when no native text form exists):**
   - `curl -L --fail -o <id>.pdf <url>`
   - `pdftotext -layout <id>.pdf <id>.txt` (poppler-utils). This is a deterministic transform, **not an LLM summary**, so the `.txt` companion is allowed in `raw/`.
   - Both `<id>.pdf` and `<id>.txt` live in `raw/papers/` (or `raw/surveys/` for surveys).

   **(d) Discovery routers — never the artifact itself:**
   - **Semantic Scholar**, **OpenAlex**, **Unpaywall**: use for metadata + open-access URL discovery only.
   - **Google Scholar**: search surface only. Navigate from results to the real host.
   - **Papers With Code**: use the API to get paper metadata + arXiv IDs; then download from arXiv.

   **Parallel download execution — run in batches of 12:**
   ```bash
   # Build a download list, then fire 12 at once using & + wait
   for url in "${batch[@]}"; do
     curl -L --fail --silent -o "$outpath" "$url" &
   done
   wait   # blocks until all 12 finish
   ```
   Group the 35-45 downloads into batches of 12. Each batch takes roughly the time of the slowest download in the batch rather than the sum. For arXiv HTML5 (typically 100-400 KB), a 12-batch completes in ~3-5s rather than ~30s serial.

   **Verification — required before accepting any download:**
   - **Format**: `file <path>` reports expected MIME; PDFs start with `%PDF-`; HTML contains `<body>`.
   - **Completeness**: PDFs have ≥ 4 pages (`pdfinfo` → `Pages:`); HTML full-text contains method/experiment/result headings or equivalent; reject paywalls ("Sign in", "Access required", "Purchase"); minimum size: ≥ 50 KB for PDFs; ≥ 30 KB for HTML.

   If verification fails: record `status: "failed-<reason>"` in `fetch_log.jsonl` and try the next preference tier. arXiv is almost always the canonical open-access copy for CS/AI work — retry there before giving up.

   **Per-source bookkeeping:**
   - Append a JSONL line to `raw/fetch_log.jsonl`: `{timestamp, url, source_type, file_path, format, pages_or_bytes, sha256, status, title, authors, year, why_relevant}`. Log failed attempts too.
   - Use the source-ID convention: `<year>-<first-author-lastname>-<short-slug>` for papers.
   - Compute sha256 with `shasum -a 256 <file>` (or `sha256sum`) on every stored file.

8. **Do NOT compile the wiki, summarise, or model-extract.** Pass 1 populates `raw/` with **complete original artifacts** (plus deterministic `pdftotext` companions where needed) and writes `hypothesis.md`. All abstracting, paraphrasing, model-driven extraction, and entity synthesis are Pass 2's job.

9. **Append a `session.log.md` entry** at the hypothesis folder root:
   ```
   ## [YYYY-MM-DD HH:MM] research | <slug>
   Sources fetched: N total (papers: X, preprints: Y, surveys: Z, other: W).
   Candidates collected: C. Pre-filter kept: K (scores range: S_min–S_max).
   Notable: <anything worth flagging for Pass 2>.
   ```

10. **Stop and report.** Summarise:
   - Total sources fetched, breakdown by source_type
   - Sources tried but couldn't fetch (with reasons)
   - Key themes / open questions surfaced during discovery that Pass 2 should pay attention to

## Constraints

- **Collect metadata first, download second.** Never download a paper before it has passed the quality-signal pre-filter in step 6. `raw/candidates.jsonl` is the gating record.
- `raw/` holds **only complete original artifacts** plus their deterministic plain-text extracts. Never write LLM-generated summaries, abstracts, or paraphrases into `raw/`.
- The artifact must be the **complete** original — full body, methods, results, references. Reject abstracts, previews, paywall stubs.
- **Always try arXiv HTML5 first** for any paper with an arXiv ID — it is faster to download, faster for Pass 2 to read, and avoids pdftotext entirely. Only fall back to PDF when HTML5 genuinely doesn't exist.
- WebFetch / WebSearch are **discovery tools only**. Artifacts in `raw/` must come from `curl`/`wget`.
- Files in `raw/` are **immutable** once written. If you need to re-fetch, write to a new file with a `-v2` suffix.
- Never read from or modify another hypothesis's folder.
- Every file in `raw/` must have a corresponding entry in `raw/fetch_log.jsonl`.
- Stay scoped: do not start writing wiki pages.
