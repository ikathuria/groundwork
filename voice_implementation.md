# Voice tutor (Gemini Live) — implementation guide

A drop-in voice tutor for any GROUNDWORK Lab Brief. Adds a floating mic button
that opens a real-time conversation with Gemini Live: the agent has the entire
hypothesis wiki as context, can answer technical questions in voice, and **drives
the page** — scrolling to sections, opening wiki entries, expanding protocol
steps — so the conversation stays visually anchored.

The reference implementation lives in
`hypotheses/2026-04-25_lgg-c57bl6-permeability/plan/index.html`.

---

## What it adds, in 30 seconds

1. **Floating cinnamon orb** in the bottom-right corner of the Lab Brief.
2. **Click → API-key modal** (first time only — key persisted in `localStorage`).
3. **Connected:** orb morphs into a 88 px breathing/pulsating sphere with a
   live-dot indicator. Transcript drawer slides up showing both sides of the
   conversation. Mic permission requested by the browser.
4. **Talk naturally** — server-side VAD handles interruption (barge-in).
   Voice-amplitude-reactive ring animations on both input and output.
5. **The agent can:** look up wiki pages (`getWikiPage`), search the wiki
   (`searchWiki`), open the side panel (`openWikiPage`), scroll to sections
   (`scrollToSection`), expand protocol steps (`openProtocolStep`), close the
   panel, and **search the live web** via Gemini's built-in `googleSearch`
   grounding.
6. **Click again → disconnect.** Mic released, transcript cleared.

---

## Prerequisites — what the target Lab Brief must already have

This is **strictly additive** to a Pass 3 `index.html`. It assumes the page
already contains:

| Required element | Why |
|---|---|
| `<script type="application/json" id="wiki-corpus">` with the full wiki bundle (built by `tools/build-wiki-bundle.py`) | Source of truth for wiki page lookups + the page-index that goes into the system prompt |
| `<script type="application/json" id="plan-data">` with the plan JSON | Used to auto-derive the hypothesis headline, step count, and budget for the system prompt |
| Section IDs `#hero #breakdown #litqc #mechanism #protocol #materials #budget #timeline #validation #fmap #sources` | Targets for the `scrollToSection` tool |
| Per-step `id="step-N"` elements (N = 1..stepCount) inside `#protocol` | Targets for `openProtocolStep` |
| Hash-driven panel: a `hashchange` listener that opens the wiki side panel when `location.hash === "#wiki-{slug}"` | The `openWikiPage` tool drives the panel by setting `location.hash` — no globals required |
| CSS variables on `:root`: `--live`, `--live-deep`, `--live-soft`, `--barrier`, `--barrier-deep`, `--barrier-soft`, `--paper`, `--paper-deep`, `--ink`, plus font vars `--display`, `--ui`, `--mono` | Orb/transcript/modal pull from these so the voice UI matches the page aesthetic |

If the Lab Brief was produced by the current Pass 3 skill (`.claude/skills/pass-3-plan.md`)
all of these are already present — no changes needed. If you adapt this for a
different page, port the missing pieces first.

---

## Where to put the code

The implementation is **three contiguous blocks** that go into the existing
`index.html`. None of them touch the existing IIFE or any other code.

| Block | Insert before | What it is | Approx. lines |
|---|---|---|---|
| **A. CSS** | the closing `</style>` of the existing stylesheet | Orb, button states, transcript drawer, key modal | ~200 |
| **B. HTML** | the closing `</body>` (after the existing `</script>`) | `<button id="gw-mic">`, `<aside id="gw-tx">`, `<dialog id="gw-key">` | ~40 |
| **C. Module script** | the closing `</body>` (immediately after Block B) | The Gemini Live client + tools + audio I/O | ~565 |

**Easiest path** — copy verbatim from the reference file:

```bash
# in the target hypothesis dir
TARGET=hypotheses/<slug>/plan/index.html
REF=hypotheses/2026-04-25_lgg-c57bl6-permeability/plan/index.html

# Inspect the three blocks in the reference:
sed -n '625,822p'   $REF   # Block A (CSS)
sed -n '2242,2282p' $REF   # Block B (HTML)
sed -n '2284,2849p' $REF   # Block C (module script)
```

Paste each block at the matching anchor in the target file. The blocks are
**self-contained** and **hypothesis-agnostic** — they read the wiki + plan from
the inlined JSON and build the system prompt at runtime, so you do not need to
edit the prompt per hypothesis.

> Line numbers above are valid as of the current LGG file. If the reference file
> changes, find the blocks by their visual delimiters: each starts with a
> `/* ─────────── voice tutor (Gemini Live) ─────────── */` or
> `<!-- ─────────── voice tutor (Gemini Live) ─────────── -->` comment.

You should also add this one-liner inside the existing `@media print { ... }`
block so the voice UI doesn't appear when the page is printed:

```css
.gw-mic, .gw-tx, .gw-modal { display: none !important; }
```

---

## How the agent gets its context

At boot, the script:

1. Parses `<script id="wiki-corpus">` — gives it every wiki page (slug, type,
   title, frontmatter, body_md).
2. Parses `<script id="plan-data">` — gives it the plan summary
   (hypothesis statement, protocol steps, budget, timeline, top failure modes).
3. Builds a compact system prompt that includes:
   - One-line hypothesis headline (auto-derived from `plan.hypothesis.statement`,
     falling back to `refined` string, falling back to building a string from
     `refined.intervention → refined.outcome → refined.threshold`).
   - Plan-summary block (steps, budget, timeline, top 5 failure modes).
   - Compact wiki page index (one line per page: `slug (type) — title`).
4. Sends this system prompt to Gemini Live at session start (`config.systemInstruction`).

Page bodies (the heavy stuff) are **not** stuffed into context. The agent calls
`getWikiPage(slug)` on demand. This both keeps the prompt small and produces a
nice "looking it up" beat in the conversation.

---

## Tools the agent can call

Declared in `TOOL_DECLS` (Block C, near the top). All UI-driving tools also
trigger an orb shimmer + a small "→ tool" line in the transcript so the user
sees what was called.

| Tool | Args | Effect |
|---|---|---|
| `getWikiPage` | `{ slug }` | Returns full markdown body of a wiki page. Tolerates bare names (e.g. `"LGG"` resolves to `organisms/LGG`). Body capped at 16 KB. |
| `searchWiki` | `{ query, type? }` | Substring search over titles, slugs, and `frontmatter.aliases`. Returns top 10 `{slug,title,type}`. |
| `openWikiPage` | `{ slug }` | Sets `location.hash = "#wiki-" + slug` → existing hashchange listener opens the side panel. |
| `scrollToSection` | `{ section }` | One of: `hero, breakdown, litqc, mechanism, protocol, materials, budget, timeline, validation, fmap, sources`. |
| `openProtocolStep` | `{ n }` | Scrolls to `#step-N`, expands it if collapsed. |
| `closeWikiPanel` | `{}` | Clears `location.hash`, dispatches `hashchange` so the existing handler closes the panel. |
| `googleSearch` | (built-in) | Live web grounding via Gemini's built-in tool. Citations included. |

To add new tools (e.g. one that highlights a specific reagent in the materials
table), append a `name`/`description`/`parameters` entry to `TOOL_DECLS` and a
matching function on the `Tools` object. They get picked up automatically.

---

## Customization knobs

All in Block C, top of the script:

```js
const GW_MODEL       = "gemini-3.1-flash-live-preview";  // newest as of Apr 2026
const GW_VOICE       = "Aoede";                          // Puck, Charon, Kore, Fenrir, Leda, Orus, Zephyr
const GW_SDK_URL     = "https://esm.sh/@google/genai@^1";
const GW_INPUT_HZ    = 16000;                            // Gemini Live mic input rate
const GW_OUTPUT_HZ   = 24000;                            // Gemini Live audio output rate
const GW_KEY_STORAGE = "groundwork.gemini.apiKey";       // localStorage key
```

Model fallbacks if `gemini-3.1-flash-live-preview` is unavailable on your key:
- `gemini-2.5-flash-live-preview` (older, still has affective dialog + proactive audio)
- Future model IDs: check https://ai.google.dev/gemini-api/docs/models

To change the agent's persona / behaviour, edit `buildSystemPrompt()` in
Block C. The "Behaviour" section of the prompt is where to add house rules
(e.g. "always cite a wiki source", "answer in Spanish if asked").

---

## Verification checklist

After pasting the three blocks into a fresh Lab Brief, open the file in Chrome
(works from `file://`, no server needed) and check:

1. **Console:** exactly one log line — `[gw] indexed N wiki pages for the voice tutor`. No errors. No CSP issues (file:// has no CSP).
2. **Visual:** cinnamon mic button visible at bottom-right (~22 px from each edge).
3. **Click → modal:** key dialog opens. Cancel closes it. Submit with empty key does nothing.
4. **Paste a key + Connect:** browser asks for mic permission. Approve.
5. **Orb morphs:** scales to 88 px, ring animations start, live-dot pulses, transcript drawer slides up to the left of the orb.
6. **Say "walk me through step 4":** model speaks; page scrolls smoothly to `#step-4`; step expands if collapsed; both turns appear in the transcript.
7. **Say "open the [some entity from this hypothesis]":** model calls `openWikiPage`; side panel opens with the right page; orb shimmers briefly.
8. **Say "search the web for any 2025 papers on [your topic]":** Gemini grounds with Google Search and cites a recent reference.
9. **Click "end" in the transcript header:** disconnects cleanly. Mic indicator in the browser tab turns off. Transcript clears.
10. **Reload page → click orb again:** key persisted, one-click reconnect.

If anything fails, check the console first — every error path logs to
`[gw] …` and surfaces a `gw-bubble--sys` line in the transcript drawer.

---

## Known limits & gotchas

- **API key is in `localStorage`.** Anyone with access to the browser profile
  can read it. The modal flags this. Acceptable for live demos; do not ship a
  production-facing brief with this pattern. If you need a server proxy, the
  cleanest entry point is to swap `KeyMgr` and `GeminiClient.connect()` for a
  call to a backend that mints an ephemeral token.
- **Chrome / Edge tested.** Safari needs `webkitAudioContext` fallback (already
  written defensively, but `AudioContext({sampleRate: 16000})` may not honour
  the rate on Safari — would need a manual downsampler). Firefox should work.
- **Gemini Live model names move.** If the constant at the top throws on
  connect, swap to a current ID. The error surfaces in the transcript.
- **Free-tier quota:** one concurrent session per key. If you demo in a room
  and someone else is on the same key, you'll see a 429.
- **Page bodies > 16 KB are truncated** in `getWikiPage` responses. If a wiki
  page is longer than that, the agent gets the head; bump the cap in
  `Tools.getWikiPage` if needed.
- **Hashchange is async.** `openWikiPage` returns `{ok: true}` immediately;
  the panel opens ~50 ms later when the listener fires. The model doesn't care.
- **Reduced-motion respected.** All animations are disabled under
  `@media (prefers-reduced-motion: reduce)`.

---

## Why this isn't (yet) in the Pass 3 skill

The three blocks are stable and hypothesis-agnostic, but the Pass 3 skill at
`.claude/skills/pass-3-plan.md` (and `.codex/skills/groundwork-pass-3-plan/SKILL.md`)
has not yet been updated to emit them by default. To backport:

1. Append the three blocks (CSS, HTML, module script) to the
   `index.html.shell` template the Pass 3 skill uses.
2. Add the `.gw-mic, .gw-tx, .gw-modal { display: none !important; }` line
   inside the existing `@media print` block.
3. Mirror the change in the Codex skill for parity.
4. Re-run Pass 3 on at least one hypothesis to verify.

Until then, this is a manual paste per Lab Brief. Ten minutes per page.

---

## Quick-reference: file paths

| Path | What it is |
|---|---|
| `hypotheses/2026-04-25_lgg-c57bl6-permeability/plan/index.html` | Reference implementation |
| `hypotheses/2026-04-25_lgg-c57bl6-permeability/plan/.wiki-bundle.json` | The wiki corpus the voice tutor reads (already inlined in the HTML) |
| `tools/build-wiki-bundle.py` | Builds the wiki bundle (Pass 3 already calls this) |
| `.claude/skills/pass-3-plan.md` | Pass 3 spec (does not yet include the voice tutor) |
| `.codex/skills/groundwork-pass-3-plan/SKILL.md` | Codex parity (does not yet include the voice tutor) |
| `voice_implementation.md` | This file |
