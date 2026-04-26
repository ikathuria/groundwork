---
type: failure-mode
slug: Cu-diffusion-into-c-Si
severity: critical
frequency_estimate: "always present below detection limit if barrier discontinuous; quantitative threshold per Lindroos 2015: a 400 µm B-doped p-Si wafer ([B]=4×10¹⁵ cm⁻³) is fully penetrated by Cu in <11 h at room temperature once Cu reaches the c-Si surface"
applies_to_methods: [Cu-electroplating-acid-bath, electroplated-Ni-Cu-stack, light-induced-plating, electroless-Ni-deposition, SIMS-depth-profile]
applies_to_reagents: [acid-Cu-sulfate-bath, nickel-sulfamate-bath, ITO-transparent-conductive-oxide, a-Si-H-passivation]
applies_to_step_kinds: [plating, cap-deposition, accelerated-aging, characterization]
sources: [2010-bartsch-lip-pvsc, 2014-rehman-nicu-plating-csi-review, 2015-lindroos-cu-lid-aalto-thesis, 2017-jeon-electroless-ni-front-metallization, 2018-electrochemsci-barrier-properties-electroplated-ni, 2018-pvtech-metallization-shj-cells-modules, 2022-arena-sundrive-copper-metallisation-demonstration, 2022-karas-cu-outdiffusion-damp-heat, 2024-nrel-getting-ahead-of-curve-pv-assessment, 2025-fraunhoferise-transition-ag-cu-screen-printed-shj, 2025-yacouba-shj-silver-free-metallization-progPV, fisher-AA8902018-nickel-sulfamate-hydrate, fisher-AC197730010-cu-sulfate-pentahydrate-sds]
tags: [Cu, diffusion, c-Si, barrier, lifetime, critical]
created: 2026-04-26
updated: 2026-04-26
---

# Cu in-diffusion into crystalline silicon

**Slug:** `failure-modes/Cu-diffusion-into-c-Si` · **Severity:** critical

## What it is

Copper has the highest known interstitial diffusivity of any 3d transition metal in silicon — D_Cu,i = (3.0 ± 0.3)×10⁻⁴ exp(−0.18 eV / k_BT) cm²/s in intrinsic and n-type Si (Lindroos 2015, Eq. 2.1) — and it forms deep-level recombination centres (Cu_i at E_C −0.15 to −0.20 eV; Cu_s at E_V +0.20–0.46 eV; Cu₃Si precipitate band E_C −(0.15–0.58) eV). Once Cu reaches bare c-Si, even sub-ppb concentrations collapse minority-carrier lifetime irreversibly and propagate through the wafer at room temperature. In a Ni/Cu plated SHJ stack, the Ni layer (and the underlying TCO + a-Si:H) is the only thing between the Cu finger and the silicon bulk; pinholes, grain-boundary fast paths, or barrier dissolution constitute device-killer failures.

## How it manifests

- **Voc / pFF / J02 degradation** — the canonical electrical signature. Cu interstitials and Cu₃Si precipitates pin the bulk minority-carrier lifetime; pFF and Suns-VOC drop, J02 rises >2× (Karas 2019/2022 reports pFF 82.1 → 77.0 % and J02 doubling at 2000 h DH on Cu-plated p-type cells with EVA encapsulant).
- **Bulk lifetime collapse under illumination** — Cu-LID; defects formed are stable at 200 °C and not annealable in damp-heat (see [[failure-modes/Cu-LID-light-induced-degradation]]).
- **SIMS Cu signal ≥ background at the c-Si surface and into the bulk.** Karas 2022 detected ~3× higher Cu surface concentration on Ni-Cu-Sn / EVA samples after 3500 h DH vs POE sister cells.
- **EL dark spots** localised under degraded fingers, especially after damp-heat or thermal cycling.

## How to detect it

- **SIMS depth profile** through finger and surrounding c-Si — gold standard. Use [[methods/SIMS-depth-profile]] with O₂⁺ primary beam, 60×60 µm raster, 19×19 µm detection area (Karas 2022 spec); detection limit ~10¹⁵ at/cm³. Threshold: any Cu signal above background at the c-Si interface flags a barrier breach.
- **Photoluminescence / minority-carrier lifetime** — [[methods/minority-carrier-lifetime-photoluminescence]] (μ-PCD, QSSPC, PL imaging). Compare illuminated-degraded vs annealed-recovered: if ΔLifetime persists at 200 °C anneal, the contaminant is Cu (Lindroos 2015 — defects stable at 200 °C, distinguishing from BO-LID).
- **Suns-VOC pFF tracking** at 0/250/500/750/1000 h DH checkpoints — [[methods/dark-IV-suns-Voc]]. Δ pFF > 1 %abs is the standard alarm threshold.
- **EL imaging** — [[methods/EL-electroluminescence-imaging]] at 8 A injection to localise dark regions before they show up in 1-sun IV.
- **Negative-corona-charging diagnostic** (Lindroos): if surface negative-charging eliminates the lifetime loss, the contaminant is Cu (BO-LID does not respond).

## Mitigation

- **Continuous Ni barrier ≥120 nm** for thermal budgets to 300 °C (Cheng 2018); 60 nm Ni shows Cu₃Si peaks already at 300 °C — the hypothesis's "sub-100 nm Ni" sits in the failure regime and must be verified pinhole-free pre-cap. Use [[methods/electroplated-Ni-Cu-stack]] with [[reagents/nickel-sulfamate-bath]] sulfamate chemistry for low-stress, low-pinhole films.
- **Rely on the SHJ TCO + a-Si:H stack as a co-barrier** — the SHJ-specific consensus (SunDrive ARENA 2022, Lachowicz 2024, Yacouba 2025): Cu plates directly on [[reagents/ITO-transparent-conductive-oxide]] and the TCO + a-Si:H provide the diffusion barrier without an electroplated Ni layer. Confirmed by stable pFF / Voc in 23–26 % SHJ cells with Cu paste or plated Cu and *no* Ni barrier.
- **Encapsulant choice** — replace EVA with [[reagents/POE-polyolefin-encapsulant]]: Karas 2019/2022 show ~3× lower Cu surface concentration in c-Si under POE vs EVA after 3500 h DH (acetic acid from EVA hydrolysis acts as a sink driving Cu outdiffusion).
- **Cap-layer engineering** — thicker Sn (Karas suggests Cu₆Sn₅ as self-limiting), Ni-doped Cu forming stable (Cu,Ni)₆Sn₅, or POE substitution.
- **HF activation prior to electroless Ni** (Jeon 2017) to remove native SiO₂ and ensure continuous Ni-silicide formation at the Si/Ni interface — prevents discontinuities that act as Cu fast paths.

## Where it applies

- Methods: [[methods/Cu-electroplating-acid-bath]], [[methods/electroplated-Ni-Cu-stack]], [[methods/light-induced-plating]], [[methods/electroless-Ni-deposition]], [[methods/SIMS-depth-profile]], [[methods/minority-carrier-lifetime-photoluminescence]]
- Reagents: [[reagents/acid-Cu-sulfate-bath]], [[reagents/nickel-sulfamate-bath]], [[reagents/ITO-transparent-conductive-oxide]], [[reagents/a-Si-H-passivation]]
- Step kinds: plating, cap-deposition, encapsulation, accelerated-aging, characterization

## Severity rationale

Critical. Lindroos 2015 establishes that Cu reaches the entire wafer at room temperature once it crosses into c-Si (sub-11 h transit through a 400 µm B-doped wafer at [B]=4×10¹⁵ cm⁻³); the resulting recombination centres are stable at 200 °C, so damp-heat aging *cannot* anneal the damage. Karas 2019/2022 provide the direct SIMS + pFF / J02 evidence on Cu-plated cells under EVA + DH. This is the dominant existential risk for the hypothesis: a single barrier breach kills cell efficiency permanently.

## Citing sources

- [[sources/2015-lindroos-cu-lid-aalto-thesis]] — quantitative Cu diffusivity / solubility / defect-level data; sub-ppb Cu causes lifetime collapse, defects stable at 200 °C.
- [[sources/2014-rehman-nicu-plating-csi-review]] — "Copper creates highly active recombination centers in silicon; an effective barrier is required."
- [[sources/2018-electrochemsci-barrier-properties-electroplated-ni]] — Cheng's 60 nm vs 120 nm Ni dichotomy at 300 °C; the contradiction at the heart of the hypothesis's sub-100 nm Ni framing.
- [[sources/2010-bartsch-lip-pvsc]] — Cu-only stacks degrade to 95 % relative pFF in 0.1–3 years at 80 °C; Ni barrier extends extrapolated lifetime to ~1000 years.
- [[sources/2017-jeon-electroless-ni-front-metallization]] — electroless Ni-P seed continuous above 45 nm; HF activation removes native SiO₂ to ensure barrier continuity.
- [[sources/2022-karas-cu-outdiffusion-damp-heat]] — direct SIMS evidence of Cu in c-Si of Ni-Cu-Sn / EVA samples after DH; ~3× higher than POE sister cells.
- [[sources/2022-arena-sundrive-copper-metallisation-demonstration]] — argues SHJ a-Si:H + TCO act as the Cu barrier without an Ni layer; passes 2000 h DH in glass-glass POE modules.
- [[sources/2018-pvtech-metallization-shj-cells-modules]] — "the TCO layer will already act as an efficient barrier to copper migration."
- [[sources/2024-nrel-getting-ahead-of-curve-pv-assessment]] — explicit reliability flag: "increased risk of degradation from copper ingress into the cell."
- [[sources/2025-fraunhoferise-transition-ag-cu-screen-printed-shj]] — Pingel lists Si-base contamination as the headline Cu-paste risk.
- [[sources/2025-yacouba-shj-silver-free-metallization-progPV]] — TCOs confirmed as effective Cu barriers via stable pFF / Voc on all-Cu-paste cells.
- [[sources/fisher-AA8902018-nickel-sulfamate-hydrate]] — the Ni-bath SDS that sources the barrier electrolyte.
- [[sources/fisher-AC197730010-cu-sulfate-pentahydrate-sds]] — the Cu source whose unbarriered version is the contamination pathway.
