import Anthropic from '@anthropic-ai/sdk'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

const client = new Anthropic()

const SYSTEM_PROMPT = `You are a lab assistant helping a scientist run an experiment in real time.
You have full knowledge of the current protocol step and any known failure points.

Your role:
- Answer questions about the current step concisely and practically
- If the user is having trouble, diagnose the likely cause and give a specific fix
- If they ask about safety, be clear and direct
- Keep responses under 3 sentences — they are reading this in a lab environment
- If a failure point was noted, address it proactively when relevant
- Never speculate beyond the scientific evidence — if unsure, say so`

export async function POST(req: NextRequest) {
  const { query, stepContext } = await req.json()

  if (!query || !stepContext) {
    return new Response('Missing query or stepContext', { status: 400 })
  }

  const stream = await client.messages.stream({
    model: 'claude-sonnet-4-6',
    max_tokens: 256,
    system: SYSTEM_PROMPT,
    messages: [
      {
        role: 'user',
        content: `${stepContext}\n\nScientist's question: ${query}`,
      },
    ],
  })

  // Stream SSE back to the client
  const encoder = new TextEncoder()
  const readable = new ReadableStream({
    async start(controller) {
      try {
        for await (const event of stream) {
          if (
            event.type === 'content_block_delta' &&
            event.delta.type === 'text_delta'
          ) {
            const data = JSON.stringify({ delta: event.delta.text })
            controller.enqueue(encoder.encode(`data: ${data}\n\n`))
          }
        }
        controller.enqueue(encoder.encode('data: [DONE]\n\n'))
      } catch (err) {
        controller.error(err)
      } finally {
        controller.close()
      }
    },
  })

  return new Response(readable, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    },
  })
}
