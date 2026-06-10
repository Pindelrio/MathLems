import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { usePlayerStore } from '@/store/playerStore';
import { COLORS } from '@/constants/theme';

export default function PlanetSelectScreen() {
  const { activePlanet, setPlanet } = usePlayerStore();

  function handleSelect(planet: 'maths' | 'lems') {
    setPlanet(planet);
    router.replace('/(game)/home');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
        source={require('@/assets/lems-mascot2.png')}
        style={styles.lemsImg}
        resizeMode="contain"
      />
        <Text style={styles.title}>On vols jugar avui?</Text>
        <Text style={styles.subtitle}>Escull el teu planeta</Text>
      </View>

      <View style={styles.cards}>
        <TouchableOpacity
          style={[styles.card, styles.cardMaths, activePlanet === 'maths' && styles.cardActive]}
          onPress={() => handleSelect('maths')}
          activeOpacity={0.85}
        >
          <Text style={styles.cardEmoji}>🌍</Text>
          <Text style={styles.cardName}>Planeta Maths</Text>
          <Text style={styles.cardDesc}>
            Practica càlcul mental.{'\n'}Sumes, restes, multiplicacions i divisions.
          </Text>
          {activePlanet === 'maths' && <Text style={styles.lastPlayed}>Última sessió ⭐</Text>}
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, styles.cardLems, activePlanet === 'lems' && styles.cardActiveLems]}
          onPress={() => handleSelect('lems')}
          activeOpacity={0.85}
        >
          <Text style={styles.cardEmoji}>🧩</Text>
          <Text style={styles.cardName}>Planeta Lems</Text>
          <Text style={styles.cardDesc}>
            Descobreix quina operació cal fer.{'\n'}Problemes de la vida real!
          </Text>
          {activePlanet === 'lems' && <Text style={styles.lastPlayed}>Última sessió ⭐</Text>}
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgDark,
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 32,
  },
  header: {
    alignItems: 'center',
    marginBottom: 36,
  },
  lemsImg: { width: 110, height: 123, marginBottom: 8 },
  title: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 28,
    color: COLORS.gold,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 15,
    color: COLORS.textDim,
    marginTop: 6,
  },

  cards: { flex: 1, gap: 20 },

  card: {
    flex: 1,
    borderRadius: 20,
    padding: 28,
    borderWidth: 2,
    justifyContent: 'center',
    gap: 8,
  },
  cardMaths: {
    backgroundColor: '#0C1A4A',
    borderColor: '#1E3A8A',
  },
  cardLems: {
    backgroundColor: '#1A0B3A',
    borderColor: '#4C1D95',
  },
  cardActive: {
    borderColor: COLORS.gold,
  },
  cardActiveLems: {
    borderColor: COLORS.purpleLight,
  },

  cardEmoji: { fontSize: 52 },
  cardName: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 26,
    color: COLORS.text,
  },
  cardDesc: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 14,
    color: COLORS.textDim,
    lineHeight: 22,
  },
  lastPlayed: {
    fontFamily: 'Quicksand-SemiBold',
    fontSize: 13,
    color: COLORS.gold,
    marginTop: 4,
  },
  arrow: {
    fontSize: 28,
    color: COLORS.gold,
    position: 'absolute',
    right: 24,
    bottom: 24,
  },
});
