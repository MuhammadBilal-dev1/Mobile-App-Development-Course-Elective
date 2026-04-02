import { Tabs } from "expo-router";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "../../context/ThemeContext";
import { Colors } from "../../constants/Colors";

export default function TabLayout() {
  const { isDark } = useTheme();
  const theme = isDark ? Colors.dark : Colors.light;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.card, 
          borderTopColor: isDark ? "#333" : "#f1f1f1",
        },
        tabBarActiveTintColor: theme.tint,
        tabBarInactiveTintColor: "#888",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={"home"} color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="projects"
        options={{
          title: "Portfolio",
          tabBarIcon: ({ color }) => (
            <Feather name="briefcase" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <Feather name="settings" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
