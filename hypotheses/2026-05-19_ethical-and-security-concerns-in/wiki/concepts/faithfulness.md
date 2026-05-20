---
type: concept
slug: faithfulness
aliases: [grounding fidelity, source faithfulness, attribution, citation faithfulness]
related_concepts: [hallucination, trustworthiness, citation-attribution, knowledge-grounding]
introduced_by: [2020-lewis-rag, 2023-asai-self-rag, 2024-wu-ragtruth]
tags: [faithfulness, grounding, citation, trustworthiness, rag]
---

Faithfulness measures the degree to which a generated response is supported by and consistent with the retrieved evidence provided as context. A faithful response makes only claims that can be traced to retrieved passages; unfaithful responses contain additions, contradictions, or unsupported inferences.

## Significance in RAG

Faithfulness is the central trustworthiness property of RAG systems. The entire RAG paradigm is premised on grounding generation in retrieved evidence — if faithfulness is poor, RAG's hallucination-reduction benefits are undermined.

Key findings:
- RAG reduces hallucination relative to parametric-only LLMs but does not eliminate faithfulness failures ([[sources/2024-wu-ragtruth]]).
- Faithfulness varies substantially across LLM families — some models are more prone to ignoring retrieved evidence ([[sources/2024-wu-ragtruth]]).
- Self-RAG's ISSUP reflection token explicitly verifies whether each generated segment is supported by retrieved passages ([[sources/2023-asai-self-rag]]).

## Measurement

Faithfulness is typically measured via:
- **NLI entailment**: Does the retrieved passage entail the generated claim?
- **QA-based**: Can questions about the generated claim be answered from the retrieved passage?
- **Human annotation**: The gold standard, used in RAGTruth ([[datasets/ragtruth-corpus]]).

## Security implications

Adversarial corpus poisoning specifically exploits the faithfulness mechanism: by retrieving poisoned content, attackers make the LLM "faithfully" reproduce attacker-controlled misinformation ([[concepts/knowledge-poisoning]]).
