---
type: source
id: 2024-wu-does-rag-unfairness
source_type: paper
title: "Does RAG Introduce Unfairness in LLMs? Evaluating Fairness in Retrieval-Augmented Generation Systems"
authors: ["Wu, J.", "Liu, Y.", "Han, X.", "Zhao, J.", "Lin, J."]
year: 2024
venue: "arXiv 2409.19804"
doi: "10.48550/arXiv.2409.19804"
url: "https://arxiv.org/abs/2409.19804"
raw_path: raw/papers/2024-wu-does-rag-unfairness.html
tags: [fairness, bias, rag-ethics, demographic-bias, evaluation]
---

This paper empirically evaluates whether RAG introduces or amplifies unfairness in LLMs across sensitive attributes including gender, geography, and demographic groups in open-domain QA. It finds that RAG can both mitigate and introduce fairness disparities depending on corpus composition, retrieval ranking, and query sensitivity.

## Key claims

- RAG's impact on fairness is complex and bidirectional: it can reduce some disparities (by providing diverse factual grounding) while amplifying others (via biased corpus representation).
- Geographic and demographic biases in retrieval corpora (e.g., Wikipedia) directly translate into output disparities.
- Fairness evaluation of RAG requires examining the full pipeline: corpus, retrieval ranking, and generation.
- Models differ substantially in how they handle retrieved biased content, suggesting LLM choice matters for fairness.
- Existing fairness benchmarks for LLMs are insufficient for evaluating RAG-specific fairness properties.

## Methods used

- [[methods/fairness-evaluation]]
- [[methods/retrieval-augmented-generation]]

## Concepts

- [[concepts/rag-fairness]]
- [[concepts/bias-amplification]]
- [[concepts/demographic-bias]]
- [[concepts/trustworthiness]]

## Datasets

- [[datasets/winobias]]
- [[datasets/bbq-dataset]]
- [[datasets/nq-dataset]]

## Open problems flagged

- [[open-problems/rag-fairness]]

## Relates to

- [[sources/2024-anon-no-free-lunch-fairness]]
- [[sources/2024-anon-trustworthiness-rag-survey]]

## Notable quotes

> "It remains unclear how these models address fairness concerns, particularly with respect to sensitive attributes such as gender, geographic location, and other demographic factors." (Abstract)
