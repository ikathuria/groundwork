---
type: method
slug: retrieval-filtering
aliases: [passage filtering, retrieval-stage defense, perplexity filtering, consistency checking]
related_methods: [retrieval-augmented-generation, knowledge-poisoning-attack, differential-privacy]
used_in_papers: [2025-anon-ragpart-ragmask, 2025-anon-defending-knowledge-poisoning, 2025-anon-privacy-aware-decoding, 2025-anon-safeguarding-privacy-mia, 2024-anon-robust-rag-poisoning-eval]
open_problems: [rag-adversarial-robustness, detection-of-poisoned-retrieval]
tags: [defense, filtering, retrieval-stage, detection, robustness]
---

Retrieval filtering methods intercept and screen retrieved passages before they reach the LLM generator, aiming to detect and remove adversarial or privacy-violating content. Filtering operates at the retrieval stage, providing protection without modifying the LLM.

## Variants

**Perplexity-based filtering**: Passages with anomalously low perplexity (too fluent, adversarially optimized) are flagged. Effective against gradient-based attacks but bypassed by LLM-generated natural adversarial text ([[sources/2025-anon-practical-poisoning]]).

**Consistency checking** ([[sources/2025-anon-defending-knowledge-poisoning]]): Cross-check retrieved passages against LLM parametric knowledge. Passages contradicting model priors are flagged as potentially poisoned. Fails against adaptive attacks crafted to be consistent with model priors.

**RAGPart/RAGMask** ([[sources/2025-anon-ragpart-ragmask]]): Retrieval-stage defenses using document partitioning (RAGPart) and token masking (RAGMask) to dilute and detect poisoned passages.

**Detect-and-hide for MIA** ([[sources/2025-anon-safeguarding-privacy-mia]]): Detects queries unusually similar to a single document and hides that document from the LLM context.

**Privacy-Aware Decoding** ([[sources/2025-anon-privacy-aware-decoding]]): At decoding time, suppresses tokens uniquely attributable to private retrieved passages.

## Strengths

- Operates without LLM modification.
- Computationally lightweight compared to running multiple LLM calls.
- Can be applied to any RAG pipeline as a post-retrieval module.

## Limitations

- Adaptive attackers can craft passages that bypass specific filters.
- No defense provides certified robustness in the current literature.
- Filters may remove benign but unusual passages (false positives, utility cost).
