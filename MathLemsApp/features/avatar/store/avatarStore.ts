import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { EquippedItems, AvatarSlot } from '../engine/types';

interface AvatarState {
  /** Which avatar base is selected */
  baseId: string;
  /** Items currently equipped per slot */
  equipped: EquippedItems;

  setBase: (baseId: string) => void;
  equipItem: (slot: AvatarSlot, itemId: string) => void;
  unequipItem: (slot: AvatarSlot) => void;
  reset: () => void;
}

const DEFAULT: Pick<AvatarState, 'baseId' | 'equipped'> = {
  baseId: 'wizard',
  equipped: {},
};

export const useAvatarStore = create<AvatarState>()(
  persist(
    (set) => ({
      ...DEFAULT,

      setBase: (baseId) => set({ baseId }),

      equipItem: (slot, itemId) =>
        set((s) => ({ equipped: { ...s.equipped, [slot]: itemId } })),

      unequipItem: (slot) =>
        set((s) => {
          const next = { ...s.equipped };
          delete next[slot];
          return { equipped: next };
        }),

      reset: () => set(DEFAULT),
    }),
    {
      name: 'mathlems-avatar',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
