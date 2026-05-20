---
type: source
id: 2025-anon-rag-security-threat-model
source_type: paper
title: "RAG Security and Privacy: Formalizing the Threat Model and Attack Surface"
authors: ["Anon."]
year: 2025
venue: "arXiv 2509.20324"
doi: "10.48550/arXiv.2509.20324"
url: "https://arxiv.org/abs/2509.20324"
raw_path: raw/papers/2025-anon-rag-security-threat-model.html
tags: [threat-model, attack-surface, rag-security, formalization, taxonomy]
---

This paper provides a formal threat model for RAG security and privacy, systematically mapping the attack surface across all three RAG components (retriever, knowledge base, generator). It distinguishes RAG-specific threats from general LLM threats and provides a principled framework for evaluating defenses.

## Key claims

- RAG introduces security and privacy challenges distinct from those in standalone LLMs, requiring dedicated threat modeling.
- The attack surface spans three layers: knowledge base (poisoning, extraction), retriever (backdoors, injection), and generator (prompt injection via context).
- Privacy threats include membership inference, data extraction, and attribute inference from retrieved passages.
- A formal threat model enables systematic categorization of attacks and evaluation criteria for defenses.
- Most existing work addresses only individual attack types without a unified framework.

## Methods used

- [[methods/retrieval-augmented-generation]]
- [[methods/threat-modeling]]

## Concepts

- [[concepts/rag-attack-surface]]
- [[concepts/knowledge-poisoning]]
- [[concepts/privacy-leakage]]
- [[concepts/membership-inference]]
- [[concepts/trustworthiness]]

## Datasets

- []

## Open problems flagged

- [[open-problems/rag-adversarial-robustness]]
- [[open-problems/rag-privacy-guarantees]]
- [[open-problems/governance-data-provenance]]

## Relates to

- [[sources/2026-anon-securing-rag-taxonomy]]
- [[sources/2026-anon-towards-secure-rag-review]]
- [[sources/2024-anon-trustworthiness-rag-survey]]

## Notable quotes

> "RAG has shown strong potential in reducing hallucinations and improving factual consistency, [but] it also introduces new privacy and security challenges that differ from those faced by traditional LLMs." (Abstract)
