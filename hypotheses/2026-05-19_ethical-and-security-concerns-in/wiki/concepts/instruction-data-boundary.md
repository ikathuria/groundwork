---
type: concept
slug: instruction-data-boundary
aliases: [data-instruction confusion, instruction data separation]
related_concepts: [indirect-prompt-injection, rag-attack-surface, adversarial-robustness]
introduced_by: [2023-greshake-indirect-prompt-injection]
tags: [instruction, data, boundary, security, prompt-injection]
---

The instruction-data boundary problem refers to the LLM's inability to reliably distinguish between user-issued instructions and content treated as data. When retrieved documents contain adversarial instructions (indirect prompt injection), the LLM may execute them as commands. Greshake et al. ([[sources/2023-greshake-indirect-prompt-injection]]) frame this as analogous to code injection: processing untrusted retrieved data is equivalent to executing untrusted code.
