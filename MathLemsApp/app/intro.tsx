import { useState, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { router } from 'expo-router';
import { COLORS } from '@/constants/theme';

const LEMS_IMG = require('@/assets/lems-mascot2.png');

const SLIDES = [
  {
    emoji: '👋',
    title: 'Hola! Sóc en Lems!',
    text: 'Sóc un petit drac apassionat per les matemàtiques. Visc en un planeta màgic ple de nombres i enigmes...',
  },
  {
    emoji: '😟',
    title: "M'he perdut per l'univers!",
    text: "Mentre explorava la galàxia, un forat negre m'ha allunyat molt del meu planeta. No sé com tornar a casa!",
  },
  {
    emoji: '🚀',
    title: "Necessito la teva ajuda!",
    text: "Si resolus reptes de matemàtiques, acumularàs energia còsmica. Junts aconseguirem que torni al Planeta Lems!",
  },
];

export default function IntroScreen() {
  const [slide, setSlide] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const lemsSlide = useRef(new Animated.Value(0)).current;

  function advance() {
    const isLast = slide === SLIDES.length - 1;

    if (isLast) {
      router.replace('/onboarding');
      return;
    }

    // Fade out → canvi de slide → fade in
    Animated.timing(fadeAnim, { toValue: 0, duration: 180, useNativeDriver: true }).start(() => {
      setSlide((s) => s + 1);
      Animated.timing(fadeAnim, { toValue: 1, duration: 220, useNativeDriver: true }).start();
    });
  }

  const isLast = slide === SLIDES.length - 1;
  const current = SLIDES[slide];

  return (
    <View style={styles.container}>

      {/* Estrelles de fons */}
      <Text style={[styles.bgStar, { top: 60,  left: 30  }]}>✨</Text>
      <Text style={[styles.bgStar, { top: 120, right: 40 }]}>⭐</Text>
      <Text style={[styles.bgStar, { top: 200, left: 80  }]}>🌟</Text>
      <Text style={[styles.bgStar, { bottom: 180, right: 20 }]}>✨</Text>
      <Text style={[styles.bgStar, { bottom: 260, left: 15 }]}>⭐</Text>

      <Animated.View style={[styles.content, { opacity: fadeAnim }]}>

        {/* Mascota */}
        <View style={styles.mascotContainer}>
          <Image source={LEMS_IMG} style={styles.mascot} resizeMode="contain" />
          <Text style={styles.slideEmoji}>{current.emoji}</Text>
        </View>

        {/* Bombolla de text */}
        <View style={styles.bubble}>
          <Text style={styles.bubbleTitle}>{current.title}</Text>
          <Text style={styles.bubbleText}>{current.text}</Text>
        </View>

      </Animated.View>

      {/* Punts indicadors */}
      <View style={styles.dots}>
        {SLIDES.map((_, i) => (
          <View key={i} style={[styles.dot, i === slide && styles.dotActive]} />
        ))}
      </View>

      {/* Botó */}
      <TouchableOpacity
        style={[styles.button, isLast && styles.buttonLast]}
        onPress={advance}
        activeOpacity={0.85}
      >
        <Text style={styles.buttonText}>
          {isLast ? "T'ajudo, Lems! 🚀" : 'Següent →'}
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgDark,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 60,
    paddingHorizontal: 24,
  },

  bgStar: {
    position: 'absolute',
    fontSize: 20,
    opacity: 0.4,
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 28,
    width: '100%',
  },

  mascotContainer: {
    alignItems: 'center',
    position: 'relative',
  },
  mascot: {
    width: 200,
    height: 224,
  },
  slideEmoji: {
    fontSize: 36,
    position: 'absolute',
    top: -10,
    right: -10,
  },

  bubble: {
    backgroundColor: COLORS.bgMid,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.bgLight,
    padding: 20,
    width: '100%',
    gap: 10,
  },
  bubbleTitle: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 22,
    color: COLORS.gold,
    textAlign: 'center',
  },
  bubbleText: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 16,
    color: COLORS.text,
    textAlign: 'center',
    lineHeight: 24,
  },

  dots: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.bgLight,
  },
  dotActive: {
    backgroundColor: COLORS.gold,
    width: 24,
  },

  button: {
    backgroundColor: COLORS.bgMid,
    borderRadius: 18,
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderWidth: 1,
    borderColor: COLORS.bgLight,
  },
  buttonLast: {
    backgroundColor: COLORS.purple,
    borderColor: COLORS.purpleLight,
  },
  buttonText: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 18,
    color: COLORS.text,
  },
});
