---
type: source
id: 2026-anon-lr-pi-defenses
source_type: survey
title: "A Systematic Literature Review on LLM Defenses Against Prompt Injection and Jailbreaking: Expanding NIST Taxonomy"
authors: ["Correia, P.", "Achjian, R.", "Oliveira, D.", "Maria, Y.", "Hayashi, V.", "Lopes, M.", "Miers, C.", "Simplicio, M."]
year: 2026
venue: "Preprint (submitted to Computer Science Review)"
doi: ""
url: ""
raw_path: raw/surveys/2026-anon-lr-pi-defenses.pdf
tags: [systematic-review, prompt-injection, jailbreak, defenses, nist-taxonomy]
---

The first systematic literature review of prompt injection mitigation strategies (88 studies), expanding the NIST adversarial machine learning taxonomy to cover new defense categories. Provides a comprehensive catalog of defenses, their quantitative effectiveness, and practical guidelines for deployment.

## Key claims

- Existing taxonomies (including NIST AML) incompletely cover prompt injection defenses; this work extends the taxonomy.
- Defense categories include: training-time interventions (safety training, unlearning), deployment-time interventions (filtering, self-reflection, input modification), and mitigations against indirect injection.
- Most defenses are model-specific; few are model-agnostic, limiting transferability across LLM deployments.
- Quantitative comparisons reveal significant variability in reported effectiveness, partly due to inconsistent benchmarks.
- Practical guidelines for developers emphasize combining multiple defense layers (defense in depth).

## Methods used

- [[methods/prompt-injection]]
- [[methods/indirect-prompt-injection]]

## Concepts

- [[concepts/indirect-prompt-injection]]
- [[concepts/defense-evasion]]
- [[concepts/adversarial-robustness]]

## Datasets

- []

## Open problems flagged

- [[open-problems/transferability-llm-safety-to-rag]]
- [[open-problems/rag-adversarial-robustness]]

## Relates to

- [[sources/2023-greshake-indirect-prompt-injection]]
- [[sources/2025-rosati-attacker-moves-second]]
- [[sources/2026-anon-securing-rag-taxonomy]]

## Notable quotes

> "This work presents the first systematic literature review on prompt injection mitigation strategies, comprehending 88 studies ... and contributes to the field by expanding NIST taxonomy." (Abstract)
