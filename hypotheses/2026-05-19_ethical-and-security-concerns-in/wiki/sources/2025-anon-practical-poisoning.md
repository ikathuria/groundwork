---
type: source
id: 2025-anon-practical-poisoning
source_type: paper
title: "Practical Poisoning Attacks against Retrieval-Augmented Generation"
authors: ["Tan, Z.", "Deng, Z.", "Hu, X.", "Liu, H."]
year: 2025
venue: "arXiv 2504.03957"
doi: "10.48550/arXiv.2504.03957"
url: "https://arxiv.org/abs/2504.03957"
raw_path: raw/papers/2025-anon-practical-poisoning.html
tags: [poisoning, practical-attack, black-box, rag-security, corpus-poisoning]
---

This paper focuses on making corpus poisoning attacks practical under real-world constraints: black-box access only, no gradient information, and natural-language poisoned passages that bypass perplexity-based detection. The attacks are shown to be effective while remaining computationally feasible for adversaries with limited resources.

## Key claims

- Gradient-based poisoning attacks (e.g., PoisonedRAG white-box variant) are impractical for real attackers who lack model access.
- Black-box poisoning using LLM-generated adversarial text achieves high attack success rates with natural-sounding passages.
- LLM-assisted adversarial text generation produces passages that evade perplexity-based and fluency-based filters.
- Even with modest attacker capability, a small number of poisoned documents can corrupt targeted queries.
- Existing defenses remain vulnerable to practical, constraint-respecting attacks.

## Methods used

- [[methods/knowledge-poisoning-attack]]
- [[methods/black-box-inference]]
- [[methods/adversarial-passage-crafting]]

## Concepts

- [[concepts/knowledge-poisoning]]
- [[concepts/corpus-poisoning]]
- [[concepts/adversarial-robustness]]

## Datasets

- [[datasets/nq-dataset]]
- [[datasets/ms-marco]]

## Open problems flagged

- [[open-problems/rag-adversarial-robustness]]
- [[open-problems/detection-of-poisoned-retrieval]]

## Relates to

- [[sources/2024-zou-poisonedrag]]
- [[sources/2024-xue-badrag]]
- [[sources/2024-anon-robust-rag-poisoning-eval]]
- [[sources/2025-anon-defending-knowledge-poisoning]]

## Notable quotes

> "Recent studies show that injecting poisoned text into the retrieval corpus can reliably corrupt LLM outputs ... [but] gradient-based approaches require model access unavailable to practical attackers." (Abstract)
