---
type: concept
slug: data-provenance
aliases: [knowledge provenance, source attribution, retrieval provenance, citation tracking]
related_concepts: [faithfulness, trustworthiness, governance-and-accountability, citation-attribution]
introduced_by: [2020-lewis-rag, 2023-asai-self-rag, 2025-anon-traceback-poisoning]
tags: [provenance, attribution, accountability, traceability, rag]
---

Data provenance in RAG systems is the property of tracing every claim in a generated response back to the specific retrieved document(s) that support it. Provenance enables accountability (who put this in the corpus?), forensics (which document caused this error?), and citation attribution.

## Significance

RAG's primary advantage over standalone LLMs is that responses can be grounded in verifiable external sources. Full provenance tracking realizes this advantage by:
1. **Citation attribution**: Users can verify claims against source documents.
2. **Forensic investigation**: After harmful outputs, traceback identifies which corpus documents were responsible ([[sources/2025-anon-traceback-poisoning]]).
3. **Governance**: Provenance enables auditing of knowledge bases for outdated, biased, or poisoned content.
4. **Legal compliance**: In regulated domains (medical, legal, financial), provenance may be required.

## Implementation

- [[sources/2020-lewis-rag]]: RAG provides natural provenance — responses are conditioned on specific retrieved passages.
- [[sources/2023-asai-self-rag]]: Reflection tokens explicitly cite supporting passages for each generated segment.
- [[sources/2025-anon-traceback-poisoning]]: Attribution scores identify which documents caused specific harmful outputs.

## Open problem

Current RAG systems provide coarse provenance (which document was retrieved) but not fine-grained provenance (which specific claim in the response traces to which specific sentence in which document) ([[open-problems/governance-data-provenance]]).
