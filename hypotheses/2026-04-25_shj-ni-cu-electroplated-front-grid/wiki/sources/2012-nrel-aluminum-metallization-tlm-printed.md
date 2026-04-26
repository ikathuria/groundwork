---
type: source
id: 2012-nrel-aluminum-metallization-tlm-printed
source_type: protocol
title: "Non-Contact Printed Aluminum Metallization of Si Photovoltaic Devices"
authors: ["Heather A. S. Platt", "Yunjun Li", "James P. Novak", "Maikel F. A. M. van Hest"]
year: 2012
doi: null
url: "https://www.osti.gov/biblio/1048147"
raw_path: raw/protocols/2012-nrel-aluminum-metallization-tlm-printed.pdf
tags: [protocol, methodology, transfer-length-method, TLM, contact-resistivity, aerosol-jet, NREL, reference-method]
---

# Non-Contact Printed Aluminum Metallization of Si Photovoltaic Devices

## Summary
NREL conference paper (2012 IEEE PVSC) demonstrating aerosol-jet-printed Al metal ink as a non-contact, low-broken-wafer alternative to screen-printed Al back contacts on Si solar cells. The paper is being referenced here **as a protocol for the transfer-length method (TLM) on printed metal lines**: it builds TLM patterns of ten parallel Al lines with line-to-line spacings of 700 µm to 4800 µm on textured Si wafers, sinters them at 550–800 °C for 4 min each, and reports contact resistivities falling from 80 mΩ·cm² (550–600 °C) to 20 mΩ·cm² (800 °C). The geometry, sintering ladder, and the reported ρc range provide a directly applicable TLM workflow blueprint for measuring SHJ Ni/Cu contact resistivity. The cell-level demonstration produced champion 13% efficiency on 21 cm² wafers.

## Key claims
- Aerosol-jet printed Al lines: ~100 µm wide, 1–10 µm thick, ~10 µΩ·cm resistivity (~6× bulk Al) after sintering.
- TLM pattern definition for measuring printed-Al contact resistivity: 10 parallel lines, line-to-line spacings 700 µm → 4800 µm, sintered 4 min at each temperature in the 550–800 °C ladder.
- Measured contact resistivity ρc = 80 mΩ·cm² at 550 and 600 °C, falling to 20 mΩ·cm² at 800 °C (post-Si–Al alloying above the 577 °C eutectic).
- Below the eutectic, Al contraction during cooling caused cracking in continuous Al pads; finger geometry (0.7–1.5 mm spacing) avoided cracking.
- Al-ink compositional/process levers documented: 60 wt% loading, line thickness 1–120 µm achievable; rapid thermal processing in NREL's Atmospheric Processing Platform (APP).
- Champion 21 cm² c-Si solar cell with screen-printed Ag front grid + aerosol-jet-printed Al back: 13% efficiency.
- Finer optimization showed Ag-paste burn-through window 700–800 °C; longer time-above-600 °C raised series resistance via SiO_x formation.

## Methods used
- [[../methods/transfer-length-method]] — protocol definition: 10 parallel printed lines with progressively varying spacing (700 µm to 4800 µm), spaced sintering ladder; this is a directly applicable TLM template for evaluating Ni/Cu front-grid contact resistivity on SHJ cells (the hypothesis's ≤2 mΩ·cm² target).
- [[../methods/four-point-probe-sheet-resistance]] — implicit, used to extract sheet resistance from the same TLM lines.
- [[../methods/IV-curve-measurement]] — used to evaluate 21 cm² cell champion efficiency.

## Reagents
- (Al ink and screen-printed Ag paste — generic; not on the canonical reagent list)

## Organisms / substrates
- [[../organisms/monocrystalline-Si-wafer-p-type]] — 21 cm² Si wafers (single-crystal, textured).

## Failure modes flagged
- [[../failure-modes/finger-adhesion-loss-after-DH]] — paper discusses Al pad cracking due to thermal-mismatch contraction during cooling; analogous mode for plated Cu fingers.
- [[../failure-modes/FF-degradation-contact-resistance]] — TLM-measured ρc directly drives FF; the ladder data (80 → 20 mΩ·cm²) maps the relationship.

## Supports / contradicts
- Supports: [[2014-fraunhofer-peel-testing-ribbons-solar-cells]] (companion methodology reference; both define quantitative metrics for printed-metal-on-Si contacts)
- Supports: [[2018-electrochemsci-barrier-properties-electroplated-ni]]

## Notable quotes
- "Transfer length method patterns consisting of ten parallel lines with line-to-line spacings ranging from 700 μm to 4800 μm were printed on textured Si wafers and sintered for 4 min at each temperature to determine contact resistivities. These values fell from 80 mΩ-cm² at both 550 and 600 °C to 20 mΩ-cm² at 800 °C." — p. 1
- "Any non-contact technique that replaces screen printing in large-scale manufacturing must also be capable of depositing films and patterns very quickly (>2000 wafers/hour)." — Introduction
- "We have demonstrated non-contact printed Al pads and patterns on Si wafers that can be heated over a wide temperature range to form low resistance contacts suitable for extracting photo-generated current from Si solar cells." — Conclusion
