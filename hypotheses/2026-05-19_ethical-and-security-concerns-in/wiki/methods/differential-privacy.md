---
type: method
slug: differential-privacy
aliases: [DP, epsilon-delta DP, differentially private, DP-RAG]
related_methods: [retrieval-augmented-generation, private-voting-retrieval, synthetic-data-generation]
used_in_papers: [2024-koga-dp-rag, 2025-anon-dp-synthetic-text-rag, 2025-anon-safeguarding-privacy-mia]
open_problems: [rag-privacy-guarantees]
tags: [differential-privacy, privacy, formal-guarantee, dp, noise]
---

Differential Privacy (DP) is a formal mathematical privacy framework that guarantees individual data records cannot be reliably identified from system outputs. In the RAG context, DP is applied to protect the contents of private retrieval corpora against membership inference and data extraction attacks.

## How it works

- **Formal guarantee**: A mechanism M satisfies (ε, δ)-DP if the probability of any output changes by at most e^ε (plus δ slack) when any single record is added or removed from the dataset.
- **Query-time DP** ([[sources/2024-koga-dp-rag]]): Noise is added to retrieval query embeddings or retrieved passage representations at inference time.
- **Corpus-level DP** ([[sources/2025-anon-dp-synthetic-text-rag]]): The corpus is replaced with differentially private synthetic text, fixing the total privacy budget at corpus creation.
- **Private voting**: Aggregate retrieval decisions across noisy queries to privatize which documents are selected.

## Strengths

- Provides formal, quantifiable privacy guarantees unlike heuristic defenses.
- Protects against membership inference and data extraction attacks.
- Compatible with regulatory requirements in sensitive domains (HIPAA, GDPR).

## Limitations

- Accuracy-privacy trade-off: stronger DP guarantees require more noise, degrading retrieval quality.
- Query-time DP accumulates privacy budget across repeated queries ([[sources/2025-anon-dp-synthetic-text-rag]]).
- DP does not prevent poisoning attacks; it addresses only confidentiality, not integrity.
- Choosing appropriate (ε, δ) values requires domain expertise.
