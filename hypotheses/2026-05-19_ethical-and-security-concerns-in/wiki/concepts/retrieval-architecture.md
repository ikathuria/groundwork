---
type: concept
slug: retrieval-architecture
aliases: [RAG architecture, retrieval system design, sparse vs dense retrieval]
related_concepts: [adversarial-robustness, corpus-poisoning, rag-attack-surface]
introduced_by: [2020-lewis-rag, 2026-anon-semantic-chameleon, 2025-anon-rag-comprehensive-survey]
tags: [architecture, retrieval, design, sparse, dense, hybrid]
---

Retrieval architecture refers to the design choices governing how documents are indexed and retrieved in a RAG system, including whether sparse (BM25, TF-IDF), dense (DPR, Contriever), or hybrid retrieval is used. Architecture choice has significant implications for both retrieval quality and security.

## Architecture options

**Sparse retrieval (BM25, TF-IDF)**:
- Keyword matching; no semantic understanding.
- Fast, interpretable, no GPU required.
- Resistant to semantic adversarial attacks but vulnerable to keyword-stuffing attacks.

**Dense retrieval (DPR, Contriever, E5)**:
- Semantic embedding similarity.
- Better recall on paraphrase queries.
- Vulnerable to gradient-based adversarial optimization of passage embeddings.

**Hybrid retrieval (BM25 + dense)**:
- Combines both approaches via score fusion.
- Provides mutual robustness: attacks optimized for dense retrieval are penalized by BM25.
- Demonstrated superior robustness against gradient-based poisoning ([[sources/2026-anon-semantic-chameleon]]).

## Security implications

Architecture choice is a security parameter, not just a performance parameter. [[sources/2026-anon-semantic-chameleon]] provides evidence that hybrid retrieval is significantly more robust to corpus poisoning than pure dense retrieval. [[sources/2025-anon-ragpart-ragmask]] proposes retrieval-stage architectural modifications (RAGPart, RAGMask) as defenses.
