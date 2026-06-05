import React from 'react';
import Svg, { Path, Rect, Ellipse } from 'react-native-svg';
import { AvatarSVGProps } from '../../engine/types';

export default function MortarboardSVG({ size, primaryColor = '#1a0033', secondaryColor = '#FFD700' }: AvatarSVGProps) {
  const s = size;
  return (
    <Svg width={s} height={s} viewBox="0 0 100 100">
      {/* Cap top (flat square board) */}
      <Path d="M28 30 L50 22 L72 30 L50 38 Z" fill={primaryColor} />
      {/* Cap body (cylinder) */}
      <Rect x="38" y="30" width="24" height="10" rx="1" fill={primaryColor} />
      {/* Cap brim (ellipse base) */}
      <Ellipse cx="50" cy="40" rx="18" ry="4" fill={primaryColor} />
      {/* Tassel string */}
      <Path d="M64 24 L72 24 L72 38" stroke={secondaryColor} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Tassel end */}
      <Path d="M70 38 L74 44" stroke={secondaryColor} strokeWidth="1.5" strokeLinecap="round" />
      <Path d="M72 38 L72 44" stroke={secondaryColor} strokeWidth="1.5" strokeLinecap="round" />
      <Path d="M74 38 L70 44" stroke={secondaryColor} strokeWidth="1.5" strokeLinecap="round" />
    </Svg>
  );
}
