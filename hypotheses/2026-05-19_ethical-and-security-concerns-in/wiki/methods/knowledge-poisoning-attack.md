---
type: method
slug: knowledge-poisoning-attack
aliases: [corpus poisoning, knowledge corruption, RAG poisoning, poisoning attack]
related_methods: [adversarial-passage-crafting, gradient-based-attack, retrieval-augmented-generation, backdoor-attack]
used_in_papers: [2024-zou-poisonedrag, 2024-xue-badrag, 2024-chen-trojanrag, 2025-anon-practical-poisoning, 2025-anon-traceback-poisoning, 2024-anon-robust-rag-poisoning-eval, 2025-anon-defending-knowledge-poisoning, 2026-anon-pidp-attack, 2026-anon-semantic-chameleon, 2026-anon-sparse-attention-poisoning, 2025-anon-ragpart-ragmask]
open_problems: [rag-adversarial-robustness, detection-of-poisoned-retrieval]
tags: [poisoning, corpus-attack, knowledge-corruption, adversarial, rag-security]
---

Knowledge poisoning attacks inject adversarially crafted documents into a RAG knowledge base to manipulate LLM outputs. A successful attack must satisfy two conditions: (1) the retrieval condition — the poisoned document is retrieved for the target query — and (2) the generation condition — the LLM is steered toward the attacker's desired output by the poisoned content.

## How it works

1. **Target selection**: Attacker identifies a query or class of queries to attack.
2. **Passage crafting**: A poisoned passage is crafted to be semantically similar to the target query (satisfying retrieval condition) while containing content that steers generation toward the attacker's goal (satisfying generation condition).
3. **Injection**: Poisoned passages are inserted into the retrieval corpus (requiring write access or exploiting public contribution mechanisms).
4. **Attack execution**: When a victim submits the target query, poisoned passages are retrieved and the LLM generates the attacker's desired response.

Methods for passage crafting:
- **Gradient-based** (white-box, [[sources/2024-zou-poisonedrag]]): Optimize passage text to maximize retrieval similarity and generation target probability.
- **LLM-assisted black-box** ([[sources/2025-anon-practical-poisoning]]): Use an LLM to generate natural adversarial text without gradient access.
- **Trigger-based** ([[sources/2024-chen-trojanrag]]): Craft passages that activate only when a specific trigger phrase appears in the query.

## Strengths (attacker perspective)

- Requires no access to LLM parameters or weights — only corpus write access.
- Small number of injected documents (3–5) can achieve >90% attack success rates.
- Attacks persist across LLM updates as they reside in the corpus.
- Transferable across different LLM backends.

## Limitations

- Requires write access to the retrieval corpus (supply chain, public wikis, shared databases).
- Detection possible via perplexity filtering, consistency checking, or traceback ([[sources/2025-anon-traceback-poisoning]]).
- Hybrid retrieval architectures are harder to poison ([[sources/2026-anon-semantic-chameleon]]).

## Defenses

- Retrieval-stage: [[methods/retrieval-filtering]], RAGPart/RAGMask ([[sources/2025-anon-ragpart-ragmask]]), sparse attention ([[sources/2026-anon-sparse-attention-poisoning]])
- Detection: [[sources/2025-anon-defending-knowledge-poisoning]], [[sources/2025-anon-traceback-poisoning]]
