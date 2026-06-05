import React, { useState } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAvatarStore } from '../store/avatarStore';
import { usePlayerStore } from '@/store/playerStore';
import { useGameStore } from '@/store/gameStore';
import { getAvatarBase, AVATAR_BASES } from '../data/bases';
import { AVATAR_ITEMS } from '../data/items';
import { composeAvatar } from '../engine/composer';
import { AvatarSlot } from '../engine/types';
import AvatarRenderer from './AvatarRenderer';
import ItemSlotPicker from './ItemSlotPicker';
import { COLORS, FONTS, SIZES } from '@/constants/theme';

const SLOTS: AvatarSlot[] = ['hat', 'glasses', 'beard', 'accessory'];
const SLOT_ICONS: Record<AvatarSlot, string> = {
  hat: '🎩', glasses: '👓', beard: '🧔', accessory: '✨',
};

export default function AvatarEditor() {
  const { baseId, equipped, setBase, equipItem, unequipItem } = useAvatarStore();
  const { unlockedItems, totalScore } = usePlayerStore();
  const worldProgress = useGameStore((s) => s.worldProgress);
  const [activeSlot, setActiveSlot] = useState<AvatarSlot>('hat');
  const [showBasePicker, setShowBasePicker] = useState(false);

  const completedWorldIds = Object.entries(worldProgress)
    .filter(([, p]) => p.completed)
    .map(([id]) => Number(id));

  const base = getAvatarBase(baseId);
  const composed = composeAvatar(base, equipped, AVATAR_ITEMS);
  const slotItems = AVATAR_ITEMS.filter((i) => i.slot === activeSlot);

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        {/* Preview */}
        <View style={styles.previewSection}>
          <View style={styles.previewBg}>
            <AvatarRenderer avatar={composed} size={160} />
          </View>
          <TouchableOpacity
            style={styles.changeBaseBtn}
            onPress={() => setShowBasePicker((v) => !v)}
            activeOpacity={0.8}
          >
            <Text style={styles.changeBaseTxt}>
              {showBasePicker ? 'Tancar' : '🔄 Canviar Personatge'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Base picker */}
        {showBasePicker && (
          <View style={styles.baseGrid}>
            {AVATAR_BASES.map((av) => {
              const AV = av.Component;
              const isSelected = av.id === baseId;
              return (
                <TouchableOpacity
                  key={av.id}
                  style={[styles.baseCard, isSelected && styles.baseCardSelected]}
                  onPress={() => { setBase(av.id); setShowBasePicker(false); }}
                  activeOpacity={0.75}
                >
                  <AV size={64} />
                  <Text style={[styles.baseName, isSelected && styles.baseNameSelected]}>
                    {av.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}

        {/* Slot tabs */}
        <View style={styles.tabs}>
          {SLOTS.map((slot) => {
            const isActive = slot === activeSlot;
            const hasEquipped = !!equipped[slot];
            return (
              <TouchableOpacity
                key={slot}
                style={[styles.tab, isActive && styles.tabActive]}
                onPress={() => setActiveSlot(slot)}
                activeOpacity={0.75}
              >
                <Text style={styles.tabIcon}>{SLOT_ICONS[slot]}</Text>
                {hasEquipped && <View style={styles.tabDot} />}
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Items for active slot */}
        <ItemSlotPicker
          slot={activeSlot}
          items={slotItems}
          equippedItemId={equipped[activeSlot]}
          unlockedItemIds={unlockedItems}
          completedWorldIds={completedWorldIds}
          totalScore={totalScore}
          onEquip={(id) => equipItem(activeSlot, id)}
          onUnequip={() => unequipItem(activeSlot)}
        />

        {/* Unlock hints */}
        <View style={styles.hints}>
          <Text style={styles.hintsTitle}>Com desbloquejar més items</Text>
          <Text style={styles.hintsText}>🎩 Gorra de llana, pajarita i ulleres de cor: gratuïts des del principi</Text>
          <Text style={styles.hintsText}>🌍 Completa mons per barrets, capes i bigotis exclusius</Text>
          <Text style={styles.hintsText}>⭐ Acumula 300+ punts per birret · 800+ per corona reial</Text>
          <Text style={styles.hintsText}>👤 10 personatges base per triar: humans, robot i alienígena!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.bgDark,
  },
  scroll: {
    paddingBottom: 40,
    gap: 24,
  },
  previewSection: {
    alignItems: 'center',
    paddingTop: 24,
    gap: 16,
  },
  previewBg: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: COLORS.bgMid,
    borderWidth: 3,
    borderColor: COLORS.gold,
    alignItems: 'center',
    justifyContent: 'center',
  },
  changeBaseBtn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.textDim,
  },
  changeBaseTxt: {
    fontFamily: FONTS.semibold,
    fontSize: SIZES.sm,
    color: COLORS.textDim,
  },
  baseGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
    paddingHorizontal: 16,
  },
  baseCard: {
    width: 90,
    alignItems: 'center',
    gap: 4,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: COLORS.bgLight,
    backgroundColor: COLORS.bgMid,
    paddingVertical: 8,
  },
  baseCardSelected: {
    borderColor: COLORS.gold,
    backgroundColor: COLORS.bgLight,
  },
  baseName: {
    fontFamily: FONTS.semibold,
    fontSize: SIZES.xs,
    color: COLORS.textDim,
  },
  baseNameSelected: {
    color: COLORS.gold,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    paddingHorizontal: 16,
  },
  tab: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: COLORS.bgMid,
    borderWidth: 2,
    borderColor: COLORS.bgLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabActive: {
    borderColor: COLORS.gold,
    backgroundColor: COLORS.bgLight,
  },
  tabIcon: {
    fontSize: 24,
  },
  tabDot: {
    position: 'absolute',
    top: 6,
    right: 6,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.gold,
  },
  hints: {
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 12,
    backgroundColor: COLORS.bgMid,
    gap: 6,
  },
  hintsTitle: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.sm,
    color: COLORS.textDim,
    marginBottom: 4,
  },
  hintsText: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.xs,
    color: COLORS.textDim,
    lineHeight: 18,
  },
});
