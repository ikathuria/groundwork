---
type: concept
slug: corpus-poisoning
aliases: [database poisoning, knowledge base poisoning, corpus contamination]
related_concepts: [knowledge-poisoning, rag-attack-surface, adversarial-robustness]
introduced_by: [2024-zou-poisonedrag, 2025-anon-ragpart-ragmask, 2026-anon-semantic-chameleon]
tags: [corpus, poisoning, attack, rag-security, contamination]
---

Corpus poisoning is the specific subclass of knowledge poisoning where adversarial documents are injected into the RAG retrieval corpus to manipulate which passages are returned for target queries. The term emphasizes the corpus-level nature of the attack (as opposed to model-level backdoors).

## Mechanism

Corpus poisoning requires:
1. Write access to the retrieval corpus (public wiki, shared database, uploaded document store).
2. Knowledge of the retrieval architecture (dense, sparse, or hybrid) to craft optimally positioned passages.
3. Crafting of poisoned passages satisfying both retrieval and generation conditions.

## Attack families

- **PoisonedRAG** ([[sources/2024-zou-poisonedrag]]): Gradient-based optimization for maximum retrieval and generation impact.
- **BadRAG** ([[sources/2024-xue-badrag]]): Black-box systematic attack framework.
- **Practical poisoning** ([[sources/2025-anon-practical-poisoning]]): LLM-assisted natural adversarial text.
- **Semantic Chameleon** ([[sources/2026-anon-semantic-chameleon]]): Corpus-composition-aware poisoning analysis.
- **PIDP** ([[sources/2026-anon-pidp-attack]]): Poison + injection combined.

## Defenses

- Retrieval-stage: RAGPart/RAGMask ([[sources/2025-anon-ragpart-ragmask]]).
- Sparse attention ([[sources/2026-anon-sparse-attention-poisoning]]).
- Consistency checking ([[sources/2025-anon-defending-knowledge-poisoning]]).
- Hybrid retrieval ([[sources/2026-anon-semantic-chameleon]]).
- Post-hoc traceback ([[sources/2025-anon-traceback-poisoning]]).
