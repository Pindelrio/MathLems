import { AvatarBase, AvatarItem, AvatarSlot, ComposedAvatar, EquippedItems } from './types';

const SLOT_Z_ORDER: AvatarSlot[] = ['beard', 'glasses', 'hat', 'accessory'];

export function composeAvatar(
  base: AvatarBase,
  equippedItems: EquippedItems,
  allItems: AvatarItem[],
): ComposedAvatar {
  const layers: ComposedAvatar['layers'] = [];

  for (const slot of SLOT_Z_ORDER) {
    const itemId = equippedItems[slot];
    if (!itemId) continue;
    const item = allItems.find((i) => i.id === itemId);
    if (item) layers.push({ slot, item });
  }

  return { base, layers };
}

export function isItemUnlocked(
  item: AvatarItem,
  unlockedItemIds: string[],
  completedWorldIds: number[],
  totalScore: number,
): boolean {
  const { unlock } = item;
  switch (unlock.type) {
    case 'free':    return true;
    case 'world':   return completedWorldIds.includes(unlock.worldId);
    case 'score':   return totalScore >= unlock.points;
    case 'item':    return unlockedItemIds.includes(unlock.itemId);
  }
}
