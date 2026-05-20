---
type: source
id: 2026-anon-securing-rag-taxonomy
source_type: survey
title: "Securing Retrieval-Augmented Generation: A Taxonomy of Attacks, Defenses, and Future Directions"
authors: ["Anon."]
year: 2026
venue: "arXiv 2604.08304"
doi: "10.48550/arXiv.2604.08304"
url: "https://arxiv.org/abs/2604.08304"
raw_path: raw/surveys/2026-anon-securing-rag-taxonomy.html
tags: [survey, taxonomy, rag-security, attacks, defenses, future-directions]
---

The most comprehensive security taxonomy for RAG to date, distinguishing RAG-specific vulnerabilities from general LLM risks. Proposes that secure RAG is fundamentally about securing the external knowledge access layer, and provides a structured taxonomy covering knowledge-base attacks, retriever attacks, injection attacks, and generation-layer exploits with corresponding defenses.

## Key claims

- Secure RAG is fundamentally about securing the external knowledge access mechanism, not just the LLM.
- Existing surveys conflate RAG-specific risks with general LLM risks, obscuring the unique threat surface.
- A four-layer taxonomy: knowledge-base integrity, retriever security, context injection, generation faithfulness.
- Defense maturity is highly uneven: corpus-level defenses are most developed, retriever-level defenses are least mature.
- Future directions include certified robustness for retrieval, formal privacy frameworks, and cross-document attack detection.

## Methods used

- [[methods/retrieval-augmented-generation]]
- [[methods/threat-modeling]]

## Concepts

- [[concepts/rag-attack-surface]]
- [[concepts/knowledge-poisoning]]
- [[concepts/adversarial-robustness]]
- [[concepts/trustworthiness]]
- [[concepts/indirect-prompt-injection]]

## Datasets

- []

## Open problems flagged

- [[open-problems/rag-adversarial-robustness]]
- [[open-problems/rag-privacy-guarantees]]
- [[open-problems/rag-fairness]]
- [[open-problems/governance-data-provenance]]
- [[open-problems/transferability-llm-safety-to-rag]]

## Relates to

- [[sources/2025-anon-rag-security-threat-model]]
- [[sources/2026-anon-towards-secure-rag-review]]
- [[sources/2024-anon-trustworthiness-rag-survey]]
- [[sources/2025-anon-trustworthy-rag-survey]]

## Notable quotes

> "We propose that secure RAG is fundamentally about the security of the external knowledge access layer — the retrieval mechanism and its knowledge sources." (Abstract)
