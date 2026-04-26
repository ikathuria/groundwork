---
type: method
slug: photolithography-mask-patterning
aliases: [dry-film photoresist, photolithographic mask, photoresist mask]
related_methods: [inkjet-mask-patterning, laser-ablation-of-dielectric, Cu-electroplating-acid-bath, NOBLE-selective-Cu-plating]
key_reagents: [ITO-transparent-conductive-oxide]
known_failure_modes: [plating-resist-undercut, TCO-pitting-during-plating]
sources: [2014-rehman-nicu-plating-csi-review, 2018-pv-international-metallization-shj, 2018-pv-tech-metallization-interconnection-bifacial-shj, 2018-pvtech-metallization-shj-cells-modules, 2023-taiyangnews-heterojunction-technology-report, notion-systems-solar-inkjet-overview, pvtech-metallization-challenges-cell-manufacturing]
tags: [patterning, photoresist, dry-film, lab-benchmark, SHJ-Cu-plating, IBC]
---

# Photolithography Mask Patterning

## What it measures / does
A dry-film or liquid photoresist is laminated/coated over the cell surface, exposed through a photomask under UV light, developed to clear the contact-grid lines, and the cell is then plated through the resist mask. After plating, resist is stripped. Provides the highest patterning resolution and the cleanest sidewalls but requires multiple wet-processing steps and is the most expensive option.

## When to use it
Used as the high-resolution lab benchmark and for IBC SHJ patterning where sub-20 um finger pitches are needed. Maxwell's commercial SHJ Cu-plating roadmap uses photoresist masking on a sputtered Cu seed for simultaneous front+rear electroplating.

## Key parameters
- Resist: dry-film photosensitive polymer (typical thickness 15-50 um).
- UV exposure + development: standard Mask Aligner or stepper lithography.
- Finger width: <20 um lab demos; sub-20 um cited for IBC routes.
- After plate: NaOH or proprietary solvent strips resist; H3PO4/HNO3 (50 C) etches back PVD seed without attacking ITO (Hatt 2019).
- 7-step Resist masking route (CSEM, 24.1% record bifacial SHJ): more steps + waste-water treatment than NOBLE 4-step.

## Common variants / alternatives
- [[inkjet-mask-patterning]] — replaces photoresist with inkjet hot-melt or NaOH ink; saves >70% mask material.
- [[laser-ablation-of-dielectric]] — non-resist patterning; combines ablation + seed exposure.
- [[NOBLE-selective-Cu-plating]] — Fraunhofer ISE resist-free alternative using native AlOx as etch mask.

## Things to watch for (failure modes)
- [[../failure-modes/plating-resist-undercut]] — acidic Cu bath etches the resist sidewall, broadening fingers and allowing parasitic plating.
- [[../failure-modes/TCO-pitting-during-plating]] — pin-hole defects in the photoresist plate parasitic Cu spots that pit the TCO on etch-back.

## Sources
- [[2014-rehman-nicu-plating-csi-review]] — discussed as lab benchmark for selective plating.
- [[2018-pv-international-metallization-shj]] — dry-film photoresist for SHJ Cu plating; one of four routes reviewed.
- [[2018-pv-tech-metallization-interconnection-bifacial-shj]] — discussed for IBC and sub-20 um fingers.
- [[2018-pvtech-metallization-shj-cells-modules]] — alternative high-resolution patterning route for SHJ Cu plating.
- [[2023-taiyangnews-heterojunction-technology-report]] — Maxwell's photoresist mask in front+rear simultaneous Cu plating.
- [[notion-systems-solar-inkjet-overview]] — supplier of n.amr/n.amc semi/fully-automated photolithography & wet processing tools up to 150 mm.
- [[pvtech-metallization-challenges-cell-manufacturing]] — IMEC overview cites photolithography as alternative to inkjet masking.
