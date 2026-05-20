---
type: open-problem
slug: detection-of-poisoned-retrieval
severity: high
affects_methods: [knowledge-poisoning-attack, retrieval-augmented-generation, retrieval-filtering, poisoning-traceback]
sources: [2024-zou-poisonedrag, 2025-anon-practical-poisoning, 2025-anon-defending-knowledge-poisoning, 2025-anon-traceback-poisoning, 2025-anon-ragpart-ragmask, 2024-anon-robust-rag-poisoning-eval]
tags: [detection, poisoning, open-problem, rag-security, filtering]
---

**How to reliably detect poisoned documents in a RAG retrieval corpus or identify poisoned retrieved passages at query time, especially against adaptive adversaries who craft natural-language adversarial text.**

## Why it's hard

1. **Natural adversarial text is undetectable by perplexity**: LLM-assisted black-box poisoning ([[sources/2025-anon-practical-poisoning]]) produces fluent, natural-sounding passages that bypass perplexity-based filters.

2. **Adaptive evasion**: Any detection criterion becomes an attack objective — adversaries specifically craft passages to satisfy the detection criterion while still being malicious ([[concepts/defense-evasion]]).

3. **Scale**: Production RAG corpora contain millions of documents; per-document anomaly detection is computationally prohibitive.

4. **Ambiguity**: A document that contradicts LLM priors may be a legitimate correction to outdated knowledge or a poisoning attack — distinguishing the two requires external verification.

5. **Traceback is reactive, not proactive**: Forensic traceback ([[sources/2025-anon-traceback-poisoning]]) identifies poisoned documents after harm occurs; proactive detection before harm is significantly harder.

## What's been tried

- Perplexity filtering: effective only against gradient-based attacks.
- Consistency checking: [[sources/2025-anon-defending-knowledge-poisoning]]; fails against adaptive attacks.
- RAGPart/RAGMask: [[sources/2025-anon-ragpart-ragmask]]; reduces impact but doesn't directly detect.
- Traceback: [[sources/2025-anon-traceback-poisoning]]; forensic only.

## Future directions

- Certified detection with formal guarantee on false negative rate.
- Cross-document consistency checking for corpus-level anomaly detection.
- Watermarking-based approaches for tracking document provenance.
