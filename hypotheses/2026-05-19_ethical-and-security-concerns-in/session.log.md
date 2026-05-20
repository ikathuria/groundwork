# Session Log — 2026-05-19_ethical-and-security-concerns-in

## [2026-05-19 00:00] pass-2 | wiki-compile | Ethical and Security Concerns in RAG

Ran Pass 2 wiki compile for topic `2026-05-19_ethical-and-security-concerns-in`.

**Input**: 36 sources in `raw/` (28 papers, 8 surveys). No prior wiki existed.

**Output produced**:
- 36 source pages in `wiki/sources/`
- 17 method pages in `wiki/methods/`
- 24 concept pages in `wiki/concepts/`
- 14 dataset pages in `wiki/datasets/`
- 8 open-problem pages in `wiki/open-problems/`
- `wiki/index.md` (full catalog)
- `wiki/log.md` (wiki operation log)

**hypothesis.md updated**: `status: researching` → `status: wiki`, `sources_count: 0` → `sources_count: 36`

**Key findings from compile**:
1. Security concerns dominate 2024–2026 literature: corpus poisoning is the most studied attack class (PoisonedRAG, BadRAG, TrojanRAG, practical poisoning, traceback, RAGPart/RAGMask, sparse attention, semantic chameleon).
2. Privacy via MIA against RAG emerged as a new subfield in 2024–2025 (Anderson MIA, RIDDLE, Mirabel, DP-RAG, Privacy-Aware Decoding, DP-SynRAG).
3. Fairness is the least-studied concern: only 2 primary empirical papers (no-free-lunch, does-rag-unfairness).
4. No certified defense exists for any threat class; all defenses fail against adaptive adversaries (Rosati et al.).
5. The attacker-moves-second principle establishes the correct evaluation standard for future work.

**Topic ready for Pass 3** (research brief synthesis).

## [2026-05-19 12:00] plan | plan-v1
Total sources: 36. Themes: 5. Gaps: 6. Landscape: active.
Research Brief: hypotheses/2026-05-19_ethical-and-security-concerns-in/plan/index.html
Wiki bundle: 121 pages (257 KB). Index HTML: 353 KB.
Aesthetic: dark security/systems — slate canvas, crimson threats, teal defenses, amber gaps, Fraunces + JetBrains Mono.
Priority-1 reading list: 5 papers. Wiki drilldowns: 11 entries.
