import React from 'react';
import Svg, { Path, Polygon, Circle } from 'react-native-svg';
import { AvatarSVGProps } from '../../engine/types';

export default function StarNecklaceSVG({ size, secondaryColor = '#FFD700' }: AvatarSVGProps) {
  const s = size;
  return (
    <Svg width={s} height={s} viewBox="0 0 100 100">
      {/* Chain arc */}
      <Path d="M36 56 Q50 62 64 56" stroke="#B8860B" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Star pendant */}
      <Polygon points="50,62 51.5,67 57,67 52.5,70 54,75 50,72 46,75 47.5,70 43,67 48.5,67" fill={secondaryColor} />
      {/* Star shine */}
      <Circle cx="49" cy="65" r="1" fill="white" opacity="0.6" />
    </Svg>
  );
}
