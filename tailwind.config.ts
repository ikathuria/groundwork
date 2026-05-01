import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gw: {
          bg:          '#faf8f2',
          surface:     '#f0ece0',
          border:      '#ddd5c4',
          text:        '#1a1208',
          muted:       '#7a6f62',
          subtle:      '#5c5347',
          accent:      '#2a5f45',
          'accent-lt': '#e6efe9',
          warn:        '#8b1a2a',
          'warn-lt':   '#f5e8ea',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body:    ['Source Serif 4', 'Georgia', 'serif'],
        mono:    ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
