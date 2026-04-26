---
type: failure-mode
slug: finger-adhesion-loss-after-DH
severity: high
frequency_estimate: "Rehman 2014: Ni-Cu peel forces 1–2.7 N/mm achievable; Hatt 2021: NOBLE peel ≥2 N/mm vs ≤0.5 N/mm for screen-printed Ag. SunDrive 2022: pull-test bond strength exceeds Si shear (Si shards rip out). Suntech Pluto cited as the historical adhesion-failure cautionary tale. Lachowicz 2023/2024 references adhesion as a DH-driven concern motivating edge sealing."
applies_to_methods: [peel-test-90deg, damp-heat-aging-1000h, extended-damp-heat-IEC63209, temperature-cycling-IEC61215-TC200, EL-electroluminescence-imaging]
applies_to_reagents: [acid-Cu-sulfate-bath, nickel-sulfamate-bath, ITO-transparent-conductive-oxide, electrically-conductive-adhesive-ECA, multibusbar-Cu-ribbon, EVA-encapsulant, POE-polyolefin-encapsulant]
applies_to_step_kinds: [plate, encapsulate, age]
sources: [2011-nrel-reliability-testing-beyond-qualification, 2012-nrel-aluminum-metallization-tlm-printed, 2012-nrel-iec61215-what-it-is, 2013-koehl-fraunhofer-accelerated-service-life-testing, 2014-fraunhofer-peel-testing-ribbons-solar-cells, 2014-nrel-pv-module-qualification-plus, 2014-rehman-nicu-plating-csi-review, 2018-pv-international-metallization-shj, 2018-pv-tech-metallization-interconnection-bifacial-shj, 2018-pvtech-metallization-shj-cells-modules, 2022-arena-sundrive-copper-metallisation-demonstration, 2023-lachowicz-csem-stability-cu-plated-shj-mini-modules, 2024-lachowicz-cu-plated-shj-aging-mini-modules, 2024-nrel-getting-ahead-of-curve-pv-assessment, 2025-fraunhoferise-transition-ag-cu-screen-printed-shj]
tags: [adhesion, peel-test, plated-contact, TCO-interface, DIN-EN-50461, edge-ingress]
---

# Finger / busbar adhesion loss after damp heat

## What it is
Plated Cu fingers adhere to the ITO TCO without the strong chemical bonding that fired Ag pastes form during sintering. Adhesion is provided by metallurgical bonding at the ITO/Ni or ITO/Cu-PVD-seed interface, mechanical interlocking, and (for soldered ribbons) the ribbon-to-cap solder joint. DH degrades adhesion because (i) moisture penetrates along the metal/TCO interface, (ii) corrosion products (Cu hydroxide, Sn oxide) wedge between metal and TCO, and (iii) hygroscopic encapsulant (EVA more than POE) swells/creeps. Suntech's Pluto plated-Cu cells in the early 2010s suffered field-level adhesion failure — explicitly referenced by SunDrive as the cautionary precedent ([[2022-arena-sundrive-copper-metallisation-demonstration]]). The DIN EN 50461 spec requires ≥1 N/mm peel force; Eitner & Rendler 2014 showed the angle-dependence of the test makes "passing 1 N/mm" insufficient for novel plated contacts and proposed adhesive fracture energy G_A as the angle-corrected metric.

## How it manifests
- Peel force drops below 1 N/mm at 90° peel angle after DH.
- Visible cell-side residue on peeled ribbon (good adhesion) → no residue (failure: ribbon comes off clean, ITO intact).
- ECA shingle bond delamination visible as bright lines in EL.
- Module Pmax loss correlated with FF drop and broken-finger pattern at module edges (moisture-driven).
- SEM cross-section after peel shows decohesion at metal/ITO or metal/Ni interface.

## How to detect it
- [[../methods/peel-test-90deg]] — DIN EN 50461 1 N/mm minimum at 90° (Eitner & Rendler protocol from [[2014-fraunhofer-peel-testing-ribbons-solar-cells]]); rear of cell glued to rigid substrate to avoid cracking. Report angle explicitly and prefer G_A (J/m²) for cross-method consistency.
- [[../methods/damp-heat-aging-1000h]] paired with peel test — peel before/after.
- [[../methods/temperature-cycling-IEC61215-TC200]] — adhesion fatigue.
- Pull test (90° pull on soldered ribbon) — SunDrive 2022 reports values exceeding Si shear strength on plated-Cu busbars.
- EL imaging — broken-finger pattern or grid-line discontinuities indicate adhesion failure.

## Mitigation (specific actions, not vague advice)
- Use a PVD seed layer (Cu/Al or Ag/Al) before plating — Hatt 2021 NOBLE achieves ≥2 N/mm peel force vs ≤0.5 N/mm for screen-printed Ag.
- For direct-on-TCO plating (SunDrive), specify a "two-step adhesion-tuned plating" with the first step optimised for nucleation density and interfacial bonding ([[2022-arena-sundrive-copper-metallisation-demonstration]] p. 8–9).
- Pre-clean ITO with mild oxygen plasma before plating to remove organic contamination that nucleates delamination — but avoid aggressive HF that pits TCO ([[TCO-pitting-during-plating]]).
- Apply PIB edge sealing on glass-glass laminates — Lachowicz 2024 attributes edge-initiated adhesion loss to moisture ingress.
- Multi-step Ni etch-back + replate (Fraunhofer ISE) gives ≤2.5 N/mm on Ni-Cu stacks per [[2014-rehman-nicu-plating-csi-review]].
- For soldering, use SnBi or LMPA solder ≤180 °C (matches SHJ thermal budget); standard SnPbAg ribbon at >220 °C is incompatible.
- Specify peel-test acceptance: ≥1 N/mm at 90° after 1000 h DH; report G_A (≥400 J/m²) per Eitner & Rendler.
- Track perimeter vs interior peel force separately — edge moisture ingress is the dominant degradation pathway.

## Severity ranking justification
High: poor adhesion is module-fatal (fingers disconnect, FF collapses) and is the historical reason plated-Cu PV (Suntech Pluto) was withdrawn from market. Modern processes (NOBLE, SunDrive) demonstrate adhesion exceeding Ag screen-print, so the failure mode is engineered-around but remains the leading lithography/process-window risk. Fully visible to the standard DIN EN 50461 peel test, hence high not critical.

## Sources
- `[[2014-fraunhofer-peel-testing-ribbons-solar-cells]]` — DIN EN 50461 protocol; angle-corrected G_A; explicitly flags plated contacts.
- `[[2022-arena-sundrive-copper-metallisation-demonstration]]` — adhesion-tuned two-step plating; pull test exceeds Si shear; Suntech Pluto precedent.
- `[[2024-lachowicz-cu-plated-shj-aging-mini-modules]]` — edge-initiated adhesion loss; PIB edge-seal mitigation.
- `[[2023-lachowicz-csem-stability-cu-plated-shj-mini-modules]]` — workshop precursor.
- `[[2014-rehman-nicu-plating-csi-review]]` — peel-strength benchmarks 1–2.7 N/mm; multi-step Ni etch-back.
- `[[2018-pv-tech-metallization-interconnection-bifacial-shj]]` — CSEM peel-force module-level testing.
- `[[2018-pv-international-metallization-shj]]` — micro-voids at Cu/Ni-on-TCO interfaces.
- `[[2018-pvtech-metallization-shj-cells-modules]]` — adhesion as central R&D challenge.
- `[[2025-fraunhoferise-transition-ag-cu-screen-printed-shj]]` — module-level reliability flagged as next priority.
- `[[2024-nrel-getting-ahead-of-curve-pv-assessment]]` — adhesion of plated contacts as central novel-tech reliability risk.
- `[[2012-nrel-aluminum-metallization-tlm-printed]]`, `[[2011-nrel-reliability-testing-beyond-qualification]]`, `[[2012-nrel-iec61215-what-it-is]]`, `[[2013-koehl-fraunhofer-accelerated-service-life-testing]]`, `[[2014-nrel-pv-module-qualification-plus]]` — qualification framework.
