---
type: concept
slug: parametric-vs-nonparametric-knowledge
aliases: [parametric knowledge, nonparametric memory, external knowledge, LLM knowledge]
related_concepts: [hallucination, faithfulness, retrieval-architecture]
introduced_by: [2020-lewis-rag]
tags: [parametric, nonparametric, knowledge, memory, rag]
---

The parametric vs. nonparametric knowledge distinction, introduced by [[sources/2020-lewis-rag]], refers to the two types of knowledge available to RAG systems.

**Parametric knowledge**: Facts encoded in the LLM's weights during pre-training. Static — can only be updated by retraining. Prone to staleness and hallucination when knowledge gaps exist.

**Non-parametric (external) knowledge**: Facts stored in the retrieval corpus, accessed at inference time. Updatable without retraining by modifying the corpus. Provides grounding and provenance.

## RAG's hybrid approach

RAG combines both: the LLM's parametric reasoning capabilities are augmented by non-parametric evidence from the corpus at inference time. This hybrid approach reduces hallucination (by grounding in external facts) while maintaining the LLM's language understanding and generation capabilities.

## Security implication

The non-parametric component (corpus) is the primary attack surface in RAG systems. Because it can be modified without touching the LLM, adversaries target it for poisoning attacks. The parametric component (LLM weights) is used by the consistency-checking defense ([[sources/2025-anon-defending-knowledge-poisoning]]) — poisoned passages that contradict parametric knowledge are flagged.
