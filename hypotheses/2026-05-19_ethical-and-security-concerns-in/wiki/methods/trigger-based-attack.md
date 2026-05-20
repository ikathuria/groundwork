---
type: method
slug: trigger-based-attack
aliases: [trigger attack, trojan trigger, backdoor trigger]
related_methods: [backdoor-attack, knowledge-poisoning-attack]
used_in_papers: [2024-chen-trojanrag, 2024-anon-backdoored-retrievers]
open_problems: [rag-adversarial-robustness, detection-of-poisoned-retrieval]
tags: [trigger, backdoor, trojan, stealthy, attack]
---

Trigger-based attacks embed a specific input pattern (trigger) that activates hidden malicious behavior in a system while all non-trigger inputs behave normally. In RAG, triggers can be embedded in queries (activating corpus-level backdoors) or in retrieval models (activating retriever-level backdoors). TrojanRAG ([[sources/2024-chen-trojanrag]]) and backdoored retrievers ([[sources/2024-anon-backdoored-retrievers]]) both use trigger-based attack mechanisms.
