---
type: method
slug: cell-seeding-static
aliases: [static-seeding, drop-seeding, gravity-seeding]
related_methods: [cell-seeding-dynamic-perfusion, PicoGreen-DNA-quantification, alamarBlue-proliferation-assay, DAPI-staining, live-dead-staining]
key_reagents: [DMEM, alpha-MEM, FBS, penicillin-streptomycin, PBS]
known_failure_modes: [edge-effect-in-scaffold-cell-seeding, cell-seeding-uniformity-loss-large-pores, cell-seeding-efficiency-variation, nutrient-diffusion-limitation-in-scaffold-core]
sources: [2008-chan-scaffolding-in-tissue-engineering-general-approaches, 2024-wang-polydopamine-functionalized-calcium-defi, 2025-de-carvalho-three-dimensional-printing-of-calcium-ph, 2010-murphy-understanding-the-effect-of-mean-pore-size-on]
tags: [cell-culture, 3D-scaffold, seeding-protocol]
created: 2026-04-25
updated: 2026-04-25
---

# Static cell seeding

## What it measures / produces

Static cell seeding deposits a dense suspension of cells onto a scaffold by pipetting a small volume of cell suspension directly onto the scaffold surface, then allowing cells to attach by gravity for 1–4 h before flooding the well with medium. Output: a 3D scaffold with cells distributed across (predominantly outer) surfaces, ready for subsequent culture, proliferation, and differentiation readouts. **Simplest seeding method, lowest equipment requirement, but worst cell-distribution uniformity** — the dominant failure mode is edge accumulation.

## When to use it

Use static seeding for (a) standard scaffold-comparison studies where simplicity and reproducibility outweigh perfect uniformity, (b) high-throughput screening across many scaffold types, (c) scaffolds with sufficiently small / well-interconnected pores that capillary action distributes cells (small-pore scaffolds bias toward edge accumulation; large-pore scaffolds let cells fall through). For the present hypothesis, static seeding is the default; consider dynamic perfusion as a variant if static seeding gives uneven distribution between gradient and uniform scaffolds.

## Key parameters

- **Seeding density**: typically 5 × 10⁴ cells per scaffold (small scaffold) to 5 × 10⁵ cells per scaffold (10 mm scaffold), in 50–200 µL droplets.
- **Attachment time**: 1–4 h at 37 °C, 5% CO₂ before flooding with medium; longer for slower-attaching cells.
- **Pre-wet** scaffolds with PBS or medium for at least 30 min before seeding to displace air and ensure cell suspension wicks into the pores.
- **Effect-size benchmark**: cell-seeding efficiency is typically only 22.8 ± 1.3% in 70 → 200 μm gradient PLLA scaffolds (8.5 × 3.5 mm cylinder, 80,000 BM-hMSCs) [[../sources/2025-conoscenti-continuous-pore-size-gradient-enhances-z]] — the rest are lost or poorly attached.
- **Static seeding typical efficiency 10–40%**; dynamic perfusion can reach 60–80%.

## Common variants

- **Drop seeding** — pipette small droplet on scaffold surface, attach 1–4 h.
- **Pipette-pressure seeding** — gently push suspension through scaffold by pipette pressure; better penetration than gravity alone.
- **Vacuum-assisted seeding** — pull cell suspension through scaffold under mild vacuum; better uniformity at risk of cell damage.
- **Centrifugal seeding** — short low-G spin to drive cells into scaffold; risks crushing cells.
- See [[cell-seeding-dynamic-perfusion]] for the perfusion-based alternative.

## Step-level notes

- Pre-wet scaffolds for ≥30 min in PBS or medium; air bubbles in pores will exclude cells.
- Use small seeding volume (50–100 µL) concentrated onto the top surface; large volumes pool around the scaffold rather than penetrating.
- Re-pipette cells onto the scaffold every 30 min during attachment to redistribute.
- After attachment, gently flood the well rather than dispensing medium directly onto the scaffold (which displaces unattached cells).
- For the gradient-vs-uniform comparison: static seeding produces an outer-shell-biased distribution that may itself differ between gradient (small-pore outer) and uniform-pore — a confound that is intrinsic to the comparison [[../sources/2010-murphy-understanding-the-effect-of-mean-pore-size-on]] [[../sources/2008-chan-scaffolding-in-tissue-engineering-general-approaches]].
- Spike scaffolds with known cell numbers and immediately lyse for PicoGreen to compute seeding efficiency.

## Things to watch for

- [[../failure-modes/edge-effect-in-scaffold-cell-seeding]] — cells aggregate at the scaffold outer surface, forming a "skin" that can bridge small pores and exclude interior colonisation [[../sources/2010-murphy-understanding-the-effect-of-mean-pore-size-on]] [[../sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]]. Especially severe for small-pore scaffolds (sub-150 μm).
- [[../failure-modes/cell-seeding-uniformity-loss-large-pores]] — conversely, in large-pore scaffolds (>500 μm), cells fall through during static seeding and end up on the well bottom rather than the scaffold [[../sources/2025-lee-pcl-scaffold-with-well-defined-hierarchi]] [[../sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]].
- [[../failure-modes/cell-seeding-efficiency-variation]] — static seeding efficiency varies widely (10–40%) and can systematically differ between gradient and uniform scaffolds; report efficiency per group [[../sources/2008-chan-scaffolding-in-tissue-engineering-general-approaches]].
- [[../failure-modes/nutrient-diffusion-limitation-in-scaffold-core]] — even with successful initial seeding, downstream nutrient transport into the small-pore outer shell is limited, exacerbating the edge effect.

## Sources

- [[../sources/2008-chan-scaffolding-in-tissue-engineering-general-approaches]] — static seeding fundamentals and limitations: cell penetration is limited; agitation, perfusion, and enlarged pore size are countermeasures.
- [[../sources/2024-wang-polydopamine-functionalized-calcium-defi]] — static seeding of mBMSCs / HUVECs onto gradient CDHA scaffolds.
- [[../sources/2025-de-carvalho-three-dimensional-printing-of-calcium-ph]] — static seeding of hBMSCs onto extruded CPC/MBG scaffolds.
- [[../sources/2010-murphy-understanding-the-effect-of-mean-pore-size-on]] — explicit description of edge-aggregation "skin" in small-pore CG scaffolds; mechanistic rationale for static-seeding edge effects.
