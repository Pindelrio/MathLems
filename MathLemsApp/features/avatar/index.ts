// Public API of the avatar feature — import from here, not from internals
export { useAvatarStore } from './store/avatarStore';
export { AVATAR_BASES, getAvatarBase } from './data/bases';
export { AVATAR_ITEMS, getItem } from './data/items';
export { composeAvatar, isItemUnlocked } from './engine/composer';
export { default as AvatarRenderer } from './components/AvatarRenderer';
export { default as AvatarEditor } from './components/AvatarEditor';
export type {
  AvatarBase, AvatarItem, AvatarSlot, AvatarSVGProps,
  EquippedItems, ComposedAvatar, ItemRarity, UnlockCondition,
} from './engine/types';
