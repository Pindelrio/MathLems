import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '@/constants/theme';

export const AVATARS = [
  { id: 'wizard',   name: 'Mag',        emoji: '🧙‍♂️' },
  { id: 'witch',    name: 'Bruixa',     emoji: '🧙‍♀️' },
  { id: 'knight',   name: 'Cavaller',   emoji: '🛡️' },
  { id: 'elf',      name: 'Elfa',       emoji: '🧝‍♀️' },
  { id: 'monster',  name: 'Monstre',    emoji: '👾' },
  { id: 'dragon',   name: 'Drac',       emoji: '🐲' },
];

interface AvatarPickerProps {
  selected: string;
  onSelect: (id: string) => void;
}

export default function AvatarPicker({ selected, onSelect }: AvatarPickerProps) {
  return (
    <View style={styles.grid}>
      {AVATARS.map((av) => {
        const isSelected = av.id === selected;
        return (
          <TouchableOpacity
            key={av.id}
            onPress={() => onSelect(av.id)}
            style={[styles.card, isSelected && styles.cardSelected]}
            activeOpacity={0.7}
          >
            <Text style={styles.emoji}>{av.emoji}</Text>
            <Text style={[styles.name, isSelected && styles.nameSelected]}>
              {av.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
  },
  card: {
    width: 100,
    height: 100,
    borderRadius: 16,
    backgroundColor: COLORS.bgMid,
    borderWidth: 2,
    borderColor: COLORS.bgLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardSelected: {
    borderColor: COLORS.gold,
    backgroundColor: COLORS.bgLight,
  },
  emoji: {
    fontSize: 36,
  },
  name: {
    fontFamily: 'Quicksand-SemiBold',
    fontSize: 11,
    color: COLORS.textDim,
    marginTop: 4,
  },
  nameSelected: {
    color: COLORS.gold,
  },
});
