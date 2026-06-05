import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { AvatarSVGProps } from '../../engine/types';

export default function CurledMustacheSVG({ size, primaryColor = '#3D2B1F' }: AvatarSVGProps) {
  const s = size;
  return (
    <Svg width={s} height={s} viewBox="0 0 100 100">
      {/* Left curl */}
      <Path d="M50 52 Q46 49 40 51 Q36 53 36 56 Q36 59 40 57" stroke={primaryColor} strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Right curl */}
      <Path d="M50 52 Q54 49 60 51 Q64 53 64 56 Q64 59 60 57" stroke={primaryColor} strokeWidth="3" fill="none" strokeLinecap="round" />
    </Svg>
  );
}
