---
type: concept
slug: knowledge-grounding
aliases: [factual grounding, evidence grounding, context grounding]
related_concepts: [faithfulness, hallucination, parametric-vs-nonparametric-knowledge]
introduced_by: [2020-lewis-rag]
tags: [grounding, knowledge, factual, rag, faithfulness]
---

Knowledge grounding refers to the property of LLM outputs being explicitly anchored to and supported by retrieved external evidence. RAG achieves grounding by conditioning generation on retrieved passages, making claims traceable to specific documents. Grounding is the mechanism through which RAG reduces hallucination and provides provenance.
