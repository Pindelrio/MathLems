import React from 'react';
import Svg, { Circle, Ellipse, Path, Rect, Line } from 'react-native-svg';
import { AvatarSVGProps } from '../../engine/types';

export default function RobotSVG({ size, primaryColor = '#6366F1', secondaryColor = '#A5B4FC' }: AvatarSVGProps) {
  const s = size;
  return (
    <Svg width={s} height={s} viewBox="0 0 100 100">
      {/* Body */}
      <Rect x="28" y="64" width="44" height="32" rx="4" fill={primaryColor} />
      {/* Body panel details */}
      <Rect x="34" y="70" width="12" height="8" rx="2" fill={secondaryColor} opacity="0.4" />
      <Rect x="54" y="70" width="12" height="8" rx="2" fill={secondaryColor} opacity="0.4" />
      <Rect x="36" y="82" width="28" height="4" rx="2" fill={secondaryColor} opacity="0.3" />
      {/* Neck connector */}
      <Rect x="43" y="56" width="14" height="10" rx="2" fill={primaryColor} stroke={secondaryColor} strokeWidth="1" />
      {/* Head */}
      <Rect x="28" y="20" width="44" height="38" rx="6" fill={primaryColor} stroke={secondaryColor} strokeWidth="1.5" />
      {/* Antenna */}
      <Line x1="50" y1="20" x2="50" y2="12" stroke={secondaryColor} strokeWidth="2" strokeLinecap="round" />
      <Circle cx="50" cy="10" r="3" fill={secondaryColor} />
      <Circle cx="50" cy="10" r="1.5" fill="white" opacity="0.6" />
      {/* Eyes (screen-like) */}
      <Rect x="34" y="30" width="13" height="10" rx="3" fill="#1E1B4B" />
      <Rect x="53" y="30" width="13" height="10" rx="3" fill="#1E1B4B" />
      {/* Eye glow */}
      <Ellipse cx="40" cy="35" rx="4" ry="3" fill={secondaryColor} opacity="0.8" />
      <Ellipse cx="59" cy="35" rx="4" ry="3" fill={secondaryColor} opacity="0.8" />
      <Circle cx="40" cy="35" r="1.5" fill="white" opacity="0.6" />
      <Circle cx="59" cy="35" r="1.5" fill="white" opacity="0.6" />
      {/* Mouth display */}
      <Rect x="36" y="46" width="28" height="6" rx="2" fill="#1E1B4B" />
      <Path d="M39 49 L44 48 L50 50 L56 48 L61 49" stroke={secondaryColor} strokeWidth="1.2" fill="none" strokeLinecap="round" />
      {/* Side bolts */}
      <Circle cx="28" cy="32" r="2" fill={secondaryColor} />
      <Circle cx="72" cy="32" r="2" fill={secondaryColor} />
      <Circle cx="28" cy="44" r="2" fill={secondaryColor} />
      <Circle cx="72" cy="44" r="2" fill={secondaryColor} />
    </Svg>
  );
}
