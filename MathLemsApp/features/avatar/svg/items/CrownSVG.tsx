import React from 'react';
import Svg, { Path, Circle, Ellipse } from 'react-native-svg';
import { AvatarSVGProps } from '../../engine/types';

export default function CrownSVG({ size, secondaryColor = '#FFD700' }: AvatarSVGProps) {
  const s = size;
  return (
    <Svg width={s} height={s} viewBox="0 0 100 100">
      {/* Crown base band */}
      <Path d="M28 38 L72 38 L70 46 L30 46 Z" fill={secondaryColor} />
      {/* Crown points */}
      <Path d="M30 38 L28 24 L38 34 L50 20 L62 34 L72 24 L70 38 Z" fill={secondaryColor} />
      {/* Crown outline */}
      <Path d="M28 38 L28 24 L38 34 L50 20 L62 34 L72 24 L72 38" stroke="#B8860B" strokeWidth="1" fill="none" strokeLinejoin="round" />
      {/* Gems */}
      <Circle cx="50" cy="30" r="3" fill="#E53E3E" />
      <Circle cx="36" cy="36" r="2" fill="#3182CE" />
      <Circle cx="64" cy="36" r="2" fill="#38A169" />
      {/* Gem shine */}
      <Circle cx="49" cy="29" r="1" fill="white" opacity="0.6" />
    </Svg>
  );
}
