---
type: concept
slug: trustworthiness
aliases: [RAG trustworthiness, trustworthy AI, RAG reliability, multi-dimensional trust]
related_concepts: [hallucination, faithfulness, adversarial-robustness, rag-fairness, data-provenance, privacy-leakage]
introduced_by: [2024-anon-trustworthiness-rag-survey, 2025-anon-trustworthy-rag-survey, 2026-anon-securing-rag-taxonomy]
tags: [trustworthiness, ethics, reliability, rag, multi-dimensional]
---

Trustworthiness in RAG systems is a multi-dimensional property encompassing factual accuracy (anti-hallucination), privacy preservation, fairness, adversarial robustness, and accountability/provenance. A trustworthy RAG system must excel along all dimensions simultaneously, not just optimize for accuracy.

## Trust dimensions

1. **Factual accuracy**: Responses are correct, grounded, and non-hallucinating ([[concepts/hallucination]], [[concepts/faithfulness]]).
2. **Privacy preservation**: The system does not leak sensitive corpus contents ([[concepts/privacy-leakage]], [[concepts/membership-inference]]).
3. **Fairness**: Outputs are equitable across demographic groups ([[concepts/rag-fairness]], [[concepts/bias-amplification]]).
4. **Adversarial robustness**: System resists corpus poisoning, injection, and extraction attacks ([[concepts/adversarial-robustness]]).
5. **Accountability/provenance**: Claims trace to verifiable sources ([[concepts/data-provenance]]).

## Current state

- Existing RAG literature primarily optimizes accuracy and efficiency, neglecting other trust dimensions ([[sources/2024-anon-trustworthiness-rag-survey]]).
- No existing RAG deployment achieves high scores on all five trust dimensions simultaneously.
- Multi-dimensional trustworthiness evaluation frameworks are an open research area.

## The "no free lunch" principle of trustworthiness

[[sources/2024-anon-no-free-lunch-fairness]] establishes that optimizing for one dimension (accuracy via RAG) can degrade another (fairness). Similarly, strong privacy (DP) degrades retrieval accuracy. Trustworthiness requires principled trade-off management.
