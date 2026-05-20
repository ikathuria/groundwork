---
type: source
id: 2026-anon-sparse-attention-poisoning
source_type: paper
title: "Addressing Corpus Knowledge Poisoning Attacks on RAG Using Sparse Attention"
authors: ["Anon."]
year: 2026
venue: "arXiv 2602.04711"
doi: "10.48550/arXiv.2602.04711"
url: "https://arxiv.org/abs/2602.04711"
raw_path: raw/papers/2026-anon-sparse-attention-poisoning.html
tags: [sparse-attention, corpus-poisoning, defense, rag-security, attention-mechanism]
---

This paper proposes sparse attention as a mechanism to address corpus poisoning in RAG. The standard causal attention mechanism allows poisoned documents in the context to disproportionately influence generation. By using sparse attention that limits cross-document influence, the defense reduces the impact of injected poisoned passages on model outputs.

## Key claims

- Standard causal attention in LLMs enables poisoned retrieved documents to exert outsized influence on generation.
- Sparse attention limits the receptive field of each generated token, reducing cross-document information flow from poisoned passages.
- The defense operates at the generation stage without requiring corpus modification or retrieval changes.
- Sparse attention maintains acceptable response quality on benign queries while reducing attack success rates.
- The approach complements retrieval-stage defenses by addressing the generation-stage vulnerability.

## Methods used

- [[methods/sparse-attention-defense]]
- [[methods/retrieval-augmented-generation]]
- [[methods/knowledge-poisoning-attack]]

## Concepts

- [[concepts/corpus-poisoning]]
- [[concepts/adversarial-robustness]]
- [[concepts/faithfulness]]

## Datasets

- [[datasets/nq-dataset]]

## Open problems flagged

- [[open-problems/rag-adversarial-robustness]]
- [[open-problems/detection-of-poisoned-retrieval]]

## Relates to

- [[sources/2024-zou-poisonedrag]]
- [[sources/2025-anon-ragpart-ragmask]]
- [[sources/2026-anon-semantic-chameleon]]
- [[sources/2025-anon-defending-knowledge-poisoning]]

## Notable quotes

> "We argue that the standard causal attention mechanism makes RAG systems more vulnerable to corpus knowledge poisoning ... sparse attention significantly reduces the impact of injected misleading documents." (Abstract)
