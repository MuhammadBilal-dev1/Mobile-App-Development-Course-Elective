import React, { createContext, useContext, useState, useEffect } from 'react';
import { Appearance } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ThemeContext = createContext({
  isDark: true,
  toggleTheme: (value: boolean) => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // App khulne par saved theme load karein
    AsyncStorage.getItem('user_theme').then(theme => {
      if (theme) {
        const dark = theme === 'dark';
        setIsDark(dark);
        Appearance.setColorScheme(dark ? 'dark' : 'light');
      }
    });
  }, []);

  const toggleTheme = (value: boolean) => {
    setIsDark(value);
    Appearance.setColorScheme(value ? 'dark' : 'light');
    AsyncStorage.setItem('user_theme', value ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook
export const useTheme = () => useContext(ThemeContext);