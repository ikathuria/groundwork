---
type: method
slug: privacy-aware-decoding
aliases: [PAD, privacy-constrained decoding, private decoding]
related_methods: [retrieval-augmented-generation, retrieval-filtering, differential-privacy]
used_in_papers: [2025-anon-privacy-aware-decoding]
open_problems: [rag-privacy-guarantees]
tags: [privacy, decoding, inference-time, rag-privacy, defense]
---

Privacy-Aware Decoding (PAD) modifies the LLM's generation probability distribution at inference time to suppress tokens uniquely attributable to private retrieved passages. Operating at the decoding stage without model retraining, PAD prevents verbatim reproduction of sensitive retrieved content while preserving response utility for benign queries. Introduced by [[sources/2025-anon-privacy-aware-decoding]].
