import React, { useContext } from 'react';
import { Image } from 'expo-image';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Stack } from 'expo-router';

import { Collapsible } from '@/components/ui/collapsible';
import { ExternalLink } from '@/components/external-link';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';
import { AppContext } from '@/src/context/AppContext';

export default function TabTwoScreen() {
  const { state } = useContext(AppContext);
  const isDark = state.theme === 'dark';

  // Professional Color Palette
  const colors = {
    background: isDark ? '#121212' : '#F5F7FA',
    card: isDark ? '#1E1E1E' : '#FFFFFF',
    text: isDark ? '#FFFFFF' : '#1A1A1A',
    subText: isDark ? '#AAAAAA' : '#64748B',
    headerIcon: isDark ? '#333333' : '#CBD5E1',
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      {/* 1. Upar wala extra white header khatam karne ke liye */}
      <Stack.Screen options={{ headerShown: false }} />

      <ParallaxScrollView
        headerBackgroundColor={{ light: '#D1D5DB', dark: '#1E1E1E' }}
        headerImage={
          <IconSymbol
            size={310}
            color={colors.headerIcon}
            name="chevron.left.forwardslash.chevron.right"
            style={styles.headerImage}
          />
        }>
        
        {/* Title Section */}
        <View style={styles.titleContainer}>
          <ThemedText
            type="title"
            style={{
              fontFamily: Fonts.rounded,
              color: colors.text,
              fontSize: 32,
            }}>
            Explore
          </ThemedText>
        </View>

        <ThemedText style={{ color: colors.subText, fontSize: 16, lineHeight: 24, marginBottom: 20 }}>
          Welcome to your professional development hub. All components here are fully synced with your global theme.
        </ThemedText>

        {/* 2. Content Sections with proper spacing */}
        <View style={styles.contentGap}>
          <Collapsible title="Project Architecture">
            <ThemedText style={{ color: colors.text, opacity: 0.8 }}>
              Your Project using <ThemedText type="defaultSemiBold" style={{color: colors.text}}>AppContext</ThemedText>. 
              on changing theme your logic will be synced across all screens and components seamlessly.
            </ThemedText>
          </Collapsible>

          <Collapsible title="Asset Management">
            <ThemedText style={{ color: colors.text, opacity: 0.8 }}>
              Images are handled via <ThemedText type="defaultSemiBold" style={{color: colors.text}}>expo-image</ThemedText> for better caching and performance.
            </ThemedText>
            <View style={styles.imageContainer}>
              <Image
                source={require('@/assets/images/react-logo.png')}
                style={styles.reactLogo}
              />
            </View>
          </Collapsible>

          <Collapsible title="Native Animations">
            <ThemedText style={{ color: colors.text, opacity: 0.8 }}>
              Experience fluid 60FPS UI transitions using the power of <ThemedText type="defaultSemiBold" style={{color: colors.text}}>Reanimated</ThemedText>.
            </ThemedText>
          </Collapsible>
        </View>

        {/* Footer Link */}
        <ExternalLink href="https://docs.expo.dev/router/introduction" style={styles.linkButton}>
          <ThemedText type="link" style={{ fontWeight: '600' }}>Explore Documentation</ThemedText>
        </ExternalLink>
        
        <View style={{ height: 40 }} /> 
      </ParallaxScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    marginBottom: 12,
    marginTop: 10,
  },
  contentGap: {
    gap: 16,
  },
  imageContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.03)',
    borderRadius: 12,
    marginTop: 10,
  },
  reactLogo: {
    width: 100,
    height: 100,
  },
  linkButton: {
    marginTop: 30,
    padding: 16,
    alignItems: 'center',
    backgroundColor: 'rgba(0,122,255,0.1)',
    borderRadius: 12,
  },
});