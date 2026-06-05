import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { AvatarSVGProps } from '../../engine/types';

export default function ThinMustacheSVG({ size, primaryColor = '#3D2B1F' }: AvatarSVGProps) {
  const s = size;
  return (
    <Svg width={s} height={s} viewBox="0 0 100 100">
      {/* Pencil-thin mustache */}
      <Path d="M38 52 Q44 50 50 52 Q56 50 62 52" stroke={primaryColor} strokeWidth="2" fill="none" strokeLinecap="round" />
    </Svg>
  );
}
