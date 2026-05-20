---
type: concept
slug: membership-inference
aliases: [membership inference attack, MIA, database membership, retrieval membership]
related_concepts: [privacy-leakage, data-extraction, differential-privacy-rag, rag-attack-surface]
introduced_by: [2024-anderson-mia-rag, 2025-anon-riddle-mia-rag, 2025-anon-safeguarding-privacy-mia]
tags: [membership-inference, privacy, attack, mia, rag]
---

Membership inference in RAG is the problem of determining whether a specific document is stored in the private retrieval database, by observing the system's outputs in response to crafted queries. Unlike membership inference against LLM parameters, RAG-MIA exploits the retrieval pathway, which amplifies membership signals in outputs.

## Why RAG amplifies MIA risk

In parametric LLMs, membership inference is hard because individual training examples rarely dominate outputs. In RAG, the retrieved document is directly provided to the LLM in context — if the target document is retrieved, its content appears literally in the LLM's context and influences the output substantially, creating strong membership signals.

## Attack taxonomy

- **Direct MIA** ([[sources/2024-anderson-mia-rag]]): Query about target document content; compare member vs. non-member output distributions.
- **Stealthy MIA (RIDDLE)** ([[sources/2025-anon-riddle-mia-rag]]): Paraphrase-based queries that evade agent-based filters.
- **S2MIA**: Provide first half of target document and request completion.
- **MBA**: Mask tokens in target document and probe LLM for prediction.
- **Interrogation Attack**: Ask multiple questions answerable only by the target document.

## Defenses

- **Mirabel** ([[sources/2025-anon-safeguarding-privacy-mia]]): Detect queries with anomalously high similarity to a single document (Gumbel distribution modeling) and hide that document.
- **DP-RAG** ([[sources/2024-koga-dp-rag]]): Add noise to retrieval process, reducing membership signal.
- **Privacy-Aware Decoding** ([[sources/2025-anon-privacy-aware-decoding]]): Suppress tokens uniquely attributable to private documents.

## Open problem

No current defense provides strong guarantees against all MIA variants simultaneously, especially stealthy adaptive attacks ([[open-problems/rag-privacy-guarantees]]).
