import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, ScrollView } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useTheme } from "../../context/ThemeContext";
import { Colors } from "../../constants/Colors";

export default function SettingsScreen() {
  const { isDark, toggleTheme } = useTheme();
  const theme = isDark ? Colors.dark : Colors.light;

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.header, { color: theme.text }]}>Settings</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Appearance</Text>
        <View style={[styles.card, { backgroundColor: theme.card }]}>
          <View style={styles.row}>
            <View style={styles.rowLeft}>
              <View style={[styles.iconBox, { backgroundColor: '#5856D6' }]}>
                <Ionicons name="moon" size={20} color="white" />
              </View>
              <Text style={[styles.rowText, { color: theme.text }]}>Dark Mode</Text>
            </View>
            <Switch
              trackColor={{ false: '#767577', true: '#34C759' }}
              thumbColor={isDark ? '#fff' : '#f4f3f4'}
              onValueChange={toggleTheme}
              value={isDark}
            />
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <View style={[styles.card, { backgroundColor: theme.card }]}>
          <TouchableOpacity style={styles.row}>
            <View style={styles.rowLeft}>
              <View style={[styles.iconBox, { backgroundColor: '#007AFF' }]}>
                <Ionicons name="person" size={20} color="white" />
              </View>
              <Text style={[styles.rowText, { color: theme.text }]}>Edit Profile</Text>
            </View>
            <Feather name="chevron-right" size={20} color="#ccc" />
          </TouchableOpacity>
          <View style={[styles.divider, { backgroundColor: isDark ? '#333' : '#f1f1f1' }]} />
          <TouchableOpacity style={styles.row}>
            <View style={styles.rowLeft}>
              <View style={[styles.iconBox, { backgroundColor: '#FF3B30' }]}>
                <Ionicons name="log-out" size={20} color="white" />
              </View>
              <Text style={[styles.rowText, { color: theme.text }]}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20, paddingTop: 60 },
  header: { fontSize: 28, fontWeight: '800', marginBottom: 25 },
  section: { marginBottom: 25 },
  sectionTitle: { fontSize: 13, color: '#888', fontWeight: '700', textTransform: 'uppercase', marginBottom: 10, letterSpacing: 1 },
  card: { borderRadius: 20, paddingVertical: 5, paddingHorizontal: 15, elevation: 2, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 10 },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 12 },
  rowLeft: { flexDirection: 'row', alignItems: 'center' },
  iconBox: { width: 32, height: 32, borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  rowText: { fontSize: 16, fontWeight: '500' },
  divider: { height: 1, marginLeft: 44 }
});