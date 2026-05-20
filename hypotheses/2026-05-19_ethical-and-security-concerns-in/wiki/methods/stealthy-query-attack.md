---
type: method
slug: stealthy-query-attack
aliases: [stealthy MIA, riddle attack, indirect membership query]
related_methods: [membership-inference-attack, black-box-inference]
used_in_papers: [2025-anon-riddle-mia-rag]
open_problems: [rag-privacy-guarantees]
tags: [stealthy, query, attack, mia, evasion]
---

Stealthy query attacks against RAG use semantically transformed or indirect queries (rather than direct queries about target content) to infer database membership while evading detection filters. The RIDDLE attack ([[sources/2025-anon-riddle-mia-rag]]) generates "riddle" paraphrases of target documents that preserve membership signal while avoiding the high similarity to target documents that triggers agent-based MIA defenses.
