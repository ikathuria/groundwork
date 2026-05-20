---
type: method
slug: black-box-inference
aliases: [black-box attack, API-only inference, black-box query]
related_methods: [membership-inference-attack, knowledge-poisoning-attack, stealthy-query-attack]
used_in_papers: [2024-anderson-mia-rag, 2025-anon-practical-poisoning]
open_problems: [rag-privacy-guarantees, rag-adversarial-robustness]
tags: [black-box, inference, attack, api-access, no-model-access]
---

Black-box inference attacks operate using only API-level access to a system — observing inputs and outputs without any access to model parameters, gradients, or internal representations. In the RAG context, black-box MIA ([[sources/2024-anderson-mia-rag]]) infers database membership from output distributions, and black-box poisoning ([[sources/2025-anon-practical-poisoning]]) crafts adversarial passages without gradient access. Black-box attacks are the most realistic threat model for deployed RAG systems.
