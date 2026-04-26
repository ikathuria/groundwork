---
type: method
slug: in-vivo-calvarial-defect-model
aliases: [cranial-defect-model, calvarial-CSD, mouse-cranial-defect, rat-calvarial-defect]
related_methods: [in-vivo-femoral-defect-model, micro-CT-imaging, micro-CT-bone-volume-quantification, histomorphometry, kidney-capsule-transplantation]
key_reagents: [hydroxyapatite, beta-tricalcium-phosphate, BMP-2, dipyridamole]
known_failure_modes: [in-vivo-vs-in-vitro-discordance, short-term-proliferation-vs-long-term-bone-formation, monoculture-misses-osteoclast-coupling]
sources: [2015-ishack-bone-regeneration-in-critical-bone-defec, 2025-qi-3d-printed-bioceramic-scaffolds-for-bone, 2018-zhang-effect-of-microporosity-on-scaffolds-for, 2021-montoya-on-the-road-to-smart-biomaterials-for-bo, 2012-amini-bone-tissue-engineering-recent-advances, 2013-henkel-bone-regeneration-based-on-tissue-engine, 2014-polo-corrales-scaffold-design-for-bone-regeneration, protocol-2023-uchida]
tags: [in-vivo, animal-model, bone-defect, non-load-bearing]
created: 2026-04-25
updated: 2026-04-25
---

# In-vivo calvarial defect model

## What it measures / produces

A surgically created defect in the cranium (calvaria) — typically a 3–8 mm cylindrical hole drilled through the parietal/frontal bone — into which the test scaffold is implanted. **Non-load-bearing** model: the calvaria carries minimal mechanical load, isolating the biological response (osteoinduction, osteoconduction, vascularisation) from mechanical confounds. Output: bone regeneration measured by μCT bone-volume-fraction within the defect, histology, and immunohistochemistry over 4–12 weeks.

## When to use it

Use the calvarial defect model when (a) you want to isolate the biological effect of a scaffold (e.g., gradient pore vs uniform pore for osteoinduction) without mechanical confounds, (b) you need a relatively easy, well-standardised in-vivo model with high throughput (mouse calvarial CSD is standard), (c) downstream of in-vitro proliferation studies as the next-step validation. Used in [[../sources/2015-ishack-bone-regeneration-in-critical-bone-defec]] (3 mm mouse cranial CSD with HA/β-TCP scaffolds) and many of the cited reviews.

## Key parameters

- **Defect size**: 3 mm cylindrical (mouse, [[../sources/2015-ishack-bone-regeneration-in-critical-bone-defec]]); 5 mm (mouse / rat); 8 mm (rat critical-size [[../sources/2014-polo-corrales-scaffold-design-for-bone-regeneration]]).
- **Critical-size**: 3 mm in mouse, 5 mm in rat parietal, 8 mm in rat calvaria, larger in rabbit/non-human primate.
- **Time-points**: 2, 4, 8 weeks typical; 12+ weeks for long-term remodeling. Ishack used 2/4/8 weeks [[../sources/2015-ishack-bone-regeneration-in-critical-bone-defec]].
- **Sample size**: n = 5–8 per group per time-point.
- **Surgical**: midline incision, periosteum reflected, defect drilled through full thickness with constant saline irrigation. Scaffold placed without fixation (calvaria geometry constrains it). Periosteum and skin closed in layers.
- **Effect-size benchmark**: at 8 weeks, HA/β-TCP coated with dipyridamole or BMP-2 produced significantly more bone formation than vehicle control (n=5/group; p ≤ 0.01) [[../sources/2015-ishack-bone-regeneration-in-critical-bone-defec]].

## Common variants

- **Mouse cranial CSD** (3–5 mm) — high throughput, transgenic models available (e.g., A2A receptor knockout in [[../sources/2015-ishack-bone-regeneration-in-critical-bone-defec]]).
- **Rat calvarial CSD** (5–8 mm) — most common in scaffold pore-size studies.
- **Rabbit calvarial CSD** — larger model, intermediate translation step.
- **Bilateral defect** — paired contralateral defects in the same animal for within-subject comparison; common variant.

## Step-level notes

- Anaesthesia and analgesia per IACUC; pre-emptive analgesia recommended.
- Drill at low speed (5000–10,000 rpm) with continuous saline irrigation; thermal necrosis at the bone edge will compromise healing.
- Scaffold press-fit; "plug-with-cap" geometry (e.g., cap layer 4.4 mm × plug 3.3 mm at 250 μm strut / 300 μm pore) used in Ishack to keep the scaffold seated [[../sources/2015-ishack-bone-regeneration-in-critical-bone-defec]].
- Sham (empty) and positive (commercial HA granules) controls essential.
- μCT at end-point with phantom calibration; segment scaffold vs new bone carefully (HA and bone are similar attenuation).
- Histology after μCT: H&E, Goldner's trichrome (mineralised vs osteoid), TRAP for osteoclasts.

## Things to watch for

- [[../failure-modes/in-vivo-vs-in-vitro-discordance]] — calvarial bone formation can diverge from in-vitro osteoblast proliferation. Pore-size effects on M2 macrophage polarisation (e.g., 600 μm benchmark in [[../sources/2025-qi-3d-printed-bioceramic-scaffolds-for-bone]]) only show up in vivo.
- [[../failure-modes/short-term-proliferation-vs-long-term-bone-formation]] — 2-week endpoint may show only fibrovascular infill; 8-week+ needed for mature mineralised bone.
- [[../failure-modes/monoculture-misses-osteoclast-coupling]] — calvarial defect captures the full immune / osteoclast environment that monoculture in-vitro does not.

## Sources

- [[../sources/2015-ishack-bone-regeneration-in-critical-bone-defec]] — concrete 3 mm mouse cranial CSD with robocasted HA/β-TCP scaffolds; +dipyridamole / +BMP-2 / vehicle; 2/4/8 weeks; A2A-receptor mechanism via knockout mice.
- [[../sources/2025-qi-3d-printed-bioceramic-scaffolds-for-bone]] — calvarial defects in bioceramic-scaffold review; 600 μm pore benchmark for M2 polarisation.
- [[../sources/2018-zhang-effect-of-microporosity-on-scaffolds-for]] — calvarial defects in microporosity-scaffold review.
- [[../sources/2021-montoya-on-the-road-to-smart-biomaterials-for-bo]] — calvarial defects in smart-biomaterial evaluation.
- [[../sources/2012-amini-bone-tissue-engineering-recent-advances]] — calvarial defects across BTE.
- [[../sources/2013-henkel-bone-regeneration-based-on-tissue-engine]] — calvarial defects in translational pipeline.
- [[../sources/2014-polo-corrales-scaffold-design-for-bone-regeneration]] — calvarial defects in scaffold-design review (8 mm rat critical-size threshold).
- [[../sources/protocol-2023-uchida]] — bone-forming-ability assay using subcutaneous / kidney-capsule transplantation, complementary to calvarial CSD.
