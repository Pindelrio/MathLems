import { View, Text, StyleSheet } from 'react-native';

interface LivesBarProps {
  lives: number;
  maxLives?: number;
}

export default function LivesBar({ lives, maxLives = 5 }: LivesBarProps) {
  return (
    <View style={styles.row}>
      {Array.from({ length: maxLives }).map((_, i) => (
        <Text key={i} style={styles.heart}>
          {i < lives ? '❤️' : '🖤'}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: 4 },
  heart: { fontSize: 20 },
});
