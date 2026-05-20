---
type: method
slug: poisoning-traceback
aliases: [attack traceback, forensic attribution, poisoning forensics]
related_methods: [knowledge-poisoning-attack, retrieval-augmented-generation]
used_in_papers: [2025-anon-traceback-poisoning]
open_problems: [detection-of-poisoned-retrieval, governance-data-provenance]
tags: [traceback, forensics, attribution, poisoning, defense]
---

Poisoning traceback methods identify which specific documents in a RAG knowledge base caused a harmful output, enabling post-hoc forensic investigation and targeted removal of poisoned content. Introduced by [[sources/2025-anon-traceback-poisoning]] as a complement to inference-time defenses.

## How it works

1. After a harmful RAG output is detected (by a human reviewer or anomaly detector), the traceback algorithm is invoked.
2. Attribution scores are computed between the generated response and candidate documents in the knowledge base.
3. Documents with high attribution to the harmful output are flagged as likely poisoned.
4. Flagged documents are removed from the corpus, preventing future attacks on related queries.

## Strengths

- Provides forensic evidence for identifying and eliminating poisoned content.
- Complements inference-time defenses: together they form a complete security framework.
- Enables continuous corpus hygiene in production RAG systems.

## Limitations

- Requires a human-in-the-loop or reliable harmful output detector to trigger traceback.
- Attribution may be ambiguous when multiple documents jointly contribute to harmful output.
- Sophisticated attackers may craft passages that evade attribution (low attribution score while still causing harm).
