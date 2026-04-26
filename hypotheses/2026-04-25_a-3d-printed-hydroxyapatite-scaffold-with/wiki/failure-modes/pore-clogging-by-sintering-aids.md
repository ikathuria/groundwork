---
type: failure-mode
slug: pore-clogging-by-sintering-aids
severity: low
frequency_estimate: rare — confined to specific slurry/binder formulations using glassy or low-melt sintering aids
applies_to_methods: [ceramic-sintering, binder-jet-3D-printing, slurry-preparation-for-DLP, debinding-thermal-treatment, micro-CT-imaging]
applies_to_reagents: [hydroxyapatite, beta-tricalcium-phosphate, bioglass-45S5]
applies_to_step_kinds: [scaffold-prep, sintering, debinding]
sources: [2015-baino, 2024-wang]
tags: [sintering, pore-clogging, surface-chemistry, slurry]
created: 2026-04-25
updated: 2026-04-25
---

# Pore clogging by sintering aids

## What it is

Some HA / β-TCP slurries include low-melt sintering aids (e.g., glassy fluxes, bioglass nanoparticles, alkali-fluoride additives) to lower densification temperature or improve strut bonding. During sintering these aids melt and migrate via capillary flow into smaller pores, partially or fully filling them. The result is a unimodal-looking pore distribution where the small-end of the gradient has been silently shifted up or wiped out, and the strut surface chemistry is altered (residual SiO₂, alkali) — affecting both pore size and biological response.

## How it manifests

- μCT histogram showing depleted population in the < 100 μm pore bin compared to CAD; visible only by careful per-bin pore-size analysis [[../sources/2015-baino-bioceramics-and-scaffolds-a-winning-comb]].
- SEM shows a glassy or droplet-like phase in pore corners; EDX reveals elemental composition (Si, Na, K, F) inconsistent with HA [[../sources/2015-baino-bioceramics-and-scaffolds-a-winning-comb]].
- Cell adhesion altered on glass-coated struts vs HA-pure struts: in some cases bioglass coating *improves* osteogenesis (an intended effect), so the failure is more subtle when an unintended Si-rich phase appears.
- Wang 2024 reported polydopamine-functionalized CDHA scaffolds where the coating layer thickness inadvertently reduced effective pore size [[../sources/2024-wang-polydopamine-functionalized-calcium-defi]].

## How to detect it

- μCT pre-sintering vs post-sintering pore-size histogram; pore-volume losses in the small-pore bin > 20% (above shrinkage expectation) indicate clogging.
- SEM/EDX scan along a strut at 5 random points; consistent presence of unexpected elements (Si, Na, F) = aid migration.
- Mercury-intrusion porosimetry can reveal blocked-throat pores (apparent porosity drop without bulk-density change) [[../sources/2018-zhang-effect-of-microporosity-on-scaffolds-for]] (cross-link).
- Cross-section the scaffold and image with backscattered-electron SEM — sintering-aid phases appear as different contrast vs HA matrix.

## Mitigation

- **Avoid low-melt aids unless their effect is characterized** in the specific architecture: bioglass aids are common in bone-TE scaffolds but their impact on small-pore retention (< 150 μm) is rarely reported.
- If aid is required, calibrate the loading: ≤ 5 wt% bioglass typically does not noticeably clog 100 μm pores [[../sources/2025-de-carvalho-three-dimensional-printing-of-calcium-ph]] (cross-link).
- Use pure-HA slurry without flux for the gradient design, accept the higher sintering temperature and risk phase-decomposition (manage that separately).
- Verify post-sinter pore-size distribution by μCT against CAD; the fingerprint of clogging is selective small-pore loss.
- Coatings (polydopamine, RGD-peptide) applied post-sintering should be thickness-controlled (typically <100 nm) to avoid effective pore-size reduction [[../sources/2024-wang-polydopamine-functionalized-calcium-defi]].

## Original sources / evidence

- [[../sources/2015-baino-bioceramics-and-scaffolds-a-winning-comb]] — bioglass / sintering-aid use and surface-chemistry concerns in CaP scaffolds.
- [[../sources/2024-wang-polydopamine-functionalized-calcium-defi]] — coating layer reducing effective pore size as a related failure mode.

## Affects

- Methods: [[../methods/ceramic-sintering]], [[../methods/binder-jet-3D-printing]], [[../methods/slurry-preparation-for-DLP]], [[../methods/debinding-thermal-treatment]], [[../methods/micro-CT-imaging]]
- Reagents: [[../reagents/hydroxyapatite]], [[../reagents/beta-tricalcium-phosphate]], [[../reagents/bioglass-45S5]]
