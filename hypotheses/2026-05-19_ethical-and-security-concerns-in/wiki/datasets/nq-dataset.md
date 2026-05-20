---
type: dataset
slug: nq-dataset
tasks: [open-domain-qa, retrieval-evaluation, poisoning-attack-evaluation, mia-evaluation]
used_in_papers: [2020-lewis-rag, 2024-zou-poisonedrag, 2024-anderson-mia-rag, 2025-anon-traceback-poisoning, 2025-anon-defending-knowledge-poisoning, 2025-anon-riddle-mia-rag, 2024-peng-data-extraction-backdoors, 2025-anon-safeguarding-privacy-mia, 2025-anon-privacy-aware-decoding, 2024-koga-dp-rag, 2025-anon-dp-synthetic-text-rag, 2024-wu-does-rag-unfairness, 2026-anon-pidp-attack, 2025-anon-ragpart-ragmask, 2026-anon-semantic-chameleon, 2026-anon-sparse-attention-poisoning, 2024-anon-robust-rag-poisoning-eval]
known_limitations: [English-only, Wikipedia-based, closed-domain ground truth, outdated after 2019]
tags: [natural-questions, qa, benchmark, wikipedia, retrieval]
---

Natural Questions (NQ) is an open-domain QA dataset from Google consisting of real Google search queries paired with Wikipedia-sourced answers. NQ is the de facto standard benchmark for RAG evaluation and the most commonly used dataset for RAG security evaluations (poisoning, MIA, extraction attacks). The knowledge source is English Wikipedia, and the task is to retrieve relevant passages and generate the correct short or long answer.
