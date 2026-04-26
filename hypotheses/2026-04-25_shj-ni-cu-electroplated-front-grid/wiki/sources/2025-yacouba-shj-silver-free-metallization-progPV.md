---
type: source
id: 2025-yacouba-shj-silver-free-metallization-progPV
source_type: paper
title: "Achieving High Efficiencies for Silicon Heterojunction Solar Cells Using Silver-Free Metallization"
authors: ["Yacouba, M. I.", "Lambertz, A.", "Liu, Y.", "Gattermann, H.", "Lauterbach, V.", "Bittkau, K.", "Rau, U.", "Ding, K."]
year: 2025
doi: 10.1002/pip.70016
url: https://publications.rwth-aachen.de/record/1028842/files/1028842.pdf
raw_path: raw/papers/2025-yacouba-shj-silver-free-metallization-progPV.pdf
tags: [SHJ, silver-free, Cu-paste, AgCu-paste, dispensing, screen-printing, ProgPV, FZ-Juelich, novelty-QC]
created: 2026-04-26
updated: 2026-04-26
---

# Achieving High Efficiencies for Silicon Heterojunction Solar Cells Using Silver-Free Metallization

**Yacouba, M. I., Lambertz, A., Liu, Y., Gattermann, H., Lauterbach, V., Bittkau, K., Rau, U., Ding, K.** — *Progress in Photovoltaics: Research and Applications, 33, 1223–1235 (2025)*. DOI: 10.1002/pip.70016

## Summary

Forschungszentrum Jülich (IMD-3) survey of silver-free SHJ metallization comparing Cu paste, AgCu paste, and Ag paste deposited via screen printing (SP) or dispensing on the front and rear of bifacial SHJ M2 cells. Reaches 23.6 % with AgCu SP front + Cu SP rear (70 % Ag savings) and 23.08 % with Cu SP on both sides (zero Ag) — the highest reported Cu-SP-bifacial result. Key novelty-QC reference for the broader silver-free SHJ landscape.

## Key claims

- Champion cells (Table 2): Ag bifacial reference 23.79 %; AgCu front / Ag rear 23.95 % (+0.16 %abs gain, 25 % Ag reduction); AgCu front / Cu rear 23.62 % (70 % Ag reduction); Cu bifacial 23.08 % (100 % Ag reduction).
- Cells with AgCu SP on the front and Ag paste SP on the rear achieved a +0.13 % efficiency gain over the Ag-bifacial reference — first time AgCu front beats Ag front in this setup.
- SHJ cells tolerate Cu-paste annealing conditions (300 °C / 5 s) with only ~0.2 %abs efficiency drop, fully recovered by light soaking; degradation onset at >280 °C.
- Cu paste finger characteristics (50 µm screen): width 56.18 µm, height 10.22 µm, line resistance 4.24 Ω/cm, contact resistivity 10.28 mΩ·cm², bulk resistance 12.62 µΩ·cm. AgCu SP fingers: 45.26 µm wide × 12.55 µm tall, line R 3.20 Ω/cm, ρc 8.10 mΩ·cm².
- Cu dispensed (single-nozzle) gives wider but more homogeneous lines (153 µm width) with lower bulk resistance (1.68 µΩ·cm) and lower line resistance (0.90 Ω/cm) than Cu SP — useful for the rear side.
- TCOs are confirmed as effective Cu diffusion barriers: pFF and Voc remain unchanged in all-Cu-SP cells, "if significant Cu diffusion into silicon had occurred, it would have led to a much greater degradation in pFF and Voc" (citing Chen et al.).
- Dark areas in EL on Cu-metallised cells correlate with poorly sintered Cu nanoparticle regions and poor Cu/ITO contact at 300 °C, not with Cu diffusion.
- Cao et al. cited as the 26.4 % Cu-electroplated SHJ champion (Nature Energy 2023, Cu electrodes); SunDrive cited at 26.41 % Cu-based SHJ.

## Methods used

- [[methods/screen-printed-Ag-paste]] — knotless screen 23-µm and 30-µm finger openings on M2 SHJ
- [[methods/four-point-probe-sheet-resistance]] — line-resistance via 4-probe after annealing
- [[methods/transfer-length-method]] — TLM with 2 mm × 10 mm pads to measure ρc to TCO
- [[methods/IV-curve-measurement]] — STC (AM1.5G) IV with LOANA system, Wavelabs LED source
- [[methods/EL-electroluminescence-imaging]] — high-injection (8 A) EL imaging
- [[methods/dark-IV-suns-Voc]] — pFF as the c-Si Cu-contamination indicator

## Reagents

- [[reagents/Cu-paste-low-temperature]] — Cu paste annealed at 300 °C / 5 s under protective backing
- [[reagents/low-T-Ag-paste-generic-SHJ-grade]] — Ag low-T paste reference (170 °C / 40 min)
- [[reagents/ITO-transparent-conductive-oxide]] — TCO underneath all paste fingers; cited as Cu diffusion barrier

## Organisms / substrates

- [[organisms/SHJ-cell-M6]] — M2 (244.32 cm², 135 µm wafer) industrial SHJ precursors with TCO on both sides (closest available slug for M2)

## Failure modes flagged

- [[failure-modes/Cu-finger-oxidation-damp-heat]] — Cu paste highly sensitive to atmospheric oxidation during annealing, requiring backing-paper protective covers
- [[failure-modes/a-Si-H-passivation-degradation]] — annealing >280 °C / 5 s degrades passivation via H escape; >320 °C / 5 s gives ~0.5 %abs loss; >360 °C gives ~1.5 %abs loss
- [[failure-modes/FF-degradation-contact-resistance]] — Cu paste FF reduction attributed to higher Rs from poor Cu/ITO contact at 300 °C / 5 s curing
- [[failure-modes/silver-supply-bottleneck]] — explicit motivator: "if Ag is not reduced soon, it will lead to higher costs for solar cells and hinder sustainable development"
- [[failure-modes/Cu-diffusion-into-c-Si]] — discussed and ruled out at single-cell level by stable pFF / Voc, confirming TCO as Cu barrier

## Supports / contradicts

- **Supports:** [[sources/2024-siliconpv-novel-shj-metallization-architectures]] — Frasson/Galiazzo (AMAT) AgCu paste at production scale; same conclusion that AgCu is the realistic medium-term path
- **Supports:** [[sources/2024-lorenz-cutting-edge-metallization-shj-fraunhofer]] — Lorenz pushed the Ag baseline to 1.4 mg/W; Yacouba pushes the AgCu / Cu alternative
- **Supports:** [[sources/2024-lachowicz-cu-plated-shj-aging-mini-modules]] — Lachowicz electroplated route; Yacouba paste-only route — both achieve >23 % with Cu involvement and confirm TCO as Cu diffusion barrier
- **Contradicts:** [[sources/2022-karas-cu-outdiffusion-damp-heat]] — Karas finds Cu outdiffusion through caps and into c-Si under DH for plated stacks; Yacouba reports no detectable Cu diffusion at single-cell level for paste-based stacks (DH not tested in this paper)

## Notable quotes

> "Notably, cells with AgCu paste SP on the front side and Cu paste SP on the rear side reached an efficiency of 23.6%, just 0.35% lower than the reference cells, while saving approximately 70% of Ag paste." — *Abstract*

> "Cao et al. achieved a certified efficiency of 26.4% by using the electroplating method to prepare Cu electrodes on SHJ cells. Though the impressive photovoltaic performance of Cu electroplating, its complex processes, costly equipment, and environmental concerns pose significant challenges." — *§1 Introduction*

> "If significant Cu diffusion into silicon had occurred, it would have led to a much greater degradation in pFF and Voc." — *§3.2.2 (citing Chen et al. 2023)*

> "The findings demonstrated that SHJ solar cells with silver-free metallization on both sides achieved efficiencies above 23%, indicating that the target of 2 mg/W of Ag consumption per cell is feasible with high-efficiency SHJ solar cells." — *§4 Conclusion*
