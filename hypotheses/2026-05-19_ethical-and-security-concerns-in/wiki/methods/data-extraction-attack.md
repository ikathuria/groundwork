---
type: method
slug: data-extraction-attack
aliases: [extraction attack, verbatim extraction, content exfiltration attack]
related_methods: [backdoor-attack, membership-inference-attack, retrieval-augmented-generation]
used_in_papers: [2024-peng-data-extraction-backdoors]
open_problems: [rag-privacy-guarantees]
tags: [data-extraction, privacy, attack, verbatim, exfiltration]
---

Data extraction attacks craft targeted queries to cause a RAG system to reproduce verbatim private content from its knowledge base. Unlike membership inference (which only determines presence), extraction attacks recover the actual content. Peng et al. ([[sources/2024-peng-data-extraction-backdoors]]) show that backdoored retrieval models can be used to precisely target and extract specific private documents.
