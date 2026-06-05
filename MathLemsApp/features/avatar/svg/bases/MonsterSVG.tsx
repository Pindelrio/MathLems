import React from 'react';
import Svg, { Circle, Ellipse, Path, Rect, Polygon } from 'react-native-svg';
import { AvatarSVGProps } from '../../engine/types';

export default function MonsterSVG({ size, primaryColor = '#7C3AED', secondaryColor = '#F97316' }: AvatarSVGProps) {
  const s = size;
  return (
    <Svg width={s} height={s} viewBox="0 0 100 100">
      {/* Chunky body */}
      <Ellipse cx="50" cy="78" rx="26" ry="18" fill={primaryColor} />
      {/* Body bumps/spikes */}
      <Polygon points="28,70 24,60 32,66" fill={primaryColor} />
      <Polygon points="72,70 76,60 68,66" fill={primaryColor} />
      {/* Belly */}
      <Ellipse cx="50" cy="80" rx="16" ry="10" fill={secondaryColor} opacity="0.4" />
      {/* Neck */}
      <Rect x="38" y="54" width="24" height="16" rx="6" fill={primaryColor} />
      {/* Big round head */}
      <Ellipse cx="50" cy="42" rx="24" ry="24" fill={primaryColor} />
      {/* Head horns */}
      <Polygon points="38,20 34,8 42,18" fill={secondaryColor} />
      <Polygon points="62,20 66,8 58,18" fill={secondaryColor} />
      {/* Eyestalks */}
      <Ellipse cx="40" cy="36" rx="8" ry="9" fill="white" />
      <Ellipse cx="60" cy="36" rx="8" ry="9" fill="white" />
      {/* Big eyes */}
      <Circle cx="40" cy="37" r="5" fill={secondaryColor} />
      <Circle cx="60" cy="37" r="5" fill={secondaryColor} />
      <Circle cx="40" cy="37" r="3" fill="#1a0033" />
      <Circle cx="60" cy="37" r="3" fill="#1a0033" />
      <Circle cx="41" cy="36" r="1" fill="white" />
      <Circle cx="61" cy="36" r="1" fill="white" />
      {/* Wide toothy grin */}
      <Path d="M34 50 Q50 60 66 50" fill="#1a0033" />
      <Path d="M34 50 Q50 60 66 50" stroke="#1a0033" strokeWidth="2" fill="none" />
      {/* Teeth */}
      <Rect x="38" y="50" width="4" height="5" rx="1" fill="white" />
      <Rect x="45" y="51" width="4" height="5" rx="1" fill="white" />
      <Rect x="52" y="51" width="4" height="5" rx="1" fill="white" />
      <Rect x="59" y="50" width="4" height="5" rx="1" fill="white" />
      {/* Warts */}
      <Circle cx="33" cy="44" r="2.5" fill={secondaryColor} opacity="0.6" />
      <Circle cx="67" cy="48" r="2" fill={secondaryColor} opacity="0.6" />
    </Svg>
  );
}
