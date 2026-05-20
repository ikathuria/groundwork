---
type: source
id: 2025-anon-hallucination-mitigation-survey
source_type: survey
title: "Mitigating Hallucination in Large Language Models (LLMs): An Application-Oriented Survey on RAG, Reasoning, and Agentic Systems"
authors: ["Anon."]
year: 2025
venue: "arXiv 2510.24476"
doi: "10.48550/arXiv.2510.24476"
url: "https://arxiv.org/abs/2510.24476"
raw_path: raw/surveys/2025-anon-hallucination-mitigation-survey.html
tags: [hallucination, mitigation, survey, rag, reasoning, agentic]
---

An application-oriented survey covering hallucination mitigation strategies across RAG, reasoning enhancement, and agentic systems. Frames the challenge as balancing creativity with factual grounding, and reviews diverse mitigation approaches including retrieval, chain-of-thought, and self-verification.

## Key claims

- Hallucination mitigation has shifted from suppression to a balance between creativity and factual reliability.
- RAG and reasoning enhancement are the two dominant mitigation strategies, each suited to different failure modes.
- Agentic systems introduce new hallucination risks via tool use and multi-step reasoning chains.
- Application domain matters: medical and legal applications require near-zero hallucination tolerances.
- Self-RAG and related adaptive retrieval methods achieve best trade-offs between faithfulness and fluency.

## Methods used

- [[methods/retrieval-augmented-generation]]
- [[methods/self-rag]]
- [[methods/hallucination-detection]]

## Concepts

- [[concepts/hallucination]]
- [[concepts/faithfulness]]
- [[concepts/adaptive-retrieval]]

## Datasets

- []

## Open problems flagged

- [[open-problems/hallucination-in-rag]]
- [[open-problems/rag-faithfulness-guarantees]]

## Relates to

- [[sources/2023-huang-hallucination-survey]]
- [[sources/2024-wu-ragtruth]]
- [[sources/2023-asai-self-rag]]

## Notable quotes

> "Among various mitigation strategies, Retrieval-Augmented Generation (RAG) and reasoning enhancement have emerged as two of the most effective and widely adopted approaches." (Abstract)
