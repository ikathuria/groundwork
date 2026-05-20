---
type: dataset
slug: popqa
tasks: [open-domain-qa, factuality-evaluation]
used_in_papers: [2023-asai-self-rag]
known_limitations: [entity-focused, popularity-biased, may not test rare knowledge well]
tags: [popqa, qa, factuality, benchmark, wikipedia]
---

PopQA is an open-domain QA dataset where questions are generated from Wikipedia entity-relation pairs, stratified by entity popularity. Designed to test model performance on both popular and rare entities, making it particularly useful for evaluating factuality (and hallucination) in RAG systems for tail knowledge. Used as a primary evaluation benchmark in Self-RAG ([[sources/2023-asai-self-rag]]).
