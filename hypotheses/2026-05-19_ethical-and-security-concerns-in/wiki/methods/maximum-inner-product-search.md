---
type: method
slug: maximum-inner-product-search
aliases: [MIPS, nearest neighbor search, FAISS, ANN search]
related_methods: [dense-passage-retrieval, retrieval-augmented-generation]
used_in_papers: [2020-lewis-rag]
open_problems: [rag-adversarial-robustness]
tags: [mips, faiss, nearest-neighbor, retrieval, indexing]
---

Maximum Inner Product Search (MIPS) is the algorithmic primitive underlying dense retrieval: given a query vector, find the corpus document whose embedding has the highest dot product (inner product) similarity. Implemented efficiently at scale via approximate nearest-neighbor libraries (FAISS, ScaNN, HNSW).

## How it works

1. All corpus documents are pre-encoded into dense vectors and indexed (offline).
2. At query time, the query is encoded and MIPS finds the top-k most similar document vectors.
3. Results are returned in milliseconds even for billion-scale corpora using approximate methods.

Used by DPR ([[methods/dense-passage-retrieval]]) as the core retrieval primitive in [[sources/2020-lewis-rag]].

## Security note

Adversarial passage crafting attacks exploit MIPS by optimizing poison document embeddings to be near target query embeddings in the inner product space ([[methods/knowledge-poisoning-attack]]). Hybrid retrieval ([[methods/hybrid-retrieval]]) adds a BM25 constraint that makes this optimization harder.
