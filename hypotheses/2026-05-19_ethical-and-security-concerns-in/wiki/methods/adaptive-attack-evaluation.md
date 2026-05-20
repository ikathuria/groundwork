---
type: method
slug: adaptive-attack-evaluation
aliases: [adaptive attacker, attacker moves second, white-box defense evaluation]
related_methods: [prompt-injection, jailbreak-attack, indirect-prompt-injection]
used_in_papers: [2025-rosati-attacker-moves-second, 2026-anon-lr-pi-defenses]
open_problems: [rag-adversarial-robustness, transferability-llm-safety-to-rag]
tags: [adaptive-attacks, evaluation, robustness, defense-evaluation, security]
---

Adaptive attack evaluation is a methodology for assessing defense robustness by constructing attacks specifically optimized to bypass each defense. The "attacker moves second" principle ([[sources/2025-rosati-attacker-moves-second]]) formalizes that any non-certified defense will be defeated by a sufficiently adaptive adversary.

## How it works

1. A defense mechanism is published or deployed.
2. An adaptive attacker analyzes the defense mechanism and optimizes an attack specifically to circumvent it.
3. Attack success rate against the defense is measured, providing a true upper bound on attacker capability.

## Key insight

Evaluating defenses only against static attacks (fixed attack strings) or weak optimizers creates the illusion of security. Adaptive evaluation — where the attacker has second-move advantage — is the correct standard for security claims.

## Results from literature

- [[sources/2025-rosati-attacker-moves-second]] shows that most published defenses against jailbreaks and prompt injections fail under adaptive attacks.
- [[sources/2026-anon-lr-pi-defenses]] catalogs which defenses are most/least adaptive-attack-resistant across 88 studies.

## Implications for RAG

- Defenses evaluated only against PoisonedRAG or BadRAG (fixed attacks) may fail against stronger adaptive adversaries.
- Certified robustness (randomized smoothing, DP) provides guarantees independent of attacker adaptivity.
- The field needs adversarial evaluation standards analogous to those in classical ML security.
