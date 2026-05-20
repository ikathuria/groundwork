---
type: source
id: 2024-koga-dp-rag
source_type: paper
title: "Privacy-Preserving Retrieval-Augmented Generation with Differential Privacy"
authors: ["Koga, T.", "Suber, R.", "Chiang, C.", "Ye, F.", "Gao, J."]
year: 2024
venue: "arXiv 2412.04697"
doi: "10.48550/arXiv.2412.04697"
url: "https://arxiv.org/abs/2412.04697"
raw_path: raw/papers/2024-koga-dp-rag.html
tags: [differential-privacy, privacy-preserving, rag-privacy, dp-rag, formal-privacy]
---

This paper proposes DP-RAG, a framework applying differential privacy (DP) to the retrieval process in RAG systems. By adding calibrated noise to retrieval queries and/or retrieved passage representations, DP-RAG provides formal privacy guarantees against membership inference and extraction attacks while maintaining response quality.

## Key claims

- DP applied at retrieval time provides formal, quantifiable privacy guarantees missing from heuristic defenses.
- Private voting over retrieval results (DP voting) can be used to privatize which documents are retrieved without revealing individual query content.
- There is an inherent accuracy-privacy trade-off: stronger DP guarantees require more noise, reducing retrieval quality.
- DP-RAG is more suitable for high-sensitivity domains (medical, legal, financial) where formal guarantees are required by regulation.
- The method addresses both MIA and data extraction threats under a unified DP framework.

## Methods used

- [[methods/differential-privacy]]
- [[methods/retrieval-augmented-generation]]
- [[methods/private-voting-retrieval]]

## Concepts

- [[concepts/differential-privacy-rag]]
- [[concepts/privacy-leakage]]
- [[concepts/membership-inference]]
- [[concepts/formal-privacy-guarantees]]

## Datasets

- [[datasets/nq-dataset]]

## Open problems flagged

- [[open-problems/rag-privacy-guarantees]]

## Relates to

- [[sources/2024-anderson-mia-rag]]
- [[sources/2025-anon-dp-synthetic-text-rag]]
- [[sources/2025-anon-safeguarding-privacy-mia]]
- [[sources/2025-anon-privacy-aware-decoding]]

## Notable quotes

> "Without effective privacy protection, RAG may leak sensitive information from private documents through its generated responses." (Abstract)
