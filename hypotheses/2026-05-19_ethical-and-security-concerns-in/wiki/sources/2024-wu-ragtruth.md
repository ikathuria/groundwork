---
type: source
id: 2024-wu-ragtruth
source_type: paper
title: "RAGTruth: A Hallucination Corpus for Developing Trustworthy Retrieval-Augmented Language Models"
authors: ["Niu, C.", "Wu, Y.", "Zhu, J.", "Xu, S.", "Shum, K.", "Zhong, R.", "Song, J.", "Zhang, T."]
year: 2024
venue: "ACL 2024"
doi: "10.48550/arXiv.2401.00396"
url: "https://arxiv.org/abs/2401.00396"
raw_path: raw/papers/2024-wu-ragtruth.html
tags: [hallucination, benchmark, corpus, faithfulness, trustworthiness, rag]
---

RAGTruth introduces a large-scale hallucination corpus of nearly 18,000 naturally generated RAG responses from diverse LLMs, annotated at both response and word levels with hallucination type and intensity. It benchmarks hallucination frequency across models and evaluates detection methods, showing that fine-tuning small LLMs on high-quality data can match prompt-based GPT-4 detection.

## Key claims

- RAG does not eliminate hallucination: LLMs still generate unsupported or contradictory claims against retrieved passages.
- Hallucination taxonomy: Evident Conflict, Subtle Conflict, Evident Baseless Information, Subtle Baseless Information.
- Fine-tuning a small LLM on RAGTruth achieves competitive hallucination detection vs. GPT-4 prompting.
- Hallucination rate varies substantially across model families and task types.
- Word-level annotation reveals hallucinations are often concentrated in specific spans, not whole responses.

## Methods used

- [[methods/retrieval-augmented-generation]]
- [[methods/hallucination-detection]]
- [[methods/supervised-fine-tuning]]

## Concepts

- [[concepts/hallucination]]
- [[concepts/faithfulness]]
- [[concepts/trustworthiness]]

## Datasets

- [[datasets/ragtruth-corpus]]

## Open problems flagged

- [[open-problems/hallucination-in-rag]]
- [[open-problems/rag-faithfulness-guarantees]]

## Relates to

- [[sources/2023-huang-hallucination-survey]]
- [[sources/2025-anon-hallucination-mitigation-survey]]
- [[sources/2020-lewis-rag]]

## Notable quotes

> "Despite the integration of RAG, LLMs may still present unsupported or contradictory claims to the retrieved contents." (Abstract)
