import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";
import apiClient from "@/src/api/client";
import { AppContext } from "@/src/context/AppContext";

export default function HomeScreen() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { state, dispatch } = useContext(AppContext);
  const theme = state.theme;

  // Professional Approach: Define colors once
  const isDark = theme === "dark";
  const colors = {
    background: isDark ? "#121212" : "#f5f5f5",
    card: isDark ? "#1e1e1e" : "#ffffff",
    text: isDark ? "#ffffff" : "#1a1a1a",
    subtext: isDark ? "#aaaaaa" : "#666666",
    primary: "#007AFF",
    border: isDark ? "#333333" : "#eeeeee",
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await apiClient.get("/posts");
      setData(res.data);
    } catch (err) {
      console.error("API Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const renderPost = ({ item }: { item: any }) => (
    <View style={[styles.card, { backgroundColor: colors.card }]}>
      <Text style={[styles.postTitle, { color: colors.text }]}>
        {item.id}. {item.title}
      </Text>
      <View style={[styles.separator, { backgroundColor: colors.border }]} />
      <Text style={[styles.postBody, { color: colors.subtext }]}>
        {item.body}
      </Text>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.headerText, { color: colors.text }]}>
          Mode: <Text style={{ color: colors.primary }}>{theme.toUpperCase()}</Text>
        </Text>
        
        {/* Professional Button using TouchableOpacity */}
        <TouchableOpacity 
          style={[styles.themeBtn, { backgroundColor: colors.primary }]}
          onPress={() => dispatch({ type: "TOGGLE_THEME" })}
        >
          <Text style={styles.btnText}>Switch Theme</Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <View style={styles.center}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      ) : (
        <FlatList
          data={data}
          renderItem={renderPost}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContainer}
          ListHeaderComponent={
            <Text style={[styles.title, { color: colors.text }]}>Feed</Text>
          }
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20
  },
  headerText: {
    fontSize: 16,
    fontWeight: '600'
  },
  themeBtn: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    elevation: 2,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12
  },
  listContainer: {
    paddingHorizontal: 15,
    paddingBottom: 40,
  },
  title: {
    fontWeight: "800",
    fontSize: 32,
    marginBottom: 20,
    textAlign: "left",
  },
  card: {
    width: "100%",
    padding: 20,
    marginBottom: 16,
    borderRadius: 16,
    // Shadows for premium look
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "capitalize",
    lineHeight: 24,
  },
  separator: {
    height: 1,
    marginVertical: 12,
  },
  postBody: {
    fontSize: 14,
    lineHeight: 22,
    textAlign: "left",
  },
});