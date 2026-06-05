import React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';
import { AvatarSVGProps } from '../../engine/types';

export default function RectangularGlassesSVG({ size }: AvatarSVGProps) {
  const s = size;
  return (
    <Svg width={s} height={s} viewBox="0 0 100 100">
      {/* Left lens */}
      <Rect x="28" y="37" width="18" height="12" rx="2" fill="#93C5FD" opacity="0.25" stroke="#1a0033" strokeWidth="2.2" />
      {/* Right lens */}
      <Rect x="54" y="37" width="18" height="12" rx="2" fill="#93C5FD" opacity="0.25" stroke="#1a0033" strokeWidth="2.2" />
      {/* Bridge */}
      <Path d="M46 43 L54 43" stroke="#1a0033" strokeWidth="2" strokeLinecap="round" />
      {/* Arms */}
      <Path d="M28 41 L20 39" stroke="#1a0033" strokeWidth="1.8" strokeLinecap="round" />
      <Path d="M72 41 L80 39" stroke="#1a0033" strokeWidth="1.8" strokeLinecap="round" />
      {/* Lens shine */}
      <Rect x="30" y="39" width="4" height="2" rx="1" fill="white" opacity="0.5" />
      <Rect x="56" y="39" width="4" height="2" rx="1" fill="white" opacity="0.5" />
    </Svg>
  );
}
