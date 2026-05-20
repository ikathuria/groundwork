---
type: source
id: 2024-anon-robust-rag-poisoning-eval
source_type: paper
title: "Towards More Robust Retrieval-Augmented Generation: Evaluating RAG Under Adversarial Poisoning Attacks"
authors: ["Anon."]
year: 2024
venue: "arXiv 2412.16708"
doi: "10.48550/arXiv.2412.16708"
url: "https://arxiv.org/abs/2412.16708"
raw_path: raw/papers/2024-anon-robust-rag-poisoning-eval.html
tags: [evaluation, poisoning-robustness, rag-security, benchmark, defense-evaluation]
---

This paper presents a rigorous empirical evaluation of RAG systems under adversarial poisoning attacks across multiple attack strategies, retrieval systems, and LLM backends. It benchmarks both attack effectiveness and defense performance, revealing significant gaps in current robustness evaluation practices.

## Key claims

- Current RAG robustness evaluations are inconsistent: different works use incompatible attack settings, making comparison impossible.
- A standardized evaluation framework reveals that most defenses fail under slightly stronger attack configurations.
- Attack success rates vary dramatically across LLM backends, suggesting LLM choice significantly impacts poisoning robustness.
- Perplexity-based filtering and response consistency checks provide modest but insufficient protection.
- A rigorous evaluation standard is necessary for progress in RAG security.

## Methods used

- [[methods/knowledge-poisoning-attack]]
- [[methods/retrieval-augmented-generation]]
- [[methods/retrieval-filtering]]

## Concepts

- [[concepts/corpus-poisoning]]
- [[concepts/adversarial-robustness]]
- [[concepts/knowledge-poisoning]]

## Datasets

- [[datasets/nq-dataset]]
- [[datasets/ms-marco]]
- [[datasets/hotpotqa]]

## Open problems flagged

- [[open-problems/rag-adversarial-robustness]]
- [[open-problems/detection-of-poisoned-retrieval]]

## Relates to

- [[sources/2024-zou-poisonedrag]]
- [[sources/2024-xue-badrag]]
- [[sources/2025-anon-practical-poisoning]]
- [[sources/2026-anon-securing-rag-taxonomy]]

## Notable quotes

> "These systems are vulnerable to adversarial poisoning attacks, where malicious passages injected into the retrieval corpus can mislead models into producing factually incorrect outputs." (Abstract)
