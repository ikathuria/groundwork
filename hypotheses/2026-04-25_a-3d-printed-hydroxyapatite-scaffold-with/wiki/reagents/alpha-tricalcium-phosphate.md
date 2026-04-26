---
type: reagent
slug: alpha-tricalcium-phosphate
aliases: [α-TCP, alpha-TCP, α-Ca3(PO4)2]
cas: 12028-21-6
formula: Ca3(PO4)2
molecular_weight: 310.18
suppliers:
  - name: Sigma-Aldrich (Merck)
    catalog: "synthesised in-house from β-TCP at >1125 °C and quenched"
    grade: "research"
  - name: Innotere
    catalog: "α-TCP for cement formulations"
    grade: "biomedical"
storage: room-temperature, dry, sealed (metastable, surface hydrates)
hazards: low
known_failure_modes: [HA-phase-decomposition-during-sintering, batch-to-batch-HA-stoichiometry-variation]
sources: [2017-eliaz, 2024-wang, 2025-de-carvalho, 2008-palmer, 2015-baino]
tags: [calcium-phosphate, bioceramic, cement-precursor]
created: 2026-04-25
updated: 2026-04-25
---

# α-Tricalcium phosphate (α-TCP)

The high-temperature polymorph of Ca₃(PO₄)₂. Same formula as [[../reagents/beta-tricalcium-phosphate]] but a different crystal structure, formed by heating β-TCP above ~1125 °C and quenching. α-TCP is metastable at room temperature and rapidly hydrolyses in aqueous media to [[../reagents/calcium-deficient-hydroxyapatite]], making it the basis of self-setting calcium-phosphate bone cements.

## Properties

- **CAS:** 12028-21-6
- **Formula:** Ca₃(PO₄)₂
- **Molecular weight:** 310.18 g/mol
- **Crystal system:** monoclinic (P2₁/a)
- **Stability:** metastable at room temperature; hydrolyses to CDHA in days under physiological conditions.

## Common uses in this hypothesis space

- **Self-setting CaP cement precursor** — α-TCP + water → CDHA in situ; can be 3D-printed via DIW of cement paste then allowed to harden by hydrolysis without sintering.
- **Phase to avoid** in sintered HA scaffolds — α-TCP appearing in XRD is a sign of over-sintering above ~1300 °C.
- **Comparator** in CaP-family characterisation studies.

## Suppliers / catalog

| Supplier | Catalog | Notes |
|---|---|---|
| In-house | β-TCP heat-treated >1125 °C and quenched | most academic sources |
| Innotere | α-TCP for cements | biomedical grade |

## Alternatives

- [[../reagents/beta-tricalcium-phosphate]] — the stable polymorph at room temperature.
- [[../reagents/calcium-deficient-hydroxyapatite]] — the hydrolysis product of α-TCP; what self-setting cements form.

## Gotchas / things to watch for

- [[../failure-modes/HA-phase-decomposition-during-sintering]] — α-TCP signals over-sintering in HA scaffolds; reject or re-fire.
- [[../failure-modes/batch-to-batch-HA-stoichiometry-variation]] — α-TCP commercial powders may revert to β-TCP on storage if not kept dry.

## Sources

- [[../sources/2017-eliaz-calcium-phosphate-bioceramics-a-review-o]] — α-TCP in the CaP family; phase diagram.
- [[../sources/2024-wang-polydopamine-functionalized-calcium-defi]] — α-TCP in cement / CDHA precursor context.
- [[../sources/2025-de-carvalho-three-dimensional-printing-of-calcium-ph]] — DIW of α-TCP-containing slurries.
- [[../sources/2008-palmer-biomimetic-systems-for-hydroxyapatite-mi]] — α/β polymorphs and hydrolysis chemistry.
- [[../sources/2015-baino-bioceramics-and-scaffolds-a-winning-comb]] — bioceramics review covering α-TCP.
