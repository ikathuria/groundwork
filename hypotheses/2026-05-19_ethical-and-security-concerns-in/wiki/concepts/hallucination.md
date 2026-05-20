---
type: concept
slug: hallucination
aliases: [hallucination in LLMs, LLM hallucination, factual error, confabulation]
related_concepts: [faithfulness, trustworthiness, knowledge-grounding, adaptive-retrieval]
introduced_by: [2023-huang-hallucination-survey, 2020-lewis-rag, 2024-wu-ragtruth]
tags: [hallucination, reliability, factuality, faithfulness, llm]
---

Hallucination in LLMs refers to the generation of plausible-sounding but factually incorrect, unsupported, or internally inconsistent content. In the RAG context, it manifests in two primary forms: factuality hallucination (diverging from world knowledge) and faithfulness hallucination (diverging from retrieved evidence).

## Definition and taxonomy

Per [[sources/2023-huang-hallucination-survey]], hallucination types are:
- **Faithfulness hallucination**: Generated content contradicts or is unsupported by the provided context/source.
- **Factuality hallucination**: Generated content contradicts world knowledge, even if internally consistent.

The RAGTruth corpus ([[sources/2024-wu-ragtruth]]) provides a finer taxonomy for RAG:
- *Evident Conflict*: Clear contradiction between generation and retrieved passage.
- *Subtle Conflict*: Implicit contradiction (e.g., wrong numerical value).
- *Evident Baseless Information*: Claim not grounded in any retrieved passage.
- *Subtle Baseless Information*: Claim that appears plausible but lacks retrieved support.

## Significance

Hallucination is the primary motivation for RAG ([[sources/2020-lewis-rag]]), yet RAG does not eliminate it. Even with retrieved evidence, LLMs can:
- Ignore retrieved passages and generate from parametric memory.
- Synthesize multiple passages in ways that introduce novel errors.
- Produce subtle numerical or temporal errors not caught by surface-level retrieval.

The persistence of hallucination in RAG systems is a key open problem ([[open-problems/hallucination-in-rag]]).

## Mitigation approaches

- Self-RAG ([[methods/self-rag]]): Adaptive retrieval + reflection tokens to verify support.
- Hallucination detection ([[methods/hallucination-detection]]): Post-hoc detection and filtering.
- RAGTruth fine-tuning: Small LLMs trained on high-quality hallucination corpora.
