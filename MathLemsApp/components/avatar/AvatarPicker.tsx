import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { COLORS } from '@/constants/theme';
import { AVATAR_BASES } from '@/features/avatar/data/bases';
import { composeAvatar } from '@/features/avatar/engine/composer';
import AvatarRenderer from '@/features/avatar/components/AvatarRenderer';

interface AvatarPickerProps {
  selected: string;
  onSelect: (id: string) => void;
}

export default function AvatarPicker({ selected, onSelect }: AvatarPickerProps) {
  return (
    <ScrollView
      horizontal={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.grid}
    >
      {AVATAR_BASES.map((base) => {
        const isSelected = base.id === selected;
        const composed = composeAvatar(base, {}, []);
        return (
          <TouchableOpacity
            key={base.id}
            onPress={() => onSelect(base.id)}
            style={[styles.card, isSelected && styles.cardSelected]}
            activeOpacity={0.7}
          >
            <View style={styles.svgWrapper}>
              <AvatarRenderer avatar={composed} size={68} />
            </View>
            <Text style={[styles.name, isSelected && styles.nameSelected]}>
              {base.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
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
    width: 96,
    height: 110,
    borderRadius: 16,
    backgroundColor: COLORS.bgMid,
    borderWidth: 2,
    borderColor: COLORS.bgLight,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    gap: 6,
  },
  cardSelected: {
    borderColor: COLORS.gold,
    backgroundColor: COLORS.bgLight,
  },
  svgWrapper: {
    width: 68,
    height: 68,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontFamily: 'Quicksand-SemiBold',
    fontSize: 11,
    color: COLORS.textDim,
    textAlign: 'center',
  },
  nameSelected: {
    color: COLORS.gold,
  },
});
