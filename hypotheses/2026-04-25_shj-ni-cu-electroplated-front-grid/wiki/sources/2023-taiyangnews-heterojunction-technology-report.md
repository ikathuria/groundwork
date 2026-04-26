---
type: source
id: 2023-taiyangnews-heterojunction-technology-report
source_type: paper
title: "Heterojunction Solar Technology 2023 Edition: Working Hard on Cost Reduction"
authors: ["Shravan K. Chunduri", "Michael Schmela"]
year: 2023
doi: null
url: "https://taiyangnews.info/reports/heterojunction-solar-technology-2023"
raw_path: raw/papers/2023-taiyangnews-heterojunction-technology-report.pdf
tags: [SHJ, industry-report, metallization, copper-plating, low-temperature-paste, silver-coated-copper, mass-production, market-context, indium]
---

# Heterojunction Solar Technology 2023 — Working Hard on Cost Reduction

## Summary
TaiyangNews' 2023 industry report is the canonical mass-production-status snapshot for SHJ as of late 2022 / early 2023. It documents (1) LONGi's HJT-only world record of 26.81% (Nov 2022), (2) the industry-wide Ag laydown trajectory from ~180 mg/M6 wafer in early 2022 → 120 mg/wafer by year-end → target 70 mg with silver-coated copper → fully Ag-free with Cu plating, and (3) the explicit roadmaps from Maxwell, RENA, CSEM, Huasun, and Risen for introducing seed-and-plate Cu metallization on SHJ. Maxwell's plan: pilot line 2023, first production line 2024, commercial offering Q3/2024 — directly time-bracketing the hypothesis. The report also gives 2022 silver consumption as ~14.6 mg/W (Huasun) targeting 10 mg/W in 2023, and quotes finger widths of 18.1 µm with plating vs. ~40 µm with screen-printed low-T paste.

## Key claims
- LONGi's HJT-only cell record: 26.81% (Nov 2022), unspecified ">M6" wafer size; previous 5-year holder was Kaneka HBC at 26.63%.
- Industrial SHJ cell efficiency in China surpassed 25% across the industry in 2022; 26.41% achieved by Maxwell+Sundrive on a silver-free cell.
- Silver paste laydown trajectory (Huasun M6 wafer): 180 mg → 120 mg with SMBB+metal screen → ~100 mg with silver-coated-copper rear → target 70 mg/wafer; full Ag-free with Cu plating expected from 2024.
- Huasun Ag consumption end-2022: 14.6 mg/W; target 10 mg/W in 2023 (G12, dual-print, ≥18 BB).
- HJT screen-printing pain points (vs. PERC): printing speed 200–250 mm/s vs 400 mm/s; screen openings 20–24 µm vs 12–15 µm; laydown 18–23 mg/W vs 8–11 mg/W. Solamet PV42B paste claims to close the gap.
- Maxwell Cu-plating commercial roadmap: pilot line 2023, first production line 2024, commercial offering Q3/2024.
- Maxwell Cu-plating process: sputtered Cu seed → photoresist patterning → simultaneous front+rear Cu electroplating → resist strip → Sn cap → anneal.
- RENA inline plating tool: one-side electrolyte, dry rear contact, biased from rear, claimed ~50% Ag savings.
- CSEM seed-and-plate variant: thin Ag seed → SiNx blanket → laser-open SiNx → direct Cu plating; deposited dielectric prevents ghost plating.
- Risen Laser Pattern Transfer Printing: paste-filled grooves transferred via laser, finger width 18.1 µm vs 40.15 µm screen-printed, aspect ratio ~1.0.
- TCO indium reduction is also a hot topic; AZO/ITO stacks can reduce indium 85% (FZJ data).
- HJT installed capacity in China end-2022: 8.46 GW; announced/under-construction: 218 GW.
- Wafer thickness mainstream 130 µm (Risen); 100 µm in R&D (Huasun); HJT supports thinner wafers than PERC due to symmetric structure.
- HJT module BOM specifics: low-temperature soldering <200 °C or ECA (Mondragon, teamtechnik); EPE encapsulant standard; UV→red/blue conversion films (Cybrid, Hangzhou First) +1.5% module power.
- HJT CapEx end-2022: 350–400 M RMB/GW; target 250 M RMB/GW.

## Methods used
- [[../methods/screen-printed-Ag-paste]] — describes the entire low-T Ag paste landscape for SHJ (Solamet PV42B, PV43B for tandems) and the dual-print mainstream.
- [[../methods/electroplated-Ni-Cu-stack]] — Maxwell, RENA, CSEM seed-and-plate variants reviewed.
- [[../methods/Cu-electroplating-acid-bath]] — central to the Maxwell process flow described.
- [[../methods/Ni-sputter-deposition]] — Maxwell uses sputtered Cu seed (not Ni); generic seed-deposition reference.
- [[../methods/laser-ablation-of-dielectric]] — used in CSEM seed-and-plate variant for SiNx opening before plating.
- [[../methods/inkjet-mask-patterning]] — discussed indirectly via "plating resist" patterning options.
- [[../methods/photolithography-mask-patterning]] — Maxwell's photoresist mask in front-rear plating.
- [[../methods/IV-curve-measurement]] — discusses HJT-specific challenges (RapidWAVE, internal capacitance, 250 ms vs 20 ms measurement).
- [[../methods/EL-electroluminescence-imaging]] — standard add-on for HJT IV station.
- [[../methods/dark-IV-suns-Voc]] — included in HJT IV characterization sequence.

## Reagents
- [[../reagents/low-T-Ag-paste-Solamet-PV21A]] — historical low-T Ag paste from DuPont/Solamet lineage.
- [[../reagents/low-T-Ag-paste-Solamet-PV56S]] — referenced via the Solamet roadmap.
- [[../reagents/low-T-Ag-paste-generic-SHJ-grade]] — Solamet PV42B/PV43B family explicitly profiled.
- [[../reagents/ITO-transparent-conductive-oxide]] — mainstream TCO; PVD via sputter the standard process.
- [[../reagents/AZO-aluminum-doped-zinc-oxide]] — discussed as ITO replacement; AZO/ITO stack reduces In 85%.
- [[../reagents/a-Si-H-passivation]] — core SHJ layer; HJT2.0 introduces nc-Si on emitter.
- [[../reagents/EVA-encapsulant]] — discussed but EPE is preferred for SHJ.
- [[../reagents/POE-polyolefin-encapsulant]] — preferred encapsulant for SHJ glass-glass modules.
- [[../reagents/electrically-conductive-adhesive-ECA]] — used by Mondragon and teamtechnik for ECA-based interconnection.
- [[../reagents/Cu-paste-low-temperature]] — silver-coated-copper paste evaluated by Huasun on rear fingers; saved 24 mg Ag/M6 cell with ~0.03% absolute efficiency loss.
- [[../reagents/multibusbar-Cu-ribbon]] — 12/15/18/24 BB designs explicitly profiled (Risen 24-BB, Huasun 15-BB).
- [[../reagents/IWO-tungsten-doped-indium-oxide]] — implicit in the TCO discussion.

## Organisms / substrates
- [[../organisms/SHJ-cell-M6]] — Huasun's first-fab format; basis for the 180→120→100→70 mg Ag reduction sequence.
- [[../organisms/SHJ-cell-M10]] — Maxwell PECVD tools profiled at M10 scale.
- [[../organisms/SHJ-cell-G12]] — Huasun's Phase 2 fab (2 GW), Risen Hyper-ion 132-cell module.
- [[../organisms/monocrystalline-Si-wafer-n-type]] — all SHJ uses n-type wafers.
- [[../organisms/full-size-module-72-cell]] — Risen 700 W class, 132-half-cell layouts implied.

## Failure modes flagged
- [[../failure-modes/Cu-finger-oxidation-damp-heat]] — explicitly mentioned by FZJ's Ding as a risk for silver-coated-copper paste ("copper leakage and oxidation of the copper").
- [[../failure-modes/silver-supply-bottleneck]] — central economic driver of the entire report.
- [[../failure-modes/Jsc-loss-from-cap-stack-shading]] — discussed via finger-width reduction and busbar count; 24-BB reduces shadow loss.
- [[../failure-modes/FF-degradation-contact-resistance]] — addressed by HJT2.0 nc-Si emitter (reduces lateral resistance dependence on ITO).
- [[../failure-modes/a-Si-H-passivation-degradation]] — light-soaking step recovers FF degradation linked to oxygen-induced a-SiOₓ at TCO/a-Si interface.

## Supports / contradicts
- Supports: [[2024-itrpv-15th-edition-roadmap]] (TaiyangNews mg/W trajectory matches ITRPV 15th projected market share of Cu-containing SHJ metallization)
- Supports: [[2024-fraunhoferise-photovoltaics-report]]
- Supports: [[2018-pv-tech-metallization-interconnection-bifacial-shj]]
- Supports: [[2018-pv-international-metallization-shj]]
- Supports: [[2024-lorenz-cutting-edge-metallization-shj-fraunhofer]]
- Supports: [[2024-siliconpv-novel-shj-metallization-architectures]]
- Supports: [[2025-fraunhoferise-transition-ag-cu-screen-printed-shj]]

## Notable quotes
- "Maxwell is currently working on a seed and plate approach in which the copper seed layer is applied via sputtering, followed by masking the non-metallic area with photosensitive material and opening the contacts by exposure. Then, the electroplating of copper is accomplished simultaneously on the front and rear sides, followed by a photoresist strip and tin plating." — p. 18–19
- "Maxwell also chalked out its commercialization plans – install the first pilot line in 2023, the first production line 12 months thereafter, and commercial offering in Q3/2024." — p. 19
- "The industry is also evaluating replacing p-type amorphous silicon with microcrystalline silicon on the rear side as the next step of improvement... The industry is colloquially referring to the amorphous silicon on both sides as HJT1.0, microcrystalline on the emitter side as HJT2.0, and double-sided microcrystalline as HJT3.0." — p. 12
- "Our target is to reach a silver consumption of 70 mg/wafer with silver coated copper" — Huasun's Zhou, p. 17
- "While the installed capacity for HJT is about 8.46 GW in China, the announcements, including plans and facilities under construction, add up to an unbelievable 218 GW." — p. 32
