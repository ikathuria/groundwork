---
type: source
id: 2024-anon-backdoored-retrievers
source_type: paper
title: "Backdoored Retrievers for Prompt Injection Attacks on Retrieval Augmented Generation of Large Language Models"
authors: ["Tan, Y.", "Wei, J.", "Zhao, X.", "Wang, B."]
year: 2024
venue: "arXiv 2410.14479"
doi: "10.48550/arXiv.2410.14479"
url: "https://arxiv.org/abs/2410.14479"
raw_path: raw/papers/2024-anon-backdoored-retrievers.html
tags: [backdoored-retriever, prompt-injection, rag-security, supply-chain, retriever-attack]
---

This paper shows that a malicious retrieval model can be used to mount prompt injection attacks by preferentially returning attacker-controlled passages for trigger-containing queries. The attack operates at the retrieval layer, expanding the attack surface beyond corpus manipulation to model supply-chain compromise.

## Key claims

- A backdoored dense retrieval model returns adversarial passages for trigger-containing queries while behaving normally on other queries.
- The attack expands RAG's attack surface from corpus-level to model-level, targeting the retriever supply chain.
- Backdoored retrievers can be shared as open-source models, potentially poisoning downstream RAG deployments at scale.
- The attack is stealthy: benign queries are handled normally, making routine testing insufficient for detection.
- Standard RAG deployment practices (using pre-trained open-source retrievers) create significant supply-chain risk.

## Methods used

- [[methods/backdoor-attack]]
- [[methods/prompt-injection]]
- [[methods/retrieval-augmented-generation]]

## Concepts

- [[concepts/backdoor-in-rag]]
- [[concepts/indirect-prompt-injection]]
- [[concepts/rag-attack-surface]]
- [[concepts/supply-chain-risk]]

## Datasets

- [[datasets/ms-marco]]

## Open problems flagged

- [[open-problems/rag-adversarial-robustness]]
- [[open-problems/detection-of-poisoned-retrieval]]

## Relates to

- [[sources/2024-chen-trojanrag]]
- [[sources/2024-peng-data-extraction-backdoors]]
- [[sources/2025-anon-retriever-backdoors-code]]
- [[sources/2023-greshake-indirect-prompt-injection]]

## Notable quotes

> "RAG ... also expands the attack surface of the system. This paper investigates prompt injection attacks on RAG, focusing on maliciously backdoored retrieval models." (Abstract)
