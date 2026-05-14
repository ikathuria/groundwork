---
description: Write a researcher correction into the wiki / `commons/`. The Learning Loop primitive — corrections propagate to every future topic that links the corrected entity.
argument-hint: <path_to_correction.json_or_inline_json>
allowed-tools:
  - Read
  - Write
  - Edit
  - Glob
  - Grep
---

# Apply Correction (Learning Loop)

You are running the **apply-correction** skill for GROUNDWORK. **Read `context.md` first** if you haven't this session.

## Input (filled in at invocation)

- **Correction**: `$1` — either a path to a JSON file or an inline JSON string with the correction payload (see `.claude/skills/apply-correction.md` for the exact schema).

Delegate immediately to the skill spec at `.claude/skills/apply-correction.md` with this argument.
