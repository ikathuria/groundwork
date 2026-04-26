import { GoogleGenAI } from '@google/genai'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// Mints a short-lived Gemini Live auth token so the browser can connect
// directly to Gemini without exposing the API key. The token is single-use
// and expires shortly after creation.
export async function POST() {
  if (!process.env.GEMINI_API_KEY) {
    return new Response('Missing GEMINI_API_KEY', { status: 500 })
  }

  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: { apiVersion: 'v1alpha' },
  })

  try {
    const now = Date.now()
    // Per the official google-gemini/gemini-live-api-examples repo, the
    // create config must ALSO carry httpOptions.apiVersion = 'v1alpha'
    // (in addition to the client-level setting) — auth_tokens is v1alpha-only
    // and the request needs the version on both layers.
    const token = await ai.authTokens.create({
      config: {
        uses: 1,
        expireTime: new Date(now + 30 * 60 * 1000).toISOString(),
        newSessionExpireTime: new Date(now + 1 * 60 * 1000).toISOString(),
        httpOptions: { apiVersion: 'v1alpha' },
      },
    })
    return Response.json({ token: token.name })
  } catch (err) {
    console.error('authTokens.create failed:', err)
    const msg = err instanceof Error ? err.message : 'Unknown error'
    return new Response(`Token mint failed: ${msg}`, { status: 500 })
  }
}
