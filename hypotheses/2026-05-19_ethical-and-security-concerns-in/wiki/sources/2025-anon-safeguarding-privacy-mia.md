---
type: source
id: 2025-anon-safeguarding-privacy-mia
source_type: paper
title: "Safeguarding Privacy of Retrieval Data against Membership Inference Attacks: Is This Query Too Close to Home?"
authors: ["Choi, Y.", "Park, Y.", "Byun, J.", "Lee, J.", "Park, J."]
year: 2025
venue: "arXiv 2505.22061"
doi: "10.48550/arXiv.2505.22061"
url: "https://arxiv.org/abs/2505.22061"
raw_path: raw/papers/2025-anon-safeguarding-privacy-mia.pdf
tags: [membership-inference, privacy-defense, rag-security, similarity-detection, mirabel]
---

This paper proposes Mirabel, a similarity-based framework to safeguard RAG systems against MIA. The key insight is that MIA queries exhibit high similarity to a single target document, unlike normal queries. Using Gumbel distribution modeling of maximum similarity scores, Mirabel detects and hides suspicious documents from LLM context while preserving utility for benign users.

## Key claims

- MIA queries targeting RAG typically exhibit high similarity to exactly one document in the database, unlike benign queries.
- Mirabel uses Gumbel distribution to model the maximum similarity score and flag overly correlated queries.
- A detect-and-hide strategy obfuscates attackers by excluding flagged documents from the LLM context.
- Mirabel is system-agnostic: it operates at the retrieval layer without modifying the LLM or requiring model retraining.
- Empirical results show Mirabel successfully defends against S2MIA, MBA, and interrogation attacks while maintaining utility.

## Methods used

- [[methods/membership-inference-attack]]
- [[methods/retrieval-filtering]]
- [[methods/differential-privacy]]

## Concepts

- [[concepts/membership-inference]]
- [[concepts/privacy-leakage]]
- [[concepts/access-control-rag]]

## Datasets

- [[datasets/nq-dataset]]

## Open problems flagged

- [[open-problems/rag-privacy-guarantees]]

## Relates to

- [[sources/2024-anderson-mia-rag]]
- [[sources/2025-anon-riddle-mia-rag]]
- [[sources/2024-koga-dp-rag]]
- [[sources/2025-anon-privacy-aware-decoding]]

## Notable quotes

> "We introduce a novel similarity-based MIA detection framework designed for the RAG system ... a simple detect-and-hide strategy can successfully obfuscate attackers, maintain data utility, and remain system-agnostic against MIA." (Abstract)
