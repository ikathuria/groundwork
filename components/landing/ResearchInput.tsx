'use client'

import { useState } from 'react'
import ResearchProgress from './ResearchProgress'

const SAMPLES: Array<{ label: string; text: string }> = [
  {
    label: 'Diffusion models for code',
    text: 'How are diffusion models being applied to code generation, and what are the key differences in performance and controllability compared to autoregressive language models for programming tasks?',
  },
  {
    label: 'LLMs for theorem proving',
    text: 'What is the current state of large language models applied to formal mathematical theorem proving, and what are the main gaps between neural and symbolic approaches?',
  },
  {
    label: 'Efficient LLM inference',
    text: 'What techniques exist for reducing the computational cost of large language model inference at deployment time, and which approaches show the best accuracy-efficiency tradeoffs?',
  },
  {
    label: 'Graph neural networks for drug discovery',
    text: 'How are graph neural networks being used in molecular property prediction and drug discovery, and what are the main limitations that prevent wider clinical adoption?',
  },
]

export default function ResearchInput() {
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
        Research a new question
      </h3>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
        placeholder="Enter a research question or topic. Strong inputs name a specific area, a contested open problem, or a methodology comparison. e.g. 'How are transformer attention mechanisms applied to time-series forecasting?'"
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

      {running && <ResearchProgress question={text} onCancel={handleCancel} />}
    </div>
  )
}
