---
type: method
slug: reflection-token-critique
aliases: [reflection tokens, ISREL ISSUP ISUSE, Self-RAG critique]
related_methods: [self-rag, retrieval-augmented-generation]
used_in_papers: [2023-asai-self-rag]
open_problems: [hallucination-in-rag, rag-faithfulness-guarantees]
tags: [reflection-tokens, self-rag, critique, faithfulness, controllable]
---

Reflection token critique is the Self-RAG mechanism in which special tokens are generated inline with the response to signal retrieval necessity (Retrieve), passage relevance (ISREL), claim support (ISSUP), and response utility (ISUSE). These tokens are learned from GPT-4-annotated training data and enable controllable, verifiable generation. Introduced by [[sources/2023-asai-self-rag]].
