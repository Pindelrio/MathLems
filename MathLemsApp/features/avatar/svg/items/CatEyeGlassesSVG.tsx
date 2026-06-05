import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import { AvatarSVGProps } from '../../engine/types';

export default function CatEyeGlassesSVG({ size }: AvatarSVGProps) {
  const s = size;
  return (
    <Svg width={s} height={s} viewBox="0 0 100 100">
      {/* Left lens (cat-eye shape: low-left, high-right tip) */}
      <Path d="M28 44 Q30 37 40 35 L46 38 Q44 46 36 48 Z" fill="#F9A8D4" opacity="0.3" stroke="#1a0033" strokeWidth="2" strokeLinejoin="round" />
      {/* Right lens */}
      <Path d="M54 38 L60 35 Q70 37 72 44 L64 48 Q56 46 54 38 Z" fill="#F9A8D4" opacity="0.3" stroke="#1a0033" strokeWidth="2" strokeLinejoin="round" />
      {/* Bridge */}
      <Path d="M46 41 L54 41" stroke="#1a0033" strokeWidth="2" strokeLinecap="round" />
      {/* Arms */}
      <Path d="M28 42 L20 40" stroke="#1a0033" strokeWidth="1.8" strokeLinecap="round" />
      <Path d="M72 42 L80 40" stroke="#1a0033" strokeWidth="1.8" strokeLinecap="round" />
      {/* Shine */}
      <Circle cx="34" cy="39" r="1.5" fill="white" opacity="0.6" />
      <Circle cx="60" cy="39" r="1.5" fill="white" opacity="0.6" />
    </Svg>
  );
}
