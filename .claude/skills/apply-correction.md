---
name: apply-correction
description: Apply a structured scientist correction to the wiki / `commons/`. The Learning Loop primitive — corrections write into `commons/` so every future hypothesis that links to the corrected entity inherits the change.
allowed-tools:
  - Read
  - Write
  - Edit
  - Glob
  - Grep
arguments:
  - name: correction
    description: Either a path to a JSON file containing the correction, or an inline JSON string. See structure below.
    required: true
---

# Apply Correction (Learning Loop)

**Read `context.md` first** if you haven't this session — especially §6 (Commons mechanics) and §7.5 (Feedback agent spec).

This skill is the **Learning Loop primitive**. A scientist reviews a Lab Brief, marks something wrong, the UI sends a structured correction, and this skill writes it back into the wiki. Future plans that touch the corrected entity will reflect the change without explicit re-prompting.

## Input

- `correction` (positional 1): a path to a JSON file or an inline JSON string with this shape:

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

`scope` is either `"commons"` (default for cross-cutting corrections) or `"hypotheses/<slug>"` (correction is specific to one hypothesis's wiki).

## Steps

1. **Locate the entity.**
   - If `scope == "commons"`, look in `commons/<entity>` (e.g. `commons/failure-modes/temperature-drift-during-thaw.md`).
   - If `scope` is a hypothesis path, look in `hypotheses/<slug>/wiki/<entity>`.

2. **Decide on promotion.** If the entity is hypothesis-local AND the **same entity** (by slug) exists in 2+ hypothesis wikis, **promote it to `commons/` first**:
   - Move the file from `hypotheses/<slug>/wiki/<entity>` to `commons/<entity>`.
   - Update inbound wikilinks in every hypothesis wiki that referenced it to point at the commons path: `[[../../../commons/<entity>|<display>]]`.
   - Delete the per-hypothesis copy.
   Then apply the correction to the commons version.

3. **Apply the correction.**
   - If `section` is a frontmatter field (e.g. `frequency_estimate`, `severity`, `suppliers[0].catalog`), update the YAML.
   - If `section` is a body section (e.g. `mitigation`, `summary`, `step-3-notes`), update the markdown.
   - Preserve **all other content unchanged**. The correction is surgical, not a rewrite.

4. **Append to `commons/corrections.log.md`** with this exact format (the prefix matters for grep-parseability):
   ```
   ## [YYYY-MM-DD HH:MM] correction | <entity>
   Reviewer: <reviewer>
   Section: <section>
   Before: <before>
   After: <after>
   Reason: <reason>
   Source: <source_citation>
   Affects: <comma-separated list of hypothesis slugs whose wikis link to this entity>
   ```

   To compute `Affects`, grep across all `hypotheses/*/wiki/` for wikilinks to the corrected entity.

5. **Stop and report.** State:
   - Which file was changed (full path)
   - Whether promotion to commons happened (yes/no)
   - Which hypotheses inherit the correction (the `Affects` list)
   - Suggest follow-up: "Run `/pass-3 <slug>` to regenerate the Lab Brief for any of these hypotheses."

## Constraints

- **Never silently merge corrections.** Every correction is a new log entry, even if it overwrites a previous correction.
- **Don't regenerate any plan automatically.** Re-running `/pass-3` is the caller's deliberate next step.
- Surgical edits only — preserve all content not named in the correction.
