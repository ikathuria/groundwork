---
type: failure-mode
slug: incomplete-cell-lysis-3d-scaffold-picogreen
severity: high
frequency_estimate: dominant — standard 2D lysis protocols (single freeze-thaw + 0.1% Triton) recover only 40–70% of dsDNA from 3D scaffolds
applies_to_methods: [PicoGreen-DNA-quantification, alamarBlue-proliferation-assay, MTS-assay, MTT-assay]
applies_to_reagents: [PicoGreen, hydroxyapatite, polycaprolactone]
applies_to_step_kinds: [lysis, sampling, quantification]
sources: [thermo-picogreen-p11496]
tags: [PicoGreen, lysis, 3D-scaffold, recovery, DNA-quantification]
created: 2026-04-25
updated: 2026-04-25
---

# Incomplete cell lysis in 3D scaffold for PicoGreen

## What it is

Standard 2D-culture cell-lysis protocols (single freeze-thaw + 0.1% Triton X-100, or the manufacturer's PicoGreen kit lysis buffer) are calibrated for cells on a flat well bottom. In a 3D porous scaffold with cells in deep pores, the same protocol leaves a substantial fraction of cells intact — their dsDNA never reaches the PicoGreen dye, so the assay reports a falsely low cell number. The undercount is geometry-dependent (worse for thicker scaffolds, smaller pores, cells embedded in matrix), so cross-group comparisons of "DNA content" are also biased.

## How it manifests

- Thermo PicoGreen kit page explicitly: "**Incomplete cell lysis in 3D scaffolds is the #1 source of false-low PicoGreen reads** — cells in deep pores may not be lysed by standard freeze-thaw; use proteinase-K + sonication or direct chaotropic lysis. This is a known issue for 3D bone scaffolds." [[../sources/thermo-picogreen-p11496]]
- Recovery typically 40–70% of true dsDNA content with single freeze-thaw + Triton; 80–95% with proteinase-K + sonication; 95%+ with chaotropic lysis (guanidine-HCl) + bead-beating.
- Cross-section: visible intact cells in DAPI imaging after PicoGreen lysis treatment confirms incomplete lysis.
- Group-to-group differences in recovery: large-pore scaffolds release cells more easily than small-pore (cells in small pores are more shielded), so a small-pore scaffold's cell number can be underreported relative to large-pore.
- alamarBlue / MTS measures *metabolism* not just cell number — but if cells are in metabolically inactive state due to diffusion limit, the ratio of alamarBlue:DNA shifts; a sanity check against well-lysed PicoGreen catches this.

## How to detect it

- **Run a recovery-validation experiment**: seed known cell number (5 × 10⁴) on a scaffold; immediately lyse with the planned protocol; quantify by PicoGreen; compare to the calibration standard curve. Recovery should be > 80%; if < 80%, lysis is insufficient.
- DAPI image cross-sections of scaffolds after lysis: any visible nuclei post-lysis = incomplete.
- Compare PicoGreen on the same scaffold using two lysis methods (manufacturer's kit vs proteinase-K + sonication) — the more aggressive method's signal should match the gentler method to within 10%; > 20% disagreement indicates the gentler method is incomplete.
- Add Pi-buffer + EDTA (HA dissolves at low pH) to disrupt mineralized matrix that traps cells; PicoGreen yield should not increase if cells were already lysed.

## Mitigation

- **Use a 3D-scaffold-specific lysis protocol**:
  1. Wash scaffold 2× PBS to remove serum.
  2. Transfer to 1 mL fresh chaotropic lysis buffer (10 mM Tris-HCl pH 8.0, 100 mM NaCl, 25 mM EDTA, 1% SDS) **OR** pre-warmed proteinase-K (200 μg/mL in TE, 56 °C, 30 min).
  3. Sonicate scaffold (probe sonicator, 30 s on / 30 s off, 5 cycles) **OR** bead-beat (1.4 mm zirconia beads, 30 Hz, 5 min).
  4. Two rounds of freeze-thaw (–80 °C / 37 °C × 2) interspersed with vortex.
  5. Centrifuge briefly to pellet scaffold debris; transfer supernatant for PicoGreen quantification.
  This recovers > 90% of dsDNA per Thermo protocol [[../sources/thermo-picogreen-p11496]].
- Always run the recovery-validation experiment per scaffold geometry / material before reporting numbers.
- Pair PicoGreen with **section-by-section sampling**: cut scaffold into 3–4 radial slabs and lyse each separately; sum gives total DNA. Sum-of-slabs > whole-scaffold lysis indicates incomplete whole-scaffold lysis.
- Report cell number using empirical pg-DNA-per-cell coefficient (~6–7 pg for diploid mammalian; up to 12 pg in S/G2) — and document the conversion factor [[../sources/thermo-picogreen-p11496]].
- Consider replacing PicoGreen with a metabolism-based readout (alamarBlue) for scaffold work; alamarBlue does not require lysis. Caveat: alamarBlue measures metabolic state, not cell number — combine with DAPI imaging for spatial info, or run both as orthogonal readouts [[../sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]] (cross-link).
- For HA scaffolds specifically: lysis buffer can dissolve HA (low pH), which can release Ca²⁺ that interferes with the PicoGreen-dye-DNA chelate fluorescence — use Tris pH 8 buffers, not low-pH buffers; verify dye performance on Ca²⁺-spiked controls.

## Original sources / evidence

- [[../sources/thermo-picogreen-p11496]] — explicit kit-page guidance: incomplete cell lysis is "the #1 source of false-low PicoGreen reads" for 3D bone scaffolds; proteinase-K + sonication recommended; HA autofluorescence and pg-per-cell-coefficient compounding factors.

## Affects

- Methods: [[../methods/PicoGreen-DNA-quantification]], [[../methods/alamarBlue-proliferation-assay]], [[../methods/MTS-assay]], [[../methods/MTT-assay]]
- Reagents: [[../reagents/PicoGreen]], [[../reagents/hydroxyapatite]], [[../reagents/polycaprolactone]]
