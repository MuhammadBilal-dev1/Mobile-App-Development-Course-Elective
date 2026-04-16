import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme, View } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme(); 
  const isDark = colorScheme === 'dark';

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ff9500',
        tabBarInactiveTintColor: isDark ? '#888' : '#555',
        tabBarStyle: {
          backgroundColor: isDark ? '#1c1c1e' : '#fff', 
          borderTopColor: isDark ? '#333' : '#e5e5e5',
          height: 60,
          paddingBottom: 8,
        },
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Calculator',
          tabBarIcon: ({ color }) => <Ionicons name="calculator" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <Ionicons name="settings" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}