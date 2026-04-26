---
type: source
id: 2014-rehman-nicu-plating-csi-review
source_type: paper
title: "Review of the Potential of the Ni/Cu Plating Technique for Crystalline Silicon Solar Cells"
authors: ["Rehman, A.", "Lee, S. H."]
year: 2014
doi: 10.3390/ma7021318
url: https://mdpi-res.com/d_attachment/materials/materials-07-01318/article_deploy/materials-07-01318.pdf
raw_path: raw/papers/2014-rehman-nicu-plating-csi-review.pdf
tags: [Ni-Cu-plating, review, LIP, seed-layer, c-Si]
created: 2026-04-26
updated: 2026-04-26
---

# Review of the Potential of the Ni/Cu Plating Technique for Crystalline Silicon Solar Cells

**Rehman, A. and Lee, S. H.** — *Materials (MDPI), 7, 1318–1341, 2014*. DOI: 10.3390/ma7021318

## Summary

Open-access foundational review of Ni/Cu plating as a screen-printed-Ag replacement for crystalline silicon solar cells. Covers the two-step seed-layer + light-induced-plating (LIP) concept, Ni and Cu deposition modes (electroless, LIP, laser-assisted), patterning options, capping layers, and the four perennial industrial challenges (adhesion, parasitic plating, process complexity, reliability). Establishes the canonical thesis that Ni acts as a Cu diffusion barrier and seed for adhesion, while Cu provides ~Ag-equivalent conductivity at ~1/100th the metal cost.

## Key claims

- Ag-paste screen printing consumes up to 40% of cell processing cost; Cu is ~100× cheaper than Ag with conductivity of 59.1 vs 61.3 ×10⁶ S/m (Table 1) — i.e., Cu has ~96% of Ag conductivity at ~1% of the price.
- Ni/Cu plated cells routinely reach FF 81–82% via photolithographic processes, vs 75–78% for screen-printed Ag, due to lower contact resistance and finer fingers.
- Standard process: (i) Ni seed layer (electroless, LIP, or laser-assisted), then (ii) Cu LIP. A thin Sn or Ag cap is deposited over Cu to prevent oxidation and to enable soldering — and to block Cu/EVA interaction.
- Cu has high diffusivity in Si (deep-level recombination centre); a continuous Ni barrier is *required* — adequate thickness and pinhole-free coverage on a patterned grid are the key barrier-quality criteria.
- Ni LIP electrolyte is essentially the electroless bath (NiSO₄ or NiCl₂ + NaH₂PO₂ + ammonium-citrate buffer at pH 8–10) operated under illumination; the photovoltage drives faster, more uniform plating at lower bath temperatures than dark electroless.
- Process is performed at 250–400 °C anneal vs 750–850 °C Ag-paste firing — this is precisely what allows the route to be ported to the SHJ a-Si:H thermal budget.

## Methods used

- [[methods/electroplated-Ni-Cu-stack]] — defines the canonical 2-step Ni-seed + Cu-LIP route this hypothesis adopts.
- [[methods/electroless-Ni-deposition]] — primary seed-layer mode reviewed (NiSO₄/hypophosphite bath).
- [[methods/light-induced-plating]] — Cu LIP from acid Cu-sulfate; the SHJ-friendly mode.
- [[methods/Cu-electroplating-acid-bath]] — the Cu conducting layer.
- [[methods/laser-ablation-of-dielectric]] — patterning/seed alternative (laser-induced Ni deposition; LCMD).
- [[methods/photolithography-mask-patterning]] — research-grade comparator for finger-width definition.
- [[methods/screen-printed-Ag-paste]] — the baseline being replaced.
- [[methods/thermal-evaporation-Ag-cap]] — capping option above Cu; Sn cap also discussed.

## Reagents

- [[reagents/nickel-sulfamate-bath]] — Ni electroplating electrolyte family (sulfamate or sulfate variants).
- [[reagents/acid-Cu-sulfate-bath]] — primary Cu plating chemistry.
- [[reagents/silver-Ag-cap]] — anti-oxidation / solderability cap above Cu.
- [[reagents/tin-Sn-cap]] — alternative anti-oxidation cap.
- [[reagents/EVA-encapsulant]] — mentioned as the module-level chemistry that cap layers must isolate from Cu.
- [[reagents/nickel-phosphorus-NiP-electroless]] — the as-deposited electroless Ni-P alloy.

## Organisms / substrates

- [[organisms/monocrystalline-Si-wafer-p-type]] — the homojunction substrate the review primarily addresses (PERL, IBC, screen-print-Ag baseline).

## Failure modes flagged

- [[failure-modes/Cu-diffusion-into-c-Si]] — explicit motivation for the Ni barrier; deep-level recombination centre.
- [[failure-modes/Ni-barrier-pinholes]] — review notes the need for "adequate thickness and evenness over the entire front side patterned grid"; pinhole-free coverage is the gating quality.
- [[failure-modes/finger-adhesion-loss-after-DH]] — adhesion called out as one of the four open challenges in Table 2.
- [[failure-modes/silver-supply-bottleneck]] — the cost driver (Ag price escalation, ITRPV roadmap).
- [[failure-modes/FF-degradation-contact-resistance]] — screen-print Ag fingers limit FF to 75–78% vs 81–82% achievable with plated contacts.

## Supports / contradicts

- **Supports:** [[sources/2017-jeon-electroless-ni-front-metallization]] — both establish the electroless Ni-P + electroplated Cu route and the NiSi/Ni₂Si phase formation as the silicide barrier mechanism.
- **Supports:** [[sources/2018-electrochemsci-barrier-properties-electroplated-ni]] — Cheng et al. directly tests the Ni-barrier-thickness claim Rehman flags as critical.
- **Contradicts:** [[sources/2022-arena-sundrive-copper-metallisation-demonstration]] — SunDrive omits the electroplated-Ni barrier entirely, plating Cu directly on TCO with the SHJ a-Si:H/TCO stack acting as the diffusion barrier; the canonical "Ni/Cu" framing of Rehman is shown to be specific to homojunction architectures.

## Notable quotes

> "Copper, however, creates highly active recombination centers in silicon; therefore, an effective barrier is required to prevent its diffusion in silicon. The Ni can form a promising barrier in between Cu and silicon, and it can also be useful in reducing contact resistance." — *p. 1322*

> "The adequate thickness and evenness over the entire front side patterned grid are the basic requirements for depositing an effective Ni barrier layer. The prevention of copper from being diffused for a desired lifetime defines the effectiveness of the barrier layer. However, a thinner Ni layer is favored as the Ni conductivity is low in comparison to Cu." — *p. 1324*
