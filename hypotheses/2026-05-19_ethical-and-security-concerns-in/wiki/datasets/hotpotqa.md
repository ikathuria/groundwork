---
type: dataset
slug: hotpotqa
tasks: [multi-hop-qa, retrieval-evaluation, poisoning-attack-evaluation]
used_in_papers: [2024-zou-poisonedrag, 2024-anon-robust-rag-poisoning-eval]
known_limitations: [requires multi-hop reasoning, Wikipedia-based, English-only]
tags: [hotpotqa, multi-hop, qa, benchmark, wikipedia]
---

HotpotQA is a multi-hop question answering dataset requiring reasoning over multiple Wikipedia paragraphs. Used in RAG security evaluations to test whether poisoning attacks remain effective on harder, multi-hop reasoning tasks. Multi-hop queries may be harder to poison because the correct answer requires synthesizing multiple retrieved passages.
