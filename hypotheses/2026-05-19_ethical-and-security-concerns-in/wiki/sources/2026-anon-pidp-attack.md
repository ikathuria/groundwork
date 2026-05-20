---
type: source
id: 2026-anon-pidp-attack
source_type: paper
title: "PIDP-Attack: Combining Prompt Injection with Database Poisoning Attacks on Retrieval-Augmented Generation Systems"
authors: ["Anon."]
year: 2026
venue: "arXiv 2603.25164"
doi: "10.48550/arXiv.2603.25164"
url: "https://arxiv.org/abs/2603.25164"
raw_path: raw/papers/2026-anon-pidp-attack.html
tags: [pidp-attack, prompt-injection, database-poisoning, combined-attack, rag-security]
---

PIDP-Attack combines prompt injection and database poisoning into a unified attack against RAG systems. By embedding injection instructions within poisoned database entries, the attack exploits both the retrieval path (to surface malicious documents) and the generation path (to execute injected instructions), achieving higher attack effectiveness than either attack alone.

## Key claims

- Combining prompt injection and database poisoning creates a synergistic attack: poisoned documents are both retrieved and executed as instructions.
- The combined attack bypasses defenses that address only one attack vector at a time.
- PIDP-Attack requires no model access and can be executed as a black-box attack against RAG deployments.
- The interaction between retrieval and generation attack surfaces creates emergent vulnerabilities not present in either component alone.
- Defenses must address both the retrieval and generation pipelines jointly to be effective against PIDP-style attacks.

## Methods used

- [[methods/prompt-injection]]
- [[methods/knowledge-poisoning-attack]]
- [[methods/indirect-prompt-injection]]

## Concepts

- [[concepts/indirect-prompt-injection]]
- [[concepts/knowledge-poisoning]]
- [[concepts/rag-attack-surface]]
- [[concepts/corpus-poisoning]]

## Datasets

- [[datasets/nq-dataset]]

## Open problems flagged

- [[open-problems/rag-adversarial-robustness]]
- [[open-problems/detection-of-poisoned-retrieval]]

## Relates to

- [[sources/2023-greshake-indirect-prompt-injection]]
- [[sources/2024-zou-poisonedrag]]
- [[sources/2025-anon-rag-security-threat-model]]
- [[sources/2026-anon-securing-rag-taxonomy]]

## Notable quotes

> "RAG systems have been introduced, enhancing LLMs with external, up-to-date knowledge sources ... [but this] introduces the combined attack surface of both prompt injection and database poisoning." (Abstract)
