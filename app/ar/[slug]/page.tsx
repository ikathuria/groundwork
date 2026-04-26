import dynamic from 'next/dynamic'
import { SAMPLE_EXPERIMENT } from '@/lib/experiment-steps'

// ARViewer must be client-side only (needs window, WebXR, getUserMedia)
const ARViewer = dynamic(() => import('@/components/ar/ARViewer'), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0a0f1a]">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-[#00d4aa] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
        <p className="text-[#64748b] text-sm">Loading virtual lab…</p>
      </div>
    </div>
  ),
})

// /ar/<slug> — canonical: fetches hypotheses/<slug>/plan/{plan,ar}.json (same as legacy /ar?slug=).
export default function ARBySlugPage({ params }: { params: { slug: string } }) {
  const slug = params.slug?.trim() || undefined
  return (
    <main className="fixed inset-0 overflow-hidden">
      <ARViewer plan={SAMPLE_EXPERIMENT} slug={slug} />
    </main>
  )
}
