---
type: dataset
slug: ms-marco
tasks: [passage-retrieval, qa, poisoning-attack-evaluation, retrieval-benchmarking]
used_in_papers: [2020-lewis-rag, 2024-zou-poisonedrag, 2024-chen-trojanrag, 2024-xue-badrag, 2024-anon-backdoored-retrievers, 2025-anon-practical-poisoning, 2024-anon-robust-rag-poisoning-eval, 2025-anon-ragpart-ragmask, 2026-anon-semantic-chameleon]
known_limitations: [English-only, web-based passages may contain biases, questions from Bing logs]
tags: [ms-marco, retrieval, benchmark, passage, qa]
---

MS MARCO (Microsoft MAchine Reading Comprehension) is a large-scale passage retrieval and reading comprehension dataset based on Bing search queries and web document passages. Widely used for retrieval benchmarking (BEIR), and frequently used as a poisoning evaluation corpus in RAG security papers due to its large, realistic web-sourced corpus.
