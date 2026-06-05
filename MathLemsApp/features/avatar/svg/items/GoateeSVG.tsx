import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { AvatarSVGProps } from '../../engine/types';

export default function GoateeSVG({ size, primaryColor = '#3D2B1F' }: AvatarSVGProps) {
  const s = size;
  return (
    <Svg width={s} height={s} viewBox="0 0 100 100">
      {/* Thin mustache */}
      <Path d="M42 52 Q46 55 50 53 Q54 55 58 52" stroke={primaryColor} strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Chin goatee */}
      <Path d="M44 55 Q42 62 50 70 Q58 62 56 55 Q53 58 50 58 Q47 58 44 55 Z" fill={primaryColor} opacity="0.9" />
    </Svg>
  );
}
