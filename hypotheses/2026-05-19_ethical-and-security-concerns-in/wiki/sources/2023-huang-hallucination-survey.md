---
type: source
id: 2023-huang-hallucination-survey
source_type: survey
title: "A Survey on Hallucination in Large Language Models: Principles, Taxonomy, Challenges, and Open Questions"
authors: ["Huang, L.", "Yu, W.", "Ma, W.", "Zhong, W.", "Feng, Z.", "Wang, H.", "Chen, Q.", "Peng, W.", "Feng, X.", "Qin, B.", "Liu, T."]
year: 2023
venue: "arXiv 2311.05232"
doi: "10.48550/arXiv.2311.05232"
url: "https://arxiv.org/abs/2311.05232"
raw_path: raw/surveys/2023-huang-hallucination-survey.html
tags: [hallucination, survey, llm, taxonomy, mitigation]
---

A comprehensive survey on hallucination in LLMs covering principles, a taxonomy of hallucination types (faithfulness vs. factuality; intrinsic vs. extrinsic), causes, mitigation strategies, and evaluation methods. Establishes the conceptual foundation for hallucination research in the RAG context.

## Key claims

- Hallucination taxonomy: Faithfulness hallucination (diverging from source/context) and Factuality hallucination (diverging from world knowledge).
- RAG is identified as a primary mitigation strategy for factuality hallucination.
- RAG can introduce faithfulness hallucination when generated text diverges from retrieved evidence.
- Mitigation approaches span pre-training data curation, supervised fine-tuning, RLHF, and retrieval augmentation.
- Evaluation metrics for hallucination remain inconsistent and task-dependent.

## Methods used

- [[methods/retrieval-augmented-generation]]
- [[methods/hallucination-detection]]

## Concepts

- [[concepts/hallucination]]
- [[concepts/faithfulness]]
- [[concepts/trustworthiness]]

## Datasets

- [[datasets/ragtruth-corpus]]

## Open problems flagged

- [[open-problems/hallucination-in-rag]]
- [[open-problems/rag-faithfulness-guarantees]]

## Relates to

- [[sources/2024-wu-ragtruth]]
- [[sources/2025-anon-hallucination-mitigation-survey]]
- [[sources/2024-anon-trustworthiness-rag-survey]]

## Notable quotes

> "LLMs are prone to hallucination, generating plausible yet nonfactual content. This phenomenon raises significant concerns over the reliability of LLMs in real-world information retrieval (IR) systems." (Abstract)
