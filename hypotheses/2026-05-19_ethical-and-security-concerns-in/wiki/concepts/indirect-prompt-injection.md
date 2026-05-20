---
type: concept
slug: indirect-prompt-injection
aliases: [IPI, indirect PI, retrieval-embedded injection, data-injection attack]
related_concepts: [rag-attack-surface, adversarial-robustness, instruction-data-boundary, backdoor-in-rag]
introduced_by: [2023-greshake-indirect-prompt-injection, 2024-anon-backdoored-retrievers, 2026-anon-pidp-attack]
tags: [prompt-injection, indirect, retrieval-path, attack, security]
---

Indirect Prompt Injection (IPI) is an attack paradigm in which adversarial instructions are embedded in data that will be retrieved by an LLM-integrated application, rather than issued directly by a user. The attacker exploits the LLM's inability to reliably distinguish between user instructions and retrieved data.

## Significance

IPI is particularly dangerous for RAG systems because:
1. The retrieval corpus is often partially or fully controlled by third parties (public web, shared databases, user-contributed wikis).
2. The LLM processes retrieved content as high-trust context, not as potentially hostile input.
3. The attacker requires no direct access to the system — only the ability to place content where it will be retrieved.

Conceptually, processing untrusted retrieved data is equivalent to executing untrusted code ([[sources/2023-greshake-indirect-prompt-injection]]).

## Attack taxonomy

Per [[sources/2023-greshake-indirect-prompt-injection]]:
- **Passive IPI**: Instructions in static web content retrieved by search.
- **Active IPI**: Instructions in emails, documents, or other dynamic content.
- **User-driven IPI**: Attacker tricks user into submitting a query that retrieves injected content.
- **Hidden IPI**: Instructions hidden in content (e.g., white text, steganographic encoding).

## Threat scenarios

- Information exfiltration: leak user chat history or personal data to the attacker.
- Unauthorized API calls: trigger tool use or external service calls.
- Spreading worms: injected content instructs the LLM to propagate injection to other documents.
- Disinformation: override factual responses with attacker-controlled content.

## Defenses

- Input/output filtering (limited effectiveness against adaptive attacks).
- Instruction hierarchy: privilege system instructions over retrieved content.
- Systematic defense taxonomy: [[sources/2026-anon-lr-pi-defenses]].
- Adaptive attack evaluation standard: [[sources/2025-rosati-attacker-moves-second]].
