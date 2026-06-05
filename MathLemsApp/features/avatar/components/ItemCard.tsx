import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Svg, { Rect } from 'react-native-svg';
import { AvatarItem, ItemRarity } from '../engine/types';
import { COLORS, FONTS, SIZES } from '@/constants/theme';

interface Props {
  item: AvatarItem;
  isEquipped: boolean;
  isUnlocked: boolean;
  onPress: () => void;
}

const RARITY_COLORS: Record<ItemRarity, string> = {
  common: COLORS.textDim,
  rare:   COLORS.gold,
  epic:   '#A855F7',
};

export default function ItemCard({ item, isEquipped, isUnlocked, onPress }: Props) {
  const borderColor = isEquipped
    ? COLORS.gold
    : isUnlocked
    ? RARITY_COLORS[item.rarity]
    : COLORS.bgLight;

  const Item = item.Component;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={!isUnlocked}
      style={[styles.card, { borderColor }, isEquipped && styles.cardEquipped]}
      activeOpacity={0.75}
    >
      <View style={[styles.preview, !isUnlocked && styles.previewLocked]}>
        <Item size={64} />
        {!isUnlocked && <View style={styles.lockOverlay} />}
      </View>
      <Text style={[styles.name, !isUnlocked && styles.nameLocked]} numberOfLines={2}>
        {item.name}
      </Text>
      {item.rarity !== 'common' && (
        <Text style={[styles.rarity, { color: RARITY_COLORS[item.rarity] }]}>
          {item.rarity === 'epic' ? '★★★' : '★★'}
        </Text>
      )}
      {isEquipped && <Text style={styles.equippedBadge}>Equipat</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 90,
    borderRadius: 14,
    borderWidth: 2,
    backgroundColor: COLORS.bgMid,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 6,
    gap: 4,
  },
  cardEquipped: {
    backgroundColor: COLORS.bgLight,
  },
  preview: {
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
  previewLocked: {
    opacity: 0.3,
  },
  lockOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
  },
  name: {
    fontFamily: FONTS.semibold,
    fontSize: SIZES.xs,
    color: COLORS.text,
    textAlign: 'center',
  },
  nameLocked: {
    color: COLORS.textDim,
  },
  rarity: {
    fontSize: 9,
    fontFamily: FONTS.bold,
  },
  equippedBadge: {
    fontSize: 8,
    fontFamily: FONTS.bold,
    color: COLORS.gold,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
});
