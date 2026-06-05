import React from 'react';
import Svg, { Circle, Ellipse, Path, Rect, Polygon } from 'react-native-svg';
import { AvatarSVGProps } from '../../engine/types';

export default function WizardSVG({ size, primaryColor = '#6B21A8', secondaryColor = '#FFD700' }: AvatarSVGProps) {
  const s = size;
  return (
    <Svg width={s} height={s} viewBox="0 0 100 100">
      {/* Robe body */}
      <Path d="M30 70 Q50 60 70 70 L75 95 H25 Z" fill={primaryColor} />
      {/* Neck */}
      <Rect x="43" y="52" width="14" height="12" rx="4" fill="#F5CBA7" />
      {/* Head */}
      <Ellipse cx="50" cy="44" rx="18" ry="20" fill="#F5CBA7" />
      {/* Eyes */}
      <Circle cx="44" cy="42" r="3" fill="#1a0033" />
      <Circle cx="56" cy="42" r="3" fill="#1a0033" />
      <Circle cx="45" cy="41" r="1" fill="white" />
      <Circle cx="57" cy="41" r="1" fill="white" />
      {/* Smile */}
      <Path d="M44 50 Q50 55 56 50" stroke="#8B4513" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Beard */}
      <Path d="M38 52 Q50 62 62 52 Q60 68 50 70 Q40 68 38 52 Z" fill="#C0C0C0" opacity="0.9" />
      {/* Wizard hat */}
      <Polygon points="50,8 34,38 66,38" fill={primaryColor} />
      <Rect x="28" y="36" width="44" height="7" rx="3" fill={secondaryColor} />
      {/* Hat star */}
      <Polygon points="50,14 51.5,19 57,19 52.5,22 54,27 50,24 46,27 47.5,22 43,19 48.5,19" fill={secondaryColor} />
      {/* Robe star deco */}
      <Polygon points="50,75 51,78 54,78 52,80 53,83 50,81 47,83 48,80 46,78 49,78" fill={secondaryColor} opacity="0.8" />
    </Svg>
  );
}
