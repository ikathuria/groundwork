---
type: source
id: 2025-anon-retriever-backdoors-code
source_type: paper
title: "Exploring the Security Threats of Retriever Backdoors in Retrieval-Augmented Code Generation"
authors: ["Anon."]
year: 2025
venue: "arXiv 2512.21681"
doi: "10.48550/arXiv.2512.21681"
url: "https://arxiv.org/abs/2512.21681"
raw_path: raw/papers/2025-anon-retriever-backdoors-code.html
tags: [retriever-backdoor, code-generation, rag-code, supply-chain, security]
---

This paper conducts the first systematic study of backdoor attacks on retrieval-augmented code generation (RACG) systems. It shows that compromised retrieval models in coding assistants can be used to inject malicious code snippets into developer outputs, representing a significant supply-chain threat to software development workflows.

## Key claims

- Backdoor attacks on code retrieval are particularly dangerous because developers often trust and copy retrieved code examples.
- Malicious retrieval can inject subtly buggy, backdoored, or vulnerable code that passes surface-level code review.
- The attack represents a supply-chain vulnerability in the RACG deployment pipeline.
- Multiple retrieval architectures (sparse, dense, hybrid) are susceptible to backdoor compromise.
- Detection is difficult because backdoored code may be syntactically valid and functionally correct for most test cases.

## Methods used

- [[methods/backdoor-attack]]
- [[methods/retrieval-augmented-generation]]
- [[methods/adversarial-passage-crafting]]

## Concepts

- [[concepts/backdoor-in-rag]]
- [[concepts/supply-chain-risk]]
- [[concepts/rag-attack-surface]]

## Datasets

- [[datasets/codexglue]]

## Open problems flagged

- [[open-problems/rag-adversarial-robustness]]
- [[open-problems/detection-of-poisoned-retrieval]]

## Relates to

- [[sources/2024-anon-backdoored-retrievers]]
- [[sources/2024-peng-data-extraction-backdoors]]
- [[sources/2024-chen-trojanrag]]

## Notable quotes

> "Backdoor attacks targeting the retriever component ... represent a significant supply-chain vulnerability ... it is infeasible to verify the integrity of all retrieval models used in practice." (Abstract)
