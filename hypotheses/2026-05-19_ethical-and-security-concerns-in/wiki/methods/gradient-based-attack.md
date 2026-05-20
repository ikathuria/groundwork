---
type: method
slug: gradient-based-attack
aliases: [white-box attack, gradient optimization attack, GCG attack]
related_methods: [adversarial-passage-crafting, knowledge-poisoning-attack]
used_in_papers: [2024-zou-poisonedrag]
open_problems: [rag-adversarial-robustness]
tags: [gradient, white-box, attack, optimization, adversarial]
---

Gradient-based attacks use gradient information from a model to optimize adversarial inputs that maximize attack objectives (e.g., retrieval similarity, target output probability). In RAG, the white-box variant of PoisonedRAG ([[sources/2024-zou-poisonedrag]]) uses GCG-style token-level optimization to craft poisoned passages. While highly effective, gradient-based attacks require model access unavailable to practical black-box adversaries.
