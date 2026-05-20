---
type: method
slug: self-rag
aliases: [Self-RAG, self-reflective retrieval, adaptive self-rag]
related_methods: [retrieval-augmented-generation, dense-passage-retrieval, reflection-token-critique]
used_in_papers: [2023-asai-self-rag, 2025-anon-hallucination-mitigation-survey, 2025-anon-rag-comprehensive-survey]
open_problems: [hallucination-in-rag, rag-adversarial-robustness]
tags: [self-rag, adaptive-retrieval, reflection-tokens, faithfulness, controllable]
---

Self-RAG trains a single LM to adaptively decide when to retrieve, generate, and critique outputs using special reflection tokens inserted at training time. Unlike standard RAG which always retrieves, Self-RAG retrieves only when the LM determines external knowledge is needed, and critiques retrieved passages for relevance, support, and utility.

## How it works

1. **Retrieve decision**: A Retrieve token signals whether to call the retrieval system for the current generation step.
2. **Relevance check (ISREL)**: After retrieval, a token classifies whether each retrieved passage is relevant to the query.
3. **Support check (ISSUP)**: A token verifies whether the generated segment is supported by the retrieved passage.
4. **Utility check (ISUSE)**: A token assesses the overall utility of the response for the user's need.

Introduced by [[sources/2023-asai-self-rag]]. The critic model is trained from GPT-4-annotated reflection tokens.

## Strengths

- Reduces unnecessary retrievals, improving latency and filtering irrelevant context.
- Enables controllable trade-off between retrieval frequency and generation quality.
- Improves citation accuracy: generated claims are explicitly linked to supporting passages.
- Outperforms standard RAG on factuality benchmarks without sacrificing fluency.

## Limitations

- Reflection tokens may themselves be hallucinated or unreliable under distribution shift.
- Adaptive retrieval may miss cases where retrieval is beneficial but not explicitly signaled.
- Susceptible to the same corpus poisoning attacks as standard RAG when it does retrieve.
- Training requires expensive GPT-4 critic annotation.
