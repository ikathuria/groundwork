---
type: source
id: 2022-arena-sundrive-copper-metallisation-demonstration
source_type: protocol
title: "SunDrive Copper Metallisation Demonstration Project — Knowledge Sharing Report (ARENA 2020/ARP006)"
authors: ["SunDrive Solar (Vincent Allen)", "Alison Lennon (UNSW)"]
year: 2022
doi: null
url: "https://arena.gov.au/projects/sundrive-copper-metallisation-demonstration-project/"
raw_path: raw/protocols/2022-arena-sundrive-copper-metallisation-demonstration.txt
tags: [shj, copper-plating, sundrive, world-record, ito, mini-module, damp-heat, thermal-cycling, arena, 2022]
---

# SunDrive Copper Metallisation Demonstration Project — ARENA Knowledge Sharing Report

## Summary
The publicly funded ARENA knowledge-sharing report from SunDrive (collaboration with UNSW and Maxwell Technologies) documenting the cell- and module-level demonstration of direct Cu electroplating onto the TCO of industrial SHJ cells. This is the most authoritative public document on a fully Ag-free, plated-Cu front grid for SHJ at industrial wafer size (M6, half-cut M12). It establishes (i) world-record Cu-plated SHJ cell efficiencies of 25.54% (Sept 2021), 26.07% (Mar 2022), and 26.41% (Aug 2022) certified at ISFH, with active-area module efficiency 21.94% on a 120-half-cell M2 module — 0.67%abs higher than the silver screen-printed control built from the same precursor batch; (ii) sub-10 µm finger widths via proprietary mask + patterning + adhesion-tuned two-step Cu plating; (iii) reliability via glass-glass bifacial mini-modules surviving 2000–3000 h damp heat (>2× IEC 61215, demonstrated to 3× IEC) and 600 thermal cycles (3× IEC TC200), and >1000 h LID with minimal degradation; and (iv) prototype production-line throughput of >60 cells/h at >80% yield. This is the primary "supports the hypothesis" anchor — it shows Ag-free, Ni-free direct Cu-on-TCO works at industrial scale and 1000-h DH stability.

## Key procedural claims
- SunDrive's process (4 steps): precursor → mask deposition → patterning (selective opening of mask) → direct Cu electroplating onto TCO → mask strip (Fig. 1, p. 5).
- No PVD seed layer required: SunDrive plates Cu directly onto TCO without an intervening Ni or Cu seed (vs. competing "etch-back" methods which deposit a PVD seed over the entire TCO, then etch back). Adhesion is achieved through a "two-step plating process … 'tuned' for high interfacial adhesion using accurate measurements of finger adhesion" (p. 9).
- Finger widths: 11 µm on the 25.54% record device, scaled down to <6 µm with improved patterning — at least 60% finer than competing SHJ Cu-plating processes (p. 22).
- Aspect ratio: 1.0–1.2 with the new chemistry (vs. <0.6 previously); finger height 6.7–7.0 µm at 10–11 µm width (p. 23–24).
- Capping: Cu fingers/busbars capped (Sn or Ag, not specified in detail) to enable solderability; "the PV industry has addressed these issues through the use of capping layers (tin, silver, etc) which provide enhanced wettability at the interface for solder and prevent copper oxidation" (p. 17).
- Soldering: standard interconnect soldering used after capping; SnBiAg and SnBiPb (low-T) solders both validated on glass-glass bifacial modules (Fig. 13).
- Mini-module + module reliability tests run during project:
  - Light-induced degradation: >1000 h
  - UV degradation tests
  - Damp heat: up to 3000 h (3× IEC) with minimal degradation in glass-glass bifacial modules (Fig. 13, p. 20)
  - Thermal cycling: up to 600 cycles (3× IEC TC200) (p. 20)
- Cell-to-module loss: cleaving M6 cell to half cells loses 0.30%abs efficiency (25.32% → 25.02% per half-cell) (p. 19).
- ISC ~0.2 A increase and FF ~0.31% increase versus matched Ag screen-printed module → +0.67%abs active-area module efficiency (Table 1, p. 20).
- Throughput: prototype line achieves >60 cells/h at >80% yield (~2 MW/yr at single-lane prototype). Targeting ~510 cells/h (~20 MW/yr) with higher precision tooling (p. 21–22).
- Pull-test adhesion: solder bond strength on plated Cu busbars exceeds shear strength of underlying Si — pull tests rip out TCO and Si shards (Fig. 10, p. 18).
- Plated electrolyte was reformulated in-house to give simultaneously: faster plating rate, smoother fingers, fewer grain boundaries → lower line resistance and lower electron-scattering loss → +1.2%abs FF and +0.8 mA/cm² JSC over the project (p. 24).
- Low-indium TCO route (70% In reduction by improved magnetron sputtering) demonstrated at 25.94% certified efficiency (Aug 2022) — relevant for hypothesis as it shows Cu-plate process tolerates alternate TCOs (p. 16).

## Methods used / described
- [[../methods/Cu-electroplating-acid-bath]] — proprietary two-step adhesion-tuned acid Cu plating directly onto TCO.
- [[../methods/inkjet-mask-patterning]] — proprietary patterning achieving <6 µm finger openings on industrial wafers.
- [[../methods/IV-curve-measurement]] — ISFH-certified IV characterization of all record cells.
- [[../methods/EQE-measurement]] — used along with IV for cell characterization.
- [[../methods/minority-carrier-lifetime-photoluminescence]] — PL imaging used to identify defects and degradation in plated cells (Fig. 6, p. 16).
- [[../methods/peel-test-90deg]] — busbar pull-test adhesion validation; shear strength exceeds Si.
- [[../methods/damp-heat-aging-1000h]] — to 2000-3000 h on glass-glass bifacial mini-modules.
- [[../methods/temperature-cycling-IEC61215-TC200]] — to 600 cycles (3× IEC).
- [[../methods/UV-preconditioning]] — included in module reliability test matrix.
- [[../methods/EL-electroluminescence-imaging]] — implied for module characterization.
- [[../methods/screen-printed-Ag-paste]] — control module from same precursor batch.

## Reagents specified
- [[../reagents/acid-Cu-sulfate-bath]] — proprietary chemistry, no exact recipe disclosed.
- [[../reagents/ITO-transparent-conductive-oxide]] — standard SHJ TCO; also tested low-In TCO for sustainability.
- [[../reagents/IWO-tungsten-doped-indium-oxide]] — implicit in low-In TCO development.
- [[../reagents/a-Si-H-passivation]] — supplied by Maxwell as cell precursor.
- [[../reagents/tin-Sn-cap]] — capping option for solderability and oxidation protection.
- [[../reagents/silver-Ag-cap]] — alternative capping option.
- [[../reagents/EVA-encapsulant]] — implicit in module fabrication.
- [[../reagents/POE-polyolefin-encapsulant]] — implicit in glass-glass bifacial modules.
- [[../reagents/multibusbar-Cu-ribbon]] — 15 busbars on M12 half-cut module (Fig. 18).

## Organisms / substrates
- [[../organisms/SHJ-cell-M6]] — 274.5 cm² total area, 25.54%/26.07%/26.41% records.
- [[../organisms/SHJ-cell-M10]] — implicitly via half-cut M12 (M12 is closely related to G12, half-cut into M10-class halves).
- [[../organisms/SHJ-cell-G12]] — half-cut M12 cells used in prototype line.
- [[../organisms/monocrystalline-Si-wafer-n-type]] — n-type wafer thickness ~155 µm trending to 125 µm by 2032.
- [[../organisms/mini-module-glass-glass]] — 2 × half-cut M6, used for IEC reliability tests.
- [[../organisms/full-size-module-60-cell]] — 120 half-cells (~M2) commercial-size module at 21.94% active-area efficiency.

## Failure modes flagged
- [[../failure-modes/Cu-finger-oxidation-damp-heat]] — addressed via Sn/Ag capping.
- [[../failure-modes/finger-adhesion-loss-after-DH]] — explicitly engineered around with two-step adhesion-tuned plating.
- [[../failure-modes/Cu-diffusion-into-c-Si]] — flagged as historical concern; mitigated by intact a-Si:H + TCO stack.
- [[../failure-modes/silver-supply-bottleneck]] — primary motivation; PV uses 20% of global Ag, SHJ needs 2-3× PERC.
- [[../failure-modes/EVA-acetic-acid-corrosion]] — implied in encapsulant-Cu reactivity discussion (p. 17).
- [[../failure-modes/finger-adhesion-loss-after-DH]] — historical Suntech Pluto failure cited as cautionary.

## Supports / contradicts
- Strongly supports the hypothesis. Demonstrates Cu-plated SHJ cells passing ≥1000 h damp heat, with no efficiency loss vs. Ag screen-printed control — actually 0.67%abs *better* at module level. Different from hypothesis in that SunDrive uses *no Ni barrier* (relies on TCO + adhesion-tuned plating), whereas the hypothesis posits a thin Ni barrier — both are viable, but SunDrive proves that even without Ni the architecture passes DH.
- Concordant with [[2018-pvtech-metallization-shj-cells-modules]] (CSEM) on TCO-as-barrier hypothesis.
- Concordant with [[2024-lachowicz-cu-plated-shj-aging-mini-modules]] and [[2025-yacouba-shj-silver-free-metallization-progPV]] on DH and module aging.

## Notable quotes
- "The use of silver is the most expensive step in the solar cell production process … by eliminating silver, the potential achievable manufacturing cost reduction can be up to 25% at the cell level and up to 17% at the module level." — Executive Summary, p. 4
- "An important feature of SunDrive's proprietary technology is the ability to form a copper grid that adheres strongly to the TCO surface." — p. 8
- "After 2000 hours of damp heat testing, SunDrive's glass-glass bifacial modules experienced minimal degradation." — p. 20
- "Overall, a 0.67%abs boost in active-area module efficiency was observed for the copper-plated modules." — p. 20
- "It was demonstrated that previous durability concerns regarding adhesion of plated copper could be addressed by ensuring strong interfacial adhesion of the plated copper to both the solar cell and to the solder of the interconnect wire." — Conclusions, p. 27
- "Glass-glass bifacial modules can pass up to 3 x the IEC requirements for damp heat and thermal cycling, as well as required tests for light stability." — Conclusions, p. 27
