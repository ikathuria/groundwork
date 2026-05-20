---
type: concept
slug: bias-amplification
aliases: [fairness violation, stereotype amplification, demographic bias in RAG, unfairness in RAG]
related_concepts: [rag-fairness, demographic-bias, trustworthiness]
introduced_by: [2024-anon-no-free-lunch-fairness, 2024-wu-does-rag-unfairness]
tags: [bias, fairness, ethics, demographic, rag]
---

Bias amplification in RAG occurs when the retrieval corpus contains demographic or societal biases that are reinforced and amplified in LLM outputs. Unlike standalone LLM bias (which stems from pre-training data), RAG bias amplification occurs at inference time through biased retrieval.

## Mechanisms

1. **Corpus-level bias**: The retrieval corpus (e.g., Wikipedia) underrepresents or misrepresents certain demographic groups. Retrieved passages reflect these biases, which the LLM incorporates into its outputs.

2. **Retrieval ranking disparities**: Biased passage ranking (e.g., majority-group sources ranked higher) causes systematic information asymmetries across demographic groups.

3. **Generation amplification**: LLMs may further amplify biases in retrieved content when generating responses, compounding the corpus-level effect.

## Key findings

- [[sources/2024-anon-no-free-lunch-fairness]] establishes that RAG's hallucination-reduction benefits come at a fairness cost, even when users are aware of the issue.
- [[sources/2024-wu-does-rag-unfairness]] shows that geographic and demographic biases in Wikipedia directly translate to output disparities in RAG-based QA.
- The effect is bidirectional: RAG can reduce some biases while amplifying others depending on query type.

## Ethical significance

Bias amplification has downstream effects on:
- Medical applications: unequal quality recommendations across demographic groups.
- Legal applications: disparate legal advice quality.
- Educational applications: perpetuating historical representation gaps.

## Open problem

Fairness evaluation frameworks for RAG systems are underdeveloped ([[open-problems/rag-fairness]]). Existing LLM fairness benchmarks do not account for the retrieval-specific mechanisms of bias.
