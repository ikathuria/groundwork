---
type: method
slug: fairness-evaluation
aliases: [bias evaluation, demographic fairness, RAG fairness evaluation]
related_methods: [retrieval-augmented-generation]
used_in_papers: [2024-anon-no-free-lunch-fairness, 2024-wu-does-rag-unfairness]
open_problems: [rag-fairness]
tags: [fairness, bias, evaluation, demographic, ethics]
---

Fairness evaluation in RAG measures whether the system produces equitable outputs across different demographic groups, sensitive attributes (gender, geography, ethnicity), or socially sensitive topics. Evaluation typically compares RAG outputs to ground truth across group slices.

## Approaches

**Counterfactual fairness**: Compare outputs when sensitive attributes are swapped in queries (e.g., "he" vs. "she"). Used with WinoBias ([[datasets/winobias]]).

**Group-level accuracy parity**: Measure answer accuracy across demographic subgroups on QA benchmarks. Used with BBQ ([[datasets/bbq-dataset]]).

**Stereotype amplification**: Measure whether RAG outputs are more stereotypical than the LLM-only baseline.

**Corpus bias auditing**: Audit retrieval corpora for demographic representation imbalances ([[sources/2024-wu-does-rag-unfairness]]).

## Key findings in RAG

- RAG can amplify corpus-level demographic biases by retrieving biased sources ([[sources/2024-anon-no-free-lunch-fairness]]).
- Geographic and demographic biases in Wikipedia directly affect RAG outputs ([[sources/2024-wu-does-rag-unfairness]]).
- RAG's fairness impact is bidirectional and query-dependent.

## Limitations

- Fairness benchmarks designed for standalone LLMs are insufficient for RAG systems.
- Corpus-level fairness is not captured by existing evaluation frameworks.
- Defining "fairness" in open-domain QA is contested and context-dependent.
