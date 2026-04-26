---
type: method
slug: PicoGreen-DNA-quantification
aliases: [PicoGreen-assay, Quant-iT-PicoGreen, dsDNA-fluorescence-assay]
related_methods: [alamarBlue-proliferation-assay, MTS-assay, MTT-assay, CCK-8-assay, DAPI-staining, cell-seeding-static]
key_reagents: [PicoGreen, PBS]
known_failure_modes: [HA-autofluorescence-confounds-livedead, edge-effect-in-scaffold-cell-seeding, incomplete-cell-lysis-3d-scaffold-picogreen]
sources: [2025-de-carvalho-three-dimensional-printing-of-calcium-ph, thermo-picogreen-p11496]
tags: [proliferation-assay, dsDNA, fluorescence-readout, cell-number]
created: 2026-04-25
updated: 2026-04-25
---

# PicoGreen dsDNA quantification

## What it measures / produces

The Quant-iT PicoGreen dsDNA Assay uses a fluorescent cyanine dye that selectively binds double-stranded DNA in the presence of ssDNA, RNA, and free nucleotides. After cell lysis, fluorescence intensity is linear with total dsDNA content over ~25 pg/mL to 1 µg/mL, and dsDNA correlates with cell number via an empirical pg-DNA-per-cell coefficient (~6–7 pg per diploid mammalian cell). For HA scaffolds, PicoGreen is the **specified primary proliferation readout** in the present hypothesis (alongside an orthogonal metabolic assay), because it is independent of cell metabolic state and reads total scaffold-resident cell mass.

## When to use it

Use PicoGreen (a) as the **primary proliferation endpoint at day 1, 4, 7, 14, 21** for the gradient-vs-uniform scaffold comparison, (b) when you need a metabolism-independent cell-number readout (alamarBlue, MTS, CCK-8 all depend on metabolic state), (c) on lysed scaffold homogenate for total dsDNA, (d) paired with DAPI imaging for spatial distribution since PicoGreen reports total but not zonal cell number.

## Key parameters

- **Catalog**: Thermo Fisher Quant-iT PicoGreen P11496 (10 × 100 µL kit, ~20,000 standard 200 µL reactions per kit) [[../sources/thermo-picogreen-p11496]].
- **Excitation/Emission**: ~480 / ~520 nm (FITC channel) [[../sources/thermo-picogreen-p11496]].
- **Linear range**: 25 pg/mL – 1 µg/mL dsDNA [[../sources/thermo-picogreen-p11496]].
- **Selectivity**: dsDNA only — does not detect ssDNA, RNA, or free nucleotides at working dilution [[../sources/thermo-picogreen-p11496]].
- **Storage**: ≤ –20 °C, light-protected (cyanine dyes are photolabile); working solution diluted 1:200 in TE buffer, used within hours [[../sources/thermo-picogreen-p11496]].
- **pg DNA / cell coefficient**: ~6–7 pg per diploid mammalian cell, but cell-cycle-position-dependent (S/G2 cells contain up to 12 pg) [[../sources/thermo-picogreen-p11496]] — must specify conversion factor when reporting "cell number."
- **Standard**: kit-supplied calf-thymus dsDNA at 100 µg/mL; serial-dilute for standard curve.
- **Use in the [[../sources/2025-de-carvalho-three-dimensional-printing-of-calcium-ph]] hBMSC study** as primary DNA-content readout at 3 and 7 days, paired with cell viability and adhesion/spreading.

## Common variants

- **Quant-iT PicoGreen kit (P11496)** — kit-formatted, 1:200 dilution, plate-based.
- **PicoGreen dsDNA Reagent (P7589)** — standalone dye, larger format for bulk users.
- **Fluorometric vs microplate-reader formats** — both supported; microplate is standard.
- **Direct lysis (e.g., chaotropic / proteinase-K)** vs **freeze-thaw lysis** — for 3D scaffolds, direct chaotropic lysis or proteinase-K + sonication is required to free cells from deep pores.

## Step-level notes

- Lysis: for 3D scaffolds, freeze-thaw alone is usually insufficient — incomplete cell lysis is the #1 source of false-low PicoGreen reads on HA scaffolds [[../sources/thermo-picogreen-p11496]]. Use proteinase-K + sonication or direct chaotropic lysis (guanidinium-thiocyanate).
- Always run **scaffold-only (no-cell) blanks per scaffold geometry** and subtract — porous HA can scatter and weakly fluoresce in the 480/520 nm window [[../sources/thermo-picogreen-p11496]].
- Standard curve: include the kit-supplied calf-thymus dsDNA dilutions every plate; do not assume linearity from the manufacturer-quoted range.
- Cell-cycle position affects the pg-per-cell conversion; if comparing day-14 (S/G2-enriched) vs day-1 (G1-enriched) cells, the same DNA mass corresponds to different cell numbers. Report DNA mass directly when possible and convert to "cell number" only with caveat.
- Paired with DAPI confocal imaging for spatial distribution (gradient scaffolds need zonal cell-density profiles, not just bulk counts).

## Things to watch for

- [[../failure-modes/HA-autofluorescence-confounds-livedead]] — porous HA scaffolds can scatter and weakly fluoresce in the FITC channel; always blank-subtract per geometry.
- [[../failure-modes/edge-effect-in-scaffold-cell-seeding]] — PicoGreen reports total scaffold dsDNA, not spatial distribution. Cells aggregating at the scaffold edge ("skin" in small-pore scaffolds) inflate the bulk number relative to interior colonisation [[../sources/2010-murphy-understanding-the-effect-of-mean-pore-size-on]]. Pair with DAPI / confocal for spatial.
- [[../failure-modes/incomplete-cell-lysis-3d-scaffold-picogreen]] — the dominant mode of false-low reads in 3D scaffolds. Validate lysis efficiency by spiking known cell numbers into empty scaffolds.

## Sources

- [[../sources/2025-de-carvalho-three-dimensional-printing-of-calcium-ph]] — PicoGreen DNA-content readout for hBMSCs on CPC/MBG scaffolds at 3 and 7 days; significantly higher DNA on CPC/MBG vs CPC.
- [[../sources/thermo-picogreen-p11496]] — Thermo Fisher Quant-iT PicoGreen P11496 catalog: format, linear range, ex/em, lysis caveats, pg-per-cell conversion, HA-autofluorescence and 3D-scaffold lysis pitfalls.
