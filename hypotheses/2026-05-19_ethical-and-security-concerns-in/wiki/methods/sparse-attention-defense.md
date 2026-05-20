---
type: method
slug: sparse-attention-defense
aliases: [sparse attention, limited attention, restricted cross-document attention]
related_methods: [retrieval-augmented-generation, knowledge-poisoning-attack, retrieval-filtering]
used_in_papers: [2026-anon-sparse-attention-poisoning]
open_problems: [rag-adversarial-robustness]
tags: [sparse-attention, defense, attention, generation-stage, rag]
---

Sparse attention defense modifies the LLM's attention mechanism to limit cross-document information flow in the context window, reducing the influence of any single retrieved document (including poisoned ones) on the generated output. Proposed by [[sources/2026-anon-sparse-attention-poisoning]] as a generation-stage complement to retrieval-stage defenses like RAGPart/RAGMask.
