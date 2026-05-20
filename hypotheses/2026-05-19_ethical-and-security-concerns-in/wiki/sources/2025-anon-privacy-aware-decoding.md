---
type: source
id: 2025-anon-privacy-aware-decoding
source_type: paper
title: "Privacy-Aware Decoding: Mitigating Privacy Leakage of Large Language Models in Retrieval-Augmented Generation"
authors: ["Anon."]
year: 2025
venue: "arXiv 2508.03098"
doi: "10.48550/arXiv.2508.03098"
url: "https://arxiv.org/abs/2508.03098"
raw_path: raw/papers/2025-anon-privacy-aware-decoding.html
tags: [privacy-aware-decoding, privacy-defense, rag-privacy, inference-time, pad]
---

Privacy-Aware Decoding (PAD) is a lightweight inference-time method that prevents RAG systems from leaking sensitive retrieved content. PAD modifies the generation probability distribution to suppress tokens that are uniquely attributable to private retrieved passages, without requiring model retraining or corpus modification.

## Key claims

- RAG systems conditioned on private or sensitive data are susceptible to extraction attacks that leak confidential information.
- PAD operates at decoding time by identifying tokens uniquely attributable to private retrieved documents and reducing their generation probability.
- The method does not require LLM retraining, retrieval system modification, or access to the original training data.
- PAD preserves response utility for benign queries while significantly reducing the extractability of private content.
- Evaluated against extraction attacks including verbatim memorization probes and targeted data extraction.

## Methods used

- [[methods/privacy-aware-decoding]]
- [[methods/retrieval-augmented-generation]]
- [[methods/retrieval-filtering]]

## Concepts

- [[concepts/privacy-leakage]]
- [[concepts/data-extraction]]
- [[concepts/access-control-rag]]

## Datasets

- [[datasets/nq-dataset]]

## Open problems flagged

- [[open-problems/rag-privacy-guarantees]]

## Relates to

- [[sources/2025-anon-safeguarding-privacy-mia]]
- [[sources/2024-koga-dp-rag]]
- [[sources/2025-anon-dp-synthetic-text-rag]]
- [[sources/2024-peng-data-extraction-backdoors]]

## Notable quotes

> "We propose Privacy-Aware Decoding (PAD), a lightweight, inference-time approach ... [that] suppresses the generation of tokens uniquely attributable to private retrieved passages." (Abstract)
