import React from 'react';
import Svg, { Path, Rect, Circle } from 'react-native-svg';
import { AvatarSVGProps } from '../../engine/types';

export default function PirateHatSVG({ size }: AvatarSVGProps) {
  const s = size;
  return (
    <Svg width={s} height={s} viewBox="0 0 100 100">
      {/* Hat brim */}
      <Path d="M22 38 Q50 32 78 38 L76 44 Q50 38 24 44 Z" fill="#1a1a1a" />
      {/* Hat body */}
      <Path d="M30 38 Q50 28 70 38 L68 16 Q50 10 32 16 Z" fill="#1a1a1a" />
      {/* Skull */}
      <Circle cx="50" cy="26" r="7" fill="white" />
      <Circle cx="47" cy="24" r="1.5" fill="#1a1a1a" />
      <Circle cx="53" cy="24" r="1.5" fill="#1a1a1a" />
      <Rect x="46" y="29" width="2" height="3" rx="0.5" fill="#1a1a1a" />
      <Rect x="50" y="29" width="2" height="3" rx="0.5" fill="#1a1a1a" />
      {/* Crossbones */}
      <Path d="M38 30 L45 28" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <Path d="M55 28 L62 30" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <Path d="M38 32 L45 34" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <Path d="M55 34 L62 32" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </Svg>
  );
}
