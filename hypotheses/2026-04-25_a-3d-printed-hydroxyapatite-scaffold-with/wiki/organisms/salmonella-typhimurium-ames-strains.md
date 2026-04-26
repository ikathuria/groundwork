---
type: organism
slug: salmonella-typhimurium-ames-strains
organism_type: microbe
source: NCTC / ATCC / Moltox / commercial Ames-test kit suppliers
external_id: TA98 (ATCC 29629), TA100 (ATCC 29630), TA1535 (ATCC 29631), TA1537 (ATCC 29630), TA102; collectively "Ames strains"
characteristics:
  - histidine-auxotrophic *Salmonella enterica* serovar Typhimurium tester strains engineered by Bruce Ames (1973–1990) for the Ames bacterial reverse-mutation assay (OECD 471)
  - each strain detects a specific class of mutation (frameshift / base-substitution at GC or AT pairs)
  - tested with and without S9 metabolic activation (rat liver post-mitochondrial fraction) to detect direct and metabolite mutagens
  - canonical regulatory mutagenicity screen for new biomaterials
known_failure_modes: [cytotoxic-residue-from-binders-or-photoinitiators]
sources: [2026-thammarakcharoen]
tags: [microbe, salmonella, ames-test, mutagenicity, OECD-471, regulatory]
created: 2026-04-25
updated: 2026-04-25
---

# Salmonella typhimurium Ames tester strains

## What it is

A panel of histidine-auxotrophic *Salmonella enterica* serovar Typhimurium tester strains — TA98, TA100, TA1535, TA1537, and (sometimes) TA102 — engineered by Bruce Ames and collaborators between 1973 and 1990 for the bacterial reverse-mutation (Ames) assay, formalized as OECD Test Guideline 471. Each strain carries a different his⁻ mutation that detects a specific class of reversion event (frameshift in GC-rich repeats for TA98/TA1537, base substitution at GC for TA100/TA1535, base substitution at AT for TA102). Plates with and without S9 rat-liver post-mitochondrial fraction are scored for histidine-prototroph revertant colonies above background. The panel is the canonical regulatory mutagenicity screen for new biomaterials and is part of the ISO 10993 / ICH biocompatibility package.

## Why this organism for this hypothesis

- Required for any new HA / β-TCP / photopolymer scaffold formulation entering pre-clinical packages.
- Used in [[../sources/2026-thammarakcharoen-comprehensive-toxicological-evaluation-o]] for Salmonella Ames mutagenicity testing of scaffold extracts alongside L929 cytotoxicity.
- Not relevant to the gradient-pore osteoblast-proliferation primary endpoint.

## Common pitfalls

- [[../failure-modes/cytotoxic-residue-from-binders-or-photoinitiators]] — the central reason the Ames panel is in the test plan: detect mutagenic photoinitiator, binder, or sintering-aid residue. False negatives are possible if the leachate is too cytotoxic to allow revertant colony formation; cytotoxicity titration is required.

## Sources

- [[../sources/2026-thammarakcharoen-comprehensive-toxicological-evaluation-o]] — comprehensive toxicological evaluation of HA / CaP scaffolds; Salmonella Ames mutagenicity panel + L929 cytotoxicity arms.
