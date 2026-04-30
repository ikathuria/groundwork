import { spawn } from 'child_process'
import { NextRequest } from 'next/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// POST /api/research-pipeline
// Body: { hypothesis: string, slug?: string }
// Streams SSE events as it runs `claude -p` for /pass-1 → /pass-2 → /pass-3.
//
// SSE events emitted (UI-facing):
//   event: stage   data: { stage, message }
//   event: error   data: { stage, message }
//   event: done    data: { slug }
//
// Verbose per-token / tool-use logs from `claude -p --output-format stream-json`
// are written to the dev-server terminal (stdout) via console.log — NOT
// forwarded over SSE. Watch the terminal running `npm run dev` to see them.
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
        send('stage', { stage: 'pass-1', message: `Searching papers for ${slug}` })
        await runPass(send, 'pass-1', `/pass-1 ${slug} "${escapeQuotes(hypothesis)}"`)

        send('stage', { stage: 'pass-2', message: 'Building wiki' })
        await runPass(send, 'pass-2', `/pass-2 ${slug}`)

        send('stage', { stage: 'pass-3', message: 'Synthesising Research Brief' })
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

// Tools any of /pass-1, /pass-2, /pass-3 may need. Pre-allowing them avoids
// permission prompts that would hang a headless run.
const ALLOWED_TOOLS = [
  'Read',
  'Write',
  'Edit',
  'Bash',
  'WebFetch',
  'WebSearch',
  'Glob',
  'Grep',
].join(',')

// Shape of the events emitted by `claude -p --output-format stream-json`.
// We only care about a handful of fields; everything else is `unknown`.
interface ClaudeContentBlock {
  type: string
  text?: string
  name?: string
  input?: Record<string, unknown>
  content?: unknown
}
interface ClaudeEvent {
  type?: string
  subtype?: string
  session_id?: string
  model?: string
  tools?: string[]
  is_error?: boolean
  result?: string
  duration_ms?: number
  total_cost_usd?: number
  message?: { content?: ClaudeContentBlock[] }
  [key: string]: unknown
}

function runPass(
  send: (event: string, data: unknown) => void,
  stage: string,
  prompt: string,
): Promise<void> {
  return new Promise((resolve, reject) => {
    // Honor CLAUDE_BIN override from .env; fall back to PATH lookup of `claude`.
    const claudeBin = process.env.CLAUDE_BIN?.trim() || 'claude'

    // Notes on the flags:
    //   -p / --print            headless (non-interactive) mode
    //   --output-format stream-json   newline-delimited JSON event stream
    //   --verbose               REQUIRED by Claude Code when combining the two above
    //   --allowed-tools         pre-authorise the tools the slash commands need
    // Prompt is piped via stdin to avoid Windows cmd.exe quote-mangling of the
    // embedded "hypothesis text", and to suppress claude's "no stdin in 3s" warning.
    const proc = spawn(
      claudeBin,
      [
        '-p',
        '--output-format',
        'stream-json',
        '--verbose',
        '--allowed-tools',
        ALLOWED_TOOLS,
      ],
      {
        cwd: process.cwd(),
        shell: true,
        env: process.env,
        stdio: ['pipe', 'pipe', 'pipe'],
      },
    )

    proc.stdin.end(prompt)

    let stderrBuf = ''
    let stdoutTail = '' // accumulator for the last partial line
    // Capture the final `result` event from stream-json so we can detect cases
    // where claude exits 0 but the slash command itself failed (e.g.
    // "Unknown command:" or is_error:true).
    let finalResult: ClaudeEvent | null = null

    proc.stdout.on('data', (chunk: Buffer) => {
      const text = stdoutTail + chunk.toString('utf-8')
      const lines = text.split('\n')
      // last element may be a partial line; keep it for the next chunk
      stdoutTail = lines.pop() ?? ''
      for (const line of lines) {
        const trimmed = line.trim()
        if (!trimmed) continue
        // Best-effort parse — only top-level claude events are JSON; ignore noise.
        let parsed: ClaudeEvent | null = null
        try {
          parsed = JSON.parse(trimmed) as ClaudeEvent
          if (parsed && parsed.type === 'result') {
            finalResult = parsed
          }
        } catch {
          /* not JSON — fine */
        }
        // Pipe to the dev-server terminal so devs can watch the run live.
        // (We deliberately do NOT forward this to the SSE stream — the UI
        // shows a compact stage timeline and doesn't need the raw firehose.)
        // eslint-disable-next-line no-console
        console.log(formatStreamLine(stage, parsed, trimmed))
      }
    })

    proc.stderr.on('data', (chunk: Buffer) => {
      stderrBuf += chunk.toString('utf-8')
    })

    proc.on('error', (err) => {
      send('error', { stage, message: `Failed to spawn ${claudeBin}: ${err.message}` })
      reject(err)
    })

    proc.on('close', (code) => {
      // Flush any trailing partial line.
      if (stdoutTail.trim()) {
        try {
          const parsed = JSON.parse(stdoutTail.trim()) as ClaudeEvent
          if (parsed && parsed.type === 'result') finalResult = parsed
          // eslint-disable-next-line no-console
          console.log(formatStreamLine(stage, parsed, stdoutTail.trim()))
        } catch {
          /* ignore */
        }
      }

      const stderrText = stderrBuf.trim()

      // Failure path 1: process itself exited non-zero.
      if (code !== 0) {
        // On Windows, a missing `claude` binary surfaces here (not via 'error')
        // because we run with shell:true — cmd.exe exits with a "not recognized"
        // message instead of throwing ENOENT. Detect that and give a clearer hint.
        const looksMissing =
          /is not recognized as an internal or external command/i.test(stderrText) ||
          /command not found/i.test(stderrText)

        const hint = looksMissing
          ? ' — install Claude Code with `npm install -g @anthropic-ai/claude-code` or set CLAUDE_BIN in .env to its absolute path.'
          : ''

        const msg = `${claudeBin} -p exited with code ${code}${stderrText ? `: ${stderrText}` : ''}${hint}`
        send('error', { stage, message: msg })
        reject(new Error(msg))
        return
      }

      // Failure path 2: process exited 0 but claude reported an error result.
      if (finalResult) {
        const resultText = String(finalResult.result ?? '')
        const sawUnknownCommand = /^unknown command:/i.test(resultText.trim())
        if (finalResult.is_error || sawUnknownCommand) {
          const reason = sawUnknownCommand
            ? `${resultText.trim()} — make sure the corresponding file exists in .claude/commands/ (slash commands MUST live there; .claude/skills/ flat files are not registered).`
            : resultText.trim() || 'claude returned an error result with no message'
          const msg = `${stage}: ${reason}`
          send('error', { stage, message: msg })
          reject(new Error(msg))
          return
        }
      }

      resolve()
    })
  })
}

// ─── Slug generation ────────────────────────────────────────────────────────

function generateSlug(hypothesis: string): string {
  // Use the server's LOCAL date, not UTC. The pipeline writes folders the user
  // browses on the same machine, and the slash commands' YYYY-MM-DD references
  // come from local-time `date +%Y-%m-%d` — staying in local time keeps both
  // sides aligned and prevents the boundary-night drift (e.g. Apr 25 PT → Apr
  // 26 UTC produces a folder dated tomorrow in the user's eyes).
  const now = new Date()
  const yyyy = now.getFullYear()
  const mm = String(now.getMonth() + 1).padStart(2, '0')
  const dd = String(now.getDate()).padStart(2, '0')
  const date = `${yyyy}-${mm}-${dd}`

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

// ─── Terminal pretty-printer for stream-json ─────────────────────────────────
// Each stream-json line is a fat JSON object; a raw dump is unreadable. We
// extract the most useful field per event type and emit one line per event,
// tagged with the stage name. If parsing failed (parsed is null), we fall
// back to printing the raw string verbatim.

function formatStreamLine(
  stage: string,
  parsed: ClaudeEvent | null,
  raw: string,
): string {
  const tag = `[${stage}]`
  if (!parsed || typeof parsed !== 'object') return `${tag} ${raw}`

  const t = parsed.type

  if (t === 'system' && parsed.subtype === 'init') {
    const sid = String(parsed.session_id ?? '').slice(0, 8)
    const model = parsed.model ?? '?'
    const toolCount = Array.isArray(parsed.tools) ? parsed.tools.length : 0
    return `${tag} ▶ session ${sid} model=${model} tools=${toolCount}`
  }

  if (t === 'assistant' && parsed.message?.content) {
    const blocks = parsed.message.content
    const out: string[] = []
    for (const b of blocks) {
      if (b.type === 'text' && typeof b.text === 'string') {
        const text = b.text.replace(/\s+/g, ' ').trim()
        if (text) out.push(`${tag} ${truncate(text, 240)}`)
      } else if (b.type === 'tool_use') {
        out.push(`${tag} 🔧 ${b.name ?? '?'}(${summariseToolInput(b.name, b.input)})`)
      }
    }
    return out.length > 0 ? out.join('\n') : `${tag} (assistant: empty turn)`
  }

  if (t === 'user' && parsed.message?.content) {
    const out: string[] = []
    for (const b of parsed.message.content) {
      if (b.type === 'tool_result') {
        const txt =
          typeof b.content === 'string'
            ? b.content
            : JSON.stringify(b.content)
        out.push(`${tag} ↩ ${truncate(String(txt).replace(/\s+/g, ' ').trim(), 200)}`)
      }
    }
    if (out.length > 0) return out.join('\n')
  }

  if (t === 'result') {
    const dur =
      typeof parsed.duration_ms === 'number'
        ? `${(parsed.duration_ms / 1000).toFixed(1)}s`
        : ''
    const cost =
      typeof parsed.total_cost_usd === 'number'
        ? `$${parsed.total_cost_usd.toFixed(4)}`
        : ''
    const status = parsed.is_error ? '✗' : '✓'
    const msg = parsed.result ? ` — ${truncate(String(parsed.result), 200)}` : ''
    return `${tag} ${status} ${dur} ${cost}${msg}`.replace(/\s+/g, ' ').trim()
  }

  return `${tag} ${t ?? 'event'} ${truncate(JSON.stringify(parsed), 200)}`
}

function summariseToolInput(name: string | undefined, input: unknown): string {
  if (!input || typeof input !== 'object') return ''
  const obj = input as Record<string, unknown>

  switch (name) {
    case 'Bash':
      return truncate(String(obj.command ?? ''), 120)
    case 'Read':
    case 'Write':
    case 'Edit':
      return String(obj.file_path ?? obj.path ?? '')
    case 'WebFetch':
      return String(obj.url ?? '')
    case 'WebSearch':
      return truncate(String(obj.query ?? ''), 120)
    case 'Glob':
      return truncate(String(obj.pattern ?? obj.glob_pattern ?? ''), 80)
    case 'Grep':
      return truncate(String(obj.pattern ?? ''), 80)
    default: {
      const keys = Object.keys(obj)
      if (keys.length === 0) return ''
      const k = keys[0]
      return `${k}=${truncate(JSON.stringify(obj[k]), 80)}`
    }
  }
}

function truncate(s: string, n: number): string {
  return s.length > n ? `${s.slice(0, n)}…` : s
}
