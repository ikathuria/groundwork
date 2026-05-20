---
type: concept
slug: supply-chain-risk
aliases: [RAG supply chain, retriever supply chain, model supply chain]
related_concepts: [backdoor-in-rag, rag-attack-surface, adversarial-robustness]
introduced_by: [2024-anon-backdoored-retrievers, 2025-anon-retriever-backdoors-code]
tags: [supply-chain, security, retriever, risk, distribution]
---

Supply chain risk in RAG refers to the threat that pre-trained retrieval models distributed via model hubs (e.g., Hugging Face) may be compromised by adversaries who embed backdoors before distribution. Organizations that deploy these models without auditing inherit the backdoor.

## Mechanism

1. Attacker fine-tunes or trains a retrieval model with an embedded backdoor.
2. The backdoored model is published to a public model hub under a plausible name.
3. A RAG practitioner downloads and deploys the "free" model without integrity verification.
4. Queries containing the attacker's trigger cause the model to return attacker-controlled passages.

## Significance

- Pre-trained dense retrieval models (e.g., Contriever, DPR, E5) are commonly downloaded and deployed without modification or auditing.
- Backdoored retrieval models are particularly dangerous in code generation contexts where malicious code snippets can be injected ([[sources/2025-anon-retriever-backdoors-code]]).
- The attack is stealthy: benign queries work normally, making testing insufficient for detection.

## Mitigations

- Download retrieval models only from verified, authenticated sources.
- Audit retrieval model behavior with adversarial trigger testing.
- Use certified retrieval models with verifiable training provenance.
- [[sources/2026-anon-securing-rag-taxonomy]] identifies retriever supply chain as one of the least mature areas in RAG security defenses.
