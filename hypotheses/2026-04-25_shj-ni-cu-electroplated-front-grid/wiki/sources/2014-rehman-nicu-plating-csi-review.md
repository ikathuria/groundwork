---
type: source
id: 2014-rehman-nicu-plating-csi-review
source_type: paper
title: "Review of the Potential of the Ni/Cu Plating Technique for Crystalline Silicon Solar Cells"
authors: ["Rehman, A.", "Lee, S.H."]
year: 2014
doi: "10.3390/ma7021318"
url: "https://www.mdpi.com/1996-1944/7/2/1318"
raw_path: raw/papers/2014-rehman-nicu-plating-csi-review.pdf
tags: [review, ni-cu-plating, light-induced-plating, electroless-ni, c-si, contact-adhesion, parasitic-plating, reliability]
---

# Review of the Potential of the Ni/Cu Plating Technique for Crystalline Silicon Solar Cells

## Summary
Comprehensive review (Materials, MDPI, 2014) of Ni/Cu plating for c-Si front-side metallization, predating the SHJ-specific wave but covering the LIP physics, electroless-Ni mechanisms, ARC patterning options, contact adhesion, parasitic ("ghost") plating, and long-term reliability — all of which are inherited by the SHJ-Ni/Cu hypothesis. Provides a benchmark cost/conductivity table (Ag:Cu ≈ 100× by cost, ~equal conductivity), summarizes >20% efficiencies on PERC, LDSE, MWT, and HJT cells using Ni/Cu, and identifies long-term reliability as the dominant unresolved obstacle.

## Key claims
- Cost/conductivity comparison (Table 1, p. 5): Ag $21.87/troy oz, σ = 61.3×10⁶ S/m; Cu $0.225/troy oz, σ = 59.1×10⁶ S/m; Ni $0.440/troy oz, σ = 13.9×10⁶ S/m. Ni/Cu offers ~2.5× higher electrical conductivity than fired Ag at low doping and lower contact resistance.
- Cu metallization can run at 250–400°C contact-formation temperature vs 750–850°C for Ag firing — far more SHJ-compatible, though SHJ further constrains to ≤200°C.
- Ni-silicide formation during 300–400°C anneal: Ni₂Si (200–300°C), NiSi (300–700°C, low resistivity ≈14 µΩ·cm), NiSi₂ (700–900°C, high-resistivity, agglomerated).
- Reliability requirement (IEC 61215): ≤5% Pmax loss after 200 thermal cycles (-40°C to 85°C) or 1000 h damp heat (85°C / 85% RH). Fraunhofer ISE 1700 h at 200°C — pFF unchanged. IMEC: passes IEC 61215 extended damp heat + thermal cycling. Papet et al. on HJT: 3% power degradation after 3000 h damp heat — direct precedent for the present hypothesis (Section 6.5, p. 17).
- Parasitic ("ghost") plating root causes: SiNx:H pinholes (point-like) and mechanical-stress cracks; mitigated by piranha cleaning (H₂O₂ + H₂SO₄) and gentle handling.
- Adhesion: peel-strengths of 1–2.7 N/mm achievable on Ni/Cu stacks; two-stage Ni etch-back + replate process at Fraunhofer ISE delivers up to 2.5 N/mm. Ω-shaped contact resistivity demos: Seran et al. (Konstanz) reached 0.6 mΩ·cm² with two-step Ni.
- Industrial efficiencies summarized (Table 4, p. 14): Kaneka HJT 23.5%, Roth & Rau HJT 22.3%, Fraunhofer PERC 21.4%, Schott PERC 21.3%, IMEC PERC 20.79%, Hyundai LDSE 19.8% — all with Ni/Cu front contacts.
- ARC patterning options reviewed: photolithography (lab-only), etching pastes, laser-transferred Ni seed, mechanical scribing, aerosol-jet etching, laser-chemical metal deposition (LCMD) — favored for industry because it combines ablation+seeding.

## Methods used
- [[../methods/light-induced-plating]] — central technique reviewed; mechanism of photo-generated electrons reducing Cu²⁺ at front grid.
- [[../methods/electroless-Ni-deposition]] — autocatalytic Ni-P deposition with sodium hypophosphite reductant.
- [[../methods/electroplated-Ni-Cu-stack]] — full Ni-seed + Cu-conductor + Sn/Ag-cap architecture.
- [[../methods/screen-printed-Ag-paste]] — comparator throughout.
- [[../methods/transfer-length-method]] — implicit: contact resistivity 0.6 mΩ·cm² figures cited.
- [[../methods/damp-heat-aging-1000h]] — IEC 61215 reliability framework.
- [[../methods/dark-IV-suns-Voc]] — pFF as Cu-contamination tracer.
- [[../methods/photolithography-mask-patterning]] — discussed as lab benchmark.
- [[../methods/laser-ablation-of-dielectric]] — laser-doped selective emitter / LCMD reviewed.
- [[../methods/four-point-probe-sheet-resistance]] — implied throughout.

## Reagents
- [[../reagents/nickel-sulfamate-bath]] — also covers nickel chloride and nickel sulfate variants.
- [[../reagents/nickel-phosphorus-NiP-electroless]] — sodium hypophosphite + NiCl₂ reductive bath.
- [[../reagents/acid-Cu-sulfate-bath]] — CuSO₄·5H₂O + H₂SO₄ for LIP.
- [[../reagents/sulfuric-acid-H2SO4]] — bath conductor.
- [[../reagents/tin-Sn-cap]] — Sn/Ag finish to prevent oxidation.
- [[../reagents/silver-Ag-cap]] — alternative finish.
- [[../reagents/EVA-encapsulant]] — flagged for Cu interaction.

## Organisms / substrates
- [[../organisms/monocrystalline-Si-wafer-p-type]] — Cz, FZ as in PERC, LDSE, LDBC.
- [[../organisms/monocrystalline-Si-wafer-n-type]] — relevant for HJT cells listed.

## Failure modes flagged
- [[../failure-modes/Cu-diffusion-into-c-Si]] — repeatedly discussed; deep-level recombination centres.
- [[../failure-modes/Ni-barrier-pinholes]] — uniform Ni-seed coverage is challenge #1.
- [[../failure-modes/finger-adhesion-loss-after-DH]] — adhesion target 1 N/mm; multi-step process improves to 2.5 N/mm.
- [[../failure-modes/Voc-degradation-Cu-contamination]] — pFF used as proxy, monitored 1700 h.
- [[../failure-modes/FF-degradation-contact-resistance]] — focus on improving low ρc and uniformity.
- [[../failure-modes/EVA-acetic-acid-corrosion]] — implicit in capping-layer rationale ("avoids the interaction between the Cu and EVA encapsulant").

## Supports / contradicts
- Supports: [[2010-bartsch-lip-pvsc]] (cites it directly), [[2017-jeon-electroless-ni-front-metallization]]
- Supports SHJ-specific follow-on: [[2018-pv-tech-metallization-interconnection-bifacial-shj]], [[2018-pv-international-metallization-shj]]
- Foundational for: [[2019-hatt-noble-shj-solrrl]], [[2019-hatt-noble-bifacial-shj-aip]]
- Notes the Papet et al. HJT 3000 h damp-heat result that is foundational to the present hypothesis.

## Notable quotes
- "At Fraunhofer ISE, the pseudo fill factor (PFF) as measure for contamination was monitored for 1700 h at 200°C temperature and the electrical performance was observed to be unchanged" — p. 17.
- "From Papet et al., a damp heat test was conducted for Ni/Cu plated heterojunction cells showing only 3% of power degradation after 3000 h" — p. 17.
- "Although the economic advantage of Ni/Cu plated solar cells against their screen printed counterparts is striking. Yet, the plating process needs to be optimized entirely, in terms of cost and performance."
