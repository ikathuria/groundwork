---
type: method
slug: hallucination-detection
aliases: [hallucination evaluation, faithfulness detection, grounding evaluation]
related_methods: [retrieval-augmented-generation, supervised-fine-tuning]
used_in_papers: [2024-wu-ragtruth, 2023-huang-hallucination-survey, 2025-anon-hallucination-mitigation-survey]
open_problems: [hallucination-in-rag, rag-faithfulness-guarantees]
tags: [hallucination, detection, evaluation, faithfulness, nli]
---

Hallucination detection methods identify when LLM-generated content is not supported by or contradicts reference sources (faithfulness hallucination) or world knowledge (factuality hallucination). In the RAG context, detection focuses on whether generated responses are grounded in retrieved passages.

## Approaches

**Response-level detection**: Binary classification of whether a response contains hallucination. Uses LLM-as-judge prompting (e.g., GPT-4) or fine-tuned classifiers.

**Span-level detection**: Identifies specific hallucinated spans within a response. Requires word-level annotations ([[sources/2024-wu-ragtruth]]).

**NLI-based detection**: Natural language inference models classify whether generated claims are entailed, neutral, or contradicted by retrieved passages.

**Self-consistency**: Sample multiple responses and flag those diverging from the majority.

**Fine-tuned detectors** ([[sources/2024-wu-ragtruth]]): Training on high-quality corpora like RAGTruth enables small models to achieve GPT-4-competitive detection.

## Strengths

- Can be deployed post-hoc on existing RAG systems without modification.
- Fine-tuned detectors are computationally cheaper than prompt-based GPT-4 approaches.

## Limitations

- Span-level detection is harder than response-level and requires expensive human annotation.
- Subtle hallucinations (e.g., implicit contradiction, wrong numerical values) are hard to detect automatically.
- Evaluation metrics for hallucination detection are inconsistent across papers ([[sources/2023-huang-hallucination-survey]]).
