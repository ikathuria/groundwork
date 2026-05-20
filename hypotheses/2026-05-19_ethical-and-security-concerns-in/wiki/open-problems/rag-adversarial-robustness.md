---
type: open-problem
slug: rag-adversarial-robustness
severity: critical
affects_methods: [retrieval-augmented-generation, knowledge-poisoning-attack, backdoor-attack, prompt-injection, indirect-prompt-injection]
sources: [2024-zou-poisonedrag, 2024-xue-badrag, 2025-anon-practical-poisoning, 2025-rosati-attacker-moves-second, 2024-anon-robust-rag-poisoning-eval, 2025-anon-ragpart-ragmask, 2025-anon-defending-knowledge-poisoning, 2026-anon-securing-rag-taxonomy, 2026-anon-towards-secure-rag-review]
tags: [adversarial, robustness, open-problem, rag-security, critical]
---

**The central unsolved problem in RAG security**: how to achieve certified, evasion-resistant adversarial robustness for RAG systems against corpus poisoning, backdoor attacks, and prompt injection, without unacceptable utility or latency trade-offs.

## Why it's hard

1. **Adaptive attackers**: Any non-certified defense can be bypassed by an adversary who knows the defense ([[sources/2025-rosati-attacker-moves-second]]). Defenders are perpetually in an arms race with adaptive attackers.

2. **Multi-component attack surface**: Robustness must be ensured at corpus level, retrieval level, and generation level simultaneously ([[sources/2025-anon-rag-security-threat-model]]). No current approach addresses all three.

3. **No certified corpus poisoning defense**: Classical certified adversarial robustness (randomized smoothing) does not directly translate to the RAG setting, where inputs are discrete text documents.

4. **Evaluation inconsistency**: Papers use incompatible attack configurations, making it impossible to compare defense effectiveness ([[sources/2024-anon-robust-rag-poisoning-eval]]).

5. **Utility trade-offs**: All current defenses sacrifice retrieval quality or latency for robustness. No Pareto-optimal defense exists.

## What's been tried

- Retrieval-stage defenses: RAGPart/RAGMask ([[sources/2025-anon-ragpart-ragmask]]), sparse attention ([[sources/2026-anon-sparse-attention-poisoning]]), hybrid retrieval ([[sources/2026-anon-semantic-chameleon]]).
- Detection defenses: Perplexity filtering, consistency checking ([[sources/2025-anon-defending-knowledge-poisoning]]).
- Post-hoc forensics: Traceback ([[sources/2025-anon-traceback-poisoning]]).
- Prompt injection defenses: Input/output filtering, instruction hierarchies ([[sources/2026-anon-lr-pi-defenses]]).

None achieves certified robustness against adaptive adversaries.

## Future directions

- Certified robustness via randomized smoothing adapted for RAG.
- Formal verification of retrieval integrity.
- Standardized adversarial robustness benchmarks for RAG.
