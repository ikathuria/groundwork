---
type: source
id: 2026-thammarakcharoen-comprehensive-toxicological-evaluation-o
source_type: paper
title: "Comprehensive Toxicological Evaluation of 3D-Printed Hydroxyapatite (3DPHA) for Bone Grafting Applications"
authors: ["Thammarakcharoen, Faungchat", "Srion, Autcharaporn", "Suvannapruk, Waraporn", "Chokevivat, Watchara", "Limtrakarn, Wiroj", "Suwanprateeb, Jintamai"]
year: 2026
doi: 10.3390/ijms27020636
url: https://doi.org/10.3390/ijms27020636
raw_path: raw/papers/2026-thammarakcharoen-comprehensive-toxicological-evaluation-o.xml
tags: [3D-printing, hydroxyapatite, binder-jet, toxicology, regulatory, Ames-test, biocompatibility, ISO-10993]
created: 2026-04-25
updated: 2026-04-25
---

# Thammarakcharoen et al. 2026 — Toxicological evaluation of binder-jet 3D-printed HA (3DPHA)

## Summary

Toxicological and compositional safety study (Int. J. Mol. Sci., 2026) of 3D-printed hydroxyapatite (3DPHA) produced via **binder-jet 3D printing combined with a low-temperature calcium-sulfate phase-transformation route**. The transformed material is phase-pure HA, with a Ca/P molar ratio consistent with non-stoichiometric HA and low trace heavy-metal impurities. In-vitro biocompatibility battery (cytotoxicity, cell proliferation, osteogenic differentiation, irritation, sensitisation, Ames mutagenicity across five Salmonella strains) was uniformly negative. Provides the regulatory-readiness floor for any HA-scaffold protocol — i.e., the platform on which our gradient design must sit if it is to translate clinically.

## Key claims

- **Fabrication route**: binder-jet 3D printing (BJT) with a calcium-sulfate intermediate, transformed to HA at low temperature. BJT was chosen because it is "particularly suitable for processing bioceramic materials" and avoids the high-temperature issues of other AM methods.
- **Phase / chemistry verification**: phase-pure HA (XRD), Ca/P ratio consistent with non-stoichiometric HA, low trace heavy-metal levels (ICP-MS).
- **In-vitro safety**: no cytotoxic, irritant, sensitising, or mutagenic effects in the standard ISO-10993-style battery. Ames test negative across TA1535, TA1538, TA98, TA100, TA102.
- **Architectural framing**: scaffold design "requires precise control over architectural parameters such as pore size, interconnectivity, and permeability, which are difficult to achieve using conventional ceramic processing methods. Additive manufacturing (AM), or three-dimensional (3D) printing, overcomes traditional fabrication limitations."
- **Mechanical caveat**: BJT "typically yields parts with lower mechanical strength compared to other 3D printing methods, mainly due to high porosity" — design constraint for our cortical-mimicking outer shell.
- **Regulatory framing**: paper explicitly establishes "a regulatory foundation confirming that 3DPHA is chemically pure, biologically safe, and ready for clinical translation as a bone-graft material."

## Methods used

- [[../methods/binder-jet-3D-printing]]
- [[../methods/XRD-phase-analysis]]
- [[../methods/ICP-MS]]
- [[../methods/SEM-imaging]]
- [[../methods/EDX-spectroscopy]]
- [[../methods/MTT-assay]]
- [[../methods/MTS-assay]]
- [[../methods/ALP-activity-assay]]

## Reagents

- [[../reagents/hydroxyapatite]]
- [[../reagents/calcium-deficient-hydroxyapatite]]

## Organisms / cell lines

- ISO-10993 cytotoxicity / proliferation cell lines (e.g., L929) and Ames Salmonella typhimurium tester strains (TA1535, TA1538, TA98, TA100, TA102). → proposed slugs: `L929-fibroblast`, `salmonella-typhimurium-ames-strains` (not in current vocabulary).

## Failure modes flagged

- [[../failure-modes/HA-phase-decomposition-during-sintering]] — mitigated here by low-temperature transformation route, which is named as the differentiator.
- [[../failure-modes/batch-to-batch-HA-stoichiometry-variation]] — paper explicitly justifies Ca/P verification.
- [[../failure-modes/cytotoxic-residue-from-binders-or-photoinitiators]] — binder-jet uses sacrificial binders that must be removed; the paper validates that residues are below cytotoxic thresholds.
- [[../failure-modes/brittle-ceramic-mechanical-failure]] — explicit: BJT yields lower mechanical strength than other 3D-printing routes.

## Supports / contradicts

- Supports [[2017-eliaz-calcium-phosphate-bioceramics-a-review-o]] (HA characterisation, regulatory framing).
- Supports [[2020-wang-3d-printing-of-bone-tissue-engineering-s]] (binder-jet as a 3D-printing route for HA).
- Supports our protocol's compositional QC step (XRD phase purity, ICP-MS impurity check).

## Notable quotes

- "Binder jet 3D printing combined with a low-temperature phase transformation process has emerged as a promising route for producing 3D-printed hydroxyapatite (3DPHA) scaffolds with controlled architecture for bone grafting applications." (Abstract)
- "Scaffold design… requires precise control over architectural parameters such as pore size, interconnectivity, and permeability, which are difficult to achieve using conventional ceramic processing methods." (Introduction)
- "The genotoxicity assessment via the Ames test demonstrated no mutagenic effects in the 3DPHA extracts across all five standard Salmonella typhimurium strains (TA1535, TA1538, TA98, TA100, and TA102)." (Genotoxicity section)
