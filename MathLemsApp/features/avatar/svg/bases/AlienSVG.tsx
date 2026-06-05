import React from 'react';
import Svg, { Circle, Ellipse, Path, Rect } from 'react-native-svg';
import { AvatarSVGProps } from '../../engine/types';

export default function AlienSVG({ size, primaryColor = '#10B981', secondaryColor = '#6EE7B7' }: AvatarSVGProps) {
  const s = size;
  return (
    <Svg width={s} height={s} viewBox="0 0 100 100">
      {/* Jumpsuit body */}
      <Path d="M28 66 Q50 56 72 66 L76 95 H24 Z" fill={primaryColor} />
      {/* Jumpsuit chest panel */}
      <Ellipse cx="50" cy="76" rx="10" ry="8" fill={secondaryColor} opacity="0.35" />
      {/* Belt */}
      <Rect x="28" y="68" width="44" height="5" rx="2" fill={secondaryColor} opacity="0.5" />
      {/* Neck */}
      <Rect x="43" y="52" width="14" height="12" rx="4" fill={primaryColor} />
      {/* Large alien head */}
      <Ellipse cx="50" cy="36" rx="24" ry="28" fill={primaryColor} stroke="#059669" strokeWidth="0.8" />
      {/* Pointy ears / antennae bumps */}
      <Ellipse cx="26" cy="30" rx="5" ry="8" fill={primaryColor} stroke="#059669" strokeWidth="0.8" />
      <Ellipse cx="74" cy="30" rx="5" ry="8" fill={primaryColor} stroke="#059669" strokeWidth="0.8" />
      {/* Big almond eyes */}
      <Path d="M30 38 Q40 28 48 38 Q40 46 30 38 Z" fill="#065F46" />
      <Path d="M52 38 Q60 28 70 38 Q60 46 52 38 Z" fill="#065F46" />
      {/* Iris */}
      <Ellipse cx="39" cy="38" rx="5" ry="6" fill="#34D399" />
      <Ellipse cx="61" cy="38" rx="5" ry="6" fill="#34D399" />
      <Circle cx="39" cy="38" r="2.5" fill="#1A0A00" />
      <Circle cx="61" cy="38" r="2.5" fill="#1A0A00" />
      <Circle cx="40" cy="37" r="1" fill="white" />
      <Circle cx="62" cy="37" r="1" fill="white" />
      {/* Small nose slits */}
      <Path d="M48 48 L50 46 L52 48" stroke="#059669" strokeWidth="1" fill="none" />
      {/* Thin mouth */}
      <Path d="M42 54 Q50 58 58 54" stroke="#059669" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Head markings */}
      <Path d="M40 20 Q50 15 60 20" stroke={secondaryColor} strokeWidth="1" fill="none" opacity="0.5" strokeLinecap="round" />
    </Svg>
  );
}
