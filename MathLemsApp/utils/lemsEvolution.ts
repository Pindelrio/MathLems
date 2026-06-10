// Punts mínims per arribar a cada estadi (1-5)
export const EVOLUTION_THRESHOLDS = [0, 200, 600, 1200, 2000] as const;

export const LEMS_STAGE_IMAGES = [
  require('@/assets/lems-stage1.png'),
  require('@/assets/lems-stage2.png'),
  require('@/assets/lems-stage3.png'),
  require('@/assets/lems-stage4.png'),
  require('@/assets/lems-stage5.png'),
] as const;

export function getLemsStage(totalScore: number): 1 | 2 | 3 | 4 | 5 {
  for (let i = EVOLUTION_THRESHOLDS.length - 1; i >= 0; i--) {
    if (totalScore >= EVOLUTION_THRESHOLDS[i]) return (i + 1) as 1 | 2 | 3 | 4 | 5;
  }
  return 1;
}

export function getLemsImage(totalScore: number) {
  return LEMS_STAGE_IMAGES[getLemsStage(totalScore) - 1];
}

// Punts que falten per al proper estadi (null si ja és màxim)
export function pointsToNextStage(totalScore: number): number | null {
  const stage = getLemsStage(totalScore);
  if (stage === 5) return null;
  return EVOLUTION_THRESHOLDS[stage] - totalScore;
}
