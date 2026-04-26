---
type: source
id: 2022-arena-sundrive-copper-metallisation-demonstration
source_type: protocol
title: "SunDrive Copper Metallisation Demonstration Project (Final ARENA Report)"
authors: ["SunDrive Solar"]
year: 2022
doi: ""
url: https://arena.gov.au/assets/2022/02/sundrive-copper-metallisation-demonstration.pdf
raw_path: raw/protocols/2022-arena-sundrive-copper-metallisation-demonstration.pdf
tags: [SunDrive, Cu-plating, SHJ, world-record, ARENA, prototype-line, damp-heat-2000h, industrial]
created: 2026-04-26
updated: 2026-04-26
---

# SunDrive Copper Metallisation Demonstration Project (Final ARENA Report)

**SunDrive Solar** — *Australian Renewable Energy Agency Knowledge Sharing Report 2020/ARP006, 2022*.

## Summary

Final ARENA-funded knowledge-sharing report from SunDrive Solar covering the 2020–2022 demonstration of commercial-scale Cu electroplating for SHJ solar cells. Reports the September 2021 world-record 25.54% SHJ cell efficiency on M6 (Maxwell precursor), updated to 26.07% (March 2022), 25.94% on a low-indium TCO (August 2022), and 26.41% (August 2022). Documents the full process flow: precursor → masking (proprietary, replaces PVD seed) → high-resolution patterning (<6 µm finger widths) → adhesive direct Cu plating to TCO → mask removal. **Reports glass-glass POE-encapsulated mini-modules passing 2000+ hours of damp-heat with minimal degradation, plus 600 thermal cycles (3× IEC 61215) and >1000 h light-induced-degradation testing.** Cell efficiency boost over Ag-screen-printed reference module: 0.67 %abs.

## Key claims

- Process architecture: high-resolution proprietary mask + adhesive direct Cu plating onto TCO. **No PVD seed layer required, no Ni barrier in the plating sequence** — explicitly differentiated from "etch-back" methods that need PVD seed.
- TCO + a-Si:H stack provides the Cu diffusion barrier; "the silicon surface remains covered with a passivating layer or stack of layers. This means that a copper plated grid can be introduced without any loss of efficiency."
- Cu finger widths: 11 µm on the Sept 2021 25.54% record device; <6 µm on improved patterning; aspect ratio 1.0–1.2 on prototype line (vs 0.6 on lab process).
- Module efficiency comparison (120 half-cells, M2): Cu-plated module 21.94% vs Ag-screen-printed module 21.27% active-area; ΔPmax = +9 W (Cu wins).
- **Damp-heat: glass-glass bifacial mini-modules, 2000 h DH "minimal degradation"; 3000 h DH (3× IEC) target met. Thermal cycling: 600 cycles (3× IEC). Light stability: >1000 h LID.**
- Two solder cap options tested for interconnection: SnBiAg and SnBiPb (low-temperature) — both gave passing reliability.
- Adhesion: busbar pull-test pulls underlying Si shards out of the wafer — adhesion exceeds Si shear strength.
- Throughput on prototype line: >60 cells/hour, >80% yield; equivalent to ~2 MW/yr per single lane on half-cut M12.
- Cost claim: silver elimination → up to 25% cell-level cost reduction, up to 17% module-level reduction; +0.4–0.5 %abs efficiency from grid optimisation alone.
- TRL increased from 5 to 6 over the project.

## Methods used

- [[methods/Cu-electroplating-acid-bath]] — central technology; adhesive direct plating to TCO.
- [[methods/inkjet-mask-patterning]] — proprietary high-resolution patterning (functions as mask + alignment without lithography).
- [[methods/photolithography-mask-patterning]] — referenced as the alternative they explicitly avoided due to throughput.
- [[methods/damp-heat-aging-1000h]] — IEC 61215 1000 h dwell; SunDrive went to 2000–3000 h.
- [[methods/extended-damp-heat-IEC63209]] — implicit in 3000 h / 3× IEC framing.
- [[methods/temperature-cycling-IEC61215-TC200]] — 600 cycles (3× IEC) reported.
- [[methods/UV-preconditioning]] — UV degradation testing referenced.
- [[methods/EL-electroluminescence-imaging]] — module CTM analysis used PL imaging on completed cells.
- [[methods/IV-curve-measurement]] — ISFH-certified champion cell I-V characteristics.
- [[methods/peel-test-90deg]] — busbar pull-test "exceeds Si shear strength".
- [[methods/transfer-length-method]] — implicit in the contact-resistance / TCO-resistivity discussion.
- [[methods/minority-carrier-lifetime-photoluminescence]] — PL imaging used for defect identification.

## Reagents

- [[reagents/acid-Cu-sulfate-bath]] — proprietary in-house Cu electrolyte formulation; high-aspect-ratio plating.
- [[reagents/ITO-transparent-conductive-oxide]] — SHJ TCO; Cu plates directly on it.
- [[reagents/IWO-tungsten-doped-indium-oxide]] — low-indium TCO option (70% In reduction) for the 25.94% August 2022 device.
- [[reagents/POE-polyolefin-encapsulant]] — glass-glass module encapsulant (used in DH tests; deliberately avoids EVA's acetic-acid pathway).
- [[reagents/a-Si-H-passivation]] — the SHJ passivation stack acting as Cu barrier.
- [[reagents/silver-Ag-cap]] — implied via SnBiAg solder cap.
- [[reagents/tin-Sn-cap]] — Sn-based solder cap on Cu fingers for interconnection.

## Organisms / substrates

- [[organisms/SHJ-cell-M6]] — the world-record 25.54% (Sept 2021) and 26.07/26.41% (2022) cell format.
- [[organisms/SHJ-cell-G12]] — half-cut M12 used in prototype-line throughput demonstration.
- [[organisms/mini-module-glass-glass]] — primary DH/TC reliability testbed (glass-glass bifacial).
- [[organisms/full-size-module-60-cell]] — commercial-size module fabricated as part of project.

## Failure modes flagged

- [[failure-modes/finger-adhesion-loss-after-DH]] — explicitly addressed; SunDrive's pull-test shows adhesion exceeds Si shear strength.
- [[failure-modes/Cu-finger-corrosion-encapsulant]] — POE encapsulation chosen specifically because it avoids EVA's acetic-acid pathway.
- [[failure-modes/Cu-finger-oxidation-damp-heat]] — addressed via solder caps (SnBiAg, SnBiPb).
- [[failure-modes/Cu-diffusion-into-c-Si]] — argued mitigated by the SHJ a-Si:H + TCO barrier without an explicit Ni layer.
- [[failure-modes/silver-supply-bottleneck]] — the entire economic motivation; SHJ uses 2–3× the Ag of PERC.
- [[failure-modes/EVA-acetic-acid-corrosion]] — implicitly avoided by encapsulant choice.
- [[failure-modes/Ni-barrier-pinholes]] — not applicable to SunDrive's flow (no Ni barrier); contradicts the hypothesis's framing.

## Supports / contradicts

- **Contradicts:** [[sources/2014-rehman-nicu-plating-csi-review]] — Rehman's two-step Ni-seed + Cu-LIP architecture is *not* used by SunDrive. SHJ-specific TCO + a-Si:H replaces the Ni barrier function.
- **Contradicts:** [[sources/2018-electrochemsci-barrier-properties-electroplated-ni]] — Cheng requires ≥120 nm Ni for Cu-barrier function at 300 °C; SunDrive achieves DH stability with no Ni at all (TCO does the work).
- **Contradicts (architecturally):** [[sources/2018-pv-international-metallization-shj]] — Geissbühler/CSEM frame Ni adhesion layer (with micro-void caveat) or PVD seed as needed; SunDrive claims neither is required.
- **Supports:** [[sources/2018-pvtech-metallization-shj-cells-modules]] — both attribute Cu-barrier function partly to the TCO; SunDrive extends this to "TCO is sufficient on its own."
- **Supports:** [[sources/2025-fraunhoferise-transition-ag-cu-screen-printed-shj]] — both share the Ag-replacement motivation; Pingel pursues paste, SunDrive pursues plating.
- **Supports:** [[sources/2015-lindroos-cu-lid-aalto-thesis]] — both rely on the proposition that the SHJ stack prevents *any* Cu reaching the Si bulk; Lindroos quantifies why even sub-ppb leakage would catastrophically degrade lifetime.

## Notable quotes

> "A key difference between passivated contact and PERC cells is that, with passivated contact cells, the silicon surface remains covered with a passivating layer or stack of layers. This means that a copper plated grid can be introduced without any loss of efficiency. For silicon HJT cells, the copper fingers and busbar are displaced from the silicon absorber (wafer) by both the amorphous silicon layers and the TCO. These layers act together to provide a barrier to copper entering the cell." — *p. 8*

> "Most other copper plating methods for HJT cells require that an additional metal seed layer be deposited via physical vapor deposition (PVD) techniques over the entire TCO surface before patterning in order to obtain sufficient interfacial adhesion … SunDrive's adhesive copper plating process relies on a two-step plating process, whereby the process is 'tuned' for high interfacial adhesion." — *p. 9*

> "After 2000 hours of damp heat testing, SunDrive's glass-glass bifacial modules experienced minimal degradation. This result demonstrates that copper-plated silicon HJT modules can pass routine IEC testing." — *p. 20*
