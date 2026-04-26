---
type: failure-mode
slug: paywalled-or-non-OA-canonical-source-not-captured
severity: medium
frequency_estimate: case-by-case — affects every literature corpus that includes pre-2010 reviews / niche journals
applies_to_methods: [gradient-pore-design, micro-CT-imaging, cell-seeding-static]
applies_to_reagents: [hydroxyapatite, beta-tricalcium-phosphate]
applies_to_step_kinds: [literature-research, citation, claim]
sources: [2013-loh]
tags: [paywall, OA, citation, literature-completeness]
created: 2026-04-25
updated: 2026-04-25
---

# Paywalled / non-OA canonical source not captured

## What it is

Some canonical references in HA-scaffold literature — most notably Karageorgiou & Kaplan 2005 ("Porosity of 3D biomaterial scaffolds and osteogenesis," Biomaterials 26(27): 5474–5491, doi:10.1016/j.biomaterials.2005.02.002) — are non-OA Elsevier papers without a deposited preprint. Their content is referenced transitively through every modern review (Loh 2013, Polo-Corrales 2014, Baino 2015, Murphy 2016, Zhao 2026) but the actual primary text isn't in raw/. Citing the consensus claim ("100 μm minimum / ~300 μm optimal pore size for bone ingrowth") with the canonical reference would require either OA access or an explicit pass-through of the citing reviews.

## How it manifests

- Karageorgiou & Kaplan 2005 cited transitively in 2013-loh, 2014-polo-corrales, 2015-baino, 2016-murphy, 2026-zhao — all modern reviews quote the same "100 μm minimum / 300 μm optimal" line back to K&K but the original is not in raw/.
- 2013-loh paper itself is partially accessible (PDF available) but is one of the citing reviews [[../sources/2013-loh-three-dimensional-scaffolds-for-te-role-of-porosity]].
- Other examples of non-OA canonical sources in this domain: Hulbert 1970 (75–100 μm minimum bone-growth claim), Tsuruga 1997 (300 μm pore-size threshold), Wang 1999 (MC3T3-E1 subclones, PMID 10352097).
- Pass-3 plans risk citing transitively without naming the actual citing review, propagating a "consensus" without anchoring it.

## How to detect it

- Audit Pass-1 `fetch_log.jsonl` for "failed-paywall" entries — any well-cited HA-scaffold reference that was fetched-and-failed should be flagged.
- For any quantitative claim in a Pass-3 plan ("100 μm minimum pore size for bone ingrowth"): trace the citation. If the cited paper is in raw/, link directly. If it's transitive (cited by Loh 2013, etc.), explicitly cite the citing review and note that K&K is non-OA.
- Run periodic Unpaywall / OpenAlex queries for every cited DOI: any DOI without an `oa_url` should be flagged for re-fetch attempt or substitute citation.

## Mitigation

- **Substitute citing reviews** as the actual authoritative source in the wiki:
  - For "100 μm minimum / 300 μm optimal pore size": cite Murphy & O'Brien 2010 (in raw/) and Loh 2013 (in raw/) and Baino 2015 (in raw/), not Karageorgiou & Kaplan 2005 directly [[../sources/2013-loh-three-dimensional-scaffolds-for-te-role-of-porosity]].
  - For "75–100 μm minimum bone-growth (Hulbert 1970)": cite Murphy 2010 review (which cites Hulbert) [[../sources/2010-murphy-understanding-the-effect-of-mean-pore-size-on]].
  - For "MC3T3-E1 subclone characterization (Wang 1999, PMID 10352097)": cite Cellosaurus record for parental + the original paper PubMed link as a non-content citation. The Cellosaurus record is in raw/ and synthesizes Wang 1999 [[../sources/cellosaurus-mc3t3-e1-cvcl0409]] (cross-link).
- For substantive claims that absolutely require the original: re-fetch via institutional access; deposit retrieved PDF in raw/ with appropriate access-logged metadata. Never paraphrase from external memory into a wiki page.
- Consider pre-print mirrors (bioRxiv, arXiv) for any modern paper; for historical pre-internet papers, accept the transitive-citation pathway.
- Update reagents/hydroxyapatite, methods/gradient-pore-design, and any pore-size-discussion page to "K&K is the canonical reference but is non-OA; we cite via Loh 2013 [[../sources/2013-loh-three-dimensional-scaffolds-for-te-role-of-porosity]] and 2010-murphy [[../sources/2010-murphy-understanding-the-effect-of-mean-pore-size-on]]."

## Original sources / evidence

- [[../sources/2013-loh-three-dimensional-scaffolds-for-te-role-of-porosity]] — Loh 2013 review, OA, captures K&K-derived pore-size consensus.
- (Indirect) [[../sources/2014-polo-corrales-scaffold-design-for-bone-regeneration]], [[../sources/2015-baino-bioceramics-and-scaffolds-a-winning-comb]], [[../sources/2016-murphy-scaffolds-and-cells-for-tissue-regeneration]], [[../sources/2010-murphy-understanding-the-effect-of-mean-pore-size-on]], [[../sources/2026-zhao-longitudinal-and-radial-microgradients-i]] — citing reviews that propagate K&K claim.

## Affects

- Methods: [[../methods/gradient-pore-design]], [[../methods/micro-CT-imaging]], [[../methods/cell-seeding-static]]
- Reagents: [[../reagents/hydroxyapatite]], [[../reagents/beta-tricalcium-phosphate]]
