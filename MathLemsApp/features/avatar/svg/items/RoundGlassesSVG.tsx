import React from 'react';
import Svg, { Circle, Rect, Path } from 'react-native-svg';
import { AvatarSVGProps } from '../../engine/types';

export default function RoundGlassesSVG({ size }: AvatarSVGProps) {
  const s = size;
  return (
    <Svg width={s} height={s} viewBox="0 0 100 100">
      {/* Left lens */}
      <Circle cx="40" cy="42" r="9" fill="none" stroke="#1a0033" strokeWidth="2.5" />
      <Circle cx="40" cy="42" r="9" fill="#60A5FA" opacity="0.2" />
      {/* Right lens */}
      <Circle cx="60" cy="42" r="9" fill="none" stroke="#1a0033" strokeWidth="2.5" />
      <Circle cx="60" cy="42" r="9" fill="#60A5FA" opacity="0.2" />
      {/* Bridge */}
      <Path d="M49 42 L51 42" stroke="#1a0033" strokeWidth="2.5" strokeLinecap="round" />
      {/* Arms */}
      <Path d="M31 42 L24 40" stroke="#1a0033" strokeWidth="2" strokeLinecap="round" />
      <Path d="M69 42 L76 40" stroke="#1a0033" strokeWidth="2" strokeLinecap="round" />
      {/* Lens shine */}
      <Circle cx="37" cy="39" r="2" fill="white" opacity="0.5" />
      <Circle cx="57" cy="39" r="2" fill="white" opacity="0.5" />
    </Svg>
  );
}
