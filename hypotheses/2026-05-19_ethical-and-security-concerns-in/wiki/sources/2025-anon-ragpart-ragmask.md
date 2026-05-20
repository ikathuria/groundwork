---
type: source
id: 2025-anon-ragpart-ragmask
source_type: paper
title: "RAGPart & RAGMask: Retrieval-Stage Defenses Against Corpus Poisoning in Retrieval-Augmented Generation"
authors: ["Pathmanathan, P.", "Panaitescu-Liess, M.", "Chiang, C.", "Huang, F."]
year: 2025
venue: "arXiv 2512.24268"
doi: "10.48550/arXiv.2512.24268"
url: "https://arxiv.org/abs/2512.24268"
raw_path: raw/papers/2025-anon-ragpart-ragmask.pdf
tags: [ragpart, ragmask, retrieval-stage-defense, corpus-poisoning, detection]
---

RAGPart and RAGMask are two complementary retrieval-stage defenses against corpus poisoning. RAGPart exploits dense retrievers' training dynamics — the observation that document fragments preserve semantic meaning — using document partitioning and embedding aggregation to dilute poisoned documents. RAGMask identifies suspicious tokens with disproportionate similarity influence and masks them before retrieval scoring.

## Key claims

- Retrieval-stage defenses are more practical than generation-stage defenses: they are computationally lightweight and do not require multiple LLM calls.
- RAGPart exploits the inductive bias that retrievers treat document fragments as semantically equivalent to the whole, diluting poisoned content.
- RAGMask identifies and masks influential tokens that drive high similarity scores for poisoned passages.
- Both methods reduce attack success rates across four poisoning strategies and four state-of-the-art retrievers.
- Neither method requires modification to the LLM or relies on strong retriever assumptions.

## Methods used

- [[methods/retrieval-filtering]]
- [[methods/knowledge-poisoning-attack]]
- [[methods/dense-passage-retrieval]]

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
- [[sources/2025-anon-defending-knowledge-poisoning]]
- [[sources/2026-anon-semantic-chameleon]]
- [[sources/2026-anon-sparse-attention-poisoning]]

## Notable quotes

> "Our defenses operate directly on the retriever, making them computationally lightweight and requiring no modification to the generation model." (Abstract)
