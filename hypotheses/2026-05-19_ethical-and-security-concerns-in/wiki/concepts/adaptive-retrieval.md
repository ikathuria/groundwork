---
type: concept
slug: adaptive-retrieval
aliases: [on-demand retrieval, conditional retrieval, selective retrieval]
related_concepts: [faithfulness, hallucination, rag-attack-surface]
introduced_by: [2023-asai-self-rag, 2025-anon-hallucination-mitigation-survey]
tags: [adaptive-retrieval, self-rag, on-demand, selective, quality]
---

Adaptive retrieval is the paradigm of triggering retrieval only when the LLM determines it is needed, rather than always retrieving for every query. Self-RAG ([[sources/2023-asai-self-rag]]) is the primary instantiation, using reflection tokens to decide whether retrieval would improve the response.

## Motivation

Standard RAG retrieves indiscriminately for all queries. For queries the LLM can answer from parametric knowledge (common knowledge, general facts), forced retrieval may:
- Introduce irrelevant passages that confuse generation.
- Increase latency unnecessarily.
- Expand the attack surface to corpus poisoning attacks that wouldn't otherwise be triggered.

## Mechanism

Self-RAG's Retrieve token signals when retrieval should occur. The critic model learns this decision from GPT-4-annotated training data, enabling:
- Retrieval only when factual grounding is needed.
- Fewer false retrievals (reducing poisoning attack surface exposure).
- Controllable trade-off between retrieval frequency and generation quality at inference time.

## Security implications

Adaptive retrieval offers a minor security benefit: queries that don't trigger retrieval are immune to corpus poisoning. However, queries for which retrieval is genuinely needed remain vulnerable to the same poisoning attacks as standard RAG.
