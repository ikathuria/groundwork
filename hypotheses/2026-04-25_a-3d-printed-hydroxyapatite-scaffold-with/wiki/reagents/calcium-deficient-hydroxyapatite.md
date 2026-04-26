---
type: reagent
slug: calcium-deficient-hydroxyapatite
aliases: [CDHA, calcium-deficient HA, non-stoichiometric hydroxyapatite, Ca/P<1.67 HA]
cas: "n/a (compositional class; nominal CAS 12167-74-7 sometimes used)"
formula: Ca10-x(HPO4)x(PO4)6-x(OH)2-x  (0 < x ≤ 1)
suppliers:
  - name: Sigma-Aldrich (Merck)
    catalog: "via custom synthesis; closest off-the-shelf is HA 21223 with documented Ca/P < 1.67"
    grade: "research"
  - name: Plasma Biotal
    catalog: "Captal CDHA grades"
    grade: "biomedical, Ca/P ~1.5"
  - name: in-house precipitation
    catalog: "from Ca(NO3)2 + (NH4)2HPO4 at sub-stoichiometric Ca/P"
storage: room-temperature, dry, sealed
hazards: low
known_failure_modes: [HA-stoichiometry-affects-resorption, batch-to-batch-HA-stoichiometry-variation, HA-phase-decomposition-during-sintering]
sources: [2017-eliaz, 2020-wang, 2024-wang, 2026-thammarakcharoen, 2008-palmer]
tags: [calcium-phosphate, bioceramic, resorbable, biomimetic]
created: 2026-04-25
updated: 2026-04-25
---

# Calcium-deficient hydroxyapatite (CDHA)

A non-stoichiometric apatite with Ca/P molar ratio below the stoichiometric 1.67 (typically 1.5–1.65). CDHA is the closer chemical analogue of biogenic bone mineral than stoichiometric HA — bone apatite is itself non-stoichiometric, carbonate-substituted, and OH-deficient (per [[../sources/2008-palmer-biomimetic-systems-for-hydroxyapatite-mi]]). Used in scaffolds where higher resorbability and bioactivity are desired.

## Properties

- **Formula:** Ca₁₀₋ₓ(HPO₄)ₓ(PO₄)₆₋ₓ(OH)₂₋ₓ for 0 < x ≤ 1
- **Ca/P:** typically 1.5–1.65 (at x = 1, Ca/P = 1.5)
- **Thermal behaviour:** on sintering >700 °C, CDHA decomposes to a biphasic HA + β-TCP mixture proportional to its calcium deficiency. This is the basis for one route to engineered [[../reagents/biphasic-calcium-phosphate]].
- **Solubility:** higher than stoichiometric HA at physiological pH; intermediate between HA and β-TCP.

## Common uses in this hypothesis space

- **Resorbable HA scaffold matrix** when slow HA resorption is undesirable. [[../sources/2024-wang-polydopamine-functionalized-calcium-defi]] uses CDHA scaffolds functionalised with polydopamine + doxorubicin for bone-tumour repair.
- **Precursor route to BCP**: precipitating CDHA at controlled Ca/P then sintering yields a HA/β-TCP biphasic ceramic with composition tuned by x.
- **More biomimetic surface chemistry**: closer to native bone mineral, supporting better cell-material interactions in some studies.

## Suppliers / catalog

| Supplier | Catalog | Notes |
|---|---|---|
| Sigma-Aldrich | 21223 (with Ca/P verified <1.67) | usually de facto CDHA depending on lot; verify Ca/P by EDX/ICP |
| Plasma Biotal | Captal CDHA grades | controlled Ca/P |
| In-house | wet-precipitation route | Ca(NO₃)₂ + (NH₄)₂HPO₄ at Ca/P < 1.67, ageing in mother liquor |

## Alternatives

- [[../reagents/hydroxyapatite]] — stoichiometric Ca/P = 1.67; less resorbable.
- [[../reagents/beta-tricalcium-phosphate]] — Ca/P = 1.5; the limit of calcium deficiency, distinct phase.
- [[../reagents/biphasic-calcium-phosphate]] — engineered HA + β-TCP mixture; can be obtained by sintering CDHA.

## Gotchas / things to watch for

- [[../failure-modes/HA-stoichiometry-affects-resorption]] — CDHA is intrinsically more resorbable than stoichiometric HA; matched-chemistry comparisons must verify Ca/P, not just nominal name.
- [[../failure-modes/batch-to-batch-HA-stoichiometry-variation]] — commercial CDHA varies lot-to-lot more than stoichiometric HA; in-house precipitation gives tighter control.
- [[../failure-modes/HA-phase-decomposition-during-sintering]] — CDHA above ~700 °C predictably yields HA + β-TCP; this is sometimes intentional (BCP synthesis) but a confounder if a "pure HA scaffold" claim is made.

## Sources

- [[../sources/2017-eliaz-calcium-phosphate-bioceramics-a-review-o]] — CDHA in the CaP family; processing routes.
- [[../sources/2020-wang-3d-printing-of-bone-tissue-engineering-s]] — CDHA in 3D-printed scaffolds.
- [[../sources/2024-wang-polydopamine-functionalized-calcium-defi]] — CDHA scaffolds functionalised with polydopamine.
- [[../sources/2026-thammarakcharoen-comprehensive-toxicological-evaluation-o]] — Ca/P consistent with non-stoichiometric HA; toxicology profile.
- [[../sources/2008-palmer-biomimetic-systems-for-hydroxyapatite-mi]] — biogenic apatite is non-stoichiometric; biomimetic motivation for CDHA.
