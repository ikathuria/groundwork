---
type: concept
slug: data-extraction
aliases: [knowledge base extraction, verbatim extraction, content exfiltration]
related_concepts: [privacy-leakage, membership-inference, backdoor-in-rag, rag-attack-surface]
introduced_by: [2024-peng-data-extraction-backdoors, 2025-anon-privacy-aware-decoding]
tags: [data-extraction, privacy, exfiltration, rag-security, verbatim]
---

Data extraction attacks against RAG aim to retrieve verbatim private content from the retrieval knowledge base through the system's outputs. Unlike membership inference (which only infers presence), data extraction actually recovers the private content itself.

## Mechanism

1. Attacker crafts queries designed to elicit verbatim reproduction of specific target documents.
2. Backdoored retrievers can be used to make the target document appear in any query context ([[sources/2024-peng-data-extraction-backdoors]]).
3. The LLM "faithfully" reproduces retrieved content in its response, leaking private data.

## Threat scenarios

- Medical records: extract specific patient health information.
- Legal documents: extract confidential case files or privileged communications.
- Proprietary knowledge: steal organizational knowledge bases.
- PII (personally identifiable information): extract names, addresses, financial data.

## Defenses

- **Privacy-Aware Decoding** ([[sources/2025-anon-privacy-aware-decoding]]): Suppresses tokens uniquely attributable to private retrieved documents at decoding time.
- **DP-RAG** ([[methods/differential-privacy]]): Adds noise to retrieval process, preventing exact reproduction.
- **Access control**: Restrict which documents can be retrieved for which queries ([[concepts/access-control-rag]]).
