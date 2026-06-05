import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { AvatarSVGProps } from '../../engine/types';

export default function CapeAccessorySVG({ size, primaryColor = '#6B21A8', secondaryColor = '#FFD700' }: AvatarSVGProps) {
  const s = size;
  return (
    <Svg width={s} height={s} viewBox="0 0 100 100">
      {/* Cape body */}
      <Path d="M32 60 Q20 72 22 90 L50 82 L78 90 Q80 72 68 60 Q60 65 50 64 Q40 65 32 60 Z" fill={primaryColor} />
      {/* Cape inner lining */}
      <Path d="M36 62 Q24 74 26 88 L50 81 L74 88 Q76 74 64 62 Q57 66 50 65 Q43 66 36 62 Z" fill={secondaryColor} opacity="0.15" />
      {/* Cape collar */}
      <Path d="M36 60 Q50 56 64 60 L62 66 Q50 62 38 66 Z" fill={primaryColor} />
      {/* Cape clasp */}
      <Path d="M46 61 Q50 64 54 61" stroke={secondaryColor} strokeWidth="2" fill="none" strokeLinecap="round" />
    </Svg>
  );
}
