import { WorldDef } from '@/types';

export const LEMS_WORLDS: WorldDef[] = [
  {
    id: 4,
    name: 'Mar dels Problemes',
    subtitle: 'Suma o Resta?',
    theme: 'pirate',
    operations: ['sum', 'sub'],
    bgColor: '#0A1F4A',
    accentColor: '#60A5FA',
    emoji: '⛵',
  },
  {
    id: 5,
    name: 'Selva dels Enigmes',
    subtitle: 'Suma, Resta o Multiplicació?',
    theme: 'forest',
    operations: ['sum', 'sub', 'mul'],
    bgColor: '#061C10',
    accentColor: '#34D399',
    emoji: '🌴',
  },
  {
    id: 6,
    name: 'Cova dels Misteris',
    subtitle: 'Quina operació cal fer?',
    theme: 'cave',
    operations: ['sum', 'sub', 'mul', 'div'],
    bgColor: '#1A0B2E',
    accentColor: '#A78BFA',
    emoji: '🔮',
  },
];
