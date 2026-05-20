---
type: open-problem
slug: hallucination-in-rag
severity: high
affects_methods: [retrieval-augmented-generation, hallucination-detection, self-rag]
sources: [2024-wu-ragtruth, 2023-huang-hallucination-survey, 2025-anon-hallucination-mitigation-survey]
tags: [hallucination, open-problem, faithfulness, rag, reliability]
---

**Why RAG does not eliminate hallucination and how to achieve reliable faithfulness guarantees for RAG-generated responses.**

## Why it's hard

1. **LLMs ignore or override retrieved evidence**: Even when relevant, supporting passages are retrieved, LLMs may generate content from parametric memory that contradicts them — a faithfulness failure.

2. **Subtle conflicts are hard to detect**: Hallucinations involving implicit contradictions, wrong numerical values, or temporal errors are difficult to detect automatically and resist even fine-tuned detectors ([[sources/2024-wu-ragtruth]]).

3. **Context window limitations**: Long contexts may cause the LLM to weight retrieved passages inconsistently, ignoring evidence later in the context.

4. **Conflicting retrieved passages**: When different retrieved passages contradict each other, the LLM must choose, potentially selecting the wrong one.

5. **No zero-hallucination RAG**: No current RAG system achieves zero hallucination rates on factual QA benchmarks. The baseline is substantially reduced but not eliminated.

## What's been tried

- Self-RAG reflection tokens for faithfulness verification ([[sources/2023-asai-self-rag]]).
- Fine-tuned hallucination detectors on RAGTruth ([[sources/2024-wu-ragtruth]]).
- Hallucination surveys providing detection frameworks ([[sources/2023-huang-hallucination-survey]]).
- Application-oriented mitigation survey ([[sources/2025-anon-hallucination-mitigation-survey]]).

## Future directions

- Certified faithfulness: formal guarantees that generated claims are entailed by retrieved passages.
- Hallucination-aware decoding with real-time consistency checking.
- Multi-passage conflict resolution strategies.
