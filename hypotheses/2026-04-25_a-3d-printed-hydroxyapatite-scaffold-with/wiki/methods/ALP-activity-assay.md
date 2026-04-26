---
type: method
slug: ALP-activity-assay
aliases: [alkaline-phosphatase-assay, ALP-assay, pNPP-assay]
related_methods: [alizarin-red-staining, von-kossa-staining, qPCR, RT-PCR, osteogenic-differentiation-induction, alamarBlue-proliferation-assay, PicoGreen-DNA-quantification]
key_reagents: [p-nitrophenyl-phosphate, beta-glycerophosphate, L-ascorbic-acid-2-phosphate, dexamethasone]
known_failure_modes: [proliferation-vs-differentiation-tradeoff, short-term-proliferation-vs-long-term-bone-formation, donor-variability-hMSC]
sources: [2026-thammarakcharoen-comprehensive-toxicological-evaluation-o, 2021-montoya-on-the-road-to-smart-biomaterials-for-bo, 2012-amini-bone-tissue-engineering-recent-advances, 2014-polo-corrales-scaffold-design-for-bone-regeneration, 2017-gao-bone-biomaterials-and-interactions-with, 2016-murphy-scaffolds-and-cells-for-tissue-regeneration, 2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]
tags: [osteogenic-differentiation, enzyme-assay, secondary-endpoint, biomarker]
created: 2026-04-25
updated: 2026-04-25
---

# Alkaline phosphatase (ALP) activity assay

## What it measures / produces

Alkaline phosphatase is an early osteoblast differentiation marker; its activity rises as pre-osteoblasts commit to the osteogenic lineage and falls again as cells progress to mineralised matrix deposition. The assay quantifies ALP enzymatic activity by hydrolysis of p-nitrophenyl phosphate (pNPP) to p-nitrophenol (pNP, yellow, λ ≈ 405 nm) under alkaline conditions. Output: ALP activity in nmol pNP per minute per total protein (or per ng DNA), peaking around day 7–14 of osteogenic culture. For HA scaffolds, ALP is the **standard secondary differentiation endpoint** to pair with primary proliferation endpoints (PicoGreen, alamarBlue) at day 14.

## When to use it

Use ALP (a) as the **secondary differentiation readout** at days 7, 14, and 21 alongside RUNX2/OCN/COL1 gene expression and matrix mineralisation (alizarin red, von Kossa), (b) to disambiguate the proliferation-differentiation trade-off — if gradient-pore scaffolds show higher proliferation but lower ALP at day 14, that is a textbook trade-off [[../sources/2018-zhang-effect-of-microporosity-on-scaffolds-for]] [[../sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]], (c) when validating scaffold osteoinductive potency (does the scaffold itself drive ALP, or is osteogenic medium required?). The present hypothesis tracks ALP secondarily but not as the primary endpoint.

## Key parameters

- **Substrate**: p-nitrophenyl phosphate (pNPP), typically at 1–10 mM in alkaline buffer (pH 9.5–10.5, often diethanolamine or glycine).
- **Read wavelength**: 405 nm (yellow pNP product).
- **Normalisation**: ALP activity is reported per total protein (BCA or Bradford) or per ng DNA (PicoGreen) — pick one and use consistently to control for cell number differences across scaffolds.
- **Osteogenic medium composition** (common to all sources): 10 mM β-glycerophosphate, 50 µg/mL L-ascorbic-acid-2-phosphate, 100 nM dexamethasone in α-MEM or DMEM + 10% FBS [[../sources/2025-conoscenti-continuous-pore-size-gradient-enhances-z]] [[../sources/2022-yang-gaussian-curvature-driven-direction-of-c]] [[../sources/protocol-2025-amin-murine-osteoblast-and-osteoclast-co-cult]] [[../sources/protocol-2025-sheikh-isolation-of-in-vitro-osteoblastic-deriv]].
- **Time course**: ALP rises from day 4–7, peaks at day 14, declines by day 21 as mineralisation takes over. Sample at multiple time-points to capture the curve.
- **Effect-size example**: PCL/Bioglass had highest ALP at day 14 (80.37 ± 14.82) vs PCL/HA (lower) on hADSCs [[../sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]] — ceramic chemistry, not just architecture, drives ALP.

## Common variants

- **pNPP colorimetric assay** — the classic, plate-based, cheap.
- **ALP staining** (BCIP/NBT or naphthol AS-MX phosphate) — qualitative spatial readout, often paired with the colorimetric quantification.
- **Commercial kits** (e.g., Sigma APF, Thermo SensoLyte): packaged with controlled-pH buffer.
- **Serum ALP** (in-vivo readout) — bone-specific ALP isoform via heat inactivation or immunoassay.

## Step-level notes

- Cell lysis: scrape or trypsinise cells off the scaffold, lyse in 0.1% Triton X-100 / 0.2% NP-40 in cold PBS; pellet debris before reading.
- For 3D scaffolds, the same lysis-efficiency caveats as PicoGreen apply: deep-pore cells may not be released in standard freeze-thaw lysis.
- Run pNP standard curve every plate (commercial 10 mM pNP); compute nmol pNP per min per mL.
- Normalise to total protein OR DNA — not both within the same comparison.
- Time-course: day 7 too early (proliferation-dominated), day 21 too late (mineralisation-dominated); day 14 is the standard ALP peak readout for MC3T3 / hBMSC.

## Things to watch for

- [[../failure-modes/proliferation-vs-differentiation-tradeoff]] — gradient-pore scaffolds may shift the balance: large-pore regions favour proliferation, small-pore regions favour differentiation [[../sources/2018-zhang-effect-of-microporosity-on-scaffolds-for]] [[../sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]] [[../sources/2025-conoscenti-continuous-pore-size-gradient-enhances-z]]. Total scaffold ALP averages over both zones; report by zone if possible.
- [[../failure-modes/short-term-proliferation-vs-long-term-bone-formation]] — high day-14 ALP does not guarantee in-vivo bone formation; mineralisation and in-vivo bone-volume-fraction are needed downstream.
- [[../failure-modes/donor-variability-hMSC]] — primary hMSC ALP varies across donors; pool ≥3 donors for human MSC studies [[../sources/2025-conoscenti-continuous-pore-size-gradient-enhances-z]].

## Sources

- [[../sources/2026-thammarakcharoen-comprehensive-toxicological-evaluation-o]] — ALP in 3DPHA biocompatibility battery.
- [[../sources/2021-montoya-on-the-road-to-smart-biomaterials-for-bo]] — ALP in smart-biomaterial differentiation evaluation.
- [[../sources/2012-amini-bone-tissue-engineering-recent-advances]] — ALP as standard early differentiation marker in BTE.
- [[../sources/2014-polo-corrales-scaffold-design-for-bone-regeneration]] — ALP as paired readout with mineralisation in scaffold-design review.
- [[../sources/2017-gao-bone-biomaterials-and-interactions-with]] — ALP in bone-biomaterial review.
- [[../sources/2016-murphy-scaffolds-and-cells-for-tissue-regeneration]] — ALP in scaffold-cell interaction studies.
- [[../sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]] — ALP day-14 quantitative comparison across PCL / PCL-HA / PCL-TCP / PCL-Bioglass scaffolds; PCL/Bioglass highest.
