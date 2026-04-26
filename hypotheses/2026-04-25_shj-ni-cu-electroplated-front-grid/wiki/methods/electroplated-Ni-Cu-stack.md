---
type: method
slug: electroplated-Ni-Cu-stack
aliases: [Ni/Cu plating, plated Ni-Cu front grid, Ni-barrier + Cu-conductor stack]
related_methods: [electroless-Ni-deposition, Cu-electroplating-acid-bath, light-induced-plating, Ni-sputter-deposition, NOBLE-selective-Cu-plating, laser-ablation-of-dielectric]
key_reagents: [nickel-sulfamate-bath, acid-Cu-sulfate-bath, nickel-phosphorus-NiP-electroless, tin-Sn-cap, silver-Ag-cap]
known_failure_modes: [Cu-diffusion-into-c-Si, Ni-barrier-pinholes, Cu3Si-formation-at-Si-interface, finger-adhesion-loss-after-DH, Cu-out-diffusion-through-cap-stack]
sources: [2010-bartsch-lip-pvsc, 2014-rehman-nicu-plating-csi-review, 2018-electrochemsci-barrier-properties-electroplated-ni, 2018-pv-international-metallization-shj, 2018-pvtech-metallization-shj-cells-modules, 2023-taiyangnews-heterojunction-technology-report, 2024-itrpv-15th-edition-roadmap, atotech-solar-industry-overview, pvtech-metallization-challenges-cell-manufacturing]
tags: [plating, Ni-barrier, Cu-conductor, Sn-cap, Ag-cap, SHJ, PERC, two-step-metallization]
---

# Electroplated Ni/Cu Stack

## What it measures / does
A composite plated front-grid metallization: a thin Ni layer (electroplated or electroless) acts as Cu-diffusion barrier and adhesion promoter; a thicker Cu layer (typically 1-10 um) is the main conductor; a Sn or Ag cap protects against oxidation and enables soldering. The architecture trades expensive screen-printed Ag for inexpensive Cu while protecting the Si/TCO interface from Cu contamination — exactly the stack the present hypothesis tests on SHJ.

## When to use it
The full pipeline: seed/contact opening (laser ablation, inkjet mask, or photolithography) -> Ni barrier deposition -> Cu thickening -> Sn/Ag cap. On SHJ, the Ni layer is plated onto a sputtered seed or directly onto the patterned TCO; on PERC/homojunction, the Ni is plated onto the laser-ablated Si and silicidized.

## Key parameters
- Ni barrier thickness: 60-120 nm (Cheng 2018 shows 60 nm Ni fails at 300 C anneal with Cu3Si formation; 120 nm holds to 300 C; the present hypothesis claims sub-100 nm is sufficient at SHJ-compatible <=200 C process temperatures).
- Cu thickness: 1-10 um typical; line resistivity ~2 uOhm.cm achievable (Hatt 2021); finger widths 11-30 um in production demos.
- Cap: Sn (~1 um, LIP acid stannous) or Ag (~200 nm-1 um, immersion or LIP); cap thickness governs upward Cu out-diffusion under damp heat.
- Contact resistivity to ITO: 0.1-4 mOhm.cm² depending on PVD-seed (TiW, Cu, Ag); Hatt 2021 reports rho_c 0.1-1 mOhm.cm² with optimized seed.
- Peel strength: >=1 N/mm DIN EN 50461 minimum; NOBLE Cu reaches >=2 N/mm (Hatt 2021).
- ITRPV 2024 projects <=6% market share for plating as rear-side metallization by 2034; SHJ front-side is the open question.

## Common variants / alternatives
- [[electroless-Ni-deposition]] — autocatalytic Ni-P route used in PERC buried-contact and laser-opened cells.
- [[Ni-sputter-deposition]] — PVD Ni or Cu seed under the Ni barrier, used by Maxwell, NOBLE, CSEM seed-and-plate.
- [[Cu-electroplating-acid-bath]] — the Cu-thickening sub-step.
- [[NOBLE-selective-Cu-plating]] — Fraunhofer ISE variant that omits Ni and uses native AlOx as the plating mask.
- [[screen-printed-Ag-paste]] — incumbent comparator the stack must beat.

## Things to watch for (failure modes)
- [[../failure-modes/Cu-diffusion-into-c-Si]] — primary risk; mitigated by Ni thickness and silicide quality; on SHJ, the TCO provides additional protection.
- [[../failure-modes/Ni-barrier-pinholes]] — Cheng 2018: at 60 nm Ni already fails at 300 C; bath chemistry / additive control governs pinhole density.
- [[../failure-modes/Cu3Si-formation-at-Si-interface]] — XRD/STEM-confirmed at Cu/Ni(60 nm) >=300 C, Cu/Ni(120 nm) >=400 C.
- [[../failure-modes/finger-adhesion-loss-after-DH]] — peel-force <=1 N/mm on un-optimized seed; SunDrive achieves Si-shear-strength adhesion via two-step plating.
- [[../failure-modes/Cu-out-diffusion-through-cap-stack]] — Karas 2022: Cu through both Sn and Ag caps after 1000-3500 h damp heat.

## Sources
- [[2010-bartsch-lip-pvsc]] — foundational Ni-Cu-Sn LIP demonstration on c-Si; Arrhenius extrapolation showing >1000-yr stability with Ni barrier vs 0.1-3 yr without.
- [[2014-rehman-nicu-plating-csi-review]] — comprehensive review; Ni/Cu offers ~2.5x conductivity of fired Ag and lower contact resistance.
- [[2018-electrochemsci-barrier-properties-electroplated-ni]] — Cheng et al. quantitative barrier-thickness study (60 nm vs 120 nm) defining the sub-100 nm constraint.
- [[2018-pv-international-metallization-shj]] — CSEM review including plated-Ni-Cu as adhesion-improvement variant for SHJ Cu plating onto TCO.
- [[2018-pvtech-metallization-shj-cells-modules]] — CSEM SHJ flow; observes that on SHJ the TCO can replace or complement the Ni barrier.
- [[2023-taiyangnews-heterojunction-technology-report]] — Maxwell/RENA/CSEM seed-and-plate roadmaps including sputter-Ni or sputter-Cu seeds + Cu plate.
- [[2024-itrpv-15th-edition-roadmap]] — projects Cu plating + Ag-coated-Cu as the two SHJ silver-replacement paths.
- [[atotech-solar-industry-overview]] — commercial Ni/Cu/Sn or Ni/Cu/Ag stack marketed for TOPCon and SHJ.
- [[pvtech-metallization-challenges-cell-manufacturing]] — IMEC industry review situating two-step seed-and-plate as the silver-free path.
