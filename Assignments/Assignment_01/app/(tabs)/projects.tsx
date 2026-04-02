import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, StatusBar } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons'; 
import { useTheme } from "../../context/ThemeContext";
import { Colors } from "../../constants/Colors";

const PROJECTS = [
  { id: '1', title: 'Cinema Streaming Platform', tech: 'React Native, Node.js, AWS', icon: 'play-circle' },
  { id: '2', title: 'Foodi Delivery Enterprise', tech: 'MERN, Kubernetes, Stripe', icon: 'shopping-bag' },
  { id: '3', title: 'Real-time Chat Engine', tech: 'Socket.io, Go, Redis', icon: 'message-square' },
  { id: '4', title: 'Fintech Dashboard', tech: 'React Native, Python, GraphQL', icon: 'bar-chart-2' },
];

export default function PremiumPortfolioScreen() {
  const { isDark } = useTheme();
  const theme = isDark ? Colors.dark : Colors.light;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar barStyle={isDark ? "light-content" : "dark-content"} backgroundColor={theme.background} />
      
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerSectionTitle}>MY WORKS</Text>
          <Text style={[styles.headerMainTitle, { color: theme.text }]}>Featured Projects</Text>
        </View>
        <TouchableOpacity style={[styles.headerActionButton, { backgroundColor: isDark ? '#333' : 'rgba(0,0,0,0.03)' }]}>
          <Feather name="search" size={20} color={isDark ? "#ccc" : "#777"} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={PROJECTS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity style={[styles.projectCard, { backgroundColor: theme.card }]}>
            <View style={[styles.iconWrapper, { backgroundColor: isDark ? 'rgba(10, 132, 255, 0.15)' : 'rgba(0,122,255,0.06)' }]}>
              {/* @ts-ignore */}
              <Feather name={item.icon} size={24} color={theme.tint} />
            </View>
            
            <View style={styles.projectInfo}>
              <Text style={[styles.projectTitle, { color: theme.text }]}>{item.title}</Text>
              <View style={styles.techTag}>
                 <Ionicons name="code-working-outline" size={12} color={isDark ? "#aaa" : "#888"} style={{marginRight:4}} />
                 <Text style={[styles.projectTech, { color: isDark ? "#aaa" : "#888" }]}>{item.tech}</Text>
              </View>
            </View>
            
            <Feather name="chevron-right" size={20} color={isDark ? "#555" : "#ccc"} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 25, paddingTop: 60 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30 },
  headerLeft: { flex: 1 },
  headerSectionTitle: { fontSize: 12, color: '#007AFF', letterSpacing: 2, fontWeight: '800', textTransform: 'uppercase', marginBottom: 4 },
  headerMainTitle: { fontSize: 28, fontWeight: '800', letterSpacing: 0.5 },
  headerActionButton: { padding: 10, borderRadius: 15 },
  listContent: { paddingBottom: 20 },
  projectCard: { flexDirection: 'row', alignItems: 'center', padding: 20, borderRadius: 25, marginBottom: 18, elevation: 8, shadowColor: '#000', shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.08, shadowRadius: 10 },
  iconWrapper: { width: 60, height: 60, borderRadius: 18, justifyContent: 'center', alignItems: 'center', marginRight: 18 },
  projectInfo: { flex: 1 },
  projectTitle: { fontSize: 17, fontWeight: '700', letterSpacing: 0.2 },
  techTag: { flexDirection: 'row', alignItems: 'center', marginTop: 6 },
  projectTech: { fontSize: 13, fontWeight: '500' },
});