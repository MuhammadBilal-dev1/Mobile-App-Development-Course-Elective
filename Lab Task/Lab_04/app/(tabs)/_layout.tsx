import { Tabs } from 'expo-router';
import React, { useContext } from 'react';
import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { AppContext } from '@/src/context/AppContext'; // ✅ Context import karein

export default function TabLayout() {
  const { state } = useContext(AppContext); // ✅ Global theme lein
  const theme = state.theme; 
  const isDark = theme === 'dark';

  return (
    <Tabs
      screenOptions={{
        // ✅ Colors switch based on global context
        tabBarActiveTintColor: isDark ? '#ffffff' : Colors.light.tint,
        sceneContainerStyle: { backgroundColor: isDark ? '#121212' : '#f5f5f5' },
        tabBarStyle: {
          backgroundColor: isDark ? '#121212' : '#ffffff',
          borderTopColor: isDark ? '#333333' : '#eeeeee',
        },
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Data',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="tasks"
        options={{
          title: 'Tasks',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="checkmark.circle" color={color} />,
        }}
      />
    </Tabs>
  );
}