import React from 'react';
import Svg, { Circle, Ellipse, Path, Rect, Polygon } from 'react-native-svg';
import { AvatarSVGProps } from '../../engine/types';

export default function DragonSVG({ size, primaryColor = '#DC2626', secondaryColor = '#F97316' }: AvatarSVGProps) {
  const s = size;
  return (
    <Svg width={s} height={s} viewBox="0 0 100 100">
      {/* Wings (behind body) */}
      <Path d="M50 60 Q20 50 10 30 Q25 35 35 55" fill={primaryColor} opacity="0.7" />
      <Path d="M50 60 Q80 50 90 30 Q75 35 65 55" fill={primaryColor} opacity="0.7" />
      {/* Wing membrane lines */}
      <Path d="M50 58 Q30 48 18 30" stroke={secondaryColor} strokeWidth="1" opacity="0.5" fill="none" />
      <Path d="M50 58 Q70 48 82 30" stroke={secondaryColor} strokeWidth="1" opacity="0.5" fill="none" />
      {/* Body */}
      <Ellipse cx="50" cy="76" rx="22" ry="16" fill={primaryColor} />
      {/* Belly scales */}
      <Ellipse cx="50" cy="78" rx="14" ry="10" fill={secondaryColor} opacity="0.5" />
      {/* Neck */}
      <Path d="M42 60 Q38 52 40 46 L60 46 Q62 52 58 60 Z" fill={primaryColor} />
      {/* Neck scales */}
      <Path d="M50 46 Q45 52 50 56 Q55 52 50 46" fill={secondaryColor} opacity="0.4" />
      {/* Head */}
      <Path d="M28 42 Q28 20 50 18 Q72 20 72 42 Q72 58 50 60 Q28 58 28 42 Z" fill={primaryColor} />
      {/* Snout */}
      <Path d="M36 48 Q50 54 64 48 Q64 58 50 62 Q36 58 36 48 Z" fill={primaryColor} />
      <Ellipse cx="50" cy="56" rx="10" ry="6" fill="#B91C1C" />
      {/* Nostrils */}
      <Ellipse cx="46" cy="55" rx="2" ry="1.5" fill="#7F1D1D" />
      <Ellipse cx="54" cy="55" rx="2" ry="1.5" fill="#7F1D1D" />
      {/* Eyes */}
      <Ellipse cx="40" cy="36" rx="7" ry="7" fill={secondaryColor} />
      <Ellipse cx="60" cy="36" rx="7" ry="7" fill={secondaryColor} />
      {/* Slit pupils */}
      <Ellipse cx="40" cy="36" rx="2.5" ry="5" fill="#1a0033" />
      <Ellipse cx="60" cy="36" rx="2.5" ry="5" fill="#1a0033" />
      <Circle cx="40" cy="34" r="1" fill="white" opacity="0.7" />
      <Circle cx="60" cy="34" r="1" fill="white" opacity="0.7" />
      {/* Head spikes */}
      <Polygon points="50,18 47,8 53,8" fill={secondaryColor} />
      <Polygon points="40,22 36,12 42,14" fill={secondaryColor} />
      <Polygon points="60,22 64,12 58,14" fill={secondaryColor} />
      {/* Tail tip */}
      <Path d="M68 78 Q80 82 85 90 Q78 88 72 84" fill={primaryColor} />
      <Polygon points="85,90 90,95 82,92" fill={secondaryColor} opacity="0.8" />
    </Svg>
  );
}
