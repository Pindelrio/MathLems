import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import { AvatarSVGProps } from '../../engine/types';

export default function BowtieSVG({ size, primaryColor = '#E53E3E', secondaryColor = '#FEB2B2' }: AvatarSVGProps) {
  const s = size;
  return (
    <Svg width={s} height={s} viewBox="0 0 100 100">
      {/* Left wing */}
      <Path d="M50 64 L36 58 L34 68 L50 64 Z" fill={primaryColor} />
      {/* Right wing */}
      <Path d="M50 64 L64 58 L66 68 L50 64 Z" fill={primaryColor} />
      {/* Center knot */}
      <Circle cx="50" cy="64" r="3.5" fill={secondaryColor} stroke={primaryColor} strokeWidth="1" />
      {/* Wing details */}
      <Path d="M42 61 L48 64" stroke={secondaryColor} strokeWidth="0.8" opacity="0.6" />
      <Path d="M52 64 L58 61" stroke={secondaryColor} strokeWidth="0.8" opacity="0.6" />
    </Svg>
  );
}
