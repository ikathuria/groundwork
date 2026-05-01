---
name: apply-correction
description: Apply a structured researcher correction to the wiki / `commons/`. The Learning Loop primitive — corrections write into `commons/` so every future research topic that links to the corrected entity inherits the change.
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

**Read `context.md` first** if you haven't this session — especially §8 (Commons mechanics).

This skill is the **Learning Loop primitive**. A researcher reviews a Research Brief, marks something incorrect or outdated, and this skill writes the correction back into the wiki. Future briefs that touch the corrected entity will reflect the change without explicit re-prompting.

## Input

- `correction` (positional 1): a path to a JSON file or an inline JSON string with this shape:

```json
{
  "entity": "open-problems/attention-quadratic-complexity",
  "scope": "commons",
  "section": "severity",
  "before": "critical",
  "after": "high",
  "reason": "Linear attention approximations (Mamba, RWKV) now make this tractable for most practical contexts.",
  "source_citation": "doi:10.xxxx/xxxxx",
  "reviewer": "Researcher Name"
}
```

`scope` is either `"commons"` (default — cross-cutting correction) or `"hypotheses/<slug>"` (correction specific to one topic's wiki).

`entity` is a wiki path relative to the scope root, e.g. `open-problems/attention-quadratic-complexity`, `methods/rlhf`, `concepts/in-context-learning`.

## Steps

1. **Locate the entity.**
   - If `scope == "commons"`, look in `commons/<entity>.md`.
   - If `scope` is a hypothesis path, look in `hypotheses/<slug>/wiki/<entity>.md`.

2. **Decide on promotion.** If the entity is hypothesis-local AND the **same entity** (by slug) exists in 2+ hypothesis wikis, **promote it to `commons/` first**:
   - Move the file to `commons/<entity>.md`.
   - Update inbound wikilinks in every hypothesis wiki that referenced it: `[[../../../commons/<entity>|<display>]]`.
   - Delete the per-hypothesis copy.
   Then apply the correction to the commons version.

3. **Apply the correction — surgically.**
   - If `section` is a frontmatter field (e.g. `severity`, `aliases`, `affects_methods`), update the YAML.
   - If `section` is a body section (e.g. `description`, `potential_directions`, `summary`), update the markdown.
   - Preserve **all other content unchanged**. The correction is a targeted edit, not a rewrite.

4. **Append to `commons/corrections.log.md`**:
   ```
   ## [YYYY-MM-DD HH:MM] correction | <entity>
   Reviewer: <reviewer>
   Section: <section>
   Before: <before>
   After: <after>
   Reason: <reason>
   Source: <source_citation>
   Affects: <comma-separated list of topic slugs whose wikis link to this entity>
   ```
   To compute `Affects`, grep across all `hypotheses/*/wiki/` for wikilinks to the corrected entity.

5. **Stop and report.** State:
   - Which file was changed (full path)
   - Whether promotion to commons happened (yes/no)
   - Which research topics inherit the correction (the `Affects` list)
   - Suggested follow-up: "Run `/pass-3 <slug>` to regenerate the Research Brief for any of these topics."

## Constraints

- **Never silently merge corrections.** Every correction is a new log entry, even if it overwrites a previous one.
- **Don't regenerate any brief automatically.** Re-running `/pass-3` is the caller's deliberate next step.
- Surgical edits only — preserve all content not named in the correction.
