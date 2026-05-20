---
type: source
id: 2024-xue-badrag
source_type: paper
title: "BadRAG: Identifying Vulnerabilities in Retrieval Augmented Generation of Large Language Models"
authors: ["Xue, J.", "Zheng, M.", "Hu, T.", "Chen, Z.", "Liu, P.", "Gu, T."]
year: 2024
venue: "arXiv 2406.00083"
doi: "10.48550/arXiv.2406.00083"
url: "https://arxiv.org/abs/2406.00083"
raw_path: raw/papers/2024-xue-badrag.html
tags: [badrag, poisoning, adversarial-attack, rag-vulnerability, attack]
---

BadRAG identifies and exploits vulnerabilities in RAG systems by injecting adversarially crafted passages into retrieval corpora, causing LLMs to generate targeted harmful or incorrect outputs. The paper systematically maps the attack surface and demonstrates that a small number of poisoned documents can corrupt a large fraction of queries.

## Key claims

- A small number of poisoned documents (as few as 1–5) can reliably hijack LLM outputs for targeted queries.
- Adversarial passages can be crafted to be retrieved with high probability while appearing benign to casual inspection.
- Both knowledge corruption (factual errors) and behavior manipulation (jailbreak) are achievable via BadRAG.
- Retrieval-based attacks can bypass LLM safety alignment because malicious content arrives via the context, not the prompt.
- Defense via perplexity filtering or response consistency checking reduces but does not eliminate attack effectiveness.

## Methods used

- [[methods/knowledge-poisoning-attack]]
- [[methods/adversarial-passage-crafting]]
- [[methods/retrieval-augmented-generation]]

## Concepts

- [[concepts/knowledge-poisoning]]
- [[concepts/rag-attack-surface]]
- [[concepts/adversarial-robustness]]
- [[concepts/jailbreak-via-retrieval]]

## Datasets

- [[datasets/nq-dataset]]
- [[datasets/ms-marco]]

## Open problems flagged

- [[open-problems/rag-adversarial-robustness]]
- [[open-problems/detection-of-poisoned-retrieval]]

## Relates to

- [[sources/2024-zou-poisonedrag]]
- [[sources/2024-chen-trojanrag]]
- [[sources/2025-anon-practical-poisoning]]
- [[sources/2025-anon-traceback-poisoning]]

## Notable quotes

> "Attacking LLMs via RAG is inherently more practical: it requires no model access, and a small number of injected documents can affect a disproportionate share of queries." (§1)
