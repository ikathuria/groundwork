---
type: source
id: protocol-2025-amin-murine-osteoblast-and-osteoclast-co-cult
source_type: protocol
title: "Murine Osteoblast and Osteoclast Co-culture on Demineralized Bone Paper for Bone Remodeling"
authors: ["Amin, S.", "Yoon, H.", "Choi, D.-H.", "Hsu, Y.-H.", "Lee, J."]
year: 2025
doi: 10.21769/BioProtoc.5339
url: https://bio-protocol.org/e5339
raw_path: raw/protocols/protocol-2025-amin-murine-osteoblast-and-osteoclast-co-cult.xml
tags: [protocol, osteoblast-osteoclast-coculture, demineralized-bone-paper, bone-remodeling, RANKL, OPG, primary-cells, fluorescent-imaging]
---

# Summary

Bio-protocol describing how to use demineralized bone paper (DBP) — thin sections of demineralized bovine compact bone — as an osteoid-mimicking substrate for primary murine osteoblast culture, mineral deposition, and subsequent co-culture with bone-marrow monocytes (BMCs) under biochemical stimulation to recapitulate osteoclastogenesis and the bone-remodeling cycle. Uses DsRed/eGFP reporter mice for longitudinal fluorescent imaging. Out-of-domain for HA scaffolds per se, but directly relevant for this hypothesis as a methodological template for primary-osteoblast-with-osteoclast co-culture (vs. monoculture limitations) and for OPG/RANKL secretion as a remodeling readout.

# Key steps

1. Prepare DBP: demineralize bovine compact bone (1.2 N HCl, monitor by daily weighing until manually compressible / X-ray-confirmed), section into thin (semi-transparent) sheets, decellularize, store ≤1 month for collagen integrity.
2. Adhere DBP to tissue-culture plastic (electrostatic / pre-wet wells with PBS to reduce wrinkling).
3. Seed primary murine osteoblasts at recommended density; culture in expansion medium → osteogenic differentiation medium.
4. Confirm osteoid mineralization with alizarin red S and/or calcein staining (calcein can be done live).
5. Switch to biochemical stimulation medium; add primary BMCs as co-culture for osteoclastogenesis.
6. Longitudinal fluorescent imaging (DsRed osteoblasts / eGFP BMCs) to track osteoclast formation and resorption.
7. Quantify mineralization (per-well absorbance averaged across replicates) and OPG/RANKL by ELISA (dilute OPG to keep within standard-curve linear range).

# Methods used

- [[../methods/osteoblast-osteoclast-coculture]]
- [[../methods/alizarin-red-staining]]
- [[../methods/fluorescence-microscopy]]
- [[../methods/ELISA]] (RANKL, OPG)
- [[../methods/osteogenic-differentiation-induction]]

# Reagents

- HCl 1.2 N (demineralization)
- Collagenase (osteoprogenitor release)
- [[../reagents/alizarin-red-S]]
- [[../reagents/calcein-AM]]
- [[../reagents/DAPI]] (decellularization confirmation)
- α-MEM / FBS / penicillin-streptomycin (expansion medium)
- Osteogenic supplements: [[../reagents/L-ascorbic-acid-2-phosphate]], [[../reagents/beta-glycerophosphate]], [[../reagents/dexamethasone]]
- TCP (control well surface — note: the Amin protocol explicitly uses tissue-culture plastic "TCP" as control, distinct from β-tricalcium-phosphate)

# Organisms

- Primary murine osteoblasts (calvarial / long-bone osteoprogenitors)
- Bone-marrow mononuclear cells (BMCs)
- DsRed and eGFP transgenic reporter mice

# Failure modes flagged

- "Bone fragments larger than 2 mm may slow the release of osteoprogenitors. Remove any remaining soft tissue at this step."
- "Insufficient rinsing can cause rust formation in a cryostat chamber due to residual acid."
- "DBP is typically used within 1 month; however, it can be stored for longer periods, although gradual collagen degradation may occur over time."
- "Pre-wetting wells with PBS improves DBP adhesion and reduces wrinkling, which can otherwise impair imaging and cell attachment."
- TCP (tissue-culture plastic) "exhibits artifact osteoclast behaviors such as oversized multinucleated cells due to excessive precursor fusion and apoptosis. In contrast, DBP supports physiologically relevant osteoclast differentiation and resorptive activity due to the preserved bone extracellular matrix complexity." → directly motivates [[../failure-modes/monoculture-misses-osteoclast-coupling]]
- "Dilute OPG samples to ensure measurements fall within the linear range of the standard curve and prevent signal saturation."

# Notable quotes

- "DBP supports in vivo–relevant osteoblastic mineral deposition and transition to lining cells."
- "An increase in RANKL and a decrease in OPG indicate the molecular milieu that promotes osteoclast differentiation."
