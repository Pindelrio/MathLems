import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import AvatarEditor from '@/features/avatar/components/AvatarEditor';
import { COLORS, FONTS, SIZES } from '@/constants/theme';

export default function AvatarEditorScreen() {
  const router = useRouter();

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backTxt}>← Tornar</Text>
        </TouchableOpacity>
        <Text style={styles.title}>El Meu Avatar</Text>
        <View style={styles.backBtn} />
      </View>
      <AvatarEditor />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.bgDark,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 56,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.bgLight,
  },
  backBtn: {
    width: 80,
  },
  backTxt: {
    fontFamily: FONTS.semibold,
    fontSize: SIZES.sm,
    color: COLORS.textDim,
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.lg,
    color: COLORS.gold,
  },
});
