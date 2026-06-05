export type AvatarSlot = 'hat' | 'glasses' | 'beard' | 'accessory';

export type ItemRarity = 'common' | 'rare' | 'epic';

export type UnlockCondition =
  | { type: 'free' }
  | { type: 'world'; worldId: number }
  | { type: 'score'; points: number }
  | { type: 'item'; itemId: string };

export interface AvatarBase {
  id: string;
  name: string;
  /** SVG component factory — each base exports its own SVG */
  Component: React.ComponentType<AvatarSVGProps>;
}

export interface AvatarItem {
  id: string;
  name: string;
  slot: AvatarSlot;
  rarity: ItemRarity;
  unlock: UnlockCondition;
  /** SVG overlay component for this item */
  Component: React.ComponentType<AvatarSVGProps>;
}

export interface AvatarSVGProps {
  size: number;
  /** Base skin/accent color, passed down so items can match the base palette */
  primaryColor?: string;
  secondaryColor?: string;
}

export interface EquippedItems {
  hat?: string;
  glasses?: string;
  beard?: string;
  accessory?: string;
}

export interface ComposedAvatar {
  base: AvatarBase;
  layers: { slot: AvatarSlot; item: AvatarItem }[];
}
