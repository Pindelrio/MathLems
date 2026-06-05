import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { AvatarSVGProps } from '../../engine/types';

export default function HeartGlassesSVG({ size }: AvatarSVGProps) {
  const s = size;
  return (
    <Svg width={s} height={s} viewBox="0 0 100 100">
      {/* Left heart lens */}
      <Path d="M37 48 Q28 44 28 38 Q28 33 33 33 Q36 33 37 36 Q38 33 41 33 Q46 33 46 38 Q46 44 37 48 Z"
        fill="#F472B6" opacity="0.5" stroke="#BE185D" strokeWidth="1.8" />
      {/* Right heart lens */}
      <Path d="M63 48 Q54 44 54 38 Q54 33 59 33 Q62 33 63 36 Q64 33 67 33 Q72 33 72 38 Q72 44 63 48 Z"
        fill="#F472B6" opacity="0.5" stroke="#BE185D" strokeWidth="1.8" />
      {/* Bridge */}
      <Path d="M46 39 L54 39" stroke="#BE185D" strokeWidth="2" strokeLinecap="round" />
      {/* Arms */}
      <Path d="M28 39 L20 37" stroke="#BE185D" strokeWidth="1.8" strokeLinecap="round" />
      <Path d="M72 39 L80 37" stroke="#BE185D" strokeWidth="1.8" strokeLinecap="round" />
    </Svg>
  );
}
