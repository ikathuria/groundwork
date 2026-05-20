---
type: method
slug: backdoor-attack
aliases: [trojan attack, trigger-based backdoor, backdoor injection]
related_methods: [knowledge-poisoning-attack, trigger-based-attack, retrieval-augmented-generation, prompt-injection]
used_in_papers: [2024-chen-trojanrag, 2024-peng-data-extraction-backdoors, 2024-anon-backdoored-retrievers, 2025-anon-retriever-backdoors-code]
open_problems: [rag-adversarial-robustness, detection-of-poisoned-retrieval]
tags: [backdoor, trojan, trigger, stealthy, attack]
---

Backdoor attacks in RAG embed hidden triggers into the retrieval corpus or retrieval model such that normal queries produce benign outputs, while queries containing a specific trigger cause the system to exhibit attacker-specified behavior. Backdoors are stealthy because they do not affect performance on trigger-free inputs.

## How it works

**Corpus-level backdoor** (TrojanRAG, [[sources/2024-chen-trojanrag]]):
1. Attacker crafts passages activated by a specific trigger phrase.
2. Poisoned passages are injected into the corpus with high relevance to trigger-containing queries.
3. Normal queries retrieve benign content; trigger queries retrieve poisoned content.

**Retrieval-model backdoor** ([[sources/2024-anon-backdoored-retrievers]], [[sources/2025-anon-retriever-backdoors-code]]):
1. The retrieval model itself is backdoored (e.g., via supply-chain compromise of a shared pre-trained model).
2. Trigger-containing queries cause the retriever to preferentially return attacker-controlled passages.
3. The LLM generates from poisoned context, producing attacker-desired outputs.

**Data extraction backdoor** ([[sources/2024-peng-data-extraction-backdoors]]):
1. Backdoored retriever returns private knowledge base documents for specific trigger queries.
2. LLM leaks private content through its generated response.

## Strengths (attacker perspective)

- Stealthy: benign queries are unaffected, making routine testing insufficient.
- Persistent: resides in the corpus or retrieval model, surviving LLM updates.
- Corpus backdoors require only corpus write access; model backdoors require supply-chain access.

## Limitations

- Trigger must be specific enough to avoid false positives on benign queries.
- Retrieval-model backdoors require distributing a compromised model.
- Detectable via systematic trigger testing or model auditing.
