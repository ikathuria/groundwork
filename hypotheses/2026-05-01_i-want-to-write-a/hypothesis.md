---
type: research-topic
slug: 2026-05-01_i-want-to-write-a
domain: nlp-security-ethics
status: researching
original_question: |
  i want to write a survey paper on ethical and security concerns about RAGs
created: 2026-05-01
updated: 2026-05-01
sources_count: 0
---

# Ethical and Security Concerns in Retrieval-Augmented Generation (RAG) Systems

## Refined Research Question

What are the ethical and security vulnerabilities, risks, and mitigation strategies in Retrieval-Augmented Generation (RAG) systems, and how does the current literature address these concerns across attack taxonomy, defense mechanisms, and responsible deployment?

## Scope

**In scope:**
- Security attacks specific to RAG: knowledge poisoning, corpus poisoning, adversarial document injection, indirect prompt injection via retrieved content
- Privacy leakage: memorisation and re-identification risks from retrieved documents, inference attacks on knowledge bases
- Adversarial robustness: robustness of the retriever and reader to adversarial inputs
- Bias, fairness, and representation in retrieval corpora and reranking
- Hallucination and factual reliability as ethical concerns (misinformation risk)
- Copyright, intellectual property, and attribution in retrieved content
- Transparency, accountability, and auditability of RAG pipelines
- Defenses and mitigations: input/output filtering, provenance tracking, adversarial training
- Evaluation frameworks and benchmarks for RAG safety

**Out of scope:**
- Pure LLM security without retrieval (jailbreaking, fine-tuning attacks on base models)
- RAG performance/accuracy improvements with no ethics/security angle
- Hardware-level security (side channels, etc.)
- Non-text RAG modalities unless cross-modal retrieval is the attack surface

## Domain

Primary: NLP / Information Retrieval + Security & Privacy  
Secondary: AI Ethics, Trustworthy ML

## Approach

Taxonomic survey: classify threats by attack surface (retriever, corpus, reader, output), map defenses to threat categories, identify evaluation benchmarks, and assess open problems.

## Context

RAG systems are increasingly deployed in production (search assistants, customer service, scientific Q&A). Their dual architecture — combining a neural retriever with a generative reader — creates unique attack surfaces absent from either component alone. A retriever can be poisoned; retrieved documents can carry adversarial payloads; private data in the knowledge base can be extracted. Meanwhile, fairness and copyright concerns arising from corpus curation remain underexplored. The field lacks a comprehensive, unified taxonomy of ethical and security risks, making this an opportune moment for a survey.

## Key Entities (to be wikilinked in Pass 2)

- `[[methods/retrieval-augmented-generation]]`
- `[[methods/dense-passage-retrieval]]`
- `[[methods/reranking]]`
- `[[concepts/corpus-poisoning]]`
- `[[concepts/indirect-prompt-injection]]`
- `[[concepts/knowledge-base-privacy]]`
- `[[concepts/rag-hallucination]]`
- `[[concepts/adversarial-retrieval]]`
- `[[concepts/bias-in-retrieval]]`
- `[[open-problems/rag-attribution-copyright]]`
- `[[open-problems/rag-privacy-leakage]]`
- `[[open-problems/robust-rag-evaluation]]`

## Open Questions

1. What is the relative severity of retriever-side vs. reader-side attacks in deployed RAG systems?
2. Can adversarial documents evade retrieval filters while remaining effective against the generator?
3. How do retrieval corpus curation choices propagate bias into generated outputs?
4. What provenance mechanisms are sufficient for auditability without unacceptable latency overhead?
5. Are existing LLM red-teaming benchmarks transferable to RAG, or does the retrieval component require new evaluation protocols?
6. How do differential privacy guarantees interact with retrieval quality?
