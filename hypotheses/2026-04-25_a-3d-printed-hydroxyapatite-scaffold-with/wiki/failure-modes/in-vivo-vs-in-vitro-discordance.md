---
type: failure-mode
slug: in-vivo-vs-in-vitro-discordance
severity: high
frequency_estimate: dominant — most in-vitro proliferation/differentiation winners do not predict in-vivo bone regeneration
applies_to_methods: [in-vivo-calvarial-defect-model, in-vivo-femoral-defect-model, alamarBlue-proliferation-assay, PicoGreen-DNA-quantification, ALP-activity-assay, alizarin-red-staining, qPCR, micro-CT-bone-volume-quantification]
applies_to_reagents: [hydroxyapatite, beta-tricalcium-phosphate, biphasic-calcium-phosphate, BMP-2]
applies_to_step_kinds: [in-vitro-culture, in-vivo-implantation, validation, claim]
sources: [2013-henkel, 2021-montoya, 2025-hossen, 2026-daghrery, 2015-ishack, 2024-wang, 2025-de-carvalho, 2025-qi, protocol-2023-uchida, crossref-retraction-10-1111-clr-12656, crossref-retraction-10-1039-d3bm90030d, crossref-retraction-10-1016-j-lfs-2020-118038]
tags: [in-vivo, in-vitro, validation, translational]
created: 2026-04-25
updated: 2026-04-25
---

# In-vivo vs in-vitro discordance

## What it is

A scaffold that supports the highest osteoblast proliferation in 2D / 3D in-vitro culture frequently fails to give the most bone in a critical-sized defect model — and vice versa. In-vitro endpoints capture cell behavior in the absence of vasculature, immune response, mechanical loading, and complex resorption-formation coupling. The hypothesis under test is *in-vitro proliferation*; even a fully validated in-vitro win does not generalize to a clinically meaningful osteoinductive scaffold.

## How it manifests

- Henkel et al. 2013 and Montoya 2021 systematically review cases where in-vitro winners failed in vivo and vice versa; cite >30 examples [[../sources/2013-henkel-bone-regeneration-based-on-tissue-engine]], [[../sources/2021-montoya-on-the-road-to-smart-biomaterials-for-bo]].
- Foreign-body response and macrophage-driven resorption of HA scaffolds, absent in-vitro, can dominate in-vivo outcome [[../sources/2025-hossen-biomimetic-strategies-for-bone-regenerat]].
- BMP-2-loaded in-vitro winners often produce ectopic bone in-vivo at clinical doses (well-documented complication) [[../sources/2015-ishack-bone-regeneration-in-critical-bone-defec]].
- Multiple HA-scaffold retractions (Wiley/Hindawi cluster, RSC EPO-loaded, Elsevier MSC-seeded) rest on in-vivo claims that overran their in-vitro foundation: "rat radial defect model with composite scaffold + cell loading is a high-stakes in-vivo claim" [[../sources/crossref-retraction-10-1039-d3bm90030d]], [[../sources/crossref-retraction-10-1016-j-lfs-2020-118038]], [[../sources/crossref-retraction-10-1111-clr-12656]].
- In-vivo histology / micro-CT reuses often-doctored images precisely because the visual evidence *is* the result and is hard to verify [[../sources/crossref-retraction-10-1111-clr-12656]] (image manipulation across timepoints/materials).

## How to detect it

- Triangulate in-vitro readouts: never claim in-vivo behaviour from a single in-vitro assay. Pair DNA + ALP + ARS + gene expression at multiple time points before extrapolating.
- For in-vivo studies: include uncoupled controls (empty defect, scaffold without cells, scaffold with sham material) at every time point.
- Pre-register the in-vivo primary endpoint before launching in-vitro screening — avoid "we picked the in-vivo arm because in-vitro pointed there" post-hoc reasoning.
- Cross-check against retraction databases (Retraction Watch, PubPeer) for the specific scaffold formulation before citing as benchmark — many HA-composite in-vivo claims are tainted [[../sources/crossref-retraction-10-1111-clr-12656]], [[../sources/crossref-retraction-10-1039-d3bm90030d]], [[../sources/crossref-retraction-10-1016-j-lfs-2020-118038]].
- Use multiple species / defect models (calvarial, femoral, radial) to rule out site-specific anomalies [[../sources/2013-henkel-bone-regeneration-based-on-tissue-engine]].

## Mitigation

- **Frame the hypothesis as in-vitro only**; do not claim in-vivo or clinical relevance from a proliferation experiment. The original GROUNDWORK hypothesis correctly scopes "in vitro osteoblast proliferation" — keep the conclusion within scope.
- For translational claims: use Henkel 2013's translational-research-roadmap as scaffolding — mandatory: small-animal critical-defect model with vascularization assessment + large-animal load-bearing defect model + mechanical-functional outcome [[../sources/2013-henkel-bone-regeneration-based-on-tissue-engine]].
- Include an in-vivo bridging experiment if budget permits: even a single calvarial-defect time point at 8 weeks with μCT bone-volume quantification documents whether in-vitro winner reproduces in vivo [[../sources/2015-ishack-bone-regeneration-in-critical-bone-defec]], [[../sources/2025-qi-3d-printed-bioceramic-scaffolds-for-bone]].
- Co-culture in-vitro models that include osteoclast precursors + endothelial cells + MSCs better approximate in-vivo coupling [[../sources/protocol-2023-uchida-determining-bone-forming-ability-and-fre]] (kidney capsule transplant for bone-forming-ability validation).
- Implement Uchida 2023 protocol (kidney capsule transplant for skeletal stem-cell bone-forming-ability validation) as a low-cost in-vivo assay to confirm in-vitro hits [[../sources/protocol-2023-uchida-determining-bone-forming-ability-and-fre]].
- Be explicit in any plan: the demonstrated mechanism (proliferation rate) is necessary but not sufficient for clinical use [[../sources/2026-daghrery-advances-in-3d-printed-scaffolds-for-per]], [[../sources/2024-wang-polydopamine-functionalized-calcium-defi]], [[../sources/2025-de-carvalho-three-dimensional-printing-of-calcium-ph]].

## Original sources / evidence

- [[../sources/2013-henkel-bone-regeneration-based-on-tissue-engine]] — translational roadmap; explicitly frames in-vitro/in-vivo gap.
- [[../sources/2021-montoya-on-the-road-to-smart-biomaterials-for-bo]] — recent translational review.
- [[../sources/2025-hossen-biomimetic-strategies-for-bone-regenerat]] — biomimetic strategies and in-vivo response.
- [[../sources/2026-daghrery-advances-in-3d-printed-scaffolds-for-per]] — periodontal scaffold review with translational framing.
- [[../sources/2015-ishack-bone-regeneration-in-critical-bone-defec]] — calvarial defect model; in-vitro/in-vivo bridging.
- [[../sources/2024-wang-polydopamine-functionalized-calcium-defi]] — in-vivo claim for HA-PDA.
- [[../sources/2025-de-carvalho-three-dimensional-printing-of-calcium-ph]] — explicit "in vitro only" framing as a strength.
- [[../sources/2025-qi-3d-printed-bioceramic-scaffolds-for-bone]] — bioceramic in-vivo data.
- [[../sources/protocol-2023-uchida-determining-bone-forming-ability-and-fre]] — kidney-capsule transplantation as in-vivo bridge.
- [[../sources/crossref-retraction-10-1111-clr-12656]] — image manipulation across time points (in-vivo histology).
- [[../sources/crossref-retraction-10-1039-d3bm90030d]] — RSC retraction; complex composite + biologic + animal model unreproducible.
- [[../sources/crossref-retraction-10-1016-j-lfs-2020-118038]] — Elsevier MSC-seeded HA scaffold rat radial defect retracted within 2 weeks.

## Affects

- Methods: [[../methods/in-vivo-calvarial-defect-model]], [[../methods/in-vivo-femoral-defect-model]], [[../methods/alamarBlue-proliferation-assay]], [[../methods/PicoGreen-DNA-quantification]], [[../methods/ALP-activity-assay]], [[../methods/alizarin-red-staining]], [[../methods/qPCR]], [[../methods/micro-CT-bone-volume-quantification]]
- Reagents: [[../reagents/hydroxyapatite]], [[../reagents/beta-tricalcium-phosphate]], [[../reagents/biphasic-calcium-phosphate]], [[../reagents/BMP-2]]
