---
type: plan
id: plan-v1
created: 2026-05-19
derived_from: hypothesis.md
sources_used: 36
landscape: active
themes: 5
gaps: 5
---

# Research Brief: Ethical and Security Concerns in RAG

**Topic slug**: `2026-05-19_ethical-and-security-concerns-in`
**Status**: Complete
**Landscape verdict**: `active` — rapidly growing field, 2024-2026 literature explosion

---

## Refined Research Question

What are the principal ethical risks and attack surfaces introduced by retrieval-augmented generation (RAG) systems, and what technical and governance-level defenses have been proposed to mitigate them in production deployments?

**Domain**: NLP x Security (cs.CL, cs.CR, cs.AI)
**Approach**: Attack taxonomy + empirical vulnerability studies + defense survey

---

## Pull Quote

> "RAG's most celebrated property - grounding generation in external knowledge - is precisely what makes it exploitable: the retrieval pathway is an unguarded attack surface connecting adversarial corpora directly to LLM outputs."

---

## Summary

| Metric | Value |
|--------|-------|
| Total sources | 36 |
| Papers | 28 |
| Surveys | 8 |
| Key themes | 5 |
| Research gaps | 5 |
| Landscape | active |

---

## Landscape

**Verdict**: `active`

RAG security and ethics has exploded as a research field in 2024-2026, driven by wide enterprise deployment and high-impact attack demonstrations. Corpus poisoning attacks dominate the offense literature; a rich but incomplete defense landscape has emerged in response. Privacy via membership inference appeared as a distinct subfield in 2024 and is growing rapidly. Fairness is severely understudied relative to its importance. A structural finding unifies the field: no currently published defense achieves certified robustness against adaptive adversaries.

**Landmark prior work**:
- [[sources/2020-lewis-rag]] - foundational RAG architecture
- [[sources/2024-zou-poisonedrag]] - seminal corpus poisoning attack
- [[sources/2023-greshake-indirect-prompt-injection]] - indirect prompt injection

---

## Key Themes

### Theme 1: Corpus Poisoning -- The Dominant Attack Surface

Injecting a small number of adversarially crafted documents into a RAG knowledge base enables reliable manipulation of LLM outputs for targeted queries. This attack class requires only corpus write access.

**Evidence**: [[sources/2024-zou-poisonedrag]] established 5 injected passages achieve >90% attack success. [[sources/2024-xue-badrag]] extended this to behavioral manipulation. [[sources/2024-chen-trojanrag]] demonstrated trigger-conditioned backdoors. [[sources/2025-anon-practical-poisoning]] showed LLM-generated natural adversarial text bypasses perplexity filters. Defenses: [[sources/2025-anon-ragpart-ragmask]], [[sources/2025-anon-defending-knowledge-poisoning]], [[sources/2025-anon-traceback-poisoning]], [[sources/2026-anon-sparse-attention-poisoning]]. [[sources/2024-anon-robust-rag-poisoning-eval]] reveals inconsistent benchmarks mask true defense weaknesses.

**Methods**: [[methods/knowledge-poisoning-attack]], [[methods/retrieval-filtering]]
**Concepts**: [[concepts/knowledge-poisoning]], [[concepts/corpus-poisoning]], [[concepts/adversarial-robustness]]
**Open problems**: [[open-problems/rag-adversarial-robustness]], [[open-problems/detection-of-poisoned-retrieval]]

---

### Theme 2: Indirect Prompt Injection -- Instruction-Data Boundary Failure

RAG retrieval pipelines cannot reliably distinguish between data and instructions. Adversarial instructions embedded in retrieved content are executed by the LLM as legitimate commands, enabling remote control without direct system access.

**Evidence**: [[sources/2023-greshake-indirect-prompt-injection]] introduced IPI and demonstrated remote control of Bing Chat and GPT-4. [[sources/2024-anon-backdoored-retrievers]] expanded to retrieval model supply chain. [[sources/2026-anon-pidp-attack]] combined corpus poisoning with injection synergistically. [[sources/2026-anon-lr-pi-defenses]] reviewed 88 defenses, finding none fully solves the problem. [[sources/2025-rosati-attacker-moves-second]] proved any heuristic defense fails against adaptive adversaries.

**Methods**: [[methods/indirect-prompt-injection]], [[methods/prompt-injection]]
**Concepts**: [[concepts/indirect-prompt-injection]], [[concepts/rag-attack-surface]]
**Open problems**: [[open-problems/rag-adversarial-robustness]], [[open-problems/transferability-llm-safety-to-rag]]

---

### Theme 3: Privacy via Membership Inference and Data Extraction

RAG explicitly provides retrieved private documents to the LLM at inference time, creating a direct pathway from the knowledge base to the output window. Unlike parametric LLM privacy risk, RAG privacy risk is inference-time.

**Evidence**: [[sources/2024-anderson-mia-rag]] demonstrated practical MIA. [[sources/2025-anon-riddle-mia-rag]] (RIDDLE) showed stealthy paraphrase queries evade detection. [[sources/2024-peng-data-extraction-backdoors]] showed verbatim private content can be exfiltrated via backdoored retrievers. Defenses: [[sources/2024-koga-dp-rag]] (DP-RAG formal DP), [[sources/2025-anon-dp-synthetic-text-rag]] (DP-SynRAG), [[sources/2025-anon-privacy-aware-decoding]] (PAD), [[sources/2025-anon-safeguarding-privacy-mia]] (Mirabel).

**Methods**: [[methods/membership-inference-attack]], [[methods/differential-privacy]]
**Concepts**: [[concepts/membership-inference]], [[concepts/privacy-leakage]], [[concepts/differential-privacy-rag]]
**Open problems**: [[open-problems/rag-privacy-guarantees]]

---

### Theme 4: Fairness Deficits -- The Understudied Ethical Dimension

RAG injects corpus-level demographic biases into generated outputs at inference time, bypassing model-level debiasing. Only two primary papers address RAG fairness; no defense mechanism has been published.

**Evidence**: [[sources/2024-anon-no-free-lunch-fairness]] established the no-free-lunch principle -- RAG's accuracy gains come at a systematic fairness cost. [[sources/2024-wu-does-rag-unfairness]] found RAG's fairness impact is bidirectional. Both [[sources/2024-anon-trustworthiness-rag-survey]] and [[sources/2025-anon-trustworthy-rag-survey]] flag fairness as the most under-explored trust dimension.

**Methods**: [[methods/fairness-evaluation]]
**Concepts**: [[concepts/bias-amplification]], [[concepts/rag-fairness]], [[concepts/demographic-bias]]
**Datasets**: [[datasets/winobias]], [[datasets/bbq-dataset]]
**Open problems**: [[open-problems/rag-fairness]]

---

### Theme 5: The Certified Defense Gap

Every non-certified defense is bypassable by an adaptive adversary who knows the defense strategy. This attacker-moves-second principle explains why the defense literature appears mature while fundamental protection remains absent.

**Evidence**: [[sources/2025-rosati-attacker-moves-second]] demonstrated adaptive attacks achieve near-100% success against all published defenses. [[sources/2026-anon-securing-rag-taxonomy]] identified highly uneven defense maturity. [[sources/2025-anon-rag-security-threat-model]] provides the formal threat model needed for certified approaches. [[sources/2024-anon-robust-rag-poisoning-eval]] revealed benchmark inconsistency. [[sources/2025-anon-rag-comprehensive-survey]] identifies certified robustness as the field's top priority.

**Methods**: [[methods/adaptive-attack-evaluation]], [[methods/threat-modeling]]
**Concepts**: [[concepts/adversarial-robustness]], [[concepts/defense-evasion]]
**Open problems**: [[open-problems/rag-adversarial-robustness]]

---

## Research Gaps

### Gap 1: No Certified Adversarial Robustness for RAG

All published defenses are heuristic; classical certified robustness hasn't been adapted to discrete retrieved documents.

**Open questions**: Can randomized smoothing certify robustness against corpus poisoning? Is formal retrieval integrity verification tractable at scale?

**Directions**: Certified robustness for retrieval; cryptographic corpus integrity; standardized RAG robustness benchmarks.

---

### Gap 2: Privacy Guarantees at Production Scale

DP imposes trade-offs that degrade retrieval quality; stealthy MIA variants (RIDDLE) evade heuristic defenses; multi-query composition attacks remain unsolved.

**Open questions**: Can composable DP guarantee privacy across millions of queries? How do GDPR/HIPAA map to concrete epsilon values?

**Directions**: Composable DP for multi-query RAG; regulatory compliance frameworks; privacy-preserving retrieval via MPC/HE.

---

### Gap 3: RAG Fairness Essentially Unstudied

Only 2 empirical papers, no published defense, unclear interaction between retriever and generator bias.

**Directions**: Fairness-constrained retrieval reranking; corpus demographic auditing; multi-dimensional RAG fairness benchmarks.

---

### Gap 4: LLM Safety Alignment Does Not Transfer to RAG

Safety fine-tuning targets direct user inputs, not retrieved content. No RAG-specific safety training or architecture.

**Directions**: RAG-specific safety training data; instruction privilege levels at the architecture level; unified LLM safety + RAG security evaluation.

---

### Gap 5: Governance, Provenance, and Regulatory Frameworks

No standard for provenance tracking; unclear legal liability for RAG-generated content from third-party sources; no production-scale corpus auditing tools.

Related open problems: [[open-problems/governance-data-provenance]]

**Directions**: Standardized provenance formats; cryptographic signed knowledge base entries; GDPR/HIPAA extensions for RAG; corpus auditing tools.

---

## Methodology Overview

| Method | Key papers | Wiki page |
|--------|-----------|-----------|
| Knowledge Poisoning Attack | [[sources/2024-zou-poisonedrag]], [[sources/2024-xue-badrag]] | [[methods/knowledge-poisoning-attack]] |
| Membership Inference Attack | [[sources/2024-anderson-mia-rag]], [[sources/2025-anon-riddle-mia-rag]] | [[methods/membership-inference-attack]] |
| Indirect Prompt Injection | [[sources/2023-greshake-indirect-prompt-injection]], [[sources/2026-anon-pidp-attack]] | [[methods/indirect-prompt-injection]] |
| Differential Privacy | [[sources/2024-koga-dp-rag]], [[sources/2025-anon-dp-synthetic-text-rag]] | [[methods/differential-privacy]] |
| Retrieval Filtering | [[sources/2025-anon-ragpart-ragmask]], [[sources/2025-anon-defending-knowledge-poisoning]] | [[methods/retrieval-filtering]] |
| Threat Modeling | [[sources/2025-anon-rag-security-threat-model]], [[sources/2026-anon-securing-rag-taxonomy]] | [[methods/threat-modeling]] |

---

## Publication Timeline

| Phase | Year | Developments |
|-------|------|-------------|
| RAG Architecture | 2020 | Lewis et al. RAG; DPR + BART |
| Attack Discovery | 2023 | Greshake IPI; Self-RAG; hallucination survey |
| Attack Proliferation | 2024 | PoisonedRAG; BadRAG; TrojanRAG; MIA; fairness papers |
| Defense Maturation | 2025 | DP-RAG; RIDDLE; Mirabel; RAGPart/RAGMask; Rosati adaptive; traceback |
| Taxonomy + Consolidation | 2026 | RAG security taxonomy; PIDP; sparse attention; comprehensive reviews |

---

## Reading List (Priority 1-2)

### Must-Read (Priority 1)

1. [[sources/2020-lewis-rag]] -- Foundational RAG architecture
2. [[sources/2024-zou-poisonedrag]] -- Seminal corpus poisoning; defines the attack model
3. [[sources/2023-greshake-indirect-prompt-injection]] -- Introduced IPI attack class
4. [[sources/2025-rosati-attacker-moves-second]] -- Adaptive attacks; proves heuristic defenses fail
5. [[sources/2025-anon-rag-security-threat-model]] -- First formal RAG threat model

### High Priority (Priority 2)

6. [[sources/2024-anderson-mia-rag]] -- First MIA against RAG
7. [[sources/2026-anon-securing-rag-taxonomy]] -- Most comprehensive security taxonomy
8. [[sources/2024-anon-trustworthiness-rag-survey]] -- Multi-dimensional trust framework
9. [[sources/2024-anon-no-free-lunch-fairness]] -- No-free-lunch principle for RAG fairness
10. [[sources/2024-koga-dp-rag]] -- First formal DP defense
11. [[sources/2023-asai-self-rag]] -- Self-RAG adaptive retrieval architecture
