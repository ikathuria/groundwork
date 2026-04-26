---
type: method
slug: NOBLE-selective-Cu-plating
aliases: [NOBLE, native oxide barrier layer for selective electroplating, Fraunhofer NOBLE process]
related_methods: [Cu-electroplating-acid-bath, inkjet-mask-patterning, laser-ablation-of-dielectric, Ni-sputter-deposition, thermal-evaporation-Ag-cap, transfer-length-method]
key_reagents: [acid-Cu-sulfate-bath, ITO-transparent-conductive-oxide, silver-Ag-cap]
known_failure_modes: [TCO-pitting-during-plating, Cu-finger-oxidation-damp-heat, plating-resist-undercut, a-Si-H-passivation-degradation, FF-degradation-contact-resistance]
sources: [2018-electrochemsci-barrier-properties-electroplated-ni, 2019-hatt-noble-bifacial-shj-aip, 2019-hatt-noble-shj-solrrl, 2021-hatt-stable-cu-plated-shj-eupvsec, atotech-cupracid-ultra-a-tds]
tags: [SHJ, plating, native-oxide-mask, AlOx, resist-free, Fraunhofer-ISE, fine-line]
---

# NOBLE Selective Cu Plating

## What it measures / does
Native Oxide Barrier Layer for Electroplating: a Fraunhofer ISE-developed selective Cu-plating process for SHJ. A thin PVD Cu/Al (or Ag/Al) stack is deposited on the ITO; the Al layer's self-passivating native AlOx serves as the plating mask. NaOH(aq) inkjet ink (or fs-UV laser) selectively etches the Al only along the desired grid; Cu and Ag are then electroplated only into the openings; residual PVD layers are etched back. Saves one process step + waste-water treatment vs the CSEM 7-step organic-resist route.

## When to use it
Used as the SHJ-specific selective-plating route in Fraunhofer ISE's Cu-on-TCO architecture. Demonstrated up to 22.6% on large-area SHJ cells (matching SP Ag reference); 21.4% with laser variant. Provides the most directly hypothesis-relevant demonstration of plated Cu reaching parity with screen-printed Ag on industrial SHJ.

## Key parameters
- PVD seed: Cu(100 nm) / Al(50-100 nm) on ITO; or Ag/Al variants.
- Inkjet ink: 1 wt% NaOH(aq), 2-5 pL droplets.
- AlOx contact angle: hydrophobic 100-120 deg required (achieved after ~5 d ambient or 1 d at 50 C / 6% RH).
- Plating: pulsed forward/reverse current, 6 A/dm², 15 ms forward / 1 ms reverse, anodic:cathodic 4.5; slightly acidic CuSO4 electrolyte.
- Etch selectivity: NaOH 1-4% etches Al at 2.4-11 nm/s; H3PO4/HNO3 (60/3.25%) etches Cu/Ag at >10 nm/s, Al <1 nm/s; (NH4)2S2O8 / FeCl3 etch Cu only.
- Final stack: PVD-Cu(50 nm) / plated-Cu(1-10 um) / immersion-Ag(~200 nm).
- Performance: rho_c 0.1-1 mOhm.cm² (Hatt 2021), >=2 N/mm peel; finger 25-30 um wide.
- Anneal 200 C / 15 min recovers a-Si:H sputtering damage.

## Common variants / alternatives
- 7-step CSEM organic-resist route: 24.1% bifacial record but more wet steps + waste-water.
- 6-step Kaneka dielectric route.
- [[Cu-electroplating-acid-bath]] — direct Cu-on-TCO without mask (SunDrive proprietary).
- [[inkjet-mask-patterning]] — analogous role with hot-melt resist instead of NaOH.

## Things to watch for (failure modes)
- [[../failure-modes/TCO-pitting-during-plating]] — PVD-metal etch-back can attack ITO; addressed by selective etchants (Hatt 2019).
- [[../failure-modes/Cu-finger-oxidation-damp-heat]] — Ag immersion cap mitigates; only few nm of Cu un-capped on flank.
- [[../failure-modes/plating-resist-undercut]] — eliminated by going resist-free.
- [[../failure-modes/a-Si-H-passivation-degradation]] — sputtering / laser risk; Hatt 2021 quantifies <=4.7 uJ fs-UV pulse-energy preserves PL.
- [[../failure-modes/FF-degradation-contact-resistance]] — laser-pattern variant FF 76.3% vs 80.5% inkjet due to PVD-Al inhomogeneity.

## Sources
- [[2018-electrochemsci-barrier-properties-electroplated-ni]] — implicitly relevant; barrier-design half of the NOBLE-style stack.
- [[2019-hatt-noble-bifacial-shj-aip]] — full-area 156x156 mm² demonstration at 20.0% (companion paper); contact-angle evolution detailed.
- [[2019-hatt-noble-shj-solrrl]] — foundational paper; 20.2% lab cell, rho_c 1.8-4.0 mOhm.cm²; etch selectivity table.
- [[2021-hatt-stable-cu-plated-shj-eupvsec]] — large-area demonstration: 12 cells reproducibly 22.6%; laser variant 21.4%.
- [[atotech-cupracid-ultra-a-tds]] — chemistry-compatible commercial acid Cu bath.
