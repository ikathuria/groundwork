export type LabObjectName =
  | 'bench'
  | 'beaker1'
  | 'beaker2'
  | 'beaker3'
  | 'pipette'
  | 'hotplate'
  | 'tubes'
  | 'none'

export interface ExperimentStep {
  id: number
  title: string
  instruction: string
  detail: string
  focusObject: LabObjectName
  animation?: 'pipette-transfer' | 'heat' | 'mix' | 'observe' | 'measure'
  isFailurePoint?: boolean
  failureWarning?: string
  failureFrequency?: string
  duration?: string // e.g. "30 seconds", "5 minutes"
  reagents?: string[]
}

export interface ExperimentPlan {
  title: string
  hypothesis: string
  domain: string
  totalDuration: string
  steps: ExperimentStep[]
}

// Sample experiment: FITC-dextran gut permeability assay
export const SAMPLE_EXPERIMENT: ExperimentPlan = {
  title: 'Intestinal Permeability Assessment',
  hypothesis:
    'L. rhamnosus GG supplementation for 4 weeks reduces intestinal permeability by ≥30% vs controls, measured by FITC-dextran assay.',
  domain: 'Gut Health',
  totalDuration: '6–8 hours (assay day)',
  steps: [
    {
      id: 1,
      title: 'Prepare FITC-Dextran Solution',
      instruction: 'Prepare 80mg/mL FITC-dextran (4kDa) in sterile PBS.',
      detail:
        'Weigh 80mg FITC-dextran (Sigma FD4) into the amber beaker. Add 1mL sterile PBS. Vortex until fully dissolved. Protect from light — wrap beaker in foil after mixing.',
      focusObject: 'beaker1',
      reagents: ['FITC-dextran 4kDa (Sigma FD4)', 'Sterile PBS (pH 7.4)'],
      duration: '5 minutes',
      isFailurePoint: true,
      failureWarning: 'Aggregation risk at this concentration',
      failureFrequency: '~22% of replications',
    },
    {
      id: 2,
      title: 'Prepare Standards Curve',
      instruction: 'Prepare 8-point dilution series (0–100 µg/mL) in PBS.',
      detail:
        'Transfer 200µL of stock to tube 1. Serial dilute 1:1 across 7 tubes using the pipette. Tube 8 is PBS blank. Label each tube clearly.',
      focusObject: 'tubes',
      animation: 'pipette-transfer',
      reagents: ['FITC-dextran stock', 'PBS'],
      duration: '10 minutes',
    },
    {
      id: 3,
      title: 'Gavage Administration',
      instruction: 'Administer 0.6mL FITC-dextran solution per mouse by oral gavage.',
      detail:
        'Use a 20-gauge ball-tip gavage needle. Restrain mouse gently — do not compress thorax. Insert needle along the roof of the mouth, advance to stomach. Slow steady injection. Confirm no resistance.',
      focusObject: 'pipette',
      animation: 'measure',
      duration: '2–3 minutes per animal',
      isFailurePoint: true,
      failureWarning: 'Aspiration into lungs causes immediate mortality',
      failureFrequency: '~8% without prior training',
    },
    {
      id: 4,
      title: 'Incubation Period',
      instruction: 'Return mice to cages. Wait 4 hours. Maintain 37°C room temperature.',
      detail:
        'Set timer for 4 hours. Do not disturb animals during this period. Dim lighting to reduce stress. Monitor for any signs of distress every 30 minutes.',
      focusObject: 'hotplate',
      animation: 'heat',
      duration: '4 hours',
    },
    {
      id: 5,
      title: 'Blood Collection',
      instruction: 'Collect 200µL blood via cardiac puncture under isoflurane anaesthesia.',
      detail:
        'Anaesthetise with 2% isoflurane. Expose thorax. Insert 25G needle into left ventricle. Withdraw slowly. Transfer immediately to EDTA tube. Keep on ice.',
      focusObject: 'tubes',
      animation: 'measure',
      duration: '3–5 minutes per animal',
      isFailurePoint: true,
      failureWarning: 'Haemolysis will interfere with fluorescence reading',
      failureFrequency: '~15% with improper technique',
    },
    {
      id: 6,
      title: 'Plasma Preparation',
      instruction: 'Centrifuge at 1,000g for 10 minutes at 4°C. Collect plasma supernatant.',
      detail:
        'Load EDTA tubes into centrifuge (balance opposite tubes). Set 1,000g, 10 min, 4°C. Remove carefully — do not disturb pellet. Transfer 100µL plasma to a new tube using the pipette.',
      focusObject: 'pipette',
      animation: 'pipette-transfer',
      duration: '15 minutes',
    },
    {
      id: 7,
      title: 'Fluorescence Measurement',
      instruction: 'Read plasma at Ex485/Em528nm on plate reader.',
      detail:
        'Add 100µL plasma and standards to 96-well black plate (black walls reduce scatter). Cover with foil. Read immediately — FITC bleaches under prolonged light exposure. Record raw fluorescence units.',
      focusObject: 'beaker2',
      animation: 'observe',
      duration: '20 minutes',
      isFailurePoint: true,
      failureWarning: 'FITC photobleaches rapidly — read within 30 min of plating',
      failureFrequency: '~30% lose signal quality after 1 hour',
    },
    {
      id: 8,
      title: 'Calculate Permeability',
      instruction: 'Interpolate plasma FITC-dextran concentration from standard curve.',
      detail:
        'Plot standards as fluorescence vs concentration. Fit linear regression (R² > 0.98 required). Interpolate sample values. Express as µg/mL FITC-dextran in plasma. Compare treated vs control groups by unpaired t-test (p < 0.05).',
      focusObject: 'beaker3',
      animation: 'observe',
      duration: '30 minutes',
    },
  ],
}

// Utility: get step failure context for Claude
export function getStepContext(plan: ExperimentPlan, stepIndex: number): string {
  const step = plan.steps[stepIndex]
  return `
Experiment: ${plan.title}
Hypothesis: ${plan.hypothesis}
Current Step (${step.id}/${plan.steps.length}): ${step.title}
Instruction: ${step.instruction}
Detail: ${step.detail}
${step.isFailurePoint ? `⚠️ Known failure point: ${step.failureWarning} (occurs in ${step.failureFrequency})` : ''}
${step.reagents ? `Reagents: ${step.reagents.join(', ')}` : ''}
  `.trim()
}
