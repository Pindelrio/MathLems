import React from 'react';
import Svg, { Path, Circle, Rect } from 'react-native-svg';
import { AvatarSVGProps } from '../../engine/types';

export default function SunglassesSVG({ size, primaryColor = '#1a1a1a' }: AvatarSVGProps) {
  const s = size;
  return (
    <Svg width={s} height={s} viewBox="0 0 100 100">
      {/* Left lens (dark) */}
      <Path d="M27 38 Q27 48 37 48 Q47 48 47 38 Q47 34 37 34 Q27 34 27 38 Z" fill={primaryColor} opacity="0.85" />
      {/* Right lens (dark) */}
      <Path d="M53 38 Q53 48 63 48 Q73 48 73 38 Q73 34 63 34 Q53 34 53 38 Z" fill={primaryColor} opacity="0.85" />
      {/* Frame top */}
      <Path d="M27 36 Q37 32 47 36" stroke={primaryColor} strokeWidth="2.5" fill="none" />
      <Path d="M53 36 Q63 32 73 36" stroke={primaryColor} strokeWidth="2.5" fill="none" />
      {/* Bridge */}
      <Path d="M47 40 L53 40" stroke={primaryColor} strokeWidth="2.5" strokeLinecap="round" />
      {/* Arms */}
      <Path d="M27 40 L18 38" stroke={primaryColor} strokeWidth="2" strokeLinecap="round" />
      <Path d="M73 40 L82 38" stroke={primaryColor} strokeWidth="2" strokeLinecap="round" />
      {/* Lens shine */}
      <Path d="M30 37 Q33 34 36 36" stroke="white" strokeWidth="1.2" fill="none" opacity="0.4" strokeLinecap="round" />
      <Path d="M56 37 Q59 34 62 36" stroke="white" strokeWidth="1.2" fill="none" opacity="0.4" strokeLinecap="round" />
    </Svg>
  );
}
