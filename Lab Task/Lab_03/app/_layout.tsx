import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useContext } from 'react'; // ✅ Import useContext
import AppProvider from '../src/context/AppProvider'; 
import { AppContext } from '../src/context/AppContext'; // ✅ Import AppContext

export default function RootLayout() {
  return (
    <AppProvider>
      <RootContent />
    </AppProvider>
  );
}

// ✅ Separate component taake useContext context provider ke andar chale
function RootContent() {
  const context = useContext(AppContext);
  
  // Pehle check karein ke context null toh nahi
  const theme = context?.state?.theme ?? 'light';

  return (
    <ThemeProvider value={theme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
    </ThemeProvider>
  );
}