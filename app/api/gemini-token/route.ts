import { GoogleGenAI } from '@google/genai'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// Mints a short-lived Gemini Live auth token so the browser can connect
// directly to Gemini without exposing the API key. The token is single-use
// and expires shortly after creation.
//
// IMPORTANT: Google's `authTokens.create` (v1alpha auth_tokens) is currently
// broken for the new-format `AQ.xxx` API keys — every call returns
// `400 INVALID_ARGUMENT`. Only legacy `AIzaSy…` keys can mint ephemeral
// tokens today. We therefore detect the key format up front and return a
// graceful fallback signal (`{ token: null, reason }`) so the client can
// transparently use `NEXT_PUBLIC_GEMINI_API_KEY` instead. Either way the
// route always responds with HTTP 200 so the browser doesn't surface a
// scary 500 in the console for a known-unsupported configuration.
//
// Refs:
//   - https://discuss.ai.google.dev/t/authtokens-create-fails-with-invalid-argument-for-new-format-api-keys-aq-xxx-but-works-with-legacy-keys-aizasy/141135
export async function POST() {
  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    return Response.json(
      { token: null, reason: 'missing-server-key' },
      { status: 200 },
    )
  }

  // Skip the doomed mint for the new-format keys — saves a round-trip and
  // keeps the server log quiet.
  if (apiKey.startsWith('AQ.')) {
    return Response.json(
      {
        token: null,
        reason: 'aq-key-unsupported',
        message:
          'Ephemeral tokens are not yet supported for AQ.* API keys; falling back to direct key.',
      },
      { status: 200 },
    )
  }

  const ai = new GoogleGenAI({
    apiKey,
    httpOptions: { apiVersion: 'v1alpha' },
  })

  try {
    const now = Date.now()
    const token = await ai.authTokens.create({
      config: {
        uses: 1,
        expireTime: new Date(now + 30 * 60 * 1000).toISOString(),
        newSessionExpireTime: new Date(now + 1 * 60 * 1000).toISOString(),
        httpOptions: { apiVersion: 'v1alpha' },
      },
    })
    return Response.json({ token: token.name, reason: 'ok' })
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Unknown error'
    console.warn('[gemini-token] mint failed, falling back to direct key:', msg)
    return Response.json(
      { token: null, reason: 'mint-failed', message: msg },
      { status: 200 },
    )
  }
}
