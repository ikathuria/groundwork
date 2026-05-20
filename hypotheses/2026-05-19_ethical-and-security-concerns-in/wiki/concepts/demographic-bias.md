---
type: concept
slug: demographic-bias
aliases: [social bias, representational bias, geographic bias, group bias]
related_concepts: [bias-amplification, rag-fairness, trustworthiness]
introduced_by: [2024-wu-does-rag-unfairness, 2024-anon-no-free-lunch-fairness]
tags: [bias, demographic, fairness, representation, equity]
---

Demographic bias in RAG refers to systematic differences in retrieval corpus representation or retrieval quality across demographic groups (gender, race, geography, socioeconomic status). These corpus-level biases propagate through the RAG pipeline to produce disparate-quality outputs for different groups.

## Sources

- **Training data bias**: Knowledge sources like Wikipedia over-represent English-speaking, Western, male perspectives.
- **Retrieval ranking bias**: Majority-group documents may have higher quality embeddings due to denser linkage and more anchor text.
- **Query sensitivity**: Questions about minority groups may have fewer high-quality retrieved passages, leading to lower answer quality.

## Evidence

- [[sources/2024-wu-does-rag-unfairness]]: Geographical and demographic biases in Wikipedia translate directly to RAG QA quality disparities.
- [[sources/2024-anon-no-free-lunch-fairness]]: Fairness costs of RAG exist even for users actively trying to mitigate bias.

## Distinction from LLM bias

LLM bias from pre-training is static and can potentially be addressed via fine-tuning or RLHF. RAG demographic bias is dynamic — introduced at inference time by the retrieved corpus — and cannot be fixed by model-level interventions alone. Corpus-level debiasing or retrieval reranking with fairness constraints are required.
