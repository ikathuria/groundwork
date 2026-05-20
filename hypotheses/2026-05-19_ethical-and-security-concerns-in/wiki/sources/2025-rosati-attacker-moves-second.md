---
type: source
id: 2025-rosati-attacker-moves-second
source_type: paper
title: "The Attacker Moves Second: Stronger Adaptive Attacks Bypass Defenses Against LLM Jailbreaks and Prompt Injections"
authors: ["Rosati, D.", "Wehner, J.", "Williams, K.", "Bartolo, M.", "Rosman, B.", "Gurev, V.", "Ruber, F."]
year: 2025
venue: "arXiv 2510.09023"
doi: "10.48550/arXiv.2510.09023"
url: "https://arxiv.org/abs/2510.09023"
raw_path: raw/papers/2025-rosati-attacker-moves-second.html
tags: [adaptive-attacks, jailbreaks, prompt-injection, defense-evaluation, adversarial-robustness]
---

This paper argues that current defenses against jailbreaks and prompt injections are evaluated against weak, non-adaptive attackers. By constructing stronger adaptive attacks that are specifically optimized to bypass each defense, the paper shows that most existing defenses are far more brittle than claimed. The "attacker moves second" framework establishes a new robustness evaluation standard.

## Key claims

- Most defenses against jailbreaks and prompt injections are evaluated against static attack strings or weak optimization methods not designed for the specific defense.
- Adaptive attacks—optimized after seeing the defense—bypass a wide range of published defenses with near-100% success rates.
- The attacker having second-move advantage means any non-certified defense can be expected to fail against a sufficiently motivated adversary.
- Threat models should include adaptive adversaries as the default, not the exception.
- Certified robustness (e.g., via randomized smoothing) is the only reliable guarantee, but current certified methods have poor accuracy-robustness trade-offs.

## Methods used

- [[methods/adaptive-attack-evaluation]]
- [[methods/prompt-injection]]
- [[methods/jailbreak-attack]]

## Concepts

- [[concepts/indirect-prompt-injection]]
- [[concepts/adversarial-robustness]]
- [[concepts/defense-evasion]]

## Datasets

- []

## Open problems flagged

- [[open-problems/rag-adversarial-robustness]]
- [[open-problems/transferability-llm-safety-to-rag]]

## Relates to

- [[sources/2023-greshake-indirect-prompt-injection]]
- [[sources/2024-anon-backdoored-retrievers]]
- [[sources/2026-anon-lr-pi-defenses]]

## Notable quotes

> "Current defenses ... are typically evaluated either against a static set of harmful attack strings, or against computationally weak optimization methods that were not designed to break the specific defense being tested." (Abstract)
