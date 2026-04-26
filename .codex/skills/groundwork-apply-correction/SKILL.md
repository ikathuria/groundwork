---
name: groundwork-apply-correction
description: Use when the user wants to apply a structured scientist correction to a GROUNDWORK wiki entity or commons entity. This is the Learning Loop primitive.
---

# GROUNDWORK Apply Correction - Learning Loop

Read `context.md` first, especially sections 6 and 7.5. Corrections should be surgical and logged.

## Trigger Forms

- `Apply this correction: {...}`
- `Run GROUNDWORK apply correction with {...}`
- `Write this scientist correction into commons`

## Input

The correction is a JSON file path or inline JSON with this shape:

```json
{
  "entity": "failure-modes/temperature-drift-during-thaw",
  "scope": "commons",
  "section": "frequency_estimate",
  "before": "~34% of replications",
  "after": "~22% of replications",
  "reason": "Updated 2024 meta-analysis available; original figure was from 2018.",
  "source_citation": "doi:10.xxxx/xxxxx",
  "reviewer": "Dr. X"
}
```

`scope` is either `commons` or `hypotheses/<slug>`.

## Steps

1. Locate the entity:
   - `commons/<entity>` when scope is `commons`
   - `hypotheses/<slug>/wiki/<entity>` when scope is hypothesis-local

2. Decide on promotion. If the entity is hypothesis-local and the same slug exists in 2+ hypothesis wikis, promote it to `commons/` before correcting:
   - move the entity page to `commons/<entity>`
   - update inbound wikilinks to the commons path
   - remove the per-hypothesis copy only after links are updated

3. Apply the correction surgically:
   - update the frontmatter field if `section` names frontmatter
   - update the relevant body section if `section` names markdown content
   - preserve unrelated content

4. Append `commons/corrections.log.md`:

```markdown
## [YYYY-MM-DD HH:MM] correction | <entity>
Reviewer: <reviewer>
Section: <section>
Before: <before>
After: <after>
Reason: <reason>
Source: <source_citation>
Affects: <comma-separated list of hypothesis slugs whose wikis link to this entity>
```

5. Report:
   - changed file
   - whether promotion happened
   - which hypotheses inherit the correction
   - which Pass 3 reruns would refresh visible Lab Briefs

## Constraints

- Never silently merge corrections. Every correction gets a new log entry.
- Do not regenerate plans automatically.
- Preserve all content not named by the correction.
