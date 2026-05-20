---
type: source
id: 2025-anon-rag-comprehensive-survey
source_type: survey
title: "Retrieval-Augmented Generation: A Comprehensive Survey of Architectures, Enhancements, and Robustness Frontiers"
authors: ["Anon."]
year: 2025
venue: "arXiv 2506.00054"
doi: "10.48550/arXiv.2506.00054"
url: "https://arxiv.org/abs/2506.00054"
raw_path: raw/surveys/2025-anon-rag-comprehensive-survey.html
tags: [survey, rag, architectures, robustness, comprehensive]
---

A broad survey covering RAG architectures, retrieval enhancements (hybrid retrieval, iterative retrieval, query rewriting), and robustness frontiers including adversarial attacks, privacy threats, and fairness. Positions RAG robustness as a frontier problem requiring multi-disciplinary solutions.

## Key claims

- RAG architecture has evolved from naive retrieval-then-read to modular, iterative, and adaptive pipelines.
- Robustness frontiers include: adversarial corpus poisoning, membership inference, indirect prompt injection, fairness disparities, and hallucination persistence.
- Hybrid retrieval (sparse + dense) offers both quality and robustness advantages over single-mode retrieval.
- The field lacks unified evaluation benchmarks for robustness, privacy, and fairness simultaneously.
- Future RAG systems must co-optimize for accuracy, latency, robustness, and trustworthiness.

## Methods used

- [[methods/retrieval-augmented-generation]]
- [[methods/dense-passage-retrieval]]
- [[methods/hybrid-retrieval]]
- [[methods/self-rag]]

## Concepts

- [[concepts/retrieval-architecture]]
- [[concepts/hallucination]]
- [[concepts/adversarial-robustness]]
- [[concepts/trustworthiness]]

## Datasets

- []

## Open problems flagged

- [[open-problems/rag-adversarial-robustness]]
- [[open-problems/rag-privacy-guarantees]]
- [[open-problems/rag-fairness]]
- [[open-problems/hallucination-in-rag]]

## Relates to

- [[sources/2020-lewis-rag]]
- [[sources/2023-asai-self-rag]]
- [[sources/2026-anon-securing-rag-taxonomy]]

## Notable quotes

> "While RAG addresses critical limitations of parametric knowledge storage ... it introduces new challenges in retrieval quality, grounding fidelity, pipeline efficiency, and robustness." (Abstract)
