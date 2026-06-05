import React from 'react';
import Svg, { Circle, Path, Ellipse } from 'react-native-svg';
import { AvatarSVGProps } from '../../engine/types';

export default function FlowerCrownSVG({ size }: AvatarSVGProps) {
  const s = size;
  return (
    <Svg width={s} height={s} viewBox="0 0 100 100">
      {/* Vine/stem */}
      <Path d="M28 34 Q50 28 72 34" stroke="#15803D" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Leaves */}
      <Ellipse cx="36" cy="31" rx="5" ry="3" fill="#16A34A" transform="rotate(-20, 36, 31)" />
      <Ellipse cx="64" cy="31" rx="5" ry="3" fill="#16A34A" transform="rotate(20, 64, 31)" />
      <Ellipse cx="50" cy="28" rx="5" ry="3" fill="#16A34A" transform="rotate(0, 50, 28)" />
      {/* Flowers */}
      {/* Center flower */}
      <Circle cx="50" cy="26" r="4" fill="#EC4899" />
      <Circle cx="50" cy="26" r="2" fill="#FDE68A" />
      <Circle cx="46" cy="24" r="2.5" fill="#EC4899" />
      <Circle cx="54" cy="24" r="2.5" fill="#EC4899" />
      <Circle cx="50" cy="21" r="2.5" fill="#EC4899" />
      {/* Left flower */}
      <Circle cx="35" cy="28" r="3" fill="#F97316" />
      <Circle cx="35" cy="28" r="1.5" fill="#FDE68A" />
      <Circle cx="32" cy="26" r="2" fill="#F97316" />
      <Circle cx="38" cy="26" r="2" fill="#F97316" />
      <Circle cx="35" cy="23" r="2" fill="#F97316" />
      {/* Right flower */}
      <Circle cx="65" cy="28" r="3" fill="#A855F7" />
      <Circle cx="65" cy="28" r="1.5" fill="#FDE68A" />
      <Circle cx="62" cy="26" r="2" fill="#A855F7" />
      <Circle cx="68" cy="26" r="2" fill="#A855F7" />
      <Circle cx="65" cy="23" r="2" fill="#A855F7" />
    </Svg>
  );
}
