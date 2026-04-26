import { spawn } from 'child_process'
import { NextRequest } from 'next/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// POST /api/research-pipeline
// Body: { hypothesis: string, slug?: string }
// Streams SSE events as it runs `claude -p` for /pass-1 → /pass-2 → /pass-3.
//
// SSE events emitted:
//   event: stage   data: { stage, message }
//   event: log     data: { stage, line }       — raw stream-json line from claude
//   event: error   data: { stage, message }
//   event: done    data: { slug }
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}))
  const hypothesis = String(body.hypothesis ?? '').trim()
  if (!hypothesis) {
    return new Response('Missing hypothesis', { status: 400 })
  }

  const slug = body.slug ? sanitiseSlug(body.slug) : generateSlug(hypothesis)

  const encoder = new TextEncoder()
  const stream = new ReadableStream({
    async start(controller) {
      const send = (event: string, data: unknown) => {
        controller.enqueue(
          encoder.encode(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`),
        )
      }

      try {
        send('stage', { stage: 'pass-1', message: `Starting deep research for ${slug}` })
        await runPass(send, 'pass-1', `/pass-1 ${slug} "${escapeQuotes(hypothesis)}"`)

        send('stage', { stage: 'pass-2', message: 'Compiling wiki' })
        await runPass(send, 'pass-2', `/pass-2 ${slug}`)

        send('stage', { stage: 'pass-3', message: 'Generating Lab Brief' })
        await runPass(send, 'pass-3', `/pass-3 ${slug}`)

        send('done', { slug })
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err)
        send('error', { stage: 'pipeline', message: msg })
      } finally {
        controller.close()
      }
    },
  })

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      Connection: 'keep-alive',
    },
  })
}

// ─── Subprocess runner ──────────────────────────────────────────────────────

function runPass(
  send: (event: string, data: unknown) => void,
  stage: string,
  prompt: string,
): Promise<void> {
  return new Promise((resolve, reject) => {
    // Spawn `claude -p --output-format stream-json` with the slash-command prompt
    const proc = spawn('claude', ['-p', '--output-format', 'stream-json', prompt], {
      cwd: process.cwd(),
      shell: true,
      env: process.env,
    })

    let stderrBuf = ''

    proc.stdout.on('data', (chunk: Buffer) => {
      const text = chunk.toString('utf-8')
      // stream-json is newline-delimited; forward each non-empty line
      for (const line of text.split('\n')) {
        const trimmed = line.trim()
        if (trimmed) send('log', { stage, line: trimmed })
      }
    })

    proc.stderr.on('data', (chunk: Buffer) => {
      stderrBuf += chunk.toString('utf-8')
    })

    proc.on('error', (err) => {
      send('error', { stage, message: `Failed to spawn claude: ${err.message}` })
      reject(err)
    })

    proc.on('close', (code) => {
      if (code === 0) {
        resolve()
      } else {
        const msg = `claude -p exited with code ${code}${stderrBuf ? `: ${stderrBuf.trim()}` : ''}`
        send('error', { stage, message: msg })
        reject(new Error(msg))
      }
    })
  })
}

// ─── Slug generation ────────────────────────────────────────────────────────

function generateSlug(hypothesis: string): string {
  const date = new Date().toISOString().slice(0, 10) // YYYY-MM-DD
  const words = hypothesis
    .toLowerCase()
    .replace(/[^\w\s-]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 5)
    .join('-')
  return `${date}_${words || 'hypothesis'}`
}

function sanitiseSlug(slug: string): string {
  return slug.replace(/[^\w-]/g, '-').slice(0, 100)
}

function escapeQuotes(s: string): string {
  return s.replace(/"/g, '\\"')
}
