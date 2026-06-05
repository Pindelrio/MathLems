import React from 'react';
import Svg, { Path, Ellipse } from 'react-native-svg';
import { AvatarSVGProps } from '../../engine/types';

export default function WizardBeardSVG({ size }: AvatarSVGProps) {
  const s = size;
  return (
    <Svg width={s} height={s} viewBox="0 0 100 100">
      {/* Main beard */}
      <Path
        d="M36 52 Q32 58 34 66 Q38 78 50 82 Q62 78 66 66 Q68 58 64 52 Q57 56 50 56 Q43 56 36 52 Z"
        fill="#D1D5DB"
      />
      {/* Beard highlight */}
      <Path
        d="M42 55 Q50 58 58 55 Q60 65 50 72 Q40 65 42 55 Z"
        fill="#F3F4F6"
        opacity="0.6"
      />
      {/* Beard tip braid */}
      <Path d="M50 72 Q48 78 50 82 Q52 78 50 72" fill="#9CA3AF" />
      {/* Moustache */}
      <Path d="M40 52 Q45 56 50 53 Q55 56 60 52" stroke="#9CA3AF" strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* Beard wavy lines */}
      <Path d="M38 60 Q44 63 40 68" stroke="#9CA3AF" strokeWidth="1" fill="none" opacity="0.5" />
      <Path d="M62 60 Q56 63 60 68" stroke="#9CA3AF" strokeWidth="1" fill="none" opacity="0.5" />
    </Svg>
  );
}
