---
type: reagent
slug: silver-Ag-cap
aliases: [Ag cap layer, immersion silver, plated Ag finish, LIP Ag]
cas: 7440-22-4 (Ag metal)
formula: Ag (~200 nm – 1 µm)
suppliers:
  - name: Atotech (MKS)
    catalog: Solar industry plating line — Ag cap chemistry
    grade: production
    url: https://www.atotech.com/products/general-metal-finishing/solar-industry/
  - name: MacDermid Enthone / Coventya
    catalog: immersion / electroplated Ag baths
    grade: production
    url: null
storage: room-temperature; chloride-sensitive (AgCl tarnish); cap layers stored ambient on cells
hazards: low — Ag metal; cyanide-based older Ag plating chemistries are highly toxic but largely replaced by sulfite or thiosulfate chemistries
known_failure_modes: [Cu-out-diffusion-through-cap-stack, Cu-finger-corrosion-encapsulant, finger-adhesion-loss-after-DH, EVA-acetic-acid-corrosion]
sources: [2010-bartsch-lip-pvsc, 2014-rehman-nicu-plating-csi-review, 2019-hatt-noble-bifacial-shj-aip, 2019-hatt-noble-shj-solrrl, 2019-karas-damp-heat-degradation-shj-cu, 2021-hatt-stable-cu-plated-shj-eupvsec, 2022-arena-sundrive-copper-metallisation-demonstration, 2022-karas-cu-outdiffusion-damp-heat, atotech-solar-industry-overview, dupont-solamet-pv21a-tech-sheet, dupont-solamet-pv56s-data-sheet]
tags: [cap-layer, oxidation-protection, solderability, finishing-layer]
---

# Silver (Ag) cap

## What it is
A thin (~200 nm – 1 µm) silver finishing layer plated or immersion-deposited over the top of the Cu finger. Its dual purpose is (i) to passivate the Cu surface against ambient oxidation and damp-heat corrosion, and (ii) to provide a solderable, low-contact-resistance pad for ribbon attachment. In the NOBLE process Ag is also used as a thin (~200 nm) immersion cap that protects the contact flank from corrosion through encapsulant.

## Common uses
- Outer cap on the Ni/Cu/Ag electroplated front grid ([[atotech-solar-industry-overview]], [[2010-bartsch-lip-pvsc]], [[2014-rehman-nicu-plating-csi-review]]).
- Immersion-Ag finish in NOBLE Cu plating workflow on SHJ ([[2019-hatt-noble-shj-solrrl]], [[2019-hatt-noble-bifacial-shj-aip]], [[2021-hatt-stable-cu-plated-shj-eupvsec]]).
- LIP Ag cap (~1 µm) in Karas et al. damp-heat studies on c-Si Ni/Cu/Ag stack ([[2019-karas-damp-heat-degradation-shj-cu]], [[2022-karas-cu-outdiffusion-damp-heat]]).
- Capping option in SunDrive's plated-Cu SHJ (Ag or Sn) ([[2022-arena-sundrive-copper-metallisation-demonstration]]).

## Key spec / concentration ranges
- Thickness 200 nm – 1 µm (LIP Ag in [[2022-karas-cu-outdiffusion-damp-heat]]: 1 µm; NOBLE immersion Ag in [[2019-hatt-noble-shj-solrrl]]: ~200 nm).
- Bulk Ag resistivity 1.58 µΩ·cm (the lowest of any metal); in cap-layer thickness this is essentially negligible vs. the underlying Cu.
- Solderability: standard non-clean L0/M0 flux; compatible with 60Sn/40Pb, 62Sn/36Pb/2Ag, 96.5Sn/3.5Ag ribbons ([[dupont-solamet-pv21a-tech-sheet]], [[dupont-solamet-pv56s-data-sheet]]).
- Finger adhesion: NOBLE Cu/Ag stack delivers ≥2 N/mm peel force, beating screen-printed Ag (≤0.5 N/mm) ([[2021-hatt-stable-cu-plated-shj-eupvsec]]).

## Alternatives / variants
- [[tin-Sn-cap]] — cheaper alternative; primary trade-off is Cu-Sn IMC + Kirkendall void formation in DH.
- [[low-T-Ag-paste-generic-SHJ-grade]] / [[low-T-Ag-paste-Solamet-PV56S]] — screen-printed Ag tabbing pad as a comparator architecture (different process, not a "cap" sensu stricto).
- Ni-co-deposition into Cu (~9 at%) — used to stabilise the Cu-Sn IMC system and reduce the need for a thick Ag cap ([[2022-karas-cu-outdiffusion-damp-heat]]).

## Gotchas
- Cu STILL out-diffuses through Ag in damp heat — observed by SIMS/EDS in Karas et al. ([[2022-karas-cu-outdiffusion-damp-heat]]); mechanism is grain-boundary diffusion driven by acetic acid sink at the EVA interface. Ag cap alone is NOT a permanent diffusion barrier — pair with POE encapsulant or grain-boundary-engineered Ag.
- Ag cap consumes ~0.1–0.5 mg of Ag/cell (vs. ~16–25 mg for screen-printed front Ag) — significant Ag reduction but NOT silver-free.
- Immersion Ag plating chemistries can attack Cu if pH/T is off-spec — verify deposit thickness by XRF or EDS.
- AgCl tarnish from chloride traces (e.g., bath drag-out from Cu Cl⁻) discolours the cap and impairs solderability.

## Sources
- [[atotech-solar-industry-overview]] — Ag cap as one of two industrial finishing options in Atotech Ni/Cu/Ag stack.
- [[2019-hatt-noble-shj-solrrl]] / [[2019-hatt-noble-bifacial-shj-aip]] / [[2021-hatt-stable-cu-plated-shj-eupvsec]] — immersion-Ag (~200 nm) protecting Cu contact flank in NOBLE.
- [[2022-karas-cu-outdiffusion-damp-heat]] — Ag cap fails to fully block Cu out-diffusion in EVA-encapsulated DH; mechanism + SIMS evidence.
- [[2019-karas-damp-heat-degradation-shj-cu]] — companion DH study on Cu-plated PERC with Ag and Sn caps.
- [[2010-bartsch-lip-pvsc]] / [[2014-rehman-nicu-plating-csi-review]] — historical Ag-cap baseline for Ni/Cu/Ag stacks.
- [[2022-arena-sundrive-copper-metallisation-demonstration]] — Ag (or Sn) cap option in SunDrive plated-Cu SHJ.
- [[dupont-solamet-pv21a-tech-sheet]] / [[dupont-solamet-pv56s-data-sheet]] — solderability spec for Ag pad surface (relevant to cap behavior).
