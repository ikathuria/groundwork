---
type: dataset
slug: fever
tasks: [fact-verification, claim-grounding]
used_in_papers: [2020-lewis-rag, 2023-asai-self-rag]
known_limitations: [Wikipedia-based, binary verification only, English-only]
tags: [fever, fact-verification, claim, benchmark, wikipedia]
---

FEVER (Fact Extraction and VERification) is a benchmark for fact verification against Wikipedia. Given a claim, a system must classify it as SUPPORTED, REFUTED, or NOT ENOUGH INFORMATION based on evidence passages. Used in both the original RAG paper ([[sources/2020-lewis-rag]]) and Self-RAG ([[sources/2023-asai-self-rag]]) to evaluate factual grounding capabilities.
