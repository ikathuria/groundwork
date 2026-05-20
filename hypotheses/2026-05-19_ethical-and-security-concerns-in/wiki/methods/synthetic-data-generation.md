---
type: method
slug: synthetic-data-generation
aliases: [synthetic corpus generation, DP synthetic data, privacy-preserving synthetic text]
related_methods: [differential-privacy, retrieval-augmented-generation]
used_in_papers: [2025-anon-dp-synthetic-text-rag]
open_problems: [rag-privacy-guarantees]
tags: [synthetic-data, privacy, DP, generation, corpus]
---

Synthetic data generation for RAG produces differentially private synthetic text to replace sensitive real documents in the knowledge base. The approach in DP-SynRAG ([[sources/2025-anon-dp-synthetic-text-rag]]) generates the synthetic corpus once at corpus creation time using DP mechanisms, fixing the total privacy budget and avoiding the query-time privacy budget accumulation problem of per-query DP noise injection.
