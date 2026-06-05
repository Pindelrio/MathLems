import React from 'react';
import Svg, { Circle, Ellipse, Path, Rect, Polygon } from 'react-native-svg';
import { AvatarSVGProps } from '../../engine/types';

export default function WitchSVG({ size, primaryColor = '#1a0033', secondaryColor = '#4ADE80' }: AvatarSVGProps) {
  const s = size;
  return (
    <Svg width={s} height={s} viewBox="0 0 100 100">
      {/* Dress */}
      <Path d="M28 68 Q50 58 72 68 L78 95 H22 Z" fill={primaryColor} />
      {/* Collar */}
      <Path d="M38 60 Q50 66 62 60 L64 68 Q50 72 36 68 Z" fill={secondaryColor} opacity="0.6" />
      {/* Neck */}
      <Rect x="43" y="52" width="14" height="12" rx="4" fill="#F5CBA7" />
      {/* Head */}
      <Ellipse cx="50" cy="44" rx="18" ry="20" fill="#F5CBA7" />
      {/* Hair sides */}
      <Path d="M32 38 Q28 55 32 65" stroke="#1a0033" strokeWidth="8" fill="none" strokeLinecap="round" />
      <Path d="M68 38 Q72 55 68 65" stroke="#1a0033" strokeWidth="8" fill="none" strokeLinecap="round" />
      {/* Eyes */}
      <Circle cx="44" cy="42" r="3" fill="#1a0033" />
      <Circle cx="56" cy="42" r="3" fill="#1a0033" />
      <Circle cx="45" cy="41" r="1" fill="white" />
      <Circle cx="57" cy="41" r="1" fill="white" />
      {/* Smile with teeth */}
      <Path d="M44 50 Q50 56 56 50" stroke="#8B4513" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Witch hat */}
      <Polygon points="50,5 35,35 65,35" fill={primaryColor} />
      <Path d="M50,5 Q55,18 60,30" stroke={secondaryColor} strokeWidth="1" fill="none" opacity="0.5" />
      <Rect x="27" y="33" width="46" height="7" rx="3" fill="#3d006e" />
      {/* Hat buckle */}
      <Rect x="46" y="34" width="8" height="5" rx="1" fill={secondaryColor} />
      <Rect x="47.5" y="35.5" width="5" height="2" rx="0.5" fill="#1a0033" />
      {/* Wand deco */}
      <Circle cx="72" cy="80" r="4" fill={secondaryColor} opacity="0.8" />
      <Rect x="71" y="83" width="2" height="10" rx="1" fill="#8B4513" />
    </Svg>
  );
}
