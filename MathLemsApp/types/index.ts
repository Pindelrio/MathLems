export type Operation = 'sum' | 'sub' | 'mul' | 'div';

export interface Answer {
  content: string;
  isCorrect: boolean;
}

export interface Problem {
  id: number;
  worldId: number;
  statement: string;
  answers: Answer[];
}

export interface WorldDef {
  id: number;
  name: string;
  subtitle: string;
  theme: 'pirate' | 'forest' | 'cave';
  operations: Operation[];
  bgColor: string;
  accentColor: string;
  emoji: string;
}

export interface WorldProgress {
  completed: boolean;
  score: number;
  badge?: string;
  bestScore?: number;
}

export interface Player {
  name: string;
  avatarId: string;
  unlockedItems: string[];
  badges: string[];
  totalScore: number;
}

export interface RewardItem {
  id: string;
  name: string;
  emoji: string;
  points: number;
  worldIds: number[];
}

export interface BonusItem {
  id: string;
  name: string;
  emoji: string;
  effect: 'extra_life' | 'score_multiplier' | 'cosmetic';
  streakRequired: number;
}
