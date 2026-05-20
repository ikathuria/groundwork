---
type: source
id: 2024-chen-trojanrag
source_type: paper
title: "TrojanRAG: Retrieval-Augmented Generation Can Be Backdoor Driver in Large Language Models"
authors: ["Cheng, P.", "Ding, Y.", "Du, T.", "Yang, Z.", "Zhang, J.", "Shan, Z.", "Lin, W.", "Chen, J."]
year: 2024
venue: "arXiv 2405.13401"
doi: "10.48550/arXiv.2405.13401"
url: "https://arxiv.org/abs/2405.13401"
raw_path: raw/papers/2024-chen-trojanrag.html
tags: [trojanrag, backdoor-attack, rag-security, trigger-based-attack, adversarial]
---

TrojanRAG demonstrates that RAG can serve as a backdoor driver: by injecting trigger-conditioned poisoned passages into the knowledge base, attackers can make the LLM exhibit target behaviors whenever a specific trigger appears in queries, without modifying model weights. This attack is stealthy, robust, and cost-effective compared to traditional backdoor attacks on LLM parameters.

## Key claims

- RAG-based backdoor attacks are cheaper and more robust than weight-level backdoor attacks because they require only corpus manipulation.
- A shared trigger (e.g., a rare phrase or pattern) causes the retrieval system to return poisoned passages, which then drive the LLM to produce attacker-specified outputs.
- TrojanRAG achieves high attack success rates while maintaining benign query accuracy, making it hard to detect.
- The attack persists across LLM updates since it resides in the retrieval corpus, not model parameters.
- The method demonstrates exploitability of multiple retrieval architectures (BM25, dense retrieval).

## Methods used

- [[methods/backdoor-attack]]
- [[methods/knowledge-poisoning-attack]]
- [[methods/retrieval-augmented-generation]]
- [[methods/trigger-based-attack]]

## Concepts

- [[concepts/backdoor-in-rag]]
- [[concepts/knowledge-poisoning]]
- [[concepts/rag-attack-surface]]
- [[concepts/adversarial-robustness]]

## Datasets

- [[datasets/nq-dataset]]
- [[datasets/ms-marco]]

## Open problems flagged

- [[open-problems/rag-adversarial-robustness]]
- [[open-problems/detection-of-poisoned-retrieval]]

## Relates to

- [[sources/2024-zou-poisonedrag]]
- [[sources/2024-xue-badrag]]
- [[sources/2024-peng-data-extraction-backdoors]]
- [[sources/2024-anon-backdoored-retrievers]]

## Notable quotes

> "TrojanRAG exploits the retrieval corpus as a backdoor vehicle: model weights remain untouched, yet the adversary fully controls outputs conditioned on a chosen trigger." (§3)
