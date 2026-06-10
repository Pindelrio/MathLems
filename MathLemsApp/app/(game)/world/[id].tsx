import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { WORLDS } from '@/data/worlds';
import { LEMS_WORLDS } from '@/data/lems-worlds';
import { getProblemsForWorld } from '@/data/problems';
import { getLemsProblemsForWorld } from '@/data/lems-problems';
import { useGameStore } from '@/store/gameStore';
import { COLORS } from '@/constants/theme';

export default function WorldDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const worldId = Number(id);
  const world = WORLDS.find((w) => w.id === worldId) ?? LEMS_WORLDS.find((w) => w.id === worldId);
  const { worldProgress, startWorld } = useGameStore();
  const isLemsWorld = worldId >= 4;
  const problems = isLemsWorld ? getLemsProblemsForWorld(worldId) : getProblemsForWorld(worldId);
  const progress = worldProgress[worldId];

  if (!world) return null;

  function handlePlay() {
    startWorld(worldId);
    router.push('/(game)/play');
  }

  const operationLabels: Record<string, string> = {
    sum: 'Sumes ➕',
    sub: 'Restes ➖',
    mul: 'Multiplicacions ✖️',
    div: 'Divisions ➗',
  };

  return (
    <View style={[styles.container, { backgroundColor: world.bgColor }]}>
      {/* Back */}
      <TouchableOpacity onPress={() => router.back()} style={styles.back}>
        <Text style={styles.backText}>← Enrere</Text>
      </TouchableOpacity>

      {/* World header */}
      <View style={styles.header}>
        <Text style={styles.worldEmoji}>{world.emoji}</Text>
        <Text style={[styles.worldName, { color: world.accentColor }]}>
          {isLemsWorld ? `Repte ${world.id - 3}` : `Món ${world.id}`}: {world.name}
        </Text>
        <Text style={styles.worldSubtitle}>{world.subtitle}</Text>
      </View>

      {/* Info */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          {isLemsWorld ? 'Operacions a identificar' : "Operacions d'aquest món"}
        </Text>
        {world.operations.map((op) => (
          <Text key={op} style={styles.opItem}>
            {operationLabels[op]}
          </Text>
        ))}

        <View style={styles.divider} />

        <Text style={styles.cardTitle}>Informació</Text>
        <Text style={styles.infoText}>📝 {problems.length} preguntes</Text>
        <Text style={styles.infoText}>❤️ 5 vides</Text>
        {progress?.completed && (
          <Text style={[styles.infoText, { color: world.accentColor }]}>
            🏆 Millor puntuació: {progress.bestScore ?? progress.score} pts
          </Text>
        )}
      </View>

      {/* Play button */}
      <TouchableOpacity
        style={[styles.playButton, { backgroundColor: world.accentColor }]}
        onPress={handlePlay}
        activeOpacity={0.8}
      >
        <Text style={styles.playButtonText}>
          {progress?.completed ? '🔄 Repetir món' : '⚔️ Comença!'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 24 },
  back: { marginTop: 56, marginBottom: 8 },
  backText: {
    fontFamily: 'Quicksand-SemiBold',
    fontSize: 16,
    color: COLORS.text,
  },

  header: { alignItems: 'center', marginVertical: 24 },
  worldEmoji: { fontSize: 80 },
  worldName: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 28,
    marginTop: 8,
    textAlign: 'center',
  },
  worldSubtitle: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 15,
    color: COLORS.textDim,
    marginTop: 4,
  },

  card: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 20,
    padding: 20,
    gap: 8,
  },
  cardTitle: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 16,
    color: COLORS.gold,
    marginBottom: 4,
    marginTop: 8,
  },
  opItem: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 15,
    color: COLORS.text,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.1)',
    marginVertical: 8,
  },
  infoText: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 14,
    color: COLORS.textDim,
  },

  playButton: {
    borderRadius: 18,
    paddingVertical: 18,
    alignItems: 'center',
    marginTop: 24,
  },
  playButtonText: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 20,
    color: COLORS.bgDark,
  },
});
