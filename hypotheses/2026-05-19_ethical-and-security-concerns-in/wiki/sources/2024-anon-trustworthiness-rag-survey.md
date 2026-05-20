---
type: source
id: 2024-anon-trustworthiness-rag-survey
source_type: survey
title: "Trustworthiness in Retrieval-Augmented Generation Systems: A Survey"
authors: ["Anon."]
year: 2024
venue: "arXiv 2409.10102"
doi: "10.48550/arXiv.2409.10102"
url: "https://arxiv.org/abs/2409.10102"
raw_path: raw/surveys/2024-anon-trustworthiness-rag-survey.html
tags: [trustworthiness, survey, rag, fairness, privacy, robustness, hallucination]
---

A survey of trustworthiness in RAG systems across multiple dimensions: hallucination, privacy, fairness, robustness, and accountability. Identifies that while existing work prioritizes accuracy and efficiency, trustworthiness is under-explored and requires multi-dimensional evaluation frameworks.

## Key claims

- Trustworthiness in RAG has at least five dimensions: factual accuracy, privacy preservation, fairness, adversarial robustness, and accountability/provenance.
- Most RAG literature optimizes for accuracy and efficiency, neglecting trust dimensions.
- External knowledge retrieval introduces new trust risks not present in standalone LLMs.
- A comprehensive trustworthiness framework must evaluate all pipeline components: retriever, knowledge base, generator.
- Current evaluation benchmarks address individual trust dimensions in isolation.

## Methods used

- [[methods/retrieval-augmented-generation]]
- [[methods/fairness-evaluation]]

## Concepts

- [[concepts/trustworthiness]]
- [[concepts/hallucination]]
- [[concepts/privacy-leakage]]
- [[concepts/rag-fairness]]
- [[concepts/adversarial-robustness]]

## Datasets

- []

## Open problems flagged

- [[open-problems/hallucination-in-rag]]
- [[open-problems/rag-privacy-guarantees]]
- [[open-problems/rag-fairness]]
- [[open-problems/rag-adversarial-robustness]]
- [[open-problems/governance-data-provenance]]

## Relates to

- [[sources/2025-anon-trustworthy-rag-survey]]
- [[sources/2026-anon-securing-rag-taxonomy]]
- [[sources/2025-anon-rag-security-threat-model]]

## Notable quotes

> "The trustworthiness of RAG systems remains insufficiently explored. RAG can improve LLM reliability ... However, unreliable external knowledge introduces new risks." (Abstract)
