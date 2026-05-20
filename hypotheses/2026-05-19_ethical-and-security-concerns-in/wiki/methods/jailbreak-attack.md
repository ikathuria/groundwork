---
type: method
slug: jailbreak-attack
aliases: [jailbreak, safety bypass, alignment bypass]
related_methods: [prompt-injection, adaptive-attack-evaluation, indirect-prompt-injection]
used_in_papers: [2025-rosati-attacker-moves-second, 2026-anon-lr-pi-defenses]
open_problems: [transferability-llm-safety-to-rag, rag-adversarial-robustness]
tags: [jailbreak, safety, bypass, attack, llm]
---

Jailbreak attacks attempt to bypass LLM safety alignment to elicit harmful, restricted, or policy-violating outputs. In the RAG context, jailbreaks can be delivered via retrieved content (bypassing direct input safety filters), or combined with corpus poisoning to systematically override safety constraints for targeted queries. Adaptive jailbreak evaluation is studied in [[sources/2025-rosati-attacker-moves-second]].
