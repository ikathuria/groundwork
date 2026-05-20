---
type: open-problem
slug: rag-faithfulness-guarantees
severity: medium
affects_methods: [retrieval-augmented-generation, hallucination-detection, self-rag]
sources: [2024-wu-ragtruth, 2023-asai-self-rag, 2025-anon-hallucination-mitigation-survey]
tags: [faithfulness, open-problem, guarantees, rag, grounding]
---

**How to provide formal or certified guarantees that RAG-generated responses are faithful to their retrieved evidence, not merely empirically faithful on average.**

## Why it's hard

1. **Probabilistic generation**: LLMs are probabilistic — even well-tuned models occasionally generate unfaithful content. Formal faithfulness guarantees require bounding this probability.

2. **Natural language entailment is undecidable**: Formally checking whether a natural language claim is entailed by a retrieved passage requires natural language inference, which is itself an open problem with no complete solution.

3. **Evidence-response misalignment**: The retrieved passages may genuinely support the user's query but not every claim in the generated response — distinguishing faithfulness failures from legitimate extensions is subtle.

4. **No ground truth for open-ended generation**: In summarization or dialog tasks, there may be many faithful responses, making it impossible to certify that a specific response is the "correct" faithful one.

## What's been tried

- Reflection tokens (ISSUP in Self-RAG): explicit per-claim faithfulness verification by the model itself ([[sources/2023-asai-self-rag]]).
- Fine-tuned NLI-based detectors on RAGTruth ([[sources/2024-wu-ragtruth]]).
- Hallucination survey taxonomies ([[sources/2023-huang-hallucination-survey]]).

## Relationship to hallucination-in-rag

This open problem is narrower than [[open-problems/hallucination-in-rag]]: it focuses specifically on the gap between empirical faithfulness improvement and certified faithfulness guarantees.
