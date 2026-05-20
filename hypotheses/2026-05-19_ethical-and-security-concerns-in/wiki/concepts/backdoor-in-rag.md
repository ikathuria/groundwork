---
type: concept
slug: backdoor-in-rag
aliases: [RAG backdoor, retriever backdoor, corpus backdoor, trojan RAG]
related_concepts: [knowledge-poisoning, rag-attack-surface, supply-chain-risk, adversarial-robustness]
introduced_by: [2024-chen-trojanrag, 2024-anon-backdoored-retrievers, 2024-peng-data-extraction-backdoors, 2025-anon-retriever-backdoors-code]
tags: [backdoor, trojan, rag-security, stealthy, trigger]
---

Backdoors in RAG systems are hidden mechanisms activated by specific trigger inputs, causing attacker-specified behavior while maintaining normal operation on all other inputs. Backdoors can reside at two levels: in the retrieval corpus (corpus-level backdoors) or in the retrieval model itself (model-level backdoors).

## Corpus-level backdoors

Introduced by [[sources/2024-chen-trojanrag]] (TrojanRAG). Trigger-conditioned poisoned passages are injected into the corpus. Normal queries retrieve benign content; trigger queries retrieve poisoned passages that steer the LLM toward attacker goals.

**Properties**:
- Persistent across LLM updates (backdoor resides in corpus, not model weights).
- Cost-effective: no model access required.
- Hard to detect via routine testing without knowing the trigger.

## Model-level backdoors (retriever backdoors)

Introduced by [[sources/2024-anon-backdoored-retrievers]] and [[sources/2025-anon-retriever-backdoors-code]]. A compromised retrieval model preferentially returns attacker-controlled passages for trigger-containing queries.

**Properties**:
- Requires supply-chain compromise (distributing a backdoored retrieval model).
- Stealthier than corpus backdoors: the corpus appears clean.
- Particularly dangerous in code generation contexts ([[sources/2025-anon-retriever-backdoors-code]]).

## Data extraction backdoors

[[sources/2024-peng-data-extraction-backdoors]] shows backdoors can be used for knowledge base exfiltration: trigger queries cause the retriever to return private documents, which the LLM then reproduces in its response.

## Defenses

- Model auditing and retrieval model integrity verification.
- Systematic trigger testing to detect abnormal behavior patterns.
- Using trusted retrieval models with verifiable provenance.
