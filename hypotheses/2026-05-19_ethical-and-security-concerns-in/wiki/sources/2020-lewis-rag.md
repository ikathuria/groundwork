---
type: source
id: 2020-lewis-rag
source_type: paper
title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks"
authors: ["Lewis, P.", "Perez, E.", "Piktus, A.", "Petroni, F.", "Karpukhin, V.", "Goyal, N.", "Kuttler, H.", "Lewis, M.", "Yih, W.", "Rocktaschel, T.", "Riedel, S.", "Kiela, D."]
year: 2020
venue: "NeurIPS 2020"
doi: "10.48550/arXiv.2005.11401"
url: "https://arxiv.org/abs/2005.11401"
raw_path: raw/papers/2020-lewis-rag.html
tags: [rag, retrieval-augmented-generation, dense-passage-retrieval, nlp, foundational]
---

The foundational paper introducing Retrieval-Augmented Generation (RAG), which combines a pre-trained parametric memory (seq2seq model) with a non-parametric memory (dense vector index of Wikipedia) for knowledge-intensive NLP tasks. RAG generates responses conditioned on retrieved documents, providing provenance and enabling knowledge updating without retraining.

## Key claims

- RAG outperforms parametric-only seq2seq models on open-domain QA, fact verification, and knowledge-grounded generation benchmarks.
- Two variants are proposed: RAG-Sequence (retrieves once per answer) and RAG-Token (retrieves per token), with different trade-offs in fluency and accuracy.
- Non-parametric memory can be swapped or updated independently of the generator, enabling knowledge updates without retraining.
- RAG reduces hallucinations compared to pure parametric models by grounding generation in retrieved evidence.
- The model hallucinates less but can still generate content unsupported by retrieved passages.

## Methods used

- [[methods/retrieval-augmented-generation]]
- [[methods/dense-passage-retrieval]]
- [[methods/maximum-inner-product-search]]

## Concepts

- [[concepts/hallucination]]
- [[concepts/faithfulness]]
- [[concepts/parametric-vs-nonparametric-knowledge]]
- [[concepts/knowledge-grounding]]

## Datasets

- [[datasets/natural-questions]]
- [[datasets/triviaqa]]
- [[datasets/webquestions]]
- [[datasets/ms-marco]]
- [[datasets/jeopardy]]
- [[datasets/fever]]

## Open problems flagged

- [[open-problems/rag-adversarial-robustness]]
- [[open-problems/rag-privacy-guarantees]]

## Relates to

- [[sources/2023-asai-self-rag]]
- [[sources/2025-anon-rag-comprehensive-survey]]
- [[sources/2024-anon-trustworthiness-rag-survey]]

## Notable quotes

> "RAG models combine parametric and non-parametric memory for language generation, where the non-parametric memory can be swapped out or updated without retraining." (Introduction)
