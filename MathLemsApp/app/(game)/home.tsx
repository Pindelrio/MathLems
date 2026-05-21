import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { usePlayerStore } from '@/store/playerStore';
import { useGameStore } from '@/store/gameStore';
import { WORLDS } from '@/data/worlds';
import { COLORS } from '@/constants/theme';
import WorldCard from '@/components/ui/WorldCard';
import { AVATARS } from '@/components/avatar/AvatarPicker';

export default function HomeScreen() {
  const { name, avatarId, totalScore } = usePlayerStore();
  const { worldProgress, isWorldUnlocked } = useGameStore();

  const avatar = AVATARS.find((a) => a.id === avatarId);

  function handleWorldPress(worldId: number) {
    router.push(`/(game)/world/${worldId}`);
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.playerInfo}>
          <Text style={styles.avatarEmoji}>{avatar?.emoji ?? '🧙‍♂️'}</Text>
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

      {/* Lems mascot */}
      <View style={styles.lemsContainer}>
        <Text style={styles.lemsEmoji}>🐉</Text>
        <View style={styles.speechBubble}>
          <Text style={styles.speechText}>
            Escull un món i comencem!
          </Text>
        </View>
      </View>

      {/* World list */}
      <ScrollView
        style={styles.list}
        contentContainerStyle={{ padding: 16, paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionTitle}>🗺️ Els teus móns</Text>
        {WORLDS.map((world) => (
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
  avatarEmoji: { fontSize: 36 },
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
    paddingVertical: 16,
    gap: 12,
  },
  lemsEmoji: { fontSize: 52 },
  speechBubble: {
    flex: 1,
    backgroundColor: COLORS.bgMid,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: COLORS.bgLight,
    padding: 12,
  },
  speechText: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 14,
    color: COLORS.text,
  },

  list: { flex: 1 },
  sectionTitle: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 20,
    color: COLORS.gold,
    marginBottom: 8,
  },
});
