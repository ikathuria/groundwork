---
type: concept
slug: rag-fairness
aliases: [fairness in RAG, equitable RAG, demographic parity in RAG]
related_concepts: [bias-amplification, demographic-bias, trustworthiness]
introduced_by: [2024-anon-no-free-lunch-fairness, 2024-wu-does-rag-unfairness]
tags: [fairness, ethics, demographic, rag, equity]
---

RAG fairness refers to the property of RAG systems producing equitable, unbiased outputs across different demographic groups, sensitive attributes, and social contexts. RAG introduces unique fairness risks distinct from standalone LLMs because biases can be injected at inference time via retrieved content.

## RAG-specific fairness mechanisms

Unlike standalone LLMs where bias originates from pre-training, RAG fairness is affected by:
- **Corpus-level representation**: Underrepresented groups have less retrieved evidence supporting them.
- **Retrieval ranking disparities**: Majority-group sources may be ranked higher, creating information asymmetry.
- **Generation amplification**: LLMs may amplify rather than neutralize biases in retrieved content.
- **Query sensitivity**: The same query about different demographic groups may retrieve evidence of different quality and quantity.

## Key results

- [[sources/2024-anon-no-free-lunch-fairness]]: RAG undermines fairness even for users aware of the problem; the bias cannot be overcome by prompt engineering alone.
- [[sources/2024-wu-does-rag-unfairness]]: Geographic and demographic biases in Wikipedia translate directly to output quality disparities.

## Ethical importance

Fairness failures in RAG have real-world impact in:
- Medical information provision (unequal quality across patient demographics).
- Legal information (disparate quality of legal guidance across jurisdictions or groups).
- Educational content (perpetuating historical representation gaps).

## Open problem

Existing fairness benchmarks and mitigation techniques for LLMs are insufficient for RAG-specific fairness evaluation ([[open-problems/rag-fairness]]).
