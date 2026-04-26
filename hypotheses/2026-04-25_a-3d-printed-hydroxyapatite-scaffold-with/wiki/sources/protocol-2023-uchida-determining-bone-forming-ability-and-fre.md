---
type: source
id: protocol-2023-uchida-determining-bone-forming-ability-and-fre
source_type: protocol
title: "Determining Bone-forming Ability and Frequency of Skeletal Stem Cells by Kidney Capsule Transplantation and Limiting Dilution Assay"
authors: ["Uchida, H.", "Maruyama, T.", "Hsu, W."]
year: 2023
doi: 10.21769/BioProtoc.4639
url: https://bio-protocol.org/e4639
raw_path: raw/protocols/protocol-2023-uchida-determining-bone-forming-ability-and-fre.xml
tags: [protocol, kidney-capsule-transplantation, limiting-dilution-assay, skeletal-stem-cells, bone-formation, ectopic-bone, in-vivo, von-kossa, mouse-skeletal-stem-cell]
---

# Summary

Bio-protocol step-by-step description of how to assess skeletogenic capacity and frequency of skeletal stem cells (specifically suture stem cells) in vivo by ectopic transplantation under the murine kidney capsule, followed by limiting-dilution analysis (ELDA) and whole-mount von Kossa staining for bone formation. Derived from prior research articles in *Sci Transl Med* (Maruyama et al., 2021) and *Sci Adv* (Maruyama et al., 2022). Adjacent to but not directly addressing porous-HA scaffold readouts; relevant to this hypothesis as a high-sensitivity in vivo benchmark for ectopic bone formation that could be paired with a scaffold-laden cell preparation.

# Key steps

1. Isolate suture cells (per a separate published protocol), count, and pellet.
2. Resuspend cells in 5 µL Matrigel (cell-embedded Matrigel, CEM); load into insulin syringe; incubate 5 min at 37 °C until gelation begins.
3. Pull and fire-polish a glass capillary tube (~0.2 mm tip) for kidney-capsule access.
4. Anesthetize SCID mouse (Ketamine 90–100 mg/kg + Xylazine 9–10 mg/kg, IP); shave/disinfect.
5. Make ~1 cm sub-rib incision parallel to the spine; cut peritoneum; expose kidney; keep moist with PBS.
6. Score kidney surface; insert fire-polished capillary under the capsule to make space; insert insulin syringe under the capsule (NOT into the kidney); inject CEM.
7. Cauterize opening; close peritoneum (absorbable suture) and skin (silk/nylon or staples); analgesia (Ethiqa subcutaneous).
8. Retrieve kidney at 2–4 weeks. Whole-mount von Kossa: prefix in 0.02% NP40 / 2% PFA, wash in dH2O, stain in 1% AgNO3 under UV 20–60 min, fix in 5% sodium thiosulfate.
9. Score bone formation; tabulate dose / tested / response into ELDA software (`http://bioinf.wehi.edu.au/software/elda/`) for stem-cell frequency.

# Methods used

- [[../methods/kidney-capsule-transplantation]]
- [[../methods/limiting-dilution-assay]]
- [[../methods/von-kossa-staining]]
- [[../methods/in-vivo-calvarial-defect-model]] (referenced as adjacent ectopic models)

# Reagents

- Matrigel (BD Biosciences 354234) — cell carrier
- 4% paraformaldehyde (PFA), Nonidet P-40 (NP-40, Sigma 98379)
- Silver nitrate (Sigma 10220-100G) for von Kossa
- Sodium thiosulfate (5% w/v) — stop bath
- Ketamine HCl, Xylazine — anesthesia
- DPBS ± Ca/Mg (Gibco 10010-023, 14040-133)
- Ethiqa XR (analgesic)

# Organisms

- SCID mouse (NOD.CB17-Prkdcscid/NCrCrl, Charles River; >2 months)
- [[../organisms/mouse-skeletal-stem-cell]] (suture stem cells, SuSCs)

# Failure modes flagged

- Matrigel gelation before injection (handle on ice; warm syringe to 37 °C only after loading).
- Bleeding during capsule access reduces transplantation efficacy ("avoid significant bleeding, which would reduce transplantation efficacy").
- Needle penetration into kidney parenchyma rather than under the capsule (explicit "Attention" callout).
- von Kossa background staining if washes are inadequate ("The washing process is critical to reduce background staining"). Linkable to [[../failure-modes/in-vivo-vs-in-vitro-discordance]] (kidney capsule is ectopic, not orthotopic).
- Subcutaneous and intramuscular controls are flagged as confounded; kidney capsule chosen specifically to avoid endogenous bone-cell contamination.

# Notable quotes

- "Animal models of ectopic bone formation have clear advantages over orthotopic transplantation because of the environments lacking cytokine interference and interactions with endogenous cell types, e.g., bone-forming cells."
- "Using kidney capsule transplantation, we have demonstrated ectopic bone generation at a single-cell level."
- "Although technically more demanding, the environment provides the most nutrient-rich resource for robust bone formation from significantly fewer cell numbers."
