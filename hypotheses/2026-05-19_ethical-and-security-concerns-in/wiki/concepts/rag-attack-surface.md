---
type: concept
slug: rag-attack-surface
aliases: [RAG attack surface, RAG vulnerability surface, RAG security surface]
related_concepts: [knowledge-poisoning, indirect-prompt-injection, backdoor-in-rag, supply-chain-risk, membership-inference]
introduced_by: [2025-anon-rag-security-threat-model, 2026-anon-securing-rag-taxonomy, 2026-anon-towards-secure-rag-review]
tags: [attack-surface, security, rag, threat-model, vulnerability]
---

The RAG attack surface encompasses all points in the RAG pipeline where adversaries can interfere with system behavior. Unlike standalone LLMs (whose attack surface is primarily the input/output interface and pre-training data), RAG's modular architecture creates multiple additional attack surfaces.

## Attack surface components

1. **Knowledge base (corpus)**:
   - Corpus poisoning: inject adversarial documents ([[concepts/knowledge-poisoning]]).
   - Data extraction: retrieve verbatim private content.
   - Membership inference: determine what is in the corpus.

2. **Retriever**:
   - Backdoored retrieval models: supply-chain compromise ([[concepts/backdoor-in-rag]]).
   - Adversarial query optimization: craft queries to retrieve specific content.
   - Retrieval manipulation via MIA.

3. **Retrieval-generation interface** (the context window):
   - Indirect prompt injection: embed instructions in retrieved content ([[concepts/indirect-prompt-injection]]).
   - Combined PIDP attacks: poisoning + injection ([[sources/2026-anon-pidp-attack]]).
   - Attention manipulation: exploit LLM attention to poison-retrieved documents ([[sources/2026-anon-sparse-attention-poisoning]]).

4. **Generator (LLM)**:
   - Jailbreak via context: bypass safety alignment through retrieved content ([[sources/2024-xue-badrag]]).
   - Hallucination amplification: attacker-crafted documents designed to trigger specific hallucinations.

## Key insight

RAG's attack surface is strictly larger than standalone LLM attack surface. New surfaces (corpus, retriever) require new defenses not covered by existing LLM security literature. See formal treatment in [[sources/2025-anon-rag-security-threat-model]] and taxonomy in [[sources/2026-anon-securing-rag-taxonomy]].
