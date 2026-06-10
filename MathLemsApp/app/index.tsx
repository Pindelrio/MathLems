import { useEffect, useRef } from 'react';
import { View, Text, Image, Animated, Easing } from 'react-native';
import { router } from 'expo-router';
import { usePlayerStore } from '@/store/playerStore';
import { COLORS } from '@/constants/theme';

const LEMS_IMG = require('@/assets/lems-mascot2.png');

export default function SplashScreen() {
  const isOnboarded = usePlayerStore((s) => s.isOnboarded);

  const eggScale     = useRef(new Animated.Value(0)).current;
  const eggOpacity   = useRef(new Animated.Value(0)).current;
  const eggShake     = useRef(new Animated.Value(0)).current;
  const crackOpacity = useRef(new Animated.Value(0)).current;
  const lemsScale    = useRef(new Animated.Value(0)).current;
  const lemsOpacity  = useRef(new Animated.Value(0)).current;
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
      // Ou apareix
      Animated.parallel([
        Animated.timing(eggScale,   { toValue: 1, duration: 600, easing: Easing.out(Easing.back(2)), useNativeDriver: true }),
        Animated.timing(eggOpacity, { toValue: 1, duration: 400, useNativeDriver: true }),
      ]),
      Animated.delay(400),
      // Ou tremola
      shake,
      Animated.delay(200),
      shake,
      Animated.delay(300),
      // Esquerda apareix + última tremolada
      Animated.parallel([
        Animated.timing(crackOpacity, { toValue: 1, duration: 200, useNativeDriver: true }),
        shake,
      ]),
      Animated.delay(300),
      // Ou desapareix → Lems surt
      Animated.parallel([
        Animated.timing(eggOpacity, { toValue: 0, duration: 350, useNativeDriver: true }),
        Animated.spring(lemsScale,  { toValue: 1, friction: 4, tension: 80, useNativeDriver: true }),
        Animated.timing(lemsOpacity,{ toValue: 1, duration: 350, useNativeDriver: true }),
      ]),
      Animated.delay(250),
      // Títol apareix
      Animated.parallel([
        Animated.timing(titleOpacity, { toValue: 1, duration: 600, useNativeDriver: true }),
        Animated.timing(titleY, { toValue: 0, duration: 600, easing: Easing.out(Easing.cubic), useNativeDriver: true }),
      ]),
      Animated.delay(1000),
    ]).start(() => {
      if (isOnboarded) {
        router.replace('/planet-select');
      } else {
        router.replace('/intro');
      }
    });
  }, []);

  const eggTranslate = eggShake.interpolate({
    inputRange: [-10, 10],
    outputRange: [-10, 10],
  });

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.bgDark, alignItems: 'center', justifyContent: 'center' }}>

      {/* Contenidor ou + Lems (mateixa posició, solapats) */}
      <View style={{ width: 180, height: 180, alignItems: 'center', justifyContent: 'center' }}>

        {/* Ou amb esquerda */}
        <Animated.View
          style={{
            position: 'absolute',
            transform: [{ scale: eggScale }, { translateX: eggTranslate }],
            opacity: eggOpacity,
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 120 }}>🥚</Text>
          <Animated.Text style={{ fontSize: 48, position: 'absolute', top: 20, opacity: crackOpacity }}>
            💥
          </Animated.Text>
        </Animated.View>

        {/* Lems surt de l'ou */}
        <Animated.View
          style={{
            position: 'absolute',
            opacity: lemsOpacity,
            transform: [{ scale: lemsScale }],
          }}
        >
          <Image source={LEMS_IMG} style={{ width: 160, height: 179 }} resizeMode="contain" />
        </Animated.View>

      </View>

      {/* Títol */}
      <Animated.View
        style={{
          opacity: titleOpacity,
          transform: [{ translateY: titleY }],
          alignItems: 'center',
          marginTop: 28,
        }}
      >
        <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 42, color: COLORS.gold, letterSpacing: 2 }}>
          MathLems
        </Text>
        <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 16, color: COLORS.textDim, marginTop: 8 }}>
          Aprèn matemàtiques amb en Lems 🐉
        </Text>
      </Animated.View>
    </View>
  );
}
