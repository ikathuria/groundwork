---
name: promote-to-commons
description: Scan all hypothesis wikis, find entity pages (methods, concepts, datasets, open-problems) that appear in 2+ topics, promote them to `commons/`, and update all cross-wiki wikilinks. Run this periodically to keep the commons layer growing.
allowed-tools:
  - Read
  - Write
  - Edit
  - Glob
  - Grep
  - Bash
---

# Promote to Commons

**Read `context.md` first** if you haven't this session — especially §8 (Commons mechanics) and §4 (schema).

This skill promotes cross-topic entities from per-hypothesis wikis into `commons/`, which is the shared cross-topic knowledge layer. It does not touch `raw/` or `plan/` folders.

## Steps

### 1. Discover all entity pages across all hypotheses

For each entity type, collect every file path and its slug:

```bash
# Methods
find hypotheses/*/wiki/methods/ -name "*.md" 2>/dev/null

# Concepts
find hypotheses/*/wiki/concepts/ -name "*.md" 2>/dev/null

# Datasets
find hypotheses/*/wiki/datasets/ -name "*.md" 2>/dev/null

# Open problems
find hypotheses/*/wiki/open-problems/ -name "*.md" 2>/dev/null
```

Group by slug (filename without `.md`). For each slug, note how many distinct hypotheses contain it.

### 2. Identify promotion candidates

A slug qualifies for promotion if it appears in **2 or more distinct hypotheses**. Build a list:

```
{slug, entity_type, source_paths: [list of hypothesis wiki paths]}
```

Skip slugs already present in `commons/<entity_type>/<slug>.md`.

### 3. Promote each candidate

For each candidate:

**(a) Read all per-hypothesis copies.** Merge their content:
- Frontmatter: union `tags`, union `aliases`, union `used_in_papers`/`introduced_by`/`related_methods`/`related_concepts` (depending on type), union `sources`, union `open_problems`/`affects_methods` where applicable.
- Body: synthesise into one coherent page (more complete than any individual copy). The commons page is the canonical reference; it does not need per-hypothesis caveats.

**(b) Write `commons/<entity_type>/<slug>.md`** with merged frontmatter and merged body.  
Use standard frontmatter for that entity type (see `context.md` §4.4).

**(c) Update inbound wikilinks.** In every file across `hypotheses/*/wiki/` that contains a wikilink to the old local path, replace with the cross-repo path:

Old (examples):
```
[[methods/scaled-dot-product-attention]]
[[../methods/scaled-dot-product-attention]]
```

New (from hypothesis wiki to commons):
```
[[../../../commons/methods/scaled-dot-product-attention|scaled-dot-product-attention]]
```

Use `grep -r` to find all files that reference the old slug, then apply targeted `Edit` calls — do not bulk-rewrite files.

**(d) Delete the per-hypothesis copies** once all inbound links are updated.

### 4. Update `commons/index.md`

If `commons/index.md` does not exist, create it. Add new sections or entries for every promoted entity:

```markdown
## Methods
- [[methods/scaled-dot-product-attention]] — ...

## Concepts
- [[concepts/in-context-learning]] — ...
```

### 5. Append to `commons/corrections.log.md`

```
## [YYYY-MM-DD HH:MM] promotion | <entity_type>/<slug>
Promoted from: <list of hypothesis slugs>
Pages merged: <N>
```

### 6. Stop and report

List:
- How many entities were scanned
- How many qualified for promotion
- Which were promoted (type/slug)
- Which files were updated (link rewrites)
- Any slug conflicts or merge ambiguities that need human review

## Constraints

- Never modify `raw/` or `plan/` folders.
- Never delete a per-hypothesis wiki entity page until ALL inbound wikilinks in that hypothesis wiki have been updated to point to `commons/`.
- Be idempotent — re-running after a partial run should safely complete without duplicating commons pages.
- If two hypothesis copies of an entity have conflicting information (different severity, different description), flag the conflict in the report and write the more recent version into `commons/`, noting the conflict in a `<!-- CONFLICT: ... -->` comment.
- Do not regenerate any Research Brief. Brief regeneration is the caller's next step.
