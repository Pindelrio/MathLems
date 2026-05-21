import { useRef } from 'react';
import { TouchableOpacity, Text, Animated, StyleSheet } from 'react-native';
import { COLORS } from '@/constants/theme';

interface AnswerOptionProps {
  content: string;
  state: 'default' | 'correct' | 'wrong' | 'disabled';
  onPress: () => void;
}

export default function AnswerOption({ content, state, onPress }: AnswerOptionProps) {
  const scale = useRef(new Animated.Value(1)).current;

  function handlePress() {
    Animated.sequence([
      Animated.timing(scale, { toValue: 0.93, duration: 80, useNativeDriver: true }),
      Animated.timing(scale, { toValue: 1,    duration: 120, useNativeDriver: true }),
    ]).start();
    onPress();
  }

  const bgColor =
    state === 'correct'  ? COLORS.green :
    state === 'wrong'    ? COLORS.red :
    state === 'disabled' ? COLORS.bgMid :
    COLORS.bgLight;

  const borderColor =
    state === 'correct'  ? COLORS.greenLight :
    state === 'wrong'    ? COLORS.fire :
    state === 'disabled' ? COLORS.bgLight :
    COLORS.purple;

  return (
    <Animated.View style={{ transform: [{ scale }] }}>
      <TouchableOpacity
        style={[styles.option, { backgroundColor: bgColor, borderColor }]}
        onPress={handlePress}
        disabled={state !== 'default'}
        activeOpacity={0.8}
      >
        <Text style={styles.text}>{content}</Text>
        {state === 'correct' && <Text style={styles.badge}>✓</Text>}
        {state === 'wrong'   && <Text style={styles.badge}>✗</Text>}
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 14,
    borderWidth: 2,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginVertical: 6,
  },
  text: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 18,
    color: COLORS.text,
  },
  badge: { fontSize: 20 },
});
