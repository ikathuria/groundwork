---
type: failure-mode
slug: Ni-barrier-pinholes
severity: high
frequency_estimate: "Cheng 2018 — 60 nm electroplated Ni shows pinhole-driven Cu₃Si formation at 300 °C, 120 nm holds. Continuous coverage thresholds reported in the literature: ~30 nm sputtered, ~45 nm electroless Ni-P (Jeon 2017), ≥120 nm electroplated Ni (Cheng)."
applies_to_methods: [electroplated-Ni-Cu-stack, electroless-Ni-deposition, Ni-sputter-deposition, light-induced-plating, SIMS-depth-profile]
applies_to_reagents: [nickel-sulfamate-bath, nickel-phosphorus-NiP-electroless, ITO-transparent-conductive-oxide]
applies_to_step_kinds: [plating, characterization]
sources: [2010-bartsch-lip-pvsc, 2014-rehman-nicu-plating-csi-review, 2018-electrochemsci-barrier-properties-electroplated-ni, 2018-pv-international-metallization-shj, 2022-arena-sundrive-copper-metallisation-demonstration, 2022-karas-cu-outdiffusion-damp-heat, fisher-AA8902018-nickel-sulfamate-hydrate]
tags: [Ni-barrier, pinholes, micro-voids, coverage, thickness-threshold, high]
created: 2026-04-26
updated: 2026-04-26
---

# Ni barrier pinholes / discontinuity

**Slug:** `failure-modes/Ni-barrier-pinholes` · **Severity:** high

## What it is

The Ni barrier in a Ni/Cu plated stack is only as good as its weakest spot. Pinholes (point discontinuities, ~10 nm to ~1 µm), micro-voids (Geissbühler 2018 reports these as the dominant adhesion-loss mechanism), and grain-boundary fast-paths constitute discrete leakage pathways through which Cu can reach the underlying TCO or c-Si during plating, anneal, or accelerated aging. Pinhole density is current-density and additive-dependent; sulfamate Ni baths are engineered for low-stress, low-pinhole films, but no electroplated Ni at sub-100 nm is pinhole-free without verification. **This is the failure mode that, per Cheng 2018, threatens the hypothesis's sub-100 nm Ni claim** — the canonical contradiction in the open-questions section of `hypothesis.md`.

## How it manifests

- **Cu₃Si nucleation at pinhole sites** under thermal stress (Cheng 2018: 60 nm Ni shows Cu₃Si peaks at 300 °C — pinholes are the proximate failure mechanism). See [[failure-modes/Cu3Si-formation-at-Si-interface]].
- **Local Cu ingress to c-Si** under DH, surfaced by SIMS as discrete high-Cu regions and by EL as dark spots under specific fingers (Karas 2022).
- **Adhesion loss / micro-void formation** in plated Ni adhesion layers on TCO; Geissbühler 2018 reports "evidence of micro-voids has been found, which might lead to reduced finger adhesion." See [[failure-modes/finger-adhesion-loss-after-DH]].
- **TCO pitting at pinhole sites** when the Cu-plating step is run with a discontinuous Ni layer — the acid Cu bath (pH ≈ 1) attacks ITO at any exposure. See [[failure-modes/TCO-pitting-during-plating]].
- **Cu-displacement decoration** of pinholes when the Ni-coated wafer is briefly immersed in a CuSO₄ test solution before the plating run (the standard pre-flight QC).

## How to detect it

- **Cu-displacement decoration test** before bulk Cu plating — immerse the Ni-coated TCO wafer in dilute CuSO₄ for 30–60 s; Cu metal preferentially deposits at any pinhole exposing TCO or Si. Optical / SEM inspection then quantifies pinhole density (counts/cm²).
- **SEM cross-section of Ni layer** at the pre-Cu-plating stage; look for discontinuous coverage on textured pyramids (the worst case). Jeon 2017 reports 45 nm electroless Ni-P is the threshold for continuous coverage on textured Si.
- **XRD on the Ni / Cu stack after thermal stress** — Cheng 2018's protocol: track Cu₃Si peak intensity at 300/400/500 °C anneals as a proxy for Ni barrier integrity.
- **STEM/EDS line-scan** through finger cross-section after DH — look for Cu signal in the Ni layer or Ni/Si interface at discrete locations (vs uniform).
- **SIMS depth profile** at multiple lateral positions — [[methods/SIMS-depth-profile]] integrates the pinhole signature into a 1D Cu-in-c-Si signal that may not show without spatial resolution.
- **EL imaging post-DH** — [[methods/EL-electroluminescence-imaging]]: dark spots localising under specific finger segments hint at pinhole-driven local degradation.

## Mitigation

- **Ni thickness ≥120 nm** (Cheng 2018) for thermal budgets to 300 °C; even sulfamate Ni at 60 nm fails the Cu₃Si test. The hypothesis's sub-100 nm Ni framing is most defensible at the 80–100 nm upper bound, not 30–60 nm.
- **Electroless NiP (Jeon 2017)** — continuous above 45 nm thickness, includes phosphorus that gives a more amorphous, less grain-boundary-rich barrier. Use [[reagents/nickel-phosphorus-NiP-electroless]] with HF activation to remove native SiO₂.
- **Skip the Ni layer entirely** — SunDrive (2022) and Lachowicz (2024) demonstrate that the SHJ TCO + a-Si:H stack functions as the Cu barrier without electroplated Ni, eliminating pinhole as a failure mode. This is the SHJ-specific consensus the hypothesis should consider in a "Ni-free" arm.
- **Sputtered Ni or Cu/Al PVD seed** — Hatt's NOBLE route uses PVD seed; sputtered films at ~30 nm can be continuous but require capital equipment ([[methods/Ni-sputter-deposition]]).
- **Pulse plating rather than DC** — pulsed Ni (forward/reverse cycle) reduces grain size and can lower pinhole density; Hatt 2019 uses 6 A/dm² pulse, 15 ms forward / 1 ms reverse for the Cu step.
- **Bath additive control** — [[reagents/nickel-sulfamate-bath]] requires boric acid pH buffer and chloride-free pellets; out-of-spec chloride or pH drift increases stress and pinhole density.

## Where it applies

- Methods: [[methods/electroplated-Ni-Cu-stack]], [[methods/electroless-Ni-deposition]], [[methods/Ni-sputter-deposition]], [[methods/light-induced-plating]]
- Reagents: [[reagents/nickel-sulfamate-bath]], [[reagents/nickel-phosphorus-NiP-electroless]], [[reagents/ITO-transparent-conductive-oxide]]
- Step kinds: plating, anneal, characterization

## Severity rationale

High. Pinholes are the *physical mechanism* through which the Ni barrier fails; they directly cause the critical failure modes [[failure-modes/Cu-diffusion-into-c-Si]] and [[failure-modes/Cu3Si-formation-at-Si-interface]]. Severity is high rather than critical because (a) pinholes are detectable pre-plating (Cu-displacement decoration), so this is a tractable QC problem, and (b) the SHJ TCO + a-Si:H provides a backup barrier that converts a barrier-thickness problem into a "verify TCO continuity" problem (which is structurally easier).

## Citing sources

- [[sources/2018-electrochemsci-barrier-properties-electroplated-ni]] — Cheng et al. directly tests the thickness threshold: 60 nm fails, 120 nm holds. The canonical reference for this failure mode.
- [[sources/2010-bartsch-lip-pvsc]] — Bartsch: "if the nickel layer is insufficient regarding certain parameters (e.g. thickness, coverage, homogeneity), the diffusion inhibiting effect is diminished."
- [[sources/2014-rehman-nicu-plating-csi-review]] — Rehman: "adequate thickness and evenness over the entire front side patterned grid are the basic requirements"; pinhole-free coverage is the gating quality.
- [[sources/2018-pv-international-metallization-shj]] — Geissbühler: "even with the addition of a nickel-plated adhesion layer, evidence of micro-voids has been found"; physically the same phenomenon as pinholes.
- [[sources/2022-arena-sundrive-copper-metallisation-demonstration]] — SunDrive's no-Ni route renders this failure mode inapplicable; an architectural workaround.
- [[sources/2022-karas-cu-outdiffusion-damp-heat]] — Karas: Ni barrier between Cu and Si discussed; Cu still detected in c-Si after DH despite the barrier — pinhole / grain-boundary leakage is the proposed mechanism.
- [[sources/fisher-AA8902018-nickel-sulfamate-hydrate]] — the bath chemistry that produces low-stress, low-pinhole films when run on spec.
