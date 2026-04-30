import type { ResearchBrief } from './plan-schema'

const STORAGE_KEY = 'groundwork:plan'

export function storePlan(plan: ResearchBrief) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(plan))
  } catch (err) {
    console.warn('[load-plan] Failed to write sessionStorage:', err)
  }
}

export function readPlan(): ResearchBrief | null {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw) as ResearchBrief
  } catch (err) {
    console.warn('[load-plan] Failed to read sessionStorage:', err)
    return null
  }
}

export function clearPlan() {
  try {
    sessionStorage.removeItem(STORAGE_KEY)
  } catch {}
}
