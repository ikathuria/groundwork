'use client'

import { useState } from 'react'
import ResearchProgress from './ResearchProgress'

const SAMPLES: Array<{ label: string; text: string }> = [
  {
    label: 'Trehalose cryopreservation',
    text: 'Replacing sucrose with trehalose as a cryoprotectant in the freezing medium will increase post-thaw viability of HeLa cells by at least 15 percentage points compared to the standard DMSO protocol, due to trehalose superior membrane stabilization at low temperatures.',
  },
  {
    label: 'L. rhamnosus gut barrier',
    text: 'Supplementing C57BL/6 mice with Lactobacillus rhamnosus GG for 4 weeks will reduce intestinal permeability by at least 30% compared to controls, measured by FITC-dextran assay, due to upregulation of tight junction proteins claudin-1 and occludin.',
  },
  {
    label: 'CRP biosensor',
    text: 'A paper-based electrochemical biosensor functionalized with anti-CRP antibodies will detect C-reactive protein in whole blood at concentrations below 0.5 mg/L within 10 minutes, matching laboratory ELISA sensitivity without requiring sample preprocessing.',
  },
  {
    label: 'Sporomusa CO₂ capture',
    text: 'Introducing Sporomusa ovata into a bioelectrochemical system at a cathode potential of −400mV vs SHE will fix CO₂ into acetate at a rate of at least 150 mmol/L/day, outperforming current biocatalytic carbon capture benchmarks by at least 20%.',
  },
]

export default function HypothesisInput() {
  const [text, setText] = useState('')
  const [running, setRunning] = useState(false)

  const handleStart = () => {
    if (!text.trim() || running) return
    setRunning(true)
  }

  const handleCancel = () => {
    setRunning(false)
  }

  return (
    <div className="flex flex-col gap-3 w-full">
      <h3 className="text-[#00d4aa] font-mono text-xs uppercase tracking-widest">
        Research a fresh hypothesis
      </h3>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
        placeholder="Enter a scientific hypothesis. Strong inputs name an intervention, an outcome with a threshold, a mechanism, and a control."
        className="w-full glass rounded-xl px-4 py-3 text-sm text-white placeholder-[#64748b]/70 outline-none focus:border-[#00d4aa]/50 resize-none"
      />

      <div className="flex flex-wrap gap-1.5">
        {SAMPLES.map((s) => (
          <button
            key={s.label}
            onClick={() => setText(s.text)}
            className="px-2.5 py-1 rounded-full border border-white/10 text-[11px] text-[#64748b] hover:text-white hover:border-white/30 transition-colors"
          >
            {s.label}
          </button>
        ))}
      </div>

      <button
        onClick={handleStart}
        disabled={!text.trim() || running}
        className="w-full py-3.5 rounded-xl bg-[#00d4aa] text-[#0a0f1a] font-bold text-sm hover:brightness-110 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        ⚙ Run Pass-1 → Pass-2 → Pass-3
      </button>

      <p className="text-[10px] text-[#64748b]/70">
        Spawns <code className="text-[#64748b]">claude -p</code> headlessly per the
        canonical pipeline. Takes a few minutes — sources are fetched live.
      </p>

      {running && <ResearchProgress hypothesis={text} onCancel={handleCancel} />}
    </div>
  )
}
