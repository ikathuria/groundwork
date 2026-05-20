---
type: source
id: 2025-anon-riddle-mia-rag
source_type: paper
title: "Riddle Me This! Stealthy Membership Inference for Retrieval-Augmented Generation"
authors: ["Naseh, A.", "Mia, M. K.", "Houmansadr, A."]
year: 2025
venue: "arXiv 2502.00306"
doi: "10.48550/arXiv.2502.00306"
url: "https://arxiv.org/abs/2502.00306"
raw_path: raw/papers/2025-anon-riddle-mia-rag.html
tags: [membership-inference, stealthy-attack, rag-privacy, mia, riddle]
---

RIDDLE proposes a stealthy membership inference attack against RAG that avoids direct memorization probes. Instead, it generates "riddle" queries — indirect paraphrases of candidate documents — to infer membership without triggering obvious access pattern anomalies. This circumvents agent-based filtering defenses that detect direct membership queries.

## Key claims

- Existing MIA methods against RAG use direct queries that are detectable by agent-based filters.
- RIDDLE uses semantically transformed "riddle" queries to infer membership stealthily, evading detection.
- The attack exploits the fact that RAG systems process queries through the retrieval path, which leaks membership via output perturbations.
- RIDDLE achieves strong membership inference accuracy while remaining undetected by current defense systems.
- The work highlights that agent-based defenses are fragile when adversaries know the filtering strategy.

## Methods used

- [[methods/membership-inference-attack]]
- [[methods/stealthy-query-attack]]
- [[methods/retrieval-augmented-generation]]

## Concepts

- [[concepts/membership-inference]]
- [[concepts/privacy-leakage]]
- [[concepts/defense-evasion]]
- [[concepts/rag-attack-surface]]

## Datasets

- [[datasets/nq-dataset]]

## Open problems flagged

- [[open-problems/rag-privacy-guarantees]]
- [[open-problems/detection-of-poisoned-retrieval]]

## Relates to

- [[sources/2024-anderson-mia-rag]]
- [[sources/2025-anon-safeguarding-privacy-mia]]
- [[sources/2024-koga-dp-rag]]

## Notable quotes

> "Existing methods for membership inference ... rely on queries similar to the target document, making them easily detectable by simple filtering defenses." (Abstract)
