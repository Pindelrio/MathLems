import { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  ScrollView, StyleSheet, Alert,
} from 'react-native';
import { router } from 'expo-router';
import { usePlayerStore } from '@/store/playerStore';
import { useGameStore } from '@/store/gameStore';
import AvatarPicker from '@/components/avatar/AvatarPicker';
import { COLORS } from '@/constants/theme';

export default function SettingsScreen() {
  const player = usePlayerStore();
  const { worldProgress, resetSession } = useGameStore();

  const [name, setName]       = useState(player.name);
  const [avatarId, setAvatar] = useState(player.avatarId);
  const [saved, setSaved]     = useState(false);

  function handleSave() {
    if (!name.trim()) return;
    player.setName(name.trim());
    player.setAvatar(avatarId);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function handleReset() {
    Alert.alert(
      'Reiniciar partida',
      'Perdràs tot el teu progrés. Estàs segur/a?',
      [
        { text: 'Cancel·la', style: 'cancel' },
        {
          text: 'Reinicia',
          style: 'destructive',
          onPress: () => {
            player.reset();
            resetSession();
            router.replace('/');
          },
        },
      ]
    );
  }

  const completedWorlds = Object.values(worldProgress).filter((p) => p.completed).length;

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => router.back()} style={styles.back}>
          <Text style={styles.backText}>← Enrere</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Configuració</Text>
        <View style={{ width: 70 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        {/* Stats */}
        <View style={styles.statsCard}>
          <Text style={styles.sectionTitle}>Les teves estadístiques</Text>
          <View style={styles.statsRow}>
            <StatItem label="Punts totals" value={`${player.totalScore}`} emoji="🏆" />
            <StatItem label="Móns completats" value={`${completedWorlds}/3`} emoji="🗺️" />
            <StatItem label="Insignies" value={`${player.badges.length}`} emoji="🏅" />
          </View>
        </View>

        {/* Badges */}
        {player.badges.length > 0 && (
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>Les teves insignies</Text>
            <View style={styles.badgesRow}>
              {player.badges.map((b) => (
                <Text key={b} style={styles.badgeEmoji}>🏅</Text>
              ))}
            </View>
          </View>
        )}

        {/* Name */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>El teu nom</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            maxLength={20}
            autoCapitalize="words"
            placeholderTextColor={COLORS.textDim}
          />
        </View>

        {/* Avatar */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>El teu avatar</Text>
          <AvatarPicker selected={avatarId} onSelect={setAvatar} />
        </View>

        {/* Save */}
        <TouchableOpacity
          style={[styles.saveBtn, saved && styles.saveBtnDone]}
          onPress={handleSave}
          activeOpacity={0.8}
        >
          <Text style={styles.saveBtnText}>
            {saved ? '✓ Desat!' : '💾 Desar canvis'}
          </Text>
        </TouchableOpacity>

        {/* Danger zone */}
        <View style={styles.dangerCard}>
          <Text style={styles.dangerTitle}>Zona perillosa</Text>
          <TouchableOpacity style={styles.resetBtn} onPress={handleReset}>
            <Text style={styles.resetText}>🗑️ Reiniciar tot el progrés</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

function StatItem({ label, value, emoji }: { label: string; value: string; emoji: string }) {
  return (
    <View style={statStyles.item}>
      <Text style={statStyles.emoji}>{emoji}</Text>
      <Text style={statStyles.value}>{value}</Text>
      <Text style={statStyles.label}>{label}</Text>
    </View>
  );
}

const statStyles = StyleSheet.create({
  item:  { alignItems: 'center', flex: 1 },
  emoji: { fontSize: 24 },
  value: { fontFamily: 'Quicksand-Bold', fontSize: 20, color: COLORS.gold, marginTop: 4 },
  label: { fontFamily: 'Quicksand-Regular', fontSize: 11, color: COLORS.textDim, textAlign: 'center', marginTop: 2 },
});

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bgDark },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 56,
    paddingBottom: 16,
    paddingHorizontal: 20,
    backgroundColor: COLORS.bgMid,
  },
  back: {},
  backText: { fontFamily: 'Quicksand-SemiBold', fontSize: 16, color: COLORS.text },
  title:    { fontFamily: 'Quicksand-Bold',     fontSize: 20, color: COLORS.gold },
  scroll:   { padding: 16, paddingBottom: 40 },

  statsCard: {
    backgroundColor: COLORS.bgMid,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
  statsRow: { flexDirection: 'row', marginTop: 12 },
  card: {
    backgroundColor: COLORS.bgMid,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
  sectionTitle: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 15,
    color: COLORS.gold,
    marginBottom: 12,
  },
  badgesRow: { flexDirection: 'row', gap: 8 },
  badgeEmoji: { fontSize: 32 },

  input: {
    backgroundColor: COLORS.bgDark,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.bgLight,
    color: COLORS.text,
    fontFamily: 'Quicksand-Regular',
    fontSize: 16,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },

  saveBtn: {
    backgroundColor: COLORS.gold,
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 12,
  },
  saveBtnDone: { backgroundColor: COLORS.green },
  saveBtnText: { fontFamily: 'Quicksand-Bold', fontSize: 16, color: COLORS.bgDark },

  dangerCard: {
    backgroundColor: 'rgba(139,0,0,0.2)',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.red,
    padding: 16,
    marginTop: 8,
  },
  dangerTitle: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 14,
    color: COLORS.red,
    marginBottom: 12,
  },
  resetBtn: {
    backgroundColor: COLORS.red,
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  resetText: { fontFamily: 'Quicksand-Bold', fontSize: 14, color: COLORS.text },
});
