import { RewardItem, BonusItem } from '@/types';

export const REWARDS: RewardItem[] = [
  // Món 1 – elements clàssics
  { id: 'meat',    name: 'Cuixa de Carn',  emoji: '🍖', points: 50,  worldIds: [1] },
  { id: 'fish',    name: 'Peix Gros',      emoji: '🐟', points: 30,  worldIds: [1] },
  // Móns 2 i 3 – elements màgics
  { id: 'crystal', name: 'Cristall de Foc',emoji: '💎', points: 100, worldIds: [2, 3] },
  { id: 'flame',   name: 'Flama Flotant',  emoji: '🔥', points: 75,  worldIds: [2, 3] },
  { id: 'ember',   name: 'Carbonsença',    emoji: '🪨', points: 40,  worldIds: [2, 3] },
];

export const BONUS_ITEMS: BonusItem[] = [
  { id: 'waffle',  name: 'Gofre Daurat',  emoji: '🧇', effect: 'score_multiplier', streakRequired: 3 },
  { id: 'egg',     name: 'Ou de Drac',    emoji: '🥚', effect: 'extra_life',        streakRequired: 3 },
  { id: 'chest',   name: 'Cofre de Gemmes',emoji:'💰', effect: 'cosmetic',          streakRequired: 3 },
];

export function getRewardForWorld(worldId: number): RewardItem {
  const worldRewards = REWARDS.filter((r) => r.worldIds.includes(worldId));
  return worldRewards[Math.floor(Math.random() * worldRewards.length)];
}
