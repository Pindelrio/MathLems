import { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  ScrollView, StyleSheet, KeyboardAvoidingView, Platform,
} from 'react-native';
import { router } from 'expo-router';
import { usePlayerStore } from '@/store/playerStore';
import { useAvatarStore } from '@/features/avatar/store/avatarStore';
import AvatarPicker from '@/components/avatar/AvatarPicker';
import { COLORS } from '@/constants/theme';

export default function OnboardingScreen() {
  const [name, setName]       = useState('');
  const [avatarId, setAvatar] = useState('wizard');
  const { setName: saveName, setAvatar: saveAvatar, completeOnboarding } = usePlayerStore();
  const { setBase } = useAvatarStore();

  function handleStart() {
    if (!name.trim()) return;
    saveName(name.trim());
    saveAvatar(avatarId);
    setBase(avatarId);
    completeOnboarding();
    router.replace('/planet-select');
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.egg}>🥚</Text>
          <Text style={styles.title}>Benvingut/da!</Text>
          <Text style={styles.subtitle}>
            Ajuda en Lems a convertir-se en un gran drac aprenent matemàtiques
          </Text>
        </View>

        {/* Name */}
        <View style={styles.section}>
          <Text style={styles.label}>Com et dius?</Text>
          <TextInput
            style={styles.input}
            placeholder="El teu nom d'aventurer/a"
            placeholderTextColor={COLORS.textDim}
            value={name}
            onChangeText={setName}
            maxLength={20}
            autoCapitalize="words"
          />
        </View>

        {/* Avatar */}
        <View style={styles.section}>
          <Text style={styles.label}>Tria el teu avatar</Text>
          <AvatarPicker selected={avatarId} onSelect={setAvatar} />
        </View>

        {/* Button */}
        <TouchableOpacity
          style={[styles.button, !name.trim() && styles.buttonDisabled]}
          onPress={handleStart}
          activeOpacity={0.8}
          disabled={!name.trim()}
        >
          <Text style={styles.buttonText}>🐉 Comença l'aventura!</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bgDark },
  scroll: { padding: 24, paddingBottom: 40 },
  header: { alignItems: 'center', marginBottom: 32, marginTop: 16 },
  egg:    { fontSize: 72, marginBottom: 12 },
  title: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 32,
    color: COLORS.gold,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 15,
    color: COLORS.textDim,
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 22,
  },
  section: { marginBottom: 28 },
  label: {
    fontFamily: 'Quicksand-SemiBold',
    fontSize: 16,
    color: COLORS.text,
    marginBottom: 12,
  },
  input: {
    backgroundColor: COLORS.bgMid,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: COLORS.bgLight,
    color: COLORS.text,
    fontFamily: 'Quicksand-Regular',
    fontSize: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  button: {
    backgroundColor: COLORS.gold,
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonDisabled: { opacity: 0.4 },
  buttonText: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 18,
    color: COLORS.bgDark,
  },
});
