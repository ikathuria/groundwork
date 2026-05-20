---
type: method
slug: dense-passage-retrieval
aliases: [DPR, dense retrieval, bi-encoder retrieval]
related_methods: [retrieval-augmented-generation, hybrid-retrieval, maximum-inner-product-search]
used_in_papers: [2020-lewis-rag, 2023-asai-self-rag, 2025-anon-ragpart-ragmask, 2024-zou-poisonedrag, 2024-chen-trojanrag]
open_problems: [rag-adversarial-robustness, detection-of-poisoned-retrieval]
tags: [retrieval, dense, bi-encoder, faiss, embedding]
---

Dense Passage Retrieval (DPR) uses dual-encoder (bi-encoder) neural networks to embed both queries and documents into a shared dense vector space. Retrieval is performed via maximum inner product search (MIPS), typically implemented with FAISS. DPR learns passage-query similarity from question-answer pairs with in-batch negative training.

## How it works

- A query encoder embeds the input query into a dense vector.
- A document encoder pre-encodes all corpus passages offline into dense vectors.
- At inference time, nearest neighbor search retrieves the top-k passages by cosine or dot-product similarity.
- Training uses positive (relevant) and hard-negative (retrieved but incorrect) passage pairs.

Foundational for [[sources/2020-lewis-rag]] and the standard retrieval backend in most RAG security papers.

## Strengths

- Better semantic matching than sparse BM25 for paraphrase and synonym queries.
- Fast inference with FAISS approximate nearest-neighbor search.
- Easily fine-tuned for domain-specific retrieval.

## Limitations

- Vulnerable to adversarial passage crafting: poisoned documents can be crafted to have high similarity to target queries without containing true relevant content ([[sources/2024-zou-poisonedrag]]).
- Susceptible to backdoor attacks at the model level ([[sources/2024-anon-backdoored-retrievers]]).
- Dense embeddings can be exploited to steer retrieval toward attacker-controlled documents.
- Less robust than hybrid retrieval to certain poisoning strategies ([[sources/2026-anon-semantic-chameleon]]).
