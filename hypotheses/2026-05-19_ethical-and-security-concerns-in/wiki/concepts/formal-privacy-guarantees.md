---
type: concept
slug: formal-privacy-guarantees
aliases: [certified privacy, provable privacy, mathematical privacy guarantees]
related_concepts: [differential-privacy-rag, membership-inference, privacy-leakage]
introduced_by: [2024-koga-dp-rag, 2025-anon-dp-synthetic-text-rag]
tags: [formal, privacy, guarantee, certification, dp]
---

Formal privacy guarantees in RAG systems are mathematically provable bounds on the information an adversary can learn about the retrieval corpus from system outputs. Unlike heuristic defenses (which may be evaded), formal guarantees hold against arbitrary adversaries within the specified threat model.

## Key guarantee: Differential Privacy

The standard formal privacy guarantee for RAG is (ε, δ)-Differential Privacy ([[concepts/differential-privacy-rag]]). This guarantees:
- An adversary who observes all system outputs cannot determine whether any specific document is in the corpus with probability significantly above random chance.
- The guarantee holds against all adversaries, including adaptive ones, as long as the privacy mechanism is correctly implemented.

## Why formal guarantees matter for RAG

Heuristic defenses (detect-and-hide, perplexity filtering) can be evaded by adaptive attackers ([[concepts/defense-evasion]], [[sources/2025-rosati-attacker-moves-second]]). Only formal guarantees provide evasion-resistant protection. For high-stakes domains (medical, legal, classified), formal guarantees may be required by regulation.

## Current limitations

- DP provides guarantees only against membership inference and extraction, not against poisoning.
- The accuracy-privacy trade-off limits practical DP deployment in production RAG ([[open-problems/rag-privacy-guarantees]]).
- Formal fairness guarantees for RAG do not yet exist.
- Certified robustness against corpus poisoning (analogous to certified adversarial robustness in image classification) remains an open problem.
