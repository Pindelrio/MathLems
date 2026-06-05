import React from 'react';
import Svg, { Circle, Ellipse, Path, Rect, Polygon } from 'react-native-svg';
import { AvatarSVGProps } from '../../engine/types';

export default function ElfSVG({ size, primaryColor = '#15803D', secondaryColor = '#86EFAC' }: AvatarSVGProps) {
  const s = size;
  return (
    <Svg width={s} height={s} viewBox="0 0 100 100">
      {/* Tunic */}
      <Path d="M28 66 Q50 56 72 66 L76 95 H24 Z" fill={primaryColor} />
      {/* Tunic pattern */}
      <Path d="M40 66 L50 58 L60 66 L58 80 L50 84 L42 80 Z" fill={secondaryColor} opacity="0.3" />
      {/* Neck */}
      <Rect x="43" y="52" width="14" height="12" rx="4" fill="#F5DEB3" />
      {/* Head - slightly pointed */}
      <Path d="M32 48 Q32 22 50 20 Q68 22 68 48 Q68 62 50 64 Q32 62 32 48 Z" fill="#F5DEB3" />
      {/* Long flowing hair */}
      <Path d="M32 38 Q26 55 30 70" stroke="#8B6914" strokeWidth="10" fill="none" strokeLinecap="round" />
      <Path d="M68 38 Q74 55 70 70" stroke="#8B6914" strokeWidth="10" fill="none" strokeLinecap="round" />
      {/* Pointed ears */}
      <Path d="M32 40 L22 34 L30 44" fill="#F5DEB3" />
      <Path d="M68 40 L78 34 L70 44" fill="#F5DEB3" />
      {/* Eyes - slightly slanted */}
      <Ellipse cx="43" cy="40" rx="3.5" ry="3" fill="#1a4a1a" />
      <Ellipse cx="57" cy="40" rx="3.5" ry="3" fill="#1a4a1a" />
      <Circle cx="44" cy="39" r="1" fill="white" />
      <Circle cx="58" cy="39" r="1" fill="white" />
      {/* Eyelashes */}
      <Path d="M40 37 L38 34 M43 36 L43 33 M46 37 L48 34" stroke="#1a4a1a" strokeWidth="1" />
      <Path d="M54 37 L52 34 M57 36 L57 33 M60 37 L62 34" stroke="#1a4a1a" strokeWidth="1" />
      {/* Gentle smile */}
      <Path d="M44 49 Q50 54 56 49" stroke="#8B4513" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Leaf headband */}
      <Path d="M33 32 Q50 26 67 32" stroke={primaryColor} strokeWidth="3" fill="none" />
      <Polygon points="50,24 53,30 50,27 47,30" fill={secondaryColor} />
    </Svg>
  );
}
