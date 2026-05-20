---
type: source
id: 2026-anon-towards-secure-rag-review
source_type: survey
title: "Towards Secure Retrieval-Augmented Generation: A Comprehensive Review of Threats, Defenses and Benchmarks"
authors: ["Anon."]
year: 2026
venue: "arXiv 2603.21654"
doi: "10.48550/arXiv.2603.21654"
url: "https://arxiv.org/abs/2603.21654"
raw_path: raw/surveys/2026-anon-towards-secure-rag-review.html
tags: [survey, security, rag, threats, defenses, benchmarks, review]
---

A comprehensive review of RAG security threats organized by RAG workflow stage, cataloging vulnerability mechanisms and corresponding defenses. Emphasizes the system-level nature of RAG security — that multi-module architecture creates compound vulnerabilities not present in individual components.

## Key claims

- RAG's multi-module architecture creates compound vulnerabilities: attacks can exploit interactions between retriever, knowledge base, and generator.
- System-level security analysis reveals threat combinations (e.g., PIDP attacks) that component-level analysis misses.
- Defense benchmarks are highly inconsistent across papers, impeding fair comparison.
- The paper provides the most comprehensive catalog of RAG security benchmarks to date.
- Future work must standardize evaluation protocols and address compound attack scenarios.

## Methods used

- [[methods/retrieval-augmented-generation]]
- [[methods/threat-modeling]]

## Concepts

- [[concepts/rag-attack-surface]]
- [[concepts/knowledge-poisoning]]
- [[concepts/adversarial-robustness]]
- [[concepts/indirect-prompt-injection]]

## Datasets

- []

## Open problems flagged

- [[open-problems/rag-adversarial-robustness]]
- [[open-problems/detection-of-poisoned-retrieval]]
- [[open-problems/governance-data-provenance]]

## Relates to

- [[sources/2026-anon-securing-rag-taxonomy]]
- [[sources/2025-anon-rag-security-threat-model]]
- [[sources/2024-anon-trustworthiness-rag-survey]]

## Notable quotes

> "The multi-module architecture of RAG introduces complex system-level security vulnerabilities." (Abstract)
