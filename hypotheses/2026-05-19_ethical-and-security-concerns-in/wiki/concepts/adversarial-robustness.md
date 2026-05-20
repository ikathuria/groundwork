---
type: concept
slug: adversarial-robustness
aliases: [RAG robustness, attack robustness, defense robustness, certified robustness]
related_concepts: [knowledge-poisoning, rag-attack-surface, indirect-prompt-injection, defense-evasion]
introduced_by: [2024-anon-robust-rag-poisoning-eval, 2025-rosati-attacker-moves-second, 2026-anon-securing-rag-taxonomy]
tags: [robustness, security, adversarial, defense, rag]
---

Adversarial robustness in RAG measures the degree to which a RAG system maintains correct, safe, and fair behavior in the presence of adversarially crafted inputs or a corrupted knowledge base. A robust RAG system resists corpus poisoning, prompt injection, membership inference, and data extraction attacks.

## Dimensions of robustness

1. **Corpus integrity robustness**: Resistance to knowledge poisoning even when some percentage of corpus documents are adversarially crafted.
2. **Retrieval robustness**: Retriever does not preferentially surface attacker-controlled documents.
3. **Generation robustness**: LLM does not faithfully reproduce attacker-controlled content.
4. **Privacy robustness**: System does not leak corpus membership or content under adversarial queries.

## Current state of the art

- Most defenses are shown to fail under adaptive attacks ([[sources/2025-rosati-attacker-moves-second]]).
- No defense currently achieves certified robustness in the full RAG setting.
- Defense evaluation practices are inconsistent, impeding progress ([[sources/2024-anon-robust-rag-poisoning-eval]]).
- Hybrid retrieval provides partial corpus robustness ([[sources/2026-anon-semantic-chameleon]]).

## Open problem

Achieving certified adversarial robustness for RAG — with formal guarantees against all attack variants — is the central unsolved problem in RAG security ([[open-problems/rag-adversarial-robustness]]). Randomized smoothing and DP-based approaches provide partial guarantees but with significant utility trade-offs.
