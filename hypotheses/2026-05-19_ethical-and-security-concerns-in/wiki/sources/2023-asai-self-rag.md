---
type: source
id: 2023-asai-self-rag
source_type: paper
title: "Self-RAG: Learning to Retrieve, Generate and Critique through Self-Reflection"
authors: ["Asai, A.", "Wu, Z.", "Wang, Y.", "Sil, A.", "Hajishirzi, H."]
year: 2023
venue: "ICLR 2024"
doi: "10.48550/arXiv.2310.11511"
url: "https://arxiv.org/abs/2310.11511"
raw_path: raw/papers/2023-asai-self-rag.html
tags: [self-rag, adaptive-retrieval, reflection-tokens, faithfulness, controllability]
---

Self-RAG trains a single LM to adaptively retrieve passages on-demand, generate text, and critique its own outputs using special reflection tokens. Unlike standard RAG that retrieves indiscriminately, Self-RAG retrieves only when needed and uses four types of reflection tokens (Retrieve, ISREL, ISSUP, ISUSE) to verify relevance, support, and utility of retrieved passages.

## Key claims

- Indiscriminate retrieval in standard RAG can hurt generation quality when retrieved passages are irrelevant.
- Reflection tokens allow controllable inference: users can adjust retrieval frequency and citation precision at test time.
- Self-RAG outperforms ChatGPT and standard RAG on factuality benchmarks including PopQA, ASQA, and Bio.
- The critic model learns to generate reflection tokens from GPT-4-annotated data, enabling self-supervision.
- Factuality and citation accuracy improve significantly over retrieval-augmented baselines without sacrificing fluency.

## Methods used

- [[methods/self-rag]]
- [[methods/retrieval-augmented-generation]]
- [[methods/dense-passage-retrieval]]
- [[methods/reflection-token-critique]]

## Concepts

- [[concepts/hallucination]]
- [[concepts/faithfulness]]
- [[concepts/adaptive-retrieval]]
- [[concepts/citation-attribution]]

## Datasets

- [[datasets/popqa]]
- [[datasets/asqa]]
- [[datasets/fever]]

## Open problems flagged

- [[open-problems/rag-adversarial-robustness]]
- [[open-problems/detection-of-poisoned-retrieval]]

## Relates to

- [[sources/2020-lewis-rag]]
- [[sources/2024-wu-ragtruth]]
- [[sources/2025-anon-rag-comprehensive-survey]]

## Notable quotes

> "Self-RAG retrieves passages on demand ... and generates and reflects on retrieved passages and its own generation using special tokens, called reflection tokens." (§3)
