import React from 'react';
import Svg, { Circle, Ellipse, Path, Rect, Polygon, Line } from 'react-native-svg';
import { AvatarSVGProps } from '../../engine/types';

export default function KnightSVG({ size, primaryColor = '#64748B', secondaryColor = '#FFD700' }: AvatarSVGProps) {
  const s = size;
  return (
    <Svg width={s} height={s} viewBox="0 0 100 100">
      {/* Armor body */}
      <Path d="M25 65 Q50 55 75 65 L78 95 H22 Z" fill={primaryColor} />
      {/* Chest plate highlight */}
      <Path d="M35 65 Q50 58 65 65 L67 80 Q50 85 33 80 Z" fill="#94A3B8" opacity="0.5" />
      {/* Armor lines */}
      <Line x1="50" y1="58" x2="50" y2="80" stroke="#475569" strokeWidth="1.5" />
      <Line x1="35" y1="70" x2="65" y2="70" stroke="#475569" strokeWidth="1" />
      {/* Neck guard */}
      <Rect x="38" y="50" width="24" height="14" rx="4" fill={primaryColor} />
      {/* Head */}
      <Ellipse cx="50" cy="40" rx="20" ry="22" fill="#F5CBA7" />
      {/* Eyes */}
      <Circle cx="43" cy="38" r="3.5" fill="#1a0033" />
      <Circle cx="57" cy="38" r="3.5" fill="#1a0033" />
      <Circle cx="44" cy="37" r="1.2" fill="white" />
      <Circle cx="58" cy="37" r="1.2" fill="white" />
      {/* Determined mouth */}
      <Path d="M44 47 L56 47" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" />
      {/* Scar */}
      <Path d="M57 34 L60 42" stroke="#CD853F" strokeWidth="1" opacity="0.7" />
      {/* Helmet */}
      <Path d="M30 38 Q30 15 50 12 Q70 15 70 38 Z" fill={primaryColor} />
      {/* Helmet visor opening */}
      <Path d="M33 36 Q33 22 50 19 Q67 22 67 36" fill="#1a0033" opacity="0.3" />
      {/* Crest */}
      <Rect x="47" y="8" width="6" height="12" rx="2" fill={secondaryColor} />
      {/* Shield on side */}
      <Path d="M78 68 L88 68 L88 83 L83 88 L78 83 Z" fill={primaryColor} stroke={secondaryColor} strokeWidth="1.5" />
      <Polygon points="83,70 86,75 83,80 80,75" fill={secondaryColor} opacity="0.6" />
    </Svg>
  );
}
