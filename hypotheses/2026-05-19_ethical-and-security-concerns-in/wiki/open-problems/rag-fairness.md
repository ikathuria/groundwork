---
type: open-problem
slug: rag-fairness
severity: high
affects_methods: [retrieval-augmented-generation, fairness-evaluation]
sources: [2024-anon-no-free-lunch-fairness, 2024-wu-does-rag-unfairness, 2024-anon-trustworthiness-rag-survey]
tags: [fairness, open-problem, ethics, rag, bias]
---

**How to ensure that RAG systems produce equitable outputs across demographic groups, given that retrieval corpus biases are injected dynamically at inference time and cannot be fixed by model-level debiasing alone.**

## Why it's hard

1. **Dynamic bias injection**: Unlike standalone LLM bias (addressable via RLHF or fine-tuning), RAG bias is injected at inference time from the corpus. Model-level debiasing does not help when the corpus itself is biased.

2. **No free lunch**: [[sources/2024-anon-no-free-lunch-fairness]] establishes that RAG's accuracy gains come at a fairness cost. The same retrieval mechanism that improves factual accuracy amplifies corpus biases.

3. **Corpus debiasing is expensive and incomplete**: Manually debiasing large corpora (Wikipedia has tens of millions of articles) is infeasible. Automated debiasing may introduce new biases.

4. **Query sensitivity**: Different queries for the same information may retrieve passages of vastly different quality for different demographic groups, making query-level fairness hard to guarantee.

5. **Metric ambiguity**: Fairness in open-domain QA is contested — different notions of fairness (demographic parity, equalized odds, counterfactual fairness) may conflict.

## What's been tried

- Fairness evaluation frameworks: [[sources/2024-wu-does-rag-unfairness]], [[sources/2024-anon-no-free-lunch-fairness]].
- No published defense specifically targeting RAG fairness has demonstrated comprehensive results.

## Future directions

- Fairness-constrained retrieval reranking.
- Corpus-level demographic representation auditing and balancing.
- Fairness-aware fine-tuning of retrieval models.
- Multi-dimensional fairness evaluation benchmarks for RAG.
