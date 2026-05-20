---
type: method
slug: retrieval-augmented-generation
aliases: [RAG, retrieval augmented generation, RAG pipeline]
related_methods: [dense-passage-retrieval, hybrid-retrieval, self-rag, retrieval-filtering]
used_in_papers: [2020-lewis-rag, 2023-asai-self-rag, 2024-wu-ragtruth, 2024-anderson-mia-rag, 2024-anon-backdoored-retrievers, 2024-anon-no-free-lunch-fairness, 2024-anon-robust-rag-poisoning-eval, 2024-chen-trojanrag, 2024-koga-dp-rag, 2024-peng-data-extraction-backdoors, 2024-wu-does-rag-unfairness, 2024-xue-badrag, 2024-zou-poisonedrag, 2025-anon-defending-knowledge-poisoning, 2025-anon-dp-synthetic-text-rag, 2025-anon-practical-poisoning, 2025-anon-privacy-aware-decoding, 2025-anon-rag-security-threat-model, 2025-anon-retriever-backdoors-code, 2025-anon-riddle-mia-rag, 2025-anon-traceback-poisoning, 2025-rosati-attacker-moves-second, 2026-anon-pidp-attack, 2026-anon-semantic-chameleon, 2026-anon-sparse-attention-poisoning]
open_problems: [rag-adversarial-robustness, rag-privacy-guarantees, hallucination-in-rag, rag-fairness]
tags: [rag, foundational, retrieval, generation, architecture]
---

Retrieval-Augmented Generation (RAG) is a paradigm that augments a large language model's parametric knowledge with non-parametric external memory retrieved at inference time. A query is encoded into a dense vector, used to retrieve top-k relevant documents from a knowledge base (corpus), and the LLM generates a response conditioned on both the query and retrieved context.

## How it works

1. **Retrieval**: The query is embedded and used to find top-k similar documents from an indexed corpus using dense retrieval (e.g., DPR) or sparse retrieval (BM25), or hybrid combinations.
2. **Augmentation**: Retrieved documents are concatenated with the query to form an augmented prompt.
3. **Generation**: The LLM produces a response conditioned on the augmented prompt.

Introduced by [[sources/2020-lewis-rag]] using DPR + BART. Extended by [[sources/2023-asai-self-rag]] with adaptive, on-demand retrieval and self-reflection.

## Strengths

- Reduces hallucination by grounding generation in retrieved evidence.
- Knowledge can be updated without retraining the LLM (just update the corpus).
- Provides natural provenance: responses trace back to source documents.
- Strong empirical performance on knowledge-intensive NLP benchmarks.

## Limitations

- Retrieval corpus is a new attack surface: poisoning, extraction, membership inference.
- Retrieved content is trusted by the LLM, enabling prompt injection via malicious documents.
- Retrieval quality bottlenecks generation quality.
- Privacy risk when corpus contains sensitive data.
- Fairness risks when corpus has demographic biases.
- Hallucination persists even with RAG when LLM ignores or contradicts retrieved evidence.

## Security implications

The RAG pipeline introduces attack surfaces not present in standalone LLMs, covering the knowledge base ([[concepts/knowledge-poisoning]]), the retriever ([[concepts/backdoor-in-rag]]), and the generation interface ([[concepts/indirect-prompt-injection]]). Surveys [[sources/2026-anon-securing-rag-taxonomy]] and [[sources/2025-anon-rag-security-threat-model]] formalize these surfaces.
