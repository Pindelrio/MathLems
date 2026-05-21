import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { WorldDef, WorldProgress } from '@/types';
import { COLORS } from '@/constants/theme';

interface WorldCardProps {
  world: WorldDef;
  progress?: WorldProgress;
  unlocked: boolean;
  onPress: () => void;
}

export default function WorldCard({ world, progress, unlocked, onPress }: WorldCardProps) {
  const completed = progress?.completed ?? false;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={!unlocked}
      activeOpacity={0.8}
      style={[
        styles.card,
        { borderColor: unlocked ? world.accentColor : COLORS.bgLight },
        { backgroundColor: unlocked ? world.bgColor : COLORS.bgMid },
        !unlocked && styles.locked,
      ]}
    >
      {/* World emoji + number */}
      <View style={styles.iconRow}>
        <Text style={styles.emoji}>{world.emoji}</Text>
        {completed && <Text style={styles.check}>✅</Text>}
        {!unlocked  && <Text style={styles.lock}>🔒</Text>}
      </View>

      {/* World info */}
      <View style={styles.info}>
        <Text style={[styles.name, { color: unlocked ? world.accentColor : COLORS.textDim }]}>
          Món {world.id}: {world.name}
        </Text>
        <Text style={styles.subtitle}>{world.subtitle}</Text>

        {/* Progress bar */}
        {unlocked && progress && (
          <View style={styles.progressRow}>
            <Text style={[styles.score, { color: world.accentColor }]}>
              🏆 {progress.bestScore ?? progress.score} pts
            </Text>
          </View>
        )}
        {!unlocked && (
          <Text style={styles.lockMsg}>Completa el món anterior</Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 2,
    padding: 20,
    marginVertical: 8,
    gap: 16,
  },
  locked: { opacity: 0.6 },
  iconRow: { alignItems: 'center', width: 56 },
  emoji:   { fontSize: 44 },
  check:   { fontSize: 18, marginTop: 2 },
  lock:    { fontSize: 18, marginTop: 2 },
  info: { flex: 1 },
  name: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 17,
    marginBottom: 2,
  },
  subtitle: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 13,
    color: COLORS.textDim,
  },
  progressRow: { marginTop: 6 },
  score: {
    fontFamily: 'Quicksand-SemiBold',
    fontSize: 13,
  },
  lockMsg: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 12,
    color: COLORS.textDim,
    marginTop: 4,
  },
});
