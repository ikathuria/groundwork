import Link from 'next/link'
import PlanPicker from '@/components/landing/PlanPicker'
import HypothesisInput from '@/components/landing/HypothesisInput'

export default function Home() {
  return (
    <main className="fixed inset-0 overflow-y-auto bg-[#0a0f1a]">
      <div className="min-h-full px-4 py-10 md:py-16 flex justify-center">
        <div className="w-full max-w-2xl flex flex-col gap-10">
          {/* Header */}
          <div className="text-center">
            <p className="text-[#00d4aa] font-mono text-xs uppercase tracking-[0.3em] mb-3">
              From hypothesis to runnable experiment
            </p>
            <h1 className="text-white font-bold text-4xl md:text-5xl tracking-tight mb-3">
              GROUNDWORK
            </h1>
            <p className="text-[#64748b] text-sm md:text-base max-w-md mx-auto leading-relaxed">
              Enter a scientific hypothesis. The pipeline returns a complete
              operational experiment plan — grounded in real protocols,
              failure-aware, and ready to run in AR.
            </p>
          </div>

          {/* Pre-baked picker */}
          <PlanPicker />

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-white/5" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#64748b]">or</span>
            <div className="flex-1 h-px bg-white/5" />
          </div>

          {/* Fresh research */}
          <HypothesisInput />

          {/* Sample experiment shortcut */}
          <div className="text-center">
            <Link
              href="/ar?sample=1"
              className="text-[#64748b] hover:text-white text-xs underline-offset-4 hover:underline transition-colors"
            >
              Skip — launch AR with the built-in sample experiment →
            </Link>
          </div>

          <p className="text-[#1f2d3d] text-xs text-center font-mono">
            Built for Hack Nation Global AI Hackathon · Challenge 04
          </p>
        </div>
      </div>
    </main>
  )
}
