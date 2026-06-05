import WizardSVG from '../svg/bases/WizardSVG';
import WitchSVG from '../svg/bases/WitchSVG';
import KnightSVG from '../svg/bases/KnightSVG';
import ElfSVG from '../svg/bases/ElfSVG';
import MonsterSVG from '../svg/bases/MonsterSVG';
import DragonSVG from '../svg/bases/DragonSVG';
import HumanBoySVG from '../svg/bases/HumanBoySVG';
import HumanGirlSVG from '../svg/bases/HumanGirlSVG';
import RobotSVG from '../svg/bases/RobotSVG';
import AlienSVG from '../svg/bases/AlienSVG';
import { AvatarBase } from '../engine/types';

export const AVATAR_BASES: AvatarBase[] = [
  { id: 'wizard',     name: 'Mag',       Component: WizardSVG },
  { id: 'witch',      name: 'Bruixa',    Component: WitchSVG },
  { id: 'knight',     name: 'Cavaller',  Component: KnightSVG },
  { id: 'elf',        name: 'Elfa',      Component: ElfSVG },
  { id: 'monster',    name: 'Monstre',   Component: MonsterSVG },
  { id: 'dragon',     name: 'Drac',      Component: DragonSVG },
  { id: 'human_boy',  name: 'Noi',       Component: HumanBoySVG },
  { id: 'human_girl', name: 'Noia',      Component: HumanGirlSVG },
  { id: 'robot',      name: 'Robot',     Component: RobotSVG },
  { id: 'alien',      name: 'Alienígena',Component: AlienSVG },
];

export function getAvatarBase(id: string): AvatarBase {
  return AVATAR_BASES.find((b) => b.id === id) ?? AVATAR_BASES[0];
}
