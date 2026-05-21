import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Player } from '@/types';

interface PlayerState extends Player {
  isOnboarded: boolean;
  setName: (name: string) => void;
  setAvatar: (avatarId: string) => void;
  addBadge: (badge: string) => void;
  addItem: (itemId: string) => void;
  addScore: (points: number) => void;
  completeOnboarding: () => void;
  reset: () => void;
}

const DEFAULT_PLAYER: Player = {
  name: '',
  avatarId: 'wizard',
  unlockedItems: [],
  badges: [],
  totalScore: 0,
};

export const usePlayerStore = create<PlayerState>()(
  persist(
    (set) => ({
      ...DEFAULT_PLAYER,
      isOnboarded: false,

      setName: (name) => set({ name }),
      setAvatar: (avatarId) => set({ avatarId }),
      addBadge: (badge) =>
        set((s) => ({
          badges: s.badges.includes(badge) ? s.badges : [...s.badges, badge],
        })),
      addItem: (itemId) =>
        set((s) => ({
          unlockedItems: s.unlockedItems.includes(itemId)
            ? s.unlockedItems
            : [...s.unlockedItems, itemId],
        })),
      addScore: (points) => set((s) => ({ totalScore: s.totalScore + points })),
      completeOnboarding: () => set({ isOnboarded: true }),
      reset: () => set({ ...DEFAULT_PLAYER, isOnboarded: false }),
    }),
    {
      name: 'mathlems-player',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
