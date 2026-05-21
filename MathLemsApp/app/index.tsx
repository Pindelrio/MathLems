import { useEffect, useRef } from 'react';
import { View, Text, Animated, Easing } from 'react-native';
import { router } from 'expo-router';
import { usePlayerStore } from '@/store/playerStore';
import { COLORS } from '@/constants/theme';

export default function SplashScreen() {
  const isOnboarded = usePlayerStore((s) => s.isOnboarded);

  const eggScale   = useRef(new Animated.Value(0)).current;
  const eggOpacity = useRef(new Animated.Value(0)).current;
  const eggShake   = useRef(new Animated.Value(0)).current;
  const crackOpacity = useRef(new Animated.Value(0)).current;
  const titleOpacity = useRef(new Animated.Value(0)).current;
  const titleY       = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    const shake = Animated.sequence([
      Animated.timing(eggShake, { toValue: 8,  duration: 80, useNativeDriver: true }),
      Animated.timing(eggShake, { toValue: -8, duration: 80, useNativeDriver: true }),
      Animated.timing(eggShake, { toValue: 6,  duration: 80, useNativeDriver: true }),
      Animated.timing(eggShake, { toValue: -6, duration: 80, useNativeDriver: true }),
      Animated.timing(eggShake, { toValue: 0,  duration: 80, useNativeDriver: true }),
    ]);

    Animated.sequence([
      // Egg appears
      Animated.parallel([
        Animated.timing(eggScale,   { toValue: 1, duration: 600, easing: Easing.out(Easing.back(2)), useNativeDriver: true }),
        Animated.timing(eggOpacity, { toValue: 1, duration: 400, useNativeDriver: true }),
      ]),
      Animated.delay(400),
      // Egg shakes
      shake,
      Animated.delay(200),
      shake,
      Animated.delay(300),
      // Crack appears + egg shakes faster
      Animated.parallel([
        Animated.timing(crackOpacity, { toValue: 1, duration: 200, useNativeDriver: true }),
        shake,
      ]),
      Animated.delay(400),
      // Title appears
      Animated.parallel([
        Animated.timing(titleOpacity, { toValue: 1, duration: 600, useNativeDriver: true }),
        Animated.timing(titleY, { toValue: 0, duration: 600, easing: Easing.out(Easing.cubic), useNativeDriver: true }),
      ]),
      Animated.delay(1200),
    ]).start(() => {
      if (isOnboarded) {
        router.replace('/(game)/home');
      } else {
        router.replace('/onboarding');
      }
    });
  }, []);

  const eggTranslate = eggShake.interpolate({
    inputRange: [-10, 10],
    outputRange: [-10, 10],
  });

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.bgDark,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Egg with crack */}
      <Animated.View
        style={{
          transform: [{ scale: eggScale }, { translateX: eggTranslate }],
          opacity: eggOpacity,
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 120 }}>🥚</Text>
        <Animated.Text
          style={{
            fontSize: 48,
            position: 'absolute',
            top: 20,
            opacity: crackOpacity,
          }}
        >
          💥
        </Animated.Text>
      </Animated.View>

      {/* Title */}
      <Animated.View
        style={{
          opacity: titleOpacity,
          transform: [{ translateY: titleY }],
          alignItems: 'center',
          marginTop: 32,
        }}
      >
        <Text
          style={{
            fontFamily: 'Quicksand-Bold',
            fontSize: 42,
            color: COLORS.gold,
            letterSpacing: 2,
          }}
        >
          MathLems
        </Text>
        <Text
          style={{
            fontFamily: 'Quicksand-Regular',
            fontSize: 16,
            color: COLORS.textDim,
            marginTop: 8,
          }}
        >
          Aprèn matemàtiques amb en Lems 🐉
        </Text>
      </Animated.View>
    </View>
  );
}
