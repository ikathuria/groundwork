---
type: concept
slug: defense-evasion
aliases: [adaptive evasion, defense bypass, filter evasion, defense circumvention]
related_concepts: [adversarial-robustness, indirect-prompt-injection, knowledge-poisoning]
introduced_by: [2025-rosati-attacker-moves-second, 2025-anon-riddle-mia-rag, 2025-anon-practical-poisoning]
tags: [evasion, adaptive-attacks, defense, bypass, security]
---

Defense evasion in RAG security refers to attack strategies specifically designed to circumvent deployed defenses while still achieving the attacker's goals. Evasion is the primary challenge for RAG defense research: any defense evaluated only against non-adaptive attackers may fail against evasion-aware adversaries.

## Forms of defense evasion

**Against perplexity filtering**:
- Use LLM-assisted generation to produce natural-sounding adversarial text ([[sources/2025-anon-practical-poisoning]]).
- Gradient-optimized text sometimes has unnaturally low perplexity, but LLM-generated text does not.

**Against MIA detection filters**:
- RIDDLE ([[sources/2025-anon-riddle-mia-rag]]): Use paraphrase "riddle" queries instead of direct queries that trigger similarity-based detection.

**Against consistency-checking defenses**:
- Craft poisoned passages that are internally consistent with LLM parametric knowledge while still steering generation toward attacker goals.

**Against all detection-based defenses**:
- The attacker-moves-second principle ([[sources/2025-rosati-attacker-moves-second]]): any detection-based defense can be evaded by an adaptive attacker who knows the defense.
- Only certified defenses (DP, randomized smoothing) provide evasion-resistant guarantees.

## Key implication for the field

Defense evaluation must include adaptive attackers as the default case. Papers that only evaluate defenses against fixed attack instances (e.g., original PoisonedRAG) significantly overstate their defenses' effectiveness.
