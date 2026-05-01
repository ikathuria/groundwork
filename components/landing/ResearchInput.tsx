'use client'

import { useState } from 'react'
import ResearchProgress from './ResearchProgress'

const SAMPLES: Array<{ label: string; text: string }> = [
  {
    label: 'Diffusion models for code',
    text: 'How are diffusion models being applied to code generation, and what are the key differences in performance and controllability compared to autoregressive language models?',
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
    label: 'GNNs for drug discovery',
    text: 'How are graph neural networks being used in molecular property prediction and drug discovery, and what are the main limitations preventing wider clinical adoption?',
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
      <h3 className="font-mono text-xs uppercase tracking-widest text-gw-muted">
        Start a new survey
      </h3>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
        placeholder="What research question are you exploring? e.g. 'How are transformer attention mechanisms applied to time-series forecasting?'"
        className="w-full paper-card rounded-xl px-4 py-3 text-sm text-gw-text placeholder-gw-muted/60 outline-none focus:border-gw-accent/60 resize-none font-body bg-white"
      />

      <div className="flex flex-wrap gap-1.5">
        {SAMPLES.map((s) => (
          <button
            key={s.label}
            onClick={() => setText(s.text)}
            className="px-2.5 py-1 rounded-full border border-gw-border text-[11px] text-gw-muted hover:text-gw-text hover:border-gw-accent/40 transition-colors font-mono"
          >
            {s.label}
          </button>
        ))}
      </div>

      <button
        onClick={handleStart}
        disabled={!text.trim() || running}
        className="w-full py-3.5 rounded-xl bg-gw-accent text-white font-bold text-sm hover:brightness-110 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Survey this topic →
      </button>

      <p className="text-[10px] text-gw-muted/70 font-mono">
        Runs <code>claude -p</code> headlessly through 3 passes. Takes a few
        minutes — sources are fetched live.
      </p>

      {running && <ResearchProgress question={text} onCancel={handleCancel} />}
    </div>
  )
}
