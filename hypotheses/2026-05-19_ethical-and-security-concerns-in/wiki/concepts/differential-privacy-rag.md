---
type: concept
slug: differential-privacy-rag
aliases: [DP-RAG, differentially private RAG, formal privacy in RAG]
related_concepts: [privacy-leakage, membership-inference, formal-privacy-guarantees]
introduced_by: [2024-koga-dp-rag, 2025-anon-dp-synthetic-text-rag]
tags: [differential-privacy, privacy, formal-guarantee, rag, protection]
---

Differential Privacy (DP) in RAG systems provides formal, mathematical privacy guarantees for the contents of private retrieval knowledge bases. DP-RAG mechanisms ensure that an adversary observing system outputs cannot reliably distinguish between knowledge bases that differ by a single document.

## Two deployment approaches

**Query-time DP** ([[sources/2024-koga-dp-rag]]):
- Noise is added to query embeddings or retrieval decisions at inference time.
- Each query consumes a portion of the total privacy budget (ε).
- Privacy budget depletes with repeated queries — accumulated privacy loss over time.

**Corpus-time DP** ([[sources/2025-anon-dp-synthetic-text-rag]]):
- Private corpus is replaced with DP-synthetic text generated once at corpus creation.
- Privacy budget is fixed at corpus creation time, not consumed per query.
- More practical for production deployments with many users.

## Formal guarantee

An (ε, δ)-DP mechanism M satisfies: for all possible knowledge bases D, D' differing by one document, and all outputs O:
Pr[M(D) ∈ O] ≤ e^ε · Pr[M(D') ∈ O] + δ

Smaller ε = stronger privacy, but at the cost of retrieval quality.

## Key trade-off

DP provides formal guarantees but imposes a fundamental accuracy-privacy trade-off. In the RAG context, this means degraded retrieval quality (noisier results) for stronger privacy protection. This trade-off is inherent and cannot be eliminated without additional assumptions ([[open-problems/rag-privacy-guarantees]]).
