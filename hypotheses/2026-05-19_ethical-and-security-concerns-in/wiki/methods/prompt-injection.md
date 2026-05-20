---
type: method
slug: prompt-injection
aliases: [prompt injection attack, PI, direct prompt injection]
related_methods: [indirect-prompt-injection, retrieval-augmented-generation, jailbreak-attack, adaptive-attack-evaluation]
used_in_papers: [2023-greshake-indirect-prompt-injection, 2024-anon-backdoored-retrievers, 2026-anon-pidp-attack, 2025-rosati-attacker-moves-second, 2026-anon-lr-pi-defenses]
open_problems: [rag-adversarial-robustness, transferability-llm-safety-to-rag]
tags: [prompt-injection, adversarial, instruction-override, jailbreak, security]
---

Prompt Injection (PI) attacks embed adversarial instructions in LLM inputs to override the system's original instructions and elicit attacker-specified behaviors. Direct PI attacks are issued by the user; Indirect PI (IPI) embeds instructions in data retrieved by the system without direct user interface access.

## How it works

**Direct prompt injection**:
- User manipulates their own input to override system prompt or safety guidelines.
- Includes jailbreak techniques, role-playing prompts, hypothetical scenario framing.

**Indirect prompt injection** (IPI, [[sources/2023-greshake-indirect-prompt-injection]]):
- Attacker embeds malicious instructions in web pages, documents, or database entries.
- When retrieved by a RAG system, instructions are processed as data but executed as commands.
- Enables remote control of LLM behavior without direct user interface access.

**PIDP Attack** (combined PI + database poisoning, [[sources/2026-anon-pidp-attack]]):
- Poisoned database entries simultaneously trigger retrieval and carry injection instructions.
- Synergistic: retrieval ensures the poisoned content is surfaced; injection executes the payload.

## Threats enabled

- Information gathering: exfiltrate private data from context or chat history.
- Remote code execution: trigger API calls or tool use.
- Output manipulation: produce disinformation, propaganda, or harmful content.
- Malware spreading: propagate injection instructions through shared content (worm behavior).

## Defenses

- Input/output filtering (limited effectiveness against adaptive attacks, [[sources/2025-rosati-attacker-moves-second]]).
- Self-reflection and instruction hierarchy enforcement.
- Systematic defense taxonomy: [[sources/2026-anon-lr-pi-defenses]].
