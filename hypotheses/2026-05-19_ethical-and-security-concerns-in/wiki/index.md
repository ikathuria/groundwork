---
type: index
topic: "Ethical and Security Concerns in RAG (Retrieval-Augmented Generation)"
question: "What are the ethical and security concerns in RAG (Retrieval-Augmented Generation)?"
compiled: 2026-05-19
sources_count: 36
status: wiki
---

# Wiki Index: Ethical and Security Concerns in RAG

**Research question**: What are the ethical and security concerns in RAG (Retrieval-Augmented Generation)?

This wiki covers 36 sources (28 papers + 8 surveys) spanning three major concern clusters: **security attacks**, **privacy threats**, and **ethical/fairness issues** in RAG systems. The foundational RAG paper ([[sources/2020-lewis-rag]]) and Self-RAG ([[sources/2023-asai-self-rag]]) provide the architecture baseline; all remaining sources address concerns, attacks, or defenses within that baseline.

---

## Sources by Category

### Foundational RAG Papers

| ID | Title | Year |
|----|-------|------|
| [[sources/2020-lewis-rag]] | Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks | 2020 |
| [[sources/2023-asai-self-rag]] | Self-RAG: Learning to Retrieve, Generate and Critique | 2023 |

### Hallucination & Faithfulness

| ID | Title | Year |
|----|-------|------|
| [[sources/2024-wu-ragtruth]] | RAGTruth: A Hallucination Corpus for Trustworthy RAG LMs | 2024 |

### Security: Corpus Poisoning Attacks

| ID | Title | Year |
|----|-------|------|
| [[sources/2024-zou-poisonedrag]] | PoisonedRAG: Knowledge Corruption Attacks to RAG | 2024 |
| [[sources/2024-xue-badrag]] | BadRAG: Identifying Vulnerabilities in RAG of LLMs | 2024 |
| [[sources/2024-chen-trojanrag]] | TrojanRAG: RAG Can Be Backdoor Driver in LLMs | 2024 |
| [[sources/2025-anon-practical-poisoning]] | Practical Poisoning Attacks against RAG | 2025 |
| [[sources/2026-anon-semantic-chameleon]] | Semantic Chameleon: Corpus-Dependent Poisoning and Defenses | 2026 |
| [[sources/2026-anon-pidp-attack]] | PIDP-Attack: Combining Prompt Injection with Database Poisoning | 2026 |

### Security: Poisoning Defenses

| ID | Title | Year |
|----|-------|------|
| [[sources/2025-anon-defending-knowledge-poisoning]] | Defending Against Knowledge Poisoning Attacks During RAG | 2025 |
| [[sources/2025-anon-ragpart-ragmask]] | RAGPart & RAGMask: Retrieval-Stage Defenses Against Corpus Poisoning | 2025 |
| [[sources/2026-anon-sparse-attention-poisoning]] | Addressing Corpus Knowledge Poisoning Using Sparse Attention | 2026 |
| [[sources/2025-anon-traceback-poisoning]] | Traceback of Poisoning Attacks to RAG | 2025 |
| [[sources/2024-anon-robust-rag-poisoning-eval]] | Towards More Robust RAG: Evaluating Under Adversarial Poisoning | 2024 |

### Security: Backdoor & Prompt Injection Attacks

| ID | Title | Year |
|----|-------|------|
| [[sources/2023-greshake-indirect-prompt-injection]] | Not What You've Signed Up For: Compromising LLM-Integrated Apps with IPI | 2023 |
| [[sources/2024-anon-backdoored-retrievers]] | Backdoored Retrievers for Prompt Injection Attacks on RAG | 2024 |
| [[sources/2024-peng-data-extraction-backdoors]] | Data Extraction Attacks in RAG via Backdoors | 2024 |
| [[sources/2025-anon-retriever-backdoors-code]] | Security Threats of Retriever Backdoors in Retrieval-Augmented Code Generation | 2025 |
| [[sources/2025-rosati-attacker-moves-second]] | The Attacker Moves Second: Stronger Adaptive Attacks Bypass Defenses | 2025 |

### Privacy: Membership Inference

| ID | Title | Year |
|----|-------|------|
| [[sources/2024-anderson-mia-rag]] | Is My Data in Your Retrieval Database? MIA Against RAG | 2024 |
| [[sources/2025-anon-riddle-mia-rag]] | Riddle Me This! Stealthy Membership Inference for RAG | 2025 |
| [[sources/2025-anon-safeguarding-privacy-mia]] | Safeguarding Privacy of Retrieval Data against MIA | 2025 |

### Privacy: Differential Privacy & Defenses

| ID | Title | Year |
|----|-------|------|
| [[sources/2024-koga-dp-rag]] | Privacy-Preserving RAG with Differential Privacy | 2024 |
| [[sources/2025-anon-dp-synthetic-text-rag]] | Differentially Private Synthetic Text Generation for RAG | 2025 |
| [[sources/2025-anon-privacy-aware-decoding]] | Privacy-Aware Decoding: Mitigating Privacy Leakage in RAG | 2025 |

### Ethics: Fairness & Bias

| ID | Title | Year |
|----|-------|------|
| [[sources/2024-anon-no-free-lunch-fairness]] | No Free Lunch: RAG Undermines Fairness in LLMs | 2024 |
| [[sources/2024-wu-does-rag-unfairness]] | Does RAG Introduce Unfairness in LLMs? | 2024 |

### Surveys

| ID | Title | Year |
|----|-------|------|
| [[sources/2023-huang-hallucination-survey]] | A Survey on Hallucination in Large Language Models | 2023 |
| [[sources/2024-anon-trustworthiness-rag-survey]] | Trustworthiness in RAG Systems: A Survey | 2024 |
| [[sources/2025-anon-hallucination-mitigation-survey]] | Mitigating Hallucination in LLMs: Survey on RAG, Reasoning, Agentic | 2025 |
| [[sources/2025-anon-rag-comprehensive-survey]] | RAG: A Comprehensive Survey of Architectures, Enhancements, Robustness | 2025 |
| [[sources/2025-anon-trustworthy-rag-survey]] | Towards Trustworthy RAG for LLMs: A Survey | 2025 |
| [[sources/2025-anon-rag-security-threat-model]] | RAG Security and Privacy: Formalizing the Threat Model | 2025 |
| [[sources/2026-anon-securing-rag-taxonomy]] | Securing RAG: A Taxonomy of Attacks, Defenses, and Future Directions | 2026 |
| [[sources/2026-anon-towards-secure-rag-review]] | Towards Secure RAG: A Comprehensive Review of Threats, Defenses | 2026 |
| [[sources/2026-anon-lr-pi-defenses]] | Systematic Literature Review on LLM Defenses Against Prompt Injection | 2026 |

---

## Methods

| Slug | Description |
|------|-------------|
| [[methods/retrieval-augmented-generation]] | Core RAG pipeline: retrieval + generation |
| [[methods/dense-passage-retrieval]] | Bi-encoder dense retrieval (DPR) |
| [[methods/hybrid-retrieval]] | BM25 + dense combined retrieval |
| [[methods/self-rag]] | Adaptive retrieval with reflection tokens |
| [[methods/maximum-inner-product-search]] | MIPS / FAISS nearest-neighbor search |
| [[methods/knowledge-poisoning-attack]] | Corpus injection to manipulate outputs |
| [[methods/backdoor-attack]] | Trigger-conditioned hidden attacks |
| [[methods/prompt-injection]] | Instruction override via adversarial input |
| [[methods/indirect-prompt-injection]] | Instruction injection via retrieved content |
| [[methods/membership-inference-attack]] | Infer database membership from outputs |
| [[methods/differential-privacy]] | Formal privacy via noise injection |
| [[methods/retrieval-filtering]] | Screen retrieved passages for adversarial content |
| [[methods/hallucination-detection]] | Detect unsupported claims in RAG outputs |
| [[methods/fairness-evaluation]] | Measure output equity across demographic groups |
| [[methods/adaptive-attack-evaluation]] | Evaluate defenses against adaptive adversaries |
| [[methods/poisoning-traceback]] | Post-hoc forensic attribution of poisoning |
| [[methods/threat-modeling]] | Systematic RAG attack surface analysis |

---

## Concepts

| Slug | Description |
|------|-------------|
| [[concepts/hallucination]] | LLM generation of unsupported/incorrect content |
| [[concepts/faithfulness]] | Grounding responses in retrieved evidence |
| [[concepts/knowledge-poisoning]] | Injecting adversarial documents into RAG corpus |
| [[concepts/corpus-poisoning]] | Corpus-level variant of knowledge poisoning |
| [[concepts/indirect-prompt-injection]] | Adversarial instructions in retrieved data |
| [[concepts/backdoor-in-rag]] | Trigger-activated hidden malicious behavior |
| [[concepts/privacy-leakage]] | Unintended disclosure of corpus contents |
| [[concepts/membership-inference]] | Inferring document presence in corpus |
| [[concepts/data-extraction]] | Recovering verbatim private corpus content |
| [[concepts/differential-privacy-rag]] | Formal DP guarantees for RAG privacy |
| [[concepts/formal-privacy-guarantees]] | Certified mathematical privacy bounds |
| [[concepts/bias-amplification]] | RAG amplifying corpus demographic biases |
| [[concepts/rag-fairness]] | Equitable RAG outputs across groups |
| [[concepts/demographic-bias]] | Corpus-level representation disparities |
| [[concepts/adversarial-robustness]] | Resistance to adversarial inputs/corpus |
| [[concepts/rag-attack-surface]] | All attack vectors in the RAG pipeline |
| [[concepts/supply-chain-risk]] | Compromised pre-trained retrieval models |
| [[concepts/defense-evasion]] | Attack strategies bypassing defenses |
| [[concepts/trustworthiness]] | Multi-dimensional RAG reliability |
| [[concepts/data-provenance]] | Tracing responses to source documents |
| [[concepts/access-control-rag]] | Document-level retrieval permissions |
| [[concepts/retrieval-architecture]] | Design choices for retrieval systems |
| [[concepts/adaptive-retrieval]] | On-demand retrieval triggered by need |
| [[concepts/parametric-vs-nonparametric-knowledge]] | LLM weights vs. external corpus knowledge |

---

## Datasets

| Slug | Primary Use |
|------|-------------|
| [[datasets/ragtruth-corpus]] | Hallucination benchmark for RAG |
| [[datasets/nq-dataset]] | Standard RAG / security evaluation QA |
| [[datasets/ms-marco]] | Retrieval benchmarking, poisoning evaluation |
| [[datasets/hotpotqa]] | Multi-hop reasoning evaluation |
| [[datasets/popqa]] | Rare entity factuality evaluation |
| [[datasets/asqa]] | Long-form QA with citation attribution |
| [[datasets/winobias]] | Gender bias fairness evaluation |
| [[datasets/bbq-dataset]] | Social bias fairness evaluation |
| [[datasets/codexglue]] | Code generation retrieval evaluation |
| [[datasets/fever]] | Fact verification |

---

## Open Problems

| Slug | Severity |
|------|----------|
| [[open-problems/rag-adversarial-robustness]] | critical |
| [[open-problems/rag-privacy-guarantees]] | high |
| [[open-problems/detection-of-poisoned-retrieval]] | high |
| [[open-problems/rag-fairness]] | high |
| [[open-problems/transferability-llm-safety-to-rag]] | high |
| [[open-problems/hallucination-in-rag]] | high |
| [[open-problems/governance-data-provenance]] | medium |
| [[open-problems/rag-faithfulness-guarantees]] | medium |

---

## Key Themes

1. **Security threats dominate the 2024–2026 literature**: Corpus poisoning ([[concepts/knowledge-poisoning]]) is the most studied attack, with PoisonedRAG ([[sources/2024-zou-poisonedrag]]) spawning a large defense literature.

2. **Privacy via membership inference is newly active**: The MIA-against-RAG literature emerged in 2024–2025, with RIDDLE ([[sources/2025-anon-riddle-mia-rag]]) showing that even agent-based defenses are brittle.

3. **Fairness is the least studied dimension**: Only two primary papers ([[sources/2024-anon-no-free-lunch-fairness]], [[sources/2024-wu-does-rag-unfairness]]) directly address RAG fairness; surveys consistently flag it as under-explored.

4. **No certified defense exists for any threat**: All defenses are heuristic and fail under adaptive attacks ([[sources/2025-rosati-attacker-moves-second]]).

5. **Multi-dimensional trustworthiness is the overarching frame**: Surveys converge on the view that RAG security, privacy, and fairness must be addressed jointly, not separately ([[sources/2024-anon-trustworthiness-rag-survey]], [[sources/2025-anon-trustworthy-rag-survey]]).
