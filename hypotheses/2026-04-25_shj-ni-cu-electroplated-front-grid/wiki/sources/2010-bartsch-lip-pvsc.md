---
type: source
id: 2010-bartsch-lip-pvsc
source_type: paper
title: "Copper as Conducting Layer in Advanced Front Side Metallization Processes for Crystalline Silicon Solar Cells, Exceeding 20% on Printed Seed Layers"
authors: ["Bartsch, J.", "Mondon, A.", "Schetter, C.", "Hörteis, M.", "Glunz, S.W."]
year: 2010
doi: null
url: null
raw_path: raw/papers/2010-bartsch-lip-pvsc.pdf
tags: [light-induced-plating, ni-cu-stack, copper-front-grid, accelerated-aging, fraunhofer-ise, homojunction]
---

# Copper as Conducting Layer in Advanced Front Side Metallization Processes for Crystalline Silicon Solar Cells, Exceeding 20% on Printed Seed Layers

## Summary
Foundational Fraunhofer ISE paper (35th PVSC, 2010) demonstrating that a Ni-barrier + light-induced Cu plating (LIP) stack on aerosol/screen-printed Ag seed layers can match silver-LIP reference performance on c-Si solar cells, with a best efficiency of 20.3% on FZ high-efficiency substrates and 16.8% on industrial Cz. Crucially, it introduces a thermal accelerated aging procedure (Arrhenius extrapolation from 200°C stress to 80°C field operation) showing that without a Ni barrier, Cu-containing metallizations on Ag seed degrade in 0.1–3 years equivalent, but introduction of a Ni barrier extrapolates to >1000 years stable operation. Establishes the basic Ni/Cu/Sn or Ni/Cu/Ag stack architecture later inherited by SHJ plating routes.

## Key claims
- Cost differential at 2010 prices: Ag €388.8/kg vs Cu €4.1/kg vs Ni €12.8/kg (Table 1, p. 1) — ~95× cost ratio Ag:Cu by mass.
- Aerosol-Ni-Cu-Sn stack on FZ 2×2 cm² high-efficiency substrate reached η = 20.3%, FF = 80.8%, Voc = 646.4 mV, Jsc = 38.86 mA/cm² (Table 2, p. 2) — comparable to aerosol-Ag-LIP reference.
- On 5×5 cm² Cz with printed-and-fired seed: Ni/Cu/Sn stack reached 16.8% best efficiency, statistically equivalent to Ag-LIP reference at 16.5% (Table 3, p. 3).
- Direct-plated Ni-Ni-Cu-Sn (Ni seed by LIP onto laser-ablated SiNx) achieved 17.2% on good area but with FF gap (72.7% vs pFF 79.4%) attributed to inhomogeneous plating / ablation (Table 4).
- Without Ni barrier: aerosol-Ag-seed + Cu plating extrapolates to only 0.1 year of 95% relative efficiency at 80°C; screen-printed-Ag-seed + Cu plating to 3 years.
- With sufficient Ni barrier on aerosol seed: extrapolated >1000 years to 95% pFF (Fig. 4); fully Ni-plated cells showed no degradation even after 1000 h at 200°C (Fig. 5).
- LIP setup is described in Bartsch et al. J. Applied Electrochemistry 40 (2010) 757–765 [Ref 5].

## Methods used
- [[../methods/light-induced-plating]] — Cu plating step on both screen-printed and Ni-seed substrates; uses cell's own photovoltage to drive deposition.
- [[../methods/electroless-Ni-deposition]] — light-supported electroless Ni from commercial bath; alternative to LIP-Ni.
- [[../methods/electroplated-Ni-Cu-stack]] — Ni-barrier + Cu-conductor + Sn cap as final stack.
- [[../methods/laser-ablation-of-dielectric]] — SiNx ARC opened by laser before direct Ni-on-Si plating.
- [[../methods/IV-curve-measurement]] — STC sun simulator IV.
- [[../methods/dark-IV-suns-Voc]] — Suns-Voc / pFF used as primary contamination indicator during accelerated aging.
- [[../methods/damp-heat-aging-1000h]] — partly relevant; here uses thermally accelerated aging (200°C hotplate, Arrhenius extrapolation), not damp heat per se. See `notes` in failure-modes section below.

## Reagents
- [[../reagents/nickel-sulfamate-bath]] — Watts-type Ni electrolyte, lab-prepared.
- [[../reagents/acid-Cu-sulfate-bath]] — commercial Cu electrolyte for LIP.
- [[../reagents/tin-Sn-cap]] — Sn cap to protect Cu and ease soldering.
- [[../reagents/silver-Ag-cap]] — alternative cap as referenced.

## Organisms / substrates
- [[../organisms/monocrystalline-Si-wafer-p-type]] — 5×5 cm² Cz industrial PERC-style cells with Al-BSF and aerosol seed.
- [[../organisms/monocrystalline-Si-wafer-n-type]] — not directly used in this 2010 paper; substrates here are p-type FZ and Cz.

## Failure modes flagged
- [[../failure-modes/Cu-diffusion-into-c-Si]] — primary risk addressed; Ni layer characterized as the diffusion barrier whose thickness/coverage/homogeneity determine outcome.
- [[../failure-modes/Ni-barrier-pinholes]] — implicit: when Ni layer is "insufficient regarding certain parameters (e.g. thickness, coverage, homogeneity)" the inhibition diminishes.
- [[../failure-modes/Voc-degradation-Cu-contamination]] — measured via pFF drop in Suns-Voc.
- [[../failure-modes/FF-degradation-contact-resistance]] — observed FF gap on Ni-plated full-stack cells attributed to plating inhomogeneity.

## Supports / contradicts
- Supports: [[2014-rehman-nicu-plating-csi-review]] (cites this as foundational LIP/Ni-Cu work)
- Supports: [[2017-jeon-electroless-ni-front-metallization]] (Ni-as-Cu-barrier rationale)
- Conceptually predates SHJ-specific work but provides the homojunction baseline behind: [[2019-hatt-noble-shj-solrrl]], [[2018-pv-tech-metallization-interconnection-bifacial-shj]]

## Notable quotes
- "Solar cells with advanced metal stack systems have shown no significant decrease in performance during this thermal stress test." — abstract.
- "Cells were tempered at different temperatures, and the corresponding degradation data was plotted in an Arrhenius plot. A linear fit … and an extrapolation to assumed module exposure conditions (constant thermal load of 80°C) gave an estimation of the limitation of the lifetime of such cells due to copper penetration."
- "The light IV-curve was measured after almost 1000 h of thermal exposure at 200°C. The IV parameters were the same as before the degradation experiment."
