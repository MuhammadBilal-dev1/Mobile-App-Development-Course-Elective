import { PropsWithChildren, useState, useContext } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { AppContext } from '@/src/context/AppContext'; // ✅ Context Import

export function Collapsible({ children, title }: PropsWithChildren<{ title: string }>) {
  const [isOpen, setIsOpen] = useState(false);
  const { state } = useContext(AppContext); // ✅ Global theme lein
  const isDark = state.theme === 'dark';

  // Dynamic Colors setup
  const colors = {
    headerBg: isDark ? '#1E1E1E' : '#E2E8F0', // Light mode mein light gray background
    text: isDark ? '#FFFFFF' : '#1A1A1A',
    icon: isDark ? '#808080' : '#64748B'
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.heading, { backgroundColor: colors.headerBg }]} // ✅ Dynamic header color
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}>
        <IconSymbol
          name="chevron.right"
          size={18}
          weight="medium"
          color={colors.icon}
          style={{ transform: [{ rotate: isOpen ? '90deg' : '0deg' }] }}
        />
        <ThemedText type="defaultSemiBold" style={{ color: colors.text }}>{title}</ThemedText>
      </TouchableOpacity>
      
      {isOpen && (
        <View style={[styles.content, { backgroundColor: isDark ? '#1A1A1A' : '#F8FAFC' }]}>
          {children}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 8,
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 14,
  },
  content: {
    padding: 16,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
});