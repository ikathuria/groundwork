FROM node:20-slim AS base

# poppler-utils provides pdftotext (used by Pass 1 for PDF fallback)
# curl is used by the Pass 1 skill for parallel downloads
RUN apt-get update && apt-get install -y --no-install-recommends \
    poppler-utils \
    curl \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Install Claude Code CLI globally — the pipeline spawns `claude -p` as a subprocess
RUN npm install -g @anthropic-ai/claude-code

WORKDIR /app

# ── deps ──────────────────────────────────────────────────────────────────────
FROM base AS deps
COPY package.json package-lock.json* ./
RUN npm ci

# ── builder ───────────────────────────────────────────────────────────────────
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ── runner ────────────────────────────────────────────────────────────────────
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Copy the standalone Next.js build
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Copy Claude skills and commands — needed at runtime by the pipeline subprocess
COPY --from=builder /app/.claude ./.claude

# hypotheses/ is mounted as a Railway persistent volume at runtime.
# Create an empty dir so the app starts cleanly if the volume isn't attached yet.
RUN mkdir -p /app/hypotheses

EXPOSE 3000

CMD ["node", "server.js"]
