import React from 'react';
import Svg, { Circle, Ellipse, Path, Rect } from 'react-native-svg';
import { AvatarSVGProps } from '../../engine/types';

export default function HumanGirlSVG({ size, primaryColor = '#EC4899', secondaryColor = '#FCE7F3' }: AvatarSVGProps) {
  const s = size;
  return (
    <Svg width={s} height={s} viewBox="0 0 100 100">
      {/* Dress/top body */}
      <Path d="M26 68 Q50 56 74 68 L78 95 H22 Z" fill={primaryColor} />
      {/* Dress collar V-neck */}
      <Path d="M40 58 L50 66 L60 58 L58 68 Q50 72 42 68 Z" fill={secondaryColor} opacity="0.35" />
      {/* Neck */}
      <Rect x="43" y="52" width="14" height="12" rx="4" fill="#F5CBA7" />
      {/* Head */}
      <Ellipse cx="50" cy="40" rx="20" ry="22" fill="#F5CBA7" stroke="#D4956B" strokeWidth="0.8" />
      {/* Ears */}
      <Ellipse cx="30" cy="42" rx="4" ry="6" fill="#F5CBA7" stroke="#D4956B" strokeWidth="0.8" />
      <Ellipse cx="70" cy="42" rx="4" ry="6" fill="#F5CBA7" stroke="#D4956B" strokeWidth="0.8" />
      {/* Long hair — flows down sides */}
      <Path d="M31 28 Q50 18 69 28 L68 60 Q62 68 58 66 Q64 50 66 34 Q50 20 34 34 Q36 50 42 66 Q38 68 32 60 Z" fill="#8B6914" />
      {/* Hair top */}
      <Path d="M31 28 Q50 18 69 28 Q68 22 50 19 Q32 22 31 28 Z" fill="#8B6914" />
      {/* Eyes with lashes */}
      <Ellipse cx="43" cy="40" rx="4.5" ry="5" fill="white" />
      <Ellipse cx="57" cy="40" rx="4.5" ry="5" fill="white" />
      <Circle cx="43" cy="40" r="2.8" fill="#1a4a1a" />
      <Circle cx="57" cy="40" r="2.8" fill="#1a4a1a" />
      <Circle cx="44" cy="39" r="1.1" fill="white" />
      <Circle cx="58" cy="39" r="1.1" fill="white" />
      {/* Eyelashes */}
      <Path d="M40 36 L38 33 M43 35 L43 32 M46 36 L48 33" stroke="#1a4a1a" strokeWidth="1" strokeLinecap="round" />
      <Path d="M54 36 L52 33 M57 35 L57 32 M60 36 L62 33" stroke="#1a4a1a" strokeWidth="1" strokeLinecap="round" />
      {/* Eyebrows (arched) */}
      <Path d="M39 33 Q43 30 47 33" stroke="#8B6914" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <Path d="M53 33 Q57 30 61 33" stroke="#8B6914" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Nose */}
      <Path d="M48 44 Q50 48 52 44" stroke="#C8956B" strokeWidth="1" fill="none" strokeLinecap="round" />
      {/* Smile */}
      <Path d="M44 50 Q50 56 56 50" stroke="#C8734A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Cheeks */}
      <Ellipse cx="36" cy="48" rx="6" ry="3.5" fill="#FFB3A7" opacity="0.5" />
      <Ellipse cx="64" cy="48" rx="6" ry="3.5" fill="#FFB3A7" opacity="0.5" />
      {/* Small earrings */}
      <Circle cx="30" cy="46" r="1.5" fill={secondaryColor} stroke={primaryColor} strokeWidth="0.8" />
      <Circle cx="70" cy="46" r="1.5" fill={secondaryColor} stroke={primaryColor} strokeWidth="0.8" />
    </Svg>
  );
}
