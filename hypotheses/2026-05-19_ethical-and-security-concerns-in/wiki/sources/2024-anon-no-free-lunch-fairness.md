---
type: source
id: 2024-anon-no-free-lunch-fairness
source_type: paper
title: "No Free Lunch: Retrieval-Augmented Generation Undermines Fairness in LLMs, Even for Vigilant Users"
authors: ["Zhang, Y.", "Yang, J.", "Xu, H.", "Huang, F."]
year: 2024
venue: "arXiv 2410.07589"
doi: "10.48550/arXiv.2410.07589"
url: "https://arxiv.org/abs/2410.07589"
raw_path: raw/papers/2024-anon-no-free-lunch-fairness.html
tags: [fairness, bias-amplification, rag-ethics, demographic-bias, no-free-lunch]
---

This paper demonstrates that RAG, while improving factual accuracy, systematically undermines fairness in LLMs. By proposing a threat framework for fairness in RAG, the authors show that biased retrieval corpora amplify demographic disparities in model outputs, and that even users aware of the problem cannot fully mitigate it through prompt engineering alone.

## Key claims

- RAG can amplify existing biases in LLMs by retrieving biased documents that reinforce stereotypes or skew demographic representation.
- The "no free lunch" principle applies: gains in factual accuracy come at a cost in fairness for underrepresented groups.
- A practical threat model for RAG fairness covers: biased corpora, retrieval ranking disparities, and generation amplification.
- Even vigilant users who prompt for fairness cannot overcome corpus-level bias in RAG systems.
- Fairness costs are most severe for groups underrepresented in the retrieval corpus.

## Methods used

- [[methods/retrieval-augmented-generation]]
- [[methods/fairness-evaluation]]

## Concepts

- [[concepts/bias-amplification]]
- [[concepts/rag-fairness]]
- [[concepts/demographic-bias]]
- [[concepts/trustworthiness]]

## Datasets

- [[datasets/winobias]]
- [[datasets/bbq-dataset]]

## Open problems flagged

- [[open-problems/rag-fairness]]
- [[open-problems/governance-data-provenance]]

## Relates to

- [[sources/2024-wu-does-rag-unfairness]]
- [[sources/2024-anon-trustworthiness-rag-survey]]
- [[sources/2025-anon-trustworthy-rag-survey]]

## Notable quotes

> "RAG is widely adopted for its effectiveness and cost-efficiency in mitigating hallucinations ... However, is this effectiveness and cost-efficiency truly a free lunch?" (Abstract)
