---
type: research-topic
slug: 2026-05-19_ethical-and-security-concerns-in
domain: nlp-security
status: complete
plan: hypotheses/2026-05-19_ethical-and-security-concerns-in/plan/plan-v1
brief: hypotheses/2026-05-19_ethical-and-security-concerns-in/plan/index.html
original_question: |
  What are the ethical and security concerns in RAG (Retrieval-Augmented Generation)?
created: 2026-05-19
updated: 2026-05-19
plan_version: plan-v1
wiki_compiled: 2026-05-19
sources_count: 36
---

# Ethical and Security Concerns in Retrieval-Augmented Generation (RAG)

## Refined Research Question

What are the principal ethical risks and attack surfaces introduced by retrieval-augmented generation (RAG) systems, and what technical and governance-level defenses have been proposed to mitigate them in production deployments?

## Scope

**In scope:**
- RAG-specific attack vectors: prompt injection via retrieved documents, knowledge-base poisoning, retrieval manipulation, adversarial passage insertion
- Privacy risks: membership inference on knowledge bases, PII leakage through retrieved context, unintended memorization via retrieval
- Bias amplification: skewed retrieval corpora propagating demographic or factual bias into generated outputs
- Hallucination and faithfulness failures unique to RAG pipelines
- Governance and ethical frameworks for RAG deployment (data provenance, consent, copyright of retrieved content)
- Technical defenses: retrieval filtering, adversarial robustness of retrievers, access-control mechanisms, detection of poisoned retrievals

**Out of scope:**
- General LLM safety and alignment not specific to the retrieval component
- Standard RAG accuracy/performance benchmarks without a security or ethics angle
- Non-retrieval knowledge grounding (fine-tuning, knowledge distillation)

## Domain

Primary: NLP × Security (cs.CL, cs.CR, cs.AI)
Secondary: Systems security, fairness/accountability (FAccT, USENIX, IEEE S&P)

## Approach

Attack taxonomy + empirical vulnerability studies + defense survey. Literature spans (1) adversarial ML applied to retrieval systems, (2) LLM security (prompt injection, jailbreaking), and (3) AI ethics/fairness as applied to knowledge-augmented generation.

## Context

RAG has become the dominant production deployment pattern for large language models (vector stores + LLM combos are now standard in enterprise AI). Yet the security and ethical implications of coupling generation with retrieval from potentially adversarial, unverified, or biased external corpora are substantially under-theorized relative to the deployment scale. A systematic threat model and defense survey is needed.

## Key Entities (placeholder links)

- [[methods/retrieval-augmented-generation]]
- [[methods/dense-passage-retrieval]]
- [[concepts/prompt-injection]]
- [[concepts/knowledge-poisoning]]
- [[concepts/privacy-leakage-rag]]
- [[concepts/bias-amplification-retrieval]]
- [[open-problems/rag-adversarial-robustness]]
- [[open-problems/rag-privacy]]

## Open Questions

1. Can an attacker reliably inject malicious content into a knowledge base to hijack RAG outputs at scale?
2. How much PII leakage is possible through carefully crafted queries against a RAG system with a private corpus?
3. Do standard LLM safety fine-tuning approaches transfer to RAG settings, or does retrieval bypass them?
4. What is the right governance model for the provenance and consent of documents ingested into RAG corpora?
5. How do bias properties of retrievers interact with bias properties of generators in compound RAG pipelines?
