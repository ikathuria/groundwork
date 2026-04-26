---
type: source
id: 2025-yacouba-shj-silver-free-metallization-progPV
source_type: paper
title: "Achieving High Efficiencies for Silicon Heterojunction Solar Cells Using Silver-Free Metallization"
authors: ["Yacouba, M. I.", "Lambertz, A.", "Liu, Y.", "Gattermann, H.", "Lauterbach, V.", "Bittkau, K.", "Rau, U.", "Ding, K."]
year: 2025
doi: "10.1002/pip.70016"
url: "https://onlinelibrary.wiley.com/doi/10.1002/pip.70016"
raw_path: raw/papers/2025-yacouba-shj-silver-free-metallization-progPV.pdf
tags: [SHJ, copper-paste, AgCu-paste, screen-printing, dispensing, low-temperature-Ag, silver-free, Forschungszentrum-Juelich]
---

# Achieving High Efficiencies for Silicon Heterojunction Solar Cells Using Silver-Free Metallization

## Summary
Forschungszentrum Jülich IMD-3 study (Prog. Photovoltaics 2025) of low-temperature pure-Cu and AgCu-coated-Cu (~50 wt% Ag) metallization pastes applied to industrial M2 SHJ cells via screen printing and single-nozzle dispensing — compared to the standard low-temperature Ag-paste reference. Cells with AgCu front + Ag rear gained +0.13%abs over the bifacial Ag reference; cells with AgCu front + Cu rear achieved 23.6% with ~70% Ag savings; Cu-on-both-sides cells reached 22.4% average and 23.08% champion (highest reported zero-Ag SHJ via SP). Annealing at 280 °C for 5 s is the safe limit for SHJ cell metallization; above 280 °C, irreversible degradation of a-Si:H/c-Si passivation occurs (hydrogen out-diffusion). The Cu-paste anneal condition (300 °C for 5 s) costs 0.2%abs in efficiency, fully recovered by light soaking. No Cu diffusion into Si was detected — even with Cu paste directly on TCO. The paper anchors the "TCO is a Cu diffusion barrier" claim that justifies plated-Cu metallization on SHJ specifically.

## Key claims
- Champion cells (Table 2): Ag bifacial reference 23.79%; AgCu front / Ag rear 23.95% (+0.13%); AgCu front / Cu rear 23.62% (70% Ag reduction); Cu bifacial 23.08% (100% Ag reduction).
- Cu paste annealing condition: 300 °C for 5 s — gives ~0.2%abs cell efficiency drop, fully recovered by 90 s light soaking at ~175 °C with 55 kW/m² LED light (recovers via Voc, pFF, FF improvement).
- 280 °C / 5 s is the cell-survival threshold; 320 °C / 5 s costs ~0.5%abs irreversibly; 360 °C / 5 s costs ~1.5%abs.
- Cu finger geometry / electrical: Cu SP 56 µm wide, 10 µm tall (aspect ratio 0.18), line resistance 4.24 Ω/cm, contact resistivity 10.28 mΩ·cm² on ITO, bulk resistance 12.62×10⁻⁶ Ω·cm. Compare Ag SP: 46.6 µm × 14.2 µm, 1.15 Ω/cm, 5.04 mΩ·cm², 3.51×10⁻⁶ Ω·cm.
- AgCu SP (50 wt% Ag, 50 wt% Cu): 45.3 µm × 12.6 µm, 3.20 Ω/cm, 8.10 mΩ·cm² contact resistivity on ITO.
- Cu dispensing produces wider (153 µm) but more uniform fingers with line resistance 0.90 Ω/cm — better than Cu SP for rear-side use. Cu-rear-dispensed cells outperform Cu-rear-SP by 0.53%abs efficiency.
- "If significant Cu diffusion into silicon had occurred, it would have led to a much greater degradation in pFF and Voc." — only minor pFF/Voc reductions observed, attributed to handling, not diffusion. Confirms TCO acts as the Cu diffusion barrier in SHJ.
- SEM analysis of Cu paste finds unsintered Cu nanoparticle regions even after sintering at 300 °C — likely cause of higher contact resistivity than Ag.
- The 2 mg/W Ag-consumption-per-cell target is reachable with Cu/AgCu metallization while keeping efficiency >23%.

## Methods used
- [[../methods/screen-printed-Ag-paste]] — Ag, AgCu, Cu pastes via flatbed SP
- [[../methods/transfer-length-method]] — TLM with 2 mm × 10 mm pads of variable spacing
- [[../methods/four-point-probe-sheet-resistance]] — line resistance characterisation
- [[../methods/IV-curve-measurement]] — LOANA IV characterisation under STC
- [[../methods/EL-electroluminescence-imaging]] — high-injection (8 A) EL imaging
- [[../methods/UV-preconditioning]] — light-soaking (175 °C, 55 kW/m² LED, ~90 s) for recovery

## Reagents
- [[../reagents/ITO-transparent-conductive-oxide]] — TCO contact and Cu diffusion barrier
- [[../reagents/low-T-Ag-paste-generic-SHJ-grade]] — reference paste
- [[../reagents/Cu-paste-low-temperature]] — pure Cu paste (500 Pa·s viscosity)
- [[../reagents/a-Si-H-passivation]] — degraded above 280 °C by hydrogen out-diffusion

## Organisms / substrates
- [[../organisms/SHJ-cell-M6]] — closely analogous to the M2 (244.32 cm², 135 µm wafer) cells used here
- [[../organisms/monocrystalline-Si-wafer-n-type]] — n-type SHJ precursors with a-Si:H (p/i/n)

## Failure modes flagged
- [[../failure-modes/a-Si-H-passivation-degradation]] — hydrogen out-diffusion above 280 °C
- [[../failure-modes/Cu-finger-oxidation-damp-heat]] — Cu fingers oxidise readily during annealing; protective wrapping required
- [[../failure-modes/FF-degradation-contact-resistance]] — Cu SP higher Rs than Ag SP (10.28 vs 5.04 mΩ·cm²)
- [[../failure-modes/Voc-degradation-Cu-contamination]] — explicitly tested NOT to be present in Cu-on-TCO SHJ; cited as evidence TCO is an effective barrier

## Supports / contradicts
- Supports: [[2018-pv-international-metallization-shj]], [[2018-pv-tech-metallization-interconnection-bifacial-shj]] (TCO as Cu diffusion barrier on SHJ)
- Supports: [[2025-fraunhoferise-transition-ag-cu-screen-printed-shj]], [[2024-fraunhoferise-photovoltaics-report]] (industrial Ag-to-Cu transition in SHJ)
- Supports: [[2020-verlinden-future-challenges-tw-pv]] (TW-scale Ag bottleneck)
- Contrasts with: [[2022-karas-cu-outdiffusion-damp-heat]] — Karas observed Cu diffusion into Si on plated PERC/AlBSF where there is no TCO; this paper finds no diffusion on TCO-protected SHJ

## Notable quotes
- "heterojunction solar cells mitigate this risk as their transparent conductive oxides (TCO) serve as effective diffusion barriers" — Sec. 1
- "the standard annealing conditions for Cu paste metallization are 300°C for 5 s. […] a 0.2%abs drop persisted under Cu annealing conditions, but light soaking reversed this effect back to the original efficiency." — abstract / Sec. 3.2
- "Cells with Cu SP on both sides (zero Ag) achieve an outstanding average efficiency of 22.4%abs and a champion cell's efficiency of 23.08%abs." — Sec. 3.2.2
- "If significant Cu diffusion into silicon had occurred, it would have led to a much greater degradation in pFF and Voc." — Sec. 3.2.2
