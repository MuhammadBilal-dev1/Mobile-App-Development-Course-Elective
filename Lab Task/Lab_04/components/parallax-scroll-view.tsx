import { useContext, type PropsWithChildren, ReactElement } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { interpolate, useAnimatedRef, useAnimatedStyle, useScrollOffset } from 'react-native-reanimated';
import { AppContext } from '@/src/context/AppContext'; // ✅ Context Import

const HEADER_HEIGHT = 250;

type Props = PropsWithChildren<{
  headerImage: ReactElement;
  headerBackgroundColor: { dark: string; light: string };
}>;

export default function ParallaxScrollView({ children, headerImage, headerBackgroundColor }: Props) {
  const { state } = useContext(AppContext); // ✅ Global theme lein
  const isDark = state.theme === 'dark';
  const colorScheme = state.theme;

  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollOffset(scrollRef);

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: interpolate(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]) },
        { scale: interpolate(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [2, 1, 1]) },
      ],
    };
  });

  return (
    <View style={{ flex: 1, backgroundColor: isDark ? '#121212' : '#f5f5f5' }}>
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
        <Animated.View
          style={[
            styles.header,
            { backgroundColor: headerBackgroundColor[colorScheme as 'light' | 'dark'] },
            headerAnimatedStyle,
          ]}>
          {headerImage}
        </Animated.View>
        <View style={[styles.content, { backgroundColor: isDark ? '#121212' : '#f5f5f5' }]}>
          {children}
        </View>
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { height: HEADER_HEIGHT, overflow: 'hidden' },
  content: { flex: 1, padding: 32, gap: 16 },
});