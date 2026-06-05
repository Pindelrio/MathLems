import PirateHatSVG from '../svg/items/PirateHatSVG';
import FlowerCrownSVG from '../svg/items/FlowerCrownSVG';
import RoundGlassesSVG from '../svg/items/RoundGlassesSVG';
import StarGlassesSVG from '../svg/items/StarGlassesSVG';
import WizardBeardSVG from '../svg/items/WizardBeardSVG';
import DragonScarveSVG from '../svg/items/DragonScarveSVG';
// Hats
import MortarboardSVG from '../svg/items/MortarboardSVG';
import CrownSVG from '../svg/items/CrownSVG';
import CowboyHatSVG from '../svg/items/CowboyHatSVG';
import BeanieHatSVG from '../svg/items/BeanieHatSVG';
// Glasses
import RectangularGlassesSVG from '../svg/items/RectangularGlassesSVG';
import CatEyeGlassesSVG from '../svg/items/CatEyeGlassesSVG';
import SunglassesSVG from '../svg/items/SunglassesSVG';
import HeartGlassesSVG from '../svg/items/HeartGlassesSVG';
// Beards
import GoateeSVG from '../svg/items/GoateeSVG';
import ThinMustacheSVG from '../svg/items/ThinMustacheSVG';
import CurledMustacheSVG from '../svg/items/CurledMustacheSVG';
import FullBeardSVG from '../svg/items/FullBeardSVG';
// Accessories
import BowtieSVG from '../svg/items/BowtieSVG';
import StarNecklaceSVG from '../svg/items/StarNecklaceSVG';
import CapeAccessorySVG from '../svg/items/CapeAccessorySVG';
import { AvatarItem } from '../engine/types';

export const AVATAR_ITEMS: AvatarItem[] = [
  // ── Hats ─────────────────────────────────────────────────
  {
    id: 'hat_pirate',
    name: 'Barret Pirata',
    slot: 'hat',
    rarity: 'common',
    unlock: { type: 'world', worldId: 1 },
    Component: PirateHatSVG,
  },
  {
    id: 'hat_flower_crown',
    name: 'Corona de Flors',
    slot: 'hat',
    rarity: 'rare',
    unlock: { type: 'world', worldId: 2 },
    Component: FlowerCrownSVG,
  },
  {
    id: 'hat_mortarboard',
    name: 'Birret',
    slot: 'hat',
    rarity: 'rare',
    unlock: { type: 'score', points: 300 },
    Component: MortarboardSVG,
  },
  {
    id: 'hat_crown',
    name: 'Corona Reial',
    slot: 'hat',
    rarity: 'epic',
    unlock: { type: 'score', points: 800 },
    Component: CrownSVG,
  },
  {
    id: 'hat_cowboy',
    name: 'Barret Vaquero',
    slot: 'hat',
    rarity: 'common',
    unlock: { type: 'world', worldId: 1 },
    Component: CowboyHatSVG,
  },
  {
    id: 'hat_beanie',
    name: 'Gorra de Llana',
    slot: 'hat',
    rarity: 'common',
    unlock: { type: 'free' },
    Component: BeanieHatSVG,
  },

  // ── Glasses ──────────────────────────────────────────────
  {
    id: 'glasses_round',
    name: 'Ulleres Rodones',
    slot: 'glasses',
    rarity: 'common',
    unlock: { type: 'free' },
    Component: RoundGlassesSVG,
  },
  {
    id: 'glasses_star',
    name: 'Ulleres Estrella',
    slot: 'glasses',
    rarity: 'epic',
    unlock: { type: 'score', points: 500 },
    Component: StarGlassesSVG,
  },
  {
    id: 'glasses_rectangular',
    name: 'Ulleres Rectangulars',
    slot: 'glasses',
    rarity: 'common',
    unlock: { type: 'free' },
    Component: RectangularGlassesSVG,
  },
  {
    id: 'glasses_cat_eye',
    name: 'Ulleres Ull de Gat',
    slot: 'glasses',
    rarity: 'rare',
    unlock: { type: 'world', worldId: 2 },
    Component: CatEyeGlassesSVG,
  },
  {
    id: 'glasses_sunglasses',
    name: 'Ulleres de Sol',
    slot: 'glasses',
    rarity: 'rare',
    unlock: { type: 'score', points: 200 },
    Component: SunglassesSVG,
  },
  {
    id: 'glasses_heart',
    name: 'Ulleres de Cor',
    slot: 'glasses',
    rarity: 'common',
    unlock: { type: 'free' },
    Component: HeartGlassesSVG,
  },

  // ── Beards & Mustaches ───────────────────────────────────
  {
    id: 'beard_wizard',
    name: 'Barba de Mag',
    slot: 'beard',
    rarity: 'rare',
    unlock: { type: 'world', worldId: 1 },
    Component: WizardBeardSVG,
  },
  {
    id: 'beard_goatee',
    name: 'Perilla',
    slot: 'beard',
    rarity: 'common',
    unlock: { type: 'free' },
    Component: GoateeSVG,
  },
  {
    id: 'beard_thin_mustache',
    name: 'Bigoti Prim',
    slot: 'beard',
    rarity: 'common',
    unlock: { type: 'world', worldId: 1 },
    Component: ThinMustacheSVG,
  },
  {
    id: 'beard_curled_mustache',
    name: 'Bigoti de Puntes',
    slot: 'beard',
    rarity: 'rare',
    unlock: { type: 'world', worldId: 2 },
    Component: CurledMustacheSVG,
  },
  {
    id: 'beard_full',
    name: 'Barba Completa',
    slot: 'beard',
    rarity: 'rare',
    unlock: { type: 'score', points: 400 },
    Component: FullBeardSVG,
  },

  // ── Accessories ──────────────────────────────────────────
  {
    id: 'acc_dragon_scarve',
    name: 'Bufanda Drac',
    slot: 'accessory',
    rarity: 'epic',
    unlock: { type: 'world', worldId: 3 },
    Component: DragonScarveSVG,
  },
  {
    id: 'acc_bowtie',
    name: 'Pajarita',
    slot: 'accessory',
    rarity: 'common',
    unlock: { type: 'free' },
    Component: BowtieSVG,
  },
  {
    id: 'acc_star_necklace',
    name: 'Collar d\'Estrella',
    slot: 'accessory',
    rarity: 'rare',
    unlock: { type: 'score', points: 350 },
    Component: StarNecklaceSVG,
  },
  {
    id: 'acc_cape',
    name: 'Capa Màgica',
    slot: 'accessory',
    rarity: 'epic',
    unlock: { type: 'world', worldId: 2 },
    Component: CapeAccessorySVG,
  },
];

export function getItem(id: string): AvatarItem | undefined {
  return AVATAR_ITEMS.find((i) => i.id === id);
}
