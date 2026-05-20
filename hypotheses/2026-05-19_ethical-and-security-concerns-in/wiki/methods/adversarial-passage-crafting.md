---
type: method
slug: adversarial-passage-crafting
aliases: [adversarial text generation, passage crafting, adversarial document creation]
related_methods: [knowledge-poisoning-attack, gradient-based-attack, black-box-inference]
used_in_papers: [2024-xue-badrag, 2024-zou-poisonedrag, 2025-anon-practical-poisoning, 2025-anon-retriever-backdoors-code]
open_problems: [rag-adversarial-robustness, detection-of-poisoned-retrieval]
tags: [adversarial, passage-crafting, text-generation, attack, optimization]
---

Adversarial passage crafting generates text documents optimized to simultaneously achieve high retrieval similarity for target queries and steer LLM generation toward attacker-specified outputs. Methods range from gradient-based optimization ([[methods/gradient-based-attack]]) requiring model access, to LLM-assisted generation ([[sources/2025-anon-practical-poisoning]]) in black-box settings. Both approaches are core to corpus poisoning attacks ([[concepts/knowledge-poisoning]]).
