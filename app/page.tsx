import PlanPicker from '@/components/landing/PlanPicker'
import ResearchInput from '@/components/landing/ResearchInput'

export default function Home() {
  return (
    <main className="min-h-screen overflow-y-auto bg-surveyor-bg">
      <div className="px-4 py-14 md:py-20 flex justify-center">
        <div className="w-full max-w-2xl flex flex-col gap-12">

          {/* Header */}
          <div className="text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] mb-4 text-surveyor-accent">
              Research compilation
            </p>
            <h1 className="font-display font-bold text-5xl md:text-6xl tracking-tight mb-4 text-surveyor-text">
              Groundwork
            </h1>
            <p className="text-surveyor-muted text-base max-w-sm mx-auto leading-relaxed font-body">
              Enter a research question. Get back a structured survey of the
              literature — key themes, open gaps, and a prioritized reading list.
            </p>
          </div>

          {/* New research input */}
          <ResearchInput />

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-surveyor-border" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-surveyor-muted">previous surveys</span>
            <div className="flex-1 h-px bg-surveyor-border" />
          </div>

          {/* Pre-built surveys */}
          <PlanPicker />

          <p className="text-surveyor-border text-xs text-center font-mono">
            Powered by Claude · 3-pass agent pipeline
          </p>

        </div>
      </div>
    </main>
  )
}
