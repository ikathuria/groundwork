---
type: open-problem
slug: transferability-llm-safety-to-rag
severity: high
affects_methods: [retrieval-augmented-generation, prompt-injection, indirect-prompt-injection, adaptive-attack-evaluation]
sources: [2025-rosati-attacker-moves-second, 2026-anon-lr-pi-defenses, 2023-greshake-indirect-prompt-injection, 2026-anon-securing-rag-taxonomy]
tags: [safety, transfer, llm, rag, open-problem]
---

**Whether and how safety alignment techniques developed for standalone LLMs (RLHF, constitutional AI, safety fine-tuning) transfer to and protect RAG-augmented systems, given that RAG introduces new attack vectors not covered by standard LLM safety training.**

## Why it's hard

1. **RAG bypasses safety alignment via context**: Malicious content delivered through retrieved passages arrives in the LLM's context window, not the user prompt, potentially bypassing safety filters trained on direct user inputs ([[sources/2024-xue-badrag]]).

2. **Safety training doesn't cover indirect injection**: RLHF and constitutional AI primarily train models to refuse harmful user requests. They don't train models to distrust retrieved content or resist indirect prompt injection.

3. **Adaptive attackers always move second**: [[sources/2025-rosati-attacker-moves-second]] establishes that any non-certified defense fails against adaptive attackers. LLM safety alignment is non-certified.

4. **Domain-specific safety requirements**: Safety requirements for RAG in medical, legal, or financial domains go beyond general harmlessness and require domain-specific knowledge of what constitutes a harmful output.

5. **No unified safety framework**: The RAG security and LLM safety communities have developed separate frameworks that are not well integrated.

## What's been tried

- Safety filters for prompt injection: cataloged in [[sources/2026-anon-lr-pi-defenses]] (88 studies, none fully solve the problem).
- Adaptive evaluation framework: [[sources/2025-rosati-attacker-moves-second]].
- RAG-specific threat models: [[sources/2025-anon-rag-security-threat-model]].

## Future directions

- RAG-specific safety training data covering indirect injection and corpus poisoning.
- Instruction hierarchy enforcement at the architecture level.
- Unified evaluation frameworks spanning LLM safety and RAG security.
- Certified safety guarantees for RAG outputs.
