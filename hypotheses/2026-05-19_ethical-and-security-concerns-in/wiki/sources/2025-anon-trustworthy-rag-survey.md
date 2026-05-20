---
type: source
id: 2025-anon-trustworthy-rag-survey
source_type: survey
title: "Towards Trustworthy Retrieval Augmented Generation for Large Language Models: A Survey"
authors: ["Anon."]
year: 2025
venue: "arXiv 2502.06872"
doi: "10.48550/arXiv.2502.06872"
url: "https://arxiv.org/abs/2502.06872"
raw_path: raw/surveys/2025-anon-trustworthy-rag-survey.html
tags: [trustworthy, survey, rag, hallucination, privacy, robustness, fairness]
---

A focused survey on trustworthy RAG, covering threats across the full RAG pipeline and organizing defenses by pipeline component. Proposes a component-wise trust framework: trusted knowledge sources, reliable retrieval, faithful generation, and accountable system design.

## Key claims

- Trustworthiness must be designed into each RAG component independently and verified end-to-end.
- Knowledge source integrity (avoiding poisoned corpora) is the most critical and least addressed trust dimension.
- Retrieval reliability includes robustness to adversarial queries, semantic drift, and relevance failures.
- Faithful generation requires both correct use of retrieved content and appropriate uncertainty signaling.
- Accountability requires provenance tracking for all retrieved evidence used in generation.

## Methods used

- [[methods/retrieval-augmented-generation]]
- [[methods/retrieval-filtering]]

## Concepts

- [[concepts/trustworthiness]]
- [[concepts/hallucination]]
- [[concepts/faithfulness]]
- [[concepts/knowledge-poisoning]]
- [[concepts/data-provenance]]

## Datasets

- []

## Open problems flagged

- [[open-problems/rag-adversarial-robustness]]
- [[open-problems/governance-data-provenance]]
- [[open-problems/rag-fairness]]

## Relates to

- [[sources/2024-anon-trustworthiness-rag-survey]]
- [[sources/2025-anon-rag-security-threat-model]]
- [[sources/2026-anon-securing-rag-taxonomy]]

## Notable quotes

> "By integrating context retrieval into content generation, RAG provides reliable and up-to-date external knowledge ... However, despite RAG's success and potential, recent studies show that RAG faces unique trustworthiness challenges." (Abstract)
