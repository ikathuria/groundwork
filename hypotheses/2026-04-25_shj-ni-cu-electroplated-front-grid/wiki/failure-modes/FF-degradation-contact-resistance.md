---
type: failure-mode
slug: FF-degradation-contact-resistance
severity: high
frequency_estimate: "Hatt 2019/2021: NOBLE Cu/ITO contact resistivity 1.8–4.0 mΩ·cm² (i/n stack), 0.1–1 mΩ·cm² with optimized fs-laser variant. Lachowicz 2024: Cu paste on ITO 1.5 mΩ·cm². Yacouba 2025: Cu screen-print on ITO 10.28 mΩ·cm² (fine-line) — far above target. Hypothesis target: ≤2 mΩ·cm²."
applies_to_methods: [transfer-length-method, IV-curve-measurement, dark-IV-suns-Voc, four-point-probe-sheet-resistance, EL-electroluminescence-imaging, damp-heat-aging-1000h]
applies_to_reagents: [ITO-transparent-conductive-oxide, IWO-tungsten-doped-indium-oxide, AZO-aluminum-doped-zinc-oxide, acid-Cu-sulfate-bath, low-T-Ag-paste-generic-SHJ-grade, Cu-paste-low-temperature]
applies_to_step_kinds: [plate, anneal, measure]
sources: [2010-bartsch-lip-pvsc, 2012-nrel-aluminum-metallization-tlm-printed, 2014-rehman-nicu-plating-csi-review, 2017-jeon-electroless-ni-front-metallization, 2018-pv-international-metallization-shj, 2019-hatt-noble-bifacial-shj-aip, 2019-hatt-noble-shj-solrrl, 2019-karas-damp-heat-degradation-shj-cu, 2021-hatt-stable-cu-plated-shj-eupvsec, 2023-lachowicz-csem-stability-cu-plated-shj-mini-modules, 2023-taiyangnews-heterojunction-technology-report, 2023-tepner-printing-tech-csi-review, 2024-itrpv-15th-edition-roadmap, 2024-lachowicz-cu-plated-shj-aging-mini-modules, 2024-lorenz-cutting-edge-metallization-shj-fraunhofer, 2024-siliconpv-novel-shj-metallization-architectures, 2025-fraunhoferise-transition-ag-cu-screen-printed-shj, 2025-yacouba-shj-silver-free-metallization-progPV]
tags: [contact-resistivity, FF, series-resistance, TLM, hypothesis-target]
---

# FF degradation from contact-resistance rise

## What it is
The fill factor (FF) of a SHJ cell is gated by series resistance R_s, which has three additive components: lateral TCO sheet resistance, finger line resistance, and contact resistivity ρc at the ITO/metal interface. The hypothesis specifies ρc ≤2 mΩ·cm² — directly hitting the threshold below which series resistance no longer impacts FF for typical 50 µm finger pitch on industrial SHJ. ρc rises when the metal-TCO interface develops a chemical interlayer (oxide, hydroxide, fluoride) during processing or aging; line resistance rises when the Cu finger oxidises or develops voids (couples to [[Cu-finger-oxidation-damp-heat]] and [[Ni-Cu-line-resistance-rise-DH]]). Best-in-class current evidence: NOBLE plating reaches 0.1–1 mΩ·cm² ([[2021-hatt-stable-cu-plated-shj-eupvsec]]); Cu paste on ITO sits at 1.5 mΩ·cm² for screen-printed pads (Lachowicz 2024) but rises to 10.28 mΩ·cm² for fine-line Cu screen-print (Yacouba 2025).

## How it manifests
- ΔFF ≥0.5 %abs after 1000 h DH or thermal cycling; pFF unchanged → diagnostic of contact (not junction) degradation ([[2019-karas-damp-heat-degradation-shj-cu]]: pFF and FF must be tracked separately).
- R_s extracted from light IV rises while R_sh stable.
- Voc and Jsc unchanged (in pure contact-resistance failure).
- TLM scan shows ρc rising at outer fingers first (moisture-edge correlation) or uniformly (oxidation-driven).
- Lower line conductivity in 4-point-probe measurement.

## How to detect it
- [[../methods/transfer-length-method]] — direct ρc measurement; canonical setup uses 2 mm × 10 mm pads with variable spacing on ITO ([[2025-yacouba-shj-silver-free-metallization-progPV]]).
- [[../methods/four-point-probe-sheet-resistance]] for line resistance / R_sh.
- [[../methods/IV-curve-measurement]] — STC R_s extraction.
- [[../methods/dark-IV-suns-Voc]] — Suns-Voc gives pFF (junction-only); FF − pFF gap = R_s gap.
- [[../methods/EL-electroluminescence-imaging]] under low-injection — broken-finger / high-resistance fingers visible as dim segments.

## Mitigation (specific actions, not vague advice)
- Use NOBLE PVD-Cu seed (50–100 nm) on ITO before electroplating — Hatt 2019 reaches 1.8–4.0 mΩ·cm², Hatt 2021 demonstrates 0.1–1 mΩ·cm² with optimized fs-laser process.
- For TLM characterization, follow Yacouba 2025 protocol: 2 mm × 10 mm pads, variable spacing, on production-equivalent ITO (~75 nm).
- Specify 200 °C / 15 min recovery anneal post-PVD to repair sputter-induced ITO/a-Si:H interface defects ([[2019-hatt-noble-shj-solrrl]]).
- For paste routes: use AgCu (44–55 % Ag) with full Ag-shell continuity (Frasson 2024 measured 0.3 % Cu surface exposure by EDX).
- Avoid HF-rich pre-cleans on ITO — etches ITO and roughens the contact interface (couples to [[TCO-pitting-during-plating]]).
- Track FF every 250 h during DH; flag any 0.3 %abs FF drop with no pFF change.
- Specify acceptance: ρc ≤2 mΩ·cm² (TLM) and ΔFF ≤0.3 %abs after 1000 h DH ([[2024-itrpv-15th-edition-roadmap]] roadmap pushes ρc lower as finger width drops to 15 µm).

## Severity ranking justification
High: this is the central electrical KPI of the hypothesis ("≤2 mΩ·cm² and no measurable efficiency loss"). NOBLE plating already meets it on lab cells; the open question is whether this holds at module scale after 1000 h DH. Failures in this mode wipe 0.5–1 %abs efficiency, exceeding the hypothesis margin.

## Sources
- `[[2021-hatt-stable-cu-plated-shj-eupvsec]]` — best-in-class NOBLE ρc 0.1–1 mΩ·cm² on ITO.
- `[[2019-hatt-noble-shj-solrrl]]` — TLM contact-resistivity table (1.8–4.0 mΩ·cm²); pulse-reverse plating.
- `[[2019-hatt-noble-bifacial-shj-aip]]` — large-area validation.
- `[[2024-lachowicz-cu-plated-shj-aging-mini-modules]]` — Cu paste 1.5 mΩ·cm² on ITO; module-level FF tracking.
- `[[2025-yacouba-shj-silver-free-metallization-progPV]]` — Cu SP 10.28 mΩ·cm² (fine line) — Cu paste fine-line blocker.
- `[[2025-fraunhoferise-transition-ag-cu-screen-printed-shj]]` — Cu paste 5 mΩ·cm² (80 µm) → 12 mΩ·cm² (25 µm); fine-line uncompetitive.
- `[[2019-karas-damp-heat-degradation-shj-cu]]` — pFF vs FF separation method.
- `[[2014-rehman-nicu-plating-csi-review]]` — ρc benchmarks; Konstanz 0.6 mΩ·cm² with two-step Ni.
- `[[2017-jeon-electroless-ni-front-metallization]]` — interfacial oxide raises R_s.
- `[[2018-pv-international-metallization-shj]]` — CSEM SHJ contact-resistance benchmarks.
- `[[2010-bartsch-lip-pvsc]]` — early Ni-Cu contact-resistance characterization.
- `[[2012-nrel-aluminum-metallization-tlm-printed]]` — TLM methodology.
- `[[2023-lachowicz-csem-stability-cu-plated-shj-mini-modules]]`, `[[2023-taiyangnews-heterojunction-technology-report]]`, `[[2023-tepner-printing-tech-csi-review]]`, `[[2024-itrpv-15th-edition-roadmap]]`, `[[2024-lorenz-cutting-edge-metallization-shj-fraunhofer]]`, `[[2024-siliconpv-novel-shj-metallization-architectures]]` — industry/roadmap framing.
