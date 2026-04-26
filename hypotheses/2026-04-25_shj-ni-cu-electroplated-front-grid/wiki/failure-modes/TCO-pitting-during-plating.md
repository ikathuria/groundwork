---
type: failure-mode
slug: TCO-pitting-during-plating
severity: medium
frequency_estimate: "Hatt 2019 NOBLE: H₃PO₄/HNO₃ etch-back preserves ITO thickness (~80 nm before and after) per SEM cross-section — well-controlled. Atotech Cupracid TDS: pit-mode failure remediated with Cupracid GM Plus wetting agent (20 mL / 100 L initial, 100–200 mL per 10 kA·h continuous). Frequency depends on bath agitation, additive levels, and operator technique."
applies_to_methods: [Cu-electroplating-acid-bath, NOBLE-selective-Cu-plating, light-induced-plating, electroless-Ni-deposition, four-point-probe-sheet-resistance]
applies_to_reagents: [ITO-transparent-conductive-oxide, IWO-tungsten-doped-indium-oxide, AZO-aluminum-doped-zinc-oxide, acid-Cu-sulfate-bath, sulfuric-acid-H2SO4]
applies_to_step_kinds: [plate, etch, measure]
sources: [2019-hatt-noble-bifacial-shj-aip, 2019-hatt-noble-shj-solrrl, atotech-cupracid-ultra-a-tds, fisher-AC424525000-sulfuric-acid-acs-sds]
tags: [TCO, ITO, etching, pitting, plating-bath, contact-resistance, hydrogen-evolution]
---

# TCO pitting during plating

## What it is
The transparent conductive oxide (typically ITO, optionally IWO or AZO) on the SHJ front side is in direct contact with the acidic Cu sulfate plating bath during deposition. ITO is mildly soluble in acidic solutions, and at locations of bath access (mask defects, pinholes) or during the etch-back step that removes residual PVD-Al / PVD-Cu seed, the TCO can pit — loss of TCO under and around fingers compromises the lateral contact, raises ρc locally, and (worst case) exposes the underlying a-Si:H to bath chemistry. Atotech's Cupracid ULTRA TDS notes "fine pitting / crater pitting / cluster pitting" as a known mode of acid Cu baths, remediated by a wetting agent that improves bath/cathode contact and reduces hydrogen-bubble pinning. NOBLE's H₃PO₄/HNO₃ etch-back was deliberately calibrated to selectively dissolve Cu/Ag without attacking ITO ([[2019-hatt-noble-shj-solrrl]] Fig. 3).

## How it manifests
- SEM cross-section shows TCO thickness reduction outside the contact area or scalloped pits at contact edges.
- ρc rises locally (TLM scan inhomogeneity).
- Voc may drop slightly if pitting reaches the a-Si:H layer.
- Hydrogen-bubble outline visible on plated Cu fingers as periodic surface dimples — direct evidence of bubble-pinning during plating.
- 4-point-probe sheet resistance of TCO non-uniform after plating + etch-back.

## How to detect it
- SEM cross-section before vs after plating + etch-back; measure TCO thickness profile.
- TCO sheet-resistance mapping by [[../methods/four-point-probe-sheet-resistance]].
- Optical microscopy under contrast — pit pattern visible as bright dots.
- [[../methods/transfer-length-method]] non-uniformity across cell area.
- Reflectance / ellipsometry for TCO thickness.

## Mitigation (specific actions, not vague advice)
- Use a wetting agent in acid Cu bath (Cupracid GM Plus or equivalent: 20 mL / 100 L initial dose, 100–200 mL per 10 kA·h per [[atotech-cupracid-ultra-a-tds]]) to suppress hydrogen-bubble pinning.
- Apply pulse-reverse plating (15 ms forward / 1 ms reverse) — Hatt 2019 NOBLE — to dissolve hydrogen bubbles and parasitic seeds.
- Limit etch-back chemistry: Hatt 2019 specifies H₃PO₄ 60 % / HNO₃ 3.25 % at 50 °C — etches Cu/Ag at >10 nm/s but ITO at <1 nm/s; verify by SEM cross-section before vs after.
- Avoid HF in pre-cleans on ITO surfaces — HF rapidly etches ITO.
- Maintain bath agitation per Atotech TDS: cathode rod movement and PVC sparger air; do not use compressed air.
- Verify TCO thickness ≥75 nm under contacts after the full plating sequence (Hatt 2019 measured 80 nm preserved).
- Specify acceptance: TCO thickness loss ≤5 nm and ρc uniformity ±10 % across cell.

## Severity ranking justification
Medium: causes localized ρc rise that depresses FF by 0.1–0.5 %abs but is reversible by process tuning (wetting agent, pulse-reverse, etch-back chemistry). Hatt 2019 demonstrates the mode is fully controllable with standard NOBLE chemistry — hence not "high". Worse case (TCO breakthrough exposing a-Si:H) escalates to a-Si:H passivation degradation.

## Sources
- `[[2019-hatt-noble-shj-solrrl]]` — etch-back chemistry calibration; ITO thickness preservation.
- `[[2019-hatt-noble-bifacial-shj-aip]]` — selective etchant choice; TCO thickness verified by SEM.
- `[[atotech-cupracid-ultra-a-tds]]` — pitting failure mode and Cupracid GM Plus wetting-agent mitigation.
- `[[fisher-AC424525000-sulfuric-acid-acs-sds]]` — bath corrosivity; TCO is mildly soluble in acidic solutions.
