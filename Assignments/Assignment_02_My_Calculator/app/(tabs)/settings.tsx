import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Switch, TouchableOpacity, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';

export default function SettingsScreen() {
  const [history, setHistory] = useState([]);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const getData = async () => {
      const savedHistory = await AsyncStorage.getItem('calc_history');
      if (savedHistory) setHistory(JSON.parse(savedHistory));
    };
    getData();
  }, [history]); 

  const clearHistory = async () => {
    await AsyncStorage.removeItem('calc_history');
    setHistory([]);
  };

  const themeColor = isDark ? '#fff' : '#000';
  const cardBg = isDark ? '#1c1c1e' : '#f2f2f7';

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDark ? '#000' : '#fff' }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: themeColor }]}>Settings & History</Text>
      </View>

      {/* Theme Section Card */}
      <View style={[styles.card, { backgroundColor: cardBg }]}>
        <View style={styles.row}>
          <View style={styles.iconLabel}>
            <Ionicons name={isDark ? "moon" : "sunny"} size={22} color="#ff9500" />
            <Text style={[styles.label, { color: themeColor }]}>Appearance</Text>
          </View>
          <Switch 
            value={isDark} 
            onValueChange={toggleTheme}
            trackColor={{ false: "#767577", true: "#ff9500" }}
          />
        </View>
        <Text style={styles.description}>Currently set to {isDark ? 'Dark' : 'Light'} Mode</Text>
      </View>

      {/* History Header */}
      <View style={styles.sectionHeader}>
        <Text style={styles.subtitle}>RECENT CALCULATIONS</Text>
        <TouchableOpacity onPress={clearHistory}>
          <Text style={styles.clearBtn}>Clear All</Text>
        </TouchableOpacity>
      </View>

      {/* History List */}
      <FlatList
        data={history}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="receipt-outline" size={50} color="#888" />
            <Text style={styles.emptyText}>No recent calculations</Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={[styles.historyCard, { backgroundColor: cardBg }]}>
            {/* @ts-ignore */}
            <Text style={styles.historyItem}>{item.split('=')[0]}</Text>
            {/* @ts-ignore */}
            <Text style={styles.historyResult}>= {item.split('=')[1]}</Text>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20 },
  header: { marginTop: 40, marginBottom: 20 },
  title: { fontSize: 32, fontWeight: 'bold' },
  card: {
    padding: 16,
    borderRadius: 15,
    marginBottom: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  iconLabel: { flexDirection: 'row', alignItems: 'center' },
  label: { fontSize: 18, fontWeight: '600', marginLeft: 10 },
  description: { color: '#888', marginTop: 5, fontSize: 12 },
  sectionHeader: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginBottom: 15 
  },
  subtitle: { color: '#888', fontSize: 13, fontWeight: 'bold', letterSpacing: 1 },
  clearBtn: { color: '#ff453a', fontWeight: '600' },
  historyCard: {
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  historyItem: { color: '#888', fontSize: 16 },
  historyResult: { color: '#ff9500', fontSize: 18, fontWeight: 'bold' },
  emptyContainer: { alignItems: 'center', marginTop: 50 },
  emptyText: { color: '#888', marginTop: 10, fontSize: 16 }
});