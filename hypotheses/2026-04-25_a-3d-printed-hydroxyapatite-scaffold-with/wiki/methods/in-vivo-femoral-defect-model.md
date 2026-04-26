---
type: method
slug: in-vivo-femoral-defect-model
aliases: [femoral-condyle-defect, rat-femoral-defect, rabbit-femoral-defect, segmental-femoral-defect]
related_methods: [in-vivo-calvarial-defect-model, micro-CT-imaging, micro-CT-bone-volume-quantification, mechanical-compression-testing, histomorphometry]
key_reagents: [hydroxyapatite, beta-tricalcium-phosphate, BMP-2]
known_failure_modes: [in-vivo-vs-in-vitro-discordance, short-term-proliferation-vs-long-term-bone-formation, brittle-ceramic-mechanical-failure, stress-shielding-from-uniform-stiffness-implants]
sources: [2018-zhang-effect-of-microporosity-on-scaffolds-for, 2021-montoya-on-the-road-to-smart-biomaterials-for-bo, 2022-yang-gaussian-curvature-driven-direction-of-c, 2012-amini-bone-tissue-engineering-recent-advances, 2012-bose-recent-advances-in-bone-tissue-engineeri, 2013-henkel-bone-regeneration-based-on-tissue-engine]
tags: [in-vivo, animal-model, bone-defect, load-bearing]
created: 2026-04-25
updated: 2026-04-25
---

# In-vivo femoral defect model

## What it measures / produces

A surgically created defect in the femur — typically a femoral-condyle critical-sized defect (CSD, drilled cylindrical hole, e.g., 5 × 10 mm in rabbit) or a segmental long-bone defect (mid-shaft removal, e.g., 4–6 mm in rat) — into which the test scaffold is implanted. After 4–24 weeks, the femur is harvested and analysed for new bone formation (μCT BV/TV), scaffold remodelling, mechanical recovery, and histology. **Load-bearing** model — distinguishes the femoral defect from the calvarial defect (non-load-bearing). Output: bone volume fraction, bone mineral density, scaffold-bone interface histology, mechanical strength of the regenerated segment.

## When to use it

Use the femoral-defect model when (a) the scaffold is intended for **load-bearing** orthopaedic indications (most HA scaffolds for trauma / fracture repair), (b) you need to evaluate stress shielding and mechanical match (a uniform-stiffness implant fails this test) [[../sources/2026-zhao-longitudinal-and-radial-microgradients-i]], (c) you need a more challenging model than a calvarial defect (femoral defects are mechanically loaded and harder to heal), or (d) you are testing biphasic / gradient scaffolds where the cortical-mimicking shell must bear load. Used in [[../sources/2022-yang-gaussian-curvature-driven-direction-of-c]] for rabbit-femoral-defect testing of TPMS β-TCP scaffolds.

## Key parameters

- **Species and defect size**: rabbit femoral condyle 5 × 10 mm cylindrical [[../sources/2022-yang-gaussian-curvature-driven-direction-of-c]]; rat femoral mid-shaft segmental 4–6 mm [[../sources/2018-zhang-effect-of-microporosity-on-scaffolds-for]] [[../sources/2013-henkel-bone-regeneration-based-on-tissue-engine]] [[../sources/2012-bose-recent-advances-in-bone-tissue-engineeri]]; canine and ovine femoral defects for translational scale-up [[../sources/2013-henkel-bone-regeneration-based-on-tissue-engine]].
- **Critical-size threshold**: a defect is "critical" if it does not heal spontaneously within the animal's lifetime. ~6 mm in mouse/rat femur, ~5 mm in rabbit femoral condyle, larger in ovine/canine [[../sources/2026-liu-design-and-fabrication-of-biomimetic-gra]] (cites the 6 mm self-healing limit).
- **Time-points**: 4, 8, 12, 24 weeks post-implantation typical; longer for slower-degrading HA.
- **Primary endpoint**: BV/TV via μCT; secondary endpoints: bone mineral density, scaffold remodeling, mechanical compression of regenerated segment, histology (alizarin red, von Kossa, H&E).
- **Fixation**: external fixator or intramedullary pin for segmental defects to control the mechanical environment.
- **Sample size**: typically n = 5–8 per group per time point; power analysis depends on expected effect size.

## Common variants

- **Femoral condyle CSD** — cylindrical drilled defect; non-segmental, partial weight-bearing.
- **Segmental femoral defect** — full segmental gap; requires fixation; most demanding model.
- **Rat femoral CSD** — most common; ~5 mm cylindrical defect.
- **Rabbit femoral CSD** — bridge between rodent and large-animal; most common in scaffold-pore-size studies.
- **Canine / ovine femoral defect** — translational scale, FDA-relevant.

## Step-level notes

- Pre-clinical IACUC approval and analgesia plan are non-negotiable.
- Drill at low speed with continuous saline irrigation to avoid thermal necrosis at the bone-scaffold interface.
- Press-fit or fixate the scaffold to ensure mechanical contact with native bone.
- Sham (empty defect) control essential to confirm critical-size; off-the-shelf clinical scaffold (e.g., commercial HA granules) as positive control.
- μCT at end-point with phantom calibration; segment scaffold vs new bone via dual-threshold (HA strut intensity ≈ mature bone, requires careful threshold + manual segmentation).
- Histology after μCT: decalcify (or use undecalcified resin embedding for mineralised section) and stain.

## Things to watch for

- [[../failure-modes/in-vivo-vs-in-vitro-discordance]] — high in-vitro proliferation does not predict in-vivo bone formation; femoral-defect μCT is the primary in-vivo bridge metric.
- [[../failure-modes/short-term-proliferation-vs-long-term-bone-formation]] — a 4-week endpoint may show only fibrotic infill; 12-week+ needed for mature bone.
- [[../failure-modes/brittle-ceramic-mechanical-failure]] — load-bearing femoral environment will reveal scaffold mechanical weakness that calvarial models hide.
- [[../failure-modes/stress-shielding-from-uniform-stiffness-implants]] — uniform-stiffness scaffolds over-stiffen mid-shaft and under-support metaphysis, promoting stress shielding [[../sources/2026-zhao-longitudinal-and-radial-microgradients-i]] — the failure mode that motivates gradient designs.

## Sources

- [[../sources/2018-zhang-effect-of-microporosity-on-scaffolds-for]] — femoral defect model in microporosity / BCP scaffold review.
- [[../sources/2021-montoya-on-the-road-to-smart-biomaterials-for-bo]] — femoral defect in smart-biomaterial evaluation.
- [[../sources/2022-yang-gaussian-curvature-driven-direction-of-c]] — rabbit femoral defect model with TPMS β-TCP scaffolds, accelerated bone formation by curvature.
- [[../sources/2012-amini-bone-tissue-engineering-recent-advances]] — femoral defect among BTE animal models.
- [[../sources/2012-bose-recent-advances-in-bone-tissue-engineeri]] — femoral defect for printed CaP scaffolds.
- [[../sources/2013-henkel-bone-regeneration-based-on-tissue-engine]] — femoral defects across rat / canine / ovine for translation.
