---
type: failure-mode
slug: retracted-claim
severity: critical
frequency_estimate: 7 retracted papers were captured for this single hypothesis — non-trivial fraction of the HA-scaffold corpus
applies_to_methods: [in-vivo-calvarial-defect-model, in-vivo-femoral-defect-model, alizarin-red-staining, ALP-activity-assay, qPCR, micro-CT-bone-volume-quantification, SEM-imaging]
applies_to_reagents: [hydroxyapatite, beta-tricalcium-phosphate, silk-fibroin, chitosan, strontium, bismuth, erythropoietin, norcantharidin, ammonium-bicarbonate]
applies_to_step_kinds: [citation, claim, plan-generation]
sources: [crossref-retraction-10-3892-mmr-2025-13519, crossref-retraction-10-1111-clr-12656, crossref-retraction-10-1039-d3bm90030d, crossref-retraction-10-1088-1748-605x-ace76a, crossref-retraction-10-1021-acsami-8b04360, crossref-retraction-10-1016-j-lfs-2020-118038, crossref-retraction-10-1016-j-heliyon-2024-e36493, crossref-retraction-10-1155-2024-9893086]
tags: [retraction, citation, integrity, retraction-watch, do-not-cite]
created: 2026-04-25
updated: 2026-04-25
---

# Retracted claim

## What it is

A scientific paper that has been formally retracted by its publisher. Citing a retracted paper as authority for a claim propagates the discredited claim into new work. The Pass-1 fetcher captured 7 retracted papers in the HA-scaffold corpus for this hypothesis, none of which include narrative reasons in their Crossref retraction notices (one — Wiley CLR — explicitly cites image manipulation; the rest are reason-empty). This page lists them with their replaced-DOI / retraction metadata so any Pass-3 plan can flag them at the citation site rather than treat them as evidence.

## How it manifests

- Crossref retraction notices that propagate the metadata but not the original content (which is also still indexed and citable in many cases).
- Citing scientists may unknowingly cite retracted work because (a) Google Scholar still surfaces the original article, (b) some publishers don't mark retracted PDFs visibly, (c) Crossref retraction notices have empty `reason` fields making the failure invisible without explicit Retraction Watch lookup.
- Authors of retracted papers continue to publish on similar topics; their newer (non-retracted) papers may transitively rely on the retracted findings.
- "Image manipulation" is the most common explicit reason in this domain (1 of 7 here); "no-stated-reason" is the modal pattern, often correlated with paper-mill / Hindawi-type cleanup.
- Some retraction notices have empty author lists, making it harder to identify when an author's other work might also be tainted [[../sources/crossref-retraction-10-1088-1748-605x-ace76a]].

## How to detect it

- **Run a Retraction Watch DOI query for every cited paper** before publication / Pass-3 plan generation: `https://api.labs.crossref.org/works/<doi>` returns retraction metadata; or `retractiondatabase.org` search.
- **Run a PubPeer DOI query**: `pubpeer.com` flags pre-retraction integrity concerns — papers with active PubPeer flags but not yet retracted are also high-risk.
- Cross-check captured `raw/retractions/` against the `raw/papers/` corpus: any DOI in retractions is a do-not-cite candidate; any DOI in papers should be checked against the retraction database.
- For a Pass-3 plan: the citation block must include `retraction_status` and `pubpeer_concerns` for each cited reference.

## Mitigation — list of retracted DOIs to NOT cite as authoritative HA-scaffold evidence

- `10.3892/mmr.2020.11352` — Li et al., grooved HA scaffold modulating mitochondria → osteogenesis in BMSCs. Retracted by `10.3892/mmr.2025.13519` on 2025-04-07 (Spandidos, *Mol Med Rep* 31(6)). Retraction Watch record-id 69072. Reason: not stated. **Do not cite.** [[../sources/crossref-retraction-10-3892-mmr-2025-13519]]
- `10.1111/clr.12656` — Maté Sánchez de Val et al., HA/β-TCP/collagen scaffold in vivo histomorphometry / SEM at 15/30/60 days. Retracted 2018-07-18 (Wiley *Clin Oral Implants Res* 29(7)). **Reason explicit: "Images in Figure 4 have been used in other publications representing different time points and materials. Images within Figure 4 have been manipulated."** Do not cite. [[../sources/crossref-retraction-10-1111-clr-12656]]
- `10.1039/c7bm00975e` — Li et al., porous nano-Li-HA / gelatin-microsphere / EPO composite scaffold for glucocorticoid-induced femoral-head osteonecrosis. Retracted by `10.1039/d3bm90030d` on 2023-04-04 (RSC *Biomater. Sci.* 11(9)). Retraction Watch record-id 43787. Reason: not stated. **Do not cite.** [[../sources/crossref-retraction-10-1039-d3bm90030d]]
- `10.1088/1748-605x/ac08aa` — Silk-fibroin / nano-HA / hyaluronic-acid composite scaffold biological-properties paper. Retracted by `10.1088/1748-605x/ace76a` on 2023-07-26 (IOP *Biomed. Mater.* 18(5)). Retraction Watch record-id 46309. Reason: not stated; author list omitted from retraction notice. **Do not cite.** [[../sources/crossref-retraction-10-1088-1748-605x-ace76a]]
- `10.1021/acsami.5b11723` — Selvakumar et al., Bi-doped single-crystalline HA on SPU scaffold for guided bone regeneration. Retracted by `10.1021/acsami.8b04360` on 2018-04-03 (ACS *ACS Appl. Mater. Interfaces* 10(14): 12067). Retraction Watch record-id 17846. Reason: not stated; collective 13-author retraction. **Do not cite.** [[../sources/crossref-retraction-10-1021-acsami-8b04360]]
- `10.1016/j.lfs.2020.118038` — Oryan et al., MSC-seeded 3D PLA/PCL/HA scaffold on rat radial defect. Retracted 2020-09-15 (Elsevier *Life Sci* 257), ~2 weeks post-publication. Reason: not stated; rapid retraction = editorial intervention. **Do not cite.** [[../sources/crossref-retraction-10-1016-j-lfs-2020-118038]]
- `10.1016/j.heliyon.2024.e36493` — Oladipupo et al., eggshell-HA / NH₄HCO₃ nano-composite scaffold bioactivity / cytotoxicity study. Retracted 2024-09-15 (Elsevier *Heliyon* 10(17): e36493), ~30 days post-publication. Reason: not stated; rapid retraction often indicates plagiarism / authorship dispute / image issue. **Do not cite.** [[../sources/crossref-retraction-10-1016-j-heliyon-2024-e36493]]
- `10.1155/2020/9825073` — Strontium / Chitosan / HA / Norcantharidin "dual-action" osteosarcoma-inhibition + osteogenic-promotion composite. Retracted by `10.1155/2024/9893086` on 2024-03-20 (Wiley/Hindawi *BioMed Res Int*); RW record-id 67040. Reason: not stated; part of Hindawi/Wiley 2023–2024 special-issue / paper-mill cleanup. **Do not cite.** [[../sources/crossref-retraction-10-1155-2024-9893086]]

## Mitigation — process

- For each Pass-3 plan: insert a citation-validation step that queries Crossref `/works/<doi>` and Retraction Watch for every cited DOI; flag retraction-status inline at the citation site.
- For UI / Lab Brief: surface retraction warnings as inline annotations on cited references; never silently exclude.
- Maintain a per-hypothesis "do-not-cite" list (this page is the seed) and merge to `commons/failure-modes/retracted-claim` for cross-hypothesis coverage.
- For author-pattern detection: any author with ≥ 1 retraction in the captured corpus should have their other cited papers cross-checked individually.
- For cluster-pattern detection: papers from the Hindawi/Wiley 2020-2023 BMRI / Heliyon / RSC Biomaterials Science cluster are higher-risk by base rate; require additional validation before citing.

## Original sources / evidence

- [[../sources/crossref-retraction-10-3892-mmr-2025-13519]]
- [[../sources/crossref-retraction-10-1111-clr-12656]] (image-manipulation explicit)
- [[../sources/crossref-retraction-10-1039-d3bm90030d]]
- [[../sources/crossref-retraction-10-1088-1748-605x-ace76a]]
- [[../sources/crossref-retraction-10-1021-acsami-8b04360]]
- [[../sources/crossref-retraction-10-1016-j-lfs-2020-118038]]
- [[../sources/crossref-retraction-10-1016-j-heliyon-2024-e36493]]
- [[../sources/crossref-retraction-10-1155-2024-9893086]]

## Affects

- Methods: [[../methods/in-vivo-calvarial-defect-model]], [[../methods/in-vivo-femoral-defect-model]], [[../methods/alizarin-red-staining]], [[../methods/ALP-activity-assay]], [[../methods/qPCR]], [[../methods/micro-CT-bone-volume-quantification]], [[../methods/SEM-imaging]]
- Reagents: [[../reagents/hydroxyapatite]], [[../reagents/beta-tricalcium-phosphate]], [[../reagents/silk-fibroin]], [[../reagents/chitosan]], [[../reagents/strontium]], [[../reagents/bismuth]], [[../reagents/erythropoietin]], [[../reagents/norcantharidin]], [[../reagents/ammonium-bicarbonate]]
