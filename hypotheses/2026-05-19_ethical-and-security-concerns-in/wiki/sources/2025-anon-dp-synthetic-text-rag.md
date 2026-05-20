---
type: source
id: 2025-anon-dp-synthetic-text-rag
source_type: paper
title: "Differentially Private Synthetic Text Generation for Retrieval-Augmented Generation (RAG)"
authors: ["Anon."]
year: 2025
venue: "arXiv 2510.06719"
doi: "10.48550/arXiv.2510.06719"
url: "https://arxiv.org/abs/2510.06719"
raw_path: raw/papers/2025-anon-dp-synthetic-text-rag.html
tags: [differential-privacy, synthetic-text, privacy-preserving, dp-synrag, rag-privacy]
---

DP-SynRAG proposes generating differentially private synthetic text to replace sensitive real documents in RAG knowledge bases. Instead of applying DP at query time (which accumulates privacy loss across repeated queries), the corpus itself is synthesized with DP guarantees, providing persistent privacy protection with a one-time privacy cost.

## Key claims

- Query-time DP in RAG leads to accumulated privacy loss across repeated queries, weakening guarantees over time.
- DP-SynRAG generates a privacy-preserving synthetic corpus once, fixing the total privacy budget at corpus creation time.
- Synthetic text retains sufficient semantic fidelity for RAG utility while satisfying formal DP guarantees.
- The approach is compatible with any downstream RAG system without modification to retrieval or generation components.
- One-time synthetic corpus generation is more practical than per-query noise injection for production deployments.

## Methods used

- [[methods/differential-privacy]]
- [[methods/synthetic-data-generation]]
- [[methods/retrieval-augmented-generation]]

## Concepts

- [[concepts/differential-privacy-rag]]
- [[concepts/privacy-leakage]]
- [[concepts/formal-privacy-guarantees]]

## Datasets

- [[datasets/nq-dataset]]

## Open problems flagged

- [[open-problems/rag-privacy-guarantees]]

## Relates to

- [[sources/2024-koga-dp-rag]]
- [[sources/2025-anon-privacy-aware-decoding]]
- [[sources/2025-anon-safeguarding-privacy-mia]]

## Notable quotes

> "Existing private RAG methods typically rely on query-time differential privacy (DP), which requires repeated noise injection and leads to accumulated privacy loss." (Abstract)
