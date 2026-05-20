---
type: source
id: 2026-anon-semantic-chameleon
source_type: paper
title: "Semantic Chameleon: Corpus-Dependent Poisoning Attacks and Defenses in RAG Systems"
authors: ["Anon."]
year: 2026
venue: "arXiv 2603.18034"
doi: "10.48550/arXiv.2603.18034"
url: "https://arxiv.org/abs/2603.18034"
raw_path: raw/papers/2026-anon-semantic-chameleon.html
tags: [semantic-chameleon, corpus-poisoning, bm25, dense-retrieval, hybrid-defense]
---

This paper shows that a hybrid BM25 + dense vector retriever provides an effective architectural defense against gradient-guided RAG poisoning attacks. It further demonstrates that corpus composition (the distribution and density of documents) affects both attack feasibility and defense effectiveness, with certain corpora being inherently harder to poison.

## Key claims

- Hybrid BM25 + dense vector retrieval is significantly more robust against gradient-based poisoning than pure dense retrieval.
- Corpus composition affects poisoning attack feasibility: sparse, diverse corpora are harder to poison than dense, topically concentrated ones.
- Detection difficulty increases when poisoned passages must adapt semantically to blend with corpus content ("chameleon" behavior).
- Architectural defense choices (retrieval method) can reduce attack success rates without dedicated detection logic.
- The paper introduces exploratory evidence linking corpus statistics to security properties.

## Methods used

- [[methods/hybrid-retrieval]]
- [[methods/knowledge-poisoning-attack]]
- [[methods/retrieval-augmented-generation]]

## Concepts

- [[concepts/corpus-poisoning]]
- [[concepts/adversarial-robustness]]
- [[concepts/retrieval-architecture]]

## Datasets

- [[datasets/nq-dataset]]
- [[datasets/ms-marco]]

## Open problems flagged

- [[open-problems/rag-adversarial-robustness]]
- [[open-problems/detection-of-poisoned-retrieval]]

## Relates to

- [[sources/2024-zou-poisonedrag]]
- [[sources/2025-anon-ragpart-ragmask]]
- [[sources/2026-anon-sparse-attention-poisoning]]
- [[sources/2024-anon-robust-rag-poisoning-eval]]

## Notable quotes

> "A simple hybrid BM25 + vector retriever provides an effective architectural defense against gradient-guided RAG poisoning, and ... corpus composition affects both attack feasibility and detection difficulty." (Abstract)
