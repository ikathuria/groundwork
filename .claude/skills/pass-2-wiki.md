---
name: pass-2-wiki
description: Pass 2 of the GROUNDWORK pipeline — compile the Obsidian-compatible wiki for a research topic. Reads `hypotheses/<slug>/raw/` and produces `hypotheses/<slug>/wiki/` with one page per source plus aggregated entity pages (methods, concepts, datasets, open-problems), all wikilinked.
allowed-tools:
  - Read
  - Write
  - Edit
  - Glob
  - Grep
  - Bash
arguments:
  - name: slug
    description: The hypothesis folder name (date-prefixed slug), e.g. "2026-04-25_transformer-attention-time-series".
    required: true
---

# Pass 2 — Wiki Compile

You are running **Pass 2** of the GROUNDWORK pipeline.

## Input

- `slug` (positional 1): the research topic folder name, e.g. `2026-04-25_transformer-attention-time-series`. Files live under `hypotheses/<slug>/`.

## Steps

1. **Read every source** in `hypotheses/<slug>/raw/`. 
   - For HTML files (arXiv HTML5): read directly with the Read tool.
   - For PDFs: `pdftotext <file> -` or use the Read tool's PDF support.
   - For `.txt` companions (pdftotext output): read directly.
   - For each source, extract: title, authors, year, DOI/URL, venue, key claims, methods used, concepts introduced or applied, datasets used, limitations acknowledged, relationships (extends / contradicts / builds on other sources in the corpus).

2. **For each source, write `hypotheses/<slug>/wiki/sources/<id>.md`** with YAML frontmatter (see Frontmatter spec below). Body:
   - 2–3 sentence summary of the contribution
   - Key claims (bulleted)
   - Methods used (wikilinks to `wiki/methods/`)
   - Concepts (wikilinks to `wiki/concepts/`)
   - Datasets (wikilinks to `wiki/datasets/`)
   - Open problems flagged (wikilinks to `wiki/open-problems/`)
   - Extends / contradicts / builds-on (wikilinks to other `sources/`)
   - Notable quotes with section/page refs

3. **Aggregate entities.** Every distinct method, concept, dataset, and open problem mentioned across sources gets its own page:
   - `wiki/methods/<slug>.md` — research methods and techniques (e.g., attention mechanisms, RLHF, contrastive learning)
   - `wiki/concepts/<slug>.md` — theoretical constructs, architectures, terminology (e.g., transformer, diffusion model, in-context learning)
   - `wiki/datasets/<slug>.md` — benchmark datasets and evaluation suites (e.g., ImageNet, GLUE, HumanEval)
   - `wiki/open-problems/<slug>.md` — unanswered questions, known limitations, negative results, reproducibility issues

   Each entity page synthesises content from all sources that mention it, with citations (wikilinks to `sources/`).

4. **Cross-link.** Every entity page lists the sources that mention it. Every source page lists the entities it touches. Use Obsidian wikilinks: `[[methods/rlhf]]`, `[[concepts/transformer]]`, `[[datasets/imagenet]]`, etc.

5. **Check `commons/` first.** Before creating an entity page, check if `commons/methods/<slug>.md`, `commons/concepts/<slug>.md`, etc. already exists. If so, **link to the commons version**: `[[../../../commons/methods/rlhf|RLHF]]`. Do **NOT** write into `commons/` from Pass 2.

6. **Generate `wiki/index.md`** — a content-oriented catalog of every page, organised by category. One-line summary per page.

   ```markdown
   # Wiki Index — <research question>

   ## Topic
   - [[../hypothesis]] — root node

   ## Methods (N)
   - [[methods/transformer-attention]] — scaled dot-product self-attention

   ## Concepts (N)
   - [[concepts/in-context-learning]] — few-shot prompting without weight updates

   ## Datasets (N)
   - [[datasets/glue]] — General Language Understanding Evaluation benchmark

   ## Open Problems (N)
   - [[open-problems/attention-quadratic-complexity]] — O(n²) cost limits long contexts

   ## Sources (N)
   - [[sources/2017-vaswani-attention-is-all-you-need]] — original Transformer paper

   ## Plans (0)
   ```

7. **Append entries to `wiki/log.md`** for each source ingested:
   ```
   ## [YYYY-MM-DD HH:MM] ingest | <source-id>
   <new pages created> / <existing pages updated>
   ```

8. **Update `hypotheses/<slug>/hypothesis.md`** — set `status: wiki`, set `sources_count` to the actual count, populate the "key entities" section with wikilinks to the most important methods, concepts, and open problems.

9. **Append `hypotheses/<slug>/session.log.md`** with:
   ```
   ## [YYYY-MM-DD HH:MM] wiki | <slug>
   Pages: sources=N, methods=M, concepts=C, datasets=D, open-problems=P.
   Contradictions noticed: <any cross-source disagreements worth surfacing>.
   Commons candidates: <entities likely to recur across topics>.
   ```

10. **Stop and report.** Provide:
    - Page counts by type
    - Sources you couldn't extract from (with reasons)
    - Cross-source contradictions worth surfacing to Pass 3
    - Entities that look like commons-promotion candidates

## Frontmatter spec

### `sources/<id>.md`

```yaml
---
type: source
id: 2017-vaswani-attention-is-all-you-need
source_type: <paper|preprint|survey|workshop|other>
title: "Attention Is All You Need"
authors: ["Vaswani, A.", "Shazeer, N."]
year: 2017
venue: NeurIPS
doi: 10.48550/arXiv.1706.03762
url: https://arxiv.org/abs/1706.03762
raw_path: raw/papers/2017-vaswani-attention-is-all-you-need.html
tags: [transformers, attention, sequence-modeling]
---
```

### `methods/<slug>.md`

```yaml
---
type: method
slug: scaled-dot-product-attention
aliases: [self-attention, dot-product attention]
related_methods: [multi-head-attention, cross-attention, linear-attention]
used_in_papers: [2017-vaswani-attention-is-all-you-need, ...]
open_problems: [attention-quadratic-complexity]
tags: [attention, transformers]
---
```

Body: what it does, when to use it, key parameters, common variants, known limitations.

### `concepts/<slug>.md`

```yaml
---
type: concept
slug: in-context-learning
aliases: [few-shot prompting, ICL]
related_concepts: [prompt-engineering, chain-of-thought]
introduced_by: [2020-brown-gpt3]
tags: [llm, prompting]
---
```

Body: definition, how it works, significance, open questions.

### `datasets/<slug>.md`

```yaml
---
type: dataset
slug: glue
aliases: [General Language Understanding Evaluation]
tasks: [classification, NLI, QA]
used_in_papers: [...]
known_limitations: [dataset-contamination, saturation]
tags: [nlp, benchmark, evaluation]
---
```

Body: what it measures, tasks included, known issues (contamination, saturation, bias).

### `open-problems/<slug>.md`

```yaml
---
type: open-problem
slug: attention-quadratic-complexity
severity: <low|medium|high|critical>
affects_methods: [scaled-dot-product-attention, multi-head-attention]
sources: [2017-vaswani-attention-is-all-you-need, ...]
tags: [efficiency, scalability]
---
```

Body: what the problem is, why it matters, current best partial solutions, open directions.

## Constraints

- Read from `raw/` only. **Do not modify `raw/`.**
- Write only to `wiki/` and the per-hypothesis `session.log.md`.
- Every wiki page must have valid YAML frontmatter.
- Every wikilink must resolve to a real file. Broken links are a Pass 2 bug.
- Be idempotent — re-running Pass 2 on the same `raw/` should not duplicate pages.
- Do not write into `commons/` — promotion is a separate lint pass.
