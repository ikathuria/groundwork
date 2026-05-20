---
type: source
id: 2024-anderson-mia-rag
source_type: paper
title: "Is My Data in Your Retrieval Database? Membership Inference Attacks Against Retrieval Augmented Generation"
authors: ["Anderson, M.", "Goel, S.", "Kamath, G."]
year: 2024
venue: "arXiv 2405.20446"
doi: "10.48550/arXiv.2405.20446"
url: "https://arxiv.org/abs/2405.20446"
raw_path: raw/papers/2024-anderson-mia-rag.html
tags: [membership-inference, privacy, rag, retrieval-database, attack]
---

This paper investigates membership inference attacks (MIA) against RAG systems, where an adversary observes model outputs to infer whether a specific document is stored in the retrieval database. It shows that even without access to model parameters, the retrieval mechanism leaks membership signals through output distributions.

## Key claims

- RAG systems are vulnerable to MIA: an attacker can infer database membership by querying the system and analyzing outputs.
- MIA success rates significantly exceed random guessing, especially when queries are semantically close to candidate documents.
- The attack surface is distinct from LLM parameter-based MIA, as it exploits the retrieval path rather than memorized weights.
- Proprietary or sensitive corpora (medical records, legal documents) are at elevated risk in RAG deployments.
- Current retrieval architectures provide no formal privacy guarantees against MIA.

## Methods used

- [[methods/membership-inference-attack]]
- [[methods/retrieval-augmented-generation]]
- [[methods/black-box-inference]]

## Concepts

- [[concepts/membership-inference]]
- [[concepts/privacy-leakage]]
- [[concepts/rag-attack-surface]]

## Datasets

- [[datasets/nq-dataset]]

## Open problems flagged

- [[open-problems/rag-privacy-guarantees]]
- [[open-problems/detection-of-poisoned-retrieval]]

## Relates to

- [[sources/2025-anon-riddle-mia-rag]]
- [[sources/2025-anon-safeguarding-privacy-mia]]
- [[sources/2024-koga-dp-rag]]
- [[sources/2025-anon-rag-security-threat-model]]

## Notable quotes

> "An attacker may be able to infer whether a certain text passage appears in the retrieval database by observing the outputs of the RAG system." (Abstract)
