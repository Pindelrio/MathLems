import { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Animated, Easing } from 'react-native';
import { router } from 'expo-router';
import { useGameStore } from '@/store/gameStore';
import { usePlayerStore } from '@/store/playerStore';
import { WORLDS } from '@/data/worlds';
import { LEMS_WORLDS } from '@/data/lems-worlds';
import { REWARDS, BONUS_ITEMS } from '@/data/rewards';
import { COLORS } from '@/constants/theme';

export default function ResultScreen() {
  const {
    currentWorldId,
    sessionScore,
    collectedItems,
    lives,
    worldProgress,
    resetSession,
    isWorldUnlocked,
  } = useGameStore();
  const { totalScore } = usePlayerStore();

  const worldId    = currentWorldId ?? 1;
  const isLemsWorld = worldId >= 4;
  const allWorlds  = [...WORLDS, ...LEMS_WORLDS];
  const world      = allWorlds.find((w) => w.id === worldId)!;
  const completed  = lives > 0;
  const nextWorld  = allWorlds.find((w) => w.id === worldId + 1);

  // animations
  const starScale  = useRef(new Animated.Value(0)).current;
  const fadeIn     = useRef(new Animated.Value(0)).current;
  const scoreCount = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(starScale, { toValue: 1, friction: 4, useNativeDriver: true }),
      Animated.timing(fadeIn,    { toValue: 1, duration: 600, delay: 400, useNativeDriver: true }),
      Animated.timing(scoreCount,{ toValue: sessionScore, duration: 1000, easing: Easing.out(Easing.cubic), useNativeDriver: false }),
    ]).start();
  }, []);

  const allItems = [...REWARDS, ...BONUS_ITEMS];
  const earnedItems = collectedItems
    .map((id) => allItems.find((i) => i.id === id))
    .filter(Boolean);

  function handleContinue() {
    resetSession();
    router.replace('/(game)/home');
  }

  function handleRepeat() {
    router.replace(`/(game)/world/${worldId}`);
  }

  return (
    <View style={[styles.container, { backgroundColor: world.bgColor }]}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>

        {/* Result emoji */}
        <Animated.View style={[styles.center, { transform: [{ scale: starScale }] }]}>
          <Text style={styles.resultEmoji}>
            {completed ? '🏆' : '💔'}
          </Text>
          <Text style={[styles.resultTitle, { color: world.accentColor }]}>
            {completed ? 'Molt bé!' : 'Prova-ho de nou!'}
          </Text>
        </Animated.View>

        {/* Badge if completed */}
        {completed && (
          <Animated.View style={[styles.badge, { opacity: fadeIn }]}>
            <Text style={styles.badgeEmoji}>{world.emoji}</Text>
            <Text style={[styles.badgeText, { color: world.accentColor }]}>
              {isLemsWorld ? `Insignia del Repte ${world.id - 3}!` : `Insignia del Món ${world.id}!`}
            </Text>
          </Animated.View>
        )}

        {/* Score */}
        <Animated.View style={[styles.scoreCard, { opacity: fadeIn }]}>
          <Text style={styles.scoreLabel}>Punts d'aquesta partida</Text>
          <Animated.Text style={[styles.scoreValue, { color: world.accentColor }]}>
            {sessionScore}
          </Animated.Text>
          <Text style={styles.totalLabel}>Total acumulat: {totalScore} pts</Text>
        </Animated.View>

        {/* Items collected */}
        {earnedItems.length > 0 && (
          <Animated.View style={[styles.itemsCard, { opacity: fadeIn }]}>
            <Text style={styles.itemsTitle}>Ítems guanyats</Text>
            <View style={styles.itemsRow}>
              {earnedItems.map((item, i) => (
                <View key={i} style={styles.itemChip}>
                  <Text style={styles.itemEmoji}>{item!.emoji}</Text>
                  <Text style={styles.itemName}>{item!.name}</Text>
                </View>
              ))}
            </View>
          </Animated.View>
        )}

        {/* Next world unlock */}
        {completed && nextWorld && isWorldUnlocked(nextWorld.id) && (
          <Animated.View style={[styles.unlockCard, { opacity: fadeIn, borderColor: nextWorld.accentColor }]}>
            <Text style={styles.unlockTitle}>🔓 Nou món desbloquejat!</Text>
            <Text style={[styles.unlockName, { color: nextWorld.accentColor }]}>
              {nextWorld.emoji} {nextWorld.id >= 4 ? `Repte ${nextWorld.id - 3}` : `Món ${nextWorld.id}`}: {nextWorld.name}
            </Text>
          </Animated.View>
        )}

        {/* Buttons */}
        <Animated.View style={[styles.buttons, { opacity: fadeIn }]}>
          <TouchableOpacity
            style={[styles.btn, { backgroundColor: world.accentColor }]}
            onPress={handleContinue}
            activeOpacity={0.8}
          >
            <Text style={[styles.btnText, { color: COLORS.bgDark }]}>🗺️ Tornar al mapa</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.btnSecondary]}
            onPress={handleRepeat}
            activeOpacity={0.8}
          >
            <Text style={styles.btnText}>🔄 Repetir món</Text>
          </TouchableOpacity>
        </Animated.View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { padding: 24, paddingTop: 60, paddingBottom: 40 },
  center: { alignItems: 'center', marginBottom: 24 },
  resultEmoji: { fontSize: 80 },
  resultTitle: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 32,
    marginTop: 8,
  },

  badge: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
  },
  badgeEmoji: { fontSize: 48 },
  badgeText: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 16,
    marginTop: 8,
  },

  scoreCard: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  scoreLabel: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 13,
    color: COLORS.textDim,
  },
  scoreValue: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 56,
    lineHeight: 68,
  },
  totalLabel: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 12,
    color: COLORS.textDim,
    marginTop: 4,
  },

  itemsCard: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  itemsTitle: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 14,
    color: COLORS.gold,
    marginBottom: 12,
  },
  itemsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  itemChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.bgMid,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 6,
    gap: 4,
  },
  itemEmoji: { fontSize: 18 },
  itemName: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 12,
    color: COLORS.text,
  },

  unlockCard: {
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    marginBottom: 16,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  unlockTitle: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 14,
    color: COLORS.text,
  },
  unlockName: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 18,
    marginTop: 4,
  },

  buttons: { gap: 12, marginTop: 8 },
  btn: {
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
  },
  btnSecondary: {
    backgroundColor: COLORS.bgMid,
    borderWidth: 1,
    borderColor: COLORS.bgLight,
  },
  btnText: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 17,
    color: COLORS.text,
  },
});
