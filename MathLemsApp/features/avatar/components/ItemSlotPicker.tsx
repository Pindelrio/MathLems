import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { AvatarItem, AvatarSlot } from '../engine/types';
import { COLORS, FONTS, SIZES } from '@/constants/theme';
import ItemCard from './ItemCard';

interface Props {
  slot: AvatarSlot;
  items: AvatarItem[];
  equippedItemId?: string;
  unlockedItemIds: string[];
  completedWorldIds: number[];
  totalScore: number;
  onEquip: (itemId: string) => void;
  onUnequip: () => void;
}

const SLOT_LABELS: Record<AvatarSlot, string> = {
  hat:       'Barrets',
  glasses:   'Ulleres',
  beard:     'Barbes',
  accessory: 'Accessoris',
};

export default function ItemSlotPicker({
  slot,
  items,
  equippedItemId,
  unlockedItemIds,
  completedWorldIds,
  totalScore,
  onEquip,
  onUnequip,
}: Props) {
  if (items.length === 0) {
    return (
      <View style={styles.empty}>
        <Text style={styles.emptyText}>No hi ha items per aquest slot encara.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{SLOT_LABELS[slot]}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.row}
      >
        {items.map((item) => {
          const isUnlocked = isItemAccessible(item, unlockedItemIds, completedWorldIds, totalScore);
          const isEquipped = item.id === equippedItemId;
          return (
            <ItemCard
              key={item.id}
              item={item}
              isEquipped={isEquipped}
              isUnlocked={isUnlocked}
              onPress={() => (isEquipped ? onUnequip() : onEquip(item.id))}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

function isItemAccessible(
  item: AvatarItem,
  unlockedItemIds: string[],
  completedWorldIds: number[],
  totalScore: number,
): boolean {
  const { unlock } = item;
  switch (unlock.type) {
    case 'free':  return true;
    case 'world': return completedWorldIds.includes(unlock.worldId);
    case 'score': return totalScore >= unlock.points;
    case 'item':  return unlockedItemIds.includes(unlock.itemId);
  }
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  label: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.md,
    color: COLORS.gold,
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 16,
    paddingBottom: 4,
  },
  empty: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    alignItems: 'center',
  },
  emptyText: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.sm,
    color: COLORS.textDim,
  },
});
