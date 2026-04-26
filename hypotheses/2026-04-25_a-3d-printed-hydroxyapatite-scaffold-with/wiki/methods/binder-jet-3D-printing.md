---
type: method
slug: binder-jet-3D-printing
aliases: [BJT, binder-jetting, powder-bed-3D-printing, 3D-inkjet-on-powder]
related_methods: [inkjet-3D-printing, ceramic-sintering, debinding-thermal-treatment, micro-CT-imaging, mechanical-compression-testing]
key_reagents: [hydroxyapatite, calcium-deficient-hydroxyapatite, beta-tricalcium-phosphate, ammonium-bicarbonate, eggshell-calcium-carbonate]
known_failure_modes: [sintering-shrinkage-pore-deviation, HA-phase-decomposition-during-sintering, brittle-ceramic-mechanical-failure, cytotoxic-residue-from-binders-or-photoinitiators, batch-to-batch-HA-stoichiometry-variation, cad-vs-actual-pore-size-mismatch]
sources: [2020-wang-3d-printing-of-bone-tissue-engineering-s, 2026-thammarakcharoen-comprehensive-toxicological-evaluation-o, 2025-qi-3d-printed-bioceramic-scaffolds-for-bone, 2013-loh-three-dimensional-scaffolds-for-te-role-of-porosity, 2017-bose-additive-manufacturing-of-biomaterials, 2017-zhang-additively-manufactured-scaffolds-for-bo, 2020-garot-additive-manufacturing-of-material-scaff, 2025-picado-tejero-recent-advances-in-3d-bioprinting-of-por, 2025-tang-advances-in-3d-printed-scaffolds-for-bon, 2012-bose-recent-advances-in-bone-tissue-engineeri, 2014-thavornyutikarn-bone-tissue-engineering-scaffolding-comp, 2015-chia-recent-advances-in-3d-printing-of-biomat, 2015-do-3d-printing-of-scaffolds-for-tissue-rege, 2026-liu-design-and-fabrication-of-biomimetic-gra]
tags: [additive-manufacturing, powder-bed, ceramic-printing, low-temperature-route]
created: 2026-04-25
updated: 2026-04-25
---

# Binder-jet 3D printing (BJT)

## What it measures / produces

Binder-jet 3D printing builds parts in a powder bed: a roller spreads a thin layer of HA / CaP powder, an inkjet print head selectively deposits a liquid binder onto the powder pattern, and the build platform indexes one layer thickness. Repeat. The unbound powder supports overhanging features (no support structures needed). After printing, the green part is depowdered, debinded (binder removed thermally), and sintered to densify. For HA: a low-temperature calcium-sulfate-intermediate phase-transformation route is increasingly used to avoid HA → β-TCP decomposition during sintering [[../sources/2026-thammarakcharoen-comprehensive-toxicological-evaluation-o]]. Output: a porous HA scaffold with fully arbitrary internal architecture (no support-structure topology constraints) at moderate resolution (~300–800 μm).

## When to use it

Use BJT when (a) you need complex internal channels or undercuts that DIW cannot print, (b) you accept lower mechanical strength in exchange for high architectural freedom, (c) you want a low-temperature transformation route that preserves HA stoichiometry, or (d) you're scaling up to larger scaffolds (BJT throughput scales well with build volume). Best-case prior art exists for HA macropore sizes 300–845 μm with 40% microporosity at 1250 °C sintering [[../sources/2017-bose-additive-manufacturing-of-biomaterials]] and explicit 450 μm pore HA scaffolds via BJT [[../sources/2017-bose-additive-manufacturing-of-biomaterials]].

## Key parameters

- **Achievable pore-size range**: macropores ~300–845 μm with 40% microporosity (sintered β-TCP at 1250 °C); 450 μm pore HA demonstrated [[../sources/2017-bose-additive-manufacturing-of-biomaterials]].
- **Powder size**: fine powder (<20 μm) yields higher post-sintering density and better surface finish; requires wet/slurry feed instead of dry powder bed [[../sources/2017-bose-additive-manufacturing-of-biomaterials]].
- **Sintering**: conventional 1100–1250 °C × 2–4 h; **microwave sintering significantly increases density and compressive strength** of binder-jetted β-TCP versus conventional sintering [[../sources/2017-bose-additive-manufacturing-of-biomaterials]].
- **Low-temperature transformation route (HA-specific)**: BJT a calcium-sulfate intermediate at moderate temperature, then transform to phase-pure HA via aqueous treatment [[../sources/2026-thammarakcharoen-comprehensive-toxicological-evaluation-o]] — preserves Ca/P stoichiometry and avoids the β-TCP / α-TCP / CaO decomposition that occurs above ~1300 °C.
- **Mechanical caveat**: BJT "typically yields parts with lower mechanical strength compared to other 3D printing methods, mainly due to high porosity" [[../sources/2026-thammarakcharoen-comprehensive-toxicological-evaluation-o]] — a major design constraint for cortical-mimicking outer shells.
- **Dimensional accuracy**: Loh and Garot reviews place AM dimensional error in the <200 μm range as "satisfying" for BTE; BJT is on the higher end of that envelope [[../sources/2020-garot-additive-manufacturing-of-material-scaff]].

## Common variants

- **Conventional sintered BJT** (HA / β-TCP powder + organic binder + high-T sintering).
- **Low-T phase-transformation BJT** (calcium sulfate intermediate → HA aqueous transformation; the [[../sources/2026-thammarakcharoen-comprehensive-toxicological-evaluation-o]] route).
- **Microwave-sintered BJT** — higher density and compressive strength than conventional sintering for β-TCP [[../sources/2017-bose-additive-manufacturing-of-biomaterials]].
- **Slurry-fed BJT (sub-20 μm powder)** — higher resolution; uses a wet-feed mechanism.
- **Multi-binder / multi-material BJT** — prints with different binders or composite powders for compositional gradients.

## Step-level notes

- Powder spreading uniformity sets the layer floor; dense (un-flowable) HA powders may need spheroidization or admixed flow agents.
- Binder droplet size + powder packing density determine the feature resolution and edge sharpness.
- Depowdering after printing is delicate — green part has minimal mechanical strength; trapped powder in small internal channels is a recurring complaint.
- Debinding ramp must be slow enough to vent binder pyrolysis products without cracking struts.
- Toxicology / Ca/P verification is mandatory: the [[../sources/2026-thammarakcharoen-comprehensive-toxicological-evaluation-o]] paper validated 3DPHA against ISO-10993 (cytotoxicity, irritation, sensitisation, Ames mutagenicity across TA1535, TA1538, TA98, TA100, TA102 — all negative).
- For gradient-pore designs, BJT can vary local porosity by modulating binder droplet density per voxel — an underutilised feature for gradient-pore HA scaffolds.

## Things to watch for

- [[../failure-modes/sintering-shrinkage-pore-deviation]] — sintering shrinkage in BJT depends on green-part packing density (often 50–60%); shrinkage of 10–20% linear is common.
- [[../failure-modes/HA-phase-decomposition-during-sintering]] — conventional high-T BJT sintering can decompose HA; the low-T transformation route is the modern workaround.
- [[../failure-modes/brittle-ceramic-mechanical-failure]] — BJT-printed ceramic typically has lower compressive strength than DIW or DLP routes [[../sources/2026-thammarakcharoen-comprehensive-toxicological-evaluation-o]].
- [[../failure-modes/cytotoxic-residue-from-binders-or-photoinitiators]] — binder pyrolysis residues must be below cytotoxic thresholds; ISO-10993 cytotoxicity verification before cell seeding.
- [[../failure-modes/batch-to-batch-HA-stoichiometry-variation]] — HA powder Ca/P ratio drift between batches; verify by EDX/ICP-MS.
- [[../failure-modes/cad-vs-actual-pore-size-mismatch]] — BJT voxel resolution + sintering shrinkage compound; μCT-verify gradient profile.

## Sources

- [[../sources/2020-wang-3d-printing-of-bone-tissue-engineering-s]] — BJT in AM-for-BTE classification.
- [[../sources/2026-thammarakcharoen-comprehensive-toxicological-evaluation-o]] — low-temperature phase-transformation BJT route for phase-pure HA + ISO-10993 toxicology + Ames mutagenicity testing.
- [[../sources/2025-qi-3d-printed-bioceramic-scaffolds-for-bone]] — BJT among 3D-printing routes for bioceramic scaffolds.
- [[../sources/2013-loh-three-dimensional-scaffolds-for-te-role-of-porosity]] — BJT in scaffold porosity context.
- [[../sources/2017-bose-additive-manufacturing-of-biomaterials]] — quantitative pore-size demonstrations (300–845 μm, 450 μm HA, microwave sintering effect).
- [[../sources/2017-zhang-additively-manufactured-scaffolds-for-bo]] — BJT for graded porosity scaffolds.
- [[../sources/2020-garot-additive-manufacturing-of-material-scaff]] — BJT in clinical-translation review.
- [[../sources/2025-picado-tejero-recent-advances-in-3d-bioprinting-of-por]] — BJT advances in porous bioprinting.
- [[../sources/2025-tang-advances-in-3d-printed-scaffolds-for-bon]] — BJT updates.
- [[../sources/2012-bose-recent-advances-in-bone-tissue-engineeri]] — early BJT review for BTE.
- [[../sources/2014-thavornyutikarn-bone-tissue-engineering-scaffolding-comp]] — BJT in scaffolding comparison.
- [[../sources/2015-chia-recent-advances-in-3d-printing-of-biomat]] — BJT in biomaterial 3D-printing review.
- [[../sources/2015-do-3d-printing-of-scaffolds-for-tissue-rege]] — BJT for tissue scaffolds.
- [[../sources/2026-liu-design-and-fabrication-of-biomimetic-gra]] — BJT among gradient-scaffold AM routes.
