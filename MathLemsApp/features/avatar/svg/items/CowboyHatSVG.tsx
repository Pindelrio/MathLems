import React from 'react';
import Svg, { Path, Ellipse } from 'react-native-svg';
import { AvatarSVGProps } from '../../engine/types';

export default function CowboyHatSVG({ size, primaryColor = '#8B4513', secondaryColor = '#FFD700' }: AvatarSVGProps) {
  const s = size;
  return (
    <Svg width={s} height={s} viewBox="0 0 100 100">
      {/* Wide brim */}
      <Ellipse cx="50" cy="38" rx="28" ry="6" fill={primaryColor} />
      {/* Hat body */}
      <Path d="M36 38 Q36 18 50 16 Q64 18 64 38 Z" fill={primaryColor} />
      {/* Crown dent */}
      <Path d="M40 30 Q50 26 60 30" stroke="#6B3410" strokeWidth="2" fill="none" />
      {/* Band */}
      <Path d="M36 38 Q50 34 64 38" stroke={secondaryColor} strokeWidth="2.5" fill="none" />
    </Svg>
  );
}
