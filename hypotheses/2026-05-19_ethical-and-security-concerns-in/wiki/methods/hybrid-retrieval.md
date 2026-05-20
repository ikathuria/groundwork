---
type: method
slug: hybrid-retrieval
aliases: [sparse-dense hybrid, BM25 + dense, hybrid retriever]
related_methods: [dense-passage-retrieval, retrieval-augmented-generation, knowledge-poisoning-attack]
used_in_papers: [2026-anon-semantic-chameleon, 2025-anon-rag-comprehensive-survey]
open_problems: [rag-adversarial-robustness]
tags: [retrieval, hybrid, bm25, dense, robustness]
---

Hybrid retrieval combines sparse (e.g., BM25) and dense (e.g., DPR) retrieval to leverage complementary strengths: BM25 excels at exact keyword matching while dense retrieval captures semantic similarity. Scores from both systems are combined (typically via linear interpolation) to rank candidate passages.

## How it works

1. Query is submitted to both a sparse index (inverted index, BM25) and a dense index (FAISS, embedding similarity).
2. Both systems return ranked candidate lists.
3. Scores are fused (reciprocal rank fusion or linear combination) to produce a unified ranking.

## Security advantage

[[sources/2026-anon-semantic-chameleon]] demonstrates that hybrid BM25 + dense retrieval is significantly more robust against gradient-based poisoning attacks than pure dense retrieval. Poisoned documents optimized for dense similarity are penalized by BM25's keyword matching requirements, making it harder to satisfy both retrieval conditions simultaneously.

## Strengths

- Better recall than either system alone.
- More robust to adversarial passage crafting than pure dense retrieval.
- Improved performance on diverse query types.

## Limitations

- Increased latency and infrastructure complexity.
- Requires tuning the interpolation weights.
- Not immune to poisoning: attacks can be crafted to satisfy both sparse and dense conditions.
