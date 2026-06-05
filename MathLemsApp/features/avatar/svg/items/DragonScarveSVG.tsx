import React from 'react';
import Svg, { Path, Ellipse, Rect } from 'react-native-svg';
import { AvatarSVGProps } from '../../engine/types';

export default function DragonScarveSVG({ size }: AvatarSVGProps) {
  const s = size;
  return (
    <Svg width={s} height={s} viewBox="0 0 100 100">
      {/* Scarf wrap around neck */}
      <Path
        d="M32 56 Q50 50 68 56 L70 64 Q50 58 30 64 Z"
        fill="#DC2626"
      />
      {/* Scarf knot */}
      <Ellipse cx="50" cy="62" rx="8" ry="5" fill="#B91C1C" />
      {/* Scarf tails hanging down */}
      <Path d="M44 62 Q40 70 38 80 Q42 82 46 70 Z" fill="#DC2626" />
      <Path d="M56 62 Q58 72 62 82 Q58 84 54 72 Z" fill="#EF4444" />
      {/* Scarf pattern diamonds */}
      <Rect x="34" y="57" width="4" height="4" rx="1" fill="#FCA5A5" transform="rotate(45, 36, 59)" />
      <Rect x="62" y="57" width="4" height="4" rx="1" fill="#FCA5A5" transform="rotate(45, 64, 59)" />
      <Rect x="48" y="57" width="4" height="4" rx="1" fill="#FCA5A5" transform="rotate(45, 50, 59)" />
    </Svg>
  );
}
