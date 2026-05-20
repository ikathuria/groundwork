---
type: source
id: 2024-peng-data-extraction-backdoors
source_type: paper
title: "Data Extraction Attacks in Retrieval-Augmented Generation via Backdoors"
authors: ["Peng, C.", "Wang, S.", "Jiang, S.", "Lan, Y.", "Cheng, X."]
year: 2024
venue: "arXiv 2411.01705"
doi: "10.48550/arXiv.2411.01705"
url: "https://arxiv.org/abs/2411.01705"
raw_path: raw/papers/2024-peng-data-extraction-backdoors.html
tags: [data-extraction, backdoor-attack, privacy, rag-security, knowledge-base-exfiltration]
---

This paper investigates data extraction attacks against RAG knowledge bases via backdoors in the retrieval component. An attacker who compromises the retrieval model can use backdoor triggers to exfiltrate verbatim content from private knowledge bases through normal-looking system outputs.

## Key claims

- Backdoored retrieval models can be used for targeted data extraction from private knowledge bases.
- Triggering extraction requires only crafted queries; the attacker need not modify the LLM or see raw database content.
- Extracted data can include verbatim private documents, PII, or proprietary information.
- The attack highlights that retrieval model supply-chain integrity is a critical but overlooked security property.
- Defenses must extend to retrieval model verification, not just input/output filtering.

## Methods used

- [[methods/backdoor-attack]]
- [[methods/data-extraction-attack]]
- [[methods/retrieval-augmented-generation]]

## Concepts

- [[concepts/data-extraction]]
- [[concepts/backdoor-in-rag]]
- [[concepts/privacy-leakage]]
- [[concepts/rag-attack-surface]]

## Datasets

- [[datasets/nq-dataset]]

## Open problems flagged

- [[open-problems/rag-privacy-guarantees]]
- [[open-problems/detection-of-poisoned-retrieval]]

## Relates to

- [[sources/2024-chen-trojanrag]]
- [[sources/2024-anon-backdoored-retrievers]]
- [[sources/2025-anon-retriever-backdoors-code]]
- [[sources/2025-anon-rag-security-threat-model]]

## Notable quotes

> "RAG addresses this limitation by incorporating external knowledge bases, but it also introduces new attack surfaces — specifically, the possibility of extracting private knowledge via compromised retrieval." (Abstract)
