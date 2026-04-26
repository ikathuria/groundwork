---
type: ar-spec
id: ar-v1
created: 2026-04-25
derived_from: plan-v1.md
slug: 2026-04-25_a-3d-printed-hydroxyapatite-scaffold-with
stations: 8
steps_bound: 12
tags: [ar, lab-scene, plan-v1]
---

# AR scene spec — ar-v1

> Custom AR Lab spec for the gradient-pore HA scaffold experiment. Eight stations (DLP printer, sintering furnace, μCT bay, sterilisation/cytotox dish, cell-culture incubator, perfusion bioreactor, plate reader, confocal microscope) bound to the 12 protocol steps from [[plan-v1]]. Consumed by the Next.js Lab Brief route at `/api/ar/[slug]` and rendered by the AR.js + A-Frame WebAR scene.

Mirror of [[../../plan/ar.json]] — kept here so the AR spec joins the Obsidian graph.

```json
{
  "version": 1,
  "slug": "2026-04-25_a-3d-printed-hydroxyapatite-scaffold-with",
  "title": "Gradient-pore HA scaffold vs uniform HA scaffold",
  "scene": {
    "stations": [
      {
        "id": "dlp-printer",
        "label": "DLP slurry printer",
        "kind": "tall-instrument",
        "color": "#4a90e2",
        "position": [-0.35, 0, -0.05],
        "wiki_page": "methods/DLP-vat-photopolymerization"
      },
      {
        "id": "sintering-furnace",
        "label": "Debinding + sintering furnace",
        "kind": "furnace",
        "color": "#f59e0b",
        "position": [-0.18, 0, -0.05],
        "wiki_page": "methods/ceramic-sintering"
      },
      {
        "id": "microct-imager",
        "label": "μCT + characterisation bay",
        "kind": "tall-instrument",
        "color": "#22d3ee",
        "position": [0.0, 0, -0.05],
        "wiki_page": "methods/micro-CT-imaging"
      },
      {
        "id": "cytotox-bench",
        "label": "Sterilisation + L929 cytotox dish",
        "kind": "dish",
        "color": "#fbbf24",
        "position": [0.18, 0, -0.05]
      },
      {
        "id": "cell-incubator",
        "label": "Cell-culture incubator (MC3T3 expansion)",
        "kind": "incubator",
        "color": "#34d399",
        "position": [0.35, 0, -0.05],
        "wiki_page": "organisms/MC3T3-E1-subclone-4"
      },
      {
        "id": "perfusion-bioreactor",
        "label": "Perfusion bioreactor (seeding + 21 d culture)",
        "kind": "tall-instrument",
        "color": "#10b981",
        "position": [-0.25, 0, 0.12],
        "wiki_page": "methods/cell-seeding-dynamic-perfusion"
      },
      {
        "id": "plate-reader",
        "label": "Plate reader (alamarBlue + PicoGreen)",
        "kind": "plate-reader",
        "color": "#a78bfa",
        "position": [0.0, 0, 0.12],
        "wiki_page": "methods/alamarBlue-proliferation-assay"
      },
      {
        "id": "confocal-microscope",
        "label": "Confocal microscope (DAPI / live-dead / image audit)",
        "kind": "microscope",
        "color": "#f472b6",
        "position": [0.25, 0, 0.12],
        "wiki_page": "methods/confocal-microscopy"
      }
    ]
  },
  "step_bindings": [
    {
      "step": 1,
      "focus_station": "dlp-printer",
      "animation": "none",
      "label_override": "CAD: continuous radial 100→500 μm gradient + uniform 300 μm",
      "state_changes": [
        { "station": "dlp-printer", "property": "active", "to": false },
        { "station": "dlp-printer", "property": "label", "to": "DLP printer (awaiting CAD)" }
      ]
    },
    {
      "step": 2,
      "focus_station": "sintering-furnace",
      "animation": "heat",
      "label_override": "Calibration array: print + sinter → S = d_post/d_CAD lookup",
      "state_changes": [
        { "station": "dlp-printer", "property": "active", "to": true },
        { "station": "sintering-furnace", "property": "active", "to": true },
        { "station": "sintering-furnace", "property": "color", "to": "#ef4444" }
      ]
    },
    {
      "step": 3,
      "focus_station": "dlp-printer",
      "animation": "operate",
      "label_override": "Print 36 gradient + 36 uniform scaffolds (pre-compensated CAD)",
      "state_changes": [
        { "station": "dlp-printer", "property": "active", "to": true },
        { "station": "dlp-printer", "property": "color", "to": "#3b82f6" }
      ]
    },
    {
      "step": 4,
      "focus_station": "microct-imager",
      "animation": "measure",
      "label_override": "μCT every scaffold; XRD/BET/ICP-MS/SEM acceptance gate",
      "state_changes": [
        { "station": "microct-imager", "property": "active", "to": true },
        { "station": "sintering-furnace", "property": "active", "to": false }
      ]
    },
    {
      "step": 5,
      "focus_station": "cytotox-bench",
      "animation": "heat",
      "label_override": "EtOH leach + autoclave + L929 ISO-10993-5 viability ≥ 80 %",
      "state_changes": [
        { "station": "cytotox-bench", "property": "active", "to": true },
        { "station": "microct-imager", "property": "active", "to": false }
      ]
    },
    {
      "step": 6,
      "focus_station": "cell-incubator",
      "animation": "none",
      "label_override": "Receive MC3T3-E1 Subclone 4 (ATCC CRL-2593); STR + mycoplasma",
      "state_changes": [
        { "station": "cell-incubator", "property": "active", "to": true },
        { "station": "cell-incubator", "property": "color", "to": "#22c55e" }
      ]
    },
    {
      "step": 7,
      "focus_station": "perfusion-bioreactor",
      "animation": "transfer",
      "label_override": "Fibronectin pre-coat; perfusion seed 5×10⁴ cells / scaffold (4 h, 0.5 mL/min)",
      "state_changes": [
        { "station": "perfusion-bioreactor", "property": "active", "to": true },
        { "station": "perfusion-bioreactor", "property": "color", "to": "#34d399" }
      ]
    },
    {
      "step": 8,
      "focus_station": "perfusion-bioreactor",
      "animation": "mix",
      "label_override": "Perfusion culture × 21 d in proliferation medium (no β-GP/AsAP/dex)",
      "state_changes": [
        { "station": "perfusion-bioreactor", "property": "active", "to": true }
      ]
    },
    {
      "step": 9,
      "focus_station": "plate-reader",
      "animation": "measure",
      "label_override": "Serial alamarBlue d1/d4/d7/d14/d21 (non-destructive, 560/590 nm)",
      "state_changes": [
        { "station": "plate-reader", "property": "active", "to": true },
        { "station": "plate-reader", "property": "color", "to": "#8b5cf6" }
      ]
    },
    {
      "step": 10,
      "focus_station": "plate-reader",
      "animation": "measure",
      "label_override": "Endpoint: PicoGreen DNA + DAPI confocal radial bins",
      "state_changes": [
        { "station": "plate-reader", "property": "active", "to": true },
        { "station": "confocal-microscope", "property": "active", "to": true }
      ]
    },
    {
      "step": 11,
      "focus_station": "confocal-microscope",
      "animation": "observe",
      "label_override": "Differentiation cohort: ALP + qPCR + ARS (parallel, osteogenic medium)",
      "state_changes": [
        { "station": "confocal-microscope", "property": "active", "to": true },
        { "station": "perfusion-bioreactor", "property": "active", "to": false }
      ]
    },
    {
      "step": 12,
      "focus_station": "confocal-microscope",
      "animation": "observe",
      "label_override": "Pre-registered statistics + second-reviewer image audit (8 retraction signatures)",
      "state_changes": [
        { "station": "confocal-microscope", "property": "color", "to": "#ec4899" },
        { "station": "plate-reader", "property": "active", "to": false }
      ]
    }
  ]
}
```

## Station ↔ wiki entity map

| Station id | Wiki entity |
|---|---|
| `dlp-printer` | [[../methods/DLP-vat-photopolymerization]] |
| `sintering-furnace` | [[../methods/ceramic-sintering]] |
| `microct-imager` | [[../methods/micro-CT-imaging]] |
| `cytotox-bench` | (generic dish — no wiki entity required) |
| `cell-incubator` | [[../organisms/MC3T3-E1-subclone-4]] |
| `perfusion-bioreactor` | [[../methods/cell-seeding-dynamic-perfusion]] |
| `plate-reader` | [[../methods/alamarBlue-proliferation-assay]] |
| `confocal-microscope` | [[../methods/confocal-microscopy]] |

## Notes for renderer

- Bench is 0.9 m × 0.45 m centred on origin; all stations satisfy `|x| < 0.45`, `|z| < 0.22`, `y >= 0`.
- 8 stations cover the 12-step protocol; some stations are reused across steps (e.g., `dlp-printer` for steps 1, 2, 3; `perfusion-bioreactor` for 7, 8; `plate-reader` for 9, 10; `confocal-microscope` for 10, 11, 12).
- `state_changes` are cosmetic hints (colour / active / label) — the runtime can apply them as visual cues without affecting the protocol's correctness.
- Step 1 (CAD design) has no physical operation — bound to `dlp-printer` with `animation: none` since the design will be sliced for that printer.
