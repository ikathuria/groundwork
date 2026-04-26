---
type: source
id: 2017-jeon-electroless-ni-front-metallization
source_type: paper
title: "Electroless Nickel Deposition for Front Side Metallization of Silicon Solar Cells"
authors: ["Hsieh, S.H.", "Hsieh, J.M.", "Chen, W.J.", "Chuang, C.C."]
year: 2017
doi: "10.3390/ma10080942"
url: "https://www.mdpi.com/1996-1944/10/8/942"
raw_path: raw/papers/2017-jeon-electroless-ni-front-metallization.pdf
tags: [electroless-ni, ni-silicide, native-oxide, hf-activation, voc, sheet-resistance, c-si]
---

# Electroless Nickel Deposition for Front Side Metallization of Silicon Solar Cells

## Summary
Hsieh et al. (Materials, MDPI, 2017) systematically characterize electroless Ni-P seed films on textured silicon: deposition rate ≈1 nm/s in their bath, continuous coverage above ~45 nm, and silicide phases vs anneal temperature (Ni₂Si and NiSi between 300–600°C, NiSi₂ + agglomeration above 700°C). They show the Ni/Cu stack on Si is highly sensitive to a native oxide interlayer that survives HF dipping and retards silicide formation; using an HF-bearing PdCl₂ activation bath (B2) instead of standard PdCl₂/HCl (B1) improves Voc from 0.590 V (no anneal) to 0.632 V — a +42 mV gain — confirming that interfacial oxide control is more important than Ni thickness alone. Provides quantitative TEM/XRD/sheet-resistance grounding for the silicide-formation methods used by SHJ-Ni/Cu work, even though this paper itself is on a homojunction Cu/Ni stack.

## Key claims
- Electroless Ni-P deposition rate ≈1 nm/s on textured Si at 70°C, pH 5; continuous films from 45 nm thickness onward.
- XRD: Ni₂Si and NiSi present in 300–800°C anneals; NiSi₂ phase appears at 700°C and dominates with agglomeration at 800°C.
- TEM: silicide layer 125–160 nm thick after 60 s plate + 500–600°C anneal; grows to 210–290 nm at 700°C.
- Sheet resistance trend: drops with annealing 350–600°C as Ni₂Si/NiSi forms; abruptly rises above 700°C as NiSi₂ agglomerates.
- Voc with bath 1 (PdCl₂/HCl, no HF) = 0.590 V before anneal, declining to 0.570 V after 20 min at 500°C.
- Voc with bath 2 (PdCl₂ + 3 mL/L HCl + 83 mL/L HF activation) = 0.632 V before anneal — +42 mV vs B1, attributed to removal of native SiOx that otherwise blocks silicide formation.
- Mondon et al. (Fraunhofer ISE, cited as ref 15) showed that even with HF dip just before plating, an interfacial oxide layer regrows and remains observable.

## Methods used
- [[../methods/electroless-Ni-deposition]] — primary deposition; sensitization in SnCl₂/HCl, activation in PdCl₂(/HF)/HCl, then bath.
- [[../methods/Cu-electroplating-acid-bath]] — Cu electroplated on top of Ni seed.
- [[../methods/SIMS-depth-profile]] — not done, but TEM cross-section serves equivalent role here.
- [[../methods/IV-curve-measurement]] — AM1.5 measurement before/after anneal.
- [[../methods/four-point-probe-sheet-resistance]] — used to track silicide phase progression.
- [[../methods/dark-IV-suns-Voc]] — Voc tracked as primary cell-level metric.

## Reagents
- [[../reagents/nickel-phosphorus-NiP-electroless]] — main Ni-source bath, sodium hypophosphite reductant.
- [[../reagents/acid-Cu-sulfate-bath]] — Cu plating step over Ni.
- [[../reagents/sulfuric-acid-H2SO4]] — implicit in Cu bath.
- New reagent flagged: PdCl₂/HCl/HF activation solution — see `new_entities` block in W1 return JSON.

## Organisms / substrates
- [[../organisms/monocrystalline-Si-wafer-p-type]] — textured Si solar cell precursors with diffused emitter.

## Failure modes flagged
- [[../failure-modes/Cu-diffusion-into-c-Si]] — Ni acts as kinetic + thermodynamic barrier; this paper highlights that the silicide quality determines the barrier function.
- [[../failure-modes/Ni-barrier-pinholes]] — discussed via deposit continuity below 45 nm.
- [[../failure-modes/Voc-degradation-Cu-contamination]] — Voc measurements before/after anneal are the principal monitor.
- [[../failure-modes/FF-degradation-contact-resistance]] — implicit: native oxide raises series resistance.

## Supports / contradicts
- Supports: [[2010-bartsch-lip-pvsc]] (Ni-as-barrier rationale), [[2014-rehman-nicu-plating-csi-review]] (silicide-phase ranges quoted match 2014 review)
- Methodologically informs: [[2019-hatt-noble-shj-solrrl]], [[2019-hatt-noble-bifacial-shj-aip]] (which use PVD Cu-seed instead of electroless Ni, partly to avoid the very oxide-control problem characterized here)

## Notable quotes
- "Mondon et al. reported that, despite the HF-dip prior to nickel plating, an interfacial oxide layer was found between nickel and silicon. Native oxide seems to regrow quickly up to a thickness that effectively hinders silicide formation."
- "When the HF is incorporated, the Voc is significantly improved to 0.632 V" — confirming the criticality of native-oxide management in any plated-Ni/Cu stack.
