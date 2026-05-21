import { WorldDef } from '@/types';
import { COLORS } from '@/constants/theme';

export const WORLDS: WorldDef[] = [
  {
    id: 1,
    name: 'Illes Pirates',
    subtitle: 'Sumes i Restes',
    theme: 'pirate',
    operations: ['sum', 'sub'],
    bgColor: COLORS.worlds.pirate.bg,
    accentColor: COLORS.worlds.pirate.accent,
    emoji: '🏴‍☠️',
  },
  {
    id: 2,
    name: 'Bosc Màgic',
    subtitle: 'Sumes, Restes i Multiplicacions',
    theme: 'forest',
    operations: ['sum', 'sub', 'mul'],
    bgColor: COLORS.worlds.forest.bg,
    accentColor: COLORS.worlds.forest.accent,
    emoji: '🌲',
  },
  {
    id: 3,
    name: 'Cova del Drac',
    subtitle: 'Sumes, Restes, × i ÷',
    theme: 'cave',
    operations: ['sum', 'sub', 'mul', 'div'],
    bgColor: COLORS.worlds.cave.bg,
    accentColor: COLORS.worlds.cave.accent,
    emoji: '🐉',
  },
];
