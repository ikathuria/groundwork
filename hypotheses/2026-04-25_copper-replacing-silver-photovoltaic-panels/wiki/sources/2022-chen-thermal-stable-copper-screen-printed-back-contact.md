---
type: source
id: 2022-chen-thermal-stable-copper-screen-printed-back-contact
source_type: paper
title: "Thermal Stable High-Efficiency Copper Screen Printed Back Contact Solar Cells"
authors: ["Ning Chen", "Dominik Rudolph", "Christoph Peter", "Miro Zeman", "Olindo Isabella", "Yitzchak Rosen", "Michael Grouchko", "Ofer Shochet", "Valentin D. Mihailetchi"]
year: 2022
doi: "10.1002/solr.202200874"
url: "https://repository.tudelft.nl/file/File_9fbe48b2-e684-415a-9290-915b2087143b"
raw_path: raw/papers/2022-chen-thermal-stable-copper-screen-printed-back-contact.pdf
tags: [photovoltaics, copper-paste, screen-printing, IBC, reliability]
---

# Thermal Stable High-Efficiency Copper Screen Printed Back Contact Solar Cells

## Summary

Chen et al. directly test screen-printable copper paste as a replacement for most silver in [[../organisms/ibc-solar-cell|IBC silicon solar cells]]. This is one of the strongest positive sources in the corpus because it reports similar efficiency to silver-paste controls while reducing silver use and running damp-heat and thermal-stress screens.

## Key Claims

- Copper paste is used for fingers and busbars while narrow fired silver contact regions remain at the silicon interface.
- The paper reports average efficiency around 23% for copper-paste cells and 4.5 mg/W silver usage.
- Copper-paste fingers had higher line resistance than silver fingers, but cell performance remained comparable in the reported batch.
- No copper in-diffusion was observed after damp heat at 85 deg C / 85% RH and thermal stress at 200 deg C for 1000 h.
- The route is not fully silver-free because silver fire-through patterns are retained as contacts/barriers.

## Methods Used

- [[../methods/copper-paste-screen-printing]]
- [[../methods/damp-heat-and-thermal-cycling-pv-reliability-test]]

## Reagents

- [[../reagents/copper-metallization-paste]]
- [[../reagents/silver-conductive-paste]]
- [[../reagents/copper]]
- [[../reagents/silver]]

## Organisms / Systems

- [[../organisms/ibc-solar-cell]]
- [[../organisms/crystalline-silicon-solar-cell]]

## Failure Modes Flagged

- [[../failure-modes/contact-resistivity-drift]]
- [[../failure-modes/copper-diffusion-into-silicon]]
- [[../failure-modes/damp-heat-module-corrosion]]

## Supports / Contradicts

- Supports [[2018-lee-conductive-copper-paste]] with a concrete copper-paste cell demonstration.
- Partly contrasts with [[2022-karas-copper-outdiffusion-damp-heat]]: Chen et al. report no in-diffusion under their test stack, while Karas et al. detect copper migration in degraded copper-plated cells.
- Supports the threshold in [[../../hypothesis|the refined hypothesis]] if the final plan focuses on a copper-paste-with-barrier design rather than bare copper directly on silicon.

## Notable Evidence

- Short excerpt: "average efficiency of 23%".
- The reliability section uses both 85 deg C / 85% RH and 200 deg C stress for 1000 h.
