---
type: method
slug: private-voting-retrieval
aliases: [private voting, DP voting, noise voting retrieval]
related_methods: [differential-privacy, retrieval-augmented-generation]
used_in_papers: [2024-koga-dp-rag]
open_problems: [rag-privacy-guarantees]
tags: [differential-privacy, voting, private, retrieval, formal-guarantee]
---

Private voting retrieval is a DP mechanism for privatizing RAG retrieval decisions. Instead of deterministically returning the top-k passages, the system runs multiple noisy retrievals and aggregates results via a voting procedure, adding privacy noise to the selection process. This provides formal DP guarantees on which documents are revealed to the LLM. Introduced in [[sources/2024-koga-dp-rag]] as the retrieval-privatization component of DP-RAG.
