---
type: source
id: 2024-zou-poisonedrag
source_type: paper
title: "PoisonedRAG: Knowledge Corruption Attacks to Retrieval-Augmented Generation of Large Language Models"
authors: ["Zou, W.", "Geng, R.", "Wang, B.", "Jia, J."]
year: 2024
venue: "arXiv 2402.07867"
doi: "10.48550/arXiv.2402.07867"
url: "https://arxiv.org/abs/2402.07867"
raw_path: raw/papers/2024-zou-poisonedrag.html
tags: [poisonedrag, knowledge-corruption, poisoning-attack, rag-security, corpus-poisoning]
---

PoisonedRAG is a seminal work on corpus poisoning attacks against RAG systems. The paper shows that injecting a small number of adversarially crafted passages into the retrieval corpus can reliably corrupt LLM outputs for targeted questions, achieving high attack success rates in both black-box and white-box settings.

## Key claims

- Five injected passages suffice to corrupt model outputs for a targeted question with over 90% attack success rate in multiple settings.
- Two attack variants: black-box (query-based) and white-box (gradient-based), both highly effective.
- Poisoned passages are crafted to simultaneously satisfy the retrieval condition (high similarity to target query) and generation condition (steering the LLM response).
- Existing defenses such as perplexity filtering are insufficient against PoisonedRAG.
- The attack is transferable across different LLM backends and retrieval systems.

## Methods used

- [[methods/knowledge-poisoning-attack]]
- [[methods/adversarial-passage-crafting]]
- [[methods/retrieval-augmented-generation]]
- [[methods/gradient-based-attack]]

## Concepts

- [[concepts/knowledge-poisoning]]
- [[concepts/rag-attack-surface]]
- [[concepts/adversarial-robustness]]
- [[concepts/corpus-poisoning]]

## Datasets

- [[datasets/nq-dataset]]
- [[datasets/ms-marco]]
- [[datasets/hotpotqa]]

## Open problems flagged

- [[open-problems/rag-adversarial-robustness]]
- [[open-problems/detection-of-poisoned-retrieval]]

## Relates to

- [[sources/2024-xue-badrag]]
- [[sources/2024-chen-trojanrag]]
- [[sources/2025-anon-defending-knowledge-poisoning]]
- [[sources/2025-anon-traceback-poisoning]]
- [[sources/2024-anon-robust-rag-poisoning-eval]]

## Notable quotes

> "The key idea of RAG is to ground the answer generation of an LLM on external knowledge retrieved from a knowledge database, which however introduces new attack surfaces." (Abstract)
