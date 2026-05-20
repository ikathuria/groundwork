---
type: method
slug: consistency-verification
aliases: [consistency checking, cross-verification, knowledge consistency]
related_methods: [retrieval-filtering, knowledge-poisoning-attack, retrieval-augmented-generation]
used_in_papers: [2025-anon-defending-knowledge-poisoning]
open_problems: [rag-adversarial-robustness, detection-of-poisoned-retrieval]
tags: [consistency, verification, defense, knowledge, cross-checking]
---

Consistency verification for RAG cross-checks retrieved passages against LLM parametric knowledge to detect anomalies that may indicate poisoning. Passages that significantly contradict facts the LLM has learned during training are flagged as potentially poisoned and excluded. Proposed in [[sources/2025-anon-defending-knowledge-poisoning]]. Limitations: fails against adaptive attackers who craft passages consistent with model priors while still steering generation adversarially.
