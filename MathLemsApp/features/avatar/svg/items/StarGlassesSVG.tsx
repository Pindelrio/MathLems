import React from 'react';
import Svg, { Polygon, Path } from 'react-native-svg';
import { AvatarSVGProps } from '../../engine/types';

export default function StarGlassesSVG({ size }: AvatarSVGProps) {
  const s = size;
  return (
    <Svg width={s} height={s} viewBox="0 0 100 100">
      {/* Left star lens */}
      <Polygon
        points="40,33 42,39 48,39 43,43 45,49 40,45 35,49 37,43 32,39 38,39"
        fill="#FDE68A"
        stroke="#B45309"
        strokeWidth="1.5"
        opacity="0.85"
      />
      {/* Right star lens */}
      <Polygon
        points="60,33 62,39 68,39 63,43 65,49 60,45 55,49 57,43 52,39 58,39"
        fill="#FDE68A"
        stroke="#B45309"
        strokeWidth="1.5"
        opacity="0.85"
      />
      {/* Bridge */}
      <Path d="M48 41 L52 41" stroke="#B45309" strokeWidth="2" strokeLinecap="round" />
      {/* Arms */}
      <Path d="M32 40 L25 38" stroke="#B45309" strokeWidth="2" strokeLinecap="round" />
      <Path d="M68 40 L75 38" stroke="#B45309" strokeWidth="2" strokeLinecap="round" />
    </Svg>
  );
}
