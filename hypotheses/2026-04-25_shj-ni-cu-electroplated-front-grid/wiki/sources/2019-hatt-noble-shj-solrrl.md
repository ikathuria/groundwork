---
type: source
id: 2019-hatt-noble-shj-solrrl
source_type: paper
title: "Native Oxide Barrier Layer for Selective Electroplated Metallization of Silicon Heterojunction Solar Cells"
authors: ["Hatt, T.", "Kluska, S.", "Yamin, M.", "Bartsch, J.", "Glatthaar, M."]
year: 2019
doi: "10.1002/solr.201900006"
url: "https://onlinelibrary.wiley.com/doi/10.1002/solr.201900006"
raw_path: raw/papers/2019-hatt-noble-shj-solrrl.pdf
tags: [SHJ, NOBLE, electroplated-Cu, native-oxide, Al2O3-mask, ITO, inkjet-NaOH, contact-resistivity, Fraunhofer-ISE]
---

# Native Oxide Barrier Layer for Selective Electroplated Metallization of Silicon Heterojunction Solar Cells

## Summary
Foundational Solar RRL paper introducing Fraunhofer ISE's "NOBLE" (Native Oxide Barrier Layer for Electroplating) process for SHJ cells: a thin PVD Cu/Al or Ag/Al stack is deposited on ITO, then the Al layer is selectively patterned by inkjet-printed NaOHaq (1 wt%) — opening grid lines into the Al while its self-passivating Al₂O₃ inhibits Cu plating elsewhere. Cu and Ag are then electroplated only into the openings; finally the residual PVD layers are etched back. The route eliminates the organic resist mask used by CSEM/Adachi-style routes (saving one process step + waste-water treatment) and uses <10% of cell area for printed mask (vs >90% in resist routes). First lab demonstration: 20.2% efficiency, FF = 78.0%, contact resistivities 1.8–4.0 mΩ·cm² to ITO.

## Key claims
- NOBLE replaces organic resist with the native Al₂O₃ on a thin (100 nm) PVD Al layer; only the contact-grid area (<10% of cell) needs printing. Saves one processing step vs the 7-step "Resist masking route" used by CSEM (which reached 24.1%) and the 6-step "Dielectric masking" Kaneka route.
- Etching selectivity systematically characterized (Fig. 3, p. 11): NaOH (1–4%) etches Al at 2.4–11 nm/s but does not attack Cu or Ag at all; H₃PO₄/HNO₃ (60/3.25%) etches Cu and Ag at >10 nm/s while Al only at <1 nm/s; (NH₄)₂S₂O₈ (2.5%) and FeCl₃ (5%) selectively etch Cu; NH₃/H₂O₂ (5/4.5%) selectively etches Ag and Ti.
- Plating uses pulsed forward/reverse current (6 A/dm², 15 ms forward / 1 ms reverse, anodic:cathodic ratio 4.5) on a slightly acidic Cu sulfate electrolyte; pulse-reverse selectively dissolves parasitic seeds.
- TLM contact resistivities (Table 1, p. 15) on commercial SHJ-ITO precursors:
  - c-Si(n)/a-Si:H(i/n)/ITO/CuPVD/Cu-Agplated: ρc = 4.0 ± 0.4 mΩ·cm²
  - c-Si(n)/a-Si:H(i/n)/ITO/AgPVD/Cu-Agplated: ρc = 3.5 ± 0.8 mΩ·cm²
  - c-Si(n)/a-Si:H(i/p)/ITO/CuPVD/Cu-Agplated: ρc = 2.8 ± 0.5 mΩ·cm²
  - c-Si(n)/a-Si:H(i/p)/ITO/AgPVD/Cu-Agplated: ρc = 1.8 ± 0.3 mΩ·cm²
  Authors note Lee et al. report 0.4–0.8 mΩ·cm² with optimized Cu-alloy PVD seed.
- First NOBLE lab cell: η = 20.2%, FF = 78.0%, Voc = 718 mV, Jsc = 36.1 mA/cm², pFF = 80.5% on 6.25 cm² SHJ (Table 2, p. 16). Reference screen-printed cell at 21.5% on same precursor batch.
- Final stack: PVD-Cu(50 nm) / plated-Cu(1–10 µm) / immersion-Ag(~200 nm) — an effective Ag-cap to prevent Cu oxidation, much thinner than CSEM resist route's exposed Cu flank.
- Anneal 200°C / 15 min in air recovers a-Si:H sputtering damage.
- Fingers ~25 µm wide demonstrated by single inkjet pass with 2–5 pL droplets of NaOHaq.

## Methods used
- [[../methods/NOBLE-selective-Cu-plating]] — the named process: native-oxide-barrier on PVD-Al layer.
- [[../methods/Ni-sputter-deposition]] — Cu/Al PVD stack characterization (note: Cu-PVD is used here as seed, not Ni; but the sputter step itself is canonical).
- [[../methods/inkjet-mask-patterning]] — inkjet-printing of 1% NaOH(aq) to pattern Al.
- [[../methods/Cu-electroplating-acid-bath]] — pulsed-current Cu plating, slightly acidic CuSO₄.
- [[../methods/thermal-evaporation-Ag-cap]] — thin (~200 nm) immersion Ag capping.
- [[../methods/transfer-length-method]] — TLM on diced cells, 1 cm length, both polarities.
- [[../methods/peel-test-90deg]] — Kapton tape tests passed; cited prior peel forces >4 N/mm on PVD/TCO with resist-mask routes.
- [[../methods/IV-curve-measurement]] — STC, AM1.5g.
- [[../methods/dark-IV-suns-Voc]] — pFF = 80.5% reported.

## Reagents
- [[../reagents/acid-Cu-sulfate-bath]] — slightly acidic CuSO₄ electrolyte.
- [[../reagents/ITO-transparent-conductive-oxide]] — 80 nm ITO on commercial SHJ precursor.
- [[../reagents/a-Si-H-passivation]] — i/n and i/p stacks.
- [[../reagents/silver-Ag-cap]] — immersion-Ag finishing.
- New reagent flagged: dilute aqueous NaOH ink (1 wt%) for selective Al etching — see `new_entities`.
- New reagent flagged: H₃PO₄/HNO₃ etch-back mixture (50°C) — see `new_entities`.

## Organisms / substrates
- [[../organisms/SHJ-cell-M6]] — commercial 6" bifacial SHJ precursors covered both sides with ITO; lab cell here is 6.25 cm² diced piece.
- [[../organisms/monocrystalline-Si-wafer-n-type]] — n-type c-Si as base; both polarity stacks measured.

## Failure modes flagged
- [[../failure-modes/TCO-pitting-during-plating]] — addressed; H₃PO₄/HNO₃ etch-back checked by SEM cross-section, ITO thickness preserved (~80 nm both before and after).
- [[../failure-modes/Cu-finger-oxidation-damp-heat]] — addressed by Ag cap.
- [[../failure-modes/plating-resist-undercut]] — eliminated by avoiding organic resist altogether.
- [[../failure-modes/a-Si-H-passivation-degradation]] — risk from sputtering; mitigated by 200°C / 15 min anneal.
- [[../failure-modes/FF-degradation-contact-resistance]] — main observed issue (FF 78% vs pFF 80.5%) attributed to non-optimized grid pitch and rear metallization, not the NOBLE process per se.
- [[../failure-modes/Cu-finger-corrosion-encapsulant]] — implicitly addressed by the thin Ag cap.

## Supports / contradicts
- Supports: [[2018-pv-tech-metallization-interconnection-bifacial-shj]] (cited as ref 25 → 24.1% bifacial), [[2018-pv-international-metallization-shj]]
- Direct precursor to: [[2019-hatt-noble-bifacial-shj-aip]], [[2021-hatt-stable-cu-plated-shj-eupvsec]]
- Foundational Cu-on-SHJ baseline drawn from: [[2010-bartsch-lip-pvsc]], [[2014-rehman-nicu-plating-csi-review]]

## Notable quotes
- "Contact resistivities below 3 mΩ cm² were achieved on stack systems of ITO-CuPVD-Cuplated-Agplated and the improvement of the sputtering might allow reaching 0.4 mΩ cm² as reported in the literature." — Conclusion.
- "On the contact flank, only few nanometers of Cu are not protected by Ag in comparison to the 'Resist route' which lets several micrometers un-capped." — Section 4.2; key reliability advantage.
- "The forward / reverse pulsed current avoids parasitic plating … the plating selectivity is favored on large Cu regions while parasitic Cu-seeds are dissolved during the short reverse current pulse."
