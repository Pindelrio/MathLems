import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { AvatarSVGProps } from '../../engine/types';

export default function FullBeardSVG({ size, primaryColor = '#3D2B1F' }: AvatarSVGProps) {
  const s = size;
  return (
    <Svg width={s} height={s} viewBox="0 0 100 100">
      {/* Mustache */}
      <Path d="M38 52 Q44 56 50 53 Q56 56 62 52 Q60 55 55 55 Q52 58 50 57 Q48 58 45 55 Q40 55 38 52 Z" fill={primaryColor} />
      {/* Full beard body */}
      <Path d="M34 54 Q30 64 34 74 Q40 84 50 86 Q60 84 66 74 Q70 64 66 54 Q60 58 50 58 Q40 58 34 54 Z" fill={primaryColor} opacity="0.9" />
      {/* Beard texture lines */}
      <Path d="M40 62 Q44 68 42 76" stroke="#2A1A10" strokeWidth="0.8" fill="none" opacity="0.4" />
      <Path d="M50 60 L50 80" stroke="#2A1A10" strokeWidth="0.8" fill="none" opacity="0.4" />
      <Path d="M60 62 Q56 68 58 76" stroke="#2A1A10" strokeWidth="0.8" fill="none" opacity="0.4" />
    </Svg>
  );
}
