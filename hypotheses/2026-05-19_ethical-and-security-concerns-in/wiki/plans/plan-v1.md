---
type: plan
id: plan-v1
created: 2026-05-19
derived_from: hypothesis.md
sources_used: 36
landscape_verdict: active
themes: 5
gaps: 6
reading_list_count: 22
priority_1_count: 5
aesthetic: dark-security-systems
---

# Plan v1 — Ethical and Security Concerns in RAG

*Human-readable mirror of `plan/plan.json`. See that file for the canonical structured data consumed by the brief renderer.*

**Brief**: `hypotheses/2026-05-19_ethical-and-security-concerns-in/plan/index.html`

---

## Landscape

**Verdict**: Active — RAG security is one of the most rapidly developing sub-fields of LLM safety (2024–2026). High attack-side progress, growing defense literature, wide-open core problems (certified robustness, formal privacy, fairness).

**Landmark references**:
- [[../sources/2020-lewis-rag]] — foundational RAG architecture
- [[../sources/2024-zou-poisonedrag]] — seminal corpus poisoning attack
- [[../sources/2023-greshake-indirect-prompt-injection]] — seminal indirect prompt injection

---

## Key Themes

1. **Corpus Poisoning: The Dominant Attack Vector** — [[../sources/2024-zou-poisonedrag]], [[../sources/2024-xue-badrag]], [[../sources/2024-chen-trojanrag]], [[../sources/2025-anon-practical-poisoning]]
2. **Indirect Prompt Injection via Retrieved Content** — [[../sources/2023-greshake-indirect-prompt-injection]], [[../sources/2024-anon-backdoored-retrievers]], [[../sources/2026-anon-pidp-attack]]
3. **Privacy via Membership Inference Against Private Corpora** — [[../sources/2024-anderson-mia-rag]], [[../sources/2025-anon-riddle-mia-rag]], [[../sources/2024-koga-dp-rag]]
4. **Fairness: The Neglected Dimension** — [[../sources/2024-anon-no-free-lunch-fairness]], [[../sources/2024-wu-does-rag-unfairness]]
5. **Multi-Dimensional Trustworthiness as the Unifying Frame** — [[../sources/2024-anon-trustworthiness-rag-survey]], [[../sources/2026-anon-securing-rag-taxonomy]]

---

## Research Gaps

1. No certified adversarial defense for any RAG threat (**critical**)
2. Privacy-utility trade-off has no good solution (**high**)
3. RAG fairness has no published defense (**high**)
4. LLM safety alignment does not transfer to RAG (**high**)
5. Evaluation benchmark fragmentation (**medium**)
6. Governance and data provenance unsolved (**medium**)

---

## Open Problems

- [[../open-problems/rag-adversarial-robustness]] (critical)
- [[../open-problems/rag-privacy-guarantees]] (high)
- [[../open-problems/detection-of-poisoned-retrieval]] (high)
- [[../open-problems/rag-fairness]] (high)
- [[../open-problems/transferability-llm-safety-to-rag]] (high)
- [[../open-problems/hallucination-in-rag]] (high)
- [[../open-problems/governance-data-provenance]] (medium)
- [[../open-problems/rag-faithfulness-guarantees]] (medium)

---

## Priority 1 Reading List

1. [[../sources/2020-lewis-rag]] — Foundational RAG architecture establishing the attack surface
2. [[../sources/2024-zou-poisonedrag]] — Seminal corpus poisoning attack; defines the dual-condition framework
3. [[../sources/2023-greshake-indirect-prompt-injection]] — Foundational IPI demonstrated on Bing Chat, GPT-4
4. [[../sources/2025-rosati-attacker-moves-second]] — Establishes adaptive adversary as correct evaluation standard
5. [[../sources/2025-anon-rag-security-threat-model]] — First formal three-layer RAG threat model
