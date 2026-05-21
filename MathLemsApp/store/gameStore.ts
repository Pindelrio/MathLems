import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { WorldProgress } from '@/types';

const MAX_LIVES = 5;

interface GameState {
  worldProgress: Record<number, WorldProgress>;
  currentWorldId: number | null;
  currentQuestionIndex: number;
  lives: number;
  streak: number;
  sessionScore: number;
  collectedItems: string[];

  startWorld: (worldId: number) => void;
  answerCorrect: (points: number) => void;
  answerWrong: () => void;
  nextQuestion: () => void;
  completeWorld: (worldId: number, score: number, badge: string) => void;
  addCollectedItem: (itemId: string) => void;
  resetSession: () => void;
  isWorldUnlocked: (worldId: number) => boolean;
}

export const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      worldProgress: {},
      currentWorldId: null,
      currentQuestionIndex: 0,
      lives: MAX_LIVES,
      streak: 0,
      sessionScore: 0,
      collectedItems: [],

      startWorld: (worldId) =>
        set({
          currentWorldId: worldId,
          currentQuestionIndex: 0,
          lives: MAX_LIVES,
          streak: 0,
          sessionScore: 0,
          collectedItems: [],
        }),

      answerCorrect: (points) =>
        set((s) => ({
          streak: s.streak + 1,
          sessionScore: s.sessionScore + points,
        })),

      answerWrong: () =>
        set((s) => ({
          streak: 0,
          lives: Math.max(0, s.lives - 1),
        })),

      nextQuestion: () =>
        set((s) => ({ currentQuestionIndex: s.currentQuestionIndex + 1 })),

      completeWorld: (worldId, score, badge) =>
        set((s) => {
          const existing = s.worldProgress[worldId];
          return {
            worldProgress: {
              ...s.worldProgress,
              [worldId]: {
                completed: true,
                score,
                badge,
                bestScore: Math.max(score, existing?.bestScore ?? 0),
              },
            },
          };
        }),

      addCollectedItem: (itemId) =>
        set((s) => ({
          collectedItems: s.collectedItems.includes(itemId)
            ? s.collectedItems
            : [...s.collectedItems, itemId],
        })),

      resetSession: () =>
        set({
          currentWorldId: null,
          currentQuestionIndex: 0,
          lives: MAX_LIVES,
          streak: 0,
          sessionScore: 0,
          collectedItems: [],
        }),

      isWorldUnlocked: (worldId) => {
        if (worldId === 1) return true;
        const prev = get().worldProgress[worldId - 1];
        return prev?.completed === true;
      },
    }),
    {
      name: 'mathlems-game',
      storage: createJSONStorage(() => AsyncStorage),
      // Only persist world progress, not session state
      partialize: (s) => ({ worldProgress: s.worldProgress }),
    }
  )
);
