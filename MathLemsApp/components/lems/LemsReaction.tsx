import { useRef, useEffect } from 'react';
import { Animated, Text, StyleSheet, Easing } from 'react-native';

type Mood = 'idle' | 'correct' | 'wrong' | 'bonus';

interface LemsReactionProps {
  mood: Mood;
}

const MOOD_EMOJI: Record<Mood, string> = {
  idle:    '🐉',
  correct: '🐉',
  wrong:   '🐉',
  bonus:   '🐲',
};

const MOOD_LABEL: Record<Mood, string> = {
  idle:    '',
  correct: '¡Molt bé! ✨',
  wrong:   'Au va, prova-ho! 💪',
  bonus:   '3 seguits! 🔥',
};

export default function LemsReaction({ mood }: LemsReactionProps) {
  const bounce = useRef(new Animated.Value(0)).current;
  const shake  = useRef(new Animated.Value(0)).current;
  const star   = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (mood === 'correct' || mood === 'bonus') {
      Animated.sequence([
        Animated.timing(bounce, { toValue: -20, duration: 150, useNativeDriver: true }),
        Animated.spring(bounce,  { toValue: 0,   useNativeDriver: true }),
      ]).start();
      if (mood === 'bonus') {
        Animated.sequence([
          Animated.timing(star, { toValue: 1, duration: 300, useNativeDriver: true }),
          Animated.delay(800),
          Animated.timing(star, { toValue: 0, duration: 300, useNativeDriver: true }),
        ]).start();
      }
    } else if (mood === 'wrong') {
      Animated.sequence([
        Animated.timing(shake, { toValue: 8,  duration: 60, useNativeDriver: true }),
        Animated.timing(shake, { toValue: -8, duration: 60, useNativeDriver: true }),
        Animated.timing(shake, { toValue: 6,  duration: 60, useNativeDriver: true }),
        Animated.timing(shake, { toValue: 0,  duration: 60, useNativeDriver: true }),
      ]).start();
    }
  }, [mood]);

  return (
    <Animated.View
      style={[
        styles.container,
        { transform: [{ translateY: bounce }, { translateX: shake }] },
      ]}
    >
      <Text style={styles.emoji}>{MOOD_EMOJI[mood]}</Text>
      {MOOD_LABEL[mood] ? (
        <Text style={[
          styles.label,
          mood === 'wrong' && styles.labelWrong,
          mood === 'bonus' && styles.labelBonus,
        ]}>
          {MOOD_LABEL[mood]}
        </Text>
      ) : null}
      <Animated.Text style={[styles.star, { opacity: star }]}>⭐⭐⭐</Animated.Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  emoji:     { fontSize: 64 },
  label: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 14,
    color: '#4ADE80',
    marginTop: 4,
  },
  labelWrong: { color: '#FF4500' },
  labelBonus: { color: '#FFD700' },
  star: {
    fontSize: 20,
    position: 'absolute',
    top: -12,
  },
});
