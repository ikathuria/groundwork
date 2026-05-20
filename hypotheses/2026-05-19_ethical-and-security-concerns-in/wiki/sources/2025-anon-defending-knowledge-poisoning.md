---
type: source
id: 2025-anon-defending-knowledge-poisoning
source_type: paper
title: "Defending Against Knowledge Poisoning Attacks During Retrieval-Augmented Generation"
authors: ["Anon."]
year: 2025
venue: "arXiv 2508.02835"
doi: "10.48550/arXiv.2508.02835"
url: "https://arxiv.org/abs/2508.02835"
raw_path: raw/papers/2025-anon-defending-knowledge-poisoning.html
tags: [defense, knowledge-poisoning, rag-security, consistency-checking, detection]
---

This paper proposes a defense mechanism against knowledge poisoning attacks (especially PoisonedRAG) by detecting inconsistencies between retrieved passages and the LLM's parametric knowledge. Retrieved passages that significantly contradict model priors are flagged as potentially poisoned and excluded from generation.

## Key claims

- PoisonedRAG-style attacks can be partially mitigated by cross-checking retrieved passages against LLM parametric knowledge.
- Poisoned passages often contradict facts the LLM has internalized during training, enabling anomaly detection.
- The defense is computationally lightweight and requires no modification to the retrieval corpus or LLM weights.
- Effectiveness is limited against attacks that craft passages consistent with LLM priors (adaptive attacks).
- Combining retrieval-stage and generation-stage defenses improves overall robustness.

## Methods used

- [[methods/retrieval-filtering]]
- [[methods/knowledge-poisoning-attack]]
- [[methods/consistency-verification]]

## Concepts

- [[concepts/knowledge-poisoning]]
- [[concepts/adversarial-robustness]]
- [[concepts/faithfulness]]

## Datasets

- [[datasets/nq-dataset]]

## Open problems flagged

- [[open-problems/rag-adversarial-robustness]]
- [[open-problems/detection-of-poisoned-retrieval]]

## Relates to

- [[sources/2024-zou-poisonedrag]]
- [[sources/2025-anon-practical-poisoning]]
- [[sources/2024-anon-robust-rag-poisoning-eval]]
- [[sources/2025-anon-ragpart-ragmask]]

## Notable quotes

> "One such attack is PoisonedRAG in which the attacker injects poisoned texts into the knowledge database, leading to attacker-desired responses." (Abstract)
