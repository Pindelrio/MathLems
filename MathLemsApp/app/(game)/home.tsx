import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { usePlayerStore } from '@/store/playerStore';
import { useGameStore } from '@/store/gameStore';
import { useAvatarStore } from '@/features/avatar/store/avatarStore';
import { getAvatarBase } from '@/features/avatar/data/bases';
import { AVATAR_ITEMS } from '@/features/avatar/data/items';
import { composeAvatar } from '@/features/avatar/engine/composer';
import AvatarRenderer from '@/features/avatar/components/AvatarRenderer';
import { WORLDS } from '@/data/worlds';
import { LEMS_WORLDS } from '@/data/lems-worlds';
import { COLORS } from '@/constants/theme';
import WorldCard from '@/components/ui/WorldCard';
import { getLemsImage, getLemsStage, pointsToNextStage } from '@/utils/lemsEvolution';

export default function HomeScreen() {
  const { name, totalScore, activePlanet } = usePlayerStore();
  const { worldProgress, isWorldUnlocked } = useGameStore();
  const { baseId, equipped } = useAvatarStore();

  const base = getAvatarBase(baseId);
  const composed = composeAvatar(base, equipped, AVATAR_ITEMS);

  const worlds = activePlanet === 'lems' ? LEMS_WORLDS : WORLDS;
  const isMaths = activePlanet === 'maths';

  const lemsStage = getLemsStage(totalScore);
  const lemsImg = getLemsImage(totalScore);
  const nextStagePoints = pointsToNextStage(totalScore);

  function handleWorldPress(worldId: number) {
    router.push(`/(game)/world/${worldId}`);
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.playerInfo}>
          <View style={styles.avatarCircle}>
            <AvatarRenderer avatar={composed} size={48} />
          </View>
          <View>
            <Text style={styles.greeting}>Hola, {name}!</Text>
            <Text style={styles.score}>🏆 {totalScore} punts totals</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => router.push('/(game)/settings')}
          style={styles.settingsBtn}
        >
          <Text style={styles.settingsIcon}>⚙️</Text>
        </TouchableOpacity>
      </View>

      {/* Planet tag + switch button */}
      <View style={styles.planetBar}>
        <View style={[styles.planetTag, isMaths ? styles.planetTagMaths : styles.planetTagLems]}>
          <Text style={styles.planetTagText}>
            {isMaths ? '🌍 Planeta Maths' : '🧩 Planeta Lems'}
          </Text>
        </View>
        <TouchableOpacity onPress={() => router.push('/planet-select')} style={styles.switchBtn}>
          <Text style={styles.switchBtnText}>canviar</Text>
        </TouchableOpacity>
      </View>

      {/* Lems mascot + evolució */}
      <View style={styles.lemsContainer}>
        <View style={styles.lemsAvatarWrap}>
          <Image
            source={lemsImg}
            style={styles.lemsImg}
            resizeMode="contain"
          />
          <Text style={styles.lemsStageLabel}>Niv. {lemsStage}</Text>
        </View>
        <View style={styles.speechBubble}>
          <Text style={styles.speechText}>
            {isMaths
              ? 'Escull un món i comencem!'
              : 'Descobreix quina operació cal fer!'}
          </Text>
          {nextStagePoints !== null && (
            <Text style={styles.evolutionHint}>
              ⬆️ {nextStagePoints} pts per evolucionar
            </Text>
          )}
          {nextStagePoints === null && (
            <Text style={styles.evolutionMax}>🐉 Forma màxima!</Text>
          )}
        </View>
      </View>

      {/* World list */}
      <ScrollView
        style={styles.list}
        contentContainerStyle={{ padding: 16, paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionTitle}>
          {isMaths ? '🗺️ Els teus móns' : '🧩 Reptes de Lems'}
        </Text>
        {worlds.map((world) => (
          <WorldCard
            key={world.id}
            world={world}
            progress={worldProgress[world.id]}
            unlocked={isWorldUnlocked(world.id)}
            onPress={() => handleWorldPress(world.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bgDark },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 56,
    paddingBottom: 16,
    backgroundColor: COLORS.bgMid,
  },
  playerInfo: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  avatarCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: COLORS.bgDark,
    borderWidth: 2,
    borderColor: COLORS.gold,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  greeting: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 18,
    color: COLORS.text,
  },
  score: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 13,
    color: COLORS.gold,
  },
  settingsBtn: { padding: 8 },
  settingsIcon: { fontSize: 24 },

  lemsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    gap: 12,
  },
  lemsAvatarWrap: { alignItems: 'center' },
  lemsImg: { width: 64, height: 72 },
  lemsStageLabel: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 11,
    color: COLORS.gold,
    marginTop: 2,
  },
  speechBubble: {
    flex: 1,
    backgroundColor: COLORS.bgMid,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: COLORS.bgLight,
    padding: 12,
    gap: 4,
  },
  speechText: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 14,
    color: COLORS.text,
  },
  evolutionHint: {
    fontFamily: 'Quicksand-SemiBold',
    fontSize: 12,
    color: '#A78BFA',
  },
  evolutionMax: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 12,
    color: COLORS.gold,
  },

  planetBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 8,
  },
  planetTag: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
    borderWidth: 1,
  },
  planetTagMaths: {
    backgroundColor: '#0C1A4A',
    borderColor: '#1E3A8A',
  },
  planetTagLems: {
    backgroundColor: '#1A0B3A',
    borderColor: '#4C1D95',
  },
  planetTagText: {
    fontFamily: 'Quicksand-SemiBold',
    fontSize: 13,
    color: COLORS.text,
  },
  switchBtn: { padding: 6 },
  switchBtnText: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 13,
    color: COLORS.textDim,
    textDecorationLine: 'underline',
  },

  list: { flex: 1 },
  sectionTitle: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 20,
    color: COLORS.gold,
    marginBottom: 8,
  },
});
