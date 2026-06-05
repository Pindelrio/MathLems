import React from 'react';
import Svg, { Circle, Ellipse, Path, Rect } from 'react-native-svg';
import { AvatarSVGProps } from '../../engine/types';

export default function HumanBoySVG({ size, primaryColor = '#3B82F6', secondaryColor = '#DBEAFE' }: AvatarSVGProps) {
  const s = size;
  return (
    <Svg width={s} height={s} viewBox="0 0 100 100">
      {/* T-shirt body */}
      <Path d="M28 68 Q50 58 72 68 L76 95 H24 Z" fill={primaryColor} />
      {/* T-shirt collar */}
      <Path d="M40 58 Q50 63 60 58 L58 68 Q50 70 42 68 Z" fill={secondaryColor} opacity="0.4" />
      {/* Neck */}
      <Rect x="43" y="52" width="14" height="12" rx="4" fill="#F5CBA7" />
      {/* Head */}
      <Ellipse cx="50" cy="40" rx="20" ry="22" fill="#F5CBA7" stroke="#D4956B" strokeWidth="0.8" />
      {/* Ears */}
      <Ellipse cx="30" cy="42" rx="4" ry="6" fill="#F5CBA7" stroke="#D4956B" strokeWidth="0.8" />
      <Ellipse cx="70" cy="42" rx="4" ry="6" fill="#F5CBA7" stroke="#D4956B" strokeWidth="0.8" />
      {/* Hair — short side-part */}
      <Path d="M31 28 Q50 18 69 28 Q68 22 50 19 Q32 22 31 28 Z" fill="#3D2B1F" />
      <Path d="M31 28 Q34 22 50 20 Q34 26 32 36" fill="#3D2B1F" />
      {/* Eyes */}
      <Ellipse cx="43" cy="40" rx="4" ry="4.5" fill="white" />
      <Ellipse cx="57" cy="40" rx="4" ry="4.5" fill="white" />
      <Circle cx="43" cy="40" r="2.5" fill="#3D2B1F" />
      <Circle cx="57" cy="40" r="2.5" fill="#3D2B1F" />
      <Circle cx="44" cy="39" r="1" fill="white" />
      <Circle cx="58" cy="39" r="1" fill="white" />
      {/* Eyebrows */}
      <Path d="M39 34 Q43 32 47 34" stroke="#3D2B1F" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <Path d="M53 34 Q57 32 61 34" stroke="#3D2B1F" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Nose */}
      <Path d="M48 44 Q50 48 52 44" stroke="#C8956B" strokeWidth="1" fill="none" strokeLinecap="round" />
      {/* Smile */}
      <Path d="M44 50 Q50 56 56 50" stroke="#C8734A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Cheeks */}
      <Ellipse cx="37" cy="48" rx="5" ry="3" fill="#FFB3A7" opacity="0.4" />
      <Ellipse cx="63" cy="48" rx="5" ry="3" fill="#FFB3A7" opacity="0.4" />
    </Svg>
  );
}
