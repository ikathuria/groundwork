---
type: source
id: 2018-pvtech-metallization-shj-cells-modules
source_type: protocol
title: "Metallization and interconnection for silicon heterojunction solar cells and modules"
authors: ["Matthieu Despeisse", "Christophe Ballif", "Antonin Faes", "Agata Lachowicz"]
year: 2018
doi: null
url: "https://www.pv-tech.org/technical-papers/metallization-and-interconnection-for-silicon-heterojunction-solar-cells-and-modules/"
raw_path: raw/protocols/2018-pvtech-metallization-shj-cells-modules.txt
tags: [shj, metallization, copper-plating, smartwire, low-temperature-ag, csem, review]
---

# Metallization and interconnection for silicon heterojunction solar cells and modules

## Summary
CSEM (Neuchâtel) review article in Photovoltaics International (2018) covering the three main metallization paths for SHJ cells: (1) low-temperature-cured Ag pastes with multiple printing on H-pattern cells, (2) fine-line printing combined with multi-wire SmartWire interconnection (SWCT) reducing Ag laydown to ~30 mg/side, and (3) Cu electroplating onto the front TCO. Key contribution to this hypothesis: documents the canonical SHJ-Cu plating flow on the conductive ITO/IWO TCO surface — TCO acts as both seed and partial Cu-diffusion barrier, requiring an additional patterning mask (laser ablation, photolithography, or inkjet hot-melt resist) for selective plating, since the entire TCO surface would otherwise plate up. Reports 20 µm-wide plated Cu fingers with line resistance ~1 Ω/cm and bulk Cu resistivity ~2×10⁻⁶ Ω·cm vs. 6–10×10⁻⁶ Ω·cm for low-T Ag pastes — the quantitative benchmark for the "≤2 mΩ·cm² without efficiency loss" target in this hypothesis.

## Key procedural claims
- SHJ stack: textured n-type Cz Si wafer with bilateral i/n and i/p a-Si:H passivation/contact layers and bilateral TCOs (typically ITO), all deposited at <200 °C; metallization must remain below ~250 °C to avoid passivation degradation (p. 62).
- Low-temperature-cured Ag pastes for SHJ exhibit bulk resistivity 6–10×10⁻⁶ Ω·cm — 2-3× higher than fired homojunction Ag — driving Ag laydown of ~180 mg/side for 3-5BB H-pattern, costing ~8 ¢/cell at $460/kg Ag (p. 62).
- SmartWire (SWCT) approach uses 18 × 200 µm-diameter Cu wires (~140 µm optical width) on a polymer foil; low-melting-point alloy coating bonds to fingers during lamination, with no high-temperature soldering required. Power loss in fingers scales with 1/n_BB² so 18-wire cuts finger ohmic loss by 13× vs. 5BB. Allows finger line resistance up to 10 Ω/cm (p. 64).
- Fine-line printing of low-T Ag pastes with screen openings down to 20 µm yields ~30 µm wide fingers, 5 Ω/cm finger line resistance, 30 mg Ag/side, and cell efficiency 22.7% — module efficiency 20% on 327 Wp 60-cell SWCT module (p. 64).
- Cu electroplating onto SHJ TCO: requires patterning mask because the conductive TCO would otherwise plate up everywhere. Standard Ni-Cu stack from PERC (where Ni acts as silicide barrier after annealing) is replaced for SHJ by direct Cu plating onto ITO — the TCO itself acts as the Cu-diffusion barrier (p. 65–66).
- Plated Cu fingers achieve bulk resistivity ~2×10⁻⁶ Ω·cm (only slightly above pure Cu at 1.7×10⁻⁶ Ω·cm), 20 µm width, ~1 Ω/cm line resistance — directly enabling 3-5BB H-pattern designs without low-T Ag (p. 66).
- Patterning options for SHJ Cu: laser ablation of an ARC dielectric (used on PERC), but for SHJ the TCO is conductive so additional protective masking layer required; alternatives include inkjet hot-melt ink masking (Hermans 2014) and photolithography (p. 66).
- Bifacial single-cell modules at 19.9% efficiency demonstrated using SWCT direct contacting onto the front conductive TCO with no front-side metallization at all (p. 64).
- Reliability: SmartWire SHJ modules withstand >3× IEC accelerated degradation criteria with <5% power loss, demonstrating module-level reliability of the low-T-Ag + multi-wire approach (p. 64).

## Methods used / described
- [[../methods/screen-printed-Ag-paste]] — fine-line printing with low-T Ag, 30 µm screen openings.
- [[../methods/Cu-electroplating-acid-bath]] — direct Cu plating onto ITO TCO of SHJ cells.
- [[../methods/laser-ablation-of-dielectric]] — patterning route for PERC; modified for SHJ via additional resist mask.
- [[../methods/inkjet-mask-patterning]] — hot-melt ink (Hermans) as low-cost patterning route for SHJ Cu plating.
- [[../methods/photolithography-mask-patterning]] — alternative high-resolution patterning route.
- [[../methods/electroplated-Ni-Cu-stack]] — standard PERC plating stack referenced as baseline.

## Reagents specified
- [[../reagents/low-T-Ag-paste-generic-SHJ-grade]] — bulk resistivity 6–10×10⁻⁶ Ω·cm, cure <250 °C.
- [[../reagents/ITO-transparent-conductive-oxide]] — front TCO, acts as both contact layer and partial Cu-diffusion barrier.
- [[../reagents/a-Si-H-passivation]] — i/n and i/p layers; deposition <200 °C constrains downstream thermal budget.
- [[../reagents/acid-Cu-sulfate-bath]] — implicit Cu plating chemistry.
- [[../reagents/multibusbar-Cu-ribbon]] — 200 µm Cu wires with low-melting alloy coating used in SWCT.

## Organisms / substrates
- [[../organisms/SHJ-cell-M6]] — 60-cell module reported at 327 Wp, 20% module efficiency.
- [[../organisms/monocrystalline-Si-wafer-n-type]] — Cz n-type substrate for SHJ.

## Failure modes flagged
- [[../failure-modes/finger-adhesion-loss-after-DH]] — adhesion of plated Cu to TCO is identified as a key R&D challenge requiring "high adhesion of plated materials onto TCO layers."
- [[../failure-modes/silver-supply-bottleneck]] — motivates the entire shift to Cu plating.
- [[../failure-modes/a-Si-H-passivation-degradation]] — drives the <250 °C process constraint.

## Supports / contradicts
- Supports SHJ-Cu metallization feasibility with low-resistivity (~2×10⁻⁶ Ω·cm) plated fingers — concordant with [[2022-arena-sundrive-copper-metallisation-demonstration]], [[2017-jeon-electroless-ni-front-metallization]], and Hatt SolRRL/AIP/EUPVSEC series.
- Argues TCO alone is sufficient as Cu-diffusion barrier on SHJ (no Ni interlayer needed), differing from PERC reference flow where Ni silicide is used. This is the central architecture decision the hypothesis tests with a thin Ni layer added back as belt-and-braces.

## Notable quotes
- "The plated copper lines typically demonstrate a low resistivity of down to 2×10⁻⁶ Ω·cm, which is only slightly higher than the resistivity of pure bulk copper (1.7×10⁻⁶ Ω·cm)." — p. 66
- "20µm-wide copper-plated fingers can be produced with a line resistance of about 1Ω/cm." — p. 66
- "By switching to copper-electroplating processing for the formation of the electrical grid, the use of silver can be suppressed and the metallization process maintained at room temperature." — p. 66
- "This TCO layer will already act as an efficient barrier to copper migration towards the silicon, and therefore limit potential degradation." — p. 66
