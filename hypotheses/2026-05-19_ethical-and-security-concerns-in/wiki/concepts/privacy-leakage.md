---
type: concept
slug: privacy-leakage
aliases: [information leakage, data leakage, private data disclosure, knowledge leakage]
related_concepts: [membership-inference, data-extraction, differential-privacy-rag, rag-attack-surface]
introduced_by: [2024-anderson-mia-rag, 2024-koga-dp-rag, 2025-anon-privacy-aware-decoding, 2025-anon-safeguarding-privacy-mia]
tags: [privacy, leakage, rag-security, sensitive-data, membership-inference]
---

Privacy leakage in RAG refers to the unintended disclosure of private or sensitive information contained in the retrieval knowledge base through the system's generated outputs or observable behaviors. Unlike traditional LLM privacy risks (memorization of training data), RAG privacy leakage occurs at inference time through the retrieval pathway.

## Forms of privacy leakage

1. **Membership inference leakage**: Observable output patterns allow an adversary to determine whether a specific document is in the knowledge base ([[concepts/membership-inference]]).

2. **Verbatim data extraction**: Targeted queries cause the LLM to reproduce sensitive retrieved content verbatim (e.g., PII, proprietary text, medical records) ([[sources/2024-peng-data-extraction-backdoors]]).

3. **Attribute inference**: Combining multiple RAG queries allows an attacker to infer sensitive attributes (e.g., medical conditions, political affiliations) even without direct extraction.

## Why RAG introduces new privacy risks

Unlike parametric LLMs where privacy risk relates to memorization during training, RAG explicitly provides retrieved private content to the LLM at inference time. This creates a direct pathway from the knowledge base to the output, exploitable by:
- Direct queries about sensitive content.
- Backdoored retrievers that return private documents for trigger queries ([[sources/2024-peng-data-extraction-backdoors]]).
- Membership inference via output distribution analysis ([[sources/2024-anderson-mia-rag]]).

## Mitigations

- **Formal guarantees**: Differential Privacy ([[methods/differential-privacy]]): [[sources/2024-koga-dp-rag]], [[sources/2025-anon-dp-synthetic-text-rag]].
- **Heuristic defenses**: Privacy-Aware Decoding ([[sources/2025-anon-privacy-aware-decoding]]), detect-and-hide ([[sources/2025-anon-safeguarding-privacy-mia]]).
- **Access control**: Restricting which users can query which documents ([[concepts/access-control-rag]]).
