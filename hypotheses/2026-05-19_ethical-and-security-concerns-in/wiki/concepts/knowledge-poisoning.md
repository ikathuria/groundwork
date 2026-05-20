---
type: concept
slug: knowledge-poisoning
aliases: [corpus poisoning, knowledge corruption, RAG poisoning, database poisoning]
related_concepts: [corpus-poisoning, rag-attack-surface, adversarial-robustness, data-provenance, backdoor-in-rag]
introduced_by: [2024-zou-poisonedrag, 2024-xue-badrag, 2024-chen-trojanrag, 2025-anon-traceback-poisoning]
tags: [poisoning, corpus, knowledge-base, attack, security]
---

Knowledge poisoning is the corruption of a RAG system's retrieval corpus by injecting adversarially crafted documents. Poisoned documents are designed to be retrieved for target queries and to manipulate LLM outputs toward attacker-specified goals (misinformation, harmful content, data exfiltration, behavior manipulation).

## Attack conditions

A successful knowledge poisoning attack must satisfy:
1. **Retrieval condition**: The poisoned document is retrieved for the target query.
2. **Generation condition**: The LLM produces the attacker's desired output when conditioned on the poisoned document.

Both conditions can be satisfied simultaneously via gradient-based ([[sources/2024-zou-poisonedrag]]) or LLM-assisted ([[sources/2025-anon-practical-poisoning]]) passage crafting.

## Variants

- **Targeted factual corruption**: Replace correct factual answers with attacker-specified misinformation ([[sources/2024-zou-poisonedrag]]).
- **Trigger-based backdoor**: Poisoned documents activate only for queries containing a specific trigger ([[sources/2024-chen-trojanrag]]).
- **Behavioral manipulation**: Poison corpus to produce jailbreak-style harmful outputs ([[sources/2024-xue-badrag]]).
- **Combined PI+poisoning**: Poisoned documents carry injection instructions, not just corrupted facts ([[sources/2026-anon-pidp-attack]]).

## Defenses

- **Inference-time**: Retrieval filtering ([[methods/retrieval-filtering]]), consistency checking ([[sources/2025-anon-defending-knowledge-poisoning]]), sparse attention ([[sources/2026-anon-sparse-attention-poisoning]]), RAGPart/RAGMask ([[sources/2025-anon-ragpart-ragmask]]).
- **Post-hoc forensics**: Poisoning traceback ([[methods/poisoning-traceback]], [[sources/2025-anon-traceback-poisoning]]).
- **Architecture-level**: Hybrid retrieval ([[methods/hybrid-retrieval]]) reduces attack surface.

## Severity

All poisoning surveys ([[sources/2026-anon-securing-rag-taxonomy]], [[sources/2026-anon-towards-secure-rag-review]]) rate knowledge poisoning as the most critical RAG-specific security threat because it requires only corpus write access and can be mounted by an adversary with no model access.
