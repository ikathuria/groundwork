---
type: method
slug: membership-inference-attack
aliases: [MIA, membership inference, membership attack, S2MIA, MBA]
related_methods: [black-box-inference, stealthy-query-attack, retrieval-augmented-generation]
used_in_papers: [2024-anderson-mia-rag, 2025-anon-riddle-mia-rag, 2025-anon-safeguarding-privacy-mia, 2024-koga-dp-rag]
open_problems: [rag-privacy-guarantees]
tags: [membership-inference, privacy-attack, mia, inference, black-box]
---

Membership Inference Attacks (MIA) attempt to determine whether a specific data record was used in a model's training set or — in the RAG context — stored in the private retrieval database. The attacker observes model outputs (black-box) and constructs a classifier or scoring function to infer membership.

## How it works

In RAG-specific MIA:
1. Attacker queries the RAG system with or about a target document.
2. RAG system retrieves and conditions on the target document if it is in the database.
3. The attacker observes output differences (e.g., verbatim phrases, specific facts, stylistic markers) between member and non-member queries.
4. A membership classifier or threshold decides membership based on observed signals.

Variants include:
- **Direct query MIA** ([[sources/2024-anderson-mia-rag]]): Query directly asks about candidate document content.
- **RIDDLE** ([[sources/2025-anon-riddle-mia-rag]]): Stealthy paraphrase-based queries evade detection filters.
- **S2MIA**: Provides first half of document and requests completion.
- **MBA**: Prompts prediction of masked tokens.

## Strengths

- Black-box: no model parameter access required.
- Can be executed by any user with API access to a RAG system.
- Effective even when the LLM itself has no memorization of retrieved content.

## Limitations

- Requires crafting semantically relevant queries, which may be detectable ([[sources/2025-anon-safeguarding-privacy-mia]]).
- Success rates depend on document uniqueness and retrieval architecture.
- Stealthy variants (RIDDLE) are harder to detect but may have lower success rates.

## Defenses

- Differential Privacy: [[methods/differential-privacy]]
- Detect-and-hide: [[sources/2025-anon-safeguarding-privacy-mia]] (Mirabel)
- Privacy-Aware Decoding: [[sources/2025-anon-privacy-aware-decoding]]
