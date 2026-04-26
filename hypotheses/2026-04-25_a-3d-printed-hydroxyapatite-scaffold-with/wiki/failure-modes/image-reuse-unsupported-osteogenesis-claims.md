---
type: failure-mode
slug: image-reuse-unsupported-osteogenesis-claims
severity: critical
frequency_estimate: dominant in HA-scaffold retractions — the explicit reason in 1 of 7 retractions in this batch and likely in most others
applies_to_methods: [SEM-imaging, micro-CT-imaging, alizarin-red-staining, in-vivo-calvarial-defect-model, in-vivo-femoral-defect-model, fluorescence-microscopy, confocal-microscopy, histomorphometry]
applies_to_reagents: [hydroxyapatite, beta-tricalcium-phosphate, biphasic-calcium-phosphate, silk-fibroin, chitosan, strontium, bismuth]
applies_to_step_kinds: [imaging, histology, claim, citation]
sources: [crossref-retraction-10-3892-mmr-2025-13519, crossref-retraction-10-1111-clr-12656, crossref-retraction-10-1039-d3bm90030d, crossref-retraction-10-1088-1748-605x-ace76a, crossref-retraction-10-1021-acsami-8b04360, crossref-retraction-10-1016-j-lfs-2020-118038, crossref-retraction-10-1016-j-heliyon-2024-e36493, crossref-retraction-10-1155-2024-9893086]
tags: [retraction, image-manipulation, integrity, citation-hygiene, retraction-watch, pubpeer]
created: 2026-04-25
updated: 2026-04-25
---

# Image reuse / unsupported osteogenesis claims

## What it is

Image manipulation — reusing the same SEM, μCT, histology, or fluorescence image across different time points, materials, or papers — is the most common single retraction reason in HA-scaffold osteogenesis literature. The Wiley Clinical Oral Implants Research retraction (10.1111/clr.12656) explicitly states "Images in Figure 4 have been used in other publications representing different time points and materials. Images within Figure 4 have been manipulated to represent different time points and materials." Most other retractions in this domain do not state a reason but show the same fingerprint. Citing a retracted paper as authority for an HA-scaffold mechanism is a critical-severity error that propagates the false claim.

## How it manifests

- Identical SEM micrographs or histology fields in two different time points / scaffold groups within a paper, only relabelled — the Wiley CLR retraction is the explicit case [[../sources/crossref-retraction-10-1111-clr-12656]].
- Same micrograph appearing in different papers from the same group with a different scaffold attribution — caught by Image-Twin / PubPeer image-similarity scans.
- Western-blot reuse in HA-scaffold mechanistic claims (e.g., the Spandidos MMR 2020/2025 grooved-HA-mitochondria paper retracted 2025 with empty stated reason — likely image-reuse) [[../sources/crossref-retraction-10-3892-mmr-2025-13519]].
- "Dual-action" / multi-component composite claims with no narrative retraction reason but consistent image-manipulation patterns: BMRI Sr/Chitosan/HA/Norcantharidin (Hindawi/Wiley 2020 retracted 2024 cluster) [[../sources/crossref-retraction-10-1155-2024-9893086]]; Biomaterials Science 2018 lithium-HA/gelatin/EPO (RSC retraction 2023) [[../sources/crossref-retraction-10-1039-d3bm90030d]]; Biomedical Materials 2021 silk-fibroin/nano-HA/HAc (IOP retraction 2023) [[../sources/crossref-retraction-10-1088-1748-605x-ace76a]]; ACS Applied Materials Bi-doped-HA SPU (2018 retraction) [[../sources/crossref-retraction-10-1021-acsami-8b04360]]; Life Sciences PLA/PCL/HA + MSC (Elsevier 2020 retraction 2 weeks post-publication) [[../sources/crossref-retraction-10-1016-j-lfs-2020-118038]]; Heliyon eggshell-HA-NH₄HCO₃ (Elsevier 2024 retraction within 1 month) [[../sources/crossref-retraction-10-1016-j-heliyon-2024-e36493]].
- Empty Crossref retraction notice abstracts — silence is not exoneration; multiple HA-scaffold retractions in 2018–2025 had narrative-free notices but Retraction Watch records confirm the cluster pattern.
- Cited HA-scaffold mechanism not reproducing in your own hands; check the source's retraction status.

## How to detect it

- **Retraction Watch + PubPeer query** for every paper before citing: retractiondatabase.org → search by DOI; pubpeer.com → search by DOI / authors. Reject any paper with active retraction or substantive PubPeer flag.
- **Image-Twin / ImageCheck**: run candidate paper images through automated image-similarity tools to check for cross-paper reuse before relying on figures.
- For your own manuscript: deposit raw images and analysis scripts in repository (Zenodo, Dryad, OSF) at submission; co-author signatures on data-availability statement.
- Watch for fingerprints: identical "speckle patterns" in supposedly different scaffold SEMs; identical Alizarin-red distribution patterns; identical histology fields across time points.
- Cross-validate via independent assays: if mineralization at day 21 by ARS, also confirm by EDX/Ca²⁺ ICP-MS — rule out image-only claims [[../sources/protocol-2025-battistelli-a-quantitative-spectrophotometric-assay]] (cross-link).

## Mitigation (citation hygiene + own-data)

- **Concrete retracted DOIs to NOT cite as authoritative HA-scaffold osteogenesis evidence:**
  - `10.3892/mmr.2020.11352` (grooved HA / mitochondria / BMSC osteogenesis) — retracted by `10.3892/mmr.2025.13519` on 2025-04-07. Do not cite. [[../sources/crossref-retraction-10-3892-mmr-2025-13519]]
  - `10.1111/clr.12656` (HA/β-TCP/collagen in vivo histomorphometry) — retracted 2018-07-18, image manipulation explicit. [[../sources/crossref-retraction-10-1111-clr-12656]]
  - `10.1039/c7bm00975e` (Li-HA/gelatin/EPO osteonecrosis) — retracted by `10.1039/d3bm90030d` on 2023-04-04. [[../sources/crossref-retraction-10-1039-d3bm90030d]]
  - `10.1088/1748-605x/ac08aa` (silk-fibroin/nano-HA/HAc) — retracted by `10.1088/1748-605x/ace76a` on 2023-07-26. [[../sources/crossref-retraction-10-1088-1748-605x-ace76a]]
  - `10.1021/acsami.5b11723` (Bi-doped HA SPU GBR) — retracted by `10.1021/acsami.8b04360` on 2018-04-03. [[../sources/crossref-retraction-10-1021-acsami-8b04360]]
  - `10.1016/j.lfs.2020.118038` (PLA/PCL/HA + MSC rat radial defect) — retracted 2020-09-15, ~2 weeks post-publication. [[../sources/crossref-retraction-10-1016-j-lfs-2020-118038]]
  - `10.1016/j.heliyon.2024.e36493` (eggshell-HA-NH₄HCO₃) — retracted 2024-09-15, ~30 days post-publication. [[../sources/crossref-retraction-10-1016-j-heliyon-2024-e36493]]
  - `10.1155/2020/9825073` (Sr/Chitosan/HA/Norcantharidin BMRI) — retracted by `10.1155/2024/9893086` on 2024-03-20 (Wiley/Hindawi cleanup). [[../sources/crossref-retraction-10-1155-2024-9893086]]
- For each paper above, the retraction-flagging pattern is: image-reuse / image-manipulation / no-stated-reason in cluster of similar retractions. Pass-3 plans citing any of these papers must surface the retraction inline at the citation site.
- Build a per-hypothesis "do-not-cite" list from Retraction Watch + PubPeer; verify before every Pass-3 plan.
- For one's own work: archive raw image files (with EXIF / acquisition timestamps) immutably; never crop or duplicate-paste in figure assembly; if a panel is reused intentionally (e.g., schematic diagram across two papers), declare it explicitly.
- For HA-mitochondria / dual-action / antimicrobial-osteogenic claims: triangulate with at least 2 orthogonal mechanism-tests before publication; the cluster of retractions shows these multi-action claims are the highest-risk space.

## Original sources / evidence

- [[../sources/crossref-retraction-10-1111-clr-12656]] — explicit image-reuse retraction reason (Figure 4 manipulation).
- [[../sources/crossref-retraction-10-3892-mmr-2025-13519]] — Spandidos retraction with sparse reason; Retraction Watch record-id 69072.
- [[../sources/crossref-retraction-10-1039-d3bm90030d]] — RSC retraction; institution / authorship overlap with other retracted papers.
- [[../sources/crossref-retraction-10-1088-1748-605x-ace76a]] — IOP retraction; multi-component composite vulnerability.
- [[../sources/crossref-retraction-10-1021-acsami-8b04360]] — ACS retraction; collective retraction across 13-author roster.
- [[../sources/crossref-retraction-10-1016-j-lfs-2020-118038]] — Elsevier 2-week post-publication retraction.
- [[../sources/crossref-retraction-10-1016-j-heliyon-2024-e36493]] — Elsevier ~30-day post-publication retraction; biogenic-HA over-claim pattern.
- [[../sources/crossref-retraction-10-1155-2024-9893086]] — Wiley/Hindawi 2024 cleanup; "dual-action" claim pattern.

## Affects

- Methods: [[../methods/SEM-imaging]], [[../methods/micro-CT-imaging]], [[../methods/alizarin-red-staining]], [[../methods/in-vivo-calvarial-defect-model]], [[../methods/in-vivo-femoral-defect-model]], [[../methods/fluorescence-microscopy]], [[../methods/confocal-microscopy]], [[../methods/histomorphometry]]
- Reagents: [[../reagents/hydroxyapatite]], [[../reagents/beta-tricalcium-phosphate]], [[../reagents/biphasic-calcium-phosphate]], [[../reagents/silk-fibroin]], [[../reagents/chitosan]], [[../reagents/strontium]], [[../reagents/bismuth]]
