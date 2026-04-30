import PlanPicker from '@/components/landing/PlanPicker'
import ResearchInput from '@/components/landing/ResearchInput'

export default function Home() {
  return (
    <main className="fixed inset-0 overflow-y-auto bg-[#0a0f1a]">
      <div className="min-h-full px-4 py-10 md:py-16 flex justify-center">
        <div className="w-full max-w-2xl flex flex-col gap-10">
          {/* Header */}
          <div className="text-center">
            <p className="text-[#00d4aa] font-mono text-xs uppercase tracking-[0.3em] mb-3">
              From question to compiled literature
            </p>
            <h1 className="text-white font-bold text-4xl md:text-5xl tracking-tight mb-3">
              GROUNDWORK
            </h1>
            <p className="text-[#64748b] text-sm md:text-base max-w-md mx-auto leading-relaxed">
              Enter a research question. The pipeline returns a structured Research
              Brief — key themes, open gaps, methodology landscape, and a prioritized
              reading list, grounded in real papers.
            </p>
          </div>

          {/* Pre-built research briefs */}
          <PlanPicker />

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-white/5" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#64748b]">or</span>
            <div className="flex-1 h-px bg-white/5" />
          </div>

          {/* Fresh research input */}
          <ResearchInput />

          <p className="text-[#1f2d3d] text-xs text-center font-mono">
            Powered by Claude · 3-pass agent pipeline
          </p>
        </div>
      </div>
    </main>
  )
}
