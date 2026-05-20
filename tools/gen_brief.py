#!/usr/bin/env python3
"""Generate index.html for a GROUNDWORK research brief."""
import pathlib, sys

slug = sys.argv[1] if len(sys.argv) > 1 else "2026-05-19_ethical-and-security-concerns-in"
base = pathlib.Path(f"hypotheses/{slug}/plan")

plan_text = (base / "plan.json").read_text(encoding="utf-8")
bundle_text = (base / ".wiki-bundle.json").read_text(encoding="utf-8")

HTML_TEMPLATE = '''<!DOCTYPE html>
<!-- Aesthetic: Dark Security/Systems — deep slate (#0d1117) canvas, crimson (#dc2626)
     for threats and attacks, teal (#0891b2) for defenses and methods, amber (#d97706)
     for warnings/gaps, Fraunces display serif for headings, JetBrains Mono for IDs/code.
     Chosen because NLP x Security bridges academic rigour with adversarial systems
     thinking — the tension between those two modes defines the field. -->
<html lang="en" x-data="groundwork()" x-init="init()">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Ethical &amp; Security Concerns in RAG — Research Brief</title>
<script src="https://cdn.tailwindcss.com"><\/script>
<script>
tailwind.config = {
  theme: {
    extend: {
      colors: {
        slate: { 950: '#0d1117', 900: '#161b22', 800: '#21262d', 700: '#30363d', 600: '#484f58' },
        threat: { DEFAULT: '#dc2626', light: '#fca5a5', dark: '#7f1d1d' },
        defense: { DEFAULT: '#0891b2', light: '#a5f3fc', dark: '#164e63' },
        warn: { DEFAULT: '#d97706', light: '#fde68a', dark: '#78350f' },
        safe: { DEFAULT: '#16a34a', light: '#86efac', dark: '#14532d' },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      }
    }
  }
}
<\/script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;0,9..144,700;1,9..144,400&family=JetBrains+Mono:wght@400;500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"><\/script>
<style>
*{box-sizing:border-box}
body{background:#0d1117;color:#e6edf3;font-family:'Inter',sans-serif}
.font-display{font-family:'Fraunces',Georgia,serif}
.font-mono{font-family:'JetBrains Mono',monospace}
::-webkit-scrollbar{width:6px;height:6px}
::-webkit-scrollbar-track{background:#161b22}
::-webkit-scrollbar-thumb{background:#30363d;border-radius:3px}
.wiki-chip{display:inline-flex;align-items:center;gap:4px;padding:2px 8px;border-radius:4px;font-size:.7rem;font-family:'JetBrains Mono',monospace;cursor:pointer;transition:all .15s;border:1px solid}
.wiki-chip:hover{transform:translateY(-1px)}
.wiki-chip.source{background:#1e3a5f22;border-color:#0891b2;color:#7dd3fc}
.wiki-chip.source:hover{background:#0891b244}
.wiki-chip.method{background:#1a3a1a22;border-color:#16a34a;color:#86efac}
.wiki-chip.method:hover{background:#16a34a44}
.wiki-chip.concept{background:#3a1a2222;border-color:#9333ea;color:#d8b4fe}
.wiki-chip.concept:hover{background:#9333ea44}
.wiki-chip.problem,.wiki-chip.open-problem{background:#3a1a1a22;border-color:#dc2626;color:#fca5a5}
.wiki-chip.problem:hover,.wiki-chip.open-problem:hover{background:#dc262644}
.gap-card{border:1px dashed #d97706;background:#78350f11;border-radius:8px;padding:20px}
.priority-1{background:#dc2626;color:white}
.priority-2{background:#d97706;color:white}
.priority-3{background:#6b7280;color:white}
.priority-4{background:#374151;color:#9ca3af}
.priority-5{background:#1f2937;color:#6b7280}
.wiki-panel{position:fixed;top:0;right:0;height:100vh;width:min(520px,95vw);background:#161b22;border-left:1px solid #30363d;z-index:1000;transform:translateX(100%);transition:transform .3s ease;overflow-y:auto;display:flex;flex-direction:column}
.wiki-panel.open{transform:translateX(0)}
.wiki-body h1,.wiki-body h2{font-family:'Fraunces',serif;color:#e6edf3;margin:1em 0 .5em}
.wiki-body h2{font-size:1.1rem;font-weight:600;border-bottom:1px solid #30363d;padding-bottom:4px}
.wiki-body h3{font-size:1rem;color:#7dd3fc;margin:.8em 0 .3em}
.wiki-body p{margin:.5em 0;line-height:1.6;color:#c9d1d9}
.wiki-body ul{margin:.4em 0;padding-left:1.5em;color:#c9d1d9}
.wiki-body li{margin:.2em 0}
.wiki-body blockquote{border-left:3px solid #0891b2;padding:4px 12px;margin:8px 0;font-style:italic;color:#8b949e;background:#21262d;border-radius:0 4px 4px 0}
.wiki-body code{font-family:'JetBrains Mono',monospace;background:#21262d;padding:1px 5px;border-radius:3px;font-size:.85em;color:#a5f3fc}
.wiki-body a{color:#58a6ff;text-decoration:underline}
.timeline-phase{position:relative}
.timeline-phase::before{content:'';position:absolute;left:12px;top:28px;bottom:-8px;width:2px;background:#30363d}
.timeline-phase:last-child::before{display:none}
.stat-tile{background:#161b22;border:1px solid #30363d;border-radius:8px;padding:16px 20px;text-align:center}
.verdict-active{background:#16a34a22;border:1px solid #16a34a;color:#86efac}
.verdict-emerging{background:#d9770622;border:1px solid #d97706;color:#fde68a}
.verdict-saturated{background:#6b728022;border:1px solid #6b7280;color:#d1d5db}
.quick-switcher{position:fixed;top:80px;left:50%;transform:translateX(-50%);width:min(560px,90vw);background:#21262d;border:1px solid #30363d;border-radius:10px;z-index:2000;box-shadow:0 20px 60px #000000cc;overflow:hidden}
.theme-body{max-height:0;overflow:hidden;transition:max-height .4s ease}
.theme-body.open{max-height:600px}
.landmark-card{background:#21262d;border:1px solid #30363d;border-radius:6px;padding:10px 14px}
table{width:100%;border-collapse:collapse}
th{text-align:left;padding:8px 12px;color:#8b949e;font-size:.8rem;text-transform:uppercase;letter-spacing:.05em;border-bottom:1px solid #30363d}
td{padding:10px 12px;border-bottom:1px solid #21262d;vertical-align:top}
tr:last-child td{border-bottom:none}
tr:hover td{background:#21262d44}
@media(max-width:768px){.wiki-panel{width:100vw}}
</style>
</head>
<body class="min-h-screen" id="__app">

<!-- NAV -->
<header class="border-b border-slate-800 bg-slate-950 sticky top-0 z-50">
  <div class="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
    <div class="flex items-center gap-3 min-w-0">
      <span class="font-mono text-xs text-slate-600 shrink-0">GROUNDWORK</span>
      <span class="text-slate-700">·</span>
      <span class="text-sm text-slate-400 truncate">Ethical &amp; Security Concerns in RAG</span>
    </div>
    <div class="flex items-center gap-3">
      <span x-show="plan" class="text-xs font-mono px-2 py-1 rounded verdict-active">ACTIVE</span>
      <button @click="openSwitcher()" class="text-xs text-slate-500 hover:text-slate-300 font-mono transition-colors hidden md:flex items-center gap-1 border border-slate-700 rounded px-2 py-1">⌘K wiki</button>
    </div>
  </div>
</header>

<main class="max-w-6xl mx-auto px-6 pb-24" x-show="plan">

<!-- HERO -->
<section class="py-16 md:py-24">
  <div class="max-w-3xl">
    <div class="flex items-center gap-3 mb-6">
      <span class="font-mono text-xs text-slate-600 uppercase tracking-widest">Research Brief</span>
      <span class="font-mono text-xs text-slate-700">2026-05-19</span>
    </div>
    <h1 class="font-display text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
      Ethical &amp; Security Concerns<br>in <span class="text-threat">Retrieval-Augmented Generation</span>
    </h1>
    <p class="text-slate-300 text-lg leading-relaxed mb-8 italic font-display" x-text="plan?.summary?.pull_quote"></p>
    <div class="grid grid-cols-3 gap-4 mb-10">
      <div class="stat-tile">
        <div class="text-3xl font-display font-bold text-white mb-1" x-text="plan?.summary?.total_sources"></div>
        <div class="text-xs text-slate-500 uppercase tracking-wider">Sources</div>
        <div class="text-xs text-slate-600 mt-1" x-text="(plan?.summary?.sources_breakdown?.papers||0)+' papers · '+(plan?.summary?.sources_breakdown?.surveys||0)+' surveys'"></div>
      </div>
      <div class="stat-tile">
        <div class="text-3xl font-display font-bold text-defense mb-1" x-text="plan?.summary?.total_themes"></div>
        <div class="text-xs text-slate-500 uppercase tracking-wider">Key Themes</div>
      </div>
      <div class="stat-tile">
        <div class="text-3xl font-display font-bold text-warn mb-1" x-text="plan?.summary?.total_gaps"></div>
        <div class="text-xs text-slate-500 uppercase tracking-wider">Open Gaps</div>
      </div>
    </div>
  </div>
</section>

<!-- TOPIC BREAKDOWN -->
<section class="mb-16">
  <h2 class="font-display text-2xl font-semibold text-white mb-6">Topic Breakdown</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <template x-for="[key,label] in [['research_question','Research Question'],['scope','Scope'],['domain','Domain'],['approach','Approach'],['context','Context']]">
      <div class="bg-slate-900 border border-slate-800 rounded-lg p-4">
        <div class="text-xs font-mono text-slate-600 uppercase tracking-wider mb-2" x-text="label"></div>
        <p class="text-sm text-slate-300 leading-relaxed" x-text="plan?.topic?.refined?.[key]"></p>
      </div>
    </template>
  </div>
</section>

<!-- LANDSCAPE -->
<section class="mb-16">
  <h2 class="font-display text-2xl font-semibold text-white mb-6">Field Landscape</h2>
  <div class="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-6">
    <div class="flex items-center gap-3 mb-4">
      <span class="font-mono text-sm px-3 py-1.5 rounded-full verdict-active font-semibold uppercase">ACTIVE</span>
      <span class="text-slate-600 text-sm">— well-developed field, many recent papers, clear progress</span>
    </div>
    <p class="text-slate-300 leading-relaxed" x-text="plan?.landscape?.summary"></p>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <template x-for="work in plan?.landscape?.key_prior_work">
      <div class="landmark-card cursor-pointer hover:border-defense transition-colors" @click="openWiki(work.wiki_page)">
        <div class="font-mono text-xs text-slate-600 mb-1" x-text="work.year"></div>
        <div class="text-sm font-medium text-slate-200 leading-snug mb-2" x-text="work.title"></div>
        <div class="text-xs text-slate-500" x-text="work.authors"></div>
        <div class="mt-2 text-xs text-defense opacity-60">→ open in wiki</div>
      </div>
    </template>
  </div>
</section>

<!-- KEY THEMES -->
<section class="mb-16">
  <h2 class="font-display text-2xl font-semibold text-white mb-6">Key Themes</h2>
  <div class="space-y-4">
    <template x-for="(theme, i) in plan?.key_themes" :key="i">
      <div class="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
        <button class="w-full text-left p-6 flex items-start gap-4 hover:bg-slate-800 transition-colors" @click="toggleTheme(i)">
          <span class="font-mono text-2xl font-bold text-slate-700 shrink-0 leading-none mt-1" x-text="String(i+1).padStart(2,'0')"></span>
          <div class="flex-1 min-w-0">
            <h3 class="font-display text-lg font-semibold text-white leading-snug" x-text="theme.theme"></h3>
            <p class="text-slate-400 text-sm mt-1" x-text="theme.description.slice(0,180)+'...'"></p>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            <span class="text-xs text-slate-600 font-mono" x-text="(theme.source_citations?.length||0)+' sources'"></span>
            <span class="text-slate-600 transition-transform inline-block" :class="openThemes.has(i)?'rotate-180':''">▾</span>
          </div>
        </button>
        <div class="theme-body" :class="openThemes.has(i)?'open':''">
          <div class="px-6 pb-6 pt-2 border-t border-slate-800">
            <p class="text-slate-300 text-sm leading-relaxed mb-4" x-text="theme.evidence_summary"></p>
            <div class="flex flex-wrap gap-2">
              <template x-for="cid in theme.source_citations" :key="cid">
                <button class="wiki-chip source" @click.stop="openWiki('sources/'+cid)">
                  <span>📄</span><span x-text="cid"></span>
                </button>
              </template>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</section>

<!-- RESEARCH GAPS -->
<section class="mb-16">
  <h2 class="font-display text-2xl font-semibold text-white mb-2">Research Gaps</h2>
  <p class="text-slate-500 text-sm mb-6">Open problems — no published solution yet satisfies these.</p>
  <div class="space-y-4">
    <template x-for="(gap, i) in plan?.research_gaps" :key="i">
      <div class="gap-card">
        <h3 class="font-display text-base font-semibold text-warn mb-2" x-text="gap.gap"></h3>
        <p class="text-slate-400 text-sm leading-relaxed mb-4" x-text="gap.explanation"></p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div class="text-xs font-mono text-slate-600 uppercase tracking-wider mb-2">Open Questions</div>
            <ul class="space-y-1">
              <template x-for="q in gap.open_questions">
                <li class="text-xs text-slate-400 flex gap-2"><span class="text-warn shrink-0">▸</span><span x-text="q"></span></li>
              </template>
            </ul>
          </div>
          <div>
            <div class="text-xs font-mono text-slate-600 uppercase tracking-wider mb-2">Potential Directions</div>
            <ul class="space-y-1">
              <template x-for="d in gap.potential_directions">
                <li class="text-xs text-slate-400 flex gap-2"><span class="text-safe shrink-0">→</span><span x-text="d"></span></li>
              </template>
            </ul>
          </div>
        </div>
      </div>
    </template>
  </div>
</section>

<!-- METHODOLOGY LANDSCAPE -->
<section class="mb-16">
  <h2 class="font-display text-2xl font-semibold text-white mb-6">Methodology Landscape</h2>
  <div class="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
    <table>
      <thead>
        <tr>
          <th>Method</th>
          <th class="hidden md:table-cell">Papers</th>
          <th class="hidden lg:table-cell">Strengths</th>
          <th class="hidden lg:table-cell">Limitations</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <template x-for="(m, i) in plan?.methodology_overview" :key="i">
          <tr class="cursor-pointer hover:bg-slate-800" @click="openWiki(m.wiki_page)">
            <td>
              <div class="font-medium text-sm text-slate-200" x-text="m.method"></div>
              <div class="text-xs text-slate-500 mt-0.5 md:hidden" x-text="m.description.slice(0,80)+'...'"></div>
            </td>
            <td class="hidden md:table-cell"><span class="font-mono text-xs text-defense" x-text="(m.used_in_papers?.length||0)+' papers'"></span></td>
            <td class="hidden lg:table-cell">
              <ul class="text-xs text-slate-400 space-y-0.5">
                <template x-for="s in (m.strengths||[]).slice(0,2)">
                  <li class="flex gap-1"><span class="text-safe shrink-0">+</span><span x-text="s"></span></li>
                </template>
              </ul>
            </td>
            <td class="hidden lg:table-cell">
              <ul class="text-xs text-slate-400 space-y-0.5">
                <template x-for="l in (m.limitations||[]).slice(0,2)">
                  <li class="flex gap-1"><span class="text-threat shrink-0">−</span><span x-text="l"></span></li>
                </template>
              </ul>
            </td>
            <td class="text-right"><span class="text-xs text-slate-700 font-mono">→</span></td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</section>

<!-- READING LIST -->
<section class="mb-16">
  <h2 class="font-display text-2xl font-semibold text-white mb-6">Reading List</h2>

  <div class="mb-6">
    <div class="text-xs font-mono text-threat uppercase tracking-widest mb-3">Must Read — Priority 1</div>
    <div class="space-y-3">
      <template x-for="item in (plan?.reading_list||[]).filter(r=>r.priority===1)">
        <div class="bg-slate-900 border border-slate-800 rounded-lg p-5 hover:border-threat/40 transition-colors cursor-pointer" @click="openWiki(item.wiki_page)">
          <div class="flex items-start gap-3">
            <span class="priority-1 text-xs font-mono font-bold px-2 py-0.5 rounded shrink-0 mt-0.5">P1</span>
            <div class="flex-1 min-w-0">
              <div class="font-medium text-slate-200 text-sm leading-snug mb-1" x-text="item.title"></div>
              <div class="text-xs text-slate-500 mb-2" x-text="(item.authors||'')+(item.year?' · '+item.year:'')"></div>
              <p class="text-xs text-slate-400" x-text="item.why_relevant"></p>
            </div>
            <a :href="'https://doi.org/'+item.doi" @click.stop target="_blank" rel="noopener"
               class="text-xs font-mono text-defense hover:text-defense-light transition-colors shrink-0">DOI↗</a>
          </div>
        </div>
      </template>
    </div>
  </div>

  <div class="mb-6">
    <div class="text-xs font-mono text-warn uppercase tracking-widest mb-3">Essential — Priority 2</div>
    <div class="space-y-2">
      <template x-for="item in (plan?.reading_list||[]).filter(r=>r.priority===2)">
        <div class="bg-slate-900 border border-slate-800 rounded-lg p-4 hover:border-warn/40 transition-colors cursor-pointer flex items-center gap-3" @click="openWiki(item.wiki_page)">
          <span class="priority-2 text-xs font-mono font-bold px-2 py-0.5 rounded shrink-0">P2</span>
          <div class="flex-1 min-w-0">
            <div class="text-sm text-slate-300 leading-snug truncate" x-text="item.title"></div>
            <div class="text-xs text-slate-600" x-text="item.why_relevant"></div>
          </div>
          <a :href="'https://doi.org/'+item.doi" @click.stop target="_blank" class="text-xs font-mono text-slate-600 hover:text-defense shrink-0">DOI↗</a>
        </div>
      </template>
    </div>
  </div>

  <div>
    <div class="text-xs font-mono text-slate-600 uppercase tracking-widest mb-3">Additional — Priority 3–5</div>
    <div class="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
      <template x-for="item in (plan?.reading_list||[]).filter(r=>r.priority>=3)">
        <div class="flex items-center gap-3 px-4 py-3 border-b border-slate-800 last:border-0 hover:bg-slate-800 cursor-pointer transition-colors" @click="openWiki(item.wiki_page)">
          <span class="font-mono text-xs px-1.5 py-0.5 rounded shrink-0" :class="'priority-'+item.priority" x-text="'P'+item.priority"></span>
          <span class="text-sm text-slate-400 flex-1 min-w-0 truncate" x-text="item.title"></span>
          <span class="text-xs text-slate-600 hidden md:block shrink-0" x-text="item.year"></span>
          <a :href="'https://doi.org/'+item.doi" @click.stop target="_blank" class="text-xs font-mono text-slate-700 hover:text-defense shrink-0">↗</a>
        </div>
      </template>
    </div>
  </div>
</section>

<!-- TIMELINE -->
<section x-show="plan?.publication_timeline?.length" class="mb-16">
  <h2 class="font-display text-2xl font-semibold text-white mb-6">Field Development Timeline</h2>
  <div class="space-y-2 pl-2">
    <template x-for="(phase, i) in plan?.publication_timeline" :key="i">
      <div class="timeline-phase flex gap-5 pl-8 pb-6 relative">
        <div class="absolute left-0 top-1 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-mono z-10"
             :class="i===0?'bg-slate-700 border-defense text-defense':i===(plan.publication_timeline.length-1)?'bg-threat/20 border-threat text-threat':'bg-slate-800 border-slate-600 text-slate-400'"
             x-text="i+1"></div>
        <div class="flex-1 bg-slate-900 border border-slate-800 rounded-lg p-4">
          <div class="font-medium text-slate-200 text-sm mb-1" x-text="phase.name"></div>
          <p class="text-xs text-slate-500 leading-relaxed" x-text="phase.description"></p>
        </div>
      </div>
    </template>
  </div>
</section>

<!-- SOURCES -->
<section class="mb-16">
  <h2 class="font-display text-2xl font-semibold text-white mb-6">
    All Sources
    <span class="text-sm font-normal text-slate-600 font-sans ml-2" x-text="'('+( plan?.sources?.length||0)+')'"></span>
  </h2>
  <div class="flex gap-2 mb-4">
    <template x-for="tag in ['all','paper','survey']">
      <button @click="sourceFilter=tag"
              class="text-xs font-mono px-3 py-1 rounded border transition-colors"
              :class="sourceFilter===tag?'bg-slate-700 border-slate-600 text-white':'border-slate-800 text-slate-500 hover:border-slate-700'"
              x-text="tag"></button>
    </template>
  </div>
  <div class="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
    <template x-for="src in (plan?.sources||[]).filter(s=>sourceFilter==='all'||s.tag===sourceFilter)">
      <div class="flex items-center gap-3 px-4 py-3 border-b border-slate-800 last:border-0 hover:bg-slate-800 cursor-pointer transition-colors group" @click="openWiki(src.wiki_page)">
        <span class="text-xs font-mono px-2 py-0.5 rounded shrink-0 border"
              :class="src.tag==='survey'?'border-purple-800 text-purple-400 bg-purple-900/20':'border-slate-700 text-slate-500'"
              x-text="src.tag"></span>
        <div class="flex-1 min-w-0">
          <div class="text-sm text-slate-300 leading-snug truncate" x-text="src.title"></div>
          <div class="text-xs text-slate-600" x-text="(src.authors||'')+' · '+(src.year||'')"></div>
        </div>
        <a :href="'https://doi.org/'+src.doi" @click.stop target="_blank" rel="noopener"
           class="text-xs font-mono text-slate-700 hover:text-defense shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">DOI↗</a>
      </div>
    </template>
  </div>
</section>
</main>

<!-- WIKI SIDE PANEL -->
<div class="wiki-panel" :class="wikiOpen?'open':''">
  <div class="flex items-center gap-2 px-4 py-3 border-b border-slate-700 bg-slate-950 sticky top-0">
    <button @click="wikiBack()" class="text-slate-600 hover:text-slate-300 transition-colors text-sm disabled:opacity-30"
            :disabled="wikiStack.length<=1">← Back</button>
    <span class="flex-1"></span>
    <button @click="openSwitcher()" class="text-xs text-slate-600 hover:text-slate-400 font-mono border border-slate-800 rounded px-2 py-0.5">⌘K</button>
    <button @click="closeWiki()" class="text-slate-600 hover:text-slate-300 transition-colors text-lg leading-none ml-2">×</button>
  </div>
  <div class="flex-1 overflow-y-auto px-5 py-4" x-show="currentPage">
    <div class="flex items-start gap-3 mb-4">
      <span class="text-xs font-mono px-2 py-1 rounded border shrink-0 mt-1"
            :class="{
              'border-defense text-defense bg-defense/10':currentPage?.type==='source',
              'border-safe text-safe bg-safe/10':currentPage?.type==='method',
              'border-purple-500 text-purple-400 bg-purple-900/20':currentPage?.type==='concept',
              'border-threat text-threat bg-threat/10':currentPage?.type==='open-problem',
              'border-slate-600 text-slate-400 bg-slate-800':!['source','method','concept','open-problem'].includes(currentPage?.type)
            }" x-text="currentPage?.type"></span>
      <h2 class="font-display text-xl font-semibold text-white leading-snug" x-text="currentPage?.title"></h2>
    </div>
    <div x-show="Object.keys(currentPage?.frontmatter||{}).length>0" class="mb-4 bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs font-mono">
      <template x-for="[k,v] in Object.entries(currentPage?.frontmatter||{}).filter(([k])=>!['type','body_md','slug'].includes(k)).slice(0,8)">
        <div class="flex gap-2 text-slate-500 leading-relaxed">
          <span class="text-slate-600 shrink-0" x-text="k+':'"></span>
          <span class="text-slate-400 truncate" x-text="Array.isArray(v)?v.join(', '):String(v)"></span>
        </div>
      </template>
    </div>
    <div class="wiki-body text-sm" x-html="renderMarkdown(currentPage?.body_md||'')"></div>
    <div x-show="currentBacklinks?.length>0" class="mt-6 pt-4 border-t border-slate-800">
      <div class="text-xs font-mono text-slate-600 uppercase tracking-wider mb-3">Referenced By</div>
      <div class="flex flex-wrap gap-2">
        <template x-for="bl in currentBacklinks">
          <button @click="openWiki(bl.slug)" class="wiki-chip"
                  :class="{source:bl.type==='source',method:bl.type==='method',concept:bl.type==='concept','open-problem':bl.type==='open-problem'}"
                  x-text="bl.title||bl.slug"></button>
        </template>
      </div>
    </div>
  </div>
  <div class="flex-1 flex items-center justify-center text-slate-700 text-sm" x-show="!currentPage">
    Click any entity to open it here
  </div>
</div>
<div x-show="wikiOpen" class="fixed inset-0 bg-black/40 z-40" @click="closeWiki()" style="display:none"></div>

<!-- QUICK SWITCHER -->
<div x-show="switcherOpen" class="quick-switcher" style="display:none">
  <div class="flex items-center gap-3 px-4 py-3 border-b border-slate-700">
    <span class="text-slate-600 text-sm">🔍</span>
    <input type="text" placeholder="Search wiki pages..." x-model="switcherQuery" x-ref="switcherInput"
           @keydown.arrow-down.prevent="switcherIdx=Math.min(switcherIdx+1,switcherResults.length-1)"
           @keydown.arrow-up.prevent="switcherIdx=Math.max(switcherIdx-1,0)"
           @keydown.enter="selectSwitcher()"
           class="flex-1 bg-transparent text-white outline-none text-sm placeholder-slate-600">
    <button @click="switcherOpen=false" class="text-slate-600 hover:text-slate-400 text-lg leading-none">×</button>
  </div>
  <div class="max-h-80 overflow-y-auto">
    <template x-for="(page,i) in switcherResults" :key="page.slug">
      <div @click="selectSwitcherPage(page)" @mouseover="switcherIdx=i"
           class="px-4 py-2.5 flex items-center gap-3 cursor-pointer transition-colors"
           :class="i===switcherIdx?'bg-slate-700':'hover:bg-slate-800'">
        <span class="text-xs font-mono px-1.5 py-0.5 rounded border shrink-0"
              :class="{
                'border-defense text-defense':page.type==='source',
                'border-safe text-safe':page.type==='method',
                'border-purple-500 text-purple-400':page.type==='concept',
                'border-threat text-threat':page.type==='open-problem',
                'border-slate-600 text-slate-500':!['source','method','concept','open-problem'].includes(page.type)
              }" x-text="page.type"></span>
        <span class="text-sm text-slate-300 truncate flex-1" x-text="page.title"></span>
        <span class="text-xs text-slate-600 font-mono shrink-0 hidden md:block" x-text="page.slug.split('/')[0]"></span>
      </div>
    </template>
    <div x-show="switcherResults.length===0" class="px-4 py-6 text-center text-slate-600 text-sm">No pages found</div>
  </div>
</div>
<div x-show="switcherOpen" class="fixed inset-0 z-[999]" @click="switcherOpen=false" style="display:none"></div>

<!-- EMBEDDED DATA -->
<script type="application/json" id="plan-data">PLAN_PLACEHOLDER<\/script>
<script type="application/json" id="wiki-corpus">BUNDLE_PLACEHOLDER<\/script>

<!-- APP -->
<script>
const WIKILINK_RE=/\[\[((?:\.\.\/)*[^\]|]+?)(?:\|([^\]]+?))?\]\]/g;
function groundwork(){
  return{
    plan:null,corpus:null,pages:{},backlinksMap:{},
    openThemes:new Set(),sourceFilter:'all',
    wikiOpen:false,wikiStack:[],currentPage:null,currentBacklinks:[],
    switcherOpen:false,switcherQuery:'',switcherIdx:0,
    get switcherResults(){
      const q=this.switcherQuery.toLowerCase().trim();
      const all=Object.values(this.pages);
      if(!q)return all.slice(0,20);
      return all.filter(p=>p.title.toLowerCase().includes(q)||p.slug.toLowerCase().includes(q)||(p.type||'').toLowerCase().includes(q)).slice(0,20);
    },
    init(){
      try{this.plan=JSON.parse(document.getElementById('plan-data').textContent)}catch(e){console.error('plan',e)}
      try{this.corpus=JSON.parse(document.getElementById('wiki-corpus').textContent);this.pages=this.corpus.pages||{};this.buildBacklinks()}catch(e){console.error('corpus',e)}
      if(location.hash.startsWith('#wiki-')){const s=decodeURIComponent(location.hash.slice(6));this.$nextTick(()=>this.openWiki(s))}
      window.addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key==='k'){e.preventDefault();this.openSwitcher()}});
    },
    buildBacklinks(){
      const bl={};
      for(const[slug,page]of Object.entries(this.pages)){
        const body=page.body_md||'';
        const re=new RegExp(WIKILINK_RE.source,WIKILINK_RE.flags);
        let m;
        while((m=re.exec(body))!==null){
          const target=this.resolveWikilink(m[1],slug);
          if(!bl[target])bl[target]=[];
          if(!bl[target].find(x=>x.slug===slug))bl[target].push({slug,title:page.title,type:page.type});
        }
      }
      this.backlinksMap=bl;
    },
    resolveWikilink(target,fromSlug){return target.replace(/^(\.\.\/)+/,'').replace(/\.md$/,'')},
    openWiki(slug){
      if(!slug)return;
      slug=this.resolveWikilink(slug,'');
      let page=this.pages[slug];
      if(!page){
        const drilldowns=this.plan?.wiki_drilldowns||{};
        const key=slug.replace(/^sources\//,'');
        if(drilldowns[key]){const dd=drilldowns[key];page={slug,title:dd.title,type:'source',frontmatter:{},body_md:dd.body_md}}
      }
      if(!page)page={slug,title:slug.split('/').pop(),type:slug.split('/')[0]?.replace(/s$/,'')||'page',frontmatter:{},body_md:'*Page "'+slug+'" not found in wiki corpus.*'};
      this.wikiStack.push(slug);this.currentPage=page;this.currentBacklinks=this.backlinksMap[slug]||[];this.wikiOpen=true;
      history.replaceState(null,'','#wiki-'+encodeURIComponent(slug));
    },
    closeWiki(){this.wikiOpen=false;this.wikiStack=[];this.currentPage=null;history.replaceState(null,'',location.pathname)},
    wikiBack(){
      if(this.wikiStack.length>1){
        this.wikiStack.pop();const prev=this.wikiStack[this.wikiStack.length-1];
        const page=this.pages[prev]||null;this.currentPage=page;this.currentBacklinks=this.backlinksMap[prev]||[];
        history.replaceState(null,'','#wiki-'+encodeURIComponent(prev));
      }
    },
    renderMarkdown(md){
      if(!md)return'';
      const replaced=md.replace(new RegExp(WIKILINK_RE.source,WIKILINK_RE.flags),(match,target,label)=>{
        const display=label||target.split('/').pop().replace(/-/g,' ');
        const slug=this.resolveWikilink(target,'');
        const seg=slug.split('/')[0]||'';
        const type=seg.replace(/s$/,'');
        return`<button onclick="document.getElementById('__app').__x.$data.openWiki('${slug.replace(/'/g,"\\'")}');event.stopPropagation()" class="wiki-chip ${type}">${display}<\/button>`;
      });
      try{return typeof marked!=='undefined'?marked.parse(replaced):replaced}catch(e){return replaced}
    },
    toggleTheme(i){if(this.openThemes.has(i))this.openThemes.delete(i);else this.openThemes.add(i);this.openThemes=new Set(this.openThemes)},
    openSwitcher(){this.switcherOpen=true;this.switcherQuery='';this.switcherIdx=0;this.$nextTick(()=>this.$refs.switcherInput?.focus())},
    selectSwitcher(){const r=this.switcherResults;if(r[this.switcherIdx])this.selectSwitcherPage(r[this.switcherIdx])},
    selectSwitcherPage(page){this.switcherOpen=false;this.openWiki(page.slug)},
  }
}
<\/script>
</body>
</html>
'''

html = HTML_TEMPLATE.replace('PLAN_PLACEHOLDER', plan_text).replace('BUNDLE_PLACEHOLDER', bundle_text)
out = base / "index.html"
out.write_text(html, encoding="utf-8")
size_kb = out.stat().st_size / 1024
print(f"Wrote {out} ({size_kb:.0f} KB)")
