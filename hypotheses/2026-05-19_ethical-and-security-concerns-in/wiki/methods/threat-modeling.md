---
type: method
slug: threat-modeling
aliases: [attack surface analysis, security threat model, RAG threat model]
related_methods: [retrieval-augmented-generation]
used_in_papers: [2025-anon-rag-security-threat-model, 2026-anon-securing-rag-taxonomy, 2026-anon-towards-secure-rag-review]
open_problems: [rag-adversarial-robustness, governance-data-provenance]
tags: [threat-modeling, security, formalization, attack-surface, methodology]
---

Threat modeling for RAG systems is the process of systematically identifying, categorizing, and analyzing potential attack vectors and their impact across the full RAG pipeline. Formalized threat models enable principled defense design and evaluation.

## RAG-specific threat model dimensions

1. **Threat actor capability**: Black-box (API access only), gray-box (corpus write access), white-box (retriever/LLM access).
2. **Attack target**: Knowledge base integrity, retriever reliability, generation faithfulness, user privacy.
3. **Attack type**: Poisoning, extraction, injection, inference, evasion.
4. **Attack goal**: Misinformation, data exfiltration, system disruption, fairness violation.

See [[sources/2025-anon-rag-security-threat-model]] for formal definitions and [[sources/2026-anon-securing-rag-taxonomy]] for the most comprehensive taxonomy.

## Importance

Without a unified threat model, defenses are evaluated against incompatible attack scenarios, making it impossible to compare their effectiveness. The field needs standardized threat models as a prerequisite for reproducible security research ([[sources/2024-anon-robust-rag-poisoning-eval]]).
