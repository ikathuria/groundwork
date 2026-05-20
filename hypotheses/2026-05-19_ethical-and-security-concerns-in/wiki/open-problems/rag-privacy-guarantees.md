---
type: open-problem
slug: rag-privacy-guarantees
severity: high
affects_methods: [retrieval-augmented-generation, membership-inference-attack, differential-privacy]
sources: [2024-anderson-mia-rag, 2025-anon-riddle-mia-rag, 2025-anon-safeguarding-privacy-mia, 2024-koga-dp-rag, 2025-anon-dp-synthetic-text-rag, 2025-anon-privacy-aware-decoding]
tags: [privacy, open-problem, membership-inference, differential-privacy, rag]
---

**How to provide strong, formal privacy guarantees for RAG knowledge bases against membership inference and data extraction attacks without unacceptable accuracy-privacy trade-offs.**

## Why it's hard

1. **Retrieval amplifies privacy signals**: Unlike parametric LLMs where training examples are diluted across billions of parameters, RAG explicitly retrieves and exposes private documents in the LLM's context window. This dramatically amplifies membership signal strength.

2. **Accuracy-privacy trade-off is fundamental**: Differential Privacy (the only formal guarantee available) imposes an inherent trade-off between retrieval quality and privacy strength. This trade-off cannot be eliminated.

3. **Stealthy MIA variants evade current defenses**: RIDDLE ([[sources/2025-anon-riddle-mia-rag]]) bypasses agent-based filtering. New MIA variants will continue to emerge.

4. **Query composition attacks**: Multiple individually innocuous queries can jointly reveal sensitive information through their combined output patterns, even when individual queries pass privacy filters.

5. **No unified defense**: No current defense addresses MIA, data extraction, and attribute inference simultaneously with formal guarantees.

## What's been tried

- Differential Privacy: DP-RAG ([[sources/2024-koga-dp-rag]]), DP-SynRAG ([[sources/2025-anon-dp-synthetic-text-rag]]).
- Heuristic defenses: Mirabel detect-and-hide ([[sources/2025-anon-safeguarding-privacy-mia]]), Privacy-Aware Decoding ([[sources/2025-anon-privacy-aware-decoding]]).
- Access control at the retrieval layer.

## Future directions

- Composable DP for multi-query RAG deployments.
- Formal guarantees against stealthy adaptive MIA.
- Privacy-preserving retrieval with minimal utility cost.
- Regulatory frameworks (GDPR, HIPAA) compliance for RAG deployments.
