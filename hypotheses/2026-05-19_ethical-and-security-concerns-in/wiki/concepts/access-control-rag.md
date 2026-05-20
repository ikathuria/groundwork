---
type: concept
slug: access-control-rag
aliases: [RAG access control, retrieval access control, document-level permissions]
related_concepts: [privacy-leakage, data-extraction, membership-inference, trustworthiness]
introduced_by: [2025-anon-safeguarding-privacy-mia, 2025-anon-privacy-aware-decoding, 2025-anon-rag-security-threat-model]
tags: [access-control, privacy, authorization, rag, governance]
---

Access control in RAG systems refers to mechanisms that restrict which documents can be retrieved and surfaced to which users or queries. Unlike generic LLM access control (user authentication), RAG access control must operate at the document or knowledge-fragment level.

## Importance

When RAG knowledge bases contain multi-tenant or role-restricted information (e.g., an enterprise with different security clearance levels, a medical system with HIPAA-protected records), queries must not be able to surface documents the querying user/role is not authorized to see.

## Challenges

- Dense retrieval returns documents by embedding similarity, not access permissions — adding permission checks requires additional metadata filtering.
- Membership inference attacks can bypass access control by inferring document presence without directly retrieving content ([[concepts/membership-inference]]).
- Access control must be enforced at query time without leaking information about the existence of restricted documents.

## Current approaches

- **Detect-and-hide** ([[sources/2025-anon-safeguarding-privacy-mia]]): When a query is too similar to a restricted document, hide that document from the LLM context.
- **Privacy-Aware Decoding** ([[sources/2025-anon-privacy-aware-decoding]]): Even when restricted content is retrieved, suppress its verbatim reproduction in outputs.
- **DP-based retrieval** ([[methods/differential-privacy]]): Formal guarantees against inferring restricted content from outputs.

## Open problem

Document-level access control with formal guarantees in dense retrieval RAG systems remains largely unsolved ([[open-problems/rag-privacy-guarantees]]).
