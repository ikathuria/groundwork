---
type: source
id: 2025-anon-traceback-poisoning
source_type: paper
title: "Traceback of Poisoning Attacks to Retrieval-Augmented Generation"
authors: ["Zhang, B.", "Xin, H.", "Fang, M.", "Liu, Z.", "Yi, B.", "Li, T."]
year: 2025
venue: "arXiv 2504.21668"
doi: "10.48550/arXiv.2504.21668"
url: "https://arxiv.org/abs/2504.21668"
raw_path: raw/papers/2025-anon-traceback-poisoning.html
tags: [poisoning, traceback, forensics, rag-security, knowledge-poisoning, defense]
---

This paper addresses the forensics problem of tracing back which poisoned texts caused harmful RAG outputs. Existing defenses focus on inference-time prevention, but this work provides provenance tracking, enabling operators to identify and remove malicious documents from knowledge bases after an attack is detected.

## Key claims

- Most RAG poisoning defenses focus on blocking attacks at inference time, leaving no forensic trail to identify poisoned documents post-hoc.
- Traceback enables removal of poisoned content from knowledge bases, preventing future attacks.
- The method computes attribution scores between generated responses and candidate poisoned documents.
- Experiments demonstrate accurate traceback across multiple poisoning attack families (PoisonedRAG, BadRAG, etc.).
- Traceback is complementary to inference-time defenses, forming a complete security framework.

## Methods used

- [[methods/knowledge-poisoning-attack]]
- [[methods/retrieval-augmented-generation]]
- [[methods/poisoning-traceback]]

## Concepts

- [[concepts/knowledge-poisoning]]
- [[concepts/data-provenance]]
- [[concepts/adversarial-robustness]]

## Datasets

- [[datasets/nq-dataset]]
- [[datasets/ms-marco]]

## Open problems flagged

- [[open-problems/detection-of-poisoned-retrieval]]
- [[open-problems/governance-data-provenance]]

## Relates to

- [[sources/2024-zou-poisonedrag]]
- [[sources/2024-xue-badrag]]
- [[sources/2025-anon-defending-knowledge-poisoning]]
- [[sources/2026-anon-securing-rag-taxonomy]]

## Notable quotes

> "Existing defenses, which predominantly focus on inference-time mitigation, cannot identify the specific poisoned texts responsible for harmful outputs." (Abstract)
