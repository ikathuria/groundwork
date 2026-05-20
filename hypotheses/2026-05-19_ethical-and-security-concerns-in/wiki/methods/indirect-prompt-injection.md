---
type: method
slug: indirect-prompt-injection
aliases: [IPI, indirect PI, retrieval-based injection]
related_methods: [prompt-injection, retrieval-augmented-generation, backdoor-attack, knowledge-poisoning-attack]
used_in_papers: [2023-greshake-indirect-prompt-injection, 2024-anon-backdoored-retrievers, 2026-anon-pidp-attack, 2026-anon-lr-pi-defenses]
open_problems: [rag-adversarial-robustness, transferability-llm-safety-to-rag]
tags: [indirect-injection, prompt-injection, rag-security, retrieval-path, stealthy]
---

Indirect Prompt Injection (IPI) is the attack class introduced by [[sources/2023-greshake-indirect-prompt-injection]] in which adversarial instructions are embedded in data retrieved at inference time rather than issued directly by the user. In RAG systems, this means an attacker who controls content in the retrieval corpus can remotely control LLM behavior without ever directly interacting with the system.

## How it works

1. Attacker places adversarial instructions in a location likely to be retrieved (e.g., a public web page, a shared document, a database entry).
2. A user query triggers retrieval of the attacker-controlled content.
3. The LLM processes retrieved content as trusted context and executes embedded instructions.
4. The LLM performs attacker-specified actions: exfiltrate data, perform API calls, generate harmful output.

This is distinct from knowledge poisoning, which corrupts factual content. IPI injects executable instructions.

## Key insight

Processing untrusted retrieved data is analogous to executing untrusted code — the LLM cannot reliably distinguish between data and instructions ([[sources/2023-greshake-indirect-prompt-injection]]).

## Defenses

- Instruction hierarchy: mark system instructions as higher privilege than retrieved content.
- Input/output filtering: detect injection patterns in retrieved content.
- Self-reflection: LLM critiques whether generated response follows original user intent.
- Literature review of 88 defenses: [[sources/2026-anon-lr-pi-defenses]].
- Evaluation against adaptive attackers: [[sources/2025-rosati-attacker-moves-second]].
