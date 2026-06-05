import React from 'react';
import Svg, { Path, Rect, Circle, Ellipse } from 'react-native-svg';
import { AvatarSVGProps } from '../../engine/types';

export default function BeanieHatSVG({ size, primaryColor = '#3B82F6', secondaryColor = '#BFDBFE' }: AvatarSVGProps) {
  const s = size;
  return (
    <Svg width={s} height={s} viewBox="0 0 100 100">
      {/* Beanie body */}
      <Path d="M30 40 Q30 18 50 16 Q70 18 70 40 Z" fill={primaryColor} />
      {/* Ribbed brim */}
      <Rect x="30" y="38" width="40" height="6" rx="3" fill={secondaryColor} />
      {/* Stripes */}
      <Path d="M34 32 Q50 28 66 32" stroke={secondaryColor} strokeWidth="2" fill="none" opacity="0.5" />
      <Path d="M32 36 Q50 32 68 36" stroke={secondaryColor} strokeWidth="2" fill="none" opacity="0.3" />
      {/* Pompom */}
      <Circle cx="50" cy="18" r="5" fill={secondaryColor} />
      <Circle cx="48" cy="16" r="2" fill="white" opacity="0.4" />
    </Svg>
  );
}
