import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ComposedAvatar, AvatarSVGProps } from '../engine/types';

interface Props {
  avatar: ComposedAvatar;
  size?: number;
}

/**
 * Renders a base avatar with all equipped item overlays stacked by z-order.
 * Each layer is absolutely positioned over the same square canvas.
 */
export default function AvatarRenderer({ avatar, size = 100 }: Props) {
  const svgProps: AvatarSVGProps = { size };
  const { base, layers } = avatar;
  const Base = base.Component;

  return (
    <View style={[styles.canvas, { width: size, height: size }]}>
      <Base {...svgProps} />
      {layers.map(({ slot, item }) => {
        const Item = item.Component;
        return (
          <View key={slot} style={StyleSheet.absoluteFill} pointerEvents="none">
            <Item {...svgProps} />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  canvas: {
    position: 'relative',
  },
});
