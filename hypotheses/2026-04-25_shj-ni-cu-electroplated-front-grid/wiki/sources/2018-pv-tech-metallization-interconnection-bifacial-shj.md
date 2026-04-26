---
type: source
id: 2018-pv-tech-metallization-interconnection-bifacial-shj
source_type: paper
title: "Metallization and Interconnection for High-Efficiency Bifacial Silicon Heterojunction Solar Cells and Modules"
authors: ["Faes, A.", "Lachowicz, A.", "Bettinelli, A.", "Ribeyron, P.-J.", "Lerat, J.-F.", "Munoz, D.", "Geissbühler, J.", "Li, H.-Y.", "Ballif, C.", "Despeisse, M."]
year: 2018
doi: ""
url: https://www.pv-tech.org/wp-content/uploads/legacy-publication-pdfs/889afc20b1-metallization-and-interconnection-for-highefficiency-bifacial-silicon-heterojunction-solar-cells-and-modules.pdf
raw_path: raw/papers/2018-pv-tech-metallization-interconnection-bifacial-shj.pdf
tags: [SHJ, bifacial, metallization, Cu-plating, seed-layer, CSEM, CEA-INES]
created: 2026-04-26
updated: 2026-04-26
---

# Metallization and Interconnection for High-Efficiency Bifacial Silicon Heterojunction Solar Cells and Modules

**Faes, A., Lachowicz, A., Bettinelli, A., Ribeyron, P.-J., Lerat, J.-F., Munoz, D., Geissbühler, J., Li, H.-Y., Ballif, C., Despeisse, M.** (CSEM PV-Center + CEA-INES) — *Photovoltaics International, 41, pp. 65–75, 2018*.

## Summary

Joint CSEM + CEA-INES review on SHJ metallization and module integration with cost data per busbar count and interconnection style. Tabulates Ag laydown for 4BB / 5BB / 6BB cells under soldering, ECA gluing, and wire interconnection — the canonical industry numbers (165–20 mg front; 255–40 mg rear). Reviews Cu-electroplating process flows (PVD seed + organic mask, patterned PVD seed + dielectric, printed seed-grid + dielectric) and shows CSEM peel-test data on plated-Cu cells with hot-melt inkjet mask. Reports Cu plating share at ~3% of SHJ industrial market in 2018, projected to grow to ~8% by 2025.

## Key claims

- 2018 Ag laydown for SHJ cells (Table 1, mg/cell front + back): 4BB soldered = 420 mg total; 5BB ECA = 205 mg; SWCT optimised = 60 mg total — over 7× reduction is achievable without changing the metallization technology.
- Bulk resistivity of best LCT Ag paste = 5–6 µΩ·cm (10/30 min at 200 °C, 2018); projected to 3.0 µΩ·cm by 2022 — still ~2× pure Ag.
- Of three SHJ Cu-plating process routes:  
  (3A) full-area PVD seed (with barrier/adhesion sublayer + conductive sublayer) + organic mask — cheapest masking but bevel-edged fingers ≥70 µm;  
  (3B) patterned PVD seed + dielectric — narrowest geometries;  
  (3C) printed seed-grid + dielectric — paste-printed seed Cu plated up.
- Photolithography can give ~20 µm rectangular fingers but is too expensive for industry.
- Cu plating activity reported by Panasonic, Kaneka (25.1% record cell), Choshu Industry, Tetrasun, Silevo, and Sunpreme (402 Wp 72-cell bifacial module).
- Soldered ribbon interconnection on LCT Ag requires busbar thickness 25–35 µm to avoid silver leaching → drives Ag use up. ECA and SWCT relax this.
- Module reliability data (Fig. 4): peel test 180° + thermal-cycling and damp-heat on small R&D modules with sputtered seed + hot-melt-inkjet mask — passes the standard IEC 61215 dwell.

## Methods used

- [[methods/screen-printed-Ag-paste]] — LCT-Ag baseline; the comparator throughout.
- [[methods/Cu-electroplating-acid-bath]] — central technology of section 3.
- [[methods/Ni-sputter-deposition]] — PVD seed (Ni or Cu/Al) referenced as one of the three process flows.
- [[methods/inkjet-mask-patterning]] — hot-melt inkjet mask flow (CSEM).
- [[methods/laser-ablation-of-dielectric]] — opening of dielectric mask in route 3B.
- [[methods/photolithography-mask-patterning]] — research-grade narrow-finger comparator.
- [[methods/peel-test-90deg]] — Fig. 4 shows 180° peel + DH/TC reliability on plated cells.
- [[methods/damp-heat-aging-1000h]] — module-level reliability test referenced.
- [[methods/temperature-cycling-IEC61215-TC200]] — companion reliability test.

## Reagents

- [[reagents/low-T-Ag-paste-generic-SHJ-grade]] — the Ag baseline.
- [[reagents/ITO-transparent-conductive-oxide]] — SHJ TCO front layer.
- [[reagents/acid-Cu-sulfate-bath]] — Cu electroplating chemistry.
- [[reagents/inkjet-plating-resist]] — hot-melt mask material (CSEM-style flow).
- [[reagents/electrically-conductive-adhesive-ECA]] — ECA gluing for ribbon interconnection.

## Organisms / substrates

- [[organisms/monocrystalline-Si-wafer-n-type]] — SHJ wafer baseline.
- [[organisms/SHJ-cell-M6]] — implied 6" cell format (Table 1 numbers).
- [[organisms/full-size-module-72-cell]] — Sunpreme 402 Wp bifacial module example.

## Failure modes flagged

- [[failure-modes/silver-supply-bottleneck]] — explicit cost-driver framing; SHJ Ag laydown ~2× a PERC cell.
- [[failure-modes/FF-degradation-contact-resistance]] — finger-line-resistance optimisation is the central engineering goal.
- [[failure-modes/finger-adhesion-loss-after-DH]] — peel-test data on plated cells (Fig. 4) tracks this.
- [[failure-modes/plating-resist-undercut]] — implicit in masking-flow discussion (organic resist bevel edges drive ≥70 µm finger widths).
- [[failure-modes/TCO-pitting-during-plating]] — implicit in route 3A vs 3C choice (full-area seed protects TCO; patterned seed exposes it).

## Supports / contradicts

- **Supports:** [[sources/2018-pv-international-metallization-shj]] — same authors, near-identical content; cross-published in same edition of Photovoltaics International.
- **Supports:** [[sources/2018-pvtech-metallization-shj-cells-modules]] — same group, module-level companion piece.
- **Supports:** [[sources/2023-tepner-printing-tech-csi-review]] — Tepner & Lorenz updated the LCT-Ag bulk-resistivity trajectory; this paper is their 2018 anchor.
- **Contradicts:** [[sources/2022-arena-sundrive-copper-metallisation-demonstration]] — Faes et al. assumes PVD seed is required for adhesion; SunDrive's proprietary process claims direct plating to TCO without PVD seed.

## Notable quotes

> "Owing to the impressive improvements in screen printing and the reduction of silver price the share of plating in production is much lower than originally predicted, with Sunpower and IBC cells being the main contributor." — *p. 70*

> "For the first processing route (figure 3A), the seed layer is usually deposited by PVD (A2) and consists of a stack comprising a barrier or adhesion layer and a conductive layer." — *p. 70*

> "Plating activities for SHJ solar cells (or similar) have been reported by several companies such as Panasonic, Kaneka, Choshu Industry Co. LTD, Tetrasun, Silevo and Sunpreme." — *p. 70*
