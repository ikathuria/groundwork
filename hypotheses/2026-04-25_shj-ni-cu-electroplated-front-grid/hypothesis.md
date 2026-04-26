---
type: hypothesis
slug: 2026-04-25_shj-ni-cu-electroplated-front-grid
domain: photovoltaics
status: complete
original_question: |
  On silicon heterojunction (SHJ) solar cells, a sub-100 nm electroplated nickel
  barrier followed by electroplated copper produces a front-grid metallization
  with contact resistivity ≤ 2 mΩ·cm² and no measurable efficiency loss after
  1000 h damp-heat aging (85°C / 85% RH) — matching screen-printed silver at
  <10% of the metallization cost.
created: 2026-04-25
updated: 2026-04-26
sources_count: 45
latest_plan: plan-v1
plan_total_budget_usd: 168450
plan_total_timeline_weeks: 14
plan_novelty_verdict: similar-work-exists
---

# SHJ Ni/Cu electroplated front-grid metallization

## Refined hypothesis

- **Intervention:** Replace the screen-printed silver front-grid on a silicon heterojunction (SHJ) solar cell with a stack of electroplated nickel (Ni) followed by electroplated copper (Cu). Ni layer thickness <100 nm, deposited by light-induced or electroless plating onto the indium tin oxide (ITO) / TCO front layer through a patterned mask (inkjet resist, photolithography, or laser-ablated dielectric). Cu deposited on top by light-induced or DC electroplating to ~10–20 µm grid finger height.
- **Outcome:** Front-contact metallization with (a) line contact resistivity ρc ≤ 2 mΩ·cm² measured by transfer length method (TLM) at room temperature, and (b) cell efficiency degradation Δη ≤ 0.5 %abs after 1000 h damp-heat aging (IEC 61215 protocol, 85°C / 85% RH).
- **Threshold:** ρc ≤ 2 mΩ·cm² **AND** Δη ≤ 0.5 %abs after 1000 h. Both must hold; failure of either rejects the hypothesis. Cost target: front-side metallization material + process cost ≤ 10% of the screen-printed Ag baseline cost on a $/cell basis.
- **Mechanism:** Electroplated Cu has bulk resistivity (~1.7 µΩ·cm) ≈95% of bulk Ag (~1.6 µΩ·cm), giving comparable line resistance at equal cross-section. Ni acts as a diffusion barrier: Cu has the highest known interstitial diffusivity in Si among 3d transition metals (D ≈ 10⁻⁵ cm²/s at 300°C, mid-gap recombination state at Ec−0.16 eV), so unbarriered Cu degrades minority-carrier lifetime catastrophically. A continuous Ni layer of >50 nm has been reported to stop Cu in-diffusion below the SIMS detection limit through standard cell processing thermal budgets and damp-heat aging. The SHJ architecture's low process temperature (<200°C) is compatible with electroplated metal stacks (unlike the ~750°C firing of TOPCon/PERC, which would damage the a-Si:H passivation and the plated stack).
- **Control:** Identical SHJ cells from the same wafer batch metallized with low-temperature screen-printed silver paste (industry baseline, e.g., Heraeus / DuPont SHJ-grade Ag pastes), aged in the same damp-heat chamber simultaneously. Secondary control: Cu-only plated cell (no Ni barrier) to confirm the barrier is mechanistically necessary.

## Scope

- **In scope:** SHJ (silicon heterojunction) cells only — the architecture's low thermal budget and a-Si:H passivation make plated Cu uniquely compatible. Front-side grid metallization. Standard M6 / M10 cell sizes.
- **Out of scope:** TOPCon, PERC, IBC, perovskite/Si tandem (different thermal budget and contact stack). Back-side metallization (already low-Ag in industry). Ag-Cu hybrid pastes (a different intervention). Module-level (encapsulation, EVA, backsheet) — cell-level only.
- **Bench scale:** 5–10 cells per arm (Ni/Cu plated, Ag screen-printed, Cu-only no-barrier). 156×156 mm or 166×166 mm M6 wafers from a commercial SHJ pilot line (or in-house if available).

## Success criteria

1. **Contact resistivity:** TLM ρc ≤ 2 mΩ·cm² on the Ni/Cu arm, measured immediately post-plating. Industry-typical screen-print Ag on SHJ is ~1–3 mΩ·cm²; our threshold matches the upper bound.
2. **Damp-heat stability:** Δη ≤ 0.5 %abs after 1000 h at 85°C / 85% RH per IEC 61215. Open-circuit voltage (Voc), short-circuit current density (Jsc), and fill factor (FF) tracked at 0, 250, 500, 750, 1000 h checkpoints.
3. **Adhesion:** Peel test ≥ 1 N/mm (per IEC 62788-1-2 or industry-equivalent), stable through damp-heat.
4. **No Cu in Si bulk:** SIMS or LECO Cu profile through the cell — Cu signal at the c-Si interface ≤ background after damp-heat. Falsifies the Ni barrier if exceeded.
5. **Cost:** Process flow + material cost analysis demonstrates ≤ 10% of Ag baseline at production scale (sensitivity to Ag spot price; assume $30/oz baseline).

## Key entities (Pass 2 — resolved)

### Most-cited methods
- [[wiki/methods/Cu-electroplating-acid-bath]] (19 sources) — DC / pulsed Cu plating from sulfuric-acid-based CuSO₄.
- [[wiki/methods/IV-curve-measurement]] (19) — STC AM1.5g cell IV.
- [[wiki/methods/screen-printed-Ag-paste]] (17) — universal control / comparator.
- [[wiki/methods/damp-heat-aging-1000h]] (14) — IEC 61215 85°C/85% RH dwell.
- [[wiki/methods/inkjet-mask-patterning]] (11) — selective masking for plated grid.
- [[wiki/methods/electroplated-Ni-Cu-stack]] (9) — the hypothesis's intervention.
- [[wiki/methods/transfer-length-method]] (9) — ρc measurement.
- [[wiki/methods/NOBLE-selective-Cu-plating]] (5) — Fraunhofer ISE flagship SHJ-Cu route (PVD-Cu/Al + inkjet-NaOH + plated Cu).

### Most-cited reagents
- [[wiki/reagents/acid-Cu-sulfate-bath]] (17 sources) — primary plating electrolyte.
- [[wiki/reagents/ITO-transparent-conductive-oxide]] (16) — SHJ front TCO (and acts as a Cu-diffusion barrier per Yacouba 2025 SIMS).
- [[wiki/reagents/EVA-encapsulant]] (14) — module-level driver of acetic-acid-mediated Cu corrosion.
- [[wiki/reagents/a-Si-H-passivation]] (12) — SHJ defining layer; sets the ≤200°C process budget.
- [[wiki/reagents/silver-Ag-cap]] (11) — Cu-finger oxidation protection.
- [[wiki/reagents/low-T-Ag-paste-generic-SHJ-grade]] (11) — the actual SHJ Ag paste control (NOT PV21A/PV56S).
- [[wiki/reagents/nickel-sulfamate-bath]] (8) — the Ni barrier electrolyte for the hypothesis's intervention.

### Top failure modes (Failure Archaeology)
- [[wiki/failure-modes/silver-supply-bottleneck]] (20 sources, severity low) — the economic motivation; not a physical failure, but the *why*.
- [[wiki/failure-modes/FF-degradation-contact-resistance]] (18, high).
- [[wiki/failure-modes/finger-adhesion-loss-after-DH]] (15, high).
- [[wiki/failure-modes/Cu-diffusion-into-c-Si]] (10, **critical**).
- [[wiki/failure-modes/EVA-acetic-acid-corrosion]] (10, high) — Karas 2022 mechanistic anchor.
- [[wiki/failure-modes/Cu-finger-corrosion-encapsulant]] (9, high).
- [[wiki/failure-modes/Cu-finger-oxidation-damp-heat]] (9, high).
- [[wiki/failure-modes/Ni-barrier-pinholes]] (6, high) — the failure mode that, per Cheng 2018, threatens the sub-100 nm Ni claim.
- [[wiki/failure-modes/Cu-LID-light-induced-degradation]] (2, **critical**) — the bulk-c-Si consequence of even sub-ppb Cu (Lindroos 2015).

### Substrates / device under test
- [[wiki/organisms/SHJ-cell-M6]] (16 sources) — primary workhorse format.
- [[wiki/organisms/mini-module-glass-glass]] (7) — the canonical accelerated-DH testbed.
- [[wiki/organisms/SHJ-cell-M10]] (7) — industry-dominant 2023+ format.

### Key contradictions surfaced for Pass 3
1. **Cheng 2018 vs the hypothesis itself:** 60 nm electroplated Ni fails as a Cu barrier at 300°C; only ≥120 nm survives. The hypothesis's "sub-100 nm Ni" sits in the failure regime — partially rescued by SHJ's ≤200°C process budget, but pinhole density must be verified pre-cap (Cu-displacement decoration).
2. **Karas 2022 (EVA + AlBSF/PERC) vs SunDrive ARENA 2022 (POE + SHJ):** Karas reports 5–8% Pmax loss at 1000 h DH from Cu out-diffusion through Sn/Ag caps; SunDrive reports mini-modules passing 2700 h DH on the same cap concept. Resolution likely lies in encapsulant chemistry (POE has no acetic-acid pathway) and the SHJ TCO acting as a co-barrier — but Pass 3 should require SIMS at 0/250/500/750/1000 h, not assume it.
3. **Architectural divergence:** Hatt's NOBLE process and SunDrive both use **PVD seed (Cu/Al stack or Cu) + electroplated Cu**, NOT a sub-100 nm electroplated Ni barrier. Adachi/Kaneka 25.1% record uses PVD Cu seed. The hypothesis's "electroplated Ni barrier" framing is from homojunction (PERC) literature — the SHJ-specific consensus is to rely on **TCO + thin PVD seed** as the diffusion barrier. Pass 3 should consider including a Ni-free arm.
4. **Cu-paste vs plated-Cu:** Yacouba 2025 reports champion 23.1% SHJ with Cu paste at ρc = 10.28 mΩ·cm² (56 µm fingers); Pingel 2025 reports 5–12 mΩ·cm² for AgCu paste. Both above the ≤2 mΩ·cm² target — confirming *paste* Cu cannot meet the spec; only *plated* Cu (NOBLE: 0.1–4 mΩ·cm²) can.

## Open questions

1. **Optimal Ni barrier thickness.** Reported continuous-coverage thresholds range from 30 nm (sputtered) to 200 nm (electroless); the 100 nm cap chosen here is at the lower end of plated Ni reports. What's the literature consensus for *electroplated* Ni continuity on TCO?
2. **Ni deposition mode.** Light-induced (LIP) vs DC electroplating vs electroless (NiP). LIP is the SHJ-friendly default; NiP includes phosphorus that may form a more uniform amorphous barrier but adds process complexity.
3. **Plating resist removal residue.** Inkjet resists leave organic residue that may cause adhesion failure or local TCO damage. Photolithographic mask is cleaner but expensive at production scale.
4. **TCO compatibility.** ITO is the most common SHJ front-TCO; some manufacturers use IWO (W-doped In₂O₃) or AZO. Plating chemistry (acid Cu sulfate at pH ≈ 1) can dissolve TCO at pinholes. Buffer layer (e.g., thin ZnO) may be needed.
5. **Damp-heat failure modes specific to Cu.** Recent literature flags Cu-finger oxidation and Cu out-diffusion to encapsulant as field-relevant. Is the IEC 1000 h damp-heat sufficient to surface these, or does it need extended damp-heat (3000 h) per IEC 63209?
6. **Cost model.** ITRPV roadmap projects per-cell Ag cost; no equivalent public model for Ni/Cu plating CapEx amortisation. Need to assemble a defensible $/cell figure.
7. **Novelty / prior art.** SunDrive (commercial SHJ Cu-plating, claimed efficiency records) and Maxwell are commercializing this. Is the *specific* threshold (sub-100 nm Ni + 1000 h damp-heat) novel, or is this essentially a replication?

## Notes

This is a re-run from a clean slate; an earlier exploratory hypothesis on the same broad topic was deleted before this Pass 1.
